import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import {
  CompanySize,
  CurrentTool,
  ScoreInputs,
  ToolSlug,
  Urgency,
  scoreLead,
  isProfessionalEmail,
} from "@/lib/lead-scoring";
import { captureUtm, formatUtmForOdoo, getUtm } from "@/lib/utm";
import { buildLeadDescription, OdooLeadData } from "@/lib/odoo";
import { submitLead } from "@/lib/leads";
import { toast } from "@/hooks/use-toast";

export type ToolOption = {
  value: string;
  label: string;
  helper?: string;
  /** Contribue à la grille de scoring */
  scoreMap?: {
    companySize?: CompanySize;
    currentTool?: CurrentTool;
    urgency?: Urgency;
  };
};

export type ToolQuestion = {
  id: string;
  label: string;
  helper?: string;
  type: "single" | "number";
  options?: ToolOption[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  placeholder?: string;
};

export type ToolResult = {
  headline: string;
  summary: string;
  highlights: { label: string; value: string }[];
  /** 3 actions prioritaires à afficher sur l'écran de résultat */
  recommendations: string[];
  /** Valeur affichée dans le badge doré. Si absent, affiche le lead score (0-100). */
  badgeValue?: string | number;
};

export type ToolWizardProps = {
  slug: ToolSlug;
  title: string;
  eyebrow: string;
  intro: string;
  questions: ToolQuestion[];
  /** Calcule un résultat lisible à partir des réponses */
  computeResult: (answers: Record<string, string | number>) => ToolResult;
  /** Affiché en encart partiel après la 3e question */
  partialTeaser: string;
  /** Besoin Odoo pour le routage CRM (erp | marketing) */
  besoin?: "erp" | "marketing";
  /** Nom affiché dans le tag Odoo ex: "Simulateur DGI", "Diagnostic digital" */
  toolDisplayName?: string;
};

type FormState = {
  firstName: string;
  email: string;
  phone: string;
  company: string;
  currentTool: CurrentTool | "";
  consent: boolean;
};

export function ToolWizard(props: ToolWizardProps) {
  const {
    slug,
    title,
    eyebrow,
    intro,
    questions,
    computeResult,
    partialTeaser,
    besoin,
    toolDisplayName,
  } = props;

  const [step, setStep] = useState(0); // 0..questions.length-1 = question; questions.length = result+form
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [form, setForm] = useState<FormState>({
    firstName: "",
    email: "",
    phone: "",
    company: "",
    currentTool: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);

  // Turnstile — bypass si pas de sitekey (dev local)
  const turnstileEnabled = !!import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const [turnstileToken, setTurnstileToken] = useState<string | null>(
    turnstileEnabled ? null : "bypass-no-sitekey"
  );
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    captureUtm();
    // Précharger le script Turnstile dès le montage
    if (!document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]')) {
      const s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  const total = questions.length;

  // Monter/démonter le widget Turnstile sur l'écran résultat (step >= total)
  useEffect(() => {
    if (step < total) {
      if (widgetIdRef.current) {
        (window as unknown as { turnstile?: { remove: (id: string) => void } }).turnstile?.remove(widgetIdRef.current);
        widgetIdRef.current = null;
        if (turnstileEnabled) setTurnstileToken(null);
      }
      return;
    }
    const tw = (window as unknown as { turnstile?: unknown }).turnstile;
    if (tw) {
      renderTurnstile();
    } else {
      const script = document.querySelector<HTMLScriptElement>('script[src*="challenges.cloudflare.com/turnstile"]');
      script?.addEventListener("load", renderTurnstile, { once: true });
    }
  }, [step, total, turnstileEnabled, renderTurnstile]);
  const progress =
    step >= total
      ? 100
      : Math.round(((step + 1) / (total + 1)) * 100);

  const currentQ = questions[step];
  const showPartial = step >= 3 && step < total;

  // Derive score inputs from answers
  const derivedScoreInputs: Omit<ScoreInputs, "toolSlug"> = useMemo(() => {
    const acc: Omit<ScoreInputs, "toolSlug"> = {};
    for (const q of questions) {
      const v = answers[q.id];
      if (q.options && typeof v === "string") {
        const opt = q.options.find((o) => o.value === v);
        if (opt?.scoreMap) {
          if (opt.scoreMap.companySize) acc.companySize = opt.scoreMap.companySize;
          if (opt.scoreMap.currentTool) acc.currentTool = opt.scoreMap.currentTool;
          if (opt.scoreMap.urgency) acc.urgency = opt.scoreMap.urgency;
        }
      }
    }
    return acc;
  }, [answers, questions]);

  /** Score calculé à partir des réponses seules (sans email/téléphone) — pour l'affichage et le lien RDV */
  const previewScore = useMemo(() => {
    if (step < total) return 0;
    const { score } = scoreLead({ ...derivedScoreInputs, toolSlug: slug });
    return score;
  }, [step, total, derivedScoreInputs, slug]);

  function answerAndAdvance(value: string | number) {
    setAnswers((a) => ({ ...a, [currentQ.id]: value }));
    setStep((s) => s + 1);
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  const canSubmit =
    form.firstName.trim().length > 1 &&
    /.+@.+\..+/.test(form.email) &&
    !!form.currentTool &&
    form.consent &&
    !!turnstileToken;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    try {
      const finalTool = (form.currentTool || derivedScoreInputs.currentTool) as
        | CurrentTool
        | undefined;
      const { score, segment } = scoreLead({
        ...derivedScoreInputs,
        currentTool: finalTool,
        email: form.email,
        phone: form.phone,
        toolSlug: slug,
      });
      const utm = getUtm();
      const result = computeResult(answers);

      const answersText = questions
        .map((q) => {
          const v = answers[q.id];
          const lbl =
            q.options && typeof v === "string"
              ? q.options.find((o) => o.value === v)?.label ?? String(v)
              : v !== undefined
                ? `${v}${q.unit ? " " + q.unit : ""}`
                : "—";
          return `${q.label} → ${lbl}`;
        })
        .join("\n");

      // T12/3.4 — score affiché + recommandations dans des champs dédiés (x_studio_*)
      // + dans la description pour la lisibilité côté commercial.
      const recommendationsText = result.recommendations.map((r, i) => `${i + 1}. ${r}`).join("\n");
      const description = buildLeadDescription({
        "Résultat": `${result.headline} — ${result.summary}`,
        Recommandations: recommendationsText,
        Réponses: answersText,
      });

      const besoinLabel = besoin === "erp" ? "Odoo ERP" : "Marketing digital";
      const consentAt = new Date().toISOString();

      const outilSourceKey = slug === "diagnostic-digital"
        ? "Diagnostic digital"
        : "Simulateur DGI";

      // Tag séquence Marketing Automation (un par outil)
      const sequenceTagMap: Record<string, string> = {
        "conformite-dgi":        "Séquence: Conformité DGI",
        "roi-erp":               "Séquence: ROI ERP",
        "diagnostic-digital":    "Séquence: Diagnostic Digital",
        "comparateur-sage-odoo": "Séquence: Comparateur Sage-Odoo",
      };
      const sequenceTag = sequenceTagMap[slug];

      const payload: OdooLeadData = {
        name: `${form.firstName}${form.company ? " — " + form.company : ""} — ${toolDisplayName ?? title}`,
        contact_name: form.firstName,
        email_from: form.email,
        phone: form.phone || undefined,
        partner_name: form.company || undefined,
        description,
        source: `msl-itech.com/outils/${slug}${utm.source ? " · " + utm.source : ""}`,
        country_code: "MA",
        studio_routing: true,
        utm_source_name: utm.source || undefined,
        utm_medium_name: utm.medium || undefined,
        utm_campaign_name: utm.campaign || undefined,
        referred: window.location.pathname,
        tag_names: sequenceTag ? [besoinLabel, sequenceTag] : [besoinLabel],
        // Qualification
        x_studio_outil_source: outilSourceKey,
        x_studio_score: score,
        x_studio_score_affiche: result.badgeValue !== undefined ? Number(result.badgeValue) : previewScore,
        x_studio_recommandations: recommendationsText,
        x_studio_outil_actuel: finalTool ? ({ excel: "Excel / Word", sage: "Sage", odoo: "Odoo", autre: "Autre" } as Record<string, string>)[finalTool] : undefined,
        x_studio_consentement: true,
        x_studio_consentement_date: consentAt,
      };

      await submitLead(payload);

      setLeadCaptured(true);
      toast({
        title: "Analyse envoyée",
        description: "Vous recevez votre résultat complet par email.",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Une erreur est survenue",
        description: "Réessayez ou contactez-nous directement.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const result = useMemo(() => computeResult(answers), [answers, computeResult]);

  return (
    <section className="overflow-x-clip bg-brand-bg pb-20 pt-10 md:pt-14">
      <div className="container px-4 sm:px-6">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-grey-light bg-brand-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-blue">
            <Sparkles size={12} /> {eyebrow}
          </span>
          <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-brand-black md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 font-body text-base text-brand-grey md:text-lg">{intro}</p>
        </div>

        {/* Wizard card */}
        <div className="mx-auto mt-10 max-w-2xl rounded-[28px] border border-brand-grey-light bg-brand-white p-6 shadow-[0_24px_60px_-30px_rgba(15,63,74,0.35)] md:p-10">
          {/* Progress */}
          <div className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey">
            <span>
              {leadCaptured
                ? "Plan d'action envoyé"
                : step < total
                  ? `Question ${Math.min(step + 1, total)} / ${total}`
                  : "Votre résultat"}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-brand-grey-light">
            <div
              className="h-full rounded-full transition-[width] duration-500"
              style={{ width: `${progress}%`, backgroundColor: "var(--gold)" }}
            />
          </div>

          {/* Body */}
          {step < total ? (
            <QuestionBlock
              q={currentQ}
              value={answers[currentQ.id]}
              onAnswer={answerAndAdvance}
              onBack={step > 0 ? back : undefined}
            />
          ) : (
            <ResultAndLeadBlock
              result={result}
              score={previewScore}
              slug={slug}
              form={form}
              setForm={setForm}
              submitting={submitting}
              canSubmit={!!canSubmit}
              leadCaptured={leadCaptured}
              onBack={back}
              onSubmit={handleSubmit}
              turnstileToken={turnstileToken}
              turnstileRef={turnstileRef}
            />
          )}

          {showPartial && (
            <div className="mt-8 rounded-2xl border border-brand-gold/40 bg-[color:var(--gold)]/10 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                Aperçu intermédiaire
              </p>
              <p className="mt-2 font-body text-sm text-brand-black">{partialTeaser}</p>
            </div>
          )}
        </div>

        {/* Trust footer */}
        <p className="mx-auto mt-6 max-w-2xl text-center font-mono text-[10px] uppercase tracking-[0.18em] text-brand-grey">
          Données traitées en France · Aucune revente · Conforme Loi 09-08
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────── Subcomponents ──────────────────────────── */

function QuestionBlock({
  q,
  value,
  onAnswer,
  onBack,
}: {
  q: ToolQuestion;
  value: string | number | undefined;
  onAnswer: (v: string | number) => void;
  onBack?: () => void;
}) {
  const [num, setNum] = useState<string>(value !== undefined ? String(value) : "");

  return (
    <div className="mt-8">
      <h2 className="font-heading text-xl font-bold text-brand-black md:text-2xl">
        {q.label}
      </h2>
      {q.helper && (
        <p className="mt-2 font-body text-sm text-brand-grey">{q.helper}</p>
      )}

      {q.type === "single" && q.options && (
        <div className="mt-6 grid gap-3">
          {q.options.map((o) => {
            const active = value === o.value;
            return (
              <button
                key={o.value}
                type="button"
                onClick={() => onAnswer(o.value)}
                className={`group flex items-start gap-3 rounded-2xl border-2 p-4 text-left transition hover:border-brand-blue hover:bg-brand-blue/5 ${
                  active
                    ? "border-brand-blue bg-brand-blue/5"
                    : "border-brand-grey-light bg-brand-white"
                }`}
              >
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 border-brand-blue/60 group-hover:border-brand-blue">
                  {active && <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />}
                </span>
                <span>
                  <span className="block font-body font-semibold text-brand-black">
                    {o.label}
                  </span>
                  {o.helper && (
                    <span className="mt-0.5 block font-body text-xs text-brand-grey">
                      {o.helper}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {q.type === "number" && (
        <div className="mt-6">
          <div className="flex items-center gap-3 rounded-2xl border-2 border-brand-grey-light bg-brand-white px-4 py-3 focus-within:border-brand-blue">
            <input
              type="number"
              inputMode="numeric"
              min={q.min}
              max={q.max}
              step={q.step ?? 1}
              value={num}
              placeholder={q.placeholder}
              onChange={(e) => setNum(e.target.value)}
              className="w-full bg-transparent font-heading text-2xl font-bold text-brand-black outline-none placeholder:text-brand-grey-light"
            />
            {q.unit && (
              <span className="font-mono text-xs uppercase tracking-wider text-brand-grey">
                {q.unit}
              </span>
            )}
          </div>
          <button
            type="button"
            disabled={!num}
            onClick={() => onAnswer(Number(num))}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 font-body text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continuer <ArrowRight size={16} />
          </button>
        </div>
      )}

      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey hover:text-brand-blue"
        >
          <ArrowLeft size={12} /> Précédent
        </button>
      )}
    </div>
  );
}

/**
 * Écran final : résultat complet d'abord, formulaire de capture en-dessous.
 * Le score est visible sans avoir à soumettre ses coordonnées.
 */
function ResultAndLeadBlock({
  result,
  score,
  slug,
  form,
  setForm,
  submitting,
  canSubmit,
  leadCaptured,
  onBack,
  onSubmit,
  turnstileToken,
  turnstileRef,
}: {
  result: ToolResult;
  score: number;
  slug: string;
  form: FormState;
  setForm: (f: FormState) => void;
  submitting: boolean;
  canSubmit: boolean;
  leadCaptured: boolean;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
  turnstileToken: string | null;
  turnstileRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className="mt-8 space-y-6">
      {/* ── Résultat complet ── */}
      <div className="rounded-2xl border border-brand-grey-light bg-brand-bg p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
              Votre résultat
            </p>
            <h2 className="mt-1 font-heading text-xl font-bold text-brand-black md:text-2xl">
              {result.headline}
            </h2>
          </div>
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-heading text-xl font-bold text-brand-blue shadow-inner"
            style={{ backgroundColor: "var(--gold)" }}
          >
            {result.badgeValue !== undefined ? result.badgeValue : score}
          </div>
        </div>
        <p className="mt-3 font-body text-sm leading-relaxed text-brand-grey">
          {result.summary}
        </p>

        {/* Highlights */}
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {result.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl border border-brand-grey-light bg-brand-white px-4 py-3"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey">
                {h.label}
              </p>
              <p className="mt-0.5 font-heading text-base font-bold text-brand-blue">
                {h.value}
              </p>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        {result.recommendations.length > 0 && (
          <div className="mt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-blue">
              3 actions prioritaires
            </p>
            <ul className="mt-3 space-y-2">
              {result.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm text-brand-black">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                    style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
                  >
                    {i + 1}
                  </span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* RDV button — always visible */}
        <Link
          to={`/prendre-rendez-vous?score=${result.badgeValue !== undefined ? result.badgeValue : score}`}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-blue px-5 py-2.5 font-body text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
        >
          Réserver un cadrage de 30 min <ArrowRight size={14} />
        </Link>
      </div>

      {/* ── Lead capture — en-dessous du résultat ── */}
      {!leadCaptured ? (
        <form onSubmit={onSubmit} className="rounded-2xl border border-brand-grey-light bg-brand-white p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
            Recevoir mon plan d'action détaillé par email
          </p>
          <p className="mt-1 font-body text-sm text-brand-grey">
            Résultats complets, recommandations priorisées et ressources adaptées à votre profil — envoyés en quelques minutes.
          </p>

          <div className="mt-4 grid gap-4">
            <LeadField
              label="Prénom *"
              value={form.firstName}
              onChange={(v) => setForm({ ...form, firstName: v })}
              autoComplete="given-name"
              required
            />
            <LeadField
              label="Email professionnel *"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              autoComplete="email"
              required
              hint={
                form.email && !isProfessionalEmail(form.email)
                  ? "Astuce : un email pro accélère le traitement de votre demande."
                  : undefined
              }
            />
            <LeadField
              label="Société"
              value={form.company}
              onChange={(v) => setForm({ ...form, company: v })}
              autoComplete="organization"
            />
            <LeadField
              label="Téléphone (facultatif)"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
              autoComplete="tel"
              type="tel"
            />
            <div>
              <label className="block font-body text-sm font-semibold text-brand-black">
                Quel outil utilisez-vous aujourd'hui ? *
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {(["excel", "sage", "odoo", "autre"] as const).map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setForm({ ...form, currentTool: t })}
                    className={`rounded-xl border-2 px-3 py-2 font-body text-sm capitalize transition ${
                      form.currentTool === t
                        ? "border-brand-blue bg-brand-blue/5 text-brand-blue"
                        : "border-brand-grey-light bg-brand-white text-brand-grey hover:border-brand-blue/60"
                    }`}
                  >
                    {t === "autre" ? "Autre" : t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-lg border border-brand-grey-light bg-brand-bg/50 p-4">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[color:var(--gold)]"
            />
            <span className="font-body text-sm text-brand-grey">
              J'accepte que MSL-iTECH me recontacte dans le cadre de ma demande, conformément à la{" "}
              <Link
                to="/politique-de-confidentialite"
                className="underline hover:text-brand-blue"
                onClick={(e) => e.stopPropagation()}
              >
                politique de confidentialité
              </Link>{" "}
              (Loi 09-08 / RGPD). *
            </span>
          </label>

          {/* Turnstile anti-robot */}
          <div className="mt-5" onClick={(e) => e.stopPropagation()}>
            <div ref={turnstileRef} />
            {!turnstileToken && (
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey">
                Vérification anti-robot requise avant l'envoi.
              </p>
            )}
          </div>

          <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey hover:text-brand-blue"
            >
              <ArrowLeft size={12} /> Refaire le test
            </button>
            <button
              type="submit"
              disabled={!canSubmit || submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              style={{ backgroundColor: "var(--gold)" }}
            >
              {submitting ? "Envoi en cours…" : "Recevoir mon plan d'action"}
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      ) : (
        /* ── Confirmation inline après soumission ── */
        <div className="rounded-2xl border border-brand-gold/50 bg-[color:var(--gold)]/10 p-6 text-center">
          <div
            className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full"
            style={{ backgroundColor: "var(--gold)" }}
          >
            <CheckCircle2 className="text-brand-blue" size={24} />
          </div>
          <p className="mt-3 font-heading text-lg font-bold text-brand-black">
            Votre plan d'action est en route !
          </p>
          <p className="mt-1 font-body text-sm text-brand-grey">
            Vous recevrez le détail complet et vos recommandations personnalisées par email dans quelques minutes.
          </p>
          <Link
            to={`/prendre-rendez-vous?score=${result.badgeValue !== undefined ? result.badgeValue : score}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-body text-sm font-bold transition hover:scale-[1.02]"
            style={{ backgroundColor: "var(--blue)", color: "white" }}
          >
            Réserver un cadrage de 30 min <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
}

function LeadField({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  required,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div>
      <label className="block font-body text-sm font-semibold text-brand-black">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded-xl border-2 border-brand-grey-light bg-brand-white px-4 py-3 font-body text-sm text-brand-black outline-none transition focus:border-brand-blue"
      />
      {hint && <p className="mt-1 font-body text-xs text-brand-grey">{hint}</p>}
    </div>
  );
}
