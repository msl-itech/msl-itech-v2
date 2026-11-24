import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  ExternalLink,
  Code2,
  Layers,
  Settings2,
  Briefcase,
  Brain,
  Star,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { localizedPath } from "@/lib/i18n";
import { PARTNER_STATUS_EN } from "@/lib/brand";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import pillarErp from "@/assets/home/pillar-erp.webp";
import ctaBg from "@/assets/home/cta-bg.webp";
import photoMika from "@/assets/team/mika.webp";
import photoHoussineAsset from "@/assets/team/houssine-new.png.asset.json";
const photoHoussine = photoHoussineAsset.url;
import photoArnaud from "@/assets/team/arnaud.jpg";
import photoElohim from "@/assets/team/elohim.webp";
import photoManal from "@/assets/team/manal.webp";

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

const team = [
  {
    name: "El Houssine BOUHMAIDA",
    role: "Business Analyst & Project Manager",
    icon: Settings2,
    photo: photoHoussine,
    desc: "End-to-end Odoo project lead. Expert in requirements analysis, functional scoping, and change management. Ensures deadlines, budgets, and implementation success are met.",
  },
  {
    name: "Elohim TAGNE",
    role: "Full Stack Developer",
    icon: Layers,
    photo: photoElohim,
    desc: "Versatile and meticulous, Elohim handles custom developments and complex integrations. Technical skillset covering Odoo, React, and third-party APIs.",
  },
  {
    name: "Manal AIT AYAD",
    role: "Lead Python Developer",
    icon: Brain,
    photo: photoManal,
    desc: "Leads custom Odoo solution development. Expert in Python and ORM architecture, supervising code quality and transforming business workflows into robust, high-performance modules.",
  },
  {
    name: "Mika MUSUNGAYI",
    role: "Strategy & Management",
    icon: Briefcase,
    photo: photoMika,
    desc: "Co-founder and chartered accountant at MSL-iTECH. Directs commercial and financial strategy, ensuring operational alignment between Belgian and Moroccan entities.",
  },
  {
    name: "Arnaud AHOUO",
    role: "Solutions Architecture",
    icon: Code2,
    photo: photoArnaud,
    desc: "Co-founder and Chief Technology Officer at MSL-iTECH. Designs Odoo solution architectures and translates business processes into resilient, scalable implementations.",
  },
];

const stats = [
  { value: "2024", label: "Year founded", icon: Calendar },
  { value: "5", label: "Dedicated specialists", icon: Users },
  { value: "3", label: "Countries present", icon: MapPin },
  { value: "100%", label: "Certified Odoo partner", icon: ShieldCheck },
];

const values = [
  {
    title: "Verifiable proof",
    desc: "Our partner status, certifications, and public client references are transparently listed on odoo.com/partners. No empty promises.",
  },
  {
    title: "Proximity & responsiveness",
    desc: "Technical team based in Morocco, assisting you in English and French within your business hours — video calls, demos, and remote support wherever you operate.",
  },
  {
    title: "SME-friendly pricing",
    desc: "International delivery standards at competitive rates. Growing SMEs deserve enterprise-grade tools without paying enterprise overhead.",
  },
  {
    title: "Long-term partnership",
    desc: "From initial scoping to post-deployment support and evolution, we accompany your long-term business growth — not just a one-off rollout.",
  },
];

export default function AboutPageEn() {
  useProductSeo({
    title: "MSL-iTECH Odoo partner: Team & ERP Services | MSL-iTECH",
    description:
      "Discover MSL-iTECH, certified Odoo partner in Morocco. Certified consultants driving ERP success for growing SMEs. Book your free discovery demo today.",
    path: "/en/about",
    breadcrumbs: [
      { name: "Home", url: "/en" },
      { name: "About Us", url: "/en/about" },
    ],
  });

  return (
    <>
      {/* HERO — image overlay */}
      <section className="bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate rounded-[28px] md:rounded-[36px]">
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
              <img
                src={pillarErp}
                alt="MSL-iTECH certified Odoo partner consultant team collaborating around an ERP dashboard"
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
                    "linear-gradient(180deg, rgba(10,30,38,0.55) 0%, rgba(10,30,38,0.7) 55%, rgba(10,30,38,0.88) 100%)",
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
              <Sticker rotate={-8}>★ Since 2024</Sticker>
            </div>

            <div className="relative flex min-h-[420px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[520px] md:py-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  About Us · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-[64px] lg:text-[76px]">
                Your <Mark>MSL-iTECH Odoo partner</Mark> structuring your{" "}
                <span className="italic font-light text-brand-gold">growth.</span>
              </h1>

              <p className="mt-7 max-w-2xl font-body text-base text-white/80 md:text-lg">
                MSL-iTECH is an official {PARTNER_STATUS_EN} providing certified ERP implementation, custom development, and long-term support for growing SMEs. Based in Morocco with international reach, our dedicated team delivers enterprise-grade solutions at transparent, competitive rates.
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
                  About Us
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-brand-bg pt-20">
        <div className="container">
          <div
            className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border bg-brand-white md:grid-cols-4"
            style={{ borderColor: "var(--grey-light)" }}
          >
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="bg-brand-white p-7 text-center"
                  style={{ boxShadow: "inset 0 0 0 1px var(--grey-light)" }}
                >
                  <Icon size={20} className="mx-auto text-brand-blue" />
                  <p className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Our Story
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Certified <Mark>expertise,</Mark>
                <br />
                a dedicated team in Morocco.
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              MSL-iTECH was established with a singular mission: to provide ambitious SMEs with the technical excellence of an official {PARTNER_STATUS_EN} based in Morocco. Our consultants collaborate seamlessly through structured remote delivery (scoping, live demos, and sprint support) complemented by on-site workshops and end-user training.
            </p>
          </div>

          {/* Values grid */}
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {values.map((v, i) => (
              <article
                key={v.title}
                className="group relative overflow-hidden rounded-[24px] border bg-brand-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <div
                  className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition group-hover:opacity-60"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold text-brand-black md:text-2xl">
                  {v.title}
                </h3>
                <p className="mt-3 font-body text-sm text-brand-grey md:text-base">
                  {v.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-brand-white py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Our Team
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                The people <Mark>behind it.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              5 dedicated specialists committed to your digital transformation. Strategy, software engineering, project steering, and AI integrations — working collaboratively for your success.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m, idx) => {
              const Icon = m.icon;
              return (
                <article
                  key={m.name}
                  className="group relative rounded-[24px] border bg-brand-bg p-7 transition hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="absolute -top-4 right-5 z-20">
                    <Sticker rotate={idx % 2 === 0 ? -6 : 6}>
                      0{idx + 1}
                    </Sticker>
                  </div>
                  <div
                    className="relative aspect-square w-full overflow-hidden rounded-[18px]"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--blue) 0%, #1a5f6e 100%)",
                    }}
                  >
                    <img
                      src={m.photo}
                      alt={`${m.name} — ${m.role} at MSL-iTECH`}
                      className="absolute inset-0 h-full w-full object-cover object-top grayscale transition duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={600}
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(10,30,38,0) 0%, rgba(10,30,38,0.55) 100%)",
                      }}
                    />
                    <div
                      className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-xl backdrop-blur-sm"
                      style={{
                        backgroundColor: "rgba(255,221,87,0.92)",
                        color: "var(--blue)",
                      }}
                    >
                      <Icon size={16} />
                    </div>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-brand-black">
                    {m.name}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                    {m.role}
                  </p>
                  <p className="mt-4 font-body text-sm text-brand-grey">
                    {m.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ODOO PARTNER */}
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
              <Sticker rotate={-6}>★ Official Partner</Sticker>
            </div>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">
                  Our Certifications
                </p>
                <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
                  Verify our credentials on{" "}
                  <span className="italic font-light">odoo.com/partners</span>
                </h2>
                <p className="mt-5 max-w-xl font-body text-base text-white/80">
                  MSL-iTECH is officially listed in the Odoo partner directory. Partner standing, public references, and active contributions across the ecosystem — everything is fully verified and accessible in one click.
                </p>
              </div>
              <div className="flex justify-start lg:col-span-4 lg:justify-end">
                <a
                  href="https://www.odoo.com/partners/msl-itech-15851608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  View our partner profile
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
            <Star size={12} className="text-brand-gold" />
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
              Get in touch
            </p>
          </div>
          <h2 className="mx-auto mt-7 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Let's discuss your <Mark>project.</Mark>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-base text-white/80 md:text-lg">
            30 minutes with a dedicated ERP consultant · Free and no obligation
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to={localizedPath("/contact", "en")}
              className="group cta-pulse-gold hover-shine inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black transition hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Book my free demo
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              to={localizedPath("/realisations", "en")}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View case studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
