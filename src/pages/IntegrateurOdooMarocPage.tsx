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
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import heroMaImg from "@/assets/hero-ma.webp";
import odooPartnerLogo from "@/assets/odoo-ready-partner.png";

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
  { label: "HORECA & Hôtellerie", href: "/odoo-horeca-maroc" },
  { label: "BTP & Chantiers", href: "/odoo-btp-maroc" },
  { label: "Santé & Pharmacie", href: "/odoo-sante-maroc" },
  { label: "Commerce & Distribution", href: "/odoo-gestion-stock-maroc" },
  { label: "Transport & Logistique", href: "/odoo-transport-logistique-maroc" },
  { label: "Tourisme & Agences", href: "/odoo-tourisme-maroc" },
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
  },
  {
    num: "02",
    title: "Configuration & développements",
    desc: "Paramétrage natif d'Odoo, développements de modules sur mesure et intégrations avec vos outils existants.",
  },
  {
    num: "03",
    title: "Migration des données",
    desc: "Extraction, nettoyage et import sécurisé de vos données depuis Excel, Sage, ou votre ancien logiciel.",
  },
  {
    num: "04",
    title: "Formation & démarrage",
    desc: "Formation de vos équipes, recette utilisateur et accompagnement au démarrage en production.",
  },
  {
    num: "05",
    title: "Support & évolutions",
    desc: "Hotline dédiée, correctifs, montées de version et développements complémentaires post-démarrage.",
  },
];

function useSeo() {
  useProductSeo({
    title: "Intégrateur Odoo Maroc — Partenaire certifié | MSL-iTECH",
    description:
      "Intégrateur Odoo certifié Ready Partner au Maroc. Implémentation ERP, modules custom, migration et formation pour PME : HORECA, BTP, Santé, Commerce. Devis sous 48 h.",
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

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-brand-bg py-20 md:py-28">
        <HeroCursorGlow color="rgba(255, 221, 87, 1)" size={520} intensity={0.35} />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(rgba(13,13,13,0.7) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-white/70 px-3.5 py-1.5 backdrop-blur-sm">
              <Sparkles size={12} className="text-brand-blue" aria-hidden="true" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-blue">
                Odoo Ready Partner · Maroc
              </p>
            </div>

            <h1 className="mt-8 font-heading text-5xl font-bold leading-[1.04] tracking-tight text-brand-black md:text-[72px]">
              Intégrateur Odoo au Maroc : implémentation, modules sur mesure, <Mark>formation</Mark>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-body text-base text-brand-grey md:text-lg">
              MSL-iTECH est un partenaire Odoo certifié Ready Partner, basé à Marrakech.
              Nous accompagnons les PME et ETI marocaines dans leur transformation digitale :
              implémentation ERP, modules sur mesure, migration des données et support local.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue/30 bg-brand-white px-6 py-3.5 font-body text-sm font-semibold text-brand-blue transition hover:border-brand-blue"
              >
                <PhoneCall size={16} aria-hidden="true" />
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certification badge ── */}
      <section className="border-y border-brand-grey/10 bg-brand-white py-12">
        <div className="container">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <img
              src={odooPartnerLogo}
              alt="Logo Odoo Ready Partner"
              className="h-20 w-auto shrink-0 object-contain"
              loading="lazy"
            />
            <div>
              <h2 className="font-heading text-xl font-bold text-brand-black">
                Certifié Odoo Ready Partner — consultants v18 & v19
              </h2>
              <p className="mt-2 font-body text-sm text-brand-grey">
                MSL-iTECH est référencé sur <strong>odoo.com/partners</strong> en tant que partenaire
                officiel Odoo au Maroc. Nos consultants sont certifiés sur les versions 18 et 19
                (Functional &amp; Technical) et disposent d'un accès direct aux équipes Odoo S.A.
                pour les cas complexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pourquoi MSL-iTECH ── */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Pourquoi choisir MSL-iTECH comme intégrateur Odoo au Maroc ?
            </h2>
            <p className="mt-4 max-w-2xl font-body text-brand-grey">
              Tous les partenaires Odoo ne se valent pas. Voici ce qui nous distingue sur le marché marocain.
            </p>

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
                  className="rounded-2xl border bg-brand-white p-6"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <item.icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-brand-black">{item.title}</h3>
                  <p className="mt-2 font-body text-sm text-brand-grey">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Secteurs ── */}
      <section className="bg-brand-bg py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Intégration Odoo par secteur d'activité au Maroc
            </h2>
            <p className="mt-4 max-w-2xl font-body text-brand-grey">
              Un seul ERP, des dizaines de métiers. Nos consultants maîtrisent les spécificités
              opérationnelles de chaque secteur pour éviter les projets génériques.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {sectors.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue/20 bg-brand-white px-4 py-2 font-body text-sm font-semibold text-brand-blue transition hover:border-brand-blue"
                >
                  {s.label}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Notre méthode ── */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Notre méthode d'implémentation Odoo au Maroc
            </h2>
            <p className="mt-4 max-w-2xl font-body text-brand-grey">
              Pas de surprise, pas d'élastique budgétaire. Voici les 5 phases de chaque projet.
            </p>
            <ol className="mt-12 space-y-6">
              {steps.map((step) => (
                <li
                  key={step.num}
                  className="flex gap-6 rounded-2xl border bg-brand-white p-6"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <span
                    className="shrink-0 font-heading text-4xl font-bold leading-none"
                    style={{ color: "var(--gold)" }}
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-brand-black">{step.title}</h3>
                    <p className="mt-1 font-body text-sm text-brand-grey">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Notre offre ── */}
      <section className="bg-brand-bg py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Ce que MSL-iTECH prend en charge
            </h2>
            <p className="mt-4 font-body text-brand-grey">
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
        </div>
      </section>

      {/* ── Cas clients Maroc ── */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Trois projets Odoo au Maroc accompagnés par MSL-iTECH
            </h2>
            <p className="mt-4 max-w-2xl font-body text-brand-grey">
              Chaque projet est différent. Voici trois exemples concrets de déploiements réalisés au Maroc,
              avec les modules activés et les résultats obtenus.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "NASLI Holding",
                  sector: "Groupe multi-sociétés · Marrakech",
                  desc: "Déploiement Odoo multi-société pour un groupe hôtelier : 12 sociétés, comptabilité consolidée, RH mutualisée et reporting groupe unifié.",
                  href: "/realisations/nasli-holding",
                },
                {
                  name: "Edge Sport Maroc",
                  sector: "Commerce & distribution · Maroc",
                  desc: "Implémentation Odoo pour la gestion commerciale, le stock multi-entrepôts et la facturation conforme DGI dans le secteur des articles de sport.",
                  href: "/realisations/edge-sport-maroc",
                },
                {
                  name: "TPMR Maroc",
                  sector: "Transport de personnes · Maroc",
                  desc: "Mise en place d'Odoo pour la planification des tournées, la facturation des prestations et le suivi de flotte dans le transport de personnes à mobilité réduite.",
                  href: "/realisations/tpmr-maroc",
                },
              ].map((c) => (
                <Link
                  key={c.name}
                  to={c.href}
                  className="group flex flex-col rounded-2xl border bg-brand-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                    {c.sector}
                  </p>
                  <h3 className="mt-2 font-heading text-base font-bold text-brand-black">{c.name}</h3>
                  <p className="mt-2 flex-1 font-body text-sm text-brand-grey">{c.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-body text-sm font-semibold text-brand-blue">
                    Voir le cas client
                    <ArrowRight size={14} aria-hidden="true" className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-center font-body text-sm text-brand-grey">
              Toutes nos références sont vérifiables sur{" "}
              <a
                href="https://www.odoo.com/fr_FR/partners/msl-itech-15851608?country_id=132"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-blue underline"
              >
                odoo.com/partners
              </a>{" "}
              et sur notre page{" "}
              <Link to="/realisations" className="font-semibold text-brand-blue underline">
                réalisations
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Équipe ── */}
      <section className="bg-brand-bg py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Notre équipe
            </h2>
            <p className="mt-4 font-body text-brand-grey">
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
        </div>
      </section>

      {/* ── Couverture géographique ── */}
      <section className="bg-brand-bg py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Intégrateur Odoo disponible dans tout le Maroc
            </h2>
            <p className="mt-4 max-w-2xl font-body text-brand-grey">
              Basés à Marrakech, nous intervenons en présentiel dans la région et à distance ou en
              déplacement dans les principales villes du Royaume.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <Link
                  key={city.name}
                  to={city.href}
                  className="group flex items-center justify-between rounded-2xl border bg-brand-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-brand-blue" aria-hidden="true" />
                    <div>
                      <p className="font-heading text-sm font-bold text-brand-black">{city.name}</p>
                      {city.local && (
                        <p className="font-body text-xs text-brand-blue">Siège social</p>
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

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Questions fréquentes — intégrateur Odoo Maroc
            </h2>
            <dl className="mt-10 space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border bg-brand-white p-6"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <dt className="font-heading text-base font-bold text-brand-black">{faq.q}</dt>
                  <dd className="mt-3 font-body text-sm leading-relaxed text-brand-grey">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-20">
        <div className="container">
          <div
            className="mx-auto max-w-3xl rounded-3xl px-8 py-14 text-center"
            style={{ backgroundColor: "var(--blue)" }}
          >
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Prêt à démarrer votre projet Odoo au Maroc ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-white/80">
              Décrivez votre projet à nos consultants — nous vous revenons avec une estimation
              gratuite et sans engagement sous 48 heures.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black transition hover:scale-[1.02]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Obtenir un devis gratuit
                <ArrowRight size={18} aria-hidden="true" className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/realisations"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3.5 font-body text-sm font-semibold text-white transition hover:border-white"
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
