import { Calculator, FileText, Receipt, Wallet } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import financeHero from "@/assets/finance-hero.webp";

const features = [
  {
    icon: Calculator,
    title: "Comptabilité automatisée",
    desc: "Chaque vente et chaque achat génère automatiquement les écritures comptables correspondantes. Votre plan comptable est toujours à jour, sans ressaisie manuelle.",
  },
  {
    icon: FileText,
    title: "Facturation professionnelle",
    desc: "Créez des factures personnalisées, envoyez-les par email avec suivi d'ouverture, et proposez le paiement en ligne. Odoo génère automatiquement les rappels pour les impayés.",
  },
  {
    icon: Receipt,
    title: "Notes de frais sans friction",
    desc: "Vos collaborateurs photographient leurs justificatifs depuis leur téléphone. Les notes de frais sont validées en ligne, comptabilisées automatiquement et remboursées à la prochaine paie.",
  },
  {
    icon: Wallet,
    title: "Trésorerie en temps réel",
    desc: "Tableau de bord trésorerie actualisé en permanence, prévisions de flux, rapprochement bancaire automatique. Vous savez à tout moment ce que vous avez en banque.",
  },
];

const faqs = [
  {
    q: "Odoo Finance est-il conforme à la réglementation comptable belge ?",
    a: "Oui. Odoo intègre le plan comptable belge (PCMN), les taux de TVA belges et les formats de déclarations fiscales. MSL-iTECH configure la localisation belge lors de l'implémentation.",
  },
  {
    q: "Odoo Finance est-il adapté à la réglementation marocaine ?",
    a: "Odoo peut être configuré pour accompagner votre mise en conformité selon les exigences applicables à votre secteur et votre calendrier d'obligation. MSL-iTECH suit l'évolution des textes de la DGI et adapte les implémentations en conséquence.",
  },
  {
    q: "Mon expert-comptable peut-il continuer à travailler avec Odoo ?",
    a: "Absolument. Odoo génère tous les exports comptables standard. Votre expert-comptable peut accéder à un espace dédié ou travailler à partir des exports.",
  },
];

export default function FinancePage() {
  useProductSeo({
    title: "Odoo Finance & Comptabilité PME — MSL-iTECH",
    description:
      "Pilotez votre trésorerie et automatisez votre comptabilité avec Odoo. Implémentation certifiée MSL-iTECH. Belgique & Maroc. Démo gratuite.",
    path: "/odoo-finance-comptabilite",
    faqs,
    ldId: "ld-faq-finance",
  });

  return (
    <ProductPageShell
      eyebrow="Odoo Finance & Comptabilité"
      title={
        <>
          Vous pilotez votre trésorerie à vue —{" "}
          <span style={{ color: "var(--gold)" }}>Odoo</span> vous donne les
          données financières en{" "}
          <em className="font-heading italic">temps réel</em>
        </>
      }
      intro="Clôtures de fin de mois stressantes, rapprochements bancaires manuels, relances impayés chronophages : la gestion financière d'une PME sans outil intégré coûte des heures chaque semaine et produit des erreurs coûteuses. Odoo Finance automatise l'essentiel et vous donne une vision claire à tout moment."
      heroImage={financeHero}
      heroImageAlt="Tableau de bord financier Odoo Finance"
      metaNote="30 minutes · Sans engagement · Configuré pour votre structure"
      featuresEyebrow="Ce qu'Odoo Finance résout"
      featuresTitle="Ce qu'Odoo Finance résout pour vous"
      features={features}
      whySection={{
        title: "MSL-iTECH configure Odoo Finance pour votre contexte",
        desc: "La comptabilité belge et la comptabilité marocaine ont des exigences différentes — plan comptable, TVA, obligations déclaratives. Nos consultants configurent Odoo selon les normes de votre pays et de votre secteur.",
        points: [
          "Localisation belge (PCMN, TVA, déclarations)",
          "Configuration adaptée aux exigences marocaines",
          "Suivi de l'évolution des textes DGI",
          "Espace dédié pour votre expert-comptable",
        ],
      }}
      faqs={faqs}
      ctaTitle="Réserver ma démo gratuite — Finance & Comptabilité"
      ctaSubtitle="Voir Odoo Finance configuré pour votre structure · 30 minutes · Sans engagement"
    />
  );
}