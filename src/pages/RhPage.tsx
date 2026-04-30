import { CalendarDays, Banknote, Clock, UserPlus } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import rhHero from "@/assets/rh-hero.jpg";

const features = [
  {
    icon: CalendarDays,
    title: "Congés et absences en libre-service",
    desc: "Vos collaborateurs soumettent leurs demandes depuis leur téléphone. Le responsable valide en un clic. Les soldes se mettent à jour automatiquement.",
  },
  {
    icon: Banknote,
    title: "Paie fiable et conforme",
    desc: "Odoo calcule les fiches de paie en tenant compte des absences, heures supplémentaires et notes de frais. La paie est produite en quelques minutes.",
  },
  {
    icon: Clock,
    title: "Suivi du temps par projet",
    desc: "Vos collaborateurs enregistrent leur temps par projet depuis Odoo Timesheet. Vous visualisez la rentabilité réelle de chaque projet.",
  },
  {
    icon: UserPlus,
    title: "Recrutement structuré",
    desc: "Diffusez vos offres d'emploi, recevez les candidatures dans Odoo, programmez les entretiens et suivez l'avancement de chaque candidat.",
  },
];

export default function RhPage() {
  useProductSeo({
    title: "Odoo RH & Paie — Gestion des ressources humaines | MSL-iTECH",
    description:
      "Automatisez la paie, les congés, les évaluations et le recrutement avec Odoo RH. Implémentation certifiée par MSL-iTECH. Démo gratuite.",
    path: "/odoo-rh-paie",
  });

  return (
    <ProductPageShell
      eyebrow="Odoo RH & Paie"
      title={
        <>
          Votre responsable RH passe ses lundis à traiter des demandes de
          congés — <span style={{ color: "var(--gold)" }}>Odoo</span>{" "}
          l'automatise <em className="font-heading italic">entièrement</em>
        </>
      }
      intro="Demandes de congés par email, notes de frais papier, fiches de paie produites manuellement chaque mois : la gestion RH sans outil centralisé mobilise du temps qualifié sur des tâches répétitives. Odoo RH libère vos équipes."
      heroImage={rhHero}
      heroImageAlt="Tableau de bord Odoo RH et Paie"
      metaNote="Configuré pour votre structure · Sans engagement"
      featuresEyebrow="Ce qu'Odoo RH automatise"
      featuresTitle="Ce qu'Odoo RH automatise pour vous"
      features={features}
      ctaTitle="Réserver ma démo gratuite — RH & Paie"
      ctaSubtitle="Voir Odoo RH configuré pour votre structure · Sans engagement"
    />
  );
}