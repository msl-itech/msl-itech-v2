import { FileSearch, HardHat, Receipt, Users } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import btpHero from "@/assets/btp-hero.jpg";

const features = [
  {
    icon: FileSearch,
    title: "CRM & Gestion des appels d'offres",
    desc: "Suivi des opportunités commerciales, gestion des appels d'offres, évaluation des soumissionnaires et automatisation des relances.",
  },
  {
    icon: HardHat,
    title: "Gestion de projet chantier",
    desc: "Planification des tâches, suivi des coûts en temps réel, gestion des ressources et des stocks, diagrammes de Gantt et tableaux Kanban.",
  },
  {
    icon: Receipt,
    title: "Facturation à l'avancement",
    desc: "Génération automatique des situations de travaux et des décomptes mensuels selon l'avancement réel.",
  },
  {
    icon: Users,
    title: "Gestion RH et sous-traitants",
    desc: "Suivi des effectifs chantier, gestion des contrats sous-traitants, pointage et paie.",
  },
];

const faqs = [
  {
    q: "Odoo est-il adapté aux entreprises BTP qui gèrent des marchés publics ?",
    a: "Oui. Odoo CRM permet de gérer le cycle complet des appels d'offres. MSL-iTECH a déjà implémenté cette configuration pour des entreprises BTP marocaines spécialisées dans les marchés publics.",
  },
  {
    q: "Peut-on gérer plusieurs chantiers simultanément dans Odoo ?",
    a: "Oui. Odoo Projet permet de créer autant de projets que nécessaire, avec des ressources, des budgets et des plannings indépendants.",
  },
];

export default function BtpPage() {
  useProductSeo({
    title: "ERP BTP Maroc — Odoo pour Chantiers & Marchés Publics | MSL-iTECH",
    description:
      "Gérez vos chantiers, appels d'offres et facturation avec Odoo. Solution BTP certifiée pour entreprises marocaines. Cas client documenté. Démo gratuite.",
    path: "/odoo-btp-maroc",
    faqs,
    ldId: "ld-faq-btp",
  });

  return (
    <ProductPageShell
      eyebrow="Secteur BTP — Maroc"
      title={
        <>
          Vous gérez 5 chantiers simultanément depuis Excel — un seul incident
          suffit à faire dérailler votre{" "}
          <span style={{ color: "var(--gold)" }}>planning et votre marge</span>
        </>
      }
      intro="Dans le BTP marocain, les entreprises qui gèrent plusieurs chantiers en parallèle sans ERP font face aux mêmes problèmes : suivi des coûts approximatif, retards sur les appels d'offres, facturation à l'avancement manuelle. Odoo centralise tout — et MSL-iTECH l'a déjà implémenté pour des entreprises BTP marocaines."
      heroImage={btpHero}
      heroImageAlt="Chantier BTP marocain piloté avec Odoo"
      metaNote="Voir Odoo configuré pour le BTP marocain · Réponse sous 24 à 72h"
      featuresEyebrow="Cas client AIT OUKHALI TRAVAUX"
      featuresTitle="Ce que MSL-iTECH a déployé pour AIT OUKHALI TRAVAUX"
      features={features}
      whySection={{
        title: "Pourquoi MSL-iTECH pour le BTP marocain",
        desc: "Nous connaissons les contraintes spécifiques du BTP marocain — marchés publics, CNSS, facturation en dirhams. Notre expérience terrain sur des projets BTP réels fait la différence.",
        points: [
          "Expérience cas client BTP au Maroc",
          "Maîtrise du cycle des marchés publics",
          "Configuration CNSS et facturation MAD",
          "Suivi de chantiers multi-sites",
        ],
      }}
      faqs={faqs}
      ctaTitle="Réserver ma démo BTP gratuite"
      ctaSubtitle="Voir Odoo configuré pour le BTP marocain · Réponse sous 24 à 72h"
    />
  );
}