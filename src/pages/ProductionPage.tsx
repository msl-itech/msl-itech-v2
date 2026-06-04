import { OdooMrp, OdooMrpPlm, OdooQualityControl, OdooMrpMaintenance } from "@/components/icons/odoo";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { ProductBento, type BentoCard } from "@/components/product/ProductBento";
import { useProductSeo } from "@/hooks/useProductSeo";
import productionHero from "@/assets/production-hero.webp";

const features = [
  {
    icon: OdooMrp,
    title: "Ordres de fabrication automatiques",
    desc: "Dès qu'une commande client est validée, Odoo génère automatiquement l'ordre de fabrication correspondant avec les quantités, les nomenclatures et le planning.",
  },
  {
    icon: OdooMrpPlm,
    title: "Gestion des nomenclatures (BoM)",
    desc: "Définissez vos recettes de fabrication une seule fois. Odoo calcule automatiquement les besoins en matières premières et alerte si un composant manque.",
  },
  {
    icon: OdooQualityControl,
    title: "Suivi qualité intégré",
    desc: "Points de contrôle qualité à chaque étape de production. Non-conformités détectées avant l'expédition. Traçabilité complète des lots produits.",
  },
  {
    icon: OdooMrpMaintenance,
    title: "Maintenance préventive",
    desc: "Planifiez la maintenance de vos équipements, suivez leur historique et recevez des alertes avant les pannes prévues.",
  },
];

const bentoCards: BentoCard[] = [
  {
    icon: OdooMrp,
    title: "Ordres de fabrication automatiques",
    desc: "Dès la commande client validée, l'OF est généré : quantités, nomenclatures et planning, sans ressaisie.",
    variant: "blue",
    span: "lg:col-span-7",
  },
  {
    icon: OdooMrpPlm,
    title: "Nomenclatures (BoM)",
    desc: "Définissez vos recettes une fois. Besoins en composants calculés, alertes en cas de manque.",
    variant: "gold",
    span: "lg:col-span-5",
  },
  {
    icon: OdooQualityControl,
    title: "Qualité intégrée",
    desc: "Points de contrôle à chaque étape, non-conformités détectées avant l'expédition, lots tracés.",
    variant: "white",
    span: "lg:col-span-5",
  },
  {
    icon: OdooMrpMaintenance,
    title: "Maintenance préventive",
    desc: "Maintenance planifiée, historique équipements et alertes avant pannes prévues.",
    variant: "bluelight",
    span: "lg:col-span-7",
  },
];

const faqs = [
  {
    q: "Odoo Production convient-il à une PME industrielle de 10 à 50 personnes ?",
    a: "Oui. Odoo MRP est conçu pour les PME : nomenclatures multi-niveaux, ordres de fabrication, planification de capacité, contrôle qualité et maintenance. C'est exactement le segment où nous le déployons (PME 10 à 50 salariés, CA 500K€ à 5M€+).",
  },
  {
    q: "Combien coûte une implémentation Odoo Production ?",
    a: "Un déploiement Production complet (MRP + PLM + Qualité + Maintenance) s'inscrit généralement entre le pack Premium (80h, 3 400€) et le pack Elite (200h, 8 500€) selon la complexité des nomenclatures et le nombre de postes de travail. Les packs MSL-iTECH sont 20 à 50% plus accessibles que les Success Packs Odoo marché belge.",
  },
  {
    q: "Peut-on lier les commandes clients aux ordres de fabrication automatiquement ?",
    a: "Oui. Odoo génère automatiquement les ordres de fabrication depuis les commandes clients dès qu'une référence est marquée \"à produire\". La traçabilité va de la commande à la livraison, en passant par les besoins composants et les achats.",
  },
  {
    q: "Quelle version d'Odoo pour la production ?",
    a: "Nos consultants sont certifiés Odoo v18 et v19 pour l'instant. Nous déployons Odoo Production sur v18 ou v19 selon le projet, et montons en version au fil des sorties d'Odoo. La v18 apporte notamment une refonte du planning MRP et des écrans atelier optimisés tablette.",
  },
];

export default function ProductionPage() {
  useProductSeo({
    title: "Odoo Production & Fabrication PME — MSL-iTECH",
    description:
      "Planifiez votre production, gérez vos ordres de fabrication et contrôlez la qualité avec Odoo. Implémentation certifiée MSL-iTECH.",
    path: "/odoo-production-fabrication",
    faqs,
    ldId: "ld-faq-production",
    service: {
      name: "Implémentation Odoo Fabrication (MRP)",
      description:
        "Déploiement d'Odoo MRP, Qualité, Maintenance et PLM : ordres de fabrication, nomenclatures, planification d'atelier et contrôle qualité par MSL-iTECH.",
      serviceType: ["Odoo MRP", "Gestion de production", "Qualité & maintenance"],
    },
  });

  return (
    <ProductPageShell
      eyebrow="Odoo Production & Fabrication"
      title={
        <>
          Vos ordres de fabrication se créent encore manuellement —{" "}
          <span style={{ color: "var(--gold)" }}>Odoo</span> les génère{" "}
          <em className="font-heading italic">automatiquement</em> depuis vos
          commandes clients
        </>
      }
      intro="Dans une entreprise industrielle sans ERP intégré, le chemin d'une commande client jusqu'à l'ordre de fabrication passe souvent par 3 ou 4 interlocuteurs, des emails et des feuilles Excel. Odoo Production court-circuite tout ça."
      heroImage={productionHero}
      heroImageAlt="Atelier de production Odoo Manufacturing"
      metaNote="Configuré pour votre atelier · Sans engagement"
      featuresEyebrow="Dans votre atelier"
      featuresTitle="Ce qu'Odoo Production change dans votre atelier"
      features={features}
      featuresSlot={
        <ProductBento
          eyebrow="Dans votre atelier"
          title="Ce qu'Odoo Production change dans votre atelier"
          chipLabel="Odoo Production"
          cards={bentoCards}
        />
      }
      ctaTitle="Réserver ma démo gratuite — Production & Fabrication"
      ctaSubtitle="Voir Odoo Production configuré pour votre atelier · Sans engagement"
      faqs={faqs}
    />
  );
}