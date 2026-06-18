import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import {
  OdooCrm,
  OdooAccountant,
  OdooStock,
  OdooMrp,
  OdooHr,
  OdooProject,
} from "@/components/icons/odoo";

import erpHero from "@/assets/home/pillar-erp.webp";
import crmImg from "@/assets/crm-hero.webp";
import financeImg from "@/assets/finance-hero.webp";
import stockImg from "@/assets/stock-hero.webp";
import productionImg from "@/assets/production-hero.webp";
import rhImg from "@/assets/rh-hero.webp";
import servicesImg from "@/assets/services-hero.webp";
import caseBe from "@/assets/home/case-be.webp";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";

/* ---------------- SEO ---------------- */
function useErpSeo() {
  useEffect(() => {
    document.title =
      "Odoo ERP — La plateforme qui structure votre PME | MSL-iTECH";
    const desc =
      "Odoo ERP par MSL-iTECH : Finance, CRM, Stock, Production, RH et Services. Une seule plateforme pour piloter toute votre PME. Démo gratuite.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/odoo-erp";

    // Preload module images so they're ready when user scrolls
    const preloads = [
      erpHero,
      crmImg,
      financeImg,
      stockImg,
      productionImg,
      rhImg,
      servicesImg,
    ];
    const links: HTMLLinkElement[] = preloads.map((href) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = href;
      document.head.appendChild(link);
      return link;
    });
    return () => {
      links.forEach((l) => l.remove());
    };
  }, []);
}

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

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="bg-brand-bg pt-6 md:pt-8">
      <div className="container">
        <div className="relative isolate rounded-[28px] md:rounded-[36px]">
          {/* Image + overlay clipped */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
            <img
              src={erpHero}
              alt="Odoo ERP — plateforme de gestion intégrée"
              className="absolute inset-0 h-full w-full object-cover"
            loading="eager" fetchPriority="high" decoding="async"/>
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
            {/* dotted texture */}
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

          {/* Sticker top-left (overflows freely) */}
          <div className="absolute -top-3 left-8 z-20 md:-top-4 md:left-12">
            <Sticker rotate={-8}>★ Consultants certifiés v18 & v19</Sticker>
          </div>

          {/* Content */}
          <div className="relative flex min-h-[420px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[560px] md:py-32">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
              <Sparkles size={12} className="text-brand-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                Pilier central · Odoo ERP
              </p>
            </div>

            <h1 className="mt-8 font-heading text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-[88px] lg:text-[112px]">
              Odoo <span className="italic font-light text-brand-gold">ERP</span>
            </h1>

            <p className="mt-7 max-w-xl font-body text-base text-white/75 md:text-lg">
              La plateforme unique qui structure votre PME — Finance, CRM,
              Stock, Production, RH, Services.
            </p>
          </div>

          {/* Breadcrumb pill — bottom right, overlapping */}
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
                Odoo ERP
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Intro block below the banner — keeps page narrative */}
      <div className="container pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              <span className="mr-2 inline-block h-px w-8 align-middle bg-brand-blue" />
              Ce que nous proposons
            </p>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-[44px]">
              Un ERP. Six modules.
              <span className="block">
                <span className="italic font-light text-brand-blue">
                  Une seule
                </span>{" "}
                <Mark>vérité.</Mark>
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-body text-base text-brand-grey md:text-lg">
              Stoppez la dispersion des données entre Excel, votre CRM cloud,
              votre logiciel comptable et vos tableurs RH. Odoo centralise
              toute votre PME dans une plateforme unique, modulaire et conçue
              pour évoluer avec vous.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Open-source — sans vendor lock-in",
                "Hébergement Europe ou Maroc",
                "6 à 10 semaines de mise en route",
                "9+ références vérifiables",
              ].map((p) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pain → Promise ---------------- */
function PainPromise() {
  const pains = [
    "Excel partagé qui plante quand 3 personnes l'ouvrent",
    "CRM cloud déconnecté de la facturation",
    "Stock à jour… une fois par semaine",
    "Pas de visibilité sur la rentabilité par projet",
  ];
  const promises = [
    "Une base de données unique, temps réel",
    "Du devis à la facture en un seul flux",
    "Stock synchronisé à chaque mouvement",
    "Tableaux de bord rentabilité par projet",
  ];

  return (
    <section className="bg-brand-white">
      <div className="container py-24 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              Avant / Après
            </p>
            <span className="h-px w-8 bg-brand-blue" />
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-5xl">
            De la <span className="line-through text-brand-grey">dispersion</span>{" "}
            à la <Mark>clarté</Mark>.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {/* Avant */}
          <div
            className="relative rounded-[28px] border bg-brand-bg p-8 md:p-10"
            style={{ borderColor: "var(--grey-light)" }}
          >
            <div className="absolute -top-4 left-6">
              <Sticker rotate={-6}>Avant</Sticker>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-grey">
              Sans Odoo
            </p>
            <h3 className="mt-3 font-heading text-2xl font-bold text-brand-black">
              Le quotidien dispersé.
            </h3>
            <ul className="mt-6 space-y-3">
              {pains.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 font-body text-base text-brand-grey"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-grey" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Après */}
          <div
            className="relative isolate rounded-[28px] p-8 md:p-10"
            style={{ backgroundColor: "var(--blue)" }}
          >
            {/* Glow clipped inside the card */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
              <div
                className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
                style={{ backgroundColor: "var(--gold)" }}
              />
            </div>
            <div className="absolute -top-4 right-6 z-20">
              <Sticker rotate={6}>Après</Sticker>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold">
              Avec Odoo
            </p>
            <h3 className="mt-3 font-heading text-2xl font-bold text-white">
              Une plateforme. Un flux.
            </h3>
            <ul className="mt-6 space-y-3">
              {promises.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 font-body text-base text-white/90"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-brand-gold"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Modules Bento ---------------- */
const modules = [
  {
    to: "/odoo-crm-ventes",
    label: "CRM & Ventes",
    eyebrow: "01 — Conversion",
    desc: "Pipeline visuel, devis en 2 clics, signatures électroniques. Vos commerciaux ferment plus vite.",
    icon: OdooCrm,
    img: crmImg,
    big: true,
  },
  {
    to: "/odoo-finance-comptabilite",
    label: "Finance & Comptabilité",
    eyebrow: "02 — Pilotage",
    desc: "Comptabilité automatisée, rapprochements bancaires, conformité locale.",
    icon: OdooAccountant,
    img: financeImg,
  },
  {
    to: "/odoo-stock-inventaire",
    label: "Stock & Inventaire",
    eyebrow: "03 — Logistique",
    desc: "Multi-dépôts, codes-barres, traçabilité par lot. Inventaire toujours juste.",
    icon: OdooStock,
    img: stockImg,
  },
  {
    to: "/odoo-production-fabrication",
    label: "Production",
    eyebrow: "04 — Atelier",
    desc: "Ordres de fabrication, MRP, gammes opératoires. De la matière au produit fini.",
    icon: OdooMrp,
    img: productionImg,
  },
  {
    to: "/odoo-rh-paie",
    label: "RH & Paie",
    eyebrow: "05 — Humain",
    desc: "Congés en self-service, paie automatisée, suivi du temps par projet.",
    icon: OdooHr,
    img: rhImg,
  },
  {
    to: "/odoo-services-professionnels",
    label: "Services Professionnels",
    eyebrow: "06 — Mission",
    desc: "Time-tracking, refacturation, rentabilité par mission en un clic.",
    icon: OdooProject,
    img: servicesImg,
  },
];

function Modules() {
  return (
    <section className="container py-24 md:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-10 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              Modules Odoo
            </p>
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
            Tous vos métiers.
            <br />
            <Mark>Un seul outil.</Mark>
          </h2>
        </div>
        <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
          Activez uniquement les modules dont vous avez besoin. Ajoutez-en
          d'autres au fil de votre croissance, sans migration douloureuse.
        </p>
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-6">
        {modules.map((m, i) => {
          const isBig = m.big;
          const span = isBig
            ? "lg:col-span-4 lg:row-span-2 min-h-[520px]"
            : "lg:col-span-2 min-h-[260px]";
          const Icon = m.icon;
          return (
            <Link
              key={m.label}
              to={m.to}
              className={`group relative isolate flex flex-col justify-between rounded-[28px] p-7 md:p-8 ${span}`}
              style={{ backgroundColor: "var(--blue)" }}
            >
              {/* Background image + gradient inside clipped wrapper */}
              <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
                <img
                  src={m.img}
                  alt=""
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
                    isBig
                      ? "opacity-30 group-hover:opacity-45"
                      : "opacity-25 group-hover:opacity-40"
                  }`}
                />
                {/* Brand-blue tint overlay — uniform legibility on every photo */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(18,77,90,0.88) 0%, rgba(10,45,54,0.94) 100%)",
                  }}
                />
                {/* Gold glow accent (bigger on the hero card) */}
                <div
                  className={`pointer-events-none absolute rounded-full blur-3xl ${
                    isBig
                      ? "-bottom-24 -right-24 h-80 w-80 opacity-25"
                      : "-bottom-16 -right-16 h-44 w-44 opacity-20"
                  }`}
                  style={{ backgroundColor: "var(--gold)" }}
                />
              </div>

              {/* Sticker */}
              <div
                className={`absolute -top-4 z-20 ${
                  i % 2 === 0 ? "right-6" : "left-6"
                }`}
              >
                <Sticker rotate={i % 2 === 0 ? 8 : -7}>
                  Module {String(i + 1).padStart(2, "0")}
                </Sticker>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: "rgba(255,221,87,0.18)",
                      border: "1px solid rgba(255,221,87,0.35)",
                    }}
                  >
                    <Icon size={16} className="text-brand-gold" />
                  </span>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">
                    {m.eyebrow}
                  </p>
                </div>
                <ArrowUpRight
                  size={isBig ? 28 : 22}
                  className="text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-gold"
                />
              </div>

              <div>
                <h3
                  className={`font-heading font-bold leading-tight text-white ${
                    isBig ? "max-w-md text-3xl md:text-5xl" : "text-2xl"
                  }`}
                >
                  {m.label}
                </h3>
                <p
                  className={`mt-3 font-body text-white/85 ${
                    isBig ? "max-w-md text-base md:mt-5" : "text-sm"
                  }`}
                >
                  {m.desc}
                </p>

                {isBig && (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Pipeline",
                      "Devis",
                      "Signature e-doc",
                      "Email tracking",
                      "Reporting",
                    ].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Floating mini-mockup on big card */}
              {isBig && (
                <div
                  className="absolute bottom-8 right-8 hidden w-[230px] rounded-2xl border bg-brand-white p-4 shadow-2xl lg:block"
                  style={{
                    borderColor: "var(--grey-light)",
                    transform: "rotate(4deg)",
                  }}
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-grey">
                    Pipeline · Mai 2026
                  </p>
                  <div className="mt-2 space-y-1.5">
                    <div className="h-2 w-full rounded-full bg-brand-blue-light" />
                    <div className="h-2 w-3/4 rounded-full bg-brand-blue-light" />
                    <div
                      className="h-2 w-1/2 rounded-full"
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                  </div>
                  <div className="mt-3 flex items-end justify-between">
                    <div className="font-heading text-xl font-bold text-brand-blue">
                      +24%
                    </div>
                    <LineChart size={18} className="text-brand-blue" />
                  </div>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Méthodologie (timeline) ---------------- */
function Methodology() {
  const steps = [
    {
      n: "01",
      title: "Cadrage",
      desc: "Atelier de découverte de vos process et de vos contraintes métier.",
      d: "S1",
    },
    {
      n: "02",
      title: "Configuration",
      desc: "Paramétrage Odoo, reprise des données, intégrations bancaires et e-commerce.",
      d: "S2-S5",
    },
    {
      n: "03",
      title: "Formation",
      desc: "Vos équipes prennent le contrôle. Documentation et capsules vidéo.",
      d: "S6-S7",
    },
    {
      n: "04",
      title: "Mise en service",
      desc: "Go-live accompagné. Support réactif et amélioration continue.",
      d: "S8+",
    },
  ];

  return (
    <section className="bg-brand-bg">
      <div className="container py-24 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              Méthodologie
            </p>
            <span className="h-px w-8 bg-brand-blue" />
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
            En production en <Mark>8 semaines</Mark>.
          </h2>
          <p className="mt-6 font-body text-base text-brand-grey md:text-lg">
            Une démarche cadencée, sans surprise, calibrée pour les PME qui
            veulent un ERP qui fonctionne — pas un projet qui s'éternise.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative rounded-[24px] border bg-brand-white p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.25)]"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <div className="absolute -top-4 -right-3 z-10">
                <Sticker rotate={i % 2 === 0 ? -8 : 6}>{s.d}</Sticker>
              </div>
              <div
                className="font-heading text-5xl font-bold leading-none"
                style={{ color: "var(--blue)", opacity: 0.18 }}
              >
                {s.n}
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold leading-snug text-brand-black">
                {s.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-brand-grey">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Case Study ---------------- */
function CaseStudy() {
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
            Référence <Mark>vérifiable</Mark> sur odoo.com.
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
        <div className="relative lg:col-span-3">
          <div
            className="relative h-full min-h-[420px] overflow-hidden rounded-[28px] border shadow-[0_30px_80px_-30px_rgba(18,77,90,0.3)]"
            style={{ borderColor: "var(--grey-light)" }}
          >
            <img
              src={caseBe}
              alt="AIS Hector Denis — implémentation Odoo"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute left-6 top-6">
              <Sticker rotate={-6}>Référence vérifiée</Sticker>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-2">
          <div
            className="flex h-full flex-col justify-between rounded-[28px] border bg-brand-white p-8 shadow-[0_30px_80px_-30px_rgba(18,77,90,0.2)] md:p-10"
            style={{ borderColor: "var(--grey-light)" }}
          >
            <div>
              <span className="inline-block rounded-full bg-brand-blue-light px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                Immobilier social · Bruxelles
              </span>
              <h3 className="mt-6 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                AIS Hector Denis
              </h3>
              <p className="mt-6 font-body text-lg italic leading-relaxed text-brand-grey">
                "Une implémentation structurée et transparente. AIS figure parmi
                nos références publiques, vérifiables sur odoo.com."
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { k: "9", v: "références" },
                { k: "v18·v19", v: "certifiés" },
                { k: "100%", v: "vérifiable" },
              ].map((m) => (
                <div
                  key={m.v}
                  className="rounded-2xl border bg-brand-bg p-4"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
                    {m.k}
                  </div>
                  <div className="mt-1 font-body text-xs text-brand-grey">
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  {
    q: "Combien coûte une implémentation Odoo avec MSL-iTECH ?",
    a: "Chaque projet est chiffré sur mesure après un cadrage gratuit de 30 minutes. Nos tarifs sont 20 à 50% plus accessibles que les Success Packs observés sur le marché belge, à qualité équivalente. Devis détaillé sous 48h.",
  },
  {
    q: "Combien de temps avant d'être en production ?",
    a: "Pour une PME standard, comptez 6 à 10 semaines entre le cadrage et le go-live. Les implémentations multi-modules ou multi-pays peuvent prendre plus de temps.",
  },
  {
    q: "Faut-il prendre tous les modules en même temps ?",
    a: "Non. La force d'Odoo est sa modularité. Vous pouvez démarrer avec 2-3 modules essentiels (Finance + CRM par exemple) puis activer les autres à votre rythme.",
  },
  {
    q: "Que devient ma donnée si je quitte Odoo ?",
    a: "Odoo est open-source. Vos données sont exportables à tout moment dans des formats standards (CSV, SQL). Aucun vendor lock-in.",
  },
  {
    q: "Êtes-vous vraiment partenaire officiel Odoo ?",
    a: "Oui. Notre fiche partenaire est publique sur odoo.com/partners avec nos certifications et nos références clients vérifiables.",
  },
];

function Faq() {
  return (
    <section className="bg-brand-white">
      <div className="container max-w-3xl py-24 md:py-28">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              FAQ
            </p>
            <span className="h-px w-8 bg-brand-blue" />
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-5xl">
            Les questions qu'on nous pose <Mark>vraiment</Mark>.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border bg-brand-bg p-6 transition open:shadow-md"
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

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="bg-brand-bg">
      <div className="container py-20">
        <div
          className="relative isolate overflow-hidden rounded-[32px] p-10 md:p-16"
          style={{ backgroundColor: "var(--blue)" }}
        >
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

          <div className="absolute right-8 top-8 hidden md:block">
            <Sticker rotate={10}>★ Démo gratuite</Sticker>
          </div>

          <div className="relative max-w-2xl text-white">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">
              Prochaine étape
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-5xl">
              Voyez votre PME tourner sous Odoo en{" "}
              <span className="italic font-light">45 minutes</span>.
            </h2>
            <p className="mt-5 max-w-xl font-body text-base text-white/85">
              Démo personnalisée, configurée pour votre secteur. Zéro
              engagement, zéro pression commerciale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold transition hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--blue)",
                }}
              >
                Réserver ma démo <ArrowRight size={16} />
              </Link>
              <Link
                to="/notre-approche"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Découvrir notre approche
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 font-body text-sm text-white/70">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-gold" />
                Consultants certifiés v18 & v19
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-gold" />
                Réponse sous 24-72h
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
export default function OdooErpPage() {
  useErpSeo();
  return (
    <>
      <Hero />
      <PainPromise />
      <Modules />
      <Methodology />
      <CaseStudy />
      <Faq />
      <FinalCTA />
    </>
  );
}