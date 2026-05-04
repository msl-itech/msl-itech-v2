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
  Calendar,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import contactHero from "@/assets/home/cta-bg.webp";

/* ---------------- Sticker (charte MSL) ---------------- */
function Sticker({
  children,
  rotate = -6,
}: {
  children: React.ReactNode;
  rotate?: number;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)]"
      style={{
        backgroundColor: "var(--gold)",
        color: "var(--blue)",
        borderColor: "var(--blue)",
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </span>
  );
}

const offices = [
  {
    country: "Belgique",
    address: "Bruxelles, Belgique",
    phone: "+32 2 886 05 49",
    email: "info@msl-itech.com",
  },
  {
    country: "Maroc",
    address: "951 Q.I. Al Massar N°2, Route de Safi, Marrakech",
    phone: "+212 6 89 30 62 78",
    email: "info@msl-itech.com",
  },
  {
    country: "Canada",
    address: "—",
    phone: "+1 204 650 0765",
    email: "info@msl-itech.com",
  },
];

const demoSchema = z.object({
  // step 1
  fullName: z
    .string()
    .trim()
    .nonempty({ message: "Le nom est requis" })
    .max(100, { message: "Maximum 100 caractères" }),
  email: z
    .string()
    .trim()
    .email({ message: "Email invalide" })
    .max(255),
  phone: z
    .string()
    .trim()
    .nonempty({ message: "Le téléphone est requis" })
    .max(30, { message: "Numéro trop long" }),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  country: z.enum(["BE", "MA", "CA", "OTHER"]),
  // step 2
  objectives: z
    .string()
    .trim()
    .nonempty({ message: "Décrivez vos objectifs" })
    .max(800),
  // step 3
  painPoints: z.string().trim().max(800).optional().or(z.literal("")),
  // step 4
  currentTools: z.string().trim().max(400).optional().or(z.literal("")),
  // step 5
  challenges: z.string().trim().max(800).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter pour continuer" }),
  }),
});

type DemoForm = z.infer<typeof demoSchema>;

const stepLabels = [
  "Coordonnées",
  "Objectifs",
  "Processus chronophages",
  "Outils actuels",
  "Défis & finalisation",
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
  const [data, setData] = useState<Partial<DemoForm>>({
    country: "BE",
  });
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
    if (validateStep()) setStep((s) => Math.min(s + 1, stepLabels.length - 1));
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
      // jump to first step containing an error
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

  return (
    <>
      {/* HERO — image overlay (charte MSL) */}
      <section className="bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate rounded-[28px] md:rounded-[36px]">
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
              <img
                src={contactHero}
                alt="Contact MSL-iTECH"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,30,38,0.55) 0%, rgba(10,30,38,0.7) 55%, rgba(10,30,38,0.9) 100%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-25 blur-3xl"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: "var(--blue)" }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            <HeroCursorGlow radius="inherit" />

            {/* Sticker top-left */}
            <div className="absolute -top-3 left-8 z-20 md:-top-4 md:left-12">
              <Sticker rotate={-8}>★ Réponse sous 24–72h</Sticker>
            </div>

            {/* Hero content */}
            <div className="relative flex min-h-[420px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[500px] md:py-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  Contact · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-[60px] lg:text-[68px]">
                Réservez votre démo Odoo —{" "}
                <span className="italic font-light text-brand-gold">
                  préparée
                </span>{" "}
                selon vos besoins réels
              </h1>

              <p className="mt-7 max-w-2xl font-body text-base text-white/80 md:text-lg">
                Pas une démo générique : un consultant MSL-iTECH configure
                Odoo avec vos données et vos problématiques métier avant l'appel.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  <Clock size={12} className="text-brand-gold" /> 30 minutes
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  <ShieldCheck size={12} className="text-brand-gold" /> Sans engagement
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  <Calendar size={12} className="text-brand-gold" /> Démo personnalisée
                </span>
              </div>
            </div>

            {/* Breadcrumb pill — bottom right */}
            <div className="absolute -bottom-5 right-6 z-30 md:right-10">
              <div
                className="flex items-center gap-3 rounded-full border bg-brand-white px-5 py-2.5 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.25)]"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <Link
                  to="/"
                  className="font-body text-sm text-brand-grey transition hover:text-brand-blue"
                >
                  Accueil
                </Link>
                <span className="text-brand-grey/40">/</span>
                <span className="font-body text-sm font-semibold text-brand-blue">
                  Contact
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="py-24" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              <span className="inline-block h-px w-8 bg-brand-blue" />
              Nos coordonnées
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-[2.5rem]">
              Trois bureaux, un interlocuteur dédié
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {offices.map((o, i) => {
              const variants = [
                {
                  bg: "var(--blue)",
                  text: "white",
                  desc: "rgba(255,255,255,0.78)",
                  iconBg: "var(--gold)",
                  iconColor: "var(--blue)",
                  glow: "var(--gold)",
                  border: "transparent",
                  link: "white",
                },
                {
                  bg: "white",
                  text: "var(--black)",
                  desc: "var(--grey)",
                  iconBg: "var(--blue)",
                  iconColor: "var(--gold)",
                  glow: "var(--gold)",
                  border: "var(--grey-light)",
                  link: "var(--blue)",
                },
                {
                  bg: "var(--blue-light)",
                  text: "var(--blue)",
                  desc: "rgba(18,77,90,0.75)",
                  iconBg: "var(--blue)",
                  iconColor: "var(--gold)",
                  glow: "var(--gold)",
                  border: "transparent",
                  link: "var(--blue)",
                },
              ];
              const s = variants[i % variants.length];
              return (
                <article
                  key={o.country}
                  className="group relative overflow-hidden rounded-[28px] border p-8 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.28)]"
                  style={{ backgroundColor: s.bg, borderColor: s.border }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-25 blur-3xl"
                    style={{ backgroundColor: s.glow }}
                  />
                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h3
                        className="font-heading text-2xl font-bold leading-[1.1]"
                        style={{ color: s.text }}
                      >
                        {o.country}
                      </h3>
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]"
                        style={{ backgroundColor: s.iconBg, color: s.iconColor }}
                      >
                        <MapPin size={18} />
                      </div>
                    </div>
                    <ul
                      className="space-y-3 font-body text-sm"
                      style={{ color: s.desc }}
                    >
                      {o.address !== "—" && (
                        <li className="flex gap-3">
                          <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: s.link }} />
                          <span>{o.address}</span>
                        </li>
                      )}
                      <li className="flex gap-3">
                        <Phone size={15} className="mt-0.5 shrink-0" style={{ color: s.link }} />
                        <a
                          href={`tel:${o.phone.replace(/\s/g, "")}`}
                          className="transition hover:opacity-80"
                          style={{ color: s.text }}
                        >
                          {o.phone}
                        </a>
                      </li>
                      <li className="flex gap-3">
                        <Mail size={15} className="mt-0.5 shrink-0" style={{ color: s.link }} />
                        <a
                          href={`mailto:${o.email}`}
                          className="transition hover:opacity-80"
                          style={{ color: s.text }}
                        >
                          {o.email}
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEMO FORM */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(180deg, var(--blue-light) 0%, var(--bg) 100%)",
        }}
      >
        <div className="container max-w-3xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              <span className="inline-block h-px w-8 bg-brand-blue" />
              Formulaire démo Odoo
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-[2.5rem]">
              5 étapes pour préparer votre démo personnalisée
            </h2>
            <p className="mt-4 font-body text-base text-brand-grey">
              Vous remplissez ; un consultant prépare la démo avec vos données
              et revient vers vous sous 24 à 72h ouvrables.
            </p>
          </div>

          {submitted ? (
            <div
              className="mt-10 rounded-2xl border border-border bg-card p-10 text-center shadow-sm"
            >
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(255,221,87,0.2)", color: "#0F3F4A" }}
              >
                <CheckCircle2 size={26} />
              </div>
              <h3 className="mt-5 font-heading text-2xl font-bold text-brand-black">
                Merci, votre demande est partie !
              </h3>
              <p className="mt-3 font-body text-base text-brand-grey">
                Un consultant MSL-iTECH revient vers vous sous 24 à 72h ouvrables pour fixer le
                créneau et préparer la démo.
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#0F3F4A", color: "white" }}
              >
                Retour à l'accueil <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative mt-12 overflow-hidden rounded-[28px] border bg-brand-white p-7 shadow-[0_30px_80px_-30px_rgba(18,77,90,0.25)] md:p-10"
              style={{ borderColor: "var(--grey-light)" }}
              noValidate
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-30 blur-3xl"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: "var(--blue)" }}
              />

              {/* Steps indicator */}
              <div className="relative mb-10">
                <div
                  className="absolute left-0 right-0 top-4 h-0.5 -z-0"
                  style={{ backgroundColor: "var(--grey-light)" }}
                />
                <div
                  className="absolute left-0 top-4 h-0.5 -z-0 transition-all duration-500"
                  style={{
                    backgroundColor: "var(--blue)",
                    width: `${(step / (stepLabels.length - 1)) * 100}%`,
                  }}
                />
                <ol className="relative grid grid-cols-5 gap-2">
                  {stepLabels.map((lbl, i) => {
                    const done = i < step;
                    const active = i === step;
                    return (
                      <li key={lbl} className="flex flex-col items-center text-center">
                        <span
                          className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition"
                          style={{
                            backgroundColor:
                              active
                                ? "var(--gold)"
                                : done
                                  ? "var(--blue)"
                                  : "white",
                            color:
                              active
                                ? "var(--blue)"
                                : done
                                  ? "white"
                                  : "var(--grey)",
                            border: active || done
                              ? "2px solid var(--blue)"
                              : "2px solid var(--grey-light)",
                          }}
                        >
                          {done ? <CheckCircle2 size={14} /> : i + 1}
                        </span>
                        <span
                          className="mt-2 hidden text-[10px] uppercase tracking-[0.15em] md:block"
                          style={{
                            color: active ? "var(--blue)" : "var(--grey)",
                            fontWeight: active ? 700 : 400,
                          }}
                        >
                          {lbl}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="relative">

              {/* Step 0 — Coordonnées */}
              {step === 0 && (
                <div className="space-y-5">
                  <Field
                    id="fullName"
                    label="Nom complet *"
                    error={errors.fullName}
                    value={data.fullName ?? ""}
                    onChange={(v) => update("fullName", v)}
                  />
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field
                      id="email"
                      type="email"
                      label="Email professionnel *"
                      error={errors.email}
                      value={data.email ?? ""}
                      onChange={(v) => update("email", v)}
                    />
                    <Field
                      id="phone"
                      type="tel"
                      label="Téléphone *"
                      error={errors.phone}
                      value={data.phone ?? ""}
                      onChange={(v) => update("phone", v)}
                    />
                  </div>
                  <Field
                    id="company"
                    label="Entreprise"
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
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-brand-black focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    >
                      <option value="BE">Belgique</option>
                      <option value="MA">Maroc</option>
                      <option value="CA">Canada</option>
                      <option value="OTHER">Autre</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 1 — Objectifs */}
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

              {/* Step 2 — Pain points */}
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

              {/* Step 3 — Outils actuels */}
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

              {/* Step 4 — Défis */}
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
                  <label className="flex items-start gap-3 rounded-lg border border-border bg-muted/40 p-4 text-sm">
                    <input
                      type="checkbox"
                      checked={!!data.consent}
                      onChange={(e) => update("consent", e.target.checked)}
                      className="mt-1 h-4 w-4 accent-[color:var(--gold)]"
                    />
                    <span className="text-brand-grey">
                      J'accepte que MSL-iTECH me recontacte dans le cadre de ma demande de démo,
                      conformément à la politique de confidentialité.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-xs text-destructive">{errors.consent}</p>
                  )}
                </div>
              )}

              {/* Nav */}
              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 rounded-full border bg-white px-5 py-2.5 font-body text-sm font-semibold transition hover:bg-brand-bg disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ borderColor: "var(--grey-light)", color: "var(--blue)" }}
                >
                  <ArrowLeft size={16} /> Retour
                </button>

                {step < stepLabels.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-body text-sm font-semibold shadow-[0_12px_30px_-12px_rgba(18,77,90,0.5)] transition hover:-translate-y-0.5"
                    style={{ backgroundColor: "var(--blue)", color: "white" }}
                  >
                    Continuer <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-bold shadow-[0_14px_36px_-12px_rgba(255,221,87,0.7)] transition hover:-translate-y-0.5"
                    style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
                  >
                    Réserver ma démo Odoo gratuite <ArrowRight size={16} />
                  </button>
                )}
              </div>

              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-brand-grey">
                <ShieldCheck size={12} /> Sans engagement · Réponse sous 24 à 72h · Politique de
                confidentialité
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
}) {
  const base =
    "mt-2 w-full rounded-lg border bg-background px-4 py-3 font-body text-sm text-brand-black focus:outline-none focus:ring-1";
  const cls = `${base} ${
    error
      ? "border-destructive focus:border-destructive focus:ring-destructive"
      : "border-border focus:border-brand-blue focus:ring-brand-blue"
  }`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey"
      >
        {label}
      </label>
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
      {hint && !error && <p className="mt-1.5 text-xs text-brand-grey">{hint}</p>}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
