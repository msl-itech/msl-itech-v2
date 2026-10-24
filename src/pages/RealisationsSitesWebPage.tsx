import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  Sparkles,
  Globe,
  Zap,
  Search,
  Smartphone,
  Code2,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
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

type WebProject = {
  href: string;
  url: string;
  label: string;
  tag: string;
  region: string;
  desc: string;
  tech: string[];
  /** Si le projet a une page cas client détaillée. */
  caseSlug?: string;
};

const webProjects: WebProject[] = [
  {
    href: "https://www.wamlekfaya.com/",
    url: "wamlekfaya.com",
    label: "Wam Lek Faya",
    tag: "eCommerce & Branding",
    region: "International",
    desc: "Boutique en ligne réalisée sous Odoo eCommerce, design sur mesure et identité de marque.",
    tech: ["Odoo eCommerce", "Branding"],
  },
  {
    href: "https://www.novatrait.com/",
    url: "novatrait.com",
    label: "NovaTrait",
    tag: "Site corporate",
    region: "Québec",
    desc: "Site corporate avec architecture SEO complète pour une société de services industriels.",
    tech: ["WordPress", "SEO"],
  },
  {
    href: "https://mslanalytica.com/",
    url: "mslanalytica.com",
    label: "MSL Analytica",
    tag: "Corporate B2B",
    region: "Maroc · Belgique",
    desc: "Plateforme corporate B2B dédiée au pilotage financier des PME.",
    tech: ["Corporate", "Finance"],
  },
  {
    href: "https://msales.ma/",
    url: "msales.ma",
    label: "M-Sales Strategy",
    tag: "Stratégie B2B",
    region: "Maroc",
    desc: "Plateforme de stratégie et d'outils commerciaux B2B pour PME marocaines.",
    tech: ["Corporate", "B2B"],
  },
  {
    href: "https://odoo-finances.pro/",
    url: "odoo-finances.pro",
    label: "Odoo Finance",
    tag: "Conseil Odoo",
    region: "Belgique · Maroc",
    desc: "Conseil Odoo et finances pour PME — Belgique et Maroc.",
    tech: ["Odoo", "Finance"],
  },
  {
    href: "https://odoo-systems.pro/",
    url: "odoo-systems.pro",
    label: "Odoo Systems",
    tag: "Organisation ERP",
    region: "Belgique · Maroc",
    desc: "Organisation d'entreprise sous Odoo — intégration et accompagnement.",
    tech: ["Odoo", "ERP"],
  },
  {
    href: "https://mfinances.be/",
    url: "mfinances.be",
    label: "MFinances",
    tag: "Expertise comptable",
    region: "Belgique",
    desc: "Site pour un cabinet d'expertise comptable basé à Bruxelles.",
    tech: ["WordPress", "Corporate"],
  },
  {
    href: "https://aishd.be/",
    url: "aishd.be",
    label: "AIS Hector Denis",
    tag: "Institutionnel",
    region: "Belgique",
    desc: "Refonte du site institutionnel d'une agence immobilière sociale en Région bruxelloise.",
    tech: ["WordPress"],
    caseSlug: "ais-hector-denis",
  },
];

const approachCards = [
  {
    number: "01",
    icon: Zap,
    tagline: "Performance d'abord",
    title: "Votre site s'affiche en moins de 2 s.",
    desc: "React (Vite) ou WordPress optimisé à fond : images next-gen, lazy loading, cache agressif. Vos visiteurs n'attendent pas — et Google le remarque.",
    badge: "TTI < 2 s · Lighthouse 90+",
    gold: true,
  },
  {
    number: "02",
    icon: Search,
    tagline: "SEO intégré dès la maquette",
    title: "Google vous trouve. Vraiment.",
    desc: "Structure sémantique, Schema.org, sitemap XML, robots.txt — le SEO n'est pas une option qu'on rajoute à la fin. Il est dans chaque balise, chaque URL, chaque titre.",
    badge: "On-page · Technique · Schema.org",
    gold: false,
  },
  {
    number: "03",
    icon: Smartphone,
    tagline: "Mobile-first & accessible",
    title: "Impeccable sur tous les écrans.",
    desc: "Testé sur mobile, tablette et desktop avant chaque livraison. Contraste, navigation clavier, ARIA — parce que chaque utilisateur compte.",
    badge: "WCAG 2.1 AA · Responsive",
    gold: true,
  },
  {
    number: "04",
    icon: Code2,
    tagline: "Code propre & documenté",
    title: "Vous restez maîtres à bord.",
    desc: "TypeScript strict, composants réutilisables, tests automatisés. Votre équipe peut reprendre la main sans nous appeler — c'est fait exprès.",
    badge: "TypeScript · Tests · Docs",
    gold: false,
  },
];

export default function RealisationsSitesWebPage() {
  useProductSeo({
    title: "Réalisations Sites Web & Plateformes — MSL-iTECH",
    description:
      "8 sites web et plateformes conçus par MSL-iTECH pour des entreprises en Belgique, au Maroc et au Québec. React, WordPress, SEO intégré, design sur mesure.",
    path: "/realisations/sites-web",
    breadcrumbs: [
      { name: "Accueil", url: "https://msl-itech.com/" },
      { name: "Réalisations", url: "https://msl-itech.com/realisations" },
      { name: "Sites Web & Plateformes", url: "https://msl-itech.com/realisations/sites-web" },
    ],
  });


  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate rounded-[28px] md:rounded-[36px]">
            <div
              className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]"
              style={{
                background:
                  "linear-gradient(135deg, var(--blue) 0%, rgba(18,77,90,0.85) 60%, rgba(10,30,38,0.95) 100%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full opacity-15 blur-3xl"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <HeroCursorGlow radius="inherit" />

            <div className="absolute -top-3 left-8 z-20 md:-top-4 md:left-12">
              <Sticker rotate={-8}>★ {webProjects.length} sites livrés</Sticker>
            </div>

            <div className="relative flex min-h-[420px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[500px] md:py-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  Sites Web & Plateformes · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-[60px] lg:text-[72px]">
                Sites & plateformes{" "}
                <span className="italic font-light">
                  <Mark>qui convertissent.</Mark>
                </span>
              </h1>

              <p className="mt-7 max-w-2xl font-body text-base text-white/80 md:text-lg">
                De la maquette à la mise en production — {webProjects.length} sites React et
                WordPress sur mesure pour des entreprises en Belgique, au Maroc et au
                Québec.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {["React + Vite", "WordPress", "Odoo eCommerce", "TypeScript", "SEO on-page"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Breadcrumb pill */}
            <div className="absolute -bottom-5 right-6 z-30 md:right-10">
              <div
                className="flex items-center gap-3 rounded-full border bg-brand-white px-5 py-2.5 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.25)]"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <Link to="/" className="font-body text-sm text-brand-grey transition hover:text-brand-blue">
                  Accueil
                </Link>
                <ArrowRight size={14} className="text-brand-gold" />
                <Link to="/realisations" className="font-body text-sm text-brand-grey transition hover:text-brand-blue">
                  Réalisations
                </Link>
                <ArrowRight size={14} className="text-brand-gold" />
                <span className="font-body text-sm font-semibold text-brand-blue">Sites Web</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end mb-14">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Sites & plateformes
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                {webProjects.length} créations <Mark>en ligne.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              Chaque site est consultable en un clic — React, WordPress ou Odoo
              eCommerce selon le besoin.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {webProjects.map((p) => (
              <div
                key={p.url}
                className="group relative isolate flex flex-col justify-between overflow-hidden rounded-[24px] border bg-brand-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <div
                  className="pointer-events-none absolute -bottom-14 -right-14 h-40 w-40 rounded-full opacity-0 blur-2xl transition group-hover:opacity-60"
                  style={{ backgroundColor: "var(--gold)" }}
                />

                <div>
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "var(--blue)" }}
                    >
                      <Globe size={18} className="text-white" />
                    </div>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-grey transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue"
                      aria-label={`Visiter ${p.label}`}
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>

                  <div className="mt-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-blue">
                        {p.tag}
                      </span>
                      <span className="font-mono text-[9px] text-brand-grey">· {p.region}</span>
                    </div>
                    <h3 className="mt-2 font-heading text-xl font-bold text-brand-black">
                      {p.label}
                    </h3>
                    <p className="mt-2 font-body text-sm text-brand-grey leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border bg-brand-bg px-2.5 py-0.5 font-body text-xs text-brand-black"
                        style={{ borderColor: "var(--grey-light)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-brand-blue/70 underline-offset-2 hover:underline"
                  >
                    {p.url}
                  </a>
                  {p.caseSlug && (
                    <Link
                      to={`/realisations/${p.caseSlug}`}
                      className="inline-flex items-center gap-1 font-body text-xs font-semibold text-brand-blue hover:underline"
                    >
                      Cas client
                      <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROCHE WEB ── */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          {/* Header */}
          <div className="mb-16 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Notre méthode
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-5xl">
                Un site qui <Mark>travaille pour vous.</Mark>
              </h2>
            </div>
            <p className="max-w-sm font-body text-base text-brand-grey lg:text-right">
              Quatre engagements concrets — pas de jargon, pas de promesses creuses.
            </p>
          </div>

          {/* Cards 2×2 */}
          <div className="grid gap-5 sm:grid-cols-2">
            {approachCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.number}
                  className="relative isolate overflow-hidden rounded-[28px] border bg-brand-white p-8 md:p-10"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  {/* Numéro décoratif en arrière-plan */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-3 -top-4 font-heading text-[96px] font-bold leading-none select-none"
                    style={{
                      color: card.gold ? "rgba(255,221,87,0.18)" : "rgba(18,77,90,0.07)",
                    }}
                  >
                    {card.number}
                  </span>

                  {/* Icône */}
                  <div
                    className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl"
                    style={{
                      width: 52,
                      height: 52,
                      backgroundColor: card.gold
                        ? "rgba(255,221,87,0.2)"
                        : "rgba(18,77,90,0.08)",
                      color: card.gold ? "#a07800" : "var(--blue)",
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  {/* Tagline */}
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
                    {card.tagline}
                  </p>

                  {/* Titre */}
                  <h3 className="mt-2 font-heading text-2xl font-bold leading-snug text-brand-black">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 font-body text-sm text-brand-grey leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Badge promesse */}
                  <div className="mt-6">
                    <span
                      className="inline-block rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em]"
                      style={{
                        backgroundColor: card.gold
                          ? "rgba(255,221,87,0.22)"
                          : "rgba(18,77,90,0.07)",
                        color: card.gold ? "#856200" : "var(--blue)",
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CROSS-LINK ODOO ── */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="container">
          <div
            className="flex flex-col items-start gap-6 rounded-[24px] border p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10"
            style={{ borderColor: "var(--grey-light)" }}
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
                Voir aussi
              </p>
              <p className="mt-2 font-heading text-2xl font-bold text-brand-black md:text-3xl">
                Nos implémentations Odoo ERP
              </p>
              <p className="mt-2 font-body text-sm text-brand-grey">
                17 cas clients livrés au Maroc, en Belgique et au Cameroun —
                BTP, HORECA, commerce, transport.
              </p>
            </div>
            <Link
              to="/realisations/odoo"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 px-6 py-3.5 font-body text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
              style={{ borderColor: "var(--blue)" }}
            >
              Voir les cas Odoo
              <ArrowRight size={16} />
            </Link>
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
              Votre projet
            </p>
          </div>
          <h2 className="mx-auto mt-7 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Votre site est <Mark>le prochain.</Mark>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-base text-white/80 md:text-lg">
            Réponse sous 24h · Devis gratuit · Sans engagement
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group cta-pulse-gold hover-shine inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black transition hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Discuter de mon projet web
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/realisations/odoo"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Voir les réalisations Odoo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
