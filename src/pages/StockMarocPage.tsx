import { Warehouse, RefreshCw, Receipt, ScanLine } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { ProductBento, type BentoCard } from "@/components/product/ProductBento";
import { useProductSeo } from "@/hooks/useProductSeo";
import stockMarocHero from "@/assets/stock-maroc-hero.webp";
import { RelatedResources } from "@/components/product/RelatedResources";

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

const bentoCards: BentoCard[] = [
  {
    icon: Warehouse,
    title: "Inventaire temps réel",
    desc: "Un entrepôt ou plusieurs dépôts régionaux : vision consolidée de votre stock en temps réel.",
    variant: "blue",
    span: "lg:col-span-7",
  },
  {
    icon: RefreshCw,
    title: "Réappro automatique",
    desc: "Seuils par référence et par entrepôt. Odoo génère seul les bons de commande fournisseurs.",
    variant: "gold",
    span: "lg:col-span-5",
  },
  {
    icon: Receipt,
    title: "POS & facturation",
    desc: "Ventes au comptoir, facturation B2B, devis et commandes : tout est relié au stock en temps réel.",
    variant: "white",
    span: "lg:col-span-5",
  },
  {
    icon: ScanLine,
    title: "Lots & péremptions",
    desc: "Pour l'alimentaire, le pharmaceutique ou le cosmétique, Odoo gère lots et dates de péremption.",
    variant: "bluelight",
    span: "lg:col-span-7",
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
    service: {
      name: "Logiciel de gestion de stock Maroc — Odoo",
      description:
        "Mise en place d'Odoo Inventaire pour commerce de gros, distribution, agroalimentaire et logistique au Maroc : traçabilité, multi-dépôts et alertes par MSL-iTECH.",
      serviceType: ["Odoo Inventaire", "Gestion de stock Maroc", "Distribution & logistique"],
      areaServed: ["MA"],
    },
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
      metaNote="Démo adaptée à votre volume et votre secteur · Réponse sous 24h"
      featuresEyebrow="Pour les entreprises à gros volume"
      featuresTitle="Ce qu'Odoo change pour les entreprises à gros volume"
      features={features}
      featuresSlot={
        <ProductBento
          eyebrow="Pour les entreprises à gros volume"
          title="Ce qu'Odoo change pour les entreprises à gros volume"
          chipLabel="Odoo Stock"
          cards={bentoCards}
        />
      }
      faqs={faqs}
      ctaTitle="Réserver ma démo Stock gratuite"
      ctaSubtitle="Démo adaptée à votre volume et votre secteur · Réponse sous 24h"
      extraSection={
        <RelatedResources
          title="Ressources Stock, ERP & IA"
          intro="Comprendre les paliers de gestion de stock au Maroc et anticiper la prochaine étape ERP."
          links={[
            {
              to: "/blog/gestion-stock-maroc-apres-1-5m-mad",
              title: "Gestion de stock après 1,5 M MAD",
              desc: "Les signaux qui indiquent qu'un tableur ne suffit plus et le seuil à partir duquel un ERP devient rentable.",
            },
            {
              to: "/blog/erp-odoo-relances-automatiques-ruptures-stock-ia-maroc",
              title: "Relances automatiques & ruptures de stock par IA",
              desc: "Comment Odoo et l'IA agentique réduisent les ruptures et fluidifient les relances côté client.",
            },
            {
              to: "/blog/migration-excel-vers-odoo-maroc-methode",
              title: "Migration Excel vers Odoo — la méthode",
              desc: "Le plan concret pour sortir d'Excel sans casser l'activité pendant la bascule.",
            },
            {
              to: "/entreprise-multi-sites",
              title: "Entreprise multi-sites",
              desc: "Consolider stock, comptabilité et pilotage entre plusieurs dépôts ou entités.",
            },
            {
              to: "/odoo-transport-logistique-maroc",
              title: "Odoo Transport & Logistique",
              desc: "Flux amont-aval, WMS et tournées coordonnés avec votre ERP.",
            },
            {
              to: "/outils/roi-erp",
              title: "Calculateur ROI ERP",
              desc: "Estimez le gain 12 mois d'un passage à Odoo pour votre activité.",
            },
          ]}
        />
      }
    />
  );
}