import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Globe2,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { useMarket } from "@/hooks/useMarket";

import heroBeImg from "@/assets/hero-be.webp";
import heroMaImg from "@/assets/hero-ma.webp";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import pillarErp from "@/assets/home/pillar-erp.webp";
import pillarWeb from "@/assets/home/pillar-web.webp";
import pillarMarketing from "@/assets/home/pillar-marketing.webp";
import sectorServices from "@/assets/home/sector-services.webp";
import sectorEngineering from "@/assets/home/sector-engineering.webp";
import sectorB2b from "@/assets/home/sector-b2b.webp";
import sectorHr from "@/assets/home/sector-hr.webp";
import sectorScaleup from "@/assets/home/sector-scaleup.webp";
import sectorHoreca from "@/assets/home/sector-horeca.webp";
import sectorBtp from "@/assets/home/sector-btp.webp";
import sectorHealth from "@/assets/home/sector-health.webp";
import sectorWholesale from "@/assets/home/sector-wholesale.webp";
import sectorLogistics from "@/assets/home/sector-logistics.webp";
import sectorFood from "@/assets/home/sector-food.webp";
import caseBe from "@/assets/home/case-be.webp";
import caseMa from "@/assets/home/case-ma.webp";
import { JsonLd, professionalServiceSchema } from "@/components/JsonLd";

/* ------------------------------ SEO ------------------------------ */
function useSeo(market: "BE" | "MA") {
  useEffect(() => {
    const title =
      market === "MA"
        ? "Intégration Odoo Maroc | ERP PME & Digital — MSL-iTECH"
        : "Expert Odoo Belgique | Intégration ERP & Digital — MSL-iTECH";
    const desc =
      market === "MA"
        ? "Intégrateur Odoo certifié au Maroc. Solutions ERP sur mesure pour HORECA, BTP, Santé et Commerce. À partir de 199 MAD/mois. Démo gratuite."
        : "Partenaire officiel Odoo en Belgique. Implémentation ERP, création web et marketing digital pour PME. Packs d'heures 20 à 50% plus accessibles que les Success Packs observés sur le marché belge. Démo gratuite.";
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
        style={{
          backgroundColor: "var(--gold)",
          filter: "blur(0.3px)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

/* ------------------- Sticker (gold rotated badge) ------------------- */
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
  // try to mark the last word of the accent phrase for visual signature
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
          {/* LEFT — Title + CTA (no card, plain background) */}
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

          {/* RIGHT — Bento grid (4 cols × 2 rows) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {/* Big stat — blue card with avatars */}
              <div
                className="relative isolate col-span-4 overflow-hidden rounded-[24px] p-5 md:col-span-2 md:row-span-1 md:min-h-[260px] md:p-6"
                style={{ backgroundColor: "var(--blue)" }}
              >
                <div
                  className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full opacity-30 blur-2xl"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                {/* avatar stack */}
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
                  9+
                </div>
                <p className="mt-1 font-body text-sm text-white/85">
                  références publiques vérifiables sur odoo.com
                </p>

                {/* video sticker badge */}
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

              {/* Big image — portrait/team (hidden on mobile to shorten hero) */}
              <div
                className="relative col-span-4 hidden aspect-[4/3] overflow-hidden rounded-[24px] border md:col-span-2 md:row-span-2 md:block md:aspect-auto md:min-h-[540px]"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <img
                  src={bgImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                loading="eager" fetchPriority="high" decoding="async"/>
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(18,77,90,0.0) 40%, rgba(10,45,54,0.55) 100%)",
                  }}
                />
                <div className="absolute left-5 top-5">
                  <Sticker rotate={-6}>★ Partenaire Odoo</Sticker>
                </div>
                <HeroCursorGlow radius="24px" />
              </div>

              {/* Small white stat 1 */}
              <div
                className="relative col-span-2 overflow-hidden rounded-[24px] border p-5 md:col-span-1"
                style={{ borderColor: "var(--grey-light)", backgroundColor: "#e3eef1" }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                  Tarifs
                </p>
                <div
                  className="mt-2 font-heading text-3xl font-bold md:text-4xl"
                  style={{ color: "var(--blue)" }}
                >
                  20-50%
                </div>
                <p className="mt-1 font-body text-xs text-brand-grey">
                  plus accessibles
                </p>
              </div>

              {/* Small white stat 2 */}
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

        {/* Trust pills row */}
        <div className="mt-8 flex flex-wrap items-center gap-2 font-body text-xs text-brand-grey sm:gap-3 sm:text-sm md:mt-10">
          <span className="flex items-center gap-2 rounded-full border border-brand-grey-light bg-brand-white px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Sans engagement
          </span>
          <span className="flex items-center gap-2 rounded-full border border-brand-grey-light bg-brand-white px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Réponse sous 24-72h
          </span>
          <span className="flex items-center gap-2 rounded-full border border-brand-grey-light bg-brand-white px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Certifié Odoo 17+
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
      eyebrow="Partenaire officiel Odoo · Belgique"
      titleTop="L'expertise d'un partenaire officiel certifié."
      titleAccent="Des tarifs repensés."
      description="Votre PME mérite un ERP performant sans la lourdeur d'un grand cabinet. Profitez de packs d'heures 20 à 50% plus accessibles que les standards du marché belge, sans compromis sur la qualité."
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
      description="HORECA, BTP, Santé, Commerce : équipez-vous des outils des grandes structures au prix du marché marocain. Nous structurons vos opérations et pilotons votre acquisition."
    />
  );
}

/* ------------------------------ Social proof ticker ------------------------------ */
function SocialProof() {
  const items = [
    <>
      ✓ Partenaire officiel{" "}
      <a
        href="https://www.odoo.com/fr_FR/partners/country/maroc-132?search=msl-itech"
        target="_blank"
        rel="noreferrer"
        className="underline decoration-brand-gold underline-offset-4"
      >
        Odoo
      </a>
    </>,
    "✓ Certifié Odoo 17+",
    "✓ Belgique · Maroc · Canada",
    "✓ 9 références publiques vérifiées",
    "✓ Tarifs 20 à 50% plus compétitifs",
    "✓ Réponse sous 24 à 72h ouvrables",
  ];
  const doubled = [...items, ...items, ...items];
  return (
    <section
      className="relative overflow-hidden border-y py-5"
      style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "var(--black)" }}
    >
      <div className="marquee-cta flex w-max items-center gap-10 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-heading text-3xl font-bold uppercase tracking-tight text-white md:text-5xl"
          >
            {item}
            <span style={{ color: "var(--gold)" }}>✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Pillars (Bento) ------------------------------ */
function Pillars() {
  return (
    <section className="container py-24 md:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-10 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              Notre écosystème
            </p>
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
            Structurer.
            <br />
            Construire. <Mark>Accélérer.</Mark>
          </h2>
        </div>
        <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
          Bien plus qu'une agence. Un interlocuteur unique qui aligne votre gestion interne (ERP)
          avec votre croissance externe (Web & Marketing).
        </p>
      </div>

      {/* Bento 6-col */}
      <div className="mt-16 grid gap-5 lg:grid-cols-6">
        {/* Big ERP card — 4 cols, 2 rows */}
        <Link
          to="/odoo-crm-ventes"
          className="group relative isolate flex min-h-[520px] flex-col justify-between rounded-[28px] p-10 lg:col-span-4 lg:row-span-2"
          style={{ backgroundColor: "var(--blue)" }}
        >
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
          <img
            src={pillarErp}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 group-hover:opacity-50 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(18,77,90,0.85) 0%, rgba(10,45,54,0.92) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-25 blur-3xl"
            style={{ backgroundColor: "var(--gold)" }}
          />
          </div>

          {/* Sticker */}
          <div className="absolute -top-4 right-6 z-20">
            <Sticker rotate={8}>Pilier 01</Sticker>
          </div>

          <div className="flex items-start justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">
              Pilier central
            </p>
            <ArrowUpRight
              size={28}
              className="text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-gold"
            />
          </div>

          <div>
            <h3 className="max-w-md font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
              L'ERP qui structure vos opérations.
            </h3>
            <p className="mt-5 max-w-md font-body text-base text-white/75">
              Finance, CRM, Stock, RH. Odoo rassemble tous vos outils en un seul écosystème
              intelligent et centralisé.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Finance", "CRM", "Stock", "RH", "Production"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Floating mini-card mockup */}
          <div
            className="absolute bottom-8 right-8 hidden w-[220px] rounded-2xl border bg-brand-white p-4 shadow-2xl lg:block"
            style={{ borderColor: "var(--grey-light)", transform: "rotate(4deg)" }}
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-grey">
              CRM · Pipeline
            </p>
            <div className="mt-2 space-y-1.5">
              <div className="h-2 w-full rounded-full bg-brand-blue-light" />
              <div className="h-2 w-3/4 rounded-full bg-brand-blue-light" />
              <div className="h-2 w-1/2 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
            </div>
            <div className="mt-3 font-heading text-xl font-bold text-brand-blue">+24%</div>
          </div>
        </Link>

        {/* Web — 2 cols */}
        <Link
          to="/creation-web"
          className="group relative isolate flex min-h-[250px] flex-col justify-between rounded-[28px] p-7 lg:col-span-2"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
          <img
            src={pillarWeb}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/45 to-brand-black/20" />
          </div>
          <div className="absolute -top-4 right-5 z-20">
            <Sticker rotate={-6}>Pilier 02</Sticker>
          </div>
          <div className="flex items-start justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">
              02 — Web
            </p>
            <ArrowUpRight
              size={22}
              className="text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-gold"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">Création & Refonte</h3>
            <p className="mt-2 font-body text-sm text-white/75">
              Sites vitrines et e-commerce taillés pour la conversion.
            </p>
          </div>
        </Link>

        {/* Marketing — 2 cols */}
        <Link
          to="/marketing-digital"
          className="group relative isolate flex min-h-[250px] flex-col justify-between rounded-[28px] p-7 lg:col-span-2"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
          <img
            src={pillarMarketing}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/45 to-brand-black/20" />
          </div>
          <div className="absolute -top-4 right-5 z-20">
            <Sticker rotate={7}>Pilier 03</Sticker>
          </div>
          <div className="flex items-start justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">
              03 — Growth
            </p>
            <ArrowUpRight
              size={22}
              className="text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-gold"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">Marketing Digital</h3>
            <p className="mt-2 font-body text-sm text-white/75">
              Acquisition IA, SEO et campagnes ciblées.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------ Sectors ------------------------------ */
const sectorsBE = [
  { label: "HORECA", desc: "Restaurants, cafés, hôtels", img: sectorHoreca, to: "/odoo-horeca-maroc" as string | null },
  { label: "BTP & Construction", desc: "Marchés publics, chantiers", img: sectorBtp, to: "/odoo-btp-maroc" },
  { label: "Santé & Pharma", desc: "Cliniques, distribution", img: sectorHealth, to: "/odoo-sante-maroc" },
  { label: "Commerce & Stock", desc: "Multi-dépôts, e-commerce", img: sectorWholesale, to: "/odoo-gestion-stock-maroc" },
  { label: "Transport & Logistique", desc: "Flotte, expéditions", img: sectorLogistics, to: "/odoo-transport-logistique-maroc" },
];

const sectorsMA = [
  { label: "HORECA", to: "/odoo-horeca-maroc", desc: "Restaurants, cafés, hôtels", img: sectorHoreca },
  { label: "BTP & Construction", to: "/odoo-btp-maroc", desc: "Marchés publics, chantiers", img: sectorBtp },
  { label: "Santé & Pharma", to: "/odoo-sante-maroc", desc: "Cliniques, distribution", img: sectorHealth },
  { label: "Commerce de gros", to: "/odoo-gestion-stock-maroc", desc: "Multi-dépôts, e-commerce", img: sectorWholesale },
  { label: "Logistique", to: "/odoo-transport-logistique-maroc", desc: "Flotte, expéditions", img: sectorLogistics },
  { label: "Agroalimentaire", to: null as string | null, desc: "Production, traçabilité", img: sectorFood },
];

function Sectors({ market }: { market: "BE" | "MA" }) {
  const items = market === "MA" ? sectorsMA : sectorsBE;
  // Layout asymétrique inspiré de la référence (5 cartes) :
  // ┌───────────────┬─────────────┐
  // │  Carte 1      │  Carte 2    │  ← ligne 1 : grande gauche (vedette) + carte droite haute
  // │  (vedette)    ├──────┬──────┤
  // │  4×2          │  3   │  4   │  ← ligne 2 : 2 petites
  // ├───────┬───────┴──────┴──────┤
  // │  5    │   (carte 5 large)   │  ← ligne 3 : 1 large pleine largeur droite
  // └───────┴─────────────────────┘
  // Grille 6 col / row 240px.
  const layout = [
    "lg:col-span-3 lg:row-span-2", // 1 — vedette HORECA (réduite)
    "lg:col-span-3 lg:row-span-1", // 2 — moyenne haut-droite (élargie)
    "lg:col-span-1 lg:row-span-1", // 3 — petite milieu-droite gauche
    "lg:col-span-2 lg:row-span-1", // 4 — milieu-droite droite (équilibrée)
    "lg:col-span-6 lg:row-span-1", // 5 — bandeau pleine largeur en bas
  ];
  return (
    <section className="relative overflow-hidden bg-brand-white">
      {/* Décor de fond éditorial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(var(--blue) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: "var(--blue-light)" }}
      />
      <div className="container py-24 md:py-28">
        {/* Header éditorial sur 2 colonnes */}
        <div className="relative grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-brand-blue" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                Secteurs · {items.length} expertises
              </p>
            </div>
            <h2 className="font-heading text-4xl font-bold leading-[1.02] tracking-tight text-brand-black md:text-6xl lg:text-[68px]">
              Pensé pour <Mark>votre réalité</Mark> terrain.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body text-base text-brand-grey md:text-lg">
              Chaque industrie a ses codes. Nos implémentations Odoo sont pré-configurées pour vos
              cas d'usage spécifiques — pas de gabarit générique.
            </p>
            <Link
              to="/realisations"
              className="group mt-5 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue"
            >
              <span className="relative">
                Voir toutes nos réalisations
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-0"
                  style={{ backgroundColor: "var(--blue)" }}
                />
              </span>
              <ArrowUpRight
                size={14}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="relative mt-14 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-6 md:gap-5">
          {items.map((s, i) => {
            const isClickable = !!s.to;
            const span = layout[i % layout.length];
            const isFeature = i === 0;
            const Card = (
              <div
                className="group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-[28px] ring-1 ring-black/5 shadow-[0_18px_45px_-22px_rgba(13,13,13,0.4)] transition-shadow duration-500 hover:shadow-[0_30px_70px_-25px_rgba(18,77,90,0.55)]"
              >
                <img
                  src={s.img}
                  alt={s.label}
                  loading="lazy"
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]"
                />
                {/* Voile sombre + halo doré au hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-black via-brand-black/80 via-45% to-brand-black/20"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(420px 220px at 50% 100%, rgba(255,221,87,0.35), transparent 70%)",
                  }}
                />

                {/* Top bar : compteur + status */}
                <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">
                    <span
                      aria-hidden
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: isClickable ? "var(--gold)" : "rgba(255,255,255,0.5)" }}
                    />
                    {String(i + 1).padStart(2, "0")} · {isClickable ? "Disponible" : "Bientôt"}
                  </span>
                  {isFeature && (
                    <span
                      className="rounded-full px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.22em] shadow-[0_8px_20px_-6px_rgba(255,221,87,0.55)]"
                      style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
                    >
                      ★ Expertise phare
                    </span>
                  )}
                </div>

                {/* Trait doré qui s'étend au hover */}
                <div
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[3px] w-12 origin-left transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: "var(--gold)" }}
                />

                <div
                  className="relative p-5 md:p-6"
                  style={{ textShadow: "0 1px 14px rgba(0,0,0,0.6)" }}
                >
                  <h3
                    className={`font-heading font-bold text-white ${
                      isFeature ? "text-2xl md:text-[34px] leading-[1.05]" : "text-xl md:text-[22px]"
                    }`}
                  >
                    {s.label}
                  </h3>
                  <p
                    className={`mt-1.5 font-body text-white/95 ${
                      isFeature ? "text-base md:text-lg max-w-md" : "text-sm"
                    }`}
                  >
                    {s.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    {isClickable ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
                        Découvrir
                        <ArrowRight
                          size={12}
                          className="transition duration-500 group-hover:translate-x-1.5"
                        />
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
                        En préparation
                      </span>
                    )}
                    {isClickable && (
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 translate-x-2"
                        style={{ backgroundColor: "var(--gold)" }}
                      >
                        <ArrowUpRight size={16} style={{ color: "var(--blue)" }} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );

            return isClickable && s.to ? (
              <Link key={s.label} to={s.to} className={`${span} block h-full`} aria-label={`Découvrir ${s.label}`}>
                {Card}
              </Link>
            ) : (
              <div key={s.label} className={`${span} h-full`}>
                {Card}
              </div>
            );
          })}
        </div>

        {/* Bandeau bas : appel à action discret */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border bg-brand-bg px-6 py-5"
          style={{ borderColor: "var(--grey-light)" }}
        >
          <p className="font-body text-sm text-brand-grey">
            Vous ne voyez pas votre secteur ? Nos consultants ont déployé Odoo sur{" "}
            <span className="font-semibold text-brand-black">+30 verticaux métier</span>.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold text-brand-black transition hover:scale-[1.02]"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Parler à un expert
            <ArrowRight size={14} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Case Study ------------------------------ */
function CaseStudy({ market }: { market: "BE" | "MA" }) {
  const data =
    market === "MA"
      ? {
          tag: "BTP · Marchés publics",
          name: "AIT OUKHALI TRAVAUX",
          quote:
            "Toute la gestion centralisée dans Odoo en moins de 10 semaines. CRM appels d'offres, chantier, RH et facturation.",
          metrics: [
            { k: "<10", v: "semaines" },
            { k: "100%", v: "centralisé" },
            { k: "1", v: "seul outil" },
          ],
          img: caseMa,
        }
      : {
          tag: "Immobilier social · Bruxelles",
          name: "AIS Hector Denis",
          quote:
            "Une implémentation structurée et transparente. AIS figure parmi nos références publiques, vérifiables sur odoo.com.",
          metrics: [
            { k: "9", v: "références" },
            { k: "V17", v: "certifié" },
            { k: "100%", v: "vérifiable" },
          ],
          img: caseBe,
        };

  return (
    <section className="container py-24 md:py-28">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              Étude de cas
            </p>
          </div>
          <h2 className="max-w-2xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-5xl">
            Ce que nos clients ont <Mark>obtenu</Mark>.
          </h2>
        </div>
        <Link
          to="/realisations"
          className="hidden items-center gap-2 font-body text-sm font-medium text-brand-blue hover:underline md:inline-flex"
        >
          Toutes les réalisations <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid gap-5 lg:grid-cols-5">
        {/* Image card with rounded photo overlay */}
        <div className="relative lg:col-span-3">
          <div
            className="relative h-full min-h-[420px] overflow-hidden rounded-[28px] border shadow-[0_30px_80px_-30px_rgba(18,77,90,0.3)]"
            style={{ borderColor: "var(--grey-light)" }}
          >
            <img
              src={data.img}
              alt={data.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute left-6 top-6">
              <Sticker rotate={-6}>Référence vérifiée</Sticker>
            </div>
          </div>
        </div>

        {/* Content card */}
        <div className="relative lg:col-span-2">
          <div
            className="flex h-full flex-col justify-between rounded-[28px] border bg-brand-white p-8 shadow-[0_30px_80px_-30px_rgba(18,77,90,0.2)] md:p-10"
            style={{ borderColor: "var(--grey-light)" }}
          >
            <div>
              <span className="inline-block rounded-full bg-brand-blue-light px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                {data.tag}
              </span>
              <h3 className="mt-6 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                {data.name}
              </h3>
              <p className="mt-6 font-body text-lg italic leading-relaxed text-brand-grey">
                "{data.quote}"
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {data.metrics.map((m) => (
                <div
                  key={m.v}
                  className="rounded-2xl border bg-brand-bg p-4"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
                    {m.k}
                  </div>
                  <div className="mt-1 font-body text-xs text-brand-grey">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Why ------------------------------ */
function Why() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Vérifiable publiquement",
      desc: "Certifications et références clients directement visibles sur la fiche officielle odoo.com/partners. La transparence avant tout.",
    },
    {
      icon: Wallet,
      title: "Tarification optimisée",
      desc: "Notre présence BeLux-Maroc nous permet de proposer des packs 20 à 50% plus accessibles, à qualité et volume équivalents.",
    },
    {
      icon: Globe2,
      title: "Un interlocuteur unique",
      desc: "ERP, création web et stratégie d'acquisition. Une seule équipe qui comprend votre business dans sa globalité.",
    },
    {
      icon: Clock,
      title: "Réactivité cadrée",
      desc: "Réponse experte sous 24 à 72h. Pas de commerciaux génériques — vous parlez directement à des consultants qui comprennent votre métier.",
    },
  ];

  return (
    <section className="bg-brand-bg">
      <div className="container py-24 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              Pourquoi MSL-iTECH
            </p>
            <span className="h-px w-8 bg-brand-blue" />
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
            La confiance se <Mark>vérifie</Mark>.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative rounded-[24px] border bg-brand-white p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.25)]"
              style={{ borderColor: "var(--grey-light)" }}
            >
              {/* Sticker number */}
              <div className="absolute -top-4 -right-3 z-10">
                <Sticker rotate={i % 2 === 0 ? -8 : 6}>0{i + 1}</Sticker>
              </div>

              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl transition group-hover:scale-110"
                style={{ backgroundColor: "var(--blue-light)" }}
              >
                <Icon size={22} className="text-brand-blue" />
              </div>
              <h3 className="mt-6 font-heading text-lg font-bold leading-snug text-brand-black">
                {title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-brand-grey">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Final CTA ------------------------------ */
function FinalCTA() {
  return (
    <section className="bg-brand-bg">
      <div className="container py-20">
        <div
          className="relative isolate overflow-hidden rounded-[32px] p-10 md:p-16"
          style={{ backgroundColor: "var(--blue)" }}
        >
          <HeroCursorGlow color="rgba(255, 221, 87, 1)" size={620} intensity={0.55} radius="32px" />
          <div
            className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full opacity-25 blur-3xl"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Sticker */}
          <div className="absolute right-8 top-8 hidden md:block">
            <Sticker rotate={10}>★ Démo gratuite</Sticker>
          </div>

          <div className="relative text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
              <Sparkles size={14} className="text-brand-gold" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/85">
                Prêt à démarrer ?
              </p>
            </div>

            <h2 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
              Structurez votre entreprise <Mark>avec Odoo.</Mark>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-body text-base text-white/75 md:text-lg">
              Consultant dédié · Démo sur mesure · Sans engagement
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group cta-pulse-gold hover-shine inline-flex items-center gap-2 rounded-full px-8 py-4 font-body text-base font-bold text-brand-black transition hover:scale-[1.02]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Réserver ma démo
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/realisations"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-body text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
              >
                Voir nos réalisations <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== Page ============================== */
export default function HomePage() {
  const { market } = useMarket();
  useSeo(market);

  return (
    <>
      <JsonLd id="ld-professional-service-home" data={professionalServiceSchema} />
      {market === "MA" ? <HeroMA /> : <HeroBE />}
      <SocialProof />
      <Pillars />
      <Sectors market={market} />
      <CaseStudy market={market} />
      <Why />
      <FinalCTA />
    </>
  );
}
