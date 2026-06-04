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
    icon: OdooStock,
    title: "Inventaire en temps réel sur tous les entrepôts",
    desc: "Chaque entrée et chaque sortie de stock est tracée en temps réel. Vous savez exactement ce que vous avez, où c'est, et ce qui est réservé pour des commandes en cours.",
  },
  {
    icon: OdooMassMailing,
    title: "Alertes de réapprovisionnement automatiques",
    desc: "Définissez des seuils minimum par produit. Odoo génère automatiquement les bons de commande fournisseur quand le stock descend sous ce seuil.",
  },
  {
    icon: OdooStockBarcode,
    title: "Traçabilité lot par lot",
    desc: "Pour les secteurs qui l'exigent (pharmaceutique, agroalimentaire, médical), Odoo gère la traçabilité complète par numéro de lot et date d'expiration.",
  },
  {
    icon: OdooQualityControl,
    title: "Inventaire physique simplifié",
    desc: "Vos équipes réalisent l'inventaire physique depuis une tablette ou un scanner. Les écarts sont détectés et validés automatiquement.",
  },
];

const bentoCards: BentoCard[] = [
  {
    icon: OdooStock,
    title: "Inventaire temps réel",
    desc: "Chaque entrée et sortie tracée en direct sur tous vos entrepôts. Vous savez ce que vous avez, où, et ce qui est réservé.",
    variant: "blue",
    span: "lg:col-span-7",
  },
  {
    icon: OdooMassMailing,
    title: "Réappro automatique",
    desc: "Seuils min par produit. Bons de commande fournisseur générés dès que le stock descend.",
    variant: "gold",
    span: "lg:col-span-5",
  },
  {
    icon: OdooStockBarcode,
    title: "Traçabilité par lot",
    desc: "Numéros de lot, dates d'expiration, rappels ciblés — pour pharma, agro ou médical.",
    variant: "white",
    span: "lg:col-span-5",
  },
  {
    icon: OdooQualityControl,
    title: "Inventaire physique simplifié",
    desc: "Vos équipes scannent depuis tablette ou douchette. Écarts détectés et validés automatiquement.",
    variant: "bluelight",
    span: "lg:col-span-7",
  },
];

const faqs = [
  {
    q: "Combien coûte une implémentation Odoo Stock pour une PME ?",
    a: "Les packs MSL-iTECH d'implémentation Odoo vont de 400€ (4h, pack Essentiel) à 8 500€ (200h, pack Elite). Un déploiement Stock seul démarre généralement entre le pack Confort et le pack Pro. Les tarifs sont publiés sur msl-itech.com/tarifs et restent 20 à 50% plus accessibles que les Success Packs Odoo observés sur le marché belge.",
  },
  {
    q: "En combien de temps Odoo Stock est-il opérationnel ?",
    a: "Une mise en service de base d'Odoo Stock prend en général 2 à 4 semaines : reprise des références, configuration des emplacements, paramétrage des seuils de réapprovisionnement et formation des équipes. Les périmètres multi-entrepôts ou avec code-barres prennent un peu plus longtemps.",
  },
  {
    q: "Odoo Stock fonctionne-t-il avec des douchettes code-barres ?",
    a: "Oui. Le module Odoo Barcode est inclus et fonctionne avec n'importe quelle douchette USB/Bluetooth standard, ainsi qu'avec un smartphone ou une tablette via l'application Odoo. Toutes les opérations d'inventaire, réception, transferts et préparations peuvent être scannées.",
  },
  {
    q: "Quelles versions d'Odoo MSL-iTECH déploie-t-il ?",
    a: "Nos consultants sont certifiés Odoo v18 et v19 pour l'instant. Nous déployons les nouveaux projets sur v18 ou v19 selon les modules tiers nécessaires, et assurons les migrations depuis les versions antérieures (v15, v16, v17). Notre équipe monte en version au fil des sorties d'Odoo.",
  },
];

export default function StockPage() {
  useProductSeo({
    title: "Odoo Gestion de Stock — Inventaire en Temps Réel | MSL-iTECH",
    description:
      "Éliminez les ruptures et les surstocks avec Odoo. Traçabilité complète, alertes automatiques, inventaire en temps réel. Implémentation MSL-iTECH.",
    path: "/odoo-stock-inventaire",
    faqs,
    ldId: "ld-faq-stock",
    service: {
      name: "Implémentation Odoo Stock & Inventaire",
      description:
        "Mise en place d'Odoo Inventaire : traçabilité lots/séries, multi-entrepôts, code-barres, alertes de réapprovisionnement et inventaire en temps réel par MSL-iTECH.",
      serviceType: ["Odoo Inventaire", "Gestion d'entrepôt (WMS)", "Traçabilité stock"],
    },
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
      faqs={faqs}
    />
  );
}