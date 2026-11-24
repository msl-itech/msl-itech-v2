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

import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import { PARTNER_STATUS_EN } from "@/lib/brand";
import { localizedPath } from "@/lib/i18n";
import pillarErp from "@/assets/home/pillar-erp.webp";
import pillarWeb from "@/assets/home/pillar-web.webp";
import pillarMarketing from "@/assets/home/pillar-marketing.webp";
import sectorHoreca from "@/assets/home/sector-horeca.webp";
import sectorBtp from "@/assets/home/sector-btp.webp";
import sectorHealth from "@/assets/home/sector-health.webp";
import sectorWholesale from "@/assets/home/sector-wholesale.webp";
import sectorLogistics from "@/assets/home/sector-logistics.webp";
import sectorFood from "@/assets/home/sector-food.webp";
import sectorTourism from "@/assets/home/sector-tourism.webp";
import caseBe from "@/assets/home/case-be.webp";
import caseMa from "@/assets/home/case-ma.webp";

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

const homeFaqs: { q: string; a: string }[] = [
  {
    q: "Is MSL-iTECH an official Odoo partner?",
    a: `Yes. MSL-iTECH is an official ${PARTNER_STATUS_EN} with 40+ delivered projects. Our consultants are certified on Odoo v18 and v19, with continuous version upgrades. You can verify our partner profile at odoo.com/partners/msl-itech-15851608.`,
  },
  {
    q: "How much does an Odoo implementation cost with MSL-iTECH?",
    a: "Every project is priced on a bespoke basis after a free 30-minute scoping session. For comparable project scopes, our rates are 20% to 50% more accessible than those charged by major integration firms. We provide a detailed quote within 48 hours.",
  },
  {
    q: "Which countries does MSL-iTECH operate in?",
    a: "Our team is based in Marrakech, Morocco. We support companies on-site as well as remotely across Morocco, BeLux, France, and Canada, delivering high standards of service and Western-grade quality.",
  },
  {
    q: "How long does it take for an Odoo implementation to go live?",
    a: "The timeline depends on the scope and complexity of your project. A core scope (CRM, Sales, Invoicing) can be operational in a few weeks, whereas a multi-module deployment with historical data migration and user training typically spans several weeks to a few months. We establish a clear project schedule following initial requirements analysis.",
  },
  {
    q: "Which Odoo versions does MSL-iTECH deploy?",
    a: "Our consultants are certified on Odoo v18 and v19, and we master all modern Odoo releases. New projects are deployed on v18 or v19 depending on required third-party modules, and we handle safe migrations from earlier versions. Our team continuously trains on every new Odoo release.",
  },
];

function HomeFaq() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            <span className="inline-block h-px w-8 bg-brand-blue" />
            Frequently asked questions
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-[2.5rem]">
            Everything you need to know before getting started
          </h2>
        </div>
        <div className="mt-12 grid gap-4">
          {homeFaqs.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-2xl border bg-white p-6 transition hover:border-[var(--blue)]/40"
              style={{ borderColor: "var(--grey-light)" }}
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h3 className="font-heading text-lg font-semibold text-brand-black md:text-xl">
                  {f.q}
                </h3>
                <span
                  aria-hidden
                  className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold transition group-open:rotate-45"
                  style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
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

function SocialProof() {
  const items = [
    <>
      ✓ Official{" "}
      <a
        href="https://www.odoo.com/partners/country/morocco-132?search=msl-itech"
        target="_blank"
        rel="noreferrer"
        className="underline decoration-brand-gold underline-offset-4"
      >
        Odoo
      </a>{" "}
      Partner
    </>,
    "✓ v18 & v19 certified consultants",
    "✓ Custom modules & native Odoo tailoring",
    "✓ Morocco — team based in Marrakech",
    "✓ 40+ delivered projects",
    "✓ 20% to 50% more competitive rates",
    "✓ Response within 24 hours",
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

function Pillars() {
  return (
    <section className="container py-24 md:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-10 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              Our ecosystem
            </p>
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
            Structure.
            <br />
            Build. <Mark>Accelerate.</Mark>
          </h2>
        </div>
        <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
          Much more than an agency. A single dedicated partner that aligns your internal operations (ERP)
          with your external growth (Web & Marketing).
        </p>
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-6">
        <Link
          to={localizedPath("/odoo-crm-ventes", "en")}
          className="group relative isolate flex min-h-[520px] flex-col justify-between rounded-[28px] p-10 lg:col-span-4 lg:row-span-2"
          style={{ backgroundColor: "var(--blue)" }}
        >
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
            <img src={pillarErp} alt="Odoo ERP implementation by MSL-iTECH" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 group-hover:opacity-50 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(18,77,90,0.85) 0%, rgba(10,45,54,0.92) 100%)" }} />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ backgroundColor: "var(--gold)" }} />
          </div>
          <div className="absolute -top-4 right-6 z-20"><Sticker rotate={8}>Pillar 01</Sticker></div>
          <div className="flex items-start justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">Core pillar</p>
            <ArrowUpRight size={28} className="text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-gold" />
          </div>
          <div>
            <h3 className="max-w-md font-heading text-3xl font-bold leading-tight text-white md:text-5xl">The ERP that structures your operations.</h3>
            <p className="mt-5 max-w-md font-body text-base text-white/75">Finance, CRM, Inventory, HR. Odoo unifies all your business tools into one intelligent, centralized platform.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Finance", "CRM", "Inventory", "HR", "Manufacturing"].map((t) => (
                <span key={t} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-sm">{t}</span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-8 right-8 hidden w-[220px] rounded-2xl border bg-brand-white p-4 shadow-2xl lg:block" style={{ borderColor: "var(--grey-light)", transform: "rotate(4deg)" }}>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-grey">CRM · Pipeline</p>
            <div className="mt-2 space-y-1.5">
              <div className="h-2 w-full rounded-full bg-brand-blue-light" />
              <div className="h-2 w-3/4 rounded-full bg-brand-blue-light" />
              <div className="h-2 w-1/2 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
            </div>
            <div className="mt-3 font-heading text-xl font-bold text-brand-blue">+24%</div>
          </div>
        </Link>

        <Link to={localizedPath("/creation-web", "en")} className="group relative isolate flex min-h-[250px] flex-col justify-between rounded-[28px] p-7 lg:col-span-2">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
            <img src={pillarWeb} alt="High-converting website development" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/45 to-brand-black/20" />
          </div>
          <div className="absolute -top-4 right-5 z-20"><Sticker rotate={-6}>Pillar 02</Sticker></div>
          <div className="flex items-start justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">02 — Web</p>
            <ArrowUpRight size={22} className="text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-gold" />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">Design & Redesign</h3>
            <p className="mt-2 font-body text-sm text-white/75">Showcase and e-commerce websites engineered for conversion.</p>
          </div>
        </Link>

        <Link to={localizedPath("/marketing-digital", "en")} className="group relative isolate flex min-h-[250px] flex-col justify-between rounded-[28px] p-7 lg:col-span-2">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
            <img src={pillarMarketing} alt="Digital growth and performance marketing" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/45 to-brand-black/20" />
          </div>
          <div className="absolute -top-4 right-5 z-20"><Sticker rotate={7}>Pillar 03</Sticker></div>
          <div className="flex items-start justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">03 — Growth</p>
            <ArrowUpRight size={22} className="text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-gold" />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">Digital Marketing</h3>
            <p className="mt-2 font-body text-sm text-white/75">AI-driven acquisition, SEO, and targeted performance campaigns.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

const sectorsBE = [
  { label: "Hospitality & Dining", desc: "Restaurants, cafes, hotels", img: sectorHoreca, to: "/odoo-horeca-maroc" as string | null },
  { label: "Construction & BTP", desc: "Public tenders, job-site tracking", img: sectorBtp, to: "/odoo-btp-maroc" },
  { label: "Healthcare & Pharma", desc: "Clinics, labs, medical supply", img: sectorHealth, to: "/odoo-sante-maroc" },
  { label: "Retail & Distribution", desc: "Multi-warehouse, e-commerce sync", img: sectorWholesale, to: "/odoo-gestion-stock-maroc" },
  { label: "Transport & Logistics", desc: "Fleet management, dispatching", img: sectorLogistics, to: "/odoo-transport-logistique-maroc" },
  { label: "Tourism & Travel", desc: "Agencies, boutique hotels, DMCs", img: sectorTourism, to: "/odoo-tourisme-maroc" },
];

const sectorsMA = [
  { label: "Hospitality & Dining", to: "/odoo-horeca-maroc", desc: "Restaurants, cafes, hotels", img: sectorHoreca },
  { label: "Construction & BTP", to: "/odoo-btp-maroc", desc: "Public tenders, job-site tracking", img: sectorBtp },
  { label: "Healthcare & Pharma", to: "/odoo-sante-maroc", desc: "Clinics, labs, medical supply", img: sectorHealth },
  { label: "Wholesale & Inventory", to: "/odoo-gestion-stock-maroc", desc: "Multi-warehouse, distribution", img: sectorWholesale },
  { label: "Logistics & Transport", to: "/odoo-transport-logistique-maroc", desc: "Fleet management, dispatching", img: sectorLogistics },
  { label: "Tourism & Travel", to: "/odoo-tourisme-maroc", desc: "Agencies, boutique hotels, DMCs", img: sectorTourism },
  { label: "Agri-food & Processing", to: null as string | null, desc: "Production lots, full traceability", img: sectorFood },
];

function Sectors({ market }: { market: "BE" | "MA" }) {
  const items = market === "MA" ? sectorsMA : sectorsBE;
  const layoutBase = [
    "lg:col-span-3 lg:row-span-2",
    "lg:col-span-3 lg:row-span-1",
    "lg:col-span-1 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-6 lg:row-span-1",
  ];
  const layout =
    items.length === 7
      ? [...layoutBase, "lg:col-span-3 lg:row-span-1", "lg:col-span-3 lg:row-span-1"]
      : layoutBase;
  return (
    <section className="relative overflow-hidden bg-brand-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(var(--blue) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl" style={{ backgroundColor: "var(--blue-light)" }} />
      <div className="container py-24 md:py-28">
        <div className="relative grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-brand-blue" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                Industries · {items.length} areas of expertise
              </p>
            </div>
            <h2 className="font-heading text-4xl font-bold leading-[1.02] tracking-tight text-brand-black md:text-6xl lg:text-[68px]">
              Engineered for <Mark>your day-to-day</Mark> operations.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body text-base text-brand-grey md:text-lg">
              Every industry operates differently. Our Odoo implementations come pre-configured for your specific business workflows — no generic templates.
            </p>
            <Link to={localizedPath("/realisations", "en")} className="group mt-5 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
              <span className="relative">
                View all case studies
                <span aria-hidden className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-0" style={{ backgroundColor: "var(--blue)" }} />
              </span>
              <ArrowUpRight size={14} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="relative mt-14 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-6 md:gap-5">
          {items.map((s, i) => {
            const isClickable = !!s.to;
            const span = layout[i] ?? layout[i % layoutBase.length];
            const isFeature = i === 0;
            const Card = (
              <div className="group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-[28px] ring-1 ring-black/5 shadow-[0_18px_45px_-22px_rgba(13,13,13,0.4)] transition-shadow duration-500 hover:shadow-[0_30px_70px_-25px_rgba(18,77,90,0.55)]">
                <img src={s.img} alt={`Odoo ERP module for ${s.label}`} loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]" />
                <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-black via-brand-black/80 via-45% to-brand-black/20" />
                <div aria-hidden className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(420px 220px at 50% 100%, rgba(255,221,87,0.35), transparent 70%)" }} />
                <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">
                    <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isClickable ? "var(--gold)" : "rgba(255,255,255,0.5)" }} />
                    {String(i + 1).padStart(2, "0")} · {isClickable ? "Available" : "In progress"}
                  </span>
                  {isFeature && (
                    <span className="rounded-full px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.22em] shadow-[0_8px_20px_-6px_rgba(255,221,87,0.55)]" style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}>
                      ★ Flagship vertical
                    </span>
                  )}
                </div>
                <div aria-hidden className="absolute bottom-0 left-0 h-[3px] w-12 origin-left transition-all duration-500 group-hover:w-full" style={{ backgroundColor: "var(--gold)" }} />
                <div className="relative p-5 md:p-6" style={{ textShadow: "0 1px 14px rgba(0,0,0,0.6)" }}>
                  <h3 className={`font-heading font-bold text-white ${isFeature ? "text-2xl md:text-[34px] leading-[1.05]" : "text-xl md:text-[22px]"}`}>{s.label}</h3>
                  <p className={`mt-1.5 font-body text-white/95 ${isFeature ? "text-base md:text-lg max-w-md" : "text-sm"}`}>{s.desc}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    {isClickable ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
                        Explore
                        <ArrowRight size={12} className="transition duration-500 group-hover:translate-x-1.5" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">Coming soon</span>
                    )}
                    {isClickable && (
                      <span className="flex h-9 w-9 items-center justify-center rounded-full opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 translate-x-2" style={{ backgroundColor: "var(--gold)" }}>
                        <ArrowUpRight size={16} style={{ color: "var(--blue)" }} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
            return isClickable && s.to ? (
              <Link key={s.label} to={localizedPath(s.to, "en")} className={`${span} block h-full`} aria-label={`Explore ${s.label}`}>{Card}</Link>
            ) : (
              <div key={s.label} className={`${span} h-full`}>{Card}</div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border bg-brand-bg px-6 py-5" style={{ borderColor: "var(--grey-light)" }}>
          <p className="font-body text-sm text-brand-grey">
            Don't see your industry? Our consultants have deployed Odoo across{" "}
            <span className="font-semibold text-brand-black">+30 specialized business verticals</span>.
          </p>
          <Link to={localizedPath("/contact", "en")} className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold text-brand-black transition hover:scale-[1.02]" style={{ backgroundColor: "var(--gold)" }}>
            Talk to an expert
            <ArrowRight size={14} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CaseStudy({ market }: { market: "BE" | "MA" }) {
  const data =
    market === "MA"
      ? {
          tag: "Construction · Public Tenders",
          name: "AIT OUKHALI TRAVAUX",
          quote: "Our entire management was centralized into Odoo in under 10 weeks: tender CRM, job sites, HR, and Moroccan tax compliant invoicing.",
          metrics: [
            { k: "<10", v: "weeks" },
            { k: "100%", v: "centralized" },
            { k: "1", v: "single tool" },
          ],
          img: caseMa,
        }
      : {
          tag: "Social Housing · Brussels",
          name: "AIS Hector Denis",
          quote: "A structured, transparent implementation from day one. AIS is proudly featured among our verified public references on odoo.com.",
          metrics: [
            { k: "40+", v: "delivered projects" },
            { k: "v18·v19", v: "certified" },
          ],
          img: caseBe,
        };

  return (
    <section className="container py-24 md:py-28">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">Case study</p>
          </div>
          <h2 className="max-w-2xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-5xl">
            Real outcomes our clients <Mark>achieved</Mark>.
          </h2>
        </div>
        <Link to={localizedPath("/realisations", "en")} className="hidden items-center gap-2 font-body text-sm font-medium text-brand-blue hover:underline md:inline-flex">
          All case studies <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid gap-5 lg:grid-cols-5">
        <div className="relative lg:col-span-3">
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-[28px] border shadow-[0_30px_80px_-30px_rgba(18,77,90,0.3)]" style={{ borderColor: "var(--grey-light)" }}>
            <img src={data.img} alt={`Odoo implementation case study for ${data.name}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute left-6 top-6"><Sticker rotate={-6}>Verified reference</Sticker></div>
          </div>
        </div>
        <div className="relative lg:col-span-2">
          <div className="flex h-full flex-col justify-between rounded-[28px] border bg-brand-white p-8 shadow-[0_30px_80px_-30px_rgba(18,77,90,0.2)] md:p-10" style={{ borderColor: "var(--grey-light)" }}>
            <div>
              <span className="inline-block rounded-full bg-brand-blue-light px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">{data.tag}</span>
              <h3 className="mt-6 font-heading text-3xl font-bold text-brand-black md:text-4xl">{data.name}</h3>
              <p className="mt-6 font-body text-lg italic leading-relaxed text-brand-grey">"{data.quote}"</p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {data.metrics.map((m) => (
                <div key={m.v} className="rounded-2xl border bg-brand-bg p-4" style={{ borderColor: "var(--grey-light)" }}>
                  <div className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">{m.k}</div>
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

function Why() {
  const items = [
    { icon: ShieldCheck, title: "Publicly verifiable", desc: "Certifications and client references are directly viewable on our official odoo.com/partners profile. Absolute transparency first." },
    { icon: Wallet, title: "Optimized pricing", desc: "Our international model — certified technical consultants in Morocco serving domestic and overseas clients — allows us to deliver high-standard packages at 20% to 50% more competitive rates." },
    { icon: Globe2, title: "Single point of contact", desc: "ERP integration, website development, and digital acquisition. One unified team that understands your business holistically." },
    { icon: Clock, title: "Structured responsiveness", desc: "Expert answers within 24 hours. No generic sales pitches — you speak directly to senior consultants who understand your industry." },
  ];
  return (
    <section className="bg-brand-bg">
      <div className="container py-24 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">Why MSL-iTECH</p>
            <span className="h-px w-8 bg-brand-blue" />
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
            Trust you can <Mark>verify</Mark>.
          </h2>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="group relative rounded-[24px] border bg-brand-white p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.25)]" style={{ borderColor: "var(--grey-light)" }}>
              <div className="absolute -top-4 -right-3 z-10"><Sticker rotate={i % 2 === 0 ? -8 : 6}>0{i + 1}</Sticker></div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl transition group-hover:scale-110" style={{ backgroundColor: "var(--blue-light)" }}>
                <Icon size={22} className="text-brand-blue" />
              </div>
              <h3 className="mt-6 font-heading text-lg font-bold leading-snug text-brand-black">{title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-brand-grey">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-brand-bg">
      <div className="container py-20">
        <div className="relative isolate overflow-hidden rounded-[32px] p-10 md:p-16" style={{ backgroundColor: "var(--blue)" }}>
          <HeroCursorGlow color="rgba(255, 221, 87, 1)" size={620} intensity={0.55} radius="32px" />
          <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full opacity-25 blur-3xl" style={{ backgroundColor: "var(--gold)" }} />
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="absolute right-8 top-8 hidden md:block"><Sticker rotate={10}>★ Free Demo</Sticker></div>
          <div className="relative text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
              <Sparkles size={14} className="text-brand-gold" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/85">Ready to start?</p>
            </div>
            <h2 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
              Structure your business <Mark>with Odoo.</Mark>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-body text-base text-white/75 md:text-lg">Dedicated consultant · Tailored workflow demo · No commitment</p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link to={localizedPath("/contact", "en")} className="group cta-pulse-gold hover-shine inline-flex items-center gap-2 rounded-full px-8 py-4 font-body text-base font-bold text-brand-black transition hover:scale-[1.02]" style={{ backgroundColor: "var(--gold)" }}>
                Book my demo
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link to={localizedPath("/realisations", "en")} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-body text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10">
                View our case studies <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomeBelowFoldEn({ market }: { market: "BE" | "MA" }) {
  return (
    <>
      <SocialProof />
      <Pillars />
      <Sectors market={market} />
      <CaseStudy market={market} />
      <Why />
      <HomeFaq />
      <FinalCTA />
    </>
  );
}
