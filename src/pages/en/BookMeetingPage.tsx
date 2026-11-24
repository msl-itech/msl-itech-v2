import { Link, useSearchParams } from "react-router-dom";
import {
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  Users,
  Building2,
  TrendingUp,
  ArrowRight,
  MapPin,
  ShieldCheck,
  Lightbulb,
  Settings,
  Phone,
  BarChart2,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { localizedPath } from "@/lib/i18n";
import { ui } from "@/lib/ui-strings";
import { PARTNER_STATUS_EN } from "@/lib/brand";

export default function BookMeetingPage() {
  const t = ui("en");

  useProductSeo({
    title: "Book an Odoo Consultation — Free Scoping | MSL-iTECH",
    description:
      "Book an Odoo consultation with MSL-iTECH. Get a 30-min workflow audit, custom roadmap, and clear ROI estimates for your business. Choose your slot now.",
    path: "/en/book-a-meeting",
    breadcrumbs: [
      { name: "Home", url: "/en" },
      { name: "Book a Meeting", url: "/en/book-a-meeting" },
    ],
  });

  const [searchParams] = useSearchParams();
  const scoreParam = searchParams.get("score");
  const score = scoreParam ? parseInt(scoreParam, 10) : null;
  const validScore = score !== null && !isNaN(score) && score >= 0 && score <= 100;

  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate overflow-hidden rounded-[28px] md:rounded-[36px] bg-brand-blue px-6 py-16 md:px-12 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full opacity-15 blur-3xl"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  {t.appointment.eyebrow}
                </p>
              </div>

              <h1 className="mt-6 font-heading text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-[56px]">
                Book an Odoo consultation with our{" "}
                <span className="italic font-light text-brand-gold">
                  ERP & digital experts
                </span>
              </h1>

              {/* Direct 2-sentence answer right under H1 */}
              <p className="mx-auto mt-6 max-w-2xl font-body text-base font-medium leading-relaxed text-white md:text-lg">
                Scheduling a scoping meeting gives you immediate access to an enterprise systems consultant to assess your operational bottlenecks and confirm your software requirements. During this 30-minute session, we explore your workflows, recommend targeted Odoo configurations, and outline an actionable implementation roadmap with zero sales pressure.
              </p>

              <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-white/80 md:text-base">
                Whether you plan to implement Odoo ERP, overhaul your e-commerce operations, or align your business reporting with DGI (the Moroccan tax authority) mandates, this exchange provides clarity on feasibility, timeline, and projected ROI.
              </p>

              <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-white/70 md:text-base">
                Our consultants across Marrakech, Brussels, and Montreal work daily with growing SMEs and multi-site corporations to replace fragile spreadsheets and outdated software with dependable, scalable systems.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  <Clock size={12} className="text-brand-gold" /> 30 minutes
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  <ShieldCheck size={12} className="text-brand-gold" /> No commitment
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  <Calendar size={12} className="text-brand-gold" /> Fast scheduling
                </span>
              </div>
            </div>

            {/* Breadcrumb pill */}
            <div className="absolute -bottom-5 right-6 z-10 md:right-10">
              <div
                className="flex items-center gap-3 rounded-full border bg-brand-white px-5 py-2.5 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.25)]"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <Link
                  to={localizedPath("/", "en")}
                  className="font-body text-sm text-brand-grey transition hover:text-brand-blue"
                >
                  {t.appointment.breadcrumbHome}
                </Link>
                <span className="text-brand-grey/40">/</span>
                <span className="font-body text-sm font-semibold text-brand-blue">
                  {t.appointment.breadcrumbSelf}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IFRAME BOOKING */}
      <section className="py-10 md:py-14" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          {/* Score banner */}
          {validScore && (
            <div className="mb-6 flex flex-col gap-4 rounded-[20px] border border-brand-gold/50 bg-[color:var(--gold)]/10 p-6 sm:flex-row sm:items-center sm:gap-6">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-heading text-xl font-bold shadow-inner"
                style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
              >
                {score}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <BarChart2 size={14} className="text-brand-blue" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                    {t.appointment.scoreLabel}
                  </p>
                </div>
                <p className="mt-1 font-heading text-lg font-bold text-brand-black">
                  Score {score} — our consultant will review your assessment prior to the call
                </p>
                <p className="mt-0.5 font-body text-sm text-brand-grey">
                  {t.appointment.scoreNote}
                </p>
              </div>
            </div>
          )}

          <div className="overflow-hidden rounded-[24px] border border-brand-grey-light bg-white shadow-[0_24px_60px_-20px_rgba(18,77,90,0.12)]">
            <iframe
              src="https://odoo.msl-itech.com/appointment/4?iframe=1"
              title="Book an Odoo consultation with MSL-iTECH"
              className="odoo-iframe block min-h-[800px] w-full"
              style={{
                background: "transparent",
                border: 0,
                display: "block",
              }}
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* VALUE — WHAT TO EXPECT */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              <span className="inline-block h-px w-8 bg-brand-blue" />
              {t.appointment.processEyebrow}
              <span className="inline-block h-px w-8 bg-brand-blue" />
            </p>
            <h2 className="font-heading text-3xl font-bold leading-[1.1] text-brand-black md:text-[2.5rem]">
              {t.appointment.processTitle}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base text-brand-grey">
              Every appointment is prepared in advance. We analyze your sector and current toolchain so that the 30 minutes are fully productive and tailored to your realities.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Lightbulb size={22} />,
                title: "Your Business Goals",
                text: "We begin by reviewing your daily operational friction points and medium-term growth objectives to frame our exchange.",
              },
              {
                icon: <Settings size={22} />,
                title: "Targeted Solutions",
                text: "We identify concrete process optimizations and the most effective standard Odoo modules or digital assets for your specific business case.",
              },
              {
                icon: <CheckCircle2 size={22} />,
                title: "Transparent Roadmap",
                text: "You walk away with an honest cost projection, realistic implementation milestones, and key risk mitigation points.",
              },
              {
                icon: <Users size={22} />,
                title: "Long-Term Partnership",
                text: "From workflow scoping and team training to go-live stabilization and continuous support, we remain invested in your success.",
              },
            ].map((item, i) => (
              <article
                key={i}
                className="group rounded-[24px] border border-brand-grey-light bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.18)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue text-brand-gold shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-grey">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS + AUDIENCE + TRUST */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Topics */}
            <div className="rounded-[28px] border border-brand-grey-light bg-white p-8 md:p-10">
              <h3 className="font-heading text-2xl font-bold text-brand-black">
                {t.appointment.topicsTitle}
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Odoo ERP rollout (CRM, accounting, inventory, manufacturing, payroll)",
                  "Moroccan fiscal compliance, VAT, and electronic invoicing with the DGI (the Moroccan tax authority)",
                  "Custom web development and high-converting e-commerce integration",
                  "System integration & real-time sync (EDI, marketplace APIs, banking feeds)",
                  "Multi-company, multi-site, and multi-currency consolidation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight
                      size={16}
                      className="mt-1 shrink-0 text-brand-blue"
                    />
                    <span className="font-body text-sm text-brand-grey">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audience */}
            <div className="rounded-[28px] border border-brand-grey-light bg-white p-8 md:p-10">
              <h3 className="font-heading text-2xl font-bold text-brand-black">
                {t.appointment.fitTitle}
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "A growing Moroccan SME seeking to professionalize governance and comply with local DGI standards",
                  "A multi-site business looking to centralize inventory, procurement, and consolidated financial statements",
                  "A business leader eager to replace Sage, scattered Excel workbooks, or fragmented software tools",
                  "A fast-scaling enterprise that needs to automate repetitive tasks and secure reliable operational data",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-brand-gold"
                    />
                    <span className="font-body text-sm text-brand-grey">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <ShieldCheck size={20} />,
                label: PARTNER_STATUS_EN,
                desc: "Over 10 years of open-source ERP implementation and customization experience.",
              },
              {
                icon: <Building2 size={20} />,
                label: "Mid-Market & SME Focus",
                desc: "Structured deployments tailored for teams from 10 to 80+ active users.",
              },
              {
                icon: <MapPin size={20} />,
                label: "Tri-Continental Reach",
                desc: "Consulting offices located in Marrakech, Brussels, and Montreal.",
              },
              {
                icon: <TrendingUp size={20} />,
                label: "Proven Methodology",
                desc: "Rigorous scoping, standard-first setup, hands-on user training, and SLA support.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-[20px] border border-brand-grey-light bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue">
                  {item.icon}
                </div>
                <p className="mt-4 font-heading text-sm font-bold text-brand-black">
                  {item.label}
                </p>
                <p className="mt-1 font-body text-xs leading-relaxed text-brand-grey">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SHORTCUT */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--blue)" }}>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-white md:text-4xl">
              {t.appointment.writeTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base text-white/75">
              If none of the available slots fit your calendar or if you have an urgent question, our advisory team responds within 24 hours by email or phone.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:info@msl-itech.com"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-body text-sm font-bold text-brand-blue shadow-[0_18px_50px_-15px_rgba(255,221,87,0.45)] transition hover:scale-[1.02]"
              >
                <Sparkles size={14} />
                info@msl-itech.com
              </a>
              <a
                href="tel:+212689306278"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-body text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <Phone size={14} />
                +212 6 89 30 62 78
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
