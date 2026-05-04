import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, LucideIcon } from "lucide-react";

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
}

function Hero({
  eyebrow,
  title,
  intro,
  heroImage,
  heroImageAlt,
  metaNote,
}: Pick<
  ProductPageShellProps,
  "eyebrow" | "title" | "intro" | "heroImage" | "heroImageAlt" | "metaNote"
>) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0F3F4A" }}
    >
      {/* soft glows */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 90% 0%, rgba(255,221,87,0.18), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(255,255,255,0.08), transparent 60%)",
        }}
      />
      {/* dotted grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Breadcrumb back to ERP hub */}
      <div className="container relative pt-8">
        <Link
          to="/odoo-erp"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm transition hover:border-[var(--gold)]/50 hover:text-white"
        >
          <span className="opacity-60">Odoo ERP</span>
          <span className="opacity-40">/</span>
          <span className="text-white">{eyebrow}</span>
        </Link>
      </div>
      <div className="container relative grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-12">
        <div className="text-white">
          <h1 className="font-heading text-4xl font-bold leading-[1.08] md:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <div className="mt-6 flex max-w-xl gap-4">
            <span
              aria-hidden
              className="mt-2 block h-16 w-[2px] shrink-0 rounded-full"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <p className="font-body text-lg text-white/80">{intro}</p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)", color: "#0F3F4A" }}
            >
              Réserver ma démo gratuite
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Voir nos réalisations
            </Link>
          </div>
          {metaNote && (
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-white/55">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--gold)" }}
              />
              {metaNote}
            </p>
          )}
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2rem] opacity-70 blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,221,87,0.35), rgba(255,255,255,0.05))",
            }}
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 p-2 backdrop-blur-sm shadow-2xl">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="w-full rounded-[1.4rem]"
              loading="eager"
            />
          </div>
          {/* floating corner stamp - outside the image clip so it stays visible */}
          <div
            className="absolute -bottom-4 -left-4 z-10 flex items-center gap-2 rounded-2xl px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)] md:-bottom-5 md:-left-5"
            style={{ backgroundColor: "var(--gold)", color: "#0F3F4A" }}
          >
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#0F3F4A" }}
            />
            Certifié Odoo
          </div>
        </div>
      </div>

      {/* soft transition to white */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-16"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--bg))",
        }}
      />
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
        <div className="mt-14 grid gap-6 md:grid-cols-2">
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
}: {
  whySection: NonNullable<ProductPageShellProps["whySection"]>;
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
          <Link
            to="/odoo-erp"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-body text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
            style={{ borderColor: "var(--blue)" }}
          >
            Découvrir tous les modules Odoo
            <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <ul className="grid gap-4">
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
        <div className="mt-12 space-y-3">
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
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "var(--blue)" }}
    >
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
        <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight md:text-5xl">
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
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-semibold shadow-[0_18px_50px_-15px_rgba(255,221,87,0.6)] transition hover:scale-[1.02]"
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
      {props.whySection && <Why whySection={props.whySection} />}
      {props.faqs && props.faqs.length > 0 && <FaqBlock faqs={props.faqs} />}
      <FinalCta ctaTitle={props.ctaTitle} ctaSubtitle={props.ctaSubtitle} />
    </>
  );
}
