import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import {
  computeBehaviorScore,
  getElapsedMinutes,
  getSession,
  getTracker,
  setTrackerField,
} from "@/lib/visitor-tracker";
import { submitLead } from "@/lib/leads";
import { buildLeadDescription } from "@/lib/odoo";

type Role = "user" | "assistant";
interface Msg {
  role: Role;
  content: string;
}

const VALID_ROUTES = new Set([
  "/", "/odoo-erp", "/odoo-crm-ventes", "/odoo-finance-comptabilite",
  "/odoo-stock-inventaire", "/odoo-production-fabrication", "/odoo-rh-paie",
  "/odoo-services-professionnels", "/odoo-horeca-maroc", "/odoo-btp-maroc",
  "/odoo-sante-maroc", "/odoo-gestion-stock-maroc", "/odoo-transport-logistique-maroc",
  "/creation-web", "/marketing-digital", "/realisations", "/tarifs", "/a-propos",
  "/contact", "/consultant-odoo-belgique", "/tarif-odoo-belgique",
  "/pme-en-structuration", "/entreprise-multi-sites", "/structure-en-croissance",
  "/blog", "/prendre-rendez-vous",
]);

const SCORE_PATTERNS: Array<{ regex: RegExp; points: number; key: string }> = [
  { key: "urgence", regex: /\b(urgent|rapidement|vite|pressé|asap|deadline)\b/i, points: 4 },
  { key: "budget", regex: /\b(budget|prix|coût|tarif|combien|devis|€|mad)\b/i, points: 3 },
  { key: "taille", regex: /\b(salarié|employé|chiffre d'affaires|\bca\b|croissance)\b/i, points: 2 },
  { key: "recherche", regex: /\b(cherch|besoin|changer|migrer|remplacer|nouveau partenaire)\b/i, points: 3 },
  { key: "structure", regex: /\b(srl|sa|sprl|sasu|sarl|société|indépendant)\b/i, points: 2 },
  { key: "fonctionnel", regex: /\b(odoo|crm|erp|stock|facturation|comptabilité|rh|paie|production)\b/i, points: 3 },
  { key: "web", regex: /\b(site web|site internet|wordpress|react|landing|refonte)\b/i, points: 3 },
  { key: "marketing", regex: /\b(seo|geo|ads|google ads|marketing|acquisition|leads)\b/i, points: 3 },
];

const PROFANITY = /\b(connard|salope|merde|fdp|encul|putain|pute)\b/i;

const PROACTIVE_MESSAGES: Record<string, string> = {
  "/": "Bonjour 👋 Une question sur Odoo, votre site ou votre stratégie marketing ?",
  "/tarifs": "Vous comparez nos packs ? Je peux vous aider à choisir le bon en 2 minutes.",
  "/odoo-erp": "Curieux d'Odoo pour votre PME ? Dites-moi votre secteur, je vous oriente.",
  "/creation-web": "Un projet de site web ? Je peux vous chiffrer ça rapidement.",
  "/marketing-digital": "Vous voulez plus de leads ? On peut auditer votre acquisition gratuitement.",
  "/realisations": "Une référence vous intéresse ? Je peux vous mettre en contact.",
  "/blog": "Un sujet du blog vous parle ? Dites-moi votre situation, je vous oriente.",
  "/contact": "Avant d'envoyer un message — je peux peut-être répondre tout de suite ?",
  "/odoo-horeca-maroc": "Restaurant, hôtel, café ? Je vous décris la solution HORECA en 2 min.",
  "/odoo-btp-maroc": "Chantier, marchés publics, RH ? Notre solution BTP est éprouvée.",
  "/consultant-odoo-belgique": "Vous cherchez un consultant Odoo certifié en Belgique ?",
};

const SUGGESTIONS: Record<string, string[]> = {
  "/": [
    "Combien coûte Odoo pour une PME ?",
    "Je veux refaire mon site web",
    "Booster mon SEO",
  ],
  "/tarifs": [
    "Quel pack pour 10 salariés ?",
    "Différence entre les packs ?",
    "Réserver un échange",
  ],
  "/odoo-erp": [
    "Combien de temps pour déployer Odoo ?",
    "Migration depuis Excel ?",
    "Voir les tarifs",
  ],
  "/creation-web": [
    "Combien coûte un site React ?",
    "Délai de livraison ?",
    "Différence React vs WordPress",
  ],
  "/marketing-digital": [
    "C'est quoi le GEO ?",
    "Audit SEO gratuit ?",
    "Combien coûte une campagne ?",
  ],
  default: [
    "Présentez-moi MSL-iTECH",
    "Voir les tarifs",
    "Réserver un échange",
  ],
};

const EXIT_MESSAGES: Record<string, string> = {
  "/tarifs": "Avant de partir — un échange 30 min pour valider le bon pack ?",
  "/creation-web": "Un projet web ? Je peux vous chiffrer ça en 2 minutes.",
  default: "Avant de partir — une question rapide ? Je suis là.",
};

function sanitizeLinks(markdown: string): string {
  // Remplace tout lien interne hors whitelist par /contact
  return markdown.replace(/\]\((\/[^)]*)\)/g, (_, url) => {
    const path = String(url).split("?")[0].split("#")[0].replace(/\/$/, "") || "/";
    return VALID_ROUTES.has(path) ? `](${url})` : `](/contact)`;
  });
}

function extractEmail(text: string): string | null {
  const m = text.match(/[\w.+-]+@[\w-]+\.[\w.-]+/);
  return m ? m[0] : null;
}

function extractPrenom(text: string): string | null {
  const m =
    text.match(/je m'appelle\s+([A-ZÀ-Ý][\wÀ-ÿ-]+)/i) ??
    text.match(/^([A-ZÀ-Ý][\wÀ-ÿ-]+)\s*[,.]/) ??
    null;
  return m ? m[1] : null;
}

function getPalierFromScore(score: number): "FROID" | "TIEDE" | "CHAUD" {
  if (score >= 12) return "CHAUD";
  if (score >= 5) return "TIEDE";
  return "FROID";
}

function suggestionsFor(pathname: string): string[] {
  const exact = SUGGESTIONS[pathname];
  if (exact) return exact;
  for (const key of Object.keys(SUGGESTIONS)) {
    if (key !== "default" && pathname.startsWith(key) && key !== "/") return SUGGESTIONS[key];
  }
  return SUGGESTIONS.default;
}

function proactiveFor(pathname: string): string {
  if (PROACTIVE_MESSAGES[pathname]) return PROACTIVE_MESSAGES[pathname];
  for (const key of Object.keys(PROACTIVE_MESSAGES)) {
    if (pathname.startsWith(key) && key !== "/") return PROACTIVE_MESSAGES[key];
  }
  return PROACTIVE_MESSAGES["/"];
}

function exitMsgFor(pathname: string): string {
  return EXIT_MESSAGES[pathname] ?? EXIT_MESSAGES.default;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chatbot`;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export default function ChatBot() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [proactiveSeen, setProactiveSeen] = useState(false);
  const [exitSeen, setExitSeen] = useState(false);
  const [conversationalScore, setConversationalScore] = useState(0);
  const [emailCaptured, setEmailCaptured] = useState(false);
  const matchedKeysRef = useRef<Set<string>>(new Set());
  const scrollerRef = useRef<HTMLDivElement>(null);

  const tracker = getTracker();
  const behaviorScore = computeBehaviorScore();
  const totalScore = behaviorScore + conversationalScore;
  const palier = getPalierFromScore(totalScore);
  const maxMessages = palier === "CHAUD" ? 6 : palier === "TIEDE" ? 10 : 15;
  const userMsgCount = messages.filter((m) => m.role === "user").length;
  const limitReached = userMsgCount >= maxMessages;

  const suggestions = useMemo(() => suggestionsFor(pathname), [pathname]);

  // Scroll au bas quand un message arrive
  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
    }
  }, [messages, open]);

  // Message proactif après 30s
  useEffect(() => {
    if (proactiveSeen || open) return;
    const t = window.setTimeout(() => {
      setProactiveSeen(true);
      setOpen(true);
      setMessages((prev) =>
        prev.length === 0
          ? [{ role: "assistant", content: proactiveFor(pathname) }]
          : prev,
      );
    }, 30000);
    return () => window.clearTimeout(t);
  }, [pathname, proactiveSeen, open]);

  // Exit-intent (desktop)
  useEffect(() => {
    if (exitSeen) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitSeen) {
        setExitSeen(true);
        setOpen(true);
        setMessages((prev) =>
          prev.length === 0
            ? [{ role: "assistant", content: exitMsgFor(pathname) }]
            : prev,
        );
      }
    };
    document.addEventListener("mouseout", handler);
    return () => document.removeEventListener("mouseout", handler);
  }, [pathname, exitSeen]);

  // Capture infos depuis les messages utilisateur
  const captureFromMessage = useCallback(
    (text: string) => {
      const email = extractEmail(text);
      const prenom = extractPrenom(text);
      const patch: Record<string, unknown> = {};
      if (email) patch.email = email;
      if (prenom) patch.prenom = prenom;
      if (Object.keys(patch).length > 0) setTrackerField(patch);

      // Score conversationnel (1x par pattern)
      let added = 0;
      for (const p of SCORE_PATTERNS) {
        if (!matchedKeysRef.current.has(p.key) && p.regex.test(text)) {
          matchedKeysRef.current.add(p.key);
          added += p.points;
        }
      }
      if (added > 0) setConversationalScore((s) => s + added);

      // Envoi CRM si email nouvellement capturé
      if (email && !emailCaptured) {
        setEmailCaptured(true);
        sendLeadToCrm(email, prenom ?? undefined).catch(console.error);
      }
    },
    [emailCaptured],
  );

  const sendLeadToCrm = useCallback(
    async (email: string, prenom?: string) => {
      const t = getTracker();
      const s = getSession();
      const total = behaviorScore + conversationalScore;
      const pal = getPalierFromScore(total);
      const conversation = messages
        .map((m) => `${m.role === "user" ? "Visiteur" : "Conseiller"}: ${m.content}`)
        .join("\n\n");

      await submitLead({
        name: prenom || t?.prenom || email.split("@")[0],
        email_from: email,
        contact_name: prenom || t?.prenom,
        source: `chatbot ${pathname}`,
        tag_names: ["chatbot", `palier-${pal.toLowerCase()}`],
        description: buildLeadDescription({
          "Lead Chatbot": `Palier ${pal} — Score total ${total} (comportemental ${behaviorScore} + conversationnel ${conversationalScore})`,
          "Page d'origine": pathname,
          "Pages vues": s.pages.join(" → "),
          "Visite n°": String(t?.visitCount ?? 1),
          "Temps sur site": `${getElapsedMinutes()} min`,
          "Source": t?.source ?? "direct",
          "Messages échangés": String(messages.length),
          "Résumé conversation": conversation,
        }),
      });
    },
    [messages, pathname, behaviorScore, conversationalScore],
  );

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isStreaming || limitReached) return;

      if (PROFANITY.test(trimmed)) {
        setMessages((prev) => [
          ...prev,
          { role: "user", content: trimmed },
          {
            role: "assistant",
            content: "Je préfère qu'on garde un échange respectueux 🙂 Reformulez votre question ?",
          },
        ]);
        setInput("");
        return;
      }

      captureFromMessage(trimmed);
      const userMsg: Msg = { role: "user", content: trimmed };
      const next = [...messages, userMsg];
      setMessages(next);
      setInput("");
      setIsStreaming(true);

      let assistantSoFar = "";
      const upsert = (chunk: string) => {
        assistantSoFar += chunk;
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === "assistant" && last.content !== "") {
            return prev.map((m, i) =>
              i === prev.length - 1 ? { ...m, content: sanitizeLinks(assistantSoFar) } : m,
            );
          }
          return [...prev, { role: "assistant", content: sanitizeLinks(assistantSoFar) }];
        });
      };

      try {
        const resp = await fetch(CHAT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_KEY}`,
          },
          body: JSON.stringify({
            messages: next.map(({ role, content }) => ({ role, content })),
            behaviorScore,
          }),
        });

        if (!resp.ok || !resp.body) {
          let msg = "Désolé, une erreur est survenue. Vous pouvez nous contacter directement.";
          if (resp.status === 429) msg = "Trop de messages d'un coup, réessayez dans quelques secondes.";
          if (resp.status === 402) msg = "Service temporairement indisponible. Contactez-nous : info@msl-itech.com";
          setMessages((prev) => [...prev, { role: "assistant", content: msg }]);
          setIsStreaming(false);
          return;
        }

        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let done = false;

        while (!done) {
          const { done: d, value } = await reader.read();
          if (d) break;
          buffer += decoder.decode(value, { stream: true });
          let nl: number;
          while ((nl = buffer.indexOf("\n")) !== -1) {
            let line = buffer.slice(0, nl);
            buffer = buffer.slice(nl + 1);
            if (line.endsWith("\r")) line = line.slice(0, -1);
            if (line.startsWith(":") || line.trim() === "") continue;
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6).trim();
            if (data === "[DONE]") {
              done = true;
              break;
            }
            try {
              const parsed = JSON.parse(data);
              const delta = parsed.choices?.[0]?.delta?.content as string | undefined;
              if (delta) upsert(delta);
            } catch {
              buffer = line + "\n" + buffer;
              break;
            }
          }
        }
      } catch (err) {
        console.error("Chatbot stream error:", err);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Je n'ai pas pu répondre. Essayez à nouveau ou écrivez-nous : info@msl-itech.com",
          },
        ]);
      } finally {
        setIsStreaming(false);
      }
    },
    [messages, isStreaming, limitReached, behaviorScore, captureFromMessage],
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  // Pré-remplissage RDV avec prénom + email si connus
  const rdvHref = useMemo(() => {
    const t = tracker;
    if (!t?.email && !t?.prenom) return "/prendre-rendez-vous";
    const params = new URLSearchParams();
    if (t.prenom) params.set("prenom", t.prenom);
    if (t.email) params.set("email", t.email);
    return `/prendre-rendez-vous?${params.toString()}`;
  }, [tracker]);

  return (
    <>
      {/* Bouton flottant */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          backgroundColor: "var(--gold)",
          color: "var(--blue)",
          boxShadow: "0 10px 30px -10px hsl(var(--ring) / 0.4), 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Panneau de chat */}
      {open && (
        <div
          className="fixed bottom-24 right-5 z-[60] flex w-[calc(100vw-2.5rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border bg-white shadow-2xl sm:max-h-[640px]"
          style={{
            borderColor: "rgba(0,0,0,0.08)",
            height: "min(640px, calc(100vh - 8rem))",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 text-white"
            style={{ backgroundColor: "var(--blue)" }}
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
            >
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-heading text-sm font-semibold leading-tight">Conseiller MSL-iTECH</p>
              <p className="text-[11px] opacity-80">Odoo · Web · Marketing — réponse en direct</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollerRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-brand-bg">
            {messages.length === 0 && (
              <div className="rounded-2xl bg-white px-3 py-2 text-sm text-brand-black shadow-sm border border-black/5">
                Bonjour 👋 Je suis le conseiller MSL-iTECH. Une question sur Odoo, votre site
                ou votre acquisition digitale ?
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                    m.role === "user"
                      ? "text-white"
                      : "bg-white text-brand-black border border-black/5"
                  }`}
                  style={
                    m.role === "user"
                      ? { backgroundColor: "var(--blue)" }
                      : undefined
                  }
                >
                  {m.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none [&_p]:my-1 [&_a]:text-brand-blue [&_a]:underline [&_ul]:my-1 [&_ol]:my-1">
                      <ReactMarkdown
                        components={{
                          a: ({ href, children, ...props }) => {
                            const url = String(href ?? "");
                            if (url.startsWith("/")) {
                              return (
                                <Link to={url} onClick={() => setOpen(false)}>
                                  {children}
                                </Link>
                              );
                            }
                            return (
                              <a href={url} target="_blank" rel="noreferrer" {...props}>
                                {children}
                              </a>
                            );
                          },
                        }}
                      >
                        {m.content || "…"}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  )}
                </div>
              </div>
            ))}

            {isStreaming && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-white px-3 py-2 text-sm text-brand-grey shadow-sm border border-black/5">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-grey" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-grey [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-grey [animation-delay:0.4s]" />
                  </span>
                </div>
              </div>
            )}

            {/* CTA hot lead */}
            {totalScore >= 7 && !limitReached && (
              <Link
                to={rdvHref}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 text-center text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
              >
                🎯 Réserver un échange 30 min
              </Link>
            )}

            {/* Limite atteinte */}
            {limitReached && (
              <div className="rounded-xl border border-black/10 bg-white p-3 text-sm text-brand-black">
                <p className="mb-2">Pour aller plus loin, échangeons en direct :</p>
                <Link
                  to={rdvHref}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-center font-medium text-white"
                  style={{ backgroundColor: "var(--blue)" }}
                >
                  Réserver un rendez-vous
                </Link>
              </div>
            )}
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && !limitReached && (
            <div className="px-4 pb-2 flex flex-wrap gap-2 bg-brand-bg">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => sendMessage(s)}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-brand-black transition-colors hover:bg-brand-blue hover:text-white"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 border-t border-black/10 bg-white p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={limitReached ? "Réservez un échange ☝️" : "Votre message…"}
              disabled={isStreaming || limitReached}
              className="flex-1 rounded-full border border-black/10 bg-brand-bg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isStreaming || limitReached || !input.trim()}
              aria-label="Envoyer"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-40"
              style={{ backgroundColor: "var(--blue)" }}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}