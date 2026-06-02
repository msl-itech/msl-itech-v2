import { OdooHolidays, OdooPayroll, OdooAttendance, OdooRecruitment } from "@/components/icons/odoo";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { ProductBento, type BentoCard } from "@/components/product/ProductBento";
import { useProductSeo } from "@/hooks/useProductSeo";
import rhHero from "@/assets/rh-hero.webp";

const features = [
  {
    icon: OdooHolidays,
    title: "Congés et absences en libre-service",
    desc: "Vos collaborateurs soumettent leurs demandes depuis leur téléphone. Le responsable valide en un clic. Les soldes se mettent à jour automatiquement.",
  },
  {
    icon: OdooPayroll,
    title: "Paie fiable et conforme",
    desc: "Odoo calcule les fiches de paie en tenant compte des absences, heures supplémentaires et notes de frais. La paie est produite en quelques minutes.",
  },
  {
    icon: OdooAttendance,
    title: "Suivi du temps par projet",
    desc: "Vos collaborateurs enregistrent leur temps par projet depuis Odoo Timesheet. Vous visualisez la rentabilité réelle de chaque projet.",
  },
  {
    icon: OdooRecruitment,
    title: "Recrutement structuré",
    desc: "Diffusez vos offres d'emploi, recevez les candidatures dans Odoo, programmez les entretiens et suivez l'avancement de chaque candidat.",
  },
];

const bentoCards: BentoCard[] = [
  {
    icon: OdooHolidays,
    title: "Congés en libre-service",
    desc: "Demandes depuis le mobile, validation en un clic, soldes mis à jour automatiquement. Fini les tableurs partagés.",
    variant: "blue",
    span: "lg:col-span-7",
  },
  {
    icon: OdooPayroll,
    title: "Paie fiable & conforme",
    desc: "Fiches de paie calculées avec absences, heures sup et notes de frais — produites en quelques minutes.",
    variant: "gold",
    span: "lg:col-span-5",
  },
  {
    icon: OdooAttendance,
    title: "Suivi du temps par projet",
    desc: "Timesheet par projet pour visualiser la rentabilité réelle, en direct.",
    variant: "white",
    span: "lg:col-span-5",
  },
  {
    icon: OdooRecruitment,
    title: "Recrutement structuré",
    desc: "Diffusion d'offres, candidatures centralisées, entretiens planifiés et avancement suivi par candidat.",
    variant: "bluelight",
    span: "lg:col-span-7",
  },
];

const faqs = [
  {
    q: "Odoo RH gère-t-il la paie marocaine (CNSS, IGR, AMO) ?",
    a: "Oui. Odoo Paie est paramétrable pour la législation marocaine : calcul CNSS, AMO, IGR, CIMR, indemnités et primes. MSL-iTECH configure les règles de paie selon votre convention collective et fournit les bulletins conformes.",
  },
  {
    q: "Combien de temps pour déployer Odoo RH et Paie ?",
    a: "Un déploiement RH + Congés + Présences se fait en général en 3 à 6 semaines selon la taille de l'effectif et la complexité de la paie. La reprise de l'historique de paie et la formation des gestionnaires sont incluses dans nos packs.",
  },
  {
    q: "Quel est le tarif d'une mise en place Odoo RH ?",
    a: "L'implémentation Odoo RH s'inscrit dans les packs d'heures MSL-iTECH (de 400€ à 8 500€). Un périmètre RH + Paie + Congés tient généralement dans le pack Pro (40h, 1 700€) à Premium (80h, 3 400€). Tarifs détaillés sur msl-itech.com/tarifs.",
  },
  {
    q: "Les salariés peuvent-ils faire leurs demandes depuis leur téléphone ?",
    a: "Oui. L'application mobile Odoo permet aux salariés de poser leurs congés, déclarer leurs notes de frais, pointer leurs présences et consulter leurs bulletins de paie. Le manager valide depuis la même interface.",
  },
];

export default function RhPage() {
  useProductSeo({
    title: "Odoo RH & Paie — Gestion des ressources humaines | MSL-iTECH",
    description:
      "Automatisez la paie, les congés, les évaluations et le recrutement avec Odoo RH. Implémentation certifiée par MSL-iTECH. Démo gratuite.",
    path: "/odoo-rh-paie",
    faqs,
    ldId: "ld-faq-rh",
    service: {
      name: "Implémentation Odoo RH & Paie",
      description:
        "Mise en place d'Odoo RH, Congés, Présences, Recrutement et Paie (Maroc, Belgique) : automatisation des bulletins, validation des absences et suivi du temps par MSL-iTECH.",
      serviceType: ["Odoo RH", "Paie & bulletins", "Gestion des congés"],
    },
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
      featuresSlot={
        <ProductBento
          eyebrow="Ce qu'Odoo RH automatise"
          title="Ce qu'Odoo RH automatise pour vous"
          chipLabel="Odoo RH"
          cards={bentoCards}
        />
      }
      ctaTitle="Réserver ma démo gratuite — RH & Paie"
      ctaSubtitle="Voir Odoo RH configuré pour votre structure · Sans engagement"
      faqs={faqs}
    />
  );
}