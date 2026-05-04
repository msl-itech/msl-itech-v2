import { Factory, ListTree, ShieldCheck, Wrench } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import productionHero from "@/assets/production-hero.webp";

const features = [
  {
    icon: Factory,
    title: "Ordres de fabrication automatiques",
    desc: "Dès qu'une commande client est validée, Odoo génère automatiquement l'ordre de fabrication correspondant avec les quantités, les nomenclatures et le planning.",
  },
  {
    icon: ListTree,
    title: "Gestion des nomenclatures (BoM)",
    desc: "Définissez vos recettes de fabrication une seule fois. Odoo calcule automatiquement les besoins en matières premières et alerte si un composant manque.",
  },
  {
    icon: ShieldCheck,
    title: "Suivi qualité intégré",
    desc: "Points de contrôle qualité à chaque étape de production. Non-conformités détectées avant l'expédition. Traçabilité complète des lots produits.",
  },
  {
    icon: Wrench,
    title: "Maintenance préventive",
    desc: "Planifiez la maintenance de vos équipements, suivez leur historique et recevez des alertes avant les pannes prévues.",
  },
];

export default function ProductionPage() {
  useProductSeo({
    title: "Odoo Production & Fabrication PME — MSL-iTECH",
    description:
      "Planifiez votre production, gérez vos ordres de fabrication et contrôlez la qualité avec Odoo. Implémentation certifiée MSL-iTECH.",
    path: "/odoo-production-fabrication",
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
      ctaTitle="Réserver ma démo gratuite — Production & Fabrication"
      ctaSubtitle="Voir Odoo Production configuré pour votre atelier · Sans engagement"
    />
  );
}