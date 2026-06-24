import { lazy, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useMarket } from "@/hooks/useMarket";

import heroBeImg from "@/assets/hero-be.webp";
import heroMaImg from "@/assets/hero-ma.webp";

// Preload LCP hero images as early as possible (module-load side effect)
if (typeof document !== "undefined") {
  for (const href of [heroBeImg, heroMaImg]) {
    if (document.head.querySelector(`link[rel="preload"][href="${href}"]`)) continue;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = href;
    link.fetchPriority = "high";
    document.head.appendChild(link);
  }
}

import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import { JsonLd, professionalServiceSchema } from "@/components/JsonLd";

const HomeBelowFold = lazy(() => import("./HomeBelowFold"));
const HomeFaqJsonLd = lazy(() =>
  import("./HomeBelowFold").then((m) => ({
    default: () => <JsonLd id="ld-faq-home" data={m.homeFaqJsonLd} />,
  })),
);

/* ------------------------------ SEO ------------------------------ */
function useSeo(market: "BE" | "MA") {
  useEffect(() => {
    const title =
      market === "MA"
        ? "Odoo Partner Maroc | ERP & digital — MSL-iTECH"
        : "Expert Odoo Belgique & Canada — MSL-iTECH";
    const desc =
      market === "MA"
        ? "Odoo Ready Partner Maroc — consultants certifiés v18 & v19. Implémentation ERP, modules custom et personnalisation d'Odoo natif pour HORECA, BTP, Santé et Commerce."
        : "Odoo Ready Partner. Accompagnement à distance PME belges et canadiennes. ERP, modules custom et personnalisation d'Odoo natif.";
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/";
  }, [market]);
}

/* ------------------- Highlight (marker brushstroke) ------------------- */
function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden
        className="absolute inset-x-[-4px] bottom-[6%] -z-0 h-[42%] -rotate-[1.5deg] rounded-[6px]"
        style={{ backgroundColor: "var(--gold)", filter: "blur(0.3px)" }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

function Sticker({
  children,
  rotate = -6,
  className = "",
  href,
}: {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
  href?: string;
}) {
  const style = {
    backgroundColor: "var(--gold)",
    borderColor: "var(--blue)",
    color: "var(--blue)",
    transform: `rotate(${rotate}deg)`,
  } as React.CSSProperties;

  const classes = `inline-flex items-center gap-1.5 rounded-2xl border-2 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={style}>
        {children}
      </a>
    );
  }
  return <span className={classes} style={style}>{children}</span>;
}

/* ------------------------------ Hero ------------------------------ */
function HeroShell({
  bgImage,
  eyebrow,
  titleTop,
  titleAccent,
  description,
}: {
  bgImage: string;
  eyebrow: string;
  titleTop: string;
  titleAccent: string;
  description: string;
}) {
  const accentWords = titleAccent.trim().split(" ");
  const accentHead = accentWords.slice(0, -1).join(" ");
  const accentTail = accentWords[accentWords.length - 1];

  return (
    <section className="relative bg-brand-bg pt-6 pb-16 md:pt-14 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
        style={{
          background:
            "radial-gradient(800px 380px at 80% 0%, rgba(255,221,87,0.18), transparent 70%), radial-gradient(700px 360px at 0% 0%, rgba(18,77,90,0.10), transparent 70%)",
        }}
      />

      <div className="container px-4 sm:px-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          <div className="relative flex flex-col justify-center lg:col-span-6 lg:pr-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-grey-light bg-brand-white px-3 py-1.5">
              <Sparkles size={12} className="text-brand-blue" />
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-blue">
                {eyebrow}
              </p>
            </div>

            <h1 data-anim="chars" data-stagger="0.022" className="mt-5 break-words font-heading text-[30px] font-bold leading-[1.08] tracking-tight text-brand-black sm:text-4xl md:mt-7 md:text-[60px] md:leading-[1.04]">
              {titleTop}{" "}
              <span className="block sm:inline">
                {accentHead && (
                  <span className="text-brand-blue italic font-light">{accentHead} </span>
                )}
                <Mark>{accentTail}</Mark>
              </span>
            </h1>

            <p className="mt-5 max-w-[520px] font-body text-[15px] leading-relaxed text-brand-grey md:mt-7 md:text-lg">
              {description}
            </p>

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-10">
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02] sm:w-auto"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Réserver ma démo gratuite
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/realisations"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 px-6 py-3.5 font-body text-sm font-semibold text-brand-black transition hover:bg-brand-white sm:w-auto"
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
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              <div
                className="relative isolate col-span-4 overflow-hidden rounded-[24px] p-5 md:col-span-2 md:row-span-1 md:min-h-[260px] md:p-6"
                style={{ backgroundColor: "var(--blue)" }}
              >
                <div
                  className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full opacity-30 blur-2xl"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full border-2 border-white/90"
                      style={{
                        background: `linear-gradient(135deg, hsl(${40 + i * 30} 70% 70%), hsl(${
                          200 + i * 20
                        } 60% 55%))`,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-5 font-heading text-4xl font-bold text-white md:text-5xl">
                  20+
                </div>
                <p className="mt-1 font-body text-sm text-white/85">
                  références publiques vérifiables sur odoo.com
                </p>

                <Link
                  to="/realisations"
                  aria-label="Voir nos réalisations"
                  className="group/badge absolute bottom-4 right-4 hidden h-[76px] w-[76px] items-center justify-center rounded-full shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] ring-4 ring-white/15 transition hover:scale-105 hover:ring-white/30 md:flex"
                  style={{ backgroundColor: "var(--black)" }}
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full transition group-hover/badge:rotate-12"
                    style={{ backgroundColor: "var(--gold)" }}
                  >
                    <ArrowUpRight size={20} style={{ color: "var(--blue)" }} />
                  </div>
                </Link>
              </div>

              <a
                href="https://www.odoo.com/fr_FR/partners/msl-itech-15851608?country_id=132"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir notre fiche partenaire Odoo"
                className="group relative col-span-4 hidden aspect-[4/3] overflow-hidden rounded-[24px] border md:col-span-2 md:row-span-2 md:block md:aspect-auto md:min-h-[540px]"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <img
                  src={bgImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(18,77,90,0.0) 40%, rgba(10,45,54,0.55) 100%)",
                  }}
                />
                <div className="absolute left-5 top-5">
                  <Sticker
                    rotate={-6}
                    href="https://www.odoo.com/fr_FR/partners/msl-itech-15851608?country_id=132"
                  >
                    ★ Partenaire Odoo
                  </Sticker>
                </div>
                <HeroCursorGlow radius="24px" />
              </a>

              <div
                className="relative col-span-2 overflow-hidden rounded-[24px] border p-5 md:col-span-1"
                style={{ borderColor: "var(--grey-light)", backgroundColor: "#e3eef1" }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                  Approche
                </p>
                <div
                  className="mt-2 font-heading text-3xl font-bold md:text-4xl"
                  style={{ color: "var(--blue)" }}
                >
                  Sur mesure
                </div>
                <p className="mt-1 font-body text-xs text-brand-grey">
                  devis adapté à votre projet
                </p>
              </div>

              <div
                className="relative col-span-2 overflow-hidden rounded-[24px] border bg-brand-white p-5 md:col-span-1"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                  Réponse
                </p>
                <div
                  className="mt-2 font-heading text-3xl font-bold md:text-4xl"
                  style={{ color: "var(--blue)" }}
                >
                  24-72h
                </div>
                <p className="mt-1 font-body text-xs text-brand-grey">ouvrables</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2 font-body text-xs text-brand-grey sm:gap-3 sm:text-sm md:mt-10">
          <span className="flex items-center gap-2 rounded-full border border-brand-grey-light bg-brand-white px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Sans engagement
          </span>
          <span className="flex items-center gap-2 rounded-full border border-brand-grey-light bg-brand-white px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Réponse sous 24-72h
          </span>
          <span className="flex items-center gap-2 rounded-full border border-brand-grey-light bg-brand-white px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Consultants certifiés v18 & v19
          </span>
        </div>
      </div>
    </section>
  );
}

function HeroBE() {
  return (
    <HeroShell
      bgImage={heroBeImg}
      eyebrow="Odoo Ready Partner · Maroc → Belgique & Canada"
      titleTop="L'expertise d'un Odoo Ready Partner certifié."
      titleAccent="Des tarifs repensés."
      description="Équipe technique au Maroc — consultants certifiés v18 & v19 — à votre service à distance en Belgique et au Canada. Implémentation, modules custom et personnalisation d'Odoo natif sans la lourdeur d'un grand cabinet, avec une approche sur mesure adaptée à votre projet."
    />
  );
}

function HeroMA() {
  return (
    <HeroShell
      bgImage={heroMaImg}
      eyebrow="Partenaire officiel Odoo · Maroc"
      titleTop="Vous avez dépassé Excel."
      titleAccent="Passez à la vitesse supérieure."
      description="HORECA, BTP, Santé, Commerce : équipez-vous des outils des grandes structures avec une approche sur mesure. Nous structurons vos opérations et pilotons votre acquisition."
    />
  );
}

export default function HomePage() {
  const { market } = useMarket();
  useSeo(market);

  return (
    <>
      <JsonLd id="ld-professional-service-home" data={professionalServiceSchema} />
      {market === "MA" ? <HeroMA /> : <HeroBE />}
      <Suspense fallback={null}>
        <HomeFaqJsonLd />
        <HomeBelowFold market={market} />
      </Suspense>
    </>
  );
}
