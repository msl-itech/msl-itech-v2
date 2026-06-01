import {
  OdooStock,
  OdooMassMailing,
  OdooStockBarcode,
  OdooQualityControl,
} from "@/components/icons/odoo";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { ProductBento, type BentoCard } from "@/components/product/ProductBento";
import { useProductSeo } from "@/hooks/useProductSeo";
import stockHero from "@/assets/stock-hero.webp";

const features = [
  {
    icon: Boxes,
    title: "Inventaire en temps réel sur tous les entrepôts",
    desc: "Chaque entrée et chaque sortie de stock est tracée en temps réel. Vous savez exactement ce que vous avez, où c'est, et ce qui est réservé pour des commandes en cours.",
  },
  {
    icon: BellRing,
    title: "Alertes de réapprovisionnement automatiques",
    desc: "Définissez des seuils minimum par produit. Odoo génère automatiquement les bons de commande fournisseur quand le stock descend sous ce seuil.",
  },
  {
    icon: ScanLine,
    title: "Traçabilité lot par lot",
    desc: "Pour les secteurs qui l'exigent (pharmaceutique, agroalimentaire, médical), Odoo gère la traçabilité complète par numéro de lot et date d'expiration.",
  },
  {
    icon: ClipboardCheck,
    title: "Inventaire physique simplifié",
    desc: "Vos équipes réalisent l'inventaire physique depuis une tablette ou un scanner. Les écarts sont détectés et validés automatiquement.",
  },
];

const bentoCards: BentoCard[] = [
  {
    icon: Boxes,
    title: "Inventaire temps réel",
    desc: "Chaque entrée et sortie tracée en direct sur tous vos entrepôts. Vous savez ce que vous avez, où, et ce qui est réservé.",
    variant: "blue",
    span: "lg:col-span-7",
  },
  {
    icon: BellRing,
    title: "Réappro automatique",
    desc: "Seuils min par produit. Bons de commande fournisseur générés dès que le stock descend.",
    variant: "gold",
    span: "lg:col-span-5",
  },
  {
    icon: ScanLine,
    title: "Traçabilité par lot",
    desc: "Numéros de lot, dates d'expiration, rappels ciblés — pour pharma, agro ou médical.",
    variant: "white",
    span: "lg:col-span-5",
  },
  {
    icon: ClipboardCheck,
    title: "Inventaire physique simplifié",
    desc: "Vos équipes scannent depuis tablette ou douchette. Écarts détectés et validés automatiquement.",
    variant: "bluelight",
    span: "lg:col-span-7",
  },
];

export default function StockPage() {
  useProductSeo({
    title: "Odoo Gestion de Stock — Inventaire en Temps Réel | MSL-iTECH",
    description:
      "Éliminez les ruptures et les surstocks avec Odoo. Traçabilité complète, alertes automatiques, inventaire en temps réel. Implémentation MSL-iTECH.",
    path: "/odoo-stock-inventaire",
  });

  return (
    <ProductPageShell
      eyebrow="Odoo Stock & Inventaire"
      title={
        <>
          Ruptures de stock coûteuses, surstocks qui immobilisent votre
          trésorerie —{" "}
          <span style={{ color: "var(--gold)" }}>Odoo</span> régule les deux{" "}
          <em className="font-heading italic">automatiquement</em>
        </>
      }
      intro="Les entreprises qui gèrent de l'inventaire sans outil dédié peuvent perdre jusqu'à 15–20% de leur valeur de stock chaque année. Odoo Inventaire résout ce problème avec une visibilité en temps réel et des automatisations intelligentes."
      heroImage={stockHero}
      heroImageAlt="Inventaire en temps réel Odoo Stock"
      metaNote="Configuré pour votre entrepôt · Sans engagement"
      featuresEyebrow="Ce que vous gagnez"
      featuresTitle="Ce que vous gagnez avec Odoo Stock"
      features={features}
      featuresSlot={
        <ProductBento
          eyebrow="Ce que vous gagnez"
          title="Ce que vous gagnez avec Odoo Stock"
          chipLabel="Odoo Stock"
          cards={bentoCards}
        />
      }
      ctaTitle="Réserver ma démo gratuite — Stock & Inventaire"
      ctaSubtitle="Voir Odoo Stock configuré pour votre entrepôt · Sans engagement"
    />
  );
}