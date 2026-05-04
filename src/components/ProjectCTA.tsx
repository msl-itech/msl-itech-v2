import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

type Tag = { label: string; ty: number; r: number; accent?: boolean };

// Alternance haut / bas pour reproduire la disposition en zigzag.
// Les tags impairs (bleus) sont en haut, les pairs (jaunes) sont décalés vers le bas.
const defaultTags: Tag[] = [
  { label: "Odoo ERP", ty: -18, r: -8, accent: false },
  { label: "CRM", ty: 18, r: 4, accent: true },
  { label: "Wireframe", ty: -20, r: -3, accent: false },
  { label: "Comptabilité", ty: 17, r: 6, accent: true },
  { label: "Site React", ty: -18, r: -5, accent: false },
  { label: "Stock", ty: 18, r: 3, accent: true },
  { label: "WordPress", ty: -20, r: -6, accent: false },
  { label: "RH & Paie", ty: 17, r: 5, accent: true },
  { label: "Dashboard", ty: -18, r: -4, accent: false },
  { label: "SEO", ty: 18, r: 7, accent: true },
  { label: "Production", ty: -20, r: -2, accent: false },
  { label: "Conseil", ty: 17, r: 6, accent: true },
];

const defaultMarquee = [
  "Odoo ERP",
  "Création Web",
  "SEO",
  "Marketing",
  "Belgique",
  "Maroc",
  "Sur-mesure",
  "Conseil",
];

interface ProjectCTAProps {
  eyebrow?: string;
  titleStart?: string;
  titleEnd?: string;
  ctaLabel?: string;
  ctaTo?: string;
  tags?: Tag[];
  marqueeItems?: string[];
}

export const ProjectCTA = ({
  eyebrow = "Démarrons ensemble",
  titleStart = "Construisons un projet",
  titleEnd = "extraordinaire ensemble",
  ctaLabel = "Contactez-nous",
  ctaTo = "/contact",
  tags = defaultTags,
  marqueeItems = defaultMarquee,
}: ProjectCTAProps) => {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: "var(--blue)" }}
    >
          {/* Halo */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="container relative z-10 px-6 pb-16 pt-20 text-center md:pb-20 md:pt-28">
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
              <Sparkles size={12} className="text-brand-gold" />
              {eyebrow}
            </p>

            {/* Headline */}
            <h2 className="mx-auto mt-7 max-w-4xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[68px]">
              {titleStart}
              <br />
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute inset-x-[-8px] bottom-[8%] -z-0 h-[38%] -rotate-[1.5deg] rounded-[8px]"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                <span className="relative z-10 text-white">{titleEnd}</span>
              </span>
            </h2>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <Link
                to={ctaTo}
                className="group inline-flex items-center gap-3 rounded-full px-7 py-4 font-body text-base font-bold shadow-[0_18px_50px_-15px_rgba(255,221,87,0.6)] transition hover:scale-[1.03]"
                style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
              >
                {ctaLabel}
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full transition group-hover:rotate-45"
                  style={{ backgroundColor: "var(--blue)", color: "var(--gold)" }}
                >
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>
          </div>

          {/* Tags en zigzag sur une seule ligne, chevauchent la bordure */}
          <div className="relative z-30 -mb-5 hidden h-20 w-full overflow-visible md:block">
            <div className="absolute inset-x-0 top-3 flex flex-nowrap items-start justify-center gap-2 px-3 lg:gap-3">
              {tags.map((t, idx) => (
                <span
                  key={`${t.label}-${idx}`}
                  className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border-2 px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.45)] transition hover:scale-105"
                  style={{
                    transform: `translateY(${t.ty}px) rotate(${t.r}deg)`,
                    backgroundColor: t.accent ? "var(--gold)" : "var(--blue)",
                    borderColor: t.accent ? "var(--blue)" : "var(--white)",
                    color: t.accent ? "var(--blue)" : "var(--white)",
                  }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* Tags mobile */}
          <div className="container relative z-30 flex flex-wrap justify-center gap-1.5 px-4 pb-2 md:hidden">
            {tags.slice(0, 6).map((t, idx) => (
              <span
                key={`m-${t.label}-${idx}`}
                className="inline-flex items-center rounded-full border-2 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.1em]"
                style={{
                  backgroundColor: t.accent ? "var(--gold)" : "var(--white)",
                  borderColor: "var(--blue)",
                  color: "var(--blue)",
                  transform: `rotate(${t.r / 2}deg)`,
                }}
              >
                {t.label}
              </span>
            ))}
          </div>

      {/* Bandeau marquee */}
      <div
        className="relative z-10 overflow-hidden border-t py-5"
        style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "var(--black)" }}
      >
        <div className="marquee-cta flex w-max items-center gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, k) => (
            <span
              key={k}
              className="flex items-center gap-10 font-heading text-3xl font-bold uppercase tracking-tight text-white md:text-5xl"
            >
              {item}
              <span style={{ color: "var(--gold)" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;