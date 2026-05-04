import { Truck, CalendarCheck, Receipt } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import transportHero from "@/assets/transport-hero.webp";

const features = [
  {
    icon: Truck,
    title: "Gestion de flotte et maintenance préventive",
    desc: "Suivi kilométrique, alertes de révision, historique de maintenance par véhicule. Vous planifiez les entretiens avant les pannes.",
  },
  {
    icon: CalendarCheck,
    title: "Réservations et planning",
    desc: "Gestion des réservations clients ou agences partenaires, affectation des véhicules et des chauffeurs, confirmation automatique.",
  },
  {
    icon: Receipt,
    title: "Facturation clients et agences",
    desc: "Génération automatique des factures à l'issue de chaque prestation. Suivi des encaissements, relances automatiques sur les impayés.",
  },
];

export default function TransportPage() {
  useProductSeo({
    title: "ERP Transport & Logistique Maroc — Odoo | MSL-iTECH",
    description:
      "Gérez votre flotte, vos réservations et votre facturation avec Odoo. Transport touristique et logistique au Maroc. Implémentation certifiée MSL-iTECH.",
    path: "/odoo-transport-logistique-maroc",
  });

  return (
    <ProductPageShell
      eyebrow="Secteur Transport & Logistique — Maroc"
      title={
        <>
          Votre flotte roule, mais vous ne savez pas exactement combien chaque véhicule vous{" "}
          <span style={{ color: "var(--gold)" }}>coûte et vous rapporte</span>
        </>
      }
      intro="Dans le transport touristique ou la logistique, la rentabilité se joue dans les détails. Sans outil centralisé, ces données se perdent dans des carnets de bord et des factures en retard."
      heroImage={transportHero}
      heroImageAlt="Flotte de véhicules de transport au Maroc gérée avec Odoo"
      metaNote="Démo adaptée à votre activité · Réponse sous 24 à 72h"
      featuresEyebrow="Pour le secteur transport"
      featuresTitle="Ce qu'Odoo apporte au secteur transport"
      features={features}
      whySection={{
        title: "MSL-iTECH pour le transport au Maroc",
        desc: "Que vous opériez une flotte touristique, une activité de transfert ou de la logistique, Odoo s'adapte à votre modèle d'exploitation.",
        points: [
          "Suivi kilométrique et coûts par véhicule",
          "Planning chauffeurs et affectations",
          "Facturation automatique par prestation",
          "Relances et suivi des encaissements",
        ],
      }}
      ctaTitle="Réserver ma démo Transport gratuite"
      ctaSubtitle="Démo adaptée à votre activité · Réponse sous 24 à 72h"
    />
  );
}
