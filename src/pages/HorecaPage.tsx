import { Boxes, Receipt, CalendarCheck, Users } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import horecaHero from "@/assets/horeca-hero.jpg";

const features = [
  {
    icon: Boxes,
    title: "Stock en temps réel, zéro rupture",
    desc: "Chaque ingrédient utilisé est déduit automatiquement du stock. Vous recevez une alerte avant la rupture. Les commandes fournisseurs se génèrent automatiquement selon vos seuils.",
  },
  {
    icon: Receipt,
    title: "Caisse et facturation intégrées",
    desc: "Point de vente Odoo connecté directement à la comptabilité. Chaque encaissement est comptabilisé en temps réel. La configuration peut être préparée pour accompagner l'évolution des exigences liées à la facturation électronique au Maroc.",
  },
  {
    icon: CalendarCheck,
    title: "Réservations et gestion des tables",
    desc: "Gérez vos réservations en ligne, votre plan de salle et votre liste d'attente depuis une seule interface.",
  },
  {
    icon: Users,
    title: "Gestion du personnel simplifiée",
    desc: "Plannings, présences et paie gérés dans Odoo. Vos équipes pointent depuis leur téléphone.",
  },
];

const faqs = [
  {
    q: "Est-ce qu'Odoo est compatible avec la facturation électronique au Maroc ?",
    a: "Odoo peut être configuré pour accompagner votre mise en conformité en fonction des exigences applicables à votre secteur et à votre date d'obligation. MSL-iTECH suit l'évolution des textes et adapte le périmètre de mise en œuvre en conséquence.",
  },
  {
    q: "Combien coûte la solution HORECA ?",
    a: "Notre pack HORECA Essentiel commence à 199 MAD/mois, le pack Pro à 299 MAD/mois et le pack Premium à 449 MAD/mois. Tous incluent l'installation et la formation. Sans engagement.",
  },
  {
    q: "En combien de temps la solution est-elle opérationnelle ?",
    a: "Le délai dépend de la taille de votre établissement, des modules retenus et de l'état de vos données. Une première mise en œuvre peut être rapide sur un périmètre essentiel, puis évoluer par étapes.",
  },
];

export default function HorecaPage() {
  useProductSeo({
    title: "Solution HORECA Maroc — Odoo pour Restaurants & Hôtels | MSL-iTECH",
    description:
      "Digitalisez votre restaurant ou hôtel avec Odoo. Gestion des stocks, facturation, personnel. À partir de 199 MAD/mois. Démo gratuite MSL-iTECH.",
    path: "/odoo-horeca-maroc",
    faqs,
    ldId: "ld-faq-horeca",
  });

  return (
    <ProductPageShell
      eyebrow="Secteur HORECA — Maroc"
      title={
        <>
          Votre restaurant perd selon les études sectorielles jusqu'à{" "}
          <span style={{ color: "var(--gold)" }}>27% de ses aliments</span> — la
          digitalisation réduit ce problème dès les premiers mois
        </>
      }
      intro="Un établissement HORECA marocain non digitalisé perd selon les études sectorielles jusqu'à 30% de ses aliments faute de gestion des stocks précise. S'y ajoutent les erreurs de caisse, la comptabilité manuelle chronophage et la pression de l'évolution de la facturation électronique. Odoo aide à structurer ces flux, et MSL-iTECH le déploie selon le périmètre, la taille de l'établissement et les modules retenus."
      heroImage={horecaHero}
      heroImageAlt="Restaurant marocain équipé d'une caisse Odoo"
      metaNote="Démo sur site ou à distance · Réponse sous 24 à 72h · +212 6 89 30 62 78"
      featuresEyebrow="Dans votre établissement"
      featuresTitle="Ce qu'Odoo change dans votre établissement"
      features={features}
      whySection={{
        title: "Impacts constatés",
        desc: "Trois niveaux de packs adaptés à votre type d'établissement. À partir de 199 MAD/mois, sans engagement, avec installation et formation incluses.",
        points: [
          "Réduction des pertes liées au stock",
          "Gain de temps administratif",
          "Préparation à l'évolution de la facturation électronique",
          "Déploiement progressif selon périmètre",
        ],
      }}
      faqs={faqs}
      ctaTitle="Réserver ma démo HORECA gratuite"
      ctaSubtitle="Démo sur site ou à distance · Réponse sous 24 à 72h · +212 6 89 30 62 78"
    />
  );
}