import { Briefcase, Users, Receipt, LineChart, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { ProductBento, type BentoCard } from "@/components/product/ProductBento";
import { useProductSeo } from "@/hooks/useProductSeo";
import tourismeHero from "@/assets/tourisme-hero.webp";

const features = [
  {
    icon: Briefcase,
    title: "Réservations & devis centralisés",
    desc: "Chaque demande entrante génère automatiquement un devis structuré. Suivi en temps réel du pipeline, relances automatiques et confirmation client depuis une seule interface.",
  },
  {
    icon: Users,
    title: "CRM & fidélisation voyageurs",
    desc: "Historique complet par client, segmentation par destination ou budget, relances programmées avant la haute saison. Vos commerciaux n'oublient plus aucun prospect chaud.",
  },
  {
    icon: Receipt,
    title: "Comptabilité & facturation",
    desc: "Factures générées depuis les devis validés, acomptes et soldes suivis automatiquement. Zéro ressaisie, zéro perte entre le commercial et la compta.",
  },
  {
    icon: LineChart,
    title: "Pilotage d'activité en temps réel",
    desc: "Tableaux de bord personnalisés : taux de conversion devis/réservation, CA par période, occupation, marge par circuit. Décidez sur des données réelles, pas sur des intuitions.",
  },
];

const bentoCards: BentoCard[] = [
  {
    icon: Briefcase,
    title: "Réservations & devis",
    desc: "Demande entrante → devis structuré. Pipeline temps réel, relances automatiques et confirmation client unifiée.",
    variant: "blue",
    span: "lg:col-span-7",
  },
  {
    icon: Users,
    title: "CRM voyageurs",
    desc: "Historique client, segmentation par destination ou budget, relances avant haute saison.",
    variant: "gold",
    span: "lg:col-span-5",
  },
  {
    icon: Receipt,
    title: "Facturation & compta",
    desc: "Factures depuis devis validés, acomptes et soldes suivis automatiquement. Zéro ressaisie.",
    variant: "white",
    span: "lg:col-span-5",
  },
  {
    icon: LineChart,
    title: "Pilotage temps réel",
    desc: "Conversion devis/réservation, CA par période, occupation, marge par circuit.",
    variant: "bluelight",
    span: "lg:col-span-7",
  },
];

const faqs = [
  {
    q: "Est-ce qu'Odoo est compatible avec les besoins spécifiques du tourisme marocain ?",
    a: "Oui. Odoo intègre des modules CRM, devis, facturation et comptabilité entièrement paramétrables selon votre activité — agence de voyages, hôtel, DMC ou tour-opérateur. MSL-iTECH adapte la configuration à votre mode de vente (B2C, B2B, mixte) et à vos circuits récurrents.",
  },
  {
    q: "Combien coûte la solution Tourisme ?",
    a: "Le déploiement s'appuie sur les packs Expert Dédié MSL-iTECH, à partir de 1.539 MAD pour une mise en route sur les fonctions essentielles. La démonstration est gratuite et sans engagement — elle permet de calibrer le bon périmètre ensemble.",
  },
  {
    q: "En combien de temps la solution est-elle opérationnelle ?",
    a: "Entre 2 et 6 semaines selon le périmètre choisi. Les modules Devis et CRM sont généralement actifs en 10 jours ouvrables. La formation à l'outil est incluse dans tous les packs.",
  },
];

export default function TourismePage() {
  useProductSeo({
    title: "Odoo pour le Tourisme au Maroc — MSL-iTECH, Partenaire Certifié",
    description:
      "MSL-iTECH déploie Odoo pour les agences de voyages, hôtels et DMC au Maroc. Réservations, CRM, facturation et pilotage centralisés. Démo gratuite.",
    path: "/odoo-tourisme-maroc",
    faqs,
    ldId: "ld-faq-tourisme",
    service: {
      name: "Implémentation Odoo Tourisme",
      description:
        "Solution Odoo pour agences de voyages, hôtels, DMC et tour-opérateurs au Maroc : réservations, CRM voyageurs, facturation et pilotage par MSL-iTECH.",
      serviceType: ["Odoo CRM", "Gestion agence de voyages", "Gestion hôtelière"],
      areaServed: ["MA"],
    },
  });

  return (
    <ProductPageShell
      eyebrow="Secteur Tourisme — Maroc"
      title={
        <>
          Les agences de voyages et hôtels perdent selon les études sectorielles jusqu'à{" "}
          <span style={{ color: "var(--gold)" }}>35 % de leur chiffre d'affaires</span> potentiel faute de suivi des réservations et de relance client — la digitalisation réduit ce problème dès les premiers mois
        </>
      }
      intro="Un opérateur touristique marocain non digitalisé perd selon les études sectorielles jusqu'à 35 % de son chiffre d'affaires potentiel par manque de suivi des devis, de relance automatisée et de gestion centralisée des réservations. S'y ajoutent la comptabilité manuelle chronophage, la dispersion des informations clients entre WhatsApp, email et tableurs, et la pression croissante de l'évolution de la facturation électronique. Odoo structure ces flux de bout en bout — et MSL-iTECH le déploie selon votre périmètre, la taille de votre structure et les modules retenus."
      heroImage={tourismeHero}
      heroImageAlt="Agence de voyages marocaine équipée d'Odoo"
      metaNote="Démo sur site ou à distance · Réponse sous 24h · +212 6 89 30 62 78"
      featuresEyebrow="Dans votre agence ou établissement"
      featuresTitle="Ce qu'Odoo change dans votre structure"
      features={features}
      featuresSlot={
        <ProductBento
          eyebrow="Dans votre agence ou établissement"
          title="Ce qu'Odoo change dans votre structure"
          chipLabel="Odoo Tourisme"
          cards={bentoCards}
        />
      }
      whySection={{
        title: "Impacts constatés",
        desc: "Trois niveaux de packs adaptés à votre type de structure touristique. À partir de 199 MAD/mois, sans engagement, avec installation et formation incluses.",
        points: [
          "Réduction du temps de traitement des devis et réservations",
          "Gain de visibilité sur le pipeline commercial et le CA prévisionnel",
          "Préparation à l'évolution de la facturation électronique au Maroc",
          "Déploiement progressif selon périmètre et saison",
        ],
      }}
      faqs={faqs}
      ctaTitle="Réserver ma démo Tourisme gratuite"
      ctaSubtitle="Démo sur site ou à distance · Réponse sous 24h · +212 6 89 30 62 78"
      extraSection={
        <section className="bg-white py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
                <span className="inline-block h-px w-8 bg-brand-blue" />
                Aller plus loin
              </p>
              <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
                Ressources et secteurs connexes
              </h2>
              <p className="mt-4 font-body text-base text-brand-grey">
                Les acteurs du tourisme marocain combinent souvent hébergement, restauration et opérations multi-sites. Explorez les pages associées pour préparer votre déploiement Odoo.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                { to: "/odoo-horeca-maroc", title: "Odoo HORECA Maroc", desc: "Hôtels, restaurants et cafés : caisse, stock, F&B et facturation intégrés." },
                { to: "/odoo-crm-ventes", title: "Odoo CRM & Ventes", desc: "Pipeline commercial, devis structurés et relances automatiques pour vos voyageurs." },
                { to: "/odoo-finance-comptabilite", title: "Odoo Finance & Comptabilité", desc: "Facturation, acomptes et clôture comptable conformes à la réglementation marocaine." },
                { to: "/entreprise-multi-sites", title: "Entreprise multi-sites", desc: "Piloter plusieurs agences, hôtels ou points de vente depuis un ERP unique." },
                { to: "/realisations", title: "Nos réalisations", desc: "Cas concrets de PME marocaines transformées par MSL-iTECH." },
                { to: "/blog/budget-erp-horeca-maroc-2026", title: "Budget ERP HORECA 2026", desc: "Repères de coût et ROI transposables aux structures touristiques." },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_20px_50px_-20px_rgba(18,77,90,0.3)]"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-lg font-bold text-brand-black">{l.title}</h3>
                    <ArrowUpRight size={18} className="shrink-0 text-brand-gold transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <p className="mt-2 font-body text-sm text-brand-grey">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
}