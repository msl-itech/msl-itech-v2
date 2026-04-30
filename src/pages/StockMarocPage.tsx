import { Warehouse, RefreshCw, Receipt, ScanLine } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import stockMarocHero from "@/assets/stock-maroc-hero.jpg";

const features = [
  {
    icon: Warehouse,
    title: "Inventaire temps réel, multisite",
    desc: "Que vous ayez un entrepôt ou plusieurs dépôts régionaux, Odoo vous donne une vision consolidée de votre stock en temps réel.",
  },
  {
    icon: RefreshCw,
    title: "Commandes automatiques fournisseurs",
    desc: "Définissez vos seuils de réapprovisionnement par référence et par entrepôt. Odoo génère automatiquement les bons de commande.",
  },
  {
    icon: Receipt,
    title: "POS et facturation intégrés",
    desc: "Ventes au comptoir, facturation B2B, devis et commandes clients : tout est relié au stock en temps réel.",
  },
  {
    icon: ScanLine,
    title: "Traçabilité et dates de péremption",
    desc: "Pour le commerce alimentaire, pharmaceutique ou cosmétique, Odoo gère la traçabilité par lot et par date de péremption.",
  },
];

const faqs = [
  {
    q: "Quel logiciel de gestion de stock pour une PME marocaine avec plus de 1.000 références ?",
    a: "Odoo Inventaire est conçu pour gérer des catalogues de plusieurs milliers de références sans perte de performance.",
  },
  {
    q: "Peut-on connecter Odoo à une caisse existante ?",
    a: "Oui, Odoo dispose de son propre module Point de Vente (POS). Dans certains cas, une intégration avec un matériel existant est possible — à évaluer lors de la démo.",
  },
];

export default function StockMarocPage() {
  useProductSeo({
    title:
      "Logiciel Gestion Stock Maroc — Odoo pour Commerce & Distribution | MSL-iTECH",
    description:
      "Gérez votre stock en temps réel avec Odoo. Commerce de gros, distribution, agroalimentaire, logistique au Maroc. À partir de 199 MAD/mois. Démo gratuite.",
    path: "/odoo-gestion-stock-maroc",
    faqs,
    ldId: "ld-faq-stock-maroc",
  });

  return (
    <ProductPageShell
      eyebrow="Commerce & Stock — Maroc"
      title={
        <>
          Votre stock est votre actif le plus important — et vous ne savez pas
          exactement{" "}
          <span style={{ color: "var(--gold)" }}>ce qu'il contient</span> en ce
          moment
        </>
      }
      intro="Pour un négociant, un distributeur ou un grossiste, le stock c'est la trésorerie immobilisée. Un stock mal géré, c'est des ruptures qui font fuir les clients et des surstocks qui plombent la trésorerie."
      heroImage={stockMarocHero}
      heroImageAlt="Entrepôt de distribution piloté avec Odoo au Maroc"
      metaNote="Démo adaptée à votre volume et votre secteur · Réponse sous 24 à 72h"
      featuresEyebrow="Pour les entreprises à gros volume"
      featuresTitle="Ce qu'Odoo change pour les entreprises à gros volume"
      features={features}
      faqs={faqs}
      ctaTitle="Réserver ma démo Stock gratuite"
      ctaSubtitle="Démo adaptée à votre volume et votre secteur · Réponse sous 24 à 72h"
    />
  );
}