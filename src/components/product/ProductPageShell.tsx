import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, LucideIcon, Sparkles } from "lucide-react";
import ProjectCTA from "@/components/ProjectCTA";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";

export type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type Faq = { q: string; a: string };

export interface ProductPageShellProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  featuresEyebrow?: string;
  featuresTitle: string;
  features: Feature[];
  featuresSlot?: ReactNode;
  whySection?: { title: string; desc: string; points: string[] };
  faqs?: Faq[];
  ctaTitle: string;
  ctaSubtitle: string;
  metaNote?: string;
  heroBullets?: string[];
  proposalEyebrow?: string;
  proposalTitle?: ReactNode;
}

/* Sticker — same visual language as the homepage / Odoo ERP page */
function Sticker({
  children,
  rotate = -6,
  className = "",
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-2xl border-2 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] ${className}`}
      style={{
        backgroundColor: "var(--gold)",
        borderColor: "var(--blue)",
        color: "var(--blue)",
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </span>
  );
}

function Hero({
  eyebrow,
  title,
  intro,
  heroImage,
  heroImageAlt,
  metaNote,
  heroBullets,
  proposalEyebrow,
  proposalTitle,
}: Pick<
  ProductPageShellProps,
  | "eyebrow"
  | "title"
  | "intro"
  | "heroImage"
  | "heroImageAlt"
  | "metaNote"
  | "heroBullets"
  | "proposalEyebrow"
  | "proposalTitle"
>) {
  const bullets =
    heroBullets && heroBullets.length > 0
      ? heroBullets
      : [
          "Partenaire officiel Odoo certifié",
          "Déploiement par blocs fonctionnels",
          "Réponse sous 24 à 72h ouvrables",
          "Sans engagement · Démo personnalisée",
        ];

  return (
    <section className="bg-brand-bg pt-6 md:pt-8">
      <div className="container">
        {/* Banner card with image background */}
        <div className="relative isolate rounded-[28px] md:rounded-[36px]">
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,30,38,0.45) 0%, rgba(10,30,38,0.62) 55%, rgba(10,30,38,0.82) 100%)",
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
            <Sticker rotate={-8}>★ Certifié Odoo 17+</Sticker>
          </div>

          {/* Banner content */}
          <div className="relative flex min-h-[380px] flex-col items-center justify-center px-6 py-20 text-center md:min-h-[480px] md:py-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
              <Sparkles size={12} className="text-brand-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                {eyebrow}
              </p>
            </div>

            <h1
              data-anim="chars"
              data-stagger="0.025"
              className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[68px]"
            >
              {title}
            </h1>
          </div>

          {/* Breadcrumb pill — bottom right, overlapping */}
          <div className="absolute -bottom-5 right-6 z-30 md:right-10">
            <div
              className="flex items-center gap-3 rounded-full border bg-brand-white px-5 py-2.5 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.25)]"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <Link
                to="/odoo-erp"
                className="font-body text-sm text-brand-grey transition hover:text-brand-blue"
              >
                Odoo ERP
              </Link>
              <ArrowRight size={14} className="text-brand-gold" />
              <span className="font-body text-sm font-semibold text-brand-blue">
                {eyebrow}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Intro grid below the banner */}
      <div className="container pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              <span className="mr-2 inline-block h-px w-8 align-middle bg-brand-blue" />
              {proposalEyebrow ?? "Le constat"}
            </p>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-[42px]">
              {proposalTitle ?? (
                <>
                  Ce que{" "}
                  <span className="relative inline-block">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-1 -z-10 h-3 md:h-4"
                      style={{
                        backgroundColor: "var(--gold)",
                        transform: "skew(-6deg)",
                      }}
                    />
                    <span className="relative" style={{ color: "var(--blue)" }}>
                      MSL-iTECH
                    </span>
                  </span>{" "}
                  vous propose
                </>
              )}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p
              data-anim="fade-up"
              className="font-body text-base text-brand-grey md:text-lg"
            >
              {intro}
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {bullets.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 font-body text-sm text-brand-black"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-gold"
                  />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Réserver ma démo gratuite
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/realisations"
                className="group inline-flex items-center gap-2 rounded-full border-2 px-6 py-3.5 font-body text-sm font-semibold text-brand-black transition hover:bg-brand-white"
                style={{ borderColor: "var(--blue)" }}
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--blue)" }}
                >
                  <ArrowUpRight size={14} className="text-white" />
                </span>
                Voir nos réalisations
              </Link>
            </div>

            {metaNote && (
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-brand-grey">
                <span
                  aria-hidden
                  className="mr-2 inline-block h-1.5 w-1.5 rounded-full align-middle"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                {metaNote}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Features({
  featuresEyebrow,
  featuresTitle,
  features,
}: Pick<
  ProductPageShellProps,
  "featuresEyebrow" | "featuresTitle" | "features"
>) {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          {featuresEyebrow && (
            <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              <span className="inline-block h-px w-8 bg-brand-blue" />
              {featuresEyebrow}
            </p>
          )}
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-[2.5rem]">
            {featuresTitle}
          </h2>
        </div>
        <div data-anim="stagger" data-stagger="0.12" className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border bg-white p-8 transition hover:-translate-y-1 hover:border-[var(--blue)]/30 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.28)]"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <div
                aria-hidden
                className="absolute right-0 top-0 h-32 w-32 -translate-y-10 translate-x-10 rounded-full opacity-0 transition group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,221,87,0.4), transparent)",
                }}
              />
              <div className="flex items-start gap-5">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition group-hover:scale-105"
                  style={{
                    backgroundColor: "var(--blue)",
                    color: "var(--gold)",
                  }}
                >
                  <f.icon size={24} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey">
                    0{i + 1}
                  </p>
                  <h3 className="mt-1 font-heading text-xl font-bold text-brand-black">
                    {f.title}
                  </h3>
                </div>
              </div>
              <p className="mt-5 font-body text-base leading-relaxed text-brand-grey">
                {f.desc}
              </p>
              <div
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 transition group-hover:scale-x-100"
                style={{ backgroundColor: "var(--gold)" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why({
  whySection,
  image,
  imageAlt,
  eyebrow,
}: {
  whySection: NonNullable<ProductPageShellProps["whySection"]>;
  image: string;
  imageAlt: string;
  eyebrow: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(var(--blue) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container relative grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="lg:sticky lg:top-28">
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            <span className="inline-block h-px w-8 bg-brand-blue" />
            MSL-iTECH
          </p>
          <h2 className="font-heading text-3xl font-bold leading-[1.15] text-brand-black md:text-[2.5rem]">
            {whySection.title}
          </h2>
          <div
            aria-hidden
            className="my-7 h-[3px] w-16 rounded-full"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <p className="font-body text-lg leading-relaxed text-brand-grey">
            {whySection.desc}
          </p>

          {/* Visual showcase */}
          <div
            className="relative mt-9 overflow-hidden rounded-3xl border shadow-[0_30px_70px_-30px_rgba(18,77,90,0.45)]"
            style={{ borderColor: "var(--grey-light)" }}
          >
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="h-64 w-full object-cover md:h-80"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,30,38,0) 40%, rgba(10,30,38,0.75) 100%)",
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                {eyebrow}
              </span>
              <Sticker rotate={-4}>★ Cas réel</Sticker>
            </div>
          </div>

          <Link
            to="/odoo-erp"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-body text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
            style={{ borderColor: "var(--blue)" }}
          >
            Découvrir tous les modules Odoo
            <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <ul data-anim="stagger" data-stagger="0.08" className="grid gap-4">
          {whySection.points.map((p, i) => (
            <li
              key={p}
              className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--blue)]/40 hover:shadow-[0_22px_50px_-22px_rgba(18,77,90,0.3)]"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <span
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-semibold transition group-hover:scale-110"
                style={{
                  backgroundColor: "var(--blue)",
                  color: "var(--gold)",
                }}
              >
                <Check size={18} strokeWidth={3} />
              </span>
              <div className="flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-grey">
                  0{i + 1}
                </p>
                <span className="mt-1 block font-heading text-lg font-semibold text-brand-black">
                  {p}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FaqBlock({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            <span className="inline-block h-px w-8 bg-brand-blue" />
            FAQ
            <span className="inline-block h-px w-8 bg-brand-blue" />
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-[2.5rem]">
            Questions fréquentes
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-brand-grey">
            Tout ce que vous devez savoir avant de démarrer votre projet Odoo avec MSL-iTECH.
          </p>
        </div>
        <div data-anim="stagger" data-stagger="0.06" className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-2xl border bg-white px-6 py-5 transition open:shadow-[0_18px_45px_-22px_rgba(18,77,90,0.28)] hover:border-[var(--blue)]/30"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 font-heading text-lg font-semibold text-brand-black">
                <span
                  aria-hidden
                  className="font-mono text-xs font-medium text-brand-grey"
                >
                  0{i + 1}
                </span>
                <span className="flex-1">{f.q}</span>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg leading-none transition group-open:rotate-45"
                  style={{
                    backgroundColor: "var(--blue)",
                    color: "var(--gold)",
                  }}
                >
                  +
                </span>
              </summary>
              <p className="mt-4 pl-9 font-body text-base leading-relaxed text-brand-grey">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({
  ctaTitle,
  ctaSubtitle,
}: Pick<ProductPageShellProps, "ctaTitle" | "ctaSubtitle">) {
  return (
    <section
      className="relative isolate overflow-hidden py-24"
      style={{ backgroundColor: "var(--blue)" }}
    >
      <HeroCursorGlow color="rgba(255, 221, 87, 1)" size={620} intensity={0.55} />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 300px at 80% 20%, rgba(255,221,87,0.25), transparent 60%), radial-gradient(500px 300px at 10% 90%, rgba(255,255,255,0.1), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="container relative text-center text-white">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "var(--gold)" }}
          />
          Prochaine étape
        </p>
        <h2
          data-anim="split"
          data-stagger="0.04"
          className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight md:text-5xl"
        >
          {ctaTitle}
        </h2>
        <div
          aria-hidden
          className="mx-auto mt-6 h-[3px] w-16 rounded-full"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <p className="mx-auto mt-5 max-w-xl font-body text-base text-white/85">
          {ctaSubtitle}
        </p>
        <div className="relative z-10 mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="group cta-pulse-gold hover-shine inline-flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-semibold transition hover:scale-[1.02]"
            style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
          >
            Réserver ma démo
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/tarifs"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 font-body text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Voir nos tarifs
          </Link>
        </div>
        <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
          <span aria-hidden className="inline-block h-px w-6 bg-white/30" />
          30 minutes · Sans engagement · Démo personnalisée
        </p>
      </div>
    </section>
  );
}

export function ProductPageShell(props: ProductPageShellProps) {
  return (
    <>
      <Hero
        eyebrow={props.eyebrow}
        title={props.title}
        intro={props.intro}
        heroImage={props.heroImage}
        heroImageAlt={props.heroImageAlt}
        metaNote={props.metaNote}
        heroBullets={props.heroBullets}
        proposalEyebrow={props.proposalEyebrow}
        proposalTitle={props.proposalTitle}
      />
      {props.featuresSlot ? (
        props.featuresSlot
      ) : (
        <Features
          featuresEyebrow={props.featuresEyebrow}
          featuresTitle={props.featuresTitle}
          features={props.features}
        />
      )}
      {props.whySection && (
        <Why
          whySection={props.whySection}
          image={props.heroImage}
          imageAlt={props.heroImageAlt}
          eyebrow={props.eyebrow}
        />
      )}
      {props.faqs && props.faqs.length > 0 && <FaqBlock faqs={props.faqs} />}
      <ProjectCTA
        eyebrow={props.ctaSubtitle ? "Démarrons ensemble" : "Démarrons ensemble"}
        titleStart={props.ctaTitle}
        titleEnd="avec MSL-iTECH"
      />
    </>
  );
}
