import { Briefcase, Users, Receipt, LineChart } from "lucide-react";
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
      metaNote="Démo sur site ou à distance · Réponse sous 24 à 72h · +212 6 89 30 62 78"
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
      ctaSubtitle="Démo sur site ou à distance · Réponse sous 24 à 72h · +212 6 89 30 62 78"
    />
  );
}