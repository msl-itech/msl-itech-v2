import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon, Sparkles } from "lucide-react";

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
      <div className="container relative grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div className="text-white">
          <p
            className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{
              backgroundColor: "rgba(255,221,87,0.14)",
              color: "var(--gold)",
              border: "1px solid rgba(255,221,87,0.35)",
            }}
          >
            <Sparkles size={12} /> {eyebrow}
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] md:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-white/80">
            {intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold transition hover:opacity-90"
              style={{ backgroundColor: "var(--gold)", color: "#0F3F4A" }}
            >
              Réserver ma démo gratuite <ArrowRight size={16} />
            </Link>
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Voir nos réalisations
            </Link>
          </div>
          {metaNote && (
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-white/55">
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
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-grey">
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
              className="group relative overflow-hidden rounded-3xl border bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.25)]"
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
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
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
    <section className="bg-white py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-grey">
            MSL-iTECH
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-[2.25rem]">
            {whySection.title}
          </h2>
          <p className="mt-6 font-body text-lg text-brand-grey">
            {whySection.desc}
          </p>
        </div>
        <ul className="grid gap-3">
          {whySection.points.map((p, i) => (
            <li
              key={p}
              className="flex items-start gap-4 rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              style={{
                borderColor: "var(--grey-light)",
                backgroundColor: "var(--bg)",
              }}
            >
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold"
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--blue)",
                }}
              >
                {i + 1}
              </span>
              <span className="font-body text-base text-brand-black">{p}</span>
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
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-grey">
            FAQ
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border bg-white p-6 transition open:shadow-md"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-semibold text-brand-black">
                {f.q}
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition group-open:rotate-45"
                  style={{
                    backgroundColor: "var(--blue-light)",
                    color: "var(--blue)",
                  }}
                >
                  +
                </span>
              </summary>
              <p className="mt-4 font-body text-base leading-relaxed text-brand-grey">
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
        <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight md:text-5xl">
          {ctaTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-base text-white/85">
          {ctaSubtitle}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-semibold transition hover:opacity-90"
            style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
          >
            Réserver ma démo <ArrowRight size={16} />
          </Link>
          <Link
            to="/tarifs"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 font-body text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Voir nos tarifs
          </Link>
        </div>
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
      <Features
        featuresEyebrow={props.featuresEyebrow}
        featuresTitle={props.featuresTitle}
        features={props.features}
      />
      {props.whySection && <Why whySection={props.whySection} />}
      {props.faqs && props.faqs.length > 0 && <FaqBlock faqs={props.faqs} />}
      <FinalCta ctaTitle={props.ctaTitle} ctaSubtitle={props.ctaSubtitle} />
    </>
  );
}

export function useProductSeo(opts: {
  title: string;
  description: string;
  path: string;
  faqs?: Faq[];
  ldId?: string;
}) {
  if (typeof document === "undefined") return;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (typeof window !== "undefined") {
    // simple effect via microtask (shell is used inside React components only)
  }
}