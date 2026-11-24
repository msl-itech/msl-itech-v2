import type { ReactNode } from "react";
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
import { localizedPath } from "@/lib/i18n";
import pillarWeb from "@/assets/home/pillar-web.webp";
import ctaBg from "@/assets/home/cta-bg.webp";

type CaseStudySummary = {
  slug: string;
  name: string;
  sector: string;
  type?: "odoo" | "web";
  country: "Morocco" | "Belgium" | "Cameroon" | "International";
  result: string;
};

const caseStudies: CaseStudySummary[] = [
  {
    slug: "nasli-holding",
    name: "NASLI HOLDING",
    sector: "Holding & Investment",
    country: "Morocco",
    result:
      "A single HR database for the group and digital HR workflows in Odoo, including personnel records, leave and absences.",
  },
  {
    slug: "downtown-hotel-corporation",
    name: "DOWNTOWN HOTEL CORPORATION (DHC)",
    sector: "Hospitality & Real Estate",
    country: "Morocco",
    result:
      "Centralized rental management with automatically calculated payment schedules and rent adjustments, recurring invoicing and integrated accounting.",
  },
  {
    slug: "ait-oukhali-travaux",
    name: "AIT OUKHALI TRAVAUX",
    sector: "Construction & Public Contracts",
    country: "Morocco",
    result:
      "Tender → construction site → invoicing in a single system, eliminating duplicate data entry between departments.",
  },
  {
    slug: "ais-hector-denis",
    name: "AIS HECTOR DENIS",
    sector: "Social Housing Agency",
    type: "web",
    country: "Belgium",
    result:
      "A WordPress institutional website delivered, with a publicly accessible reference on our Odoo partner profile.",
  },
  {
    slug: "edge-sport-maroc",
    name: "EDGE SPORT MAROC",
    sector: "Wholesale & Retail",
    country: "Morocco",
    result:
      "Real-time stock availability across warehouses and an integrated sales workflow from quotation to invoice.",
  },
  {
    slug: "hamimi-export",
    name: "Hamimi Export",
    sector: "Wholesale & Retail",
    country: "Morocco",
    result:
      "Export orders and outstanding customer balances tracked in a single system, from purchase order to invoice.",
  },
  {
    slug: "icc-douala",
    name: "ICC DOUALA",
    sector: "Community Organization",
    country: "Cameroon",
    result:
      "A centralized member database, online event registration and consolidated accounting for donations.",
  },
  {
    slug: "jcd-renov",
    name: "JCD RENOV",
    sector: "Construction & Renovation",
    country: "Morocco",
    result:
      "Construction sites managed as Odoo projects with linked budgets, purchases and hours, and budget-to-actual comparisons during construction.",
  },
  {
    slug: "les-titis-boutchoux",
    name: "LES TITIS BOUT'CHOUX",
    sector: "Early Childhood Care",
    country: "Belgium",
    result:
      "Enrollment inquiries tracked from the website, with family invoicing and staff schedules managed in Odoo.",
  },
  {
    slug: "louve-soins",
    name: "LOUVE SOINS SRL",
    sector: "Healthcare & Personal Care",
    country: "Belgium",
    result:
      "Care visits scheduled and tracked, consumable stocks managed with replenishment thresholds, and invoicing linked to services delivered.",
  },
  {
    slug: "mc-avocat",
    name: "MC Avocat",
    sector: "Legal Services",
    country: "Belgium",
    result:
      "Client matters organized as projects with timesheets, and invoices generated directly from recorded hours.",
  },
  {
    slug: "phazz4",
    name: "Phazz4",
    sector: "Wholesale & Retail",
    country: "Morocco",
    result:
      "Automated replenishment through stock rules, supported cycle counts and sales channels connected to a single inventory.",
  },
  {
    slug: "maroc-destination-sante",
    name: "SARL Maroc Destination Santé",
    sector: "Medical Transport & Logistics",
    country: "Morocco",
    result:
      "Vehicle-by-vehicle fleet tracking, scheduled preventive maintenance and trips invoiced from recorded services.",
  },
  {
    slug: "cuco-materiaux-construction",
    name: "STE CUCO DES MATERIAUX DE CONSTRUCTION",
    sector: "Construction Materials",
    country: "Morocco",
    result:
      "Stock thresholds for fast-moving items, purchasing triggered by demand and automatic matching of deliveries to invoices.",
  },
  {
    slug: "sd-maintenance",
    name: "Sd Maintenance",
    sector: "Energy & Water Distribution",
    country: "Morocco",
    result:
      "Centralized service requests with equipment history, scheduled preventive maintenance and spare parts consumption tracked in inventory.",
  },
  {
    slug: "studely-finance-cameroun",
    name: "Studely Finance Cameroun",
    sector: "Finance & Consulting",
    country: "Cameroon",
    result:
      "Client files organized in the CRM, supporting documents attached and reports generated from Odoo.",
  },
  {
    slug: "tpmr-maroc",
    name: "TPMR Maroc",
    sector: "Passenger Transport",
    country: "Morocco",
    result:
      "Trips recorded with the required supporting documentation, and partner invoices generated from completed trips.",
  },
  {
    slug: "wam-lek-faya",
    name: "Wam Lek Faya, LLC — The Perfect Kick",
    sector: "Spices & Hot Sauces",
    country: "International",
    result:
      "Production batches tracked from raw materials to sale, and an online store synchronized with a single inventory.",
  },
  {
    slug: "les-cles-du-sahara",
    name: "Les Clés du Sahara",
    sector: "Agriculture (Hydroponics)",
    country: "Morocco",
    result:
      "Growing cycles managed as manufacturing orders, batch traceability available for inspections and integrated quality checkpoints.",
  },
];

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

function Sticker({
  children,
  rotate = -6,
}: {
  children: ReactNode;
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
const webCasesCount = 8;

const navCards = [
  {
    to: "/realisations/odoo",
    icon: ServerCog,
    label: "Odoo ERP Implementations",
    count: odooCasesCount,
    countLabel: "case studies",
    tags: ["Construction", "Hospitality", "Retail", "Transport", "Healthcare"],
    desc: "From scoping to deployment — complete ERP systems for ambitious SMEs in Morocco, Belgium and Cameroon.",
    cta: "Explore Odoo case studies",
    accentBg: "rgba(18,77,90,0.06)",
  },
  {
    to: "/realisations/sites-web",
    icon: Globe,
    label: "Websites & Platforms",
    count: webCasesCount,
    countLabel: "projects delivered",
    tags: ["React", "WordPress", "SEO", "Performance", "Mobile-first"],
    desc: "High-performance websites and custom platforms for businesses in Belgium and Morocco.",
    cta: "Explore website projects",
    accentBg: "rgba(255,221,87,0.12)",
  },
];

export default function CaseStudiesPage() {
  useProductSeo({
    title: "Odoo case studies Morocco: ERP & Web Work | MSL-iTECH",
    description:
      "Explore Odoo ERP and website projects in Morocco, Belgium and Cameroon to see how connected workflows reduce manual work. Contact us to discuss your project.",
    path: "/en/case-studies",
    breadcrumbs: [
      { name: "Home", url: "https://msl-itech.com/en" },
      {
        name: "Case Studies",
        url: "https://msl-itech.com/en/case-studies",
      },
    ],
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate rounded-[28px] md:rounded-[36px]">
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
              <img
                src={pillarWeb}
                alt="Illustration of an Odoo ERP management dashboard alongside a React website mockup — MSL-iTECH ERP and web projects"
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
              <Sticker rotate={-8}>★ Real client projects</Sticker>
            </div>

            <div className="relative flex min-h-[380px] flex-col items-center justify-center px-6 py-20 text-center md:min-h-[460px] md:py-24">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  Case Studies · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-8 max-w-3xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-[60px] lg:text-[68px]">
                Odoo case studies Morocco:{" "}
                <span className="italic font-light text-white">
                  <Mark>our work in detail.</Mark>
                </span>
              </h1>

              <p className="mt-6 max-w-xl font-body text-base text-white/80 md:text-lg">
                Our Odoo case studies show how businesses in Morocco connect HR,
                inventory, projects and invoicing in one system. Explore our ERP
                implementations and website projects, with references available
                on our official Odoo partner profile.
              </p>
            </div>

            {/* Breadcrumb pill */}
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
                  Case Studies
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation cards */}
      <section className="bg-brand-white py-24 md:py-28">
        <div className="container">
          <div className="mb-14 text-center">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Choose your area of interest
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base text-brand-grey">
              Two complementary areas of expertise — explore our projects by
              specialty.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {navCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.to}
                  to={localizedPath(card.to, "en")}
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
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border bg-brand-white px-3 py-1 font-body text-xs text-brand-black"
                        style={{ borderColor: "var(--grey-light)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 font-body text-base font-bold text-brand-blue">
                    {card.cta}
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1.5"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client case studies list */}
      <section className="bg-background py-20 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Which client projects has MSL-iTECH delivered?
            </h2>
            <p className="mt-4 font-body text-base text-brand-grey">
              A summary of each project. Detailed case studies are currently available in French only.
            </p>
          </div>
          <ul className="grid gap-5 md:grid-cols-2">
            {caseStudies.map((c) => (
              <li key={c.slug} className="flex flex-col rounded-2xl border border-brand-grey-light bg-card p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-brand-grey">
                  {c.sector} · {c.country}
                </p>
                <h3 className="mt-2 font-heading text-lg font-bold text-brand-black">{c.name}</h3>
                <p className="mt-2 flex-1 font-body text-sm text-brand-grey">{c.result}</p>
                <p className="mt-4 font-body text-sm">
                  <Link to={`/realisations/${c.slug}`} hrefLang="fr" className="font-semibold text-brand-blue underline-offset-4 hover:underline">
                    Read the case study
                  </Link>{" "}
                  <span className="text-brand-grey">(in French)</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Odoo partner */}
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
              <Sticker rotate={-6}>★ Official partner</Sticker>
            </div>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">
                  See for yourself
                </p>
                <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
                  Our references are available on{" "}
                  <span className="italic font-light">odoo.com/partners</span>
                </h2>
                <p className="mt-5 max-w-xl font-body text-base text-white/80">
                  Our official Odoo partner status, certifications and client
                  references are public. No empty promises — just concrete
                  evidence.
                </p>
              </div>
              <div className="flex justify-start lg:col-span-4 lg:justify-end">
                <a
                  href="https://www.odoo.com/partners/country/morocco-132?search=msl-itech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  Visit odoo.com/partners
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

      {/* Call to action */}
      <section className="relative isolate overflow-hidden bg-brand-black py-24 md:py-28">
        <HeroCursorGlow
          color="rgba(255, 221, 87, 1)"
          size={620}
          intensity={0.55}
        />
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
              Your turn
            </p>
          </div>
          <h2 className="mx-auto mt-7 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Your project is <Mark>next.</Mark>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-base text-white/80 md:text-lg">
            Response within 24 hours · Dedicated consultant · No obligation
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to={localizedPath("/contact", "en")}
              className="group cta-pulse-gold hover-shine inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black transition hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Book my free demo
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
            <Link
              to={localizedPath("/odoo-erp", "en")}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Discover Odoo ERP
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
