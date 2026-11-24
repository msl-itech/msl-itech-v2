import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  MapPin,
  Users,
  Wrench,
  CheckCircle2,
  Star,
  PhoneCall,
  ExternalLink,
  ChevronDown,
  Building2,
  Truck,
  HeartPulse,
  ShoppingBag,
  Compass,
  UtensilsCrossed,
  ClipboardCheck,
  Sliders,
  Database,
  GraduationCap,
  Headphones,
  Check,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import { PARTNER_STATUS_EN } from "@/lib/brand";
import { localizedPath } from "@/lib/i18n";

import stepAuditImg from "@/assets/marketing-step-audit.jpg";
import stepStrategyImg from "@/assets/marketing-step-strategy.jpg";
import stepExecutionImg from "@/assets/marketing-step-execution.jpg";
import stepReportingImg from "@/assets/marketing-step-reporting.jpg";

import heroMaImg from "@/assets/hero-ma.webp";
const odooPartnerLogo = "/odoo_silver_partner_rgb.png";

import sectorHoreca from "@/assets/home/sector-horeca.webp";
import sectorBtp from "@/assets/home/sector-btp.webp";
import sectorHealth from "@/assets/home/sector-health.webp";
import sectorWholesale from "@/assets/home/sector-wholesale.webp";
import sectorLogistics from "@/assets/home/sector-logistics.webp";
import sectorTourism from "@/assets/home/sector-tourism.webp";

import sectorScaleup from "@/assets/home/sector-scaleup.webp";
import stockHero from "@/assets/stock-hero.webp";
import transportHero from "@/assets/transport-hero.webp";
import pillarErp from "@/assets/home/pillar-erp.webp";

import photoHoussine from "@/assets/team/houssine.jpg";
import photoElohim from "@/assets/team/elohim.webp";
import photoManal from "@/assets/team/manal.webp";
import photoMika from "@/assets/team/mika.webp";
import photoArnaud from "@/assets/team/arnaud.jpg";

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

const faqs = [
  {
    q: "What is an Odoo implementation partner?",
    a: "An Odoo implementation partner is a certified firm endorsed by Odoo S.A. to lead the setup, customization, and rollout of the Odoo ERP platform within your business. They configure the modules aligned with your workflows, migrate your legacy data, and train your staff.",
  },
  {
    q: "Why choose a certified official Odoo partner in Morocco?",
    a: `An official partner status like ${PARTNER_STATUS_EN} guarantees that the team has passed technical Odoo certifications and demonstrated a track record of delivered projects. Choosing a local partner such as MSL-iTECH ensures trilingual support in Arabic, French, and English, deep mastery of Moroccan regulatory standards (VAT, CGNC accounting chart, DGI e-invoicing), and seamless real-time communication on GMT+1.`,
  },
  {
    q: "What is the difference between an official Odoo partner and a freelance Odoo consultant?",
    a: "An official Odoo partner like MSL-iTECH is listed on the official Odoo.com directory, maintains direct escalation paths to Odoo S.A. engineering teams, and undergoes recurrent certification audits. An independent freelance consultant cannot provide these operational guarantees, enterprise SLAs, or direct publisher-level backing.",
  },
  {
    q: "Which Moroccan cities does MSL-iTECH cover?",
    a: "MSL-iTECH is headquartered in Marrakech and serves businesses across Morocco, including Casablanca, Rabat, Tangier, Agadir, Fez, Meknes, and regional hubs. We provide on-site workshops and go-live assistance in the Marrakech-Safi region and hybrid on-site/remote delivery across the rest of the country.",
  },
  {
    q: "How much does an Odoo ERP implementation cost in Morocco?",
    a: "Implementation costs depend on your company size, the number of modules activated, and any custom development required. MSL-iTECH offers structured fixed-scope packages tailored to Moroccan SMEs without hidden fees. Contact us to receive a transparent, itemized quote in MAD within 48 hours.",
  },
  {
    q: "Why hire an Odoo implementation firm rather than an independent contractor?",
    a: "An established implementation partner like MSL-iTECH is listed on odoo.com, maintains publisher-grade support access, keeps technical certifications up to date, and provides long-term team continuity. While a freelancer may handle minor isolated tasks, they cannot guarantee multi-year maintenance, seamless version upgrades, or institutional accountability when business-critical processes are at stake.",
  },
];

const sectors = [
  { label: "Hospitality & Restaurants", href: "/odoo-horeca-maroc", image: sectorHoreca, icon: UtensilsCrossed },
  { label: "Construction & Real Estate", href: "/odoo-btp-maroc", image: sectorBtp, icon: Building2 },
  { label: "Healthcare & Pharmaceuticals", href: "/odoo-sante-maroc", image: sectorHealth, icon: HeartPulse },
  { label: "Retail & Wholesale Distribution", href: "/odoo-gestion-stock-maroc", image: sectorWholesale, icon: ShoppingBag },
  { label: "Transport & Logistics", href: "/odoo-transport-logistique-maroc", image: sectorLogistics, icon: Truck },
  { label: "Tourism & Travel Agencies", href: "/odoo-tourisme-maroc", image: sectorTourism, icon: Compass },
];

const cities = [
  { name: "Marrakech", href: "/integrateur-odoo-marrakech", local: true },
  { name: "Casablanca", href: "/integrateur-odoo-casablanca", local: false },
  { name: "Rabat", href: "/contact", local: false },
  { name: "Tangier", href: "/contact", local: false },
  { name: "Agadir", href: "/contact", local: false },
  { name: "Fez", href: "/contact", local: false },
];

const steps = [
  {
    num: "01",
    title: "Audit & Scoping",
    desc: "Detailed mapping of your operational workflows, identification of high-priority Odoo modules, and transparent scope framing.",
    icon: ClipboardCheck,
    image: stepAuditImg,
    tag: "Initial Discovery",
    highlights: ["Business flow mapping", "Priority module matrix", "Transparent fixed-scope proposal"],
  },
  {
    num: "02",
    title: "Configuration & Custom Engineering",
    desc: "Standard Odoo parameterization, tailored business logic development, and API integrations with your legacy ecosystem.",
    icon: Sliders,
    image: stepStrategyImg,
    tag: "Build & Integration",
    highlights: ["Native Odoo setup", "Tailored custom modules", "API connectors & Moroccan CGNC chart"],
  },
  {
    num: "03",
    title: "Data Migration",
    desc: "Extraction, data scrubbing, deduplication, and secure import of master data and opening balances from Excel, Sage, or legacy software.",
    icon: Database,
    image: stockHero,
    tag: "Integrity & Security",
    highlights: ["Sage/Excel legacy data recovery", "Data cleansing & deduplication", "Secure Odoo automated import"],
  },
  {
    num: "04",
    title: "User Training & Go-Live",
    desc: "Role-specific staff training, user acceptance testing (UAT), and hands-on on-site guidance on launch day.",
    icon: GraduationCap,
    image: stepExecutionImg,
    tag: "Rollout & Adoption",
    highlights: ["Tailored end-user workshops", "Real-scenario user testing", "On-site shoulder-to-shoulder go-live support"],
  },
  {
    num: "05",
    title: "Continuous Support & Evolution",
    desc: "Dedicated SLA hotline, preventive maintenance, major version upgrades (v18, v19), and post-launch roadmap extensions.",
    icon: Headphones,
    image: stepReportingImg,
    tag: "Long-Term SLA",
    highlights: ["Fast-response local helpdesk", "Ongoing bugfixes & tuning", "Smooth v18 & v19 version migrations"],
  },
];

const teamMembers = [
  {
    name: "El Houssine BOUHMAIDA",
    role: "Business Analyst & Lead Project Manager",
    photo: photoHoussine,
  },
  {
    name: "Manal AIT AYAD",
    role: "Lead Python / Odoo Developer",
    photo: photoManal,
  },
  {
    name: "Elohim TAGNE",
    role: "Full-Stack Software Engineer",
    photo: photoElohim,
  },
  {
    name: "Arnaud AHOUO",
    role: "Chief Technology Officer & Solution Architect",
    photo: photoArnaud,
  },
  {
    name: "Mika MUSUNGAYI",
    role: "Co-founder & Head of Finance",
    photo: photoMika,
  },
];

function useSeo() {
  useProductSeo({
    title: "Odoo Implementation Partner Morocco — ERP Setup | MSL-iTECH",
    description:
      "Odoo implementation partner in Morocco: ERP setup, custom modules, DGI tax compliance and user training for growing SMEs. Request a free quote in 48h.",
    path: "/en/odoo-partner-morocco",
    ogImage: heroMaImg,
    faqs,
    service: {
      name: "Odoo ERP Implementation in Morocco",
      description:
        `End-to-end Odoo ERP implementation, custom development, and long-term support for Moroccan SMEs and mid-market enterprises by an official certified ${PARTNER_STATUS_EN}.`,
      serviceType: [
        "ERP Implementation",
        "Odoo Customization",
        "ERP Consulting",
        "Odoo Development",
      ],
      areaServed: ["MA"],
    },
    breadcrumbs: [
      { name: "Home", url: "/en" },
      { name: "Odoo Partner Morocco", url: "/en/odoo-partner-morocco" },
    ],
  });
}

export default function OdooPartnerMoroccoPage() {
  useSeo();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTeamIdx, setActiveTeamIdx] = useState(0);
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  return (
    <main>
      {/* ── Hero Bento ── */}
      <section className="relative isolate overflow-hidden bg-brand-bg pt-10 pb-16 md:pt-16 md:pb-24">
        <HeroCursorGlow color="rgba(255, 221, 87, 1)" size={560} intensity={0.28} />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: "var(--blue)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(rgba(13,13,13,0.7) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left column: Title, Pitch & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-white/80 px-3.5 py-1.5 backdrop-blur-sm shadow-sm">
                <Sparkles size={13} className="text-brand-blue" aria-hidden="true" />
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-brand-blue">
                  Official Odoo {PARTNER_STATUS_EN} · Morocco
                </p>
              </div>

              <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-brand-black sm:text-5xl md:text-[62px]">
                Certified <Mark>Odoo implementation partner Morocco</Mark>: ERP deployment, custom modules, training
              </h1>

              <p className="mt-4 font-body text-base font-semibold leading-relaxed text-brand-black md:text-lg">
                MSL-iTECH is an official Odoo implementation partner in Morocco helping SMEs unify their accounting, sales, inventory, and operations under a single modern platform. We combine international ERP delivery standards with deep mastery of Moroccan tax and accounting regulations.
              </p>

              <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-brand-grey md:text-base">
                Headquartered in Marrakech with active client deployments in Casablanca, Tangier, and nationwide, our certified consultants deliver turnkey Odoo projects tailored to the operational realities of Moroccan enterprises.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to={localizedPath("/contact", "en")}
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  Request a free quote
                  <ArrowRight size={18} aria-hidden="true" className="transition group-hover:translate-x-1" />
                </Link>
                <Link
                  to={localizedPath("/prendre-rendez-vous", "en")}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue/30 bg-brand-white px-6 py-3.5 font-body text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/5"
                >
                  <PhoneCall size={16} aria-hidden="true" />
                  Schedule a discovery call
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-2 font-body text-xs text-brand-grey sm:gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-grey/15 bg-brand-white/70 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                  Certified consultants (v18 &amp; v19)
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-grey/15 bg-brand-white/70 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                  Local presence in Marrakech &amp; Morocco
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-grey/15 bg-brand-white/70 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                  24-hour response SLA
                </span>
              </div>
            </div>

            {/* Right column: Visual bento card with Morocco showcase */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                {/* Large visual card with hero-ma.webp */}
                <div
                  className="group relative col-span-2 aspect-[16/11] overflow-hidden rounded-[26px] border bg-brand-white shadow-xl"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <img
                    src={heroMaImg}
                    alt="Certified Odoo implementation partner in Morocco — MSL-iTECH"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(18,77,90,0.1) 0%, rgba(10,45,54,0.65) 100%)",
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Sticker rotate={-5} href="https://www.odoo.com/partners/msl-itech-15851608?country_id=132">
                      ★ Official Partner
                    </Sticker>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-brand-black/60 p-3 backdrop-blur-md text-white">
                    <div className="flex items-center gap-2.5">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-heading text-xs font-semibold">Official Odoo {PARTNER_STATUS_EN}</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/80">Morocco</span>
                  </div>
                </div>

                {/* Blue card: Track record metrics */}
                <div
                  className="relative isolate overflow-hidden rounded-[22px] p-5 text-white shadow-md"
                  style={{ backgroundColor: "var(--blue)" }}
                >
                  <div
                    className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full opacity-25 blur-xl"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                  <div className="flex -space-x-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="h-7 w-7 rounded-full border-2 border-white/90"
                        style={{
                          background: `linear-gradient(135deg, hsl(${40 + i * 35} 80% 65%), hsl(${
                            200 + i * 25
                          } 65% 50%))`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 font-heading text-3xl font-bold">40+</div>
                  <p className="mt-1 font-body text-xs text-white/85">
                    delivered projects — public partner record on odoo.com
                  </p>
                </div>

                {/* White card: Tailored pricing & quick quote */}
                <div
                  className="flex flex-col justify-between rounded-[22px] border bg-brand-white p-5 shadow-sm"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand-blue font-bold">
                      Approach
                    </span>
                    <div className="mt-2 font-heading text-2xl font-bold" style={{ color: "var(--blue)" }}>
                      Tailored
                    </div>
                  </div>
                  <p className="mt-2 font-body text-xs text-brand-grey">
                    free detailed proposal delivered within 48h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Official Certification Banner ── */}
      <section className="border-y border-brand-grey/10 bg-brand-white py-10">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-brand-blue/10 bg-brand-bg/60 p-6 md:flex-row md:p-8">
            <div className="flex shrink-0 items-center justify-center rounded-2xl bg-brand-white p-4 shadow-sm border border-brand-grey/10">
              <img
                src={odooPartnerLogo}
                alt={`Official Odoo ${PARTNER_STATUS_EN} certified badge`}
                className="h-16 w-auto object-contain md:h-20"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue mb-2">
                <ShieldCheck size={14} /> Official Listed Partner
              </div>
              <h2 className="font-heading text-xl font-bold text-brand-black md:text-2xl">
                Certified Odoo {PARTNER_STATUS_EN} — v18 &amp; v19 certified consultants
              </h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-brand-grey">
                MSL-iTECH is officially listed on <strong>odoo.com/partners</strong> as a recognized Odoo implementation partner in Morocco. Our senior consultants hold functional and technical certifications across versions 18 and 19 and benefit from direct publisher escalation paths with Odoo S.A. engineering teams.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://www.odoo.com/partners/msl-itech-15851608?country_id=132"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue px-5 py-2.5 font-body text-xs font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
              >
                Verify on Odoo.com
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why choose MSL-iTECH ── */}
      <section className="py-20 bg-brand-white">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="text-center md:text-left">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                Competitive Strengths
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                Why select MSL-iTECH as your Odoo implementation partner in Morocco?
              </h2>
              <p className="mt-4 max-w-2xl font-body text-brand-grey">
                Not all ERP integrators deliver equal outcomes. Here is what sets our delivery team apart across the Moroccan market.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Certified Official Partner",
                  desc: "Officially listed on odoo.com. Functional and technical certifications verified directly by Odoo S.A. Publisher-grade technical escalation access.",
                },
                {
                  icon: MapPin,
                  title: "Deep Moroccan Localization",
                  desc: "Team based in Marrakech. Native mastery of DGI (the Moroccan tax authority) requirements, electronic invoicing, and the Moroccan general chart of accounts (CGNC).",
                },
                {
                  icon: Users,
                  title: "Industry-Specific Consultants",
                  desc: "Hospitality, Construction, Healthcare, Retail, Logistics: each implementation is led by a consultant who understands your operations, not just software clicks.",
                },
                {
                  icon: Wrench,
                  title: "Tailored Custom Engineering",
                  desc: "Custom Python modules, REST API connectors, and bespoke local workflows: our engineering team adapts Odoo to your operational processes, never the reverse.",
                },
                {
                  icon: Star,
                  title: "Moroccan SME Track Record",
                  desc: "Dozens of successful implementations delivered in Morocco. We understand local cash-flow constraints, management practices, and realistic deployment timelines.",
                },
                {
                  icon: CheckCircle2,
                  title: "Long-Term Post-Launch Support",
                  desc: "Dedicated SLA hotline, rapid bug fixes, continued user training, and seamless major version upgrades. You are never left alone after launch day.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group relative flex flex-col justify-between rounded-2xl border bg-brand-bg/40 p-6 transition duration-300 hover:-translate-y-1 hover:bg-brand-white hover:shadow-xl"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                      <item.icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-brand-black">{item.title}</h3>
                    <p className="mt-2.5 font-body text-sm leading-relaxed text-brand-grey">{item.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 font-mono text-[11px] font-semibold text-brand-blue/70">
                    <span className="h-1 w-4 rounded-full bg-brand-gold" />
                    Guaranteed Expertise
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry Solutions ── */}
      <section className="bg-brand-bg py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                  Sector Expertise
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                  Odoo implementation by industry sector in Morocco
                </h2>
                <p className="mt-4 max-w-2xl font-body text-brand-grey">
                  One unified ERP, dozens of specialized business verticals. Our consultants tailor standard Odoo flows to match the operational reality of each sector.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((s) => (
                <Link
                  key={s.href}
                  to={localizedPath(s.href, "en")}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border bg-brand-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-grey/10">
                    <img
                      src={s.image}
                      alt={`${s.label} — Odoo implementation in Morocco`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(18,77,90,0.7) 100%)",
                      }}
                    />
                    <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-white/90 text-brand-blue shadow-sm backdrop-blur-sm">
                      <s.icon size={18} />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-between p-5">
                    <span className="font-heading text-base font-bold text-brand-black group-hover:text-brand-blue transition">
                      {s.label}
                    </span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition group-hover:translate-x-1"
                      style={{ backgroundColor: "var(--gold)" }}
                    >
                      <ArrowRight size={15} style={{ color: "var(--blue)" }} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Implementation Methodology — Interactive Project Roadmap ── */}
      <section className="py-20 bg-brand-white border-t border-brand-grey/10">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-bg px-3.5 py-1">
                <Sparkles size={12} className="text-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                  Project Delivery Method
                </p>
              </div>
              <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                Our Odoo implementation methodology in Morocco
              </h2>
              <p className="mt-4 max-w-2xl font-body text-brand-grey">
                No surprises, no drifting budgets. Every project follows a proven, milestone-driven 5-phase framework.
              </p>
            </div>

            {/* Horizontal progress bar */}
            <div className="mt-10 overflow-x-auto pb-2">
              <div className="flex min-w-[620px] items-center justify-between relative px-2">
                <div
                  aria-hidden
                  className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 rounded-full bg-brand-grey/15 -z-0"
                />
                <div
                  aria-hidden
                  className="absolute top-1/2 left-6 -translate-y-1/2 h-1 rounded-full bg-brand-blue transition-all duration-500 -z-0"
                  style={{
                    width: `${(activeStepIdx / (steps.length - 1)) * 90}%`,
                  }}
                />

                {steps.map((step, idx) => {
                  const isActive = activeStepIdx === idx;
                  const isDone = activeStepIdx > idx;
                  const StepIcon = step.icon;

                  return (
                    <button
                      key={step.num}
                      type="button"
                      onClick={() => setActiveStepIdx(idx)}
                      className={`relative z-10 flex flex-col items-center gap-2 transition group ${
                        isActive ? "scale-105" : "hover:scale-102"
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl font-heading text-sm font-bold shadow-md transition duration-300 ${
                          isActive
                            ? "bg-brand-blue text-white ring-4 ring-brand-gold/50"
                            : isDone
                            ? "bg-brand-gold text-brand-blue"
                            : "bg-brand-white border-2 border-brand-grey/20 text-brand-grey group-hover:border-brand-blue"
                        }`}
                      >
                        {isDone ? <Check size={18} strokeWidth={3} /> : <StepIcon size={18} />}
                      </div>
                      <span
                        className={`font-mono text-[11px] font-bold uppercase tracking-wider transition ${
                          isActive
                            ? "text-brand-blue underline decoration-brand-gold decoration-2 underline-offset-4"
                            : "text-brand-grey group-hover:text-brand-black"
                        }`}
                      >
                        Phase {step.num}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Two-panel interactive cockpit */}
            <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
              {/* Left column: List of phases */}
              <div className="space-y-3.5 lg:col-span-6">
                {steps.map((step, idx) => {
                  const isActive = activeStepIdx === idx;

                  return (
                    <div
                      key={step.num}
                      onClick={() => setActiveStepIdx(idx)}
                      className={`group relative flex cursor-pointer gap-4 rounded-2xl border p-5 transition duration-300 ${
                        isActive
                          ? "border-brand-blue bg-brand-blue/5 shadow-md ring-1 ring-brand-blue/30"
                          : "border-brand-grey/15 bg-brand-white hover:border-brand-blue/40 hover:bg-brand-bg/40"
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-heading text-lg font-bold shadow-sm transition ${
                          isActive
                            ? "bg-brand-gold text-brand-blue"
                            : "bg-brand-bg text-brand-grey group-hover:bg-brand-blue/10 group-hover:text-brand-blue"
                        }`}
                      >
                        {step.num}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3
                            className={`font-heading text-base font-bold transition ${
                              isActive ? "text-brand-blue" : "text-brand-black group-hover:text-brand-blue"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <span
                            className={`rounded-full px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${
                              isActive
                                ? "bg-brand-blue text-white"
                                : "bg-brand-grey/10 text-brand-grey"
                            }`}
                          >
                            {step.tag}
                          </span>
                        </div>

                        <p className="mt-1.5 font-body text-xs leading-relaxed text-brand-grey">
                          {step.desc}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center pl-1 text-brand-blue">
                        <ArrowRight
                          size={16}
                          className={`transition duration-300 ${
                            isActive ? "translate-x-1 opacity-100" : "opacity-0 group-hover:opacity-40"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right column: Milestone showcase card */}
              <div className="lg:col-span-6 lg:sticky lg:top-24">
                {(() => {
                  const currentStep = steps[activeStepIdx];
                  const CurrentIcon = currentStep.icon;

                  return (
                    <div
                      className="overflow-hidden rounded-[26px] border bg-brand-white shadow-xl transition-all duration-300"
                      style={{ borderColor: "var(--grey-light)" }}
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-blue/10">
                        <img
                          src={currentStep.image}
                          alt={currentStep.title}
                          className="h-full w-full object-cover transition duration-700 hover:scale-105"
                          loading="lazy"
                        />
                        <div
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(18,77,90,0.1) 0%, rgba(10,45,54,0.7) 100%)",
                          }}
                        />

                        <div className="absolute top-4 left-4">
                          <Sticker rotate={-4}>
                            ★ Step {currentStep.num}
                          </Sticker>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-brand-black/60 p-3 backdrop-blur-md text-white">
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gold text-brand-blue">
                              <CurrentIcon size={15} />
                            </div>
                            <span className="font-heading text-xs font-bold">{currentStep.tag}</span>
                          </div>
                          <span className="font-mono text-[10px] text-white/80">
                            Milestone {activeStepIdx + 1} / 5
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 text-brand-blue">
                          <CurrentIcon size={18} />
                          <h3 className="font-heading text-xl font-bold text-brand-black">
                            {currentStep.title}
                          </h3>
                        </div>

                        <p className="mt-3 font-body text-sm leading-relaxed text-brand-grey">
                          {currentStep.desc}
                        </p>

                        <div className="mt-5 border-t border-brand-grey/10 pt-4">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-brand-blue font-bold mb-2.5">
                            Key Deliverables &amp; Commitments:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {currentStep.highlights.map((h) => (
                              <span
                                key={h}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-bg px-2.5 py-1 font-body text-xs font-medium text-brand-black border border-brand-grey/15"
                              >
                                <CheckCircle2 size={12} className="text-brand-gold shrink-0" />
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Controls */}
                        <div className="mt-6 flex items-center justify-between border-t border-brand-grey/10 pt-4">
                          <button
                            type="button"
                            onClick={() => setActiveStepIdx((prev) => Math.max(0, prev - 1))}
                            disabled={activeStepIdx === 0}
                            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-body text-xs font-semibold transition ${
                              activeStepIdx === 0
                                ? "opacity-30 cursor-not-allowed text-brand-grey"
                                : "text-brand-blue hover:bg-brand-blue/5"
                            }`}
                          >
                            <ArrowRight size={14} className="rotate-180" />
                            Previous step
                          </button>

                          <span className="font-mono text-xs font-bold text-brand-blue">
                            0{activeStepIdx + 1} / 05
                          </span>

                          <button
                            type="button"
                            onClick={() => setActiveStepIdx((prev) => Math.min(steps.length - 1, prev + 1))}
                            disabled={activeStepIdx === steps.length - 1}
                            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-body text-xs font-semibold transition ${
                              activeStepIdx === steps.length - 1
                                ? "opacity-30 cursor-not-allowed text-brand-grey"
                                : "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-sm"
                            }`}
                          >
                            Next step
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scope of Services ── */}
      <section className="bg-brand-bg py-20 border-y border-brand-grey/10">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-white px-3 py-1">
                  <Sparkles size={12} className="text-brand-blue" />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-brand-blue font-bold">
                    Full Scope
                  </p>
                </div>
                <h2 className="mt-4 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                  What MSL-iTECH delivers end-to-end
                </h2>
                <div className="mt-6 rounded-2xl border bg-brand-white p-6 shadow-sm leading-relaxed" style={{ borderColor: "var(--grey-light)" }}>
                  <p className="font-body text-sm md:text-base text-brand-grey leading-relaxed">
                    Our engagement covers the entire lifecycle of an Odoo project, from the initial architectural audit through post-launch continuous improvement. We configure native standard modules — Accounting, CRM, Sales, Inventory, Purchasing, Manufacturing (MRP), HR &amp; Payroll, eCommerce — and engineer custom modules whenever your workflows require bespoke logic. Full Moroccan fiscal localization (the CGNC accounting chart, VAT declarations, and e-invoicing compliance with the DGI, the Moroccan tax authority), secure data migration from legacy tools (Sage, Excel, or custom databases), and comprehensive staff training are built into every project. We do not just license software: we deliver an operational tool tailored to your business, backed by empowered teams and responsive local support.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Accounting & CGNC chart",
                    "CRM & Pipeline Sales",
                    "Inventory & Purchasing",
                    "Manufacturing (MRP)",
                    "HR & Moroccan Payroll",
                    "DGI e-invoicing compliance",
                    "Sage & Excel Data Migration",
                    "End-user staff training",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-white px-3 py-1 font-body text-xs font-semibold text-brand-blue"
                    >
                      <CheckCircle2 size={12} className="text-brand-gold" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative isolate overflow-hidden rounded-3xl border bg-brand-white p-3 shadow-xl" style={{ borderColor: "var(--grey-light)" }}>
                  <img
                    src={pillarErp}
                    alt="Odoo ERP implementation scope in Morocco — MSL-iTECH"
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-sm font-bold text-brand-black">Turnkey Integration</span>
                      <span className="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold text-brand-black" style={{ backgroundColor: "var(--gold)" }}>
                        360°
                      </span>
                    </div>
                    <p className="mt-1 font-body text-xs text-brand-grey">
                      From initial audit through long-term SLA support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Case Studies ── */}
      <section className="py-20 bg-brand-white">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="text-center md:text-left">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                Proven Track Record
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                Three Odoo implementations delivered in Morocco by MSL-iTECH
              </h2>
              <p className="mt-4 max-w-2xl font-body text-brand-grey">
                Every business model is unique. Here are three concrete examples of enterprise rollouts delivered across Morocco, highlighting scope, active modules, and operational outcomes.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "NASLI Holding",
                  sector: "Multi-Entity Group · Marrakech",
                  desc: "Multi-company Odoo architecture for a hospitality group: 12 corporate entities, unified intercompany accounting, shared HR, and consolidated real-time reporting.",
                  href: "/realisations/nasli-holding",
                  image: sectorScaleup,
                },
                {
                  name: "Edge Sport Maroc",
                  sector: "Retail & Distribution · Morocco",
                  desc: "End-to-end Odoo implementation for omnichannel sales, multi-warehouse inventory control, and DGI-compliant automated invoicing across sporting goods retail.",
                  href: "/realisations/edge-sport-maroc",
                  image: stockHero,
                },
                {
                  name: "TPMR Maroc",
                  sector: "Specialized Transport · Morocco",
                  desc: "Customized Odoo deployment for fleet tracking, dynamic tour planning, and contract invoicing for specialized mobility transport across Morocco.",
                  href: "/realisations/tpmr-maroc",
                  image: transportHero,
                },
              ].map((c) => (
                <Link
                  key={c.name}
                  to={localizedPath(c.href, "en")}
                  className="group flex flex-col overflow-hidden rounded-2xl border bg-brand-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-grey/10">
                    <img
                      src={c.image}
                      alt={`${c.name} — Odoo client case study`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)",
                      }}
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-brand-white/90 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-brand-blue shadow-sm backdrop-blur-sm">
                      Case study
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue font-semibold">
                      {c.sector}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-bold text-brand-black group-hover:text-brand-blue transition">
                      {c.name}
                    </h3>
                    <p className="mt-2.5 flex-1 font-body text-sm leading-relaxed text-brand-grey">
                      {c.desc}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-bold text-brand-blue">
                      Read full case study
                      <ArrowRight size={15} aria-hidden="true" className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border bg-brand-bg/50 p-4 text-center" style={{ borderColor: "var(--grey-light)" }}>
              <p className="font-body text-sm text-brand-grey">
                View our verified public partner profile on{" "}
                <a
                  href="https://www.odoo.com/partners/msl-itech-15851608?country_id=132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-blue underline hover:text-brand-blue/80"
                >
                  odoo.com/partners
                </a>{" "}
                and explore our client projects on our{" "}
                <Link to={localizedPath("/realisations", "en")} className="font-semibold text-brand-blue underline hover:text-brand-blue/80">
                  case studies page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Showcase with Stacked Card Deck ── */}
      <section className="bg-brand-bg py-20 border-t border-brand-grey/10">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                  Certified Odoo Experts
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                  Our core implementation team
                </h2>
                <div className="mt-6 rounded-2xl border bg-brand-white p-6 shadow-sm leading-relaxed" style={{ borderColor: "var(--grey-light)" }}>
                  <p className="font-body text-sm md:text-base leading-relaxed text-brand-grey">
                    MSL-iTECH is a multidisciplinary squad of certified Odoo functional consultants and software architects based in Marrakech. Our teams combine deep operational understanding of the Moroccan business landscape — DGI compliance, the CGNC chart of accounts, local management workflows — with international delivery experience acquired across Belgium, Canada, and Africa. Every project is led by a designated consultant who understands your specific industry vertical, not just software configuration. Our lean operational structure delivers competitive fixed-fee pricing without compromising technical rigor, while our official partner status ensures direct escalation to Odoo publisher teams for complex technical edge cases.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 rounded-xl bg-brand-white border px-4 py-2 text-xs font-semibold text-brand-black" style={{ borderColor: "var(--grey-light)" }}>
                    <MapPin size={14} className="text-brand-blue" />
                    Headquarters in Marrakech
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-brand-white border px-4 py-2 text-xs font-semibold text-brand-black" style={{ borderColor: "var(--grey-light)" }}>
                    <ShieldCheck size={14} className="text-brand-gold" />
                    v18 &amp; v19 Certified
                  </div>
                </div>

                {/* Direct pill selectors */}
                <div className="mt-8">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-brand-grey/80 mb-3">
                    Meet our team members ({activeTeamIdx + 1}/{teamMembers.length}):
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers.map((m, idx) => (
                      <button
                        key={m.name}
                        type="button"
                        onClick={() => setActiveTeamIdx(idx)}
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                          activeTeamIdx === idx
                            ? "bg-brand-blue text-white shadow-sm font-semibold"
                            : "bg-brand-white border border-brand-grey/20 text-brand-black hover:border-brand-blue hover:text-brand-blue"
                        }`}
                      >
                        <img
                          src={m.photo}
                          alt={m.name}
                          className="h-4 w-4 rounded-full object-cover"
                        />
                        {m.name.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column: Interactive card deck */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div className="relative h-[460px] w-full max-w-[360px] select-none">
                  {teamMembers.map((member, i) => {
                    const relIdx = (i - activeTeamIdx + teamMembers.length) % teamMembers.length;

                    if (relIdx > 2) return null;

                    const isTop = relIdx === 0;
                    const isSecond = relIdx === 1;
                    const isThird = relIdx === 2;

                    let transformClass = "translate-x-0 translate-y-0 rotate-0 scale-100 z-30 shadow-2xl";
                    let opacityClass = "opacity-100";

                    if (isSecond) {
                      transformClass = "translate-x-4 translate-y-3 rotate-3 scale-[0.95] z-20 shadow-xl pointer-events-none";
                      opacityClass = "opacity-90";
                    } else if (isThird) {
                      transformClass = "-translate-x-3 translate-y-6 -rotate-2 scale-[0.90] z-10 shadow-lg pointer-events-none";
                      opacityClass = "opacity-75";
                    }

                    return (
                      <div
                        key={member.name}
                        onClick={isTop ? () => setActiveTeamIdx((prev) => (prev + 1) % teamMembers.length) : undefined}
                        className={`absolute inset-0 overflow-hidden rounded-[28px] border-2 bg-brand-white transition-all duration-500 ease-out cursor-pointer group ${transformClass} ${opacityClass}`}
                        style={{ borderColor: isTop ? "var(--gold)" : "var(--grey-light)" }}
                        title={isTop ? "Click to reveal next profile" : undefined}
                      >
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                          loading="lazy"
                        />

                        <div
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(18,77,90,0.1) 0%, rgba(10,45,54,0.3) 50%, rgba(10,45,54,0.92) 100%)",
                          }}
                        />

                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <span
                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-brand-black shadow-md"
                            style={{ backgroundColor: "var(--gold)" }}
                          >
                            <Sparkles size={11} />
                            Odoo Certified
                          </span>
                          {isTop && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-brand-black/60 px-2.5 py-1 font-mono text-[10px] text-white/90 backdrop-blur-md">
                              Next 🃏
                            </span>
                          )}
                        </div>

                        <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                          <div className="rounded-2xl bg-brand-black/40 p-4 backdrop-blur-md border border-white/10">
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">
                              MSL-iTECH Consultant
                            </p>
                            <h3 className="mt-1 font-heading text-xl font-bold leading-snug text-white">
                              {member.name}
                            </h3>
                            <p className="mt-1 font-body text-xs text-white/85">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Deck navigation controls */}
                <div className="mt-8 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveTeamIdx((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)}
                    aria-label="Previous consultant profile"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/20 bg-brand-white text-brand-blue shadow-sm transition hover:bg-brand-blue hover:text-white"
                  >
                    <ArrowRight size={16} className="rotate-180" />
                  </button>

                  <div className="text-center font-mono text-xs text-brand-grey">
                    <span className="font-bold text-brand-blue">0{activeTeamIdx + 1}</span> / 0{teamMembers.length}
                    <p className="text-[10px] text-brand-grey/70">Click card to cycle</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveTeamIdx((prev) => (prev + 1) % teamMembers.length)}
                    aria-label="Next consultant profile"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/20 bg-brand-white text-brand-blue shadow-sm transition hover:bg-brand-blue hover:text-white"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Geographic Coverage across Morocco ── */}
      <section className="bg-brand-white py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="text-center md:text-left">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                Nationwide Presence
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                Odoo implementation services across Morocco
              </h2>
              <p className="mt-4 max-w-2xl font-body text-brand-grey">
                Headquartered in Marrakech, we deliver on-site workshops across the region and hybrid on-site/remote implementation programs across all major economic centers in the Kingdom.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <Link
                  key={city.name}
                  to={localizedPath(city.href, "en")}
                  className="group flex items-center justify-between rounded-2xl border bg-brand-bg/40 p-5 transition duration-300 hover:-translate-y-1 hover:bg-brand-white hover:shadow-md"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: city.local ? "var(--gold)" : "rgba(18, 77, 90, 0.1)",
                        color: "var(--blue)",
                      }}
                    >
                      <MapPin size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-heading text-base font-bold text-brand-black group-hover:text-brand-blue transition">
                        {city.name}
                      </p>
                      {city.local && (
                        <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                          Headquarters
                        </p>
                      )}
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="text-brand-blue/40 transition group-hover:translate-x-1 group-hover:text-brand-blue"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive FAQ Section ── */}
      <section className="bg-brand-bg py-20 border-t border-brand-grey/10">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                Answers &amp; Transparency
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                Frequently asked questions about Odoo implementation in Morocco
              </h2>
            </div>

            <dl className="mt-12 space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-2xl border bg-brand-white shadow-sm transition"
                    style={{ borderColor: "var(--grey-light)" }}
                  >
                    <button
                      type="button"
                      id={`integrateur-faq-question-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`integrateur-faq-answer-${idx}`}
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-6 text-left"
                    >
                      <dt className="font-heading text-base font-bold text-brand-black pr-4">
                        {faq.q}
                      </dt>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-bg transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-brand-blue text-white" : "text-brand-blue"
                        }`}
                      >
                        <ChevronDown size={18} />
                      </span>
                    </button>
                    <dd
                      id={`integrateur-faq-answer-${idx}`}
                      aria-labelledby={`integrateur-faq-question-${idx}`}
                      hidden={!isOpen}
                      className="px-6 pb-6 font-body text-sm leading-relaxed text-brand-grey border-t border-brand-grey/10 pt-4"
                    >
                      {faq.a}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Final Call to Action ── */}
      <section className="py-20 bg-brand-white">
        <div className="container">
          <div
            className="relative isolate mx-auto max-w-4xl overflow-hidden rounded-[32px] px-8 py-16 text-center shadow-2xl md:px-16"
            style={{ backgroundColor: "var(--blue)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: "#ffffff" }}
            />

            <h2 className="relative z-10 font-heading text-3xl font-bold text-white md:text-5xl leading-tight">
              Ready to launch your Odoo ERP project in Morocco?
            </h2>
            <p className="relative z-10 mx-auto mt-5 max-w-xl font-body text-base text-white/85 leading-relaxed">
              Describe your business workflows to our senior consultants — we will revert within 48 hours with a clear, fixed-scope proposal in MAD.
            </p>
            <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to={localizedPath("/contact", "en")}
                className="group inline-flex items-center gap-2 rounded-full px-8 py-4 font-body text-base font-bold text-brand-black shadow-lg transition hover:scale-[1.02]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Request a free quote
                <ArrowRight size={18} aria-hidden="true" className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to={localizedPath("/realisations", "en")}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-4 font-body text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Explore our case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
