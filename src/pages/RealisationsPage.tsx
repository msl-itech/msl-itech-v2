import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Star,
  ExternalLink,
  ServerCog,
  Globe,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import { caseStudies } from "@/content/caseStudies";
import pillarWeb from "@/assets/home/pillar-web.webp";
import ctaBg from "@/assets/home/cta-bg.webp";

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
}: {
  children: React.ReactNode;
  rotate?: number;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-2xl border-2 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)]"
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

const odooCasesCount = caseStudies.filter((c) => c.type !== "web").length;
const webCasesCount = 7;

const navCards = [
  {
    to: "/realisations/odoo",
    icon: ServerCog,
    label: "Implémentations Odoo ERP",
    count: odooCasesCount,
    countLabel: "cas clients",
    tags: ["BTP", "HORECA", "Commerce", "Transport", "Santé"],
    desc: "Du cadrage au déploiement — ERP complets pour des PME ambitieuses au Maroc, en Belgique et au Cameroun.",
    cta: "Voir les cas Odoo",
    accentBg: "rgba(18,77,90,0.06)",
  },
  {
    to: "/realisations/sites-web",
    icon: Globe,
    label: "Sites Web & Plateformes",
    count: webCasesCount,
    countLabel: "projets livrés",
    tags: ["React", "WordPress", "SEO", "Performance", "Mobile-first"],
    desc: "Sites hautes performances et plateformes sur mesure pour des entreprises en Belgique et au Maroc.",
    cta: "Voir les créations web",
    accentBg: "rgba(255,221,87,0.12)",
  },
];

export default function RealisationsPage() {
  useProductSeo({
    title: "Nos Réalisations — ERP Odoo & Sites Web | MSL-iTECH",
    description:
      "Découvrez les projets Odoo ERP et sites web réalisés par MSL-iTECH au Maroc, en Belgique et au Cameroun. Références vérifiables sur odoo.com/partners.",
    path: "/realisations",
    breadcrumbs: [
      { name: "Accueil", url: "https://msl-itech.com/" },
      { name: "Réalisations", url: "https://msl-itech.com/realisations" },
    ],
  });

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate rounded-[28px] md:rounded-[36px]">
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
              <img
                src={pillarWeb}
                alt="Projets Odoo ERP et sites web réalisés par MSL-iTECH pour des PME"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,30,38,0.55) 0%, rgba(10,30,38,0.72) 55%, rgba(10,30,38,0.90) 100%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-25 blur-3xl"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            <HeroCursorGlow radius="inherit" />

            <div className="absolute -top-3 left-8 z-20 md:-top-4 md:left-12">
              <Sticker rotate={-8}>★ Références vérifiables</Sticker>
            </div>

            <div className="relative flex min-h-[380px] flex-col items-center justify-center px-6 py-20 text-center md:min-h-[460px] md:py-24">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  Réalisations · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-8 max-w-3xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-[60px] lg:text-[68px]">
                Nos preuves,{" "}
                <span className="italic font-light text-white">
                  <Mark>publiquement</Mark>
                </span>{" "}
                vérifiables.
              </h1>

              <p className="mt-6 max-w-xl font-body text-base text-white/80 md:text-lg">
                Implémentations Odoo ERP et créations web — consultables sur
                notre fiche partenaire officielle Odoo en un clic.
              </p>
            </div>

            {/* Breadcrumb pill */}
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
                <ArrowRight size={14} className="text-brand-gold" />
                <span className="font-body text-sm font-semibold text-brand-blue">
                  Réalisations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NAV CARDS ── */}
      <section className="bg-brand-white py-24 md:py-28">
        <div className="container">
          <div className="mb-14 text-center">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Choisissez votre univers
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base text-brand-grey">
              Deux expertises complémentaires — explorez nos références par
              domaine.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {navCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.to}
                  to={card.to}
                  className="group relative isolate overflow-hidden rounded-[28px] border p-8 transition hover:-translate-y-1 hover:shadow-2xl md:p-10"
                  style={{
                    borderColor: "var(--grey-light)",
                    backgroundColor: card.accentBg,
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                    style={{ backgroundColor: "var(--gold)" }}
                  />

                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: "var(--blue)", color: "white" }}
                    >
                      <Icon size={26} />
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-4xl font-bold text-brand-black">
                        {card.count}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                        {card.countLabel}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-heading text-2xl font-bold text-brand-black md:text-3xl">
                      {card.label}
                    </h3>
                    <p className="mt-3 font-body text-base text-brand-grey leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {card.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border bg-brand-white px-3 py-1 font-body text-xs text-brand-black"
                        style={{ borderColor: "var(--grey-light)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 font-body text-base font-bold text-brand-blue">
                    {card.cta}
                    <ArrowRight size={18} className="transition group-hover:translate-x-1.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ODOO PARTNER ── */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div
            className="relative isolate rounded-[28px] p-10 lg:p-16"
            style={{ backgroundColor: "var(--blue)" }}
          >
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
              <div
                className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
                style={{ backgroundColor: "var(--gold)" }}
              />
            </div>
            <div className="absolute -top-4 left-8 z-20">
              <Sticker rotate={-6}>★ Partenaire officiel</Sticker>
            </div>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">
                  Vérifiez par vous-même
                </p>
                <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
                  Nos références sont consultables sur{" "}
                  <span className="italic font-light">odoo.com/partners</span>
                </h2>
                <p className="mt-5 max-w-xl font-body text-base text-white/80">
                  Statut, certifications et clients : tout est public. Aucune
                  promesse en l'air, juste des preuves vérifiables.
                </p>
              </div>
              <div className="flex justify-start lg:col-span-4 lg:justify-end">
                <a
                  href="https://www.odoo.com/fr_FR/partners/country/maroc-132?search=msl-itech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  Voir odoo.com/partners
                  <ExternalLink size={16} className="transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative isolate overflow-hidden bg-brand-black py-24 md:py-28">
        <HeroCursorGlow color="rgba(255, 221, 87, 1)" size={620} intensity={0.55} />
        <img
          src={ctaBg}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
          loading="lazy"
          decoding="async"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,13,13,0.7) 0%, rgba(18,77,90,0.85) 100%)",
          }}
        />
        <div className="container text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
            <Star size={12} className="text-brand-gold" />
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
              À votre tour
            </p>
          </div>
          <h2 className="mx-auto mt-7 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Votre projet est <Mark>le prochain.</Mark>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-base text-white/80 md:text-lg">
            Réponse sous 24h · Consultant dédié · Sans engagement
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group cta-pulse-gold hover-shine inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black transition hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Réserver ma démo gratuite
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/odoo-erp"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Découvrir Odoo ERP
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
