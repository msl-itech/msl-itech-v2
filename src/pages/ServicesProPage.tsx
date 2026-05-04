import { Kanban, Timer, CalendarRange, LifeBuoy } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import servicesHero from "@/assets/services-hero.webp";

const features = [
  {
    icon: Kanban,
    title: "Gestion de projet intégrée",
    desc: "Chaque projet a son tableau de bord : tâches, ressources, budget, avancement. Vos clients peuvent accéder à un portail dédié pour suivre l'avancement.",
  },
  {
    icon: Timer,
    title: "Timesheet → Facturation automatique",
    desc: "Chaque heure saisie dans Odoo Timesheet peut générer automatiquement une ligne de facturation. Vous définissez les règles — forfait, régie, jalons.",
  },
  {
    icon: CalendarRange,
    title: "Planification des ressources",
    desc: "Visualisez la charge de vos équipes sur un calendrier consolidé. Identifiez les surcharges avant qu'elles posent problème.",
  },
  {
    icon: LifeBuoy,
    title: "Support client avec tickets",
    desc: "Gérez les demandes de support de vos clients avec un système de tickets intégré. SLA, priorités, historique par client.",
  },
];

export default function ServicesProPage() {
  useProductSeo({
    title: "Odoo Services Professionnels — Projet & Facturation | MSL-iTECH",
    description:
      "Pilotez vos projets, facturez au temps passé et optimisez vos ressources avec Odoo. Pour cabinets, ESN et sociétés de services. MSL-iTECH.",
    path: "/odoo-services-professionnels",
  });

  return (
    <ProductPageShell
      eyebrow="Odoo Services Professionnels"
      title={
        <>
          Vos consultants travaillent mais vous ne savez pas combien vous avez{" "}
          <span style={{ color: "var(--gold)" }}>réellement facturé</span> ce
          mois-ci
        </>
      }
      intro="Pour les entreprises de services, la rentabilité par projet est le nerf de la guerre. Sans outil intégré, les heures passées ne sont pas toutes tracées, certaines ne sont pas facturées, et vous pilotez votre rentabilité avec un mois de retard."
      heroImage={servicesHero}
      heroImageAlt="Tableau de bord projets et timesheet Odoo"
      metaNote="Configuré pour votre cabinet ou ESN · Sans engagement"
      featuresEyebrow="Pour les entreprises de services"
      featuresTitle="Ce qu'Odoo change pour les entreprises de services"
      features={features}
      ctaTitle="Réserver ma démo gratuite — Services Professionnels"
      ctaSubtitle="Voir Odoo configuré pour votre cabinet ou ESN · Sans engagement"
    />
  );
}