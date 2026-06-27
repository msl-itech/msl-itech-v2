import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Lock, Sparkles } from "lucide-react";
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

export type ToolWizardProps = {
  slug: ToolSlug;
  title: string;
  eyebrow: string;
  intro: string;
  questions: ToolQuestion[];
  /** Calcule un résultat lisible à partir des réponses */
  computeResult: (answers: Record<string, string | number>) => {
    headline: string;
    summary: string;
    highlights: { label: string; value: string }[];
  };
  /** Affiché en encart partiel après la 3e question */
  partialTeaser: string;
};

type FormState = {
  firstName: string;
  email: string;
  phone: string;
  company: string;
  currentTool: CurrentTool | "";
};

export function ToolWizard(props: ToolWizardProps) {
  const { slug, title, eyebrow, intro, questions, computeResult, partialTeaser } = props;

  const [step, setStep] = useState(0); // 0..questions.length-1 = question; questions.length = form; +1 = done
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [form, setForm] = useState<FormState>({
    firstName: "",
    email: "",
    phone: "",
    company: "",
    currentTool: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    captureUtm();
  }, []);

  const total = questions.length;
  const progress = Math.min(
    100,
    Math.round(((Math.min(step, total) + (done ? 1 : 0)) / (total + 1)) * 100),
  );

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
    form.currentTool;

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

      const description = buildLeadDescription({
        "Outil utilisé": title,
        "Score lead": `${score} / 100 — ${segment}`,
        "Résultat affiché": `${result.headline}\n${result.summary}`,
        Réponses: answersText,
        Société: form.company || undefined,
        "Outil actuel (form)": form.currentTool || undefined,
        Téléphone: form.phone || undefined,
        UTM: formatUtmForOdoo(utm) || undefined,
        Landing: utm.landing,
        Referrer: utm.referrer,
      });

      const payload: OdooLeadData = {
        name: `${form.firstName}${form.company ? " — " + form.company : ""} — ${title}`,
        contact_name: form.firstName,
        email_from: form.email,
        phone: form.phone || undefined,
        partner_name: form.company || undefined,
        description,
        source: `msl-itech.com/outils/${slug}${utm.source ? " · " + utm.source : ""}`,
        country_code: "MA",
        tag_names: [
          `outil:${slug}`,
          `segment:${segment}`,
          `score:${score}`,
          finalTool ? `outil-actuel:${finalTool}` : "",
        ].filter(Boolean),
        extra: {
          lead_score: score,
          segment,
          tool_slug: slug,
          answers,
          utm,
        },
      };

      await submitLead(payload);
      setDone(true);
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
    <section className="bg-brand-bg pb-20 pt-10 md:pt-14">
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
              {done
                ? "Terminé"
                : step < total
                  ? `Question ${Math.min(step + 1, total)} / ${total}`
                  : "Recevez votre analyse"}
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
          {done ? (
            <ResultCard result={result} firstName={form.firstName} />
          ) : step < total ? (
            <QuestionBlock
              q={currentQ}
              value={answers[currentQ.id]}
              onAnswer={answerAndAdvance}
              onBack={step > 0 ? back : undefined}
            />
          ) : (
            <LeadFormBlock
              form={form}
              setForm={setForm}
              partialResult={result}
              submitting={submitting}
              canSubmit={!!canSubmit}
              onBack={back}
              onSubmit={handleSubmit}
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

/* ---------------- Subcomponents ---------------- */

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

function LeadFormBlock({
  form,
  setForm,
  partialResult,
  submitting,
  canSubmit,
  onBack,
  onSubmit,
}: {
  form: FormState;
  setForm: (f: FormState) => void;
  partialResult: {
    headline: string;
    summary: string;
    highlights: { label: string; value: string }[];
  };
  submitting: boolean;
  canSubmit: boolean;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="mt-8">
      <div className="rounded-2xl border border-brand-grey-light bg-brand-bg p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
          Votre analyse personnalisée
        </p>
        <p className="mt-2 font-heading text-lg font-bold text-brand-black">
          {partialResult.headline}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {partialResult.highlights.slice(0, 2).map((h) => (
            <span
              key={h.label}
              className="rounded-full bg-brand-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey"
            >
              {h.label}: <strong className="text-brand-blue">{h.value}</strong>
            </span>
          ))}
        </div>
        <p className="mt-3 inline-flex items-center gap-2 font-body text-xs text-brand-grey">
          <Lock size={12} /> Résultat complet + plan d'action envoyés par email.
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        <Field
          label="Prénom *"
          value={form.firstName}
          onChange={(v) => setForm({ ...form, firstName: v })}
          autoComplete="given-name"
          required
        />
        <Field
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
        <Field
          label="Société"
          value={form.company}
          onChange={(v) => setForm({ ...form, company: v })}
          autoComplete="organization"
        />
        <Field
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

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey hover:text-brand-blue"
        >
          <ArrowLeft size={12} /> Précédent
        </button>
        <button
          type="submit"
          disabled={!canSubmit || submitting}
          className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          style={{ backgroundColor: "var(--gold)" }}
        >
          {submitting ? "Envoi en cours…" : "Recevoir mon analyse complète"}
          <ArrowRight size={18} />
        </button>
      </div>

      <p className="mt-4 font-mono text-[10px] leading-relaxed text-brand-grey">
        En soumettant, vous acceptez d'être recontacté par MSL-iTECH. Voir notre{" "}
        <Link to="/politique-de-confidentialite" className="underline hover:text-brand-blue">
          politique de confidentialité
        </Link>
        .
      </p>
    </form>
  );
}

function Field({
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

function ResultCard({
  result,
  firstName,
}: {
  result: {
    headline: string;
    summary: string;
    highlights: { label: string; value: string }[];
  };
  firstName: string;
}) {
  return (
    <div className="mt-8 text-center">
      <div
        className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full"
        style={{ backgroundColor: "var(--gold)" }}
      >
        <CheckCircle2 className="text-brand-blue" size={28} />
      </div>
      <h2 className="mt-5 font-heading text-2xl font-bold text-brand-black md:text-3xl">
        Merci {firstName || ""} — votre analyse est prête.
      </h2>
      <p className="mt-3 font-body text-base text-brand-grey">{result.summary}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {result.highlights.map((h) => (
          <div
            key={h.label}
            className="rounded-2xl border border-brand-grey-light bg-brand-bg px-4 py-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
              {h.label}
            </p>
            <p className="mt-1 font-heading text-xl font-bold text-brand-blue">
              {h.value}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6 font-body text-sm text-brand-grey">
        Vous recevez le détail complet et un plan d'action par email dans quelques
        instants. Pour aller plus vite, prenez 30 minutes avec un consultant senior :
      </p>

      <Link
        to="/prendre-rendez-vous"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
        style={{ backgroundColor: "var(--gold)" }}
      >
        Planifier mon diagnostic gratuit <ArrowRight size={18} />
      </Link>
    </div>
  );
}