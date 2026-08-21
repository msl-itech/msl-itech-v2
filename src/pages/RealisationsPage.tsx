import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Building2,
  Home,
  Globe,
  ExternalLink,
  CheckCircle2,
  Star,
  ShoppingBag,
  Church,
  Hammer,
  Baby,
  HeartPulse,
  Briefcase,
  Truck,
  Zap,
  Landmark,
  Leaf,
  Factory,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import { caseStudies } from "@/content/caseStudies";
import { caseImageByKey, caseImageAlt } from "@/lib/case-images";
import pillarWeb from "@/assets/home/pillar-web.webp";
import ctaBg from "@/assets/home/cta-bg.webp";

const caseIcons: Record<string, typeof Building2> = {
  Landmark,
  Home,
  Building2,
  ShoppingBag,
  Church,
  Hammer,
  Baby,
  HeartPulse,
  Briefcase,
  Truck,
  Zap,
  Leaf,
  Factory,
};


/* ---------------- Highlight (marker brushstroke) ---------------- */
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

/* ---------------- Sticker ---------------- */
function Sticker({
  children,
  rotate = -6,
  className = "",
}: {
  children: React.ReactNode;
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


const webProjects = [
  { url: "odoo-finances.pro", label: "Odoo Finances", tag: "Showcase ERP" },
  { url: "mfinances.be", label: "M-Finances", tag: "Cabinet conseil" },
  { url: "msales.ma", label: "M-Sales Strategy", tag: "Stratégie B2B" },
  { url: "novatrait.com", label: "Novatrait", tag: "Industrie & Services" },
];

export default function RealisationsPage() {
  useProductSeo({
    title: "Nos Réalisations Odoo & Web — Cas Clients MSL-iTECH",
    description:
      "Découvrez les projets Odoo et sites web réalisés par MSL-iTECH au Maroc. BTP, HORECA, immobilier, services. Références vérifiables sur odoo.com/partners.",
    path: "/realisations",
  });

  return (
    <>
      {/* HERO — image overlay (style /odoo-erp) */}
      <section className="bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate rounded-[28px] md:rounded-[36px]">
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
              <img
                src={pillarWeb}
                alt="Aperçu de projets Odoo déployés par MSL-iTECH pour des PME marocaines — interfaces ERP, CRM et gestion de stock"
                className="absolute inset-0 h-full w-full object-cover"
              loading="eager" fetchPriority="high" decoding="async"/>
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,30,38,0.55) 0%, rgba(10,30,38,0.7) 55%, rgba(10,30,38,0.88) 100%)",
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

            <div className="absolute -top-3 left-8 z-20 md:-top-4 md:left-12">
              <Sticker rotate={-8}>★ Références vérifiables</Sticker>
            </div>

            <div className="relative flex min-h-[420px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[520px] md:py-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  Réalisations · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-[64px] lg:text-[76px]">
                Nos preuves,{" "}
                <span className="italic font-light text-brand-gold">
                  publiquement
                </span>{" "}
                <Mark>vérifiables.</Mark>
              </h1>

              <p className="mt-7 max-w-2xl font-body text-base text-white/80 md:text-lg">
                Les meilleures preuves viennent de nos clients et de notre fiche
                partenaire officielle Odoo — consultable et vérifiable en un clic.
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

      {/* ODOO CASES */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Cas clients Odoo
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Implémentations
                <br />
                <Mark>livrées.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              Du cadrage au déploiement — voici comment nous transformons la
              gestion quotidienne de PME ambitieuses.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((c, idx) => {
              const Icon = caseIcons[c.iconKey] ?? Building2;
              return (
                <article
                  key={c.slug}
                  className="group relative isolate overflow-hidden rounded-[28px] border bg-brand-white shadow-sm transition hover:shadow-xl"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  {/* Image header — illustration sectorielle */}
                  <div className="relative h-56 overflow-hidden md:h-64">
                    <img
                      src={caseImageByKey[c.imageKey]}
                      alt={caseImageAlt(c.sector, c.imageIsIllustration, c.name)}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(18,77,90,0.15) 0%, rgba(18,77,90,0.75) 100%)",
                      }}
                    />
                    <div className="absolute left-5 top-5">
                      <Sticker rotate={idx % 2 === 0 ? -6 : 6}>
                        Cas {String(idx + 1).padStart(2, "0")}
                      </Sticker>
                    </div>
                    {c.imageIsIllustration && (
                      <span className="absolute right-4 top-5 rounded-full bg-black/45 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/85 backdrop-blur-sm">
                        Illustration sectorielle
                      </span>
                    )}
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold">
                        {c.sector} — {c.country}
                      </p>
                      <h3 className="mt-2 font-heading text-2xl font-bold text-white md:text-3xl">
                        {c.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8">
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: "rgba(18,77,90,0.08)", color: "var(--blue)" }}
                      >
                        <Icon size={20} />
                      </div>
                      <p className="font-body text-base text-brand-grey">{c.context}</p>
                    </div>

                    <div className="mt-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
                        Solution déployée
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {c.modules.map((m) => (
                          <li
                            key={m}
                            className="rounded-full border bg-brand-bg px-3 py-1 font-body text-xs text-brand-black"
                            style={{ borderColor: "var(--grey-light)" }}
                          >
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="mt-6 flex items-start gap-3 rounded-2xl p-4"
                      style={{ backgroundColor: "rgba(255,221,87,0.18)" }}
                    >
                      <CheckCircle2
                        size={18}
                        style={{ color: "var(--blue)" }}
                        className="mt-0.5 shrink-0"
                      />
                      <p className="font-body text-sm text-brand-black">{c.result}</p>
                    </div>

                    <Link
                      to={`/realisations/${c.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-body text-sm font-bold text-brand-blue"
                    >
                      Lire le cas client
                      <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* WEB PROJECTS */}
      <section id="sites-plateformes" className="bg-brand-white py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Sites & plateformes
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Créations <Mark>web.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              Sites React haute performance, plateformes WordPress et refontes
              pour des entreprises en Belgique et au Maroc.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {webProjects.map((p, i) => (
              <a
                key={p.url}
                href={`https://${p.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative isolate flex flex-col justify-between overflow-hidden rounded-[24px] border bg-brand-bg p-6 transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--grey-light)", minHeight: 200 }}
              >
                <div
                  className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition group-hover:opacity-60"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--blue)" }}
                  >
                    <Globe size={18} className="text-white" />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-brand-grey transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-blue"
                  />
                </div>
                <div className="mt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-grey">
                    {p.tag}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-bold text-brand-black">
                    {p.label}
                  </h3>
                  <p className="mt-1 font-body text-xs text-brand-grey">{p.url}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ODOO PARTNER */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div
            className="relative isolate rounded-[28px] p-10 lg:p-16"
            style={{ backgroundColor: "var(--blue)" }}
          >
            {/* Glow clipped inside */}
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
                  <ExternalLink
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-brand-black py-24 md:py-28">
        <HeroCursorGlow color="rgba(255, 221, 87, 1)" size={620} intensity={0.55} />
        <img
          src={ctaBg}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        loading="lazy" decoding="async"/>
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
