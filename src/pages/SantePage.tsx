import { ScanLine, FileHeart, ShieldCheck } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import santeHero from "@/assets/sante-hero.jpg";

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
    title: "Facturation assurance et mutuelles",
    desc: "Intégration des tarifs CNOPS, CNSS et assurances privées. Génération automatique des feuilles de soins et suivi des remboursements.",
  },
];

export default function SantePage() {
  useProductSeo({
    title:
      "ERP Santé & Pharmacie Maroc — Odoo pour Cliniques & Pharmacies | MSL-iTECH",
    description:
      "Gestion des stocks médicamenteux, facturation, traçabilité et conformité pour le secteur santé marocain. Implémentation Odoo certifiée. Démo gratuite.",
    path: "/odoo-sante-maroc",
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
    />
  );
}