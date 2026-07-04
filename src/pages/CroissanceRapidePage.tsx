import { TrendingUp, Rocket, Eye, Zap } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { ProductBento, type BentoCard } from "@/components/product/ProductBento";
import { useProductSeo } from "@/hooks/useProductSeo";
import heroImg from "@/assets/services-hero.webp";
import { RelatedResources } from "@/components/product/RelatedResources";

const features = [
  {
    icon: TrendingUp,
    title: "Un ERP qui grandit avec vous",
    desc: "Odoo est modulaire par conception. Vous démarrez avec les modules critiques — CRM, facturation, stock — et vous étendez à la RH, la production ou le marketing au fil de votre développement. Pas besoin de changer d'outil quand vous passez un cap.",
  },
  {
    icon: Rocket,
    title: "Onboarding rapide pour vos nouvelles recrues",
    desc: "Un processus structuré dans Odoo s'apprend vite. Vos nouveaux collaborateurs suivent des workflows clairs depuis le premier jour — pas des habitudes non documentées que chaque équipe réinvente. Le temps de montée en compétence se réduit, la qualité d'exécution s'uniformise.",
  },
  {
    icon: Eye,
    title: "Visibilité dirigeant en temps réel",
    desc: "Plus votre organisation grandit, plus vous avez besoin de données fiables pour décider vite. Odoo centralise tous vos indicateurs — commercial, financier, opérationnel — dans des tableaux de bord accessibles à tout moment, depuis n'importe où.",
  },
  {
    icon: Zap,
    title: "Déploiement qui ne ralentit pas votre activité",
    desc: "Une croissance rapide ne peut pas se permettre un projet ERP qui mobilise vos équipes pendant 6 mois. MSL-iTECH déploie par blocs fonctionnels priorisés — chaque bloc apporte de la valeur immédiatement, sans attendre la fin du projet pour voir les premiers bénéfices.",
  },
];

const bentoCards: BentoCard[] = [
  {
    icon: TrendingUp,
    title: "Un ERP qui grandit avec vous",
    desc: "Démarrez sur les modules critiques, étendez à la RH, production ou marketing au fil du développement.",
    variant: "blue",
    span: "lg:col-span-7",
  },
  {
    icon: Rocket,
    title: "Onboarding rapide",
    desc: "Workflows clairs dès le premier jour — temps de montée en compétence réduit, qualité uniformisée.",
    variant: "gold",
    span: "lg:col-span-5",
  },
  {
    icon: Eye,
    title: "Visibilité dirigeant temps réel",
    desc: "Indicateurs commercial, financier, opérationnel centralisés et accessibles partout.",
    variant: "white",
    span: "lg:col-span-5",
  },
  {
    icon: Zap,
    title: "Déploiement non-bloquant",
    desc: "Par blocs fonctionnels priorisés — chaque bloc apporte de la valeur immédiatement.",
    variant: "bluelight",
    span: "lg:col-span-7",
  },
];

const faqs = [
  {
    q: "Quel est le bon moment pour implémenter un ERP dans une entreprise en croissance ?",
    a: "Le meilleur moment est juste avant d'en avoir absolument besoin — pas après que les processus aient explosé. En pratique, les signaux qui indiquent qu'il est temps : des erreurs de facturation récurrentes, des reportings qui prennent plus d'une journée à produire, des commerciaux qui gèrent leurs contacts en dehors d'un système partagé. Si vous reconnaissez ces situations, l'implémentation doit commencer maintenant.",
  },
  {
    q: "Odoo peut-il s'adapter si notre modèle d'affaires évolue rapidement ?",
    a: "Oui. La modularité d'Odoo est précisément conçue pour accompagner l'évolution des modèles d'affaires. Vous pouvez ajouter des modules, reconfigurer des workflows ou intégrer de nouvelles applications sans changer de plateforme. MSL-iTECH conçoit les architectures avec cette évolutivité en tête dès la phase de cadrage.",
  },
  {
    q: "Comment éviter qu'un projet ERP ralentisse notre activité pendant la croissance ?",
    a: "La clé est le séquençage. MSL-iTECH déploie Odoo par blocs fonctionnels — chaque bloc est livré, testé et utilisé avant de passer au suivant. Vos équipes ne sont jamais mobilisées sur l'ensemble du périmètre en même temps. Le projet avance en parallèle de votre activité, pas à sa place.",
  },
];

export default function CroissanceRapidePage() {
  useProductSeo({
    title: "Odoo pour entreprise en croissance rapide — ERP évolutif | MSL-iTECH",
    description:
      "Votre croissance dépasse vos outils actuels ? MSL-iTECH implémente Odoo pour les structures en forte croissance. Architecture évolutive, déploiement rapide, partenaire officiel certifié.",
    path: "/structure-en-croissance",
    faqs,
    ldId: "ld-faq-croissance",
  });

  return (
    <ProductPageShell
      eyebrow="Structure en croissance"
      title={
        <>
          Votre croissance est une bonne nouvelle —{" "}
          <span style={{ color: "var(--gold)" }}>à condition</span> que vos
          outils <em className="font-heading italic">suivent</em>
        </>
      }
      intro="Vous recrutez, vous ouvrez de nouveaux marchés, vos volumes augmentent. Et en parallèle : vos processus craquent, vos équipes improvisent, et chaque nouvelle embauche révèle un peu plus les limites de votre organisation actuelle. La croissance rapide sans infrastructure adaptée transforme une opportunité en crise opérationnelle."
      heroImage={heroImg}
      heroImageAlt="Odoo ERP pour entreprise en forte croissance"
      metaNote="Cadrage 30 minutes · Sans engagement · Réponse sous 24h"
      featuresEyebrow="Odoo comme infrastructure de croissance"
      featuresTitle="Une infrastructure pensée pour absorber votre croissance"
      features={features}
      featuresSlot={
        <ProductBento
          eyebrow="Odoo comme infrastructure de croissance"
          title="Une infrastructure pensée pour absorber votre croissance"
          chipLabel="Structure en croissance"
          cards={bentoCards}
        />
      }
      whySection={{
        title: "Pourquoi MSL-iTECH est le bon partenaire pour une structure en croissance",
        desc: "Les entreprises en croissance rapide ont besoin d'un partenaire qui comprend l'urgence sans sacrifier la rigueur. Nous avons configuré Odoo pour des structures qui doublaient leur effectif en moins de 18 mois. Nous savons quels modules déployer en premier, quelles erreurs d'architecture éviter dès le départ, et comment former des équipes qui changent vite.",
        points: [
          "Cadrage express : diagnostic et plan de déploiement en moins de 2 semaines",
          "Déploiement par sprints — valeur opérationnelle à chaque étape",
          "Architecture conçue pour absorber la croissance sans refonte",
          "Formation adaptée aux équipes en mouvement",
          "Support prioritaire — réponse sous 24h",
          "Partenaire officiel Odoo — vérifiable sur odoo.com/partners",
        ],
      }}
      faqs={faqs}
      ctaTitle="Réserver ma démo gratuite — Structure en croissance"
      ctaSubtitle="Cadrage de votre projet · 30 minutes · Sans engagement · Réponse sous 24h"
      extraSection={
        <RelatedResources
          title="Ressources croissance & structuration"
          intro="Les leviers concrets pour absorber la croissance : sortir d'Excel, choisir la bonne architecture Odoo et fluidifier le cycle commercial."
          links={[
            {
              to: "/blog/migration-excel-vers-odoo-maroc-methode",
              title: "Migration Excel vers Odoo — la méthode",
              desc: "Le plan concret pour sortir d'Excel sans casser l'activité en pleine croissance.",
            },
            {
              to: "/blog/odoo-saas-on-premise-hybride-maroc-2026",
              title: "SaaS, on-premise ou hybride ?",
              desc: "Le choix d'architecture qui conditionne votre capacité à scaler vite.",
            },
            {
              to: "/blog/devis-encaissement-odoo-automatisation-roi-maroc",
              title: "Devis → encaissement : automatiser le cycle",
              desc: "Réduire le temps de traitement commercial-comptable quand les volumes explosent.",
            },
            {
              to: "/blog/erp-odoo-relances-automatiques-ruptures-stock-ia-maroc",
              title: "Relances & ruptures de stock par IA",
              desc: "Fiabiliser opérations et recouvrement pendant les phases de forte croissance.",
            },
            {
              to: "/entreprise-multi-sites",
              title: "Entreprise multi-sites",
              desc: "Anticiper l'architecture multi-entités quand une deuxième filiale se profile.",
            },
            {
              to: "/outils/roi-erp",
              title: "Calculateur ROI ERP",
              desc: "Chiffrer le gain 12 mois d'un déploiement Odoo dans votre contexte.",
            },
          ]}
        />
      }
    />
  );
}