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
import { JsonLd, professionalServiceSchema } from "@/components/JsonLd";
import pillarErp from "@/assets/home/pillar-erp.webp";
import ctaBg from "@/assets/home/cta-bg.webp";

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

/* ---------------- Paliers d'engagement ---------------- */
const paliers = [
  {
    icon: Target,
    name: "Support ponctuel",
    tagline: "Réactivité immédiate",
    desc: "Corrections, questions techniques, assistance post-déploiement. Vous avez besoin d'un expert disponible — pas d'un projet entier.",
    includes: ["Expert dédié", "Assistance multicanal", "Réponse sous 24-72h"],
    color: "#E26B3F",
  },
  {
    icon: Rocket,
    name: "Déploiement ciblé",
    tagline: "Premiers pas structurés",
    desc: "2 à 3 modules Odoo pour démarrer proprement. Idéal pour une PME qui lance son premier ERP ou qui migre depuis Excel.",
    includes: ["Paramétrage", "Formation initiale", "Import de données", "Support post-démarrage"],
    color: "#5C5E8A",
  },
  {
    icon: Layers,
    name: "Programme structuré",
    tagline: "Croissance maîtrisée",
    highlight: true,
    desc: "ERP multi-modules avec migration de données, formation approfondie et gestion de projet dédiée. Le socle pour une PME de 15 à 80 personnes.",
    includes: ["Gestion de projet", "Migration de données", "Formation multi-profils", "Optimisation des processus", "Support continu"],
    color: "#E8867A",
  },
  {
    icon: Building2,
    name: "Transformation complète",
    tagline: "Vision 360°",
    desc: "Multi-sociétés, multi-devises, développement sur mesure, intégrations tierces. Accompagnement long terme pour les organisations ambitieuses.",
    includes: ["Développement sur mesure", "Automatisation avancée", "Personnalisation apps", "Architecture multi-entités", "Accompagnement stratégique"],
    color: "#22A892",
  },
];

/* ---------------- Différenciateurs ---------------- */
const differentiateurs = [
  {
    icon: Handshake,
    title: "Partenaire, pas prestataire",
    desc: "Nous ne vendons pas des heures. Nous structurons votre projet pour qu'il réussisse — au bon périmètre, au bon rythme.",
  },
  {
    icon: TrendingUp,
    title: "Tarification adaptée au Maroc",
    desc: "Notre équipe technique certifiée Odoo basée au Maroc nous permet de proposer une tarification sur mesure, alignée sur la réalité économique des PME marocaines.",
  },
  {
    icon: FileText,
    title: "Devis transparent et détaillé",
    desc: "Chaque proposition est ventilée par module, par phase et par livrable. Vous savez exactement ce que vous payez et pourquoi.",
  },
  {
    icon: MessageSquareText,
    title: "Cadrage gratuit de 30 minutes",
    desc: "Avant tout devis, un échange pour comprendre votre contexte, évaluer la complexité réelle et vous recommander le bon niveau d'engagement.",
  },
];

const faqs = [
  {
    q: "Comment est calculé le prix d'un projet Odoo chez MSL-iTECH ?",
    a: "Chaque projet est unique. Le prix dépend du nombre de modules, du volume de données à migrer, de la complexité de vos processus et du niveau de personnalisation souhaité. Après un cadrage gratuit de 30 minutes, nous vous remettons un devis détaillé ventilé par phase et par livrable.",
  },
  {
    q: "Pourquoi ne publiez-vous pas de grille tarifaire fixe ?",
    a: "Parce qu'une grille fixe ne reflète jamais la réalité d'un projet. Un déploiement CRM pour 5 commerciaux n'a rien à voir avec un ERP complet multi-sociétés. Publier des prix fixes reviendrait à sous-estimer ou surestimer systématiquement votre projet. Notre approche sur mesure garantit un prix juste, adapté à votre complexité réelle.",
  },
  {
    q: "Comment obtenir une estimation pour mon projet ?",
    a: "Le plus simple est de réserver un cadrage gratuit de 30 minutes. Nous échangeons sur votre activité, vos processus actuels et vos objectifs, puis nous vous remettons un devis détaillé adapté à votre périmètre réel.",
  },
  {
    q: "Travaillez-vous avec des PME marocaines de toutes tailles ?",
    a: "Oui. Nous accompagnons aussi bien des TPE en structuration que des PME établies et des groupes multi-sociétés au Maroc. Notre approche s'adapte à votre taille, votre secteur (HORECA, BTP, santé, commerce, services) et votre rythme.",
  },
  {
    q: "Y a-t-il des frais cachés ?",
    a: "Non. Notre devis détaille chaque ligne : paramétrage, migration, formation, support post-démarrage. Les licences Odoo (facturées par Odoo SA directement) et l'hébergement sont indiqués séparément. Aucune surprise en cours de projet.",
  },
  {
    q: "Puis-je obtenir une estimation rapide avant le cadrage complet ?",
    a: "Oui. En nous décrivant brièvement votre périmètre (modules souhaités, nombre d'utilisateurs, données à migrer), nous pouvons vous donner une fourchette indicative sous 48h. Le cadrage gratuit de 30 minutes permet ensuite d'affiner cette estimation.",
  },
];

export default function TarifsPage() {
  useProductSeo({
    title: "Tarification sur mesure Odoo — Devis adapté à votre projet | MSL-iTECH",
    description:
      "Chaque projet Odoo est unique. MSL-iTECH propose une tarification 100% adaptée à votre périmètre, votre complexité et vos objectifs. Partenaire Odoo certifié. Devis personnalisé sous 48h.",
    path: "/notre-approche",
    faqs,
    ldId: "ld-faq-tarifs",
  });

  return (
    <>
      <JsonLd id="ld-professional-service-tarifs" data={professionalServiceSchema} />

      {/* HERO */}
      <section className="bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate rounded-[28px] md:rounded-[36px]">
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
              <img
                src={pillarErp}
                alt="Approche MSL-iTECH"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager" fetchPriority="high" decoding="async"
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
              <Sticker rotate={-8}>★ Partenaire officiel Odoo</Sticker>
            </div>

            <div className="relative flex min-h-[460px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[560px] md:py-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  Notre approche · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-[60px] lg:text-[72px]">
                Un partenaire,{" "}
                <span className="italic font-light text-brand-gold">
                  pas un compteur
                </span>
                <br className="hidden md:block" /> d'heures. <Mark>Du sur-mesure.</Mark>
              </h1>

              <p className="mt-7 max-w-2xl font-body text-base text-white/80 md:text-lg">
                Chaque projet est unique. Votre tarification devrait l'être
                aussi. Nous adaptons notre accompagnement à votre périmètre, 
                votre complexité et vos objectifs — pas l'inverse.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  <ShieldCheck size={16} className="text-brand-gold" /> Consultants certifiés v18 & v19
                </span>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  <CheckCircle2 size={16} className="text-brand-gold" /> Devis détaillé sous 48h
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
                  to="/"
                  className="font-body text-sm text-brand-grey transition hover:text-brand-blue"
                >
                  Accueil
                </Link>
                <ArrowRight size={14} className="text-brand-gold" />
                <span className="font-body text-sm font-semibold text-brand-blue">
                  Notre approche
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Notre philosophie
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Le bon prix,
                <br />
                <Mark>pour le bon projet.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              Les grilles tarifaires figent la réalité. Un déploiement CRM pour
              5 commerciaux n'a rien à voir avec un ERP complet multi-sociétés.
              C'est pourquoi chaque proposition MSL-iTECH est construite sur
              mesure — ventilée par module, par phase et par livrable. Vous
              savez exactement ce que vous payez et pourquoi.
            </p>
          </div>
        </div>
      </section>

      {/* PALIERS D'ENGAGEMENT */}
      <section className="bg-brand-white py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Niveaux d'engagement
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Quatre paliers. <Mark>Zéro rigidité.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              De l'assistance ponctuelle à la transformation complète de votre
              organisation. Chaque palier est adapté à votre réalité — nous
              construisons le devis ensemble, après avoir compris votre contexte.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {paliers.map((p) => {
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
                      <Sticker rotate={6}>★ Le plus demandé</Sticker>
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

      {/* DIFFÉRENCIATEURS */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-brand-blue" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                Pourquoi MSL-iTECH
              </p>
              <span className="h-px w-8 bg-brand-blue" />
            </div>
            <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-5xl">
              Ce qui nous <Mark>différencie.</Mark>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {differentiateurs.map((d) => {
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

      {/* COMPRENDRE LES COÛTS — lien vers la page marché */}
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
                Comprendre les coûts
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-brand-black md:text-3xl">
                Combien coûte Odoo sur le marché ?
              </h3>
              <p className="mt-4 font-body text-base text-brand-grey">
                Avant de demander un devis, comprenez les fourchettes de prix du
                marché belge : licences, hébergement, taux horaires consultants.
                Nous avons compilé un guide complet et transparent.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/tarif-odoo-belgique"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold text-brand-black transition hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  Guide des coûts Odoo 2026 <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            <article
              className="relative overflow-hidden rounded-[28px] border bg-brand-bg p-10 shadow-sm"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
                Ce qui est inclus
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-brand-black md:text-3xl">
                Dans chaque engagement.
              </h3>
              <ul className="mt-4 space-y-3 font-body text-base text-brand-grey">
                {[
                  "Analyse de vos besoins et cadrage du périmètre",
                  "Paramétrage Odoo selon votre activité",
                  "Migration des données existantes",
                  "Formation des équipes",
                  "Support post-déploiement",
                  "Devis ventilé par module et par livrable",
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
                Questions <Mark>fréquentes.</Mark>
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
          loading="lazy" decoding="async"
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
              Prochaine étape
            </p>
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Parlez-nous de votre projet,{" "}
            <span className="italic font-light text-brand-gold">
              nous construisons le devis ensemble.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-base text-white/80 md:text-lg">
            Cadrage gratuit de 30 minutes · Devis détaillé sous 48h · Sans engagement.
          </p>
          <Link
            to="/prendre-rendez-vous"
            className="mt-9 cta-pulse-gold hover-shine inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black transition hover:scale-[1.02]"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Réserver mon cadrage gratuit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
