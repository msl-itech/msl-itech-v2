import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { toast } from "sonner";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Zap,
  Users,
  Target,
  Wrench,
  AlertTriangle,
  Send,
  User,
  Building2,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";

const offices = [
  {
    country: "Belgique",
    flag: "🇧🇪",
    address: "Bruxelles, Belgique",
    phone: "+32 2 886 05 49",
    email: "info@msl-itech.com",
  },
  {
    country: "Maroc",
    flag: "🇲🇦",
    address: "951 Q.I. Al Massar N°2, Route de Safi, Marrakech",
    phone: "+212 6 89 30 62 78",
    email: "info@msl-itech.com",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    address: "Winnipeg, Canada",
    phone: "+1 204 650 0765",
    email: "info@msl-itech.com",
  },
];

const reassurances = [
  {
    icon: Clock,
    title: "Réponse 24–72h",
    text: "Un consultant senior vous rappelle dans les jours ouvrables.",
  },
  {
    icon: Zap,
    title: "Démo personnalisée",
    text: "Configurée pour votre secteur et vos vrais cas d'usage.",
  },
  {
    icon: ShieldCheck,
    title: "Sans engagement",
    text: "Aucun devis automatique, aucune relance commerciale agressive.",
  },
];

const demoSchema = z.object({
  fullName: z.string().trim().nonempty({ message: "Le nom est requis" }).max(100),
  email: z.string().trim().email({ message: "Email invalide" }).max(255),
  phone: z.string().trim().nonempty({ message: "Le téléphone est requis" }).max(30),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  country: z.enum(["BE", "MA", "CA", "OTHER"]),
  objectives: z.string().trim().nonempty({ message: "Décrivez vos objectifs" }).max(800),
  painPoints: z.string().trim().max(800).optional().or(z.literal("")),
  currentTools: z.string().trim().max(400).optional().or(z.literal("")),
  challenges: z.string().trim().max(800).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter pour continuer" }),
  }),
});

type DemoForm = z.infer<typeof demoSchema>;

const steps = [
  { label: "Coordonnées", icon: User },
  { label: "Objectifs", icon: Target },
  { label: "Processus", icon: Clock },
  { label: "Outils", icon: Wrench },
  { label: "Défis", icon: AlertTriangle },
];

export default function ContactPage() {
  useProductSeo({
    title: "Réserver une Démo Odoo Gratuite — MSL-iTECH Belgique & Maroc",
    description:
      "Contactez MSL-iTECH pour une démo Odoo personnalisée. Réponse sous 24 à 72h. Bureaux en Belgique, au Maroc et au Canada. Sans engagement.",
    path: "/contact",
  });

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<Partial<DemoForm>>({ country: "BE" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = <K extends keyof DemoForm>(k: K, v: DemoForm[K] | string | boolean) => {
    setData((d) => ({ ...d, [k]: v as DemoForm[K] }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validateStep = (): boolean => {
    const fieldsByStep: (keyof DemoForm)[][] = [
      ["fullName", "email", "phone", "country"],
      ["objectives"],
      ["painPoints"],
      ["currentTools"],
      ["challenges", "consent"],
    ];
    const fields = fieldsByStep[step];
    const result = demoSchema.safeParse({ ...data, consent: data.consent ?? false });
    if (result.success) return true;
    const stepErrors: Record<string, string> = {};
    let hasError = false;
    for (const issue of result.error.issues) {
      const key = issue.path[0] as string;
      if (fields.includes(key as keyof DemoForm)) {
        stepErrors[key] = issue.message;
        hasError = true;
      }
    }
    setErrors(stepErrors);
    return !hasError;
  };

  const handleNext = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const handleBack = () => setStep((s) => Math.max(0, s - 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = demoSchema.safeParse({ ...data, consent: data.consent ?? false });
    if (!result.success) {
      const all: Record<string, string> = {};
      for (const issue of result.error.issues) {
        all[issue.path[0] as string] = issue.message;
      }
      setErrors(all);
      toast.error("Merci de corriger les champs en erreur.");
      const fieldsByStep: (keyof DemoForm)[][] = [
        ["fullName", "email", "phone", "country"],
        ["objectives"],
        ["painPoints"],
        ["currentTools"],
        ["challenges", "consent"],
      ];
      const firstBadStep = fieldsByStep.findIndex((fs) =>
        fs.some((f) => all[f as string])
      );
      if (firstBadStep >= 0) setStep(firstBadStep);
      return;
    }
    setSubmitted(true);
    toast.success("Demande envoyée — nous revenons vers vous sous 24 à 72h.");
  };

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0F3F4A" }}>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 90% 0%, rgba(255,221,87,0.22), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(255,255,255,0.08), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* floating decorative blobs */}
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255,221,87,0.18)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(26,122,74,0.18)" }}
        />

        <div className="container relative py-20 lg:py-28 text-white">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p
                className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
                style={{
                  backgroundColor: "rgba(255,221,87,0.14)",
                  color: "var(--gold)",
                  border: "1px solid rgba(255,221,87,0.35)",
                }}
              >
                <Sparkles size={12} /> Contact · MSL-iTECH
              </p>
              <h1 className="max-w-3xl font-heading text-4xl font-bold leading-[1.05] md:text-6xl">
                Parlons de votre projet{" "}
                <span
                  className="relative inline-block"
                  style={{ color: "var(--gold)" }}
                >
                  Odoo
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full"
                    style={{ backgroundColor: "rgba(255,221,87,0.25)" }}
                  />
                </span>
              </h1>
              <p className="mt-6 max-w-xl font-body text-lg text-white/80">
                Pas de présentation générique. Une démo réellement configurée pour votre
                secteur, vos données, vos enjeux. Préparée par un consultant senior.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/85">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} style={{ color: "var(--gold)" }} /> Sans engagement
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} style={{ color: "var(--gold)" }} /> Réponse 24–72h
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} style={{ color: "var(--gold)" }} /> 100% personnalisée
                </span>
              </div>
            </div>

            {/* Floating contact card */}
            <div className="relative hidden lg:block">
              <div
                className="rounded-3xl border p-7 backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.18)",
                }}
              >
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.22em]"
                  style={{ color: "var(--gold)" }}
                >
                  Contact direct
                </p>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "rgba(255,221,87,0.15)", color: "var(--gold)" }}
                    >
                      <Mail size={16} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60">Email</p>
                      <a
                        href="mailto:info@msl-itech.com"
                        className="font-body text-sm font-semibold text-white hover:underline"
                      >
                        info@msl-itech.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "rgba(255,221,87,0.15)", color: "var(--gold)" }}
                    >
                      <Phone size={16} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60">Belgique</p>
                      <a
                        href="tel:+3228860549"
                        className="font-body text-sm font-semibold text-white hover:underline"
                      >
                        +32 2 886 05 49
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "rgba(255,221,87,0.15)", color: "var(--gold)" }}
                    >
                      <Phone size={16} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60">Maroc</p>
                      <a
                        href="tel:+212689306278"
                        className="font-body text-sm font-semibold text-white hover:underline"
                      >
                        +212 6 89 30 62 78
                      </a>
                    </div>
                  </li>
                </ul>

                <div
                  className="mt-6 flex items-center gap-2 rounded-xl px-3 py-2 text-xs"
                  style={{
                    backgroundColor: "rgba(26,122,74,0.18)",
                    color: "#9CE0B5",
                  }}
                >
                  <span className="h-2 w-2 rounded-full bg-[#34D399] animate-pulse" />
                  Disponible aujourd'hui
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REASSURANCE STRIP */}
      <section className="border-b border-border bg-card">
        <div className="container py-10">
          <div className="grid gap-6 md:grid-cols-3">
            {reassurances.map((r) => (
              <div key={r.title} className="flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(15,63,74,0.08)", color: "#0F3F4A" }}
                >
                  <r.icon size={20} />
                </span>
                <div>
                  <p className="font-heading text-base font-bold text-brand-black">{r.title}</p>
                  <p className="mt-1 font-body text-sm text-brand-grey">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              Nos bureaux
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Trois bureaux, un seul interlocuteur dédié
            </h2>
            <p className="mt-4 font-body text-base text-brand-grey">
              Que vous soyez à Bruxelles, Marrakech ou Winnipeg, vous parlez à un consultant
              MSL-iTECH qui connaît votre marché.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offices.map((o) => (
              <article
                key={o.country}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition group-hover:opacity-100"
                  style={{ backgroundColor: "rgba(255,221,87,0.35)" }}
                />
                <div className="relative flex items-center gap-3">
                  <span className="text-3xl leading-none">{o.flag}</span>
                  <h3 className="font-heading text-xl font-bold text-brand-black">
                    {o.country}
                  </h3>
                </div>
                <ul className="relative mt-5 space-y-3 font-body text-sm text-brand-grey">
                  <li className="flex gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                    <span>{o.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                    <a
                      href={`tel:${o.phone.replace(/\s/g, "")}`}
                      className="hover:text-brand-black"
                    >
                      {o.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                    <a href={`mailto:${o.email}`} className="hover:text-brand-black">
                      {o.email}
                    </a>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO FORM */}
      <section
        className="relative overflow-hidden py-20"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute -top-32 right-0 h-80 w-80 rounded-full blur-3xl opacity-40"
          style={{ backgroundColor: "rgba(255,221,87,0.4)" }}
        />
        <div
          aria-hidden
          className="absolute bottom-0 -left-20 h-72 w-72 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: "rgba(15,63,74,0.25)" }}
        />

        <div className="container relative max-w-3xl">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              Formulaire démo Odoo
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
              5 étapes pour préparer votre démo
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base text-brand-grey">
              Plus vos réponses sont précises, plus la démo sera pertinente. Comptez 3 minutes.
            </p>
          </div>

          {submitted ? (
            <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card p-12 text-center shadow-xl">
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(255,221,87,0.25)", color: "#0F3F4A" }}
              >
                <CheckCircle2 size={30} />
              </div>
              <h3 className="mt-6 font-heading text-3xl font-bold text-brand-black">
                Merci, votre demande est partie !
              </h3>
              <p className="mx-auto mt-3 max-w-md font-body text-base text-brand-grey">
                Un consultant MSL-iTECH revient vers vous sous 24 à 72h ouvrables pour fixer le
                créneau et préparer la démo.
              </p>
              <Link
                to="/"
                className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#0F3F4A", color: "white" }}
              >
                Retour à l'accueil <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-xl"
              noValidate
            >
              {/* Progress bar */}
              <div className="h-1.5 w-full bg-muted">
                <div
                  className="h-full transition-all duration-500 ease-out"
                  style={{
                    width: `${progress}%`,
                    background:
                      "linear-gradient(90deg, #0F3F4A 0%, var(--gold) 100%)",
                  }}
                />
              </div>

              <div className="p-7 md:p-10">
                {/* Steps indicator */}
                <ol className="mb-10 flex items-center justify-between gap-2">
                  {steps.map((s, i) => {
                    const Icon = s.icon;
                    const active = i === step;
                    const done = i < step;
                    return (
                      <li
                        key={s.label}
                        className="flex flex-1 flex-col items-center text-center"
                      >
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition ${
                            active ? "scale-110 shadow-lg" : ""
                          }`}
                          style={{
                            backgroundColor: done
                              ? "#0F3F4A"
                              : active
                              ? "var(--gold)"
                              : "hsl(var(--background))",
                            borderColor: done
                              ? "#0F3F4A"
                              : active
                              ? "var(--gold)"
                              : "hsl(var(--border))",
                            color: done
                              ? "white"
                              : active
                              ? "#0F3F4A"
                              : "hsl(var(--muted-foreground))",
                          }}
                        >
                          {done ? <CheckCircle2 size={18} /> : <Icon size={18} />}
                        </span>
                        <span
                          className={`mt-2 hidden text-[10px] font-semibold uppercase tracking-[0.12em] md:block ${
                            active ? "text-brand-black" : "text-brand-grey"
                          }`}
                        >
                          {s.label}
                        </span>
                      </li>
                    );
                  })}
                </ol>

                {/* Step 0 — Coordonnées */}
                {step === 0 && (
                  <div className="space-y-5">
                    <Field
                      id="fullName"
                      label="Nom complet *"
                      icon={User}
                      error={errors.fullName}
                      value={data.fullName ?? ""}
                      onChange={(v) => update("fullName", v)}
                    />
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field
                        id="email"
                        type="email"
                        label="Email professionnel *"
                        icon={Mail}
                        error={errors.email}
                        value={data.email ?? ""}
                        onChange={(v) => update("email", v)}
                      />
                      <Field
                        id="phone"
                        type="tel"
                        label="Téléphone *"
                        icon={Phone}
                        error={errors.phone}
                        value={data.phone ?? ""}
                        onChange={(v) => update("phone", v)}
                      />
                    </div>
                    <Field
                      id="company"
                      label="Entreprise"
                      icon={Building2}
                      error={errors.company}
                      value={data.company ?? ""}
                      onChange={(v) => update("company", v)}
                    />
                    <div>
                      <label
                        htmlFor="country"
                        className="block font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey"
                      >
                        Pays
                      </label>
                      <select
                        id="country"
                        value={data.country ?? "BE"}
                        onChange={(e) =>
                          update("country", e.target.value as DemoForm["country"])
                        }
                        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-brand-black transition focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                      >
                        <option value="BE">🇧🇪 Belgique</option>
                        <option value="MA">🇲🇦 Maroc</option>
                        <option value="CA">🇨🇦 Canada</option>
                        <option value="OTHER">🌍 Autre</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <Field
                    id="objectives"
                    label="Quels sont vos objectifs avec Odoo ? *"
                    hint="Ex: structurer la facturation, suivre la production, gagner en visibilité commerciale…"
                    error={errors.objectives}
                    value={data.objectives ?? ""}
                    onChange={(v) => update("objectives", v)}
                    textarea
                    rows={6}
                    maxLength={800}
                  />
                )}

                {step === 2 && (
                  <Field
                    id="painPoints"
                    label="Quels processus vous prennent le plus de temps aujourd'hui ?"
                    hint="Saisies manuelles, ressaisies, Excel, validations multiples, relances clients…"
                    error={errors.painPoints}
                    value={data.painPoints ?? ""}
                    onChange={(v) => update("painPoints", v)}
                    textarea
                    rows={6}
                    maxLength={800}
                  />
                )}

                {step === 3 && (
                  <Field
                    id="currentTools"
                    label="Quels outils utilisez-vous actuellement ?"
                    hint="Excel, Sage, EBP, autre ERP, CRM, comptabilité externe…"
                    error={errors.currentTools}
                    value={data.currentTools ?? ""}
                    onChange={(v) => update("currentTools", v)}
                    textarea
                    rows={5}
                    maxLength={400}
                  />
                )}

                {step === 4 && (
                  <div className="space-y-5">
                    <Field
                      id="challenges"
                      label="Vos principaux défis ou contraintes"
                      hint="Délais, budget, conformité, multi-sites, multi-langues…"
                      error={errors.challenges}
                      value={data.challenges ?? ""}
                      onChange={(v) => update("challenges", v)}
                      textarea
                      rows={5}
                      maxLength={800}
                    />
                    <label className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-4 text-sm transition hover:border-brand-blue/40">
                      <input
                        type="checkbox"
                        checked={!!data.consent}
                        onChange={(e) => update("consent", e.target.checked)}
                        className="mt-1 h-4 w-4 accent-[color:var(--gold)]"
                      />
                      <span className="text-brand-grey">
                        J'accepte que MSL-iTECH me recontacte dans le cadre de ma demande de
                        démo, conformément à la politique de confidentialité.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-destructive">{errors.consent}</p>
                    )}
                  </div>
                )}

                {/* Nav */}
                <div className="mt-10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 font-body text-sm font-semibold text-brand-black transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft size={16} /> Retour
                  </button>

                  {step < steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="group inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold shadow-lg transition hover:opacity-95 hover:shadow-xl"
                      style={{ backgroundColor: "#0F3F4A", color: "white" }}
                    >
                      Continuer{" "}
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-0.5"
                      />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-bold shadow-lg transition hover:opacity-95 hover:shadow-xl"
                      style={{ backgroundColor: "var(--gold)", color: "#0F3F4A" }}
                    >
                      <Send size={16} /> Réserver ma démo gratuite
                    </button>
                  )}
                </div>

                <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-brand-grey">
                  <ShieldCheck size={12} /> Sans engagement · Réponse sous 24 à 72h · Données
                  protégées
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

/* ---------- Field component ---------- */

function Field({
  id,
  label,
  hint,
  error,
  value,
  onChange,
  type = "text",
  textarea,
  rows = 4,
  maxLength,
  icon: Icon,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  rows?: number;
  maxLength?: number;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}) {
  const base =
    "w-full rounded-xl border bg-background py-3 font-body text-sm text-brand-black transition focus:outline-none focus:ring-2";
  const padding = Icon && !textarea ? "pl-11 pr-4" : "px-4";
  const cls = `${base} ${padding} ${
    error
      ? "border-destructive focus:border-destructive focus:ring-destructive/30"
      : "border-border focus:border-brand-blue focus:ring-brand-blue/30"
  }`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey"
      >
        {label}
      </label>
      <div className="relative mt-2">
        {Icon && !textarea && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-grey">
            <Icon size={16} />
          </span>
        )}
        {textarea ? (
          <textarea
            id={id}
            rows={rows}
            maxLength={maxLength}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={cls}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={cls}
          />
        )}
      </div>
      {hint && !error && <p className="mt-1.5 text-xs text-brand-grey">{hint}</p>}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}