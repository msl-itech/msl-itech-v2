import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Target,
  Rocket,
  Building2,
  MessageSquareText,
  Handshake,
  TrendingUp,
  FileText,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import { localizedPath } from "@/lib/i18n";
import { PARTNER_STATUS_EN } from "@/lib/brand";
import pillarErp from "@/assets/home/pillar-erp.webp";
import ctaBg from "@/assets/home/cta-bg.webp";

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

/* ---------------- Engagement levels ---------------- */
const engagementLevels = [
  {
    icon: Target,
    name: "Ad hoc support",
    tagline: "Responsive assistance",
    desc: "Fixes, technical questions and post-deployment assistance. You need an available expert — not an entire project.",
    includes: ["Dedicated expert", "Multichannel assistance", "Response within 24 hours"],
    color: "#E26B3F",
  },
  {
    icon: Rocket,
    name: "Focused deployment",
    tagline: "A structured start",
    desc: "2 to 3 Odoo modules to start on a solid footing. Ideal for an SME implementing its first ERP or moving away from Excel.",
    includes: ["Configuration", "Initial training", "Data import", "Post-launch support"],
    color: "#5C5E8A",
  },
  {
    icon: Layers,
    name: "Structured program",
    tagline: "Managed growth",
    highlight: true,
    desc: "A multi-module ERP with data migration, in-depth training and dedicated project management. A foundation for an SME with 15 to 80 employees.",
    includes: ["Project management", "Data migration", "Role-based training", "Process optimization", "Ongoing support"],
    color: "#E8867A",
  },
  {
    icon: Building2,
    name: "Complete transformation",
    tagline: "A 360° perspective",
    desc: "Multi-company operations, multiple currencies, custom development and third-party integrations. Long-term support for ambitious organizations.",
    includes: ["Custom development", "Advanced automation", "App customization", "Multi-entity architecture", "Strategic guidance"],
    color: "#22A892",
  },
];

/* ---------------- Differentiators ---------------- */
const differentiators = [
  {
    icon: Handshake,
    title: "A partner, not just a provider",
    desc: "We do not sell hours. We structure your project for success — with the right scope and at the right pace.",
  },
  {
    icon: TrendingUp,
    title: "Pricing tailored to Morocco",
    desc: "Our Odoo-certified technical team based in Morocco enables us to offer tailored pricing aligned with the economic realities of Moroccan SMEs.",
  },
  {
    icon: FileText,
    title: "Transparent, detailed quotes",
    desc: "Every proposal is broken down by module, phase and deliverable. You know exactly what you are paying for and why.",
  },
  {
    icon: MessageSquareText,
    title: "Free 30-minute scoping call",
    desc: "Before any quote, we discuss your context, assess the actual complexity and recommend the right level of engagement.",
  },
];

const faqs = [
  {
    q: "How does MSL-iTECH calculate the price of an Odoo project?",
    a: "Every project is unique. Pricing depends on the number of modules, the volume of data to migrate, the complexity of your processes and the level of customization required. After a free 30-minute scoping call, we provide a detailed quote broken down by phase and deliverable.",
  },
  {
    q: "Why do you not publish a fixed price list?",
    a: "Because a fixed price list never reflects the reality of a project. A CRM deployment for 5 salespeople is very different from a complete multi-company ERP. Publishing fixed prices would mean consistently underestimating or overestimating your project. Our tailored approach ensures fair pricing based on your actual complexity.",
  },
  {
    q: "How can I get an estimate for my project?",
    a: "The easiest way is to book a free 30-minute scoping call. We discuss your business, current processes and objectives, then provide a detailed quote tailored to your actual scope.",
  },
  {
    q: "Do you work with Moroccan SMEs of all sizes?",
    a: "Yes. We support very small businesses formalizing their operations, established SMEs and multi-company groups in Morocco. Our approach adapts to your size, industry (hotels, restaurants and catering, construction, healthcare, retail or services) and pace.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. Our quote details every item: configuration, migration, training and post-launch support. Odoo licenses (billed directly by Odoo SA) and hosting are listed separately. There are no surprises during the project.",
  },
  {
    q: "Can I get a quick estimate before the full scoping session?",
    a: "Yes. If you briefly describe your scope (required modules, number of users and data to migrate), we can provide an indicative price range within 48 hours. The free 30-minute scoping call then allows us to refine that estimate.",
  },
];

export default function OurApproachPage() {
  useProductSeo({
    title: "Odoo implementation approach: Tailored ERP | MSL-iTECH",
    description:
      "Our Odoo implementation approach aligns scope, migration and training with your business, with transparent pricing. Book your free 30-minute scoping call.",
    path: "/en/our-approach",
    faqs,
    ldId: "ld-faq-our-approach",
  });

  return (
    <>
      {/* HERO */}
      <section className="bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate rounded-[28px] md:rounded-[36px]">
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
              <img
                src={pillarErp}
                alt="MSL-iTECH consultants presenting the Odoo implementation methodology — scoping, configuration and SME support"
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
                    "linear-gradient(180deg, rgba(10,30,38,0.55) 0%, rgba(10,30,38,0.7) 55%, rgba(10,30,38,0.9) 100%)",
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
              <Sticker rotate={-8}>★ {PARTNER_STATUS_EN}</Sticker>
            </div>

            <div className="relative flex min-h-[460px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[560px] md:py-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  Our approach · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-[60px] lg:text-[72px]">
                Odoo implementation approach:{" "}
                <span className="italic font-light text-brand-gold">
                  a partner,
                </span>
                <br className="hidden md:block" /> not a timesheet. <Mark>Tailored to you.</Mark>
              </h1>

              <p className="mt-7 max-w-2xl font-body text-base text-white/80 md:text-lg">
                Our Odoo implementation approach adapts scoping, configuration,
                migration, training and support to your business needs.
                We tailor our engagement and pricing to your scope, complexity
                and objectives — not the other way around.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  <ShieldCheck size={16} className="text-brand-gold" /> v18 &amp; v19 certified consultants
                </span>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  <CheckCircle2 size={16} className="text-brand-gold" /> Detailed quote within 48 hours
                </span>
              </div>
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
                  Our approach
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Our philosophy
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                The right price,
                <br />
                <Mark>for the right project.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              Fixed price lists oversimplify reality. A CRM deployment for
              5 salespeople is very different from a complete multi-company ERP.
              That is why every MSL-iTECH proposal is tailored to your needs —
              broken down by module, phase and deliverable. You know exactly
              what you are paying for and why.
            </p>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT LEVELS */}
      <section className="bg-brand-white py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Engagement levels
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Four levels. <Mark>No rigid packages.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              From ad hoc assistance to a complete transformation of your
              organization. Each level adapts to your circumstances — we build
              the quote together after understanding your context.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {engagementLevels.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.name}
                  className={`group relative rounded-[28px] border p-8 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(13,13,13,0.2)] md:p-10 ${
                    p.highlight
                      ? "ring-2 ring-brand-blue"
                      : ""
                  }`}
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  {p.highlight && (
                    <div className="absolute -top-3 right-6 z-10">
                      <Sticker rotate={6}>★ Most popular</Sticker>
                    </div>
                  )}

                  {/* Colored accent bar */}
                  <div
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-[4px] origin-top scale-y-0 rounded-l-[28px] transition-transform duration-300 group-hover:scale-y-100"
                    style={{ backgroundColor: p.color }}
                  />

                  {/* Glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-20"
                    style={{ backgroundColor: p.color }}
                  />

                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition group-hover:scale-105"
                      style={{ backgroundColor: p.color, color: "white" }}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                        {p.tagline}
                      </p>
                      <h3 className="mt-1 font-heading text-xl font-bold text-brand-black md:text-2xl">
                        {p.name}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 font-body text-base leading-relaxed text-brand-grey">
                    {p.desc}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-body text-sm text-brand-black">
                        <CheckCircle2 size={16} className="shrink-0" style={{ color: p.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-brand-blue" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                Why MSL-iTECH
              </p>
              <span className="h-px w-8 bg-brand-blue" />
            </div>
            <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-5xl">
              What sets us <Mark>apart.</Mark>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <article
                  key={d.title}
                  className="group relative overflow-hidden rounded-[24px] border bg-brand-white p-8 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.2)]"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div
                    aria-hidden
                    className="absolute right-0 top-0 h-32 w-32 -translate-y-10 translate-x-10 rounded-full opacity-0 transition group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(255,221,87,0.4), transparent)",
                    }}
                  />
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--blue)", color: "var(--gold)" }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-brand-black">
                    {d.title}
                  </h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-brand-grey">
                    {d.desc}
                  </p>
                  <div
                    aria-hidden
                    className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 transition group-hover:scale-x-100"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR WORK AND WHAT IS INCLUDED */}
      <section className="bg-brand-white py-24 md:py-28">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <article
              className="relative overflow-hidden rounded-[28px] border bg-brand-bg p-10 shadow-sm"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-25 blur-3xl"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
                Explore our work
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-brand-black md:text-3xl">
                Our projects in Morocco
              </h3>
              <p className="mt-4 font-body text-base text-brand-grey">
                Before requesting a quote, explore projects we have delivered
                for Moroccan SMEs: hotels, restaurants and catering,
                construction, healthcare, retail, services and multi-company groups.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to={localizedPath("/realisations", "en")}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold text-brand-black transition hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  View our case studies <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            <article
              className="relative overflow-hidden rounded-[28px] border bg-brand-bg p-10 shadow-sm"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
                What is included
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-brand-black md:text-3xl">
                In every engagement.
              </h3>
              <ul className="mt-4 space-y-3 font-body text-base text-brand-grey">
                {[
                  "Needs analysis and scope definition",
                  "Odoo configuration for your business",
                  "Migration of existing data",
                  "Team training",
                  "Post-deployment support",
                  "Quote broken down by module and deliverable",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  FAQ
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Frequently asked <Mark>questions.</Mark>
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-[20px] border bg-brand-white p-6 transition hover:shadow-md"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-body font-semibold text-brand-black">
                  <span>{f.q}</span>
                  <span className="ml-2 text-2xl leading-none text-brand-blue transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 font-body text-base text-brand-grey">{f.a}</p>
              </details>
            ))}
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
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
            <Sparkles size={12} className="text-brand-gold" />
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
              Next step
            </p>
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Tell us about your project,{" "}
            <span className="italic font-light text-brand-gold">
              and we will build your quote together.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-base text-white/80 md:text-lg">
            Free 30-minute scoping call · Detailed quote within 48 hours · No obligation.
          </p>
          <Link
            to={localizedPath("/prendre-rendez-vous", "en")}
            className="mt-9 cta-pulse-gold hover-shine inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black transition hover:scale-[1.02]"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Book my free scoping call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
