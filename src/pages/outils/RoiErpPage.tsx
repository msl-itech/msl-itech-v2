import { ToolWizard, ToolQuestion } from "@/components/outils/ToolWizard";
import { useProductSeo } from "@/hooks/useProductSeo";

const questions: ToolQuestion[] = [
  {
    id: "users",
    label: "Combien d'utilisateurs ERP envisagez-vous ?",
    type: "number",
    placeholder: "ex. 25",
    unit: "users",
    min: 1,
    max: 1000,
  },
  {
    id: "ca",
    label: "Quel est votre chiffre d'affaires annuel approximatif ?",
    type: "single",
    options: [
      { value: "lt5", label: "Moins de 5 M MAD" },
      { value: "5_20", label: "Entre 5 et 20 M MAD" },
      { value: "20_100", label: "Entre 20 et 100 M MAD" },
      { value: "gt100", label: "Plus de 100 M MAD" },
    ],
  },
  {
    id: "outil",
    label: "Quel outil utilisez-vous principalement aujourd'hui ?",
    type: "single",
    options: [
      { value: "excel", label: "Excel uniquement", scoreMap: { currentTool: "excel" } },
      { value: "sage", label: "Sage", scoreMap: { currentTool: "sage" } },
      { value: "odoo", label: "Odoo (ancienne version)", scoreMap: { currentTool: "odoo" } },
      { value: "autre", label: "Autre logiciel métier", scoreMap: { currentTool: "autre" } },
    ],
  },
  {
    id: "delai_paiement",
    label: "Quel est votre délai moyen de recouvrement client ?",
    type: "single",
    options: [
      { value: "lt30", label: "Moins de 30 jours" },
      { value: "30_60", label: "30 à 60 jours" },
      { value: "60_90", label: "60 à 90 jours" },
      { value: "gt90", label: "Plus de 90 jours" },
    ],
  },
  {
    id: "douleur",
    label: "Quelle est votre douleur principale aujourd'hui ?",
    type: "single",
    options: [
      { value: "stock", label: "Stock mal piloté / ruptures" },
      { value: "facturation", label: "Facturation lente, erreurs" },
      { value: "visibilite", label: "Aucune visibilité sur la marge réelle" },
      { value: "silos", label: "Données éclatées entre Excel et autres outils" },
    ],
  },
  {
    id: "urgence",
    label: "Quand souhaitez-vous lancer le projet ?",
    type: "single",
    options: [
      { value: "now", label: "Dès que possible", scoreMap: { urgency: "dgi" } },
      { value: "annee", label: "Dans l'année", scoreMap: { urgency: "annee" } },
      { value: "reflexion", label: "En réflexion", scoreMap: { urgency: "reflexion" } },
      { value: "curieux", label: "Je m'informe", scoreMap: { urgency: "curieux" } },
    ],
  },
];

function computeResult(answers: Record<string, string | number>) {
  const ca = answers.ca as string;
  const users = Number(answers.users || 0);
  // Plages de CA en MAD pour calculer une fenêtre de gain
  const caMid =
    ca === "lt5" ? 3_000_000 : ca === "5_20" ? 12_000_000 : ca === "20_100" ? 60_000_000 : 150_000_000;
  // Gain estimé conservateur : 1.5% à 4% du CA sur 12 mois (recouvrement + productivité + erreurs)
  const low = Math.round((caMid * 0.015) / 1000) * 1000;
  const high = Math.round((caMid * 0.04) / 1000) * 1000;
  const fmt = (n: number) =>
    new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n) + " MAD";
  const payback = users >= 20 ? "8 à 14 mois" : "12 à 18 mois";
  return {
    headline: `Gain estimé 12 mois : ${fmt(low)} → ${fmt(high)}`,
    summary:
      "Estimation prudente basée sur votre taille, votre outil actuel et vos délais de recouvrement. Le détail (hypothèses, scénarios, payback) vous est envoyé par email.",
    highlights: [
      { label: "Gain bas", value: fmt(low) },
      { label: "Gain haut", value: fmt(high) },
      { label: "Payback", value: payback },
    ],
  };
}

export default function RoiErpPage() {
  useProductSeo({
    title: "Calculateur ROI ERP Odoo — Combien gagner en 12 mois ?",
    description:
      "Estimez en 2 minutes le ROI d'un déploiement Odoo pour votre PME marocaine. Gain annuel, payback et plan d'action MSL-iTECH.",
    path: "/outils/roi-erp",
  });
  return (
    <ToolWizard
      slug="roi-erp"
      eyebrow="Outil · ROI Odoo Maroc"
      title="Est-ce que ça vaut le coup de passer à un ERP ?"
      intro="En 2 minutes, obtenez une estimation chiffrée du gain potentiel d'un déploiement Odoo dans votre PME marocaine."
      questions={questions}
      computeResult={computeResult}
      partialTeaser="Vos données nous permettent déjà d'estimer une fourchette. Continuez : à la fin, vous recevez le gain 12 mois (MAD) et le payback estimé."
    />
  );
}