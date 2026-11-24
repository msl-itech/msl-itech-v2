import { useEffect, type ReactNode } from "react";
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
import { useProductSeo } from "@/hooks/useProductSeo";
import { localizedPath } from "@/lib/i18n";
import { PARTNER_STATUS_EN } from "@/lib/brand";

/* ---------------- SEO ---------------- */
function useErpSeo() {
  useProductSeo({
    title: "Odoo ERP for SMEs — One Business Platform | MSL-iTECH",
    description:
      "Centralize finance, CRM, inventory, manufacturing, HR and services with Odoo ERP for SMEs. Reduce duplicate data entry and book your free demo with MSL-iTECH.",
    path: "/en/odoo-erp",
    ogImage: erpHero,
  });

  useEffect(() => {
    // Preload module images before the user scrolls.
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
      links.forEach((link) => link.remove());
    };
  }, []);
}

/* ---------------- Highlight (marker brushstroke) ---------------- */
function Mark({ children }: { children: ReactNode }) {
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
  children: ReactNode;
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
          {/* Image and overlay clipped */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
            <img
              src={erpHero}
              alt="Odoo ERP — integrated business management platform"
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
            {/* Dotted texture */}
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

          {/* Top-left sticker with unrestricted overflow */}
          <div className="absolute -top-3 left-8 z-20 md:-top-4 md:left-12">
            <Sticker rotate={-8}>★ v18 &amp; v19 certified consultants</Sticker>
          </div>

          {/* Content */}
          <div className="relative flex min-h-[420px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[560px] md:py-32">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
              <Sparkles size={12} className="text-brand-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                Core platform · Odoo ERP
              </p>
            </div>

            <h1 className="mt-8 font-heading text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-[88px] lg:text-[112px]">
              Odoo <span className="italic font-light text-brand-gold">ERP</span>{" "}
              for SMEs
            </h1>

            <p className="mt-7 max-w-xl font-body text-base text-white/75 md:text-lg">
              Odoo ERP for SMEs brings finance, CRM, inventory, manufacturing,
              HR and services together in one platform. It centralizes your
              business data so your teams can manage operations in a single,
              connected system.
            </p>
          </div>

          {/* Breadcrumb pill — bottom right, overlapping */}
          <div className="absolute -bottom-5 right-6 z-30 md:right-10">
            <div
              className="flex items-center gap-3 rounded-full border bg-brand-white px-5 py-2.5 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.25)]"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <Link
                to={localizedPath("/", "en")}
                className="font-body text-sm text-brand-grey transition hover:text-brand-blue"
              >
                Home
              </Link>
              <ArrowRight size={14} className="text-brand-gold" />
              <span className="font-body text-sm font-semibold text-brand-blue">
                Odoo ERP
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Intro block below the banner */}
      <div className="container pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              <span className="mr-2 inline-block h-px w-8 align-middle bg-brand-blue" />
              What we offer
            </p>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-[44px]">
              One ERP. Six modules.
              <span className="block">
                <span className="italic font-light text-brand-blue">
                  One source of
                </span>{" "}
                <Mark>truth.</Mark>
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-body text-base text-brand-grey md:text-lg">
              Stop scattering your data across Excel, your cloud CRM,
              accounting software and HR spreadsheets. Odoo centralizes your
              entire SME in a single, modular platform designed to grow with you.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Open-source — no vendor lock-in",
                "Hosting in Europe or Morocco",
                "6 to 10 weeks to get started",
                "40+ projects delivered",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 font-body text-sm text-brand-black"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-gold"
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to={localizedPath("/contact", "en")}
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Book my free demo
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
              <Link
                to={localizedPath("/realisations", "en")}
                className="group inline-flex items-center gap-2 rounded-full border-2 px-6 py-3.5 font-body text-sm font-semibold text-brand-black transition hover:bg-brand-white"
                style={{ borderColor: "var(--blue)" }}
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--blue)" }}
                >
                  <ArrowUpRight size={14} className="text-white" />
                </span>
                View our case studies
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
    "Shared Excel files that crash when 3 people open them",
    "Cloud CRM disconnected from invoicing",
    "Inventory updated… once a week",
    "No visibility into profitability by project",
  ];
  const promises = [
    "A single, real-time database",
    "From quote to invoice in one workflow",
    "Inventory synchronized with every movement",
    "Profitability dashboards for each project",
  ];

  return (
    <section className="bg-brand-white">
      <div className="container py-24 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              Before / After
            </p>
            <span className="h-px w-8 bg-brand-blue" />
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-5xl">
            From <span className="line-through text-brand-grey">fragmentation</span>{" "}
            to <Mark>clarity</Mark>.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {/* Before */}
          <div
            className="relative rounded-[28px] border bg-brand-bg p-8 md:p-10"
            style={{ borderColor: "var(--grey-light)" }}
          >
            <div className="absolute -top-4 left-6">
              <Sticker rotate={-6}>Before</Sticker>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-grey">
              Without Odoo
            </p>
            <h3 className="mt-3 font-heading text-2xl font-bold text-brand-black">
              Disconnected daily operations.
            </h3>
            <ul className="mt-6 space-y-3">
              {pains.map((pain) => (
                <li
                  key={pain}
                  className="flex items-start gap-3 font-body text-base text-brand-grey"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-grey" />
                  {pain}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
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
              <Sticker rotate={6}>After</Sticker>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold">
              With Odoo
            </p>
            <h3 className="mt-3 font-heading text-2xl font-bold text-white">
              One platform. One workflow.
            </h3>
            <ul className="mt-6 space-y-3">
              {promises.map((promise) => (
                <li
                  key={promise}
                  className="flex items-start gap-3 font-body text-base text-white/90"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-brand-gold"
                  />
                  {promise}
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
    label: "CRM & Sales",
    eyebrow: "01 — Conversion",
    desc: "Visual pipeline, quotes in 2 clicks, electronic signatures. Your sales team closes deals faster.",
    icon: OdooCrm,
    img: crmImg,
    big: true,
  },
  {
    to: "/odoo-finance-comptabilite",
    label: "Finance & Accounting",
    eyebrow: "02 — Management",
    desc: "Automated accounting, bank reconciliation and local compliance.",
    icon: OdooAccountant,
    img: financeImg,
  },
  {
    to: "/odoo-stock-inventaire",
    label: "Inventory & Warehouse",
    eyebrow: "03 — Logistics",
    desc: "Multiple warehouses, barcodes and lot traceability. Accurate inventory at all times.",
    icon: OdooStock,
    img: stockImg,
  },
  {
    to: "/odoo-production-fabrication",
    label: "Manufacturing",
    eyebrow: "04 — Shop floor",
    desc: "Manufacturing orders, MRP and routings. From raw materials to finished products.",
    icon: OdooMrp,
    img: productionImg,
  },
  {
    to: "/odoo-rh-paie",
    label: "HR & Payroll",
    eyebrow: "05 — People",
    desc: "Self-service leave requests, automated payroll and time tracking by project.",
    icon: OdooHr,
    img: rhImg,
  },
  {
    to: "/odoo-services-professionnels",
    label: "Professional Services",
    eyebrow: "06 — Delivery",
    desc: "Time tracking, rebilling and profitability by engagement in one click.",
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
              Odoo modules
            </p>
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
            Every business function.
            <br />
            <Mark>One single tool.</Mark>
          </h2>
        </div>
        <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
          Activate only the modules you need. Add more as you grow, without
          painful migrations.
        </p>
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-6">
        {modules.map((module, i) => {
          const isBig = module.big;
          const span = isBig
            ? "lg:col-span-4 lg:row-span-2 min-h-[520px]"
            : "lg:col-span-2 min-h-[260px]";
          const Icon = module.icon;
          return (
            <Link
              key={module.label}
              to={localizedPath(module.to, "en")}
              className={`group relative isolate flex flex-col justify-between rounded-[28px] p-7 md:p-8 ${span}`}
              style={{ backgroundColor: "var(--blue)" }}
            >
              {/* Background image and gradient inside clipped wrapper */}
              <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
                <img
                  src={module.img}
                  alt={`Odoo ${module.label} module`}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
                    isBig
                      ? "opacity-30 group-hover:opacity-45"
                      : "opacity-25 group-hover:opacity-40"
                  }`}
                />
                {/* Brand-blue tint for consistent legibility */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(18,77,90,0.88) 0%, rgba(10,45,54,0.94) 100%)",
                  }}
                />
                {/* Warm glow accent, larger on the hero card */}
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
                    {module.eyebrow}
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
                  {module.label}
                </h3>
                <p
                  className={`mt-3 font-body text-white/85 ${
                    isBig ? "max-w-md text-base md:mt-5" : "text-sm"
                  }`}
                >
                  {module.desc}
                </p>

                {isBig && (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Pipeline",
                      "Quotes",
                      "E-signatures",
                      "Email tracking",
                      "Reporting",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Floating mini-mockup on the large card */}
              {isBig && (
                <div
                  className="absolute bottom-8 right-8 hidden w-[230px] rounded-2xl border bg-brand-white p-4 shadow-2xl lg:block"
                  style={{
                    borderColor: "var(--grey-light)",
                    transform: "rotate(4deg)",
                  }}
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-grey">
                    Pipeline · May 2026
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

/* ---------------- Methodology (timeline) ---------------- */
function Methodology() {
  const steps = [
    {
      n: "01",
      title: "Scoping",
      desc: "Discovery workshop covering your processes and business constraints.",
      d: "W1",
    },
    {
      n: "02",
      title: "Configuration",
      desc: "Odoo setup, data migration, banking and e-commerce integrations.",
      d: "W2-W5",
    },
    {
      n: "03",
      title: "Training",
      desc: "Your teams take control. Documentation and short video tutorials.",
      d: "W6-W7",
    },
    {
      n: "04",
      title: "Launch",
      desc: "Supported go-live. Responsive support and continuous improvement.",
      d: "W8+",
    },
  ];

  return (
    <section className="bg-brand-bg">
      <div className="container py-24 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              Methodology
            </p>
            <span className="h-px w-8 bg-brand-blue" />
          </div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
            Go live in <Mark>8 weeks</Mark>.
          </h2>
          <p className="mt-6 font-body text-base text-brand-grey md:text-lg">
            A structured approach with no surprises, designed for SMEs that
            want an ERP that works — not a project that drags on.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className="group relative rounded-[24px] border bg-brand-white p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.25)]"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <div className="absolute -top-4 -right-3 z-10">
                <Sticker rotate={i % 2 === 0 ? -8 : 6}>{step.d}</Sticker>
              </div>
              <div
                className="font-heading text-5xl font-bold leading-none"
                style={{ color: "var(--blue)", opacity: 0.18 }}
              >
                {step.n}
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold leading-snug text-brand-black">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-brand-grey">
                {step.desc}
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
              Case study
            </p>
          </div>
          <h2 className="max-w-2xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-5xl">
            Client reference on <Mark>odoo.com</Mark>.
          </h2>
        </div>
        <Link
          to={localizedPath("/realisations", "en")}
          className="hidden items-center gap-2 font-body text-sm font-medium text-brand-blue hover:underline md:inline-flex"
        >
          All case studies <ArrowRight size={16} />
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
              alt="AIS Hector Denis — Odoo implementation"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute left-6 top-6">
              <Sticker rotate={-6}>Verified reference</Sticker>
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
                Social housing · Brussels
              </span>
              <h3 className="mt-6 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                AIS Hector Denis
              </h3>
              <p className="mt-6 font-body text-lg italic leading-relaxed text-brand-grey">
                "A structured and transparent implementation. AIS is among our
                public client references on odoo.com."
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { k: "40+", v: "projects delivered" },
                { k: "v18·v19", v: "certified" },
              ].map((metric) => (
                <div
                  key={metric.v}
                  className="rounded-2xl border bg-brand-bg p-4"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
                    {metric.k}
                  </div>
                  <div className="mt-1 font-body text-xs text-brand-grey">
                    {metric.v}
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
    q: "How much does an Odoo implementation with MSL-iTECH cost?",
    a: "Each project is priced individually after a free 30-minute scoping session. Our rates are 20 to 50% more affordable than Success Packs observed on the Belgian market, with equivalent quality. You receive a detailed quote within 48 hours.",
  },
  {
    q: "How long does it take to go live?",
    a: "For a standard SME, allow 6 to 10 weeks from scoping to go-live. Multi-module or multi-country implementations may take longer.",
  },
  {
    q: "Do I need to adopt all the modules at once?",
    a: "No. Odoo's strength is its modularity. You can start with 2–3 essential modules (Finance + CRM, for example), then activate others at your own pace.",
  },
  {
    q: "What happens to my data if I leave Odoo?",
    a: "Odoo is open-source. You can export your data at any time in standard formats (CSV, SQL). There is no vendor lock-in.",
  },
  {
    q: "Are you really an official Odoo partner?",
    a: `Yes. Our partner status is ${PARTNER_STATUS_EN}. Our partner profile is public on odoo.com/partners, with our certifications and verifiable client references.`,
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
            The questions we <Mark>actually</Mark> get asked.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border bg-brand-bg p-6 transition open:shadow-md"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-semibold text-brand-black">
                {faq.q}
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
                {faq.a}
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
            <Sticker rotate={10}>★ Free demo</Sticker>
          </div>

          <div className="relative max-w-2xl text-white">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">
              Next step
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-5xl">
              See your SME running on Odoo in{" "}
              <span className="italic font-light">45 minutes</span>.
            </h2>
            <p className="mt-5 max-w-xl font-body text-base text-white/85">
              A personalized demo, configured for your industry. No commitment,
              no sales pressure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={localizedPath("/contact", "en")}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold transition hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--blue)",
                }}
              >
                Book my demo <ArrowRight size={16} />
              </Link>
              <Link
                to={localizedPath("/notre-approche", "en")}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore our approach
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 font-body text-sm text-white/70">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-gold" />
                v18 &amp; v19 certified consultants
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-gold" />
                Response within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
export default function OdooErpPageEn() {
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
