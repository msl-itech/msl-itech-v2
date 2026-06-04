import { ScanLine, FileHeart, ShieldCheck } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { ProductBento, type BentoCard } from "@/components/product/ProductBento";
import { useProductSeo } from "@/hooks/useProductSeo";
import santeHero from "@/assets/sante-hero.webp";

const features = [
  {
    icon: ScanLine,
    title: "Traçabilité médicamenteuse par lot",
    desc: "Chaque médicament est suivi par numéro de lot et date de péremption. Alerte automatique sur les stocks arrivant à expiration.",
  },
  {
    icon: FileHeart,
    title: "Gestion des ordonnances et des patients",
    desc: "Suivi des ordonnances, historique patient, renouvellements automatiques pour les traitements chroniques.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité et traçabilité",
    desc: "Alertes péremption, traçabilité des lots et conformité aux exigences réglementaires du secteur santé marocain.",
  },
];

const bentoCards: BentoCard[] = [
  {
    icon: ScanLine,
    title: "Traçabilité par lot",
    desc: "Chaque médicament suivi par numéro de lot et date de péremption. Alerte automatique sur les stocks proches de l'expiration.",
    variant: "blue",
    span: "lg:col-span-7",
  },
  {
    icon: FileHeart,
    title: "Ordonnances & patients",
    desc: "Suivi des ordonnances, historique patient et renouvellements automatiques pour les traitements chroniques.",
    variant: "gold",
    span: "lg:col-span-5",
  },
  {
    icon: ShieldCheck,
    title: "Conformité et traçabilité",
    desc: "Alertes péremption, traçabilité des lots et conformité aux exigences réglementaires du secteur santé marocain.",
    variant: "bluelight",
    span: "lg:col-span-12",
  },
];

const faqs = [
  {
    q: "Odoo est-il adapté à une pharmacie au Maroc ?",
    a: "Oui. Odoo Inventaire avec gestion des lots et dates d'expiration couvre les besoins d'une pharmacie : traçabilité produit, alertes péremption, multi-fournisseurs, facturation comptoir. MSL-iTECH adapte le paramétrage aux contraintes du secteur.",
  },
  {
    q: "Combien coûte une implémentation Odoo pour une clinique ou un cabinet ?",
    a: "Un déploiement Santé (dossier patient, ordonnances, facturation comptoir, stock médicaments) s'inscrit entre le pack Premium (80h, 3 400€) et le pack Elite (200h, 8 500€). Les structures multi-sites ou avec reprise d'historique dépassent souvent le pack Elite.",
  },
  {
    q: "Combien de temps pour rendre la solution opérationnelle ?",
    a: "Le périmètre essentiel (stock + facturation + dossier patient simple) est opérationnel en 4 à 6 semaines. L'intégration aux organismes payeurs et la reprise d'historique allongent le projet de quelques semaines.",
  },
];

export default function SantePage() {
  useProductSeo({
    title:
      "ERP Santé & Pharmacie Maroc — Odoo pour Cliniques & Pharmacies | MSL-iTECH",
    description:
      "Gestion des stocks médicamenteux, facturation, traçabilité et conformité pour le secteur santé marocain. Implémentation Odoo certifiée. Démo gratuite.",
    path: "/odoo-sante-maroc",
    faqs,
    ldId: "ld-faq-sante",
    service: {
      name: "Implémentation Odoo Santé & Pharmacie",
      description:
        "Solution Odoo pour pharmacies, cliniques et centres de santé au Maroc : traçabilité des lots, ordonnances, dossier patient et facturation comptoir par MSL-iTECH.",
      serviceType: ["ERP Santé", "Gestion pharmacie", "Facturation comptoir"],
      areaServed: ["MA"],
    },
  });

  return (
    <ProductPageShell
      eyebrow="Secteur Santé / Pharma — Maroc"
      title={
        <>
          Gérer une pharmacie ou une clinique sans traçabilité des lots, c'est
          exposer vos{" "}
          <span style={{ color: "var(--gold)" }}>patients et votre licence</span>
        </>
      }
      intro="Le secteur de la santé fait face à des exigences de traçabilité que les outils généralistes ne couvrent pas. Dates d'expiration, numéros de lot, ordonnances, facturation assurance : chaque erreur a des conséquences réelles."
      heroImage={santeHero}
      heroImageAlt="Pharmacie marocaine équipée d'Odoo Santé"
      metaNote="Démo adaptée à votre type de structure · Réponse sous 24 à 72h"
      featuresEyebrow="Pour le secteur santé"
      featuresTitle="Ce qu'Odoo apporte au secteur santé"
      features={features}
      featuresSlot={
        <ProductBento
          eyebrow="Pour le secteur santé"
          title="Ce qu'Odoo apporte au secteur santé"
          chipLabel="Odoo Santé"
          cards={bentoCards}
        />
      }
      whySection={{
        title: "MSL-iTECH dans le secteur santé marocain",
        desc: "Avec 3 clients actifs dans la santé, l'aide sociale et le pharmaceutique, MSL-iTECH a une expérience concrète des contraintes de ce secteur.",
        points: [
          "Traçabilité lots et péremptions",
          "Intégration CNOPS, CNSS et assurances privées",
          "Suivi patients et ordonnances",
          "Conformité aux exigences sectorielles",
        ],
      }}
      ctaTitle="Réserver ma démo Santé gratuite"
      ctaSubtitle="Démo adaptée à votre type de structure · Réponse sous 24 à 72h"
      faqs={faqs}
    />
  );
}