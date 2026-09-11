import { FileSearch, HardHat, Receipt, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { ProductBento, type BentoCard } from "@/components/product/ProductBento";
import { useProductSeo } from "@/hooks/useProductSeo";
import btpHero from "@/assets/btp-hero.webp";

const features = [
  {
    icon: FileSearch,
    title: "CRM & Gestion des appels d'offres",
    desc: "Pipeline AO complet : détection, qualification, retrait du dossier (RC, CPS, plans, BPU, DQE), étude de prix, validation direction, dépôt et suivi de l'ouverture des plis. Motifs de perte enregistrés.",
  },
  {
    icon: HardHat,
    title: "Gestion de projet chantier",
    desc: "Chaque chantier est un projet analytique : budget initial, coût engagé, reste à faire et marge réelle en temps réel. Gantt, Kanban, ressources et stocks.",
  },
  {
    icon: Receipt,
    title: "Facturation à l'avancement",
    desc: "Situations de travaux et décomptes provisoires générés depuis l'avancement déclaré. Retenue de garantie et avance sur approvisionnement traitées au cadrage.",
  },
  {
    icon: Users,
    title: "Gestion RH et sous-traitants",
    desc: "Contrats de sous-traitance imputés au chantier, pointage des ouvriers, paie CNSS, AMO et CIMR, affectation et coût du parc matériel par projet.",
  },
];

const bentoCards: BentoCard[] = [
  {
    icon: HardHat,
    title: "Gestion de chantier",
    desc: "Planification des tâches, suivi des coûts en temps réel, ressources et stocks, Gantt et Kanban.",
    variant: "blue",
    span: "lg:col-span-7",
  },
  {
    icon: FileSearch,
    title: "Appels d'offres",
    desc: "Suivi des opportunités, gestion des AO, évaluation des soumissionnaires et relances automatiques.",
    variant: "gold",
    span: "lg:col-span-5",
  },
  {
    icon: Receipt,
    title: "Facturation à l'avancement",
    desc: "Situations de travaux et décomptes mensuels générés automatiquement selon l'avancement réel.",
    variant: "white",
    span: "lg:col-span-5",
  },
  {
    icon: Users,
    title: "RH & sous-traitants",
    desc: "Effectifs chantier, contrats sous-traitants, pointage et paie centralisés.",
    variant: "bluelight",
    span: "lg:col-span-7",
  },
];

const faqs = [
  {
    q: "Odoo permet-il de gérer le cycle complet d'un appel d'offres public au Maroc ?",
    a: "Oui, via Odoo CRM configuré en pipeline d'appels d'offres. Chaque AO devient une opportunité qui traverse des étapes définies : AO détecté, qualification, dossier retiré (RC, CPS, plans, BPU, DQE), étude de prix, chiffrage, validation direction, dépôt, ouverture des plis, gagné ou perdu. Les documents du dossier sont rattachés à l'opportunité dans Odoo Documents, et les motifs de perte sont enregistrés pour analyser le taux de réussite. Attention à une confusion fréquente : la fonction « appel d'offres » native d'Odoo Achats sert à mettre en concurrence vos fournisseurs, pas à répondre aux appels d'offres de vos clients. Ce second usage demande un pipeline CRM dédié, que MSL-iTECH configure.",
  },
  {
    q: "Comment Odoo gère-t-il les situations de travaux et les décomptes provisoires ?",
    a: "Odoo facture à l'avancement à partir du pourcentage de réalisation déclaré sur le projet ou sur des jalons. Le décompte provisoire mensuel est produit depuis cet avancement, ce qui supprime la ressaisie entre le chef de chantier et la comptabilité. La retenue de garantie et l'avance sur approvisionnement ne sont pas natives dans Odoo : elles se traitent par paramétrage comptable ou par développement spécifique selon la structure de vos marchés. MSL-iTECH tranche ce point au cadrage, avant le devis.",
  },
  {
    q: "Peut-on suivre le déboursé sec et la marge réelle par chantier ?",
    a: "Oui. Chaque chantier est un projet analytique dans Odoo. Les achats de matériaux, les heures de main-d'œuvre pointées, l'affectation du matériel et les factures de sous-traitance s'imputent sur ce projet. Vous comparez à tout moment le budget initial, le coût engagé, le reste à faire et la marge réelle. C'est la différence principale avec un suivi sur tableur : la marge n'est plus calculée en fin de chantier, elle est visible en cours de chantier.",
  },
  {
    q: "Comment gérer les BPU et DQE dans Odoo ?",
    a: "Le bordereau des prix unitaires et le détail quantitatif estimatif se traduisent dans Odoo par une bibliothèque de prix et des devis à lignes structurées. Sur des marchés à forte volumétrie de postes, une personnalisation est généralement nécessaire pour importer les bordereaux et appliquer vos coefficients de frais généraux et de marge. Sur des périmètres plus simples, le paramétrage standard suffit. Le cadrage détermine lequel des deux s'applique à votre cas.",
  },
  {
    q: "Odoo gère-t-il la sous-traitance et les contrats de sous-traitants ?",
    a: "Oui. Les sous-traitants sont des fournisseurs rattachés à un chantier : commandes, réceptions partielles, factures et retenues sont suivies par projet. Vous voyez pour chaque chantier ce qui a été engagé, réceptionné et facturé par sous-traitant, et l'impact sur la marge du chantier.",
  },
  {
    q: "Peut-on suivre le parc matériel et les engins dans Odoo ?",
    a: "Oui, avec les modules Maintenance et Parc automobile. Vous affectez un engin à un chantier, suivez le relevé kilométrique ou les heures de fonctionnement, planifiez la maintenance préventive et imputez le coût d'utilisation au projet concerné. Le matériel cesse d'être une charge globale et devient un coût par chantier.",
  },
  {
    q: "Odoo est-il conforme à la comptabilité marocaine pour une entreprise BTP ?",
    a: "Oui. Odoo se paramètre sur le plan comptable marocain (CGNC), la TVA et les déclarations DGI. Sur la paie, les cotisations CNSS, AMO et CIMR ainsi que l'IR se configurent selon votre convention. Pour le BTP, le point d'attention porte sur le pointage des ouvriers de chantier et son articulation avec la paie — c'est un sujet de cadrage à part entière.",
  },
  {
    q: "Combien de temps prend une implémentation Odoo BTP au Maroc ?",
    a: "La durée dépend du périmètre : nombre de modules, volume de données à reprendre et niveau de personnalisation. MSL-iTECH la chiffre au cadrage gratuit de 30 minutes, avec un devis détaillé sous 48 heures.",
  },
  {
    q: "MSL-iTECH a-t-il déjà déployé Odoo dans le BTP au Maroc ?",
    a: "Oui, et les références sont publiquement vérifiables sur notre fiche partenaire officielle odoo.com — pas seulement déclarées sur notre site. AIT OUKHALI TRAVAUX (BTP et marchés publics), CUCO MATÉRIAUX DE CONSTRUCTION et JCD RENOV figurent parmi nos déploiements documentés. Sur AIT OUKHALI TRAVAUX, le périmètre couvre le CRM et la gestion des appels d'offres, le suivi des opportunités, l'évaluation des soumissionnaires et l'automatisation des relances, puis la gestion de projet et construction avec planification des tâches, suivi des coûts, gestion des ressources et des stocks via diagrammes de Gantt et tableaux Kanban.",
  },
];

const aoSteps = [
  "AO détecté",
  "Qualification",
  "Dossier retiré",
  "Étude de prix",
  "Chiffrage",
  "Validation direction",
  "Déposé",
  "Ouverture des plis",
  "Gagné, ouverture du chantier",
  "Perdu, motif enregistré",
];

export default function BtpPage() {
  useProductSeo({
    title: "Odoo BTP Maroc — Chantiers et marchés publics | MSL-iTECH",
    description:
      "Odoo pour le BTP marocain : appels d'offres, CPS et BPU/DQE, situations de travaux, retenue de garantie, sous-traitance et parc matériel. Partenaire Odoo certifié, cas client vérifiable.",
    path: "/odoo-btp-maroc",
    faqs,
    ldId: "ld-faq-btp",
    service: {
      name: "Implémentation Odoo BTP",
      description:
        "ERP Odoo pour entreprises du BTP au Maroc : appels d'offres, gestion de chantiers, sous-traitance, facturation et marchés publics par MSL-iTECH.",
      serviceType: ["ERP BTP", "Gestion de chantier", "Appels d'offres et marchés publics", "Situations de travaux", "Sous-traitance BTP"],
      areaServed: ["MA"],
    },
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
      metaNote="Voir Odoo configuré pour le BTP marocain · Réponse sous 24h"
      featuresEyebrow="Cas client AIT OUKHALI TRAVAUX"
      featuresTitle="Ce que MSL-iTECH a déployé pour AIT OUKHALI TRAVAUX"
      features={features}
      featuresSlot={
        <ProductBento
          eyebrow="Cas client AIT OUKHALI TRAVAUX"
          title="Ce que MSL-iTECH a déployé pour AIT OUKHALI TRAVAUX"
          chipLabel="Odoo BTP"
          cards={bentoCards}
        />
      }
      whySection={{
        title: "Pourquoi MSL-iTECH pour le BTP marocain",
        desc: "Nous ne présentons pas une démonstration générique. AIT OUKHALI TRAVAUX, CUCO MATÉRIAUX et JCD RENOV sont des déploiements réels, consultables sur notre fiche partenaire Odoo officielle. Et nous vous disons au cadrage ce qui relève du paramétrage standard et ce qui demande un développement spécifique — avant le devis, pas après.",
        points: [
          "Références BTP vérifiables sur odoo.com, pas seulement déclarées",
          "Maîtrise du cycle des marchés publics marocains",
          "Paramétrage CGNC, TVA, DGI, CNSS, AMO et CIMR",
          "Distinction claire entre standard Odoo et développement sur mesure",
        ],
      }}
      faqs={faqs}
      ctaTitle="Réserver ma démo BTP gratuite"
      ctaSubtitle="Voir Odoo configuré pour le BTP marocain · Réponse sous 24h"
      extraSection={
        <section className="bg-brand-bg py-10">
          <div className="container">
            <h2 className="font-heading text-lg font-semibold text-brand-blue mb-4">
              Le cycle d'un appel d'offres BTP dans Odoo
            </h2>
            <ol className="list-decimal list-inside space-y-1 mb-4">
              {aoSteps.map((step) => (
                <li key={step} className="font-body text-sm text-brand-grey">
                  {step}
                </li>
              ))}
            </ol>
            <p className="font-body text-sm text-brand-grey mb-6">
              Un AO gagné bascule automatiquement en chantier, qui hérite du budget, des achats, de la sous-traitance, de la main-d'œuvre, des situations et de la facturation.
            </p>
            <p className="font-body text-sm text-brand-grey">
              Vous recherchez un{" "}
              <Link
                to="/integrateur-odoo-maroc"
                className="font-semibold text-brand-blue underline underline-offset-2 hover:text-brand-blue/80"
              >
                intégrateur Odoo au Maroc
              </Link>{" "}
              pour votre entreprise BTP ? MSL-iTECH est partenaire certifié Odoo, implanté au Maroc.
            </p>
          </div>
        </section>
      }
    />
  );
}
