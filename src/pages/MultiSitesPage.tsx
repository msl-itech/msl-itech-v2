import { Building2, Warehouse, BarChart3, ShieldCheck } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { ProductBento, type BentoCard } from "@/components/product/ProductBento";
import { useProductSeo } from "@/hooks/useProductSeo";
import heroImg from "@/assets/transport-hero.webp";

const features = [
  {
    icon: Building2,
    title: "Multi-sociétés — une seule instance, plusieurs entités",
    desc: "Odoo permet de gérer plusieurs sociétés légales dans une seule instance. Chaque entité a sa propre comptabilité, ses propres utilisateurs et ses propres règles — mais la direction dispose d'une vue consolidée en temps réel sur l'ensemble du groupe.",
  },
  {
    icon: Warehouse,
    title: "Multi-entrepôts — stock centralisé, transferts automatisés",
    desc: "Gérez plusieurs entrepôts, points de vente ou sites de production depuis un seul système. Les transferts inter-sites sont tracés, les niveaux de stock sont visibles partout, et les règles de réapprovisionnement s'appliquent automatiquement selon les seuils définis par site.",
  },
  {
    icon: BarChart3,
    title: "Reporting consolidé en temps réel",
    desc: "Fini d'attendre les fichiers Excel de chaque responsable de site. Odoo produit des tableaux de bord consolidés par entité, par région ou pour l'ensemble du groupe — disponibles à tout moment, sans export manuel.",
  },
  {
    icon: ShieldCheck,
    title: "Droits d'accès par site et par rôle",
    desc: "Chaque responsable de site voit ses données. La direction voit tout. Les équipes locales ne peuvent pas modifier les données d'un autre site. Les règles de confidentialité et d'accès sont configurées une fois, appliquées partout.",
  },
];

const bentoCards: BentoCard[] = [
  {
    icon: Building2,
    title: "Multi-sociétés, une instance",
    desc: "Plusieurs entités légales dans une seule instance — comptabilité séparée, vue consolidée temps réel.",
    variant: "blue",
    span: "lg:col-span-7",
  },
  {
    icon: Warehouse,
    title: "Multi-entrepôts unifiés",
    desc: "Stock centralisé, transferts inter-sites tracés, réapprovisionnement automatique par seuils.",
    variant: "gold",
    span: "lg:col-span-5",
  },
  {
    icon: BarChart3,
    title: "Reporting consolidé",
    desc: "Tableaux de bord par entité, par région ou pour le groupe — sans export manuel.",
    variant: "white",
    span: "lg:col-span-5",
  },
  {
    icon: ShieldCheck,
    title: "Droits par site & rôle",
    desc: "Chaque responsable voit ses données, la direction voit tout. Règles configurées une fois.",
    variant: "bluelight",
    span: "lg:col-span-7",
  },
];

const faqs = [
  {
    q: "Odoo peut-il gérer plusieurs sociétés légalement distinctes dans une seule instance ?",
    a: "Oui. La fonctionnalité multi-sociétés d'Odoo permet de gérer des entités légalement distinctes dans une même instance — avec une comptabilité séparée par entité et une vision consolidée pour la direction. MSL-iTECH configure les règles inter-sociétés (facturation interne, transferts de stock, consolidation financière) selon votre structure réelle.",
  },
  {
    q: "Comment Odoo gère-t-il les stocks entre plusieurs entrepôts ou sites ?",
    a: "Odoo intègre nativement la gestion multi-entrepôts. Chaque site a son propre stock, ses propres règles de réapprovisionnement et ses propres flux de réception/expédition. Les transferts inter-entrepôts sont tracés et validés selon des workflows que vous définissez. La vision consolidée est disponible en temps réel depuis le siège.",
  },
  {
    q: "Faut-il une instance Odoo par filiale ou une seule pour tout le groupe ?",
    a: "Dans la majorité des cas, une seule instance avec la configuration multi-sociétés est préférable — elle simplifie la maintenance, réduit les coûts de licence et facilite la consolidation. MSL-iTECH évalue votre situation spécifique et recommande l'architecture adaptée avant de commencer.",
  },
];

export default function MultiSitesPage() {
  useProductSeo({
    title: "Odoo pour entreprises multi-sites — ERP centralisé, données unifiées | MSL-iTECH",
    description:
      "Gérez plusieurs sites, entrepôts ou filiales depuis un seul Odoo. MSL-iTECH implémente des architectures multi-sociétés et multi-entrepôts pour les entreprises structurées. Partenaire officiel certifié.",
    path: "/entreprise-multi-sites",
    faqs,
    ldId: "ld-faq-multi-sites",
  });

  return (
    <ProductPageShell
      eyebrow="Entreprise multi-sites"
      title={
        <>
          Vous gérez plusieurs sites — et chacun fonctionne encore en{" "}
          <span style={{ color: "var(--gold)" }}>silo</span>
        </>
      }
      intro="Deux entrepôts qui ne se voient pas. Des filiales avec leurs propres tableaux Excel. Un siège qui attend les reportings de chaque site pour avoir une vision consolidée. Odoo unifie tout — stock, comptabilité, RH, CRM — en temps réel, quel que soit le nombre de sites."
      heroImage={heroImg}
      heroImageAlt="Architecture Odoo multi-sites et multi-sociétés"
      metaNote="Cadrage 30 minutes · Sans engagement · Réponse sous 24h"
      featuresEyebrow="L'architecture Odoo multi-sites"
      featuresTitle="L'architecture Odoo pour les structures multi-sites"
      features={features}
      featuresSlot={
        <ProductBento
          eyebrow="L'architecture Odoo multi-sites"
          title="L'architecture Odoo pour les structures multi-sites"
          chipLabel="Entreprise multi-sites"
          cards={bentoCards}
        />
      }
      whySection={{
        title: "Ce que MSL-iTECH apporte sur les projets multi-sites",
        desc: "Les projets multi-sites sont techniquement plus complexes qu'une implémentation mono-site. Ils requièrent une architecture pensée dès le départ — les erreurs de configuration initiale coûtent cher à corriger. Nos consultants certifiés Odoo cadrent le projet avec vous avant d'écrire la moindre configuration.",
        points: [
          "Audit de l'architecture existante avant configuration",
          "Définition des règles inter-sociétés et inter-entrepôts",
          "Configuration des droits d'accès par site et par rôle",
          "Migration des données de chaque entité",
          "Formation des équipes locales et de la direction",
          "Partenaire officiel Odoo — vérifiable sur odoo.com/partners",
        ],
      }}
      faqs={faqs}
      ctaTitle="Réserver ma démo gratuite — Entreprise multi-sites"
      ctaSubtitle="Cadrage de votre architecture · 30 minutes · Sans engagement · Réponse sous 24h"
    />
  );
}