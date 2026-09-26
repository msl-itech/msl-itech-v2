import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Bot,
  Zap,
  Smartphone,
  Eye,
  ClipboardList,
  Tag,
  MapPin,
  FileText,
  BarChart2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileDown,
  Phone,
  Sparkles,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import { submitLead } from "@/lib/leads";
import { getUtm } from "@/lib/utm";
import { toast } from "@/hooks/use-toast";
import stepReporting from "@/assets/marketing-step-reporting.jpg";
import stepAudit from "@/assets/marketing-step-audit.jpg";
import stepStrategy from "@/assets/marketing-step-strategy.jpg";
import sectorScaleup from "@/assets/home/sector-scaleup.webp";

// ── Data ──────────────────────────────────────────────────────────────────────

const AUDIT_POINTS = [
  { icon: Search,        title: "Visibilité Google",               desc: "Positions sur vos requêtes clés, structure de contenu, opportunités de mots-clés à forte intention commerciale." },
  { icon: Bot,           title: "Présence dans les réponses IA",   desc: "ChatGPT, Gemini, Perplexity — votre entreprise est-elle citée ? Vérification des signaux GEO et données structurées." },
  { icon: Zap,           title: "Vitesse de chargement",           desc: "Core Web Vitals (LCP, CLS, INP) — une page lente perd 30 % de ses visiteurs avant de s'afficher." },
  { icon: Smartphone,    title: "Expérience mobile",               desc: "Plus de 60 % des visites B2B se font sur mobile. Rendu, taille des boutons, lisibilité — tout est passé en revue." },
  { icon: Eye,           title: "Clarté de l'offre en 10 s",       desc: "Un visiteur comprend-il en un coup d'œil ce que vous faites, pour qui, et pourquoi vous choisir ?" },
  { icon: ClipboardList, title: "Formulaire et suivi des leads",   desc: "Les soumissions arrivent-elles dans un CRM avec les bons tags ? Zéro lead perdu." },
  { icon: Tag,           title: "Balises et H1",                   desc: "Title, meta description, H1 unique, balises Open Graph — audit complet des balises qui conditionnent le clic." },
  { icon: MapPin,        title: "Fiche Google Business Profile",   desc: "Votre fiche est-elle revendiquée, complète, avec des photos récentes et des avis actifs ?" },
  { icon: FileText,      title: "Contenu par douleur client",      desc: "Avez-vous une page ou un article qui répond à chaque problème de vos prospects ?" },
  { icon: BarChart2,     title: "Mesure et analytics",             desc: "Google Analytics 4, Search Console, événements de conversion — votre tableau de bord reflète-t-il la réalité ?" },
];

const DELIVERABLES = [
  {
    icon: FileDown,
    title: "Rapport PDF — 2 pages",
    image: stepAudit,
    items: [
      "Score par point (OK / À améliorer / Bloquant)",
      "3 priorités d'action classées par impact",
      "Observations spécifiques à votre site",
      "Ressources et outils recommandés",
    ],
  },
  {
    icon: Phone,
    title: "Appel de 15 min",
    image: stepStrategy,
    items: [
      "Présentation des 3 points les plus critiques",
      "Réponses à vos questions sur le rapport",
      "Recommandation honnête sur les étapes suivantes",
      "Sans engagement — vous décidez de la suite",
    ],
  },
];

const EXAMPLES = [
  {
    sector: "Cabinet de conseil — 12 personnes",
    observations: [
      "Aucune page de service ne ciblait une requête avec intention d'achat — trafic presque nul malgré 3 ans de blog.",
      "Le formulaire de contact renvoyait vers une adresse non surveillée : 8 mois de leads perdus.",
      "L'offre principale était incompréhensible pour un visiteur extérieur (jargon métier non défini).",
    ],
    result: "+40 % de leads qualifiés en 60 jours",
  },
  {
    sector: "Distributeur B2B — 45 personnes",
    observations: [
      "LCP à 7,2 s sur mobile — le site passait en page 3 sur les requêtes produits.",
      "Pas de schéma Organization ni de données structurées : invisible des réponses IA.",
      "La fiche Google Business Profile avait une adresse obsolète depuis un déménagement.",
    ],
    result: "Position 1 sur 4 requêtes prioritaires en 90 jours",
  },
];

// ── Types ─────────────────────────────────────────────────────────────────────

type FormState = {
  siteUrl: string;
  email: string;
  phone: string;
  firstName: string;
  company: string;
  consent: boolean;
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AuditDigitalGratuitPage() {
  useProductSeo({
    title: "Audit Digital Gratuit de votre Site Web | MSL-iTECH",
    description:
      "Audit gratuit de votre site : Google, IA, vitesse, mobile, Core Web Vitals, formulaires. Rapport PDF + appel 15 min sous 48 h ouvrées.",
    path: "/audit-digital-gratuit",
    service: {
      name: "Audit digital gratuit",
      description:
        "Analyse complète de votre présence digitale (SEO, GEO, vitesse, mobile, analytics) par MSL-iTECH. Rapport PDF actionnable + appel de 15 min sous 48 h ouvrées, sans engagement.",
      serviceType: ["Audit SEO", "Audit digital", "Diagnostic web"],
    },
  });

  const [form, setForm] = useState<FormState>({ siteUrl: "", email: "", phone: "", firstName: "", company: "", consent: false });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Turnstile
  const turnstileEnabled = !!import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const [turnstileToken, setTurnstileToken] = useState<string | null>(
    turnstileEnabled ? null : "bypass-no-sitekey"
  );
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderTurnstile = useCallback(() => {
    const tw = (window as unknown as { turnstile?: { render: (el: HTMLElement, opts: unknown) => string; remove: (id: string) => void } }).turnstile;
    const sitekey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    if (!tw || !turnstileRef.current || widgetIdRef.current || !sitekey) return;
    try {
      widgetIdRef.current = tw.render(turnstileRef.current, {
        sitekey,
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(null),
        "error-callback": () => setTurnstileToken(null),
        theme: "light",
        appearance: "always",
        "refresh-expired": "auto",
      });
    } catch (e) {
      console.warn("[Turnstile] render() échoué :", e);
    }
  }, []);

  useEffect(() => {
    if (!turnstileEnabled) return;
    if (!document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]')) {
      const s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }
    const tw = (window as unknown as { turnstile?: unknown }).turnstile;
    if (tw) {
      renderTurnstile();
    } else {
      const script = document.querySelector<HTMLScriptElement>('script[src*="challenges.cloudflare.com/turnstile"]');
      script?.addEventListener("load", renderTurnstile, { once: true });
    }
    return () => {
      if (widgetIdRef.current) {
        (window as unknown as { turnstile?: { remove: (id: string) => void } }).turnstile?.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [turnstileEnabled, renderTurnstile]);

  const canSubmit =
    form.siteUrl.trim().length > 4 &&
    /.+@.+\..+/.test(form.email) &&
    form.firstName.trim().length > 1 &&
    form.phone.trim().length > 3 &&
    form.consent;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    try {
      const utm = getUtm();
      await submitLead({
        name: `${form.firstName}${form.company ? " — " + form.company : ""} — Audit digital`,
        contact_name: form.firstName,
        email_from: form.email,
        phone: form.phone,
        partner_name: form.company || undefined,
        description: undefined,
        source: `msl-itech.com/audit-digital-gratuit${utm.source ? " · " + utm.source : ""}`,
        country_code: "MA",
        studio_routing: true,
        tag_names: ["Marketing digital"],
        utm_source_name: utm.source || undefined,
        utm_medium_name: utm.medium || undefined,
        utm_campaign_name: utm.campaign || undefined,
        referred: window.location.pathname,
        x_studio_outil_source: "Audit gratuit",
        x_studio_url_site: form.siteUrl,
        x_studio_consentement: true,
        x_studio_consentement_date: new Date().toISOString(),
      });
      setSubmitted(true);
      toast({ title: "Demande reçue !", description: "Votre audit arrive sous 48 h." });
    } catch {
      toast({ title: "Erreur", description: "Réessayez ou écrivez-nous directement.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO — split layout dark blue + image
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-blue">
        <HeroCursorGlow color="rgba(255,221,87,1)" size={600} intensity={0.2} />

        {/* dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="container relative px-4 sm:px-6">
          <div className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
            {/* Left — copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/80">
                <Sparkles size={11} /> Gratuit · Sans engagement
              </span>

              <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-white md:text-[2.6rem] lg:text-[3rem]">
                Audit gratuit de votre site web :{" "}
                <span className="relative inline-block whitespace-nowrap">
                  <span
                    aria-hidden
                    className="absolute inset-x-[-4px] bottom-[10%] -z-0 h-[34%] -rotate-[1.2deg] rounded-[6px] opacity-90"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                  <span className="relative z-10 text-white">10 points vérifiés,</span>
                </span>{" "}
                réponse sous 48 h
              </h1>

              <p className="mt-5 font-body text-lg leading-relaxed text-white/70">
                Un consultant MSL-iTECH analyse votre présence digitale en profondeur et vous envoie un rapport PDF avec les blocages et les priorités d'action.
              </p>

              {/* Stats row */}
              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  { val: "10", label: "points analysés" },
                  { val: "48 h", label: "délai de réponse" },
                  { val: "100%", label: "gratuit" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-heading text-2xl font-bold" style={{ color: "var(--gold)" }}>{s.val}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">{s.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="#formulaire"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-blue transition hover:scale-[1.03] hover:shadow-[0_12px_40px_-10px_rgba(255,221,87,0.5)]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Demander mon audit gratuit <ArrowRight size={18} />
              </a>
            </div>

            {/* Right — hero image */}
            <div className="relative hidden lg:block">
              <div className="overflow-hidden rounded-[28px] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.5)]">
                <img
                  src={stepReporting}
                  alt="Analyse digitale d'un site web par MSL-iTECH"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
                {/* overlay card */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-brand-blue/80 p-4 backdrop-blur-md">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">Inclus dans l'audit</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Google", "IA", "Vitesse", "Mobile", "Analytics"].map((t) => (
                      <span key={t} className="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold text-brand-blue" style={{ backgroundColor: "var(--gold)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          10 POINTS DE L'AUDIT
      ══════════════════════════════════════════════ */}
      <section className="bg-brand-bg py-20 md:py-24">
        <div className="container px-4 sm:px-6">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              <span className="inline-block h-px w-8 bg-brand-blue" /> Ce qu'on analyse <span className="inline-block h-px w-8 bg-brand-blue" />
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-brand-black md:text-[2rem]">
              Les{" "}
              <span className="relative inline-block">
                <span aria-hidden className="absolute inset-x-[-3px] bottom-[8%] -z-0 h-[36%] -rotate-[1deg] rounded-[4px]" style={{ backgroundColor: "var(--gold)" }} />
                <span className="relative z-10">10 points</span>
              </span>{" "}
              de l'audit
            </h2>
            <p className="mt-3 font-body text-base text-brand-grey">
              Chaque point est évalué sur une grille précise. Vous recevez un verdict clair : OK, à améliorer, ou bloquant.
            </p>
          </div>

          {/* Grid */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2">
            {AUDIT_POINTS.map((pt, i) => (
              <div key={pt.title} className="group flex gap-4 rounded-2xl border border-brand-grey-light bg-brand-white p-5 transition hover:border-[color:var(--gold)] hover:shadow-[0_8px_30px_-10px_rgba(255,221,87,0.3)]">
                {/* Number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-heading text-base font-bold text-brand-blue group-hover:text-white transition-colors" style={{ backgroundColor: "var(--gold)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <pt.icon size={14} className="shrink-0 text-brand-blue" />
                    <p className="font-body font-semibold text-brand-black">{pt.title}</p>
                  </div>
                  <p className="mt-1 font-body text-sm leading-relaxed text-brand-grey">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CE QUE VOUS RECEVEZ — cards avec images
      ══════════════════════════════════════════════ */}
      <section className="bg-brand-white py-20 md:py-24">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              <span className="inline-block h-px w-8 bg-brand-blue" /> Ce que vous recevez <span className="inline-block h-px w-8 bg-brand-blue" />
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-brand-black md:text-[2rem]">
              Un livrable actionnable,{" "}
              <span className="relative inline-block">
                <span aria-hidden className="absolute inset-x-[-3px] bottom-[8%] -z-0 h-[36%] -rotate-[1deg] rounded-[4px]" style={{ backgroundColor: "var(--gold)" }} />
                <span className="relative z-10">pas un rapport creux</span>
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {DELIVERABLES.map((d) => (
              <div key={d.title} className="overflow-hidden rounded-3xl border border-brand-grey-light bg-brand-white shadow-[0_8px_40px_-20px_rgba(18,77,90,0.15)]">
                {/* Image */}
                <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img src={d.image} alt={d.title} className="h-full w-full object-cover" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: "var(--gold)" }}>
                      <d.icon size={18} className="text-brand-blue" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-brand-black">{d.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 font-body text-sm text-brand-grey">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          EXEMPLES ANONYMISÉS — dark cards
      ══════════════════════════════════════════════ */}
      <section className="bg-brand-blue py-20 md:py-24">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-white md:text-[2rem]">
              Ce qu'on trouve en pratique
            </h2>
            <p className="mt-3 font-body text-sm text-white/60">Cas types illustrant les problèmes les plus fréquents rencontrés sur les sites B2B.</p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {EXAMPLES.map((ex) => (
              <div key={ex.sector} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                  {ex.sector}
                </span>
                <ul className="mt-5 space-y-3">
                  {ex.observations.map((obs) => (
                    <li key={obs} className="flex items-start gap-3 font-body text-sm leading-relaxed text-white/75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                      {obs}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FORMULAIRE
      ══════════════════════════════════════════════ */}
      <section id="formulaire" className="bg-brand-bg py-20 md:py-24">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">

              {/* ── Gauche : formulaire ── */}
              <div>
                <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
                  <span className="inline-block h-px w-8 bg-brand-blue" /> Étape 1 sur 1 <span className="inline-block h-px w-8 bg-brand-blue" />
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold text-brand-black md:text-[2rem]">
                  Demander mon audit gratuit
                </h2>
                <p className="mt-2 font-body text-sm text-brand-grey">
                  Réponse sous 48 h ouvrées · Aucun engagement · Aucune carte bancaire
                </p>

                <div className="mt-8 rounded-3xl border border-brand-grey-light bg-brand-white p-7 shadow-[0_24px_60px_-20px_rgba(18,77,90,0.12)] md:p-8">
                  {submitted ? (
                    <div className="py-6 text-center">
                      <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: "var(--gold)" }}>
                        <CheckCircle2 size={30} className="text-brand-blue" />
                      </div>
                      <h3 className="mt-5 font-heading text-xl font-bold text-brand-black">Demande reçue !</h3>
                      <p className="mt-2 font-body text-sm text-brand-grey">
                        Votre audit est en cours. Vous recevrez le rapport PDF + une invitation à l'appel de 15 min sous 48 h ouvrées.
                      </p>
                      <Link to="/" className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-brand-blue hover:underline">
                        Retour à l'accueil <ArrowRight size={14} />
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Field name="site_url" label="URL de votre site web *" value={form.siteUrl} onChange={(v) => setForm({ ...form, siteUrl: v })} type="url" placeholder="https://www.votresite.ma" required />
                      <Field name="email" label="Email professionnel *" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" placeholder="prenom@societe.ma" autoComplete="email" required />
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field name="first_name" label="Prénom *" value={form.firstName} onChange={(v) => setForm({ ...form, firstName: v })} autoComplete="given-name" required />
                        <Field name="phone" label="Téléphone *" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" autoComplete="tel" required />
                      </div>
                      <Field name="company" label="Société" value={form.company} onChange={(v) => setForm({ ...form, company: v })} autoComplete="organization" />

                      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-brand-grey-light bg-brand-bg p-4">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-[color:var(--gold)]"
                          required
                        />
                        <span className="font-body text-sm text-brand-grey">
                          J'accepte que MSL-iTECH me contacte dans le cadre de ma demande, conformément à la{" "}
                          <Link to="/politique-de-confidentialite" className="underline hover:text-brand-blue" onClick={(e) => e.stopPropagation()}>
                            politique de confidentialité
                          </Link>{" "}
                          (Loi 09-08 / RGPD). *
                        </span>
                      </label>

                      {/* Turnstile */}
                      <div ref={turnstileRef} />
                      {turnstileEnabled && !turnstileToken && (
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey">
                          Vérification anti-robot requise avant l'envoi.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        onClick={() => {
                          if (!canSubmit) {
                            const missing: string[] = [];
                            if (form.siteUrl.trim().length <= 4) missing.push("URL du site");
                            if (!/.+@.+\..+/.test(form.email)) missing.push("Email");
                            if (form.firstName.trim().length <= 1) missing.push("Prénom");
                            if (form.phone.trim().length <= 3) missing.push("Téléphone");
                            if (!form.consent) missing.push("consentement");
                            toast({ title: "Champs requis", description: missing.join(", "), variant: "destructive" });
                          }
                        }}
                        className="w-full rounded-full px-7 py-4 font-body text-base font-bold text-brand-blue shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
                        style={{ backgroundColor: "var(--gold)" }}
                      >
                        {submitting ? "Envoi en cours…" : "Recevoir mon audit gratuit →"}
                      </button>

                      <p className="flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey">
                        <ShieldCheck size={12} /> Données confidentielles · Aucune revente · 48 h
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* ── Droite : image + réassurance ── */}
              <div className="hidden lg:flex lg:flex-col lg:justify-center">
                <div className="overflow-hidden rounded-3xl shadow-[0_24px_60px_-20px_rgba(18,77,90,0.25)]">
                  <img
                    src={sectorScaleup}
                    alt="Équipe MSL-iTECH en analyse digitale"
                    className="w-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                  />
                </div>

                {/* Réassurance sous l'image */}
                <div className="mt-6 space-y-3">
                  {[
                    { icon: FileDown, text: "PDF de 2 pages avec score par point et priorités d'action" },
                    { icon: Phone,    text: "Appel de 15 min inclus pour débriefer les résultats" },
                    { icon: ShieldCheck, text: "Aucune revente de vos données · Conforme Loi 09-08" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "var(--gold)" }}>
                        <item.icon size={14} className="text-brand-blue" />
                      </div>
                      <p className="font-body text-sm text-brand-grey leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Micro component ───────────────────────────────────────────────────────────

function Field({
  name, label, value, onChange, type = "text", placeholder, autoComplete, required,
}: {
  name: string; label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; autoComplete?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block font-body text-sm font-semibold text-brand-black">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded-xl border-2 border-brand-grey-light bg-brand-white px-4 py-3 font-body text-sm text-brand-black outline-none transition focus:border-brand-blue"
      />
    </div>
  );
}
