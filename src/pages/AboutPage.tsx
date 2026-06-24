import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  ExternalLink,
  Code2,
  Layers,
  Megaphone,
  Settings2,
  Briefcase,
  ClipboardList,
  Brain,
  Star,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import pillarErp from "@/assets/home/pillar-erp.webp";
import ctaBg from "@/assets/home/cta-bg.webp";
import photoMika from "@/assets/team/mika.webp";
import photoHoussineAsset from "@/assets/team/houssine-new.png.asset.json";
const photoHoussine = photoHoussineAsset.url;
import photoRomeo from "@/assets/team/romeo.png";
import photoArnaud from "@/assets/team/arnaud.jpg";
import photoElohim from "@/assets/team/elohim.png";
import photoManal from "@/assets/team/manal.jpg";

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
    role: "Consultant Odoo Senior",
    icon: Settings2,
    photo: photoHoussine,
    desc: "Référent technique Odoo de l'équipe. Expert en paramétrage avancé, migrations de données et formations utilisateurs. Garant de la qualité de chaque implémentation.",
  },
  {
    name: "Elohim TAGNE",
    role: "Développeur Full Stack",
    icon: Layers,
    photo: photoElohim,
    desc: "Polyvalent et rigoureux, Elohim intervient sur les développements spécifiques et les intégrations complexes. Profil technique couvrant Odoo, React et les API tierces.",
  },
  {
    name: "Manal AIT AYAD",
    role: "Machine Learning & Data",
    icon: Brain,
    photo: photoManal,
    desc: "Experte en intelligence artificielle appliquée. Développe les capacités analytiques et prédictives des implémentations Odoo pour les besoins avancés en reporting et prédiction.",
  },
  {
    name: "Mika MUSUNGAYI",
    role: "Stratège & Direction",
    icon: Briefcase,
    photo: photoMika,
    desc: "Co-fondateur et expert-comptable de MSL-iTECH. Pilote la stratégie commerciale et financière du groupe et assure la cohérence entre les entités belges et marocaines.",
  },
  {
    name: "Arnaud AHOUO",
    role: "Architecture de solutions",
    icon: Code2,
    photo: photoArnaud,
    desc: "Co-fondateur et directeur des technologies de MSL-iTECH. Conçoit l'architecture des solutions Odoo et traduit les processus métier en implémentations solides et durables.",
  },
  {
    name: "Romeo KAHOU",
    role: "Chef de Projet",
    icon: ClipboardList,
    photo: photoRomeo,
    desc: "Chef d'orchestre des projets clients. Coordonne les équipes, garantit le respect des délais et reste l'interlocuteur privilégié des clients tout au long de l'implémentation.",
  },
];

const stats = [
  { value: "2024", label: "Année de fondation", icon: Calendar },
  { value: "6", label: "Spécialistes dédiés", icon: Users },
  { value: "3", label: "Pays présents", icon: MapPin },
  { value: "100%", label: "Partenaire Odoo certifié", icon: ShieldCheck },
];

const values = [
  {
    title: "Preuves vérifiables",
    desc: "Notre statut, nos certifications et nos clients sont publics sur odoo.com/partners. Aucune promesse en l'air.",
  },
  {
    title: "Proximité & disponibilité",
    desc: "Équipe technique basée au Maroc, à votre service en français et en anglais dans votre fuseau horaire — visio, démo et support à distance, où que vous soyez.",
  },
  {
    title: "Tarifs PME",
    desc: "Qualité internationale, tarifs compétitifs. Les PME ambitieuses méritent les outils des grandes entreprises sans en payer le prix.",
  },
  {
    title: "Engagement long terme",
    desc: "Du cadrage au support post-déploiement, nous accompagnons votre croissance — pas juste un projet ponctuel.",
  },
];

export default function AboutPage() {
  useProductSeo({
    title: "À Propos de MSL-iTECH — Équipe & Expertise Odoo au Maroc",
    description:
      "Découvrez MSL-iTECH, Odoo Ready Partner au Maroc — consultants certifiés v18 & v19 depuis 2020. Équipe technique basée à Marrakech au service des PME marocaines. Références publiques vérifiables sur odoo.com/partners.",
    path: "/a-propos",
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
                alt="MSL-iTECH — équipe & expertise Odoo"
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
              <Sticker rotate={-8}>★ Depuis 2020</Sticker>
            </div>

            <div className="relative flex min-h-[420px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[520px] md:py-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  À propos · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-[64px] lg:text-[76px]">
                L'intégrateur Odoo qui{" "}
                <span className="italic font-light text-brand-gold">
                  structure
                </span>{" "}
                votre <Mark>croissance.</Mark>
              </h1>

              <p className="mt-7 max-w-2xl font-body text-base text-white/80 md:text-lg">
                Une équipe Odoo Ready Partner certifiée au Maroc, qui accompagne
                les PME marocaines — avec la conviction qu'elles méritent les
                mêmes outils que les grandes entreprises.
              </p>
            </div>

            {/* Breadcrumb pill */}
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
                  À propos
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
                  Notre histoire
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Une expertise <Mark>certifiée,</Mark>
                <br />
                une équipe au Maroc.
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              MSL-iTECH a été fondée avec une vision claire : faire bénéficier
              les PME de l'expertise d'une équipe Odoo Ready Partner certifiée
              au Maroc. Nos consultants accompagnent les clients intégralement
              à distance (visio, démo, support) avec, ponctuellement, des
              déplacements sur site pour les formations et ateliers clés.
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
                  Notre équipe
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Les humains <Mark>derrière.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              6 spécialistes au service de votre transformation digitale. Stratégie,
              technique, projet, IA — chacun joue son rôle, ensemble.
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
                      alt={`${m.name} — ${m.role} chez MSL-iTECH`}
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
              <Sticker rotate={-6}>★ Partenaire officiel</Sticker>
            </div>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">
                  Nos certifications
                </p>
                <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
                  Vérifiez notre légitimité sur{" "}
                  <span className="italic font-light">odoo.com/partners</span>
                </h2>
                <p className="mt-5 max-w-xl font-body text-base text-white/80">
                  MSL-iTECH figure sur la fiche officielle des partenaires Odoo.
                  Statut, références publiques et présence dans l'écosystème —
                  tout est public, vérifiable en un clic.
                </p>
              </div>
              <div className="flex justify-start lg:col-span-4 lg:justify-end">
                <a
                  href="https://www.odoo.com/fr_FR/partners/country/maroc-132?search=msl-itech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  Voir notre fiche partenaire
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
              Rencontrons-nous
            </p>
          </div>
          <h2 className="mx-auto mt-7 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Parlons de votre <Mark>projet.</Mark>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-base text-white/80 md:text-lg">
            30 minutes avec un consultant dédié · Sans engagement
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group cta-pulse-gold hover-shine inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black transition hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Réserver ma démo gratuite
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
