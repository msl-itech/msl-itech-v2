import {
  Users,
  BellRing,
  FileText,
  BarChart3,
} from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import crmHero from "@/assets/crm-hero.webp";

const features = [
  {
    icon: Users,
    title: "Pipeline centralisé et visible",
    desc: "Chaque opportunité commerciale a une fiche complète : contact, historique, valeur estimée, prochaine action. Votre direction voit le pipeline consolidé en temps réel. Vos commerciaux savent exactement quoi faire chaque matin.",
  },
  {
    icon: BellRing,
    title: "Relances automatisées, zéro oubli",
    desc: "Odoo génère automatiquement des rappels de relance selon les règles que vous définissez. Plus jamais un prospect oublié après un premier contact positif.",
  },
  {
    icon: FileText,
    title: "Devis professionnels en 2 clics",
    desc: "Créez des devis personnalisés depuis la fiche opportunité, envoyez-les directement par email et suivez leur ouverture. Vos clients signent et paient en ligne via des plateformes sécurisées.",
  },
  {
    icon: BarChart3,
    title: "Reporting commercial en temps réel",
    desc: "Taux de conversion par commercial, valeur du pipeline par secteur, délai moyen de signature : tous vos indicateurs clés disponibles sans exporter la moindre donnée.",
  },
];

const faqs = [
  {
    q: "Odoo CRM est-il adapté aux PME de moins de 20 personnes ?",
    a: "Oui. Odoo CRM est conçu pour s'adapter à la taille de l'équipe. Une PME de 5 commerciaux tirera autant de valeur d'Odoo CRM qu'une structure de 50 — la configuration est simplement allégée. MSL-iTECH propose des packs d'implémentation spécifiquement calibrés pour les PME.",
  },
  {
    q: "Combien de temps faut-il pour implémenter Odoo CRM ?",
    a: "Pour une PME standard, l'implémentation du module CRM prend entre 2 et 4 semaines selon la complexité du cycle de vente et le volume de données à migrer.",
  },
  {
    q: "Peut-on migrer nos données depuis Excel ou un autre CRM ?",
    a: "Oui. MSL-iTECH réalise la migration complète de vos données existantes vers Odoo CRM. La migration est incluse dans les packs Avancé, Premium, VIP et Elite.",
  },
];

export default function CrmPage() {
  useProductSeo({
    title: "Odoo CRM & Ventes — Pilotez vos commerciaux | MSL-iTECH",
    description:
      "Centralisez votre pipeline commercial avec Odoo CRM. Implémentation certifiée par MSL-iTECH. Belgique, Maroc, Canada. Démo gratuite.",
    path: "/odoo-crm-ventes",
    faqs,
    ldId: "ld-faq-crm",
  });

  return (
    <ProductPageShell
      eyebrow="Odoo CRM & Ventes"
      title={
        <>
          Vos commerciaux travaillent encore chacun de leur côté —{" "}
          <span style={{ color: "var(--gold)" }}>Odoo CRM</span> centralise tout
          en <em className="font-heading italic">temps réel</em>
        </>
      }
      intro="Leads perdus, relances oubliées, pipeline illisible : si votre équipe commerciale gère encore ses contacts dans Excel ou dans sa tête, vous perdez des opportunités à chaque cycle. Odoo CRM élimine ce problème en centralisant leads, opportunités, devis et relances dans un seul outil — visible par tous, en temps réel."
      heroImage={crmHero}
      heroImageAlt="Pipeline commercial Odoo CRM centralisé"
      metaNote="30 minutes · Sans engagement · Configuré pour votre secteur"
      featuresEyebrow="Ce qu'Odoo CRM change"
      featuresTitle="Ce qu'Odoo CRM change concrètement"
      features={features}
      whySection={{
        title: "Pourquoi faire appel à MSL-iTECH pour votre CRM Odoo",
        desc: "Un CRM mal paramétré crée plus de résistance qu'il n'en supprime. Nos consultants certifiés Odoo adaptent la configuration à votre cycle de vente réel — pas à un modèle générique. Nous migrons vos données existantes, formons vos équipes et restons disponibles après la mise en production.",
        points: [
          "Consultants certifiés Odoo",
          "Configuration adaptée à votre cycle de vente réel",
          "Migration complète de vos données existantes",
          "Formation des équipes et support post-production",
        ],
      }}
      faqs={faqs}
      ctaTitle="Réserver ma démo gratuite — CRM & Ventes"
      ctaSubtitle="Voir Odoo CRM configuré pour votre secteur · 30 minutes · Sans engagement"
    />
  );
}