import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
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
  CalendarCheck,
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

import stepAuditImg from "@/assets/marketing-step-audit.jpg";
import stepStrategyImg from "@/assets/marketing-step-strategy.jpg";
import stepExecutionImg from "@/assets/marketing-step-execution.jpg";
import stepReportingImg from "@/assets/marketing-step-reporting.jpg";

import heroMaImg from "@/assets/hero-ma.webp";
import odooPartnerLogo from "@/assets/odoo-ready-partner.png";

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
    q: "Qu'est-ce qu'un intégrateur Odoo ?",
    a: "Un intégrateur Odoo est un partenaire certifié par Odoo S.A. qui prend en charge l'implémentation, la personnalisation et le déploiement de la plateforme ERP Odoo dans votre entreprise. Il configure les modules adaptés à votre métier, migre vos données et forme vos équipes.",
  },
  {
    q: "Pourquoi choisir un intégrateur Odoo certifié Ready Partner au Maroc ?",
    a: "Le label Ready Partner garantit que l'équipe a passé les certifications techniques Odoo et dispose d'un nombre minimum de projets livrés. Choisir un partenaire local comme MSL-iTECH assure un accompagnement en arabe, français et anglais, une connaissance des réglementations marocaines (TVA, e-facture DGI) et une disponibilité en fuseau horaire GMT+1.",
  },
  {
    q: "Quelle est la différence entre un partenaire Odoo et un consultant Odoo indépendant ?",
    a: "Un partenaire officiel Odoo comme MSL-iTECH est référencé sur le portail Odoo.com, bénéficie d'un accès direct aux équipes Odoo S.A. et est soumis à un processus de certification régulier. Un consultant indépendant n'offre pas ces garanties et ne peut pas accéder aux mêmes ressources techniques officielles.",
  },
  {
    q: "Dans quelles villes MSL-iTECH intervient-il au Maroc ?",
    a: "MSL-iTECH est basé à Marrakech et accompagne des entreprises sur l'ensemble du territoire marocain : Casablanca, Rabat, Tanger, Agadir, Fès, Meknès et les régions. Nous intervenons en présentiel dans la région de Marrakech-Safi et à distance ou en déplacement pour les autres villes.",
  },
  {
    q: "Combien coûte une implémentation Odoo au Maroc ?",
    a: "Le coût dépend de la taille de votre entreprise, du nombre de modules et du niveau de personnalisation. MSL-iTECH propose des formules adaptées aux PME marocaines, sans forfaits cachés. Contactez-nous pour recevoir un devis gratuit et personnalisé sous 48 h.",
  },
  {
    q: "Quelle est la différence entre un intégrateur Odoo et un freelance ?",
    a: "Un intégrateur comme MSL-iTECH est référencé sur odoo.com, dispose d'un accès direct au support éditeur, maintient ses certifications à jour et engage une structure pérenne. Un freelance peut convenir pour de petites tâches ponctuelles, mais ne garantit ni la continuité du service, ni la montée de version, ni le recours à l'éditeur en cas de blocage technique.",
  },
];

const sectors = [
  { label: "HORECA & Hôtellerie", href: "/odoo-horeca-maroc", image: sectorHoreca, icon: UtensilsCrossed },
  { label: "BTP & Chantiers", href: "/odoo-btp-maroc", image: sectorBtp, icon: Building2 },
  { label: "Santé & Pharmacie", href: "/odoo-sante-maroc", image: sectorHealth, icon: HeartPulse },
  { label: "Commerce & Distribution", href: "/odoo-gestion-stock-maroc", image: sectorWholesale, icon: ShoppingBag },
  { label: "Transport & Logistique", href: "/odoo-transport-logistique-maroc", image: sectorLogistics, icon: Truck },
  { label: "Tourisme & Agences", href: "/odoo-tourisme-maroc", image: sectorTourism, icon: Compass },
];

const cities = [
  { name: "Marrakech", href: "/integrateur-odoo-marrakech", local: true },
  { name: "Casablanca", href: "/integrateur-odoo-casablanca", local: false },
  { name: "Rabat", href: "/contact", local: false },
  { name: "Tanger", href: "/contact", local: false },
  { name: "Agadir", href: "/contact", local: false },
  { name: "Fès", href: "/contact", local: false },
];

const steps = [
  {
    num: "01",
    title: "Audit & cadrage",
    desc: "Analyse de vos processus métier, identification des modules Odoo prioritaires et estimation du périmètre projet.",
    icon: ClipboardCheck,
    image: stepAuditImg,
    tag: "Phase initiale",
    highlights: ["Cartographie des flux", "Choix des modules prioritaires", "Estimation forfaitaire claire"],
  },
  {
    num: "02",
    title: "Configuration & développements",
    desc: "Paramétrage natif d'Odoo, développements de modules sur mesure et intégrations avec vos outils existants.",
    icon: Sliders,
    image: stepStrategyImg,
    tag: "Développement & Intégration",
    highlights: ["Paramétrage natif Odoo", "Modules métier sur mesure", "Connecteurs API & CGNC"],
  },
  {
    num: "03",
    title: "Migration des données",
    desc: "Extraction, nettoyage et import sécurisé de vos données depuis Excel, Sage, ou votre ancien logiciel.",
    icon: Database,
    image: stockHero,
    tag: "Sécurité & Intégrité",
    highlights: ["Reprise des historiques Sage/Excel", "Nettoyage & dédoublonnage", "Import sécurisé Odoo"],
  },
  {
    num: "04",
    title: "Formation & démarrage",
    desc: "Formation de vos équipes, recette utilisateur et accompagnement au démarrage en production.",
    icon: GraduationCap,
    image: stepExecutionImg,
    tag: "Go-Live & Adoption",
    highlights: ["Formation utilisateurs dédiée", "Recette opérationnelle", "Accompagnement physique au go-live"],
  },
  {
    num: "05",
    title: "Support & évolutions",
    desc: "Hotline dédiée, correctifs, montées de version et développements complémentaires post-démarrage.",
    icon: Headphones,
    image: stepReportingImg,
    tag: "Pérennité & Maintenance",
    highlights: ["Hotline réactive locale", "Correctifs & maintenance", "Montées de version v18 & v19"],
  },
];

const teamMembers = [
  {
    name: "El Houssine BOUHMAIDA",
    role: "Business Analyst & Chef de Projet",
    photo: photoHoussine,
  },
  {
    name: "Manal AIT AYAD",
    role: "Responsable Développeur Python",
    photo: photoManal,
  },
  {
    name: "Elohim TAGNE",
    role: "Développeur Full Stack",
    photo: photoElohim,
  },
  {
    name: "Arnaud AHOUO",
    role: "Directeur Technique & Architecture",
    photo: photoArnaud,
  },
  {
    name: "Mika MUSUNGAYI",
    role: "Co-fondateur & Direction Financière",
    photo: photoMika,
  },
];

function useSeo() {
  useProductSeo({
    title: "Intégrateur Odoo Maroc — Partenaire certifié | MSL-iTECH",
    description:
      "Intégrateur Odoo Ready Partner au Maroc : implémentation ERP, modules sur mesure, migration et formation pour PME. Devis détaillé sous 48 h.",
    path: "/integrateur-odoo-maroc",
    ogImage: heroMaImg,
    faqs,
    service: {
      name: "Intégration Odoo ERP au Maroc",
      description:
        "Implémentation, personnalisation et support de la plateforme Odoo pour PME et ETI marocaines par un partenaire certifié Ready Partner.",
      serviceType: [
        "Intégration ERP",
        "Implémentation Odoo",
        "Conseil ERP",
        "Développement Odoo",
      ],
      areaServed: ["MA"],
    },
    breadcrumbs: [
      { name: "Accueil", url: "/" },
      { name: "Intégrateur Odoo Maroc", url: "/integrateur-odoo-maroc" },
    ],
  });
}

export default function IntegrateurOdooMarocPage() {
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
            {/* Colonne gauche : Titre, argumentaire & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-white/80 px-3.5 py-1.5 backdrop-blur-sm shadow-sm">
                <Sparkles size={13} className="text-brand-blue" aria-hidden="true" />
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-brand-blue">
                  Odoo Ready Partner · Maroc
                </p>
              </div>

              <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-brand-black sm:text-5xl md:text-[62px]">
                Intégrateur Odoo au Maroc : implémentation, modules sur mesure, <Mark>formation</Mark>
              </h1>

              <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-brand-grey md:text-lg">
                MSL-iTECH est un partenaire Odoo certifié Ready Partner, basé à Marrakech.
                Nous accompagnons les PME et ETI marocaines dans leur transformation digitale :
                implémentation ERP, modules sur mesure, migration des données et support local.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  Obtenir un devis gratuit
                  <ArrowRight size={18} aria-hidden="true" className="transition group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/prendre-rendez-vous"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue/30 bg-brand-white px-6 py-3.5 font-body text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/5"
                >
                  <PhoneCall size={16} aria-hidden="true" />
                  Prendre rendez-vous
                </Link>
              </div>

              {/* Badges de réassurance */}
              <div className="mt-8 flex flex-wrap items-center gap-2 font-body text-xs text-brand-grey sm:gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-grey/15 bg-brand-white/70 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                  Consultants certifiés v18 &amp; v19
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-grey/15 bg-brand-white/70 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                  Ancrage local Marrakech &amp; Maroc
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-grey/15 bg-brand-white/70 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                  Réponse sous 24h
                </span>
              </div>
            </div>

            {/* Colonne droite : Bento visuel avec image du Maroc et métriques */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                {/* Grande carte visuelle avec hero-ma.webp */}
                <div
                  className="group relative col-span-2 aspect-[16/11] overflow-hidden rounded-[26px] border bg-brand-white shadow-xl"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <img
                    src={heroMaImg}
                    alt="Intégrateur Odoo certifié au Maroc — MSL-iTECH"
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
                    <Sticker rotate={-5} href="https://www.odoo.com/fr_FR/partners/msl-itech-15851608?country_id=132">
                      ★ Partenaire Odoo
                    </Sticker>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-brand-black/60 p-3 backdrop-blur-md text-white">
                    <div className="flex items-center gap-2.5">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-heading text-xs font-semibold">Ready Partner officiel Odoo</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/80">Maroc</span>
                  </div>
                </div>

                {/* Carte bleue : Références vérifiables */}
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
                  <div className="mt-4 font-heading text-3xl font-bold">20+</div>
                  <p className="mt-1 font-body text-xs text-white/85">
                    références publiques vérifiables sur odoo.com
                  </p>
                </div>

                {/* Carte blanche : Formule sur mesure & Devis */}
                <div
                  className="flex flex-col justify-between rounded-[22px] border bg-brand-white p-5 shadow-sm"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand-blue font-bold">
                      Approche
                    </span>
                    <div className="mt-2 font-heading text-2xl font-bold" style={{ color: "var(--blue)" }}>
                      Sur mesure
                    </div>
                  </div>
                  <p className="mt-2 font-body text-xs text-brand-grey">
                    devis gratuit &amp; personnalisé sous 48h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certification badge officiel ── */}
      <section className="border-y border-brand-grey/10 bg-brand-white py-10">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-brand-blue/10 bg-brand-bg/60 p-6 md:flex-row md:p-8">
            <div className="flex shrink-0 items-center justify-center rounded-2xl bg-brand-white p-4 shadow-sm border border-brand-grey/10">
              <img
                src={odooPartnerLogo}
                alt="Logo Odoo Ready Partner"
                className="h-16 w-auto object-contain md:h-20"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue mb-2">
                <ShieldCheck size={14} /> Partenaire Référencé
              </div>
              <h2 className="font-heading text-xl font-bold text-brand-black md:text-2xl">
                Certifié Odoo Ready Partner — consultants v18 &amp; v19
              </h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-brand-grey">
                MSL-iTECH est référencé sur <strong>odoo.com/partners</strong> en tant que partenaire
                officiel Odoo au Maroc. Nos consultants sont certifiés sur les versions 18 et 19
                (Functional &amp; Technical) et disposent d'un accès direct aux équipes Odoo S.A.
                pour les cas complexes.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://www.odoo.com/fr_FR/partners/msl-itech-15851608?country_id=132"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue px-5 py-2.5 font-body text-xs font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
              >
                Vérifier sur Odoo.com
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pourquoi MSL-iTECH ── */}
      <section className="py-20 bg-brand-white">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="text-center md:text-left">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                Atouts &amp; Différenciation
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                Pourquoi choisir MSL-iTECH comme intégrateur Odoo au Maroc ?
              </h2>
              <p className="mt-4 max-w-2xl font-body text-brand-grey">
                Tous les partenaires Odoo ne se valent pas. Voici ce qui nous distingue sur le marché marocain.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Partenaire officiel certifié",
                  desc: "Référencé sur odoo.com. Certifications techniques et fonctionnelles vérifiées par Odoo S.A. Accès au support éditeur de niveau Gold.",
                },
                {
                  icon: MapPin,
                  title: "Ancrage local au Maroc",
                  desc: "Équipe basée à Marrakech. Connaissance des réglementations DGI, e-facture, plan comptable CGNC. Interventions sur site dans tout le Royaume.",
                },
                {
                  icon: Users,
                  title: "Consultants métier spécialisés",
                  desc: "HORECA, BTP, Santé, Commerce, Transport : chaque projet est piloté par un consultant qui connaît votre secteur, pas seulement le logiciel.",
                },
                {
                  icon: Wrench,
                  title: "Développement sur mesure",
                  desc: "Modules custom, connecteurs API, localisation marocaine : notre équipe technique adapte Odoo à vos processus, pas l'inverse.",
                },
                {
                  icon: Star,
                  title: "Expérience PME marocaine",
                  desc: "Dizaines de projets livrés au Maroc. Nous connaissons les contraintes budgétaires, les habitudes de gestion et les délais réels des PME locales.",
                },
                {
                  icon: CheckCircle2,
                  title: "Accompagnement post-démarrage",
                  desc: "Hotline dédiée, correctifs rapides, formations complémentaires et montées de version sans rupture. Vous n'êtes pas seul après le go-live.",
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
                    Expertise garantie
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Secteurs avec cartes images immersives ── */}
      <section className="bg-brand-bg py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                  Expertise Sectorielle
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                  Intégration Odoo par secteur d'activité au Maroc
                </h2>
                <p className="mt-4 max-w-2xl font-body text-brand-grey">
                  Un seul ERP, des dizaines de métiers. Nos consultants maîtrisent les spécificités
                  opérationnelles de chaque secteur pour éviter les projets génériques.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border bg-brand-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-grey/10">
                    <img
                      src={s.image}
                      alt={s.label}
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

      {/* ── Notre méthode — Cockpit interactif et Roadmap projet ── */}
      <section className="py-20 bg-brand-white border-t border-brand-grey/10">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-bg px-3.5 py-1">
                <Sparkles size={12} className="text-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                  Processus Projet
                </p>
              </div>
              <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                Notre méthode d'implémentation Odoo au Maroc
              </h2>
              <p className="mt-4 max-w-2xl font-body text-brand-grey">
                Pas de surprise, pas d'élastique budgétaire. Voici les 5 phases de chaque projet.
              </p>
            </div>

            {/* Barre de jalonnement (Roadmap horizontale interactive) */}
            <div className="mt-10 overflow-x-auto pb-2">
              <div className="flex min-w-[620px] items-center justify-between relative px-2">
                {/* Ligne de progression en arrière-plan */}
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

            {/* Cockpit interactif en 2 volets */}
            <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
              {/* Colonne gauche : Liste interactive des 5 étapes */}
              <div className="space-y-3.5 lg:col-span-6">
                {steps.map((step, idx) => {
                  const isActive = activeStepIdx === idx;
                  const StepIcon = step.icon;

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
                      {/* Pastille numéro & icône */}
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

                      {/* Indicateur de sélection */}
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

              {/* Colonne droite : Carte visuelle grand format du jalon actif */}
              <div className="lg:col-span-6 lg:sticky lg:top-24">
                {(() => {
                  const currentStep = steps[activeStepIdx];
                  const CurrentIcon = currentStep.icon;

                  return (
                    <div
                      className="overflow-hidden rounded-[26px] border bg-brand-white shadow-xl transition-all duration-300"
                      style={{ borderColor: "var(--grey-light)" }}
                    >
                      {/* Photo d'étape avec gradient immersif */}
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

                        {/* Badge supérieur */}
                        <div className="absolute top-4 left-4">
                          <Sticker rotate={-4}>
                            ★ Étape {currentStep.num}
                          </Sticker>
                        </div>

                        {/* Pastille flottante en bas de l'image */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-brand-black/60 p-3 backdrop-blur-md text-white">
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gold text-brand-blue">
                              <CurrentIcon size={15} />
                            </div>
                            <span className="font-heading text-xs font-bold">{currentStep.tag}</span>
                          </div>
                          <span className="font-mono text-[10px] text-white/80">
                            Jalon {activeStepIdx + 1} / 5
                          </span>
                        </div>
                      </div>

                      {/* Contenu et points d'attention du jalon */}
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
                            Garanties &amp; Engagements de ce jalon :
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

                        {/* Contrôles Précédent / Suivant */}
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
                            Étape précédente
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
                            Étape suivante
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

      {/* ── Notre offre (Ce que MSL-iTECH prend en charge) ── */}
      <section className="bg-brand-bg py-20 border-y border-brand-grey/10">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              {/* Volet texte intégral */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-white px-3 py-1">
                  <Sparkles size={12} className="text-brand-blue" />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-brand-blue font-bold">
                    Périmètre Complet
                  </p>
                </div>
                <h2 className="mt-4 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                  Ce que MSL-iTECH prend en charge
                </h2>
                <div className="mt-6 rounded-2xl border bg-brand-white p-6 shadow-sm leading-relaxed" style={{ borderColor: "var(--grey-light)" }}>
                  <p className="font-body text-sm md:text-base text-brand-grey leading-relaxed">
                    Notre périmètre couvre l'ensemble du cycle de vie d'un projet Odoo, de l'audit initial
                    au support après démarrage. Nous intervenons sur les modules natifs — Comptabilité, CRM,
                    Ventes, Stock, Achats, Fabrication, RH, Site Web — et développons des modules sur mesure
                    lorsque le besoin métier l'exige. La localisation fiscale marocaine (plan comptable CGNC,
                    TVA, e-facture DGI), la migration depuis un ancien logiciel (Sage, Excel, autre) et la
                    formation des utilisateurs font partie de chaque projet. Nous ne livrons pas un logiciel :
                    nous livrons un outil configuré pour votre entreprise, avec des équipes formées et un
                    support réactif.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Comptabilité & CGNC",
                    "CRM & Ventes",
                    "Stock & Achats",
                    "Fabrication (MRP)",
                    "RH & Paie",
                    "Facture électronique DGI",
                    "Migration Sage / Excel",
                    "Formation utilisateurs",
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

              {/* Volet visuel d'illustration ERP */}
              <div className="lg:col-span-5">
                <div className="relative isolate overflow-hidden rounded-3xl border bg-brand-white p-3 shadow-xl" style={{ borderColor: "var(--grey-light)" }}>
                  <img
                    src={pillarErp}
                    alt="Périmètre d'intervention ERP Odoo Maroc — MSL-iTECH"
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-sm font-bold text-brand-black">Intégration Clé en Main</span>
                      <span className="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold text-brand-black" style={{ backgroundColor: "var(--gold)" }}>
                        360°
                      </span>
                    </div>
                    <p className="mt-1 font-body text-xs text-brand-grey">
                      De l'audit initial au support post-démarrage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cas clients Maroc avec visuels ── */}
      <section className="py-20 bg-brand-white">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="text-center md:text-left">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                Retours d'Expérience
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                Trois projets Odoo au Maroc accompagnés par MSL-iTECH
              </h2>
              <p className="mt-4 max-w-2xl font-body text-brand-grey">
                Chaque projet est différent. Voici trois exemples concrets de déploiements réalisés au Maroc,
                avec les modules activés et les résultats obtenus.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "NASLI Holding",
                  sector: "Groupe multi-sociétés · Marrakech",
                  desc: "Déploiement Odoo multi-société pour un groupe hôtelier : 12 sociétés, comptabilité consolidée, RH mutualisée et reporting groupe unifié.",
                  href: "/realisations/nasli-holding",
                  image: sectorScaleup,
                },
                {
                  name: "Edge Sport Maroc",
                  sector: "Commerce & distribution · Maroc",
                  desc: "Implémentation Odoo pour la gestion commerciale, le stock multi-entrepôts et la facturation conforme DGI dans le secteur des articles de sport.",
                  href: "/realisations/edge-sport-maroc",
                  image: stockHero,
                },
                {
                  name: "TPMR Maroc",
                  sector: "Transport de personnes · Maroc",
                  desc: "Mise en place d'Odoo pour la planification des tournées, la facturation des prestations et le suivi de flotte dans le transport de personnes à mobilité réduite.",
                  href: "/realisations/tpmr-maroc",
                  image: transportHero,
                },
              ].map((c) => (
                <Link
                  key={c.name}
                  to={c.href}
                  className="group flex flex-col overflow-hidden rounded-2xl border bg-brand-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-grey/10">
                    <img
                      src={c.image}
                      alt={c.name}
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
                      Cas client
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
                      Voir le cas client
                      <ArrowRight size={15} aria-hidden="true" className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border bg-brand-bg/50 p-4 text-center" style={{ borderColor: "var(--grey-light)" }}>
              <p className="font-body text-sm text-brand-grey">
                Toutes nos références sont vérifiables sur{" "}
                <a
                  href="https://www.odoo.com/fr_FR/partners/msl-itech-15851608?country_id=132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-blue underline hover:text-brand-blue/80"
                >
                  odoo.com/partners
                </a>{" "}
                et sur notre page{" "}
                <Link to="/realisations" className="font-semibold text-brand-blue underline hover:text-brand-blue/80">
                  réalisations
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Équipe avec deck de cartes superposées (dépilement) ── */}
      <section className="bg-brand-bg py-20 border-t border-brand-grey/10">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Volet texte intégral à gauche */}
              <div className="lg:col-span-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                  Experts Odoo Certifiés
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                  Notre équipe
                </h2>
                <div className="mt-6 rounded-2xl border bg-brand-white p-6 shadow-sm leading-relaxed" style={{ borderColor: "var(--grey-light)" }}>
                  <p className="font-body text-sm md:text-base leading-relaxed text-brand-grey">
                    MSL-iTECH est une équipe de consultants fonctionnels et techniques certifiés Odoo,
                    basée à Marrakech. Nos profils combinent une connaissance approfondie du tissu
                    économique marocain — réglementations DGI, plan comptable CGNC, habitudes de gestion
                    des PME locales — avec une expérience internationale acquise sur des projets en Belgique,
                    au Canada et en Afrique. Chaque projet est piloté par un consultant dédié qui connaît
                    votre secteur, pas seulement le logiciel. Notre structure légère nous permet de proposer
                    des tarifs compétitifs sans sacrifier la qualité d'accompagnement, et notre statut de
                    partenaire officiel Odoo nous donne un accès direct aux équipes de l'éditeur pour les
                    cas techniques complexes.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 rounded-xl bg-brand-white border px-4 py-2 text-xs font-semibold text-brand-black" style={{ borderColor: "var(--grey-light)" }}>
                    <MapPin size={14} className="text-brand-blue" />
                    Siège à Marrakech
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-brand-white border px-4 py-2 text-xs font-semibold text-brand-black" style={{ borderColor: "var(--grey-light)" }}>
                    <ShieldCheck size={14} className="text-brand-gold" />
                    Certifications v18 &amp; v19
                  </div>
                </div>

                {/* Sélecteur de profil en pilules pour accès direct */}
                <div className="mt-8">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-brand-grey/80 mb-3">
                    Consulter nos consultants ({activeTeamIdx + 1}/{teamMembers.length}) :
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
                          alt=""
                          className="h-4 w-4 rounded-full object-cover"
                        />
                        {m.name.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Volet interactif à droite : Deck de cartes superposées */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div className="relative h-[460px] w-full max-w-[360px] select-none">
                  {teamMembers.map((member, i) => {
                    // Position relative par rapport à la carte active
                    const relIdx = (i - activeTeamIdx + teamMembers.length) % teamMembers.length;

                    // On n'affiche que les 3 premières cartes du dessus de la pile
                    if (relIdx > 2) return null;

                    const isTop = relIdx === 0;
                    const isSecond = relIdx === 1;
                    const isThird = relIdx === 2;

                    // Styles de superposition simulant un paquet de cartes
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
                        title={isTop ? "Cliquer pour dépiler la carte" : undefined}
                      >
                        {/* Photo de profil haute définition */}
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* Dégradé d'ambiance */}
                        <div
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(18,77,90,0.1) 0%, rgba(10,45,54,0.3) 50%, rgba(10,45,54,0.92) 100%)",
                          }}
                        />

                        {/* Badge supérieur */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <span
                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-brand-black shadow-md"
                            style={{ backgroundColor: "var(--gold)" }}
                          >
                            <Sparkles size={11} />
                            Odoo Certifié
                          </span>
                          {isTop && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-brand-black/60 px-2.5 py-1 font-mono text-[10px] text-white/90 backdrop-blur-md">
                              Dépiler 🃏
                            </span>
                          )}
                        </div>

                        {/* Informations en bas de carte */}
                        <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                          <div className="rounded-2xl bg-brand-black/40 p-4 backdrop-blur-md border border-white/10">
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">
                              Consultant MSL-iTECH
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

                {/* Barre de navigation & instructions pour dépiler */}
                <div className="mt-8 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveTeamIdx((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)}
                    aria-label="Membre précédent"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/20 bg-brand-white text-brand-blue shadow-sm transition hover:bg-brand-blue hover:text-white"
                  >
                    <ArrowRight size={16} className="rotate-180" />
                  </button>

                  <div className="text-center font-mono text-xs text-brand-grey">
                    <span className="font-bold text-brand-blue">0{activeTeamIdx + 1}</span> / 0{teamMembers.length}
                    <p className="text-[10px] text-brand-grey/70">Cliquez pour dépiler</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveTeamIdx((prev) => (prev + 1) % teamMembers.length)}
                    aria-label="Membre suivant"
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

      {/* ── Couverture géographique ── */}
      <section className="bg-brand-white py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="text-center md:text-left">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                Présence Nationale
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                Intégrateur Odoo disponible dans tout le Maroc
              </h2>
              <p className="mt-4 max-w-2xl font-body text-brand-grey">
                Basés à Marrakech, nous intervenons en présentiel dans la région et à distance ou en
                déplacement dans les principales villes du Royaume.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <Link
                  key={city.name}
                  to={city.href}
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
                          Siège social
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

      {/* ── FAQ Interactive ── */}
      <section className="bg-brand-bg py-20 border-t border-brand-grey/10">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue font-bold">
                Transparence &amp; Réponses
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-brand-black md:text-4xl">
                Questions fréquentes — intégrateur Odoo Maroc
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
                    {isOpen && (
                      <dd className="px-6 pb-6 font-body text-sm leading-relaxed text-brand-grey border-t border-brand-grey/10 pt-4">
                        {faq.a}
                      </dd>
                    )}
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
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
              Prêt à démarrer votre projet Odoo au Maroc ?
            </h2>
            <p className="relative z-10 mx-auto mt-5 max-w-xl font-body text-base text-white/85 leading-relaxed">
              Décrivez votre projet à nos consultants — nous vous revenons avec une estimation
              gratuite et sans engagement sous 48 heures.
            </p>
            <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-8 py-4 font-body text-base font-bold text-brand-black shadow-lg transition hover:scale-[1.02]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Obtenir un devis gratuit
                <ArrowRight size={18} aria-hidden="true" className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/realisations"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-4 font-body text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
