import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Clock, Globe2, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { useMarket } from "@/hooks/useMarket";

import heroBeImg from "@/assets/hero-be.webp";
import heroMaImg from "@/assets/hero-ma.webp";
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
import ctaBg from "@/assets/home/cta-bg.webp";

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
  return (
    <section className="relative isolate overflow-hidden" style={{ backgroundColor: "var(--blue)" }}>
      <div className="absolute inset-0 -z-10">
        <img src={bgImage} alt="" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(10,45,54,0.94) 0%, rgba(18,77,90,0.78) 55%, rgba(18,77,90,0.35) 100%)",
          }}
        />
      </div>

      {/* Glow */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl"
        style={{ backgroundColor: "var(--gold)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-48 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "var(--blue-light)" }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative grid gap-12 py-28 md:py-36 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
            <Sparkles size={14} className="text-brand-gold" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/85">{eyebrow}</p>
          </div>

          <h1 className="mt-8 max-w-[920px] font-heading text-4xl font-bold leading-[1.02] tracking-tight text-white md:text-[64px]">
            {titleTop}{" "}
            <span className="block bg-gradient-to-r from-brand-gold to-brand-gold/70 bg-clip-text text-transparent">
              {titleAccent}
            </span>
          </h1>

          <p className="mt-8 max-w-[640px] font-body text-lg text-white/80 md:text-xl">{description}</p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 font-body text-base font-bold text-brand-black shadow-[0_20px_60px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Réserver ma démo gratuite
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-body text-sm font-medium text-white/90 backdrop-blur-md transition hover:bg-white/10"
            >
              Voir nos réalisations
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-6 font-body text-sm text-white/60">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Sans engagement
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Réponse sous 24-72h
            </span>
          </div>
        </div>

        {/* Stats card column */}
        <div className="hidden lg:col-span-4 lg:flex lg:items-end">
          <div className="grid w-full gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="font-heading text-4xl font-bold text-brand-gold">9+</div>
              <div className="mt-1 font-body text-sm text-white/70">
                Références publiques sur odoo.com/partners
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="font-heading text-4xl font-bold text-brand-gold">20-50%</div>
              <div className="mt-1 font-body text-sm text-white/70">
                Plus accessible que les Success Packs marché belge
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="font-heading text-4xl font-bold text-brand-gold">2020</div>
              <div className="mt-1 font-body text-sm text-white/70">
                Partenaire officiel Odoo certifié
              </div>
            </div>
          </div>
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
        href="https://www.odoo.com/partners"
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
    <section className="overflow-hidden border-y border-white/5 bg-brand-black py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-body text-sm text-white/85">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Pillars ------------------------------ */
function Pillars() {
  return (
    <section className="container py-28">
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
            Construire.{" "}
            <span className="italic font-light text-brand-blue">Accélérer.</span>
          </h2>
        </div>
        <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
          Bien plus qu'une agence. Un interlocuteur unique qui aligne votre gestion interne (ERP)
          avec votre croissance externe (Web & Marketing).
        </p>
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-7">
        {/* Main pillar — Odoo */}
        <Link
          to="/odoo-crm-ventes"
          className="group relative isolate flex min-h-[480px] flex-col justify-between overflow-hidden rounded-3xl p-10 lg:col-span-4"
          style={{ backgroundColor: "var(--blue)" }}
        >
          <img
            src={pillarErp}
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40 transition duration-700 group-hover:opacity-50 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(18,77,90,0.85) 0%, rgba(10,45,54,0.92) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-25 blur-3xl"
            style={{ backgroundColor: "var(--gold)" }}
          />

          <div className="flex items-start justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">
              01 — Pilier central
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
        </Link>

        {/* Right column — 2 stacked */}
        <div className="grid gap-5 lg:col-span-3">
          <Link
            to="/creation-web"
            className="group relative isolate flex min-h-[230px] flex-col justify-between overflow-hidden rounded-3xl p-8"
          >
            <img
              src={pillarWeb}
              alt=""
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-black/85 via-brand-black/45 to-brand-black/20" />
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

          <Link
            to="/marketing-digital"
            className="group relative isolate flex min-h-[230px] flex-col justify-between overflow-hidden rounded-3xl p-8"
          >
            <img
              src={pillarMarketing}
              alt=""
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-black/85 via-brand-black/45 to-brand-black/20" />
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
      </div>
    </section>
  );
}

/* ------------------------------ Sectors ------------------------------ */
const sectorsBE = [
  { label: "Services & Conseil", desc: "Agences, freelances structurés", img: sectorServices, to: null as string | null },
  { label: "Bureaux d'études", desc: "Architecture, ingénierie", img: sectorEngineering, to: null },
  { label: "Commerce B2B", desc: "Distribution, grossistes", img: sectorB2b, to: null },
  { label: "Administratif & RH", desc: "ASBL, RH externalisée", img: sectorHr, to: null },
  { label: "Scale-ups (10-50 emp.)", desc: "Entreprises en forte croissance", img: sectorScaleup, to: null },
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
  return (
    <section className="bg-brand-bg">
      <div className="container py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              Secteurs
            </p>
            <span className="h-px w-8 bg-brand-blue" />
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
            Pensé pour <span className="italic font-light text-brand-blue">votre réalité</span>{" "}
            terrain.
          </h2>
          <p className="mt-6 font-body text-base text-brand-grey md:text-lg">
            Chaque industrie a ses codes. Nos implémentations sont pré-configurées pour vos cas
            d'usage spécifiques.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => {
            const isClickable = !!s.to;
            const Card = (
              <div className="group relative isolate flex h-80 flex-col justify-end overflow-hidden rounded-2xl">
                <img
                  src={s.img}
                  alt={s.label}
                  loading="lazy"
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-black via-brand-black/85 via-40% to-brand-black/30" />

                <div className="absolute right-5 top-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-7" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.55)" }}>
                  <h3 className="font-heading text-2xl font-bold text-white">{s.label}</h3>
                  <p className="mt-1.5 font-body text-sm text-white/95">{s.desc}</p>
                  <div className="mt-5">
                    {isClickable ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-gold">
                        Découvrir <ArrowRight size={12} className="transition group-hover:translate-x-1" />
                      </span>
                    ) : (
                      <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/70 backdrop-blur-sm">
                        Bientôt disponible
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );

            return isClickable && s.to ? (
              <Link key={s.label} to={s.to}>
                {Card}
              </Link>
            ) : (
              <div key={s.label}>{Card}</div>
            );
          })}
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
    <section className="container py-28">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              Étude de cas
            </p>
          </div>
          <h2 className="max-w-2xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-5xl">
            Ce que nos clients ont obtenu.
          </h2>
        </div>
        <Link
          to="/realisations"
          className="hidden items-center gap-2 font-body text-sm font-medium text-brand-blue hover:underline md:inline-flex"
        >
          Toutes les réalisations <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid overflow-hidden rounded-3xl border border-brand-grey-light bg-brand-white shadow-[0_30px_80px_-30px_rgba(18,77,90,0.25)] lg:grid-cols-5">
        {/* Left content */}
        <div className="flex flex-col justify-between p-8 md:p-12 lg:col-span-2">
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

          <div className="mt-12 grid grid-cols-3 gap-4">
            {data.metrics.map((m) => (
              <div key={m.v} className="border-l-2 border-brand-gold pl-4">
                <div className="font-heading text-3xl font-bold text-brand-blue">{m.k}</div>
                <div className="mt-1 font-body text-xs text-brand-grey">{m.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="relative min-h-[340px] lg:col-span-3 lg:min-h-full">
          <img src={data.img} alt={data.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
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
    <section className="bg-brand-white">
      <div className="container py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              Pourquoi MSL-iTECH
            </p>
            <span className="h-px w-8 bg-brand-blue" />
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
            La confiance se{" "}
            <span className="italic font-light text-brand-blue">vérifie</span>.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-brand-grey-light bg-brand-bg p-7 transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-[0_20px_50px_-15px_rgba(18,77,90,0.25)]"
            >
              <div className="flex items-start justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:scale-110"
                  style={{ backgroundColor: "var(--blue-light)" }}
                >
                  <Icon size={22} className="text-brand-blue" />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-brand-grey">
                  0{i + 1}
                </span>
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
    <section className="relative isolate overflow-hidden" style={{ backgroundColor: "var(--blue)" }}>
      <img
        src={ctaBg}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(18,77,90,0.92) 0%, rgba(10,45,54,0.95) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "var(--gold)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative py-28 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
          <Sparkles size={14} className="text-brand-gold" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/85">
            Prêt à démarrer ?
          </p>
        </div>

        <h2 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
          Structurez votre entreprise{" "}
          <span className="italic font-light text-brand-gold">avec Odoo.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-base text-white/75 md:text-lg">
          Consultant dédié · Démo sur mesure · Sans engagement
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full px-8 py-4 font-body text-base font-bold text-brand-black shadow-[0_20px_60px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
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
    </section>
  );
}

/* ============================== Page ============================== */
export default function HomePage() {
  const { market } = useMarket();
  useSeo(market);

  return (
    <>
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
