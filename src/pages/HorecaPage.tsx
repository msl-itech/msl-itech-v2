import { Boxes, Receipt, CalendarCheck, Users, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { ProductBento, type BentoCard } from "@/components/product/ProductBento";
import { useProductSeo } from "@/hooks/useProductSeo";
import horecaHero from "@/assets/horeca-hero.webp";

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

/* Bento — charte MSL : blue, gold, blue-light, white */
const bentoCards: BentoCard[] = [
  {
    icon: Boxes,
    title: "Stock en temps réel",
    desc: "Chaque ingrédient utilisé est déduit du stock. Alertes avant rupture et commandes fournisseurs générées selon vos seuils.",
    variant: "blue",
    span: "lg:col-span-7",
  },
  {
    icon: Receipt,
    title: "Caisse & facturation",
    desc: "POS Odoo connecté à la comptabilité. Chaque encaissement est comptabilisé en temps réel.",
    variant: "gold",
    span: "lg:col-span-5",
  },
  {
    icon: CalendarCheck,
    title: "Réservations & tables",
    desc: "Réservations en ligne, plan de salle et liste d'attente depuis une seule interface.",
    variant: "white",
    span: "lg:col-span-5",
  },
  {
    icon: Users,
    title: "Personnel simplifié",
    desc: "Plannings, présences et paie gérés dans Odoo. Vos équipes pointent depuis leur téléphone.",
    variant: "bluelight",
    span: "lg:col-span-7",
  },
];

const faqs = [
  {
    q: "Est-ce qu'Odoo est compatible avec la facturation électronique au Maroc ?",
    a: "Odoo peut être configuré pour accompagner votre mise en conformité en fonction des exigences applicables à votre secteur et à votre date d'obligation. MSL-iTECH suit l'évolution des textes et adapte le périmètre de mise en œuvre en conséquence.",
  },
  {
    q: "Combien coûte la solution HORECA ?",
    a: "Nous proposons une approche sur mesure adaptée à votre type d'établissement (restaurant, café, hôtel), à son volume et aux modules retenus. Après un échange de cadrage gratuit, nous vous remettons un devis détaillé.",
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
      "Digitalisez votre restaurant ou hôtel avec Odoo. Gestion des stocks, facturation, personnel. Approche sur mesure adaptée à votre établissement. Démo gratuite MSL-iTECH.",
    path: "/odoo-horeca-maroc",
    faqs,
    ldId: "ld-faq-horeca",
    service: {
      name: "Implémentation Odoo HORECA",
      description:
        "Solution Odoo pour restaurants, cafés et hôtels au Maroc : point de vente (POS), stocks, recettes, personnel et facturation par MSL-iTECH.",
      serviceType: ["Odoo POS", "Gestion restaurant", "Gestion hôtelière"],
      areaServed: ["MA"],
    },
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
      metaNote="Démo sur site ou à distance · Réponse sous 24h · +212 6 89 30 62 78"
      featuresEyebrow="Dans votre établissement"
      featuresTitle="Ce qu'Odoo change dans votre établissement"
      features={features}
      featuresSlot={
        <ProductBento
          eyebrow="Dans votre établissement"
          title="Ce qu'Odoo change dans votre établissement"
          chipLabel="Odoo HORECA"
          cards={bentoCards}
        />
      }
      whySection={{
        title: "Impacts constatés",
        desc: "Une approche sur mesure adaptée à votre type d'établissement, sans engagement, avec installation et formation incluses.",
        points: [
          "Réduction des pertes liées au stock",
          "Gain de temps administratif",
          "Préparation à l'évolution de la facturation électronique",
          "Déploiement progressif selon périmètre",
        ],
      }}
      faqs={faqs}
      ctaTitle="Réserver ma démo HORECA gratuite"
      ctaSubtitle="Démo sur site ou à distance · Réponse sous 24h · +212 6 89 30 62 78"
      extraSection={
        <section className="bg-brand-bg py-10">
          <div className="container">
            <div
              className="flex flex-col gap-6 rounded-3xl border bg-white p-8 sm:flex-row sm:items-center sm:justify-between"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <div>
                <p className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
                  <span className="inline-block h-px w-6 bg-brand-blue" />
                  Partenaire certifié Odoo
                </p>
                <p className="font-heading text-xl font-bold text-brand-black">
                  Vous cherchez un intégrateur Odoo au Maroc ?
                </p>
                <p className="mt-2 font-body text-sm text-brand-grey">
                  MSL-iTECH est partenaire certifié Odoo, implanté au Maroc, spécialisé dans le déploiement pour les établissements HORECA.
                </p>
              </div>
              <Link
                to="/integrateur-odoo-maroc"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border-2 px-6 py-3 font-body text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
                style={{ borderColor: "var(--blue)" }}
              >
                Intégrateur Odoo au Maroc
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </section>
      }
    />
  );
}