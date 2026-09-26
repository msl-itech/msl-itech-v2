import { ToolWizard, ToolQuestion } from "@/components/outils/ToolWizard";
import { useProductSeo } from "@/hooks/useProductSeo";

const questions: ToolQuestion[] = [
  {
    id: "users",
    label: "Combien d'utilisateurs ERP avez-vous (ou prévoyez-vous) ?",
    type: "number",
    unit: "users",
    placeholder: "ex. 20",
    min: 1,
    max: 1000,
  },
  {
    id: "version",
    label: "Quelle version de Sage utilisez-vous aujourd'hui ?",
    type: "single",
    options: [
      { value: "sage50", label: "Sage 50 / Petite Entreprise", scoreMap: { currentTool: "sage" } },
      { value: "sage100", label: "Sage 100", scoreMap: { currentTool: "sage" } },
      { value: "sageX3", label: "Sage X3", scoreMap: { currentTool: "sage" } },
      { value: "autre", label: "Aucun Sage / autre", scoreMap: { currentTool: "autre" } },
    ],
  },
  {
    id: "modules",
    label: "Quels modules vous manquent aujourd'hui ?",
    type: "single",
    options: [
      { value: "crm", label: "CRM & ventes" },
      { value: "stock", label: "Stock / logistique" },
      { value: "rh", label: "RH / paie" },
      { value: "tout", label: "Plusieurs — vision 360 manquante" },
    ],
  },
  {
    id: "douleur",
    label: "Qu'est-ce qui vous frustre le plus avec votre outil actuel ?",
    type: "single",
    options: [
      { value: "couts", label: "Coût total qui explose" },
      { value: "rigidite", label: "Rigidité, peu adaptable" },
      { value: "dgi", label: "Doute sur conformité DGI 2026", scoreMap: { urgency: "dgi" } },
      { value: "support", label: "Qualité du support / maintenance" },
    ],
  },
  {
    id: "ambition",
    label: "Votre ambition à 24 mois ?",
    type: "single",
    options: [
      { value: "remplacer", label: "Remplacer Sage par Odoo", scoreMap: { urgency: "annee" } },
      { value: "etendre", label: "Étendre la couverture fonctionnelle" },
      { value: "structurer", label: "Structurer & automatiser" },
      { value: "info", label: "M'informer pour décider", scoreMap: { urgency: "reflexion" } },
    ],
  },
  {
    id: "echeance",
    label: "Quand souhaitez-vous décider ?",
    type: "single",
    options: [
      { value: "trimestre", label: "Ce trimestre", scoreMap: { urgency: "dgi" } },
      { value: "semestre", label: "Dans 6 mois", scoreMap: { urgency: "annee" } },
      { value: "annee", label: "Dans l'année", scoreMap: { urgency: "annee" } },
      { value: "indef", label: "Pas de date arrêtée", scoreMap: { urgency: "reflexion" } },
    ],
  },
];

function computeResult(answers: Record<string, string | number>) {
  const users = Number(answers.users || 0);
  const version = answers.version as string;
  // Coûts indicatifs sur 3 ans en MAD (estimations très conservatrices)
  const sageLicensePerUserYear =
    version === "sage50" ? 4_500 : version === "sage100" ? 9_000 : version === "sageX3" ? 22_000 : 7_000;
  const odooPerUserYear = 3_000; // Odoo Standard estimatif local
  const sage3y = users * sageLicensePerUserYear * 3;
  const odoo3y = users * odooPerUserYear * 3 + 90_000; // + cadrage/implémentation
  const diff = sage3y - odoo3y;
  const fmt = (n: number) =>
    new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Math.max(0, n)) +
    " MAD";
  const reco = diff > 0 ? "Odoo" : "Sage";
  return {
    headline: `Économie 3 ans estimée en faveur d'${reco === "Odoo" ? "Odoo" : "Sage"} : ${fmt(Math.abs(diff))}`,
    summary:
      "Comparatif coût total 3 ans (licences + déploiement). La vraie différence se joue ensuite sur la conformité DGI, la couverture fonctionnelle et l'adaptabilité — détails envoyés par email.",
    highlights: [
      { label: "Sage 3 ans", value: fmt(sage3y) },
      { label: "Odoo 3 ans", value: fmt(odoo3y) },
      { label: "Recommandation", value: reco },
    ],
    recommendations: [
      `Privilégier ${reco} pour optimiser le coût total sur 3 ans`,
      "Vérifier la conformité DGI et la couverture fonctionnelle",
      "Planifier la migration avec un intégrateur certifié au Maroc",
    ],
  };
}

const faqs = [
  {
    q: "Les prix affichés sont-ils contractuels ?",
    a: "Non. Les montants sont des estimations indicatives fondées sur les tarifs publics et notre expérience d'intégrateur. Le devis détaillé que vous recevez après le cadrage engage les vrais chiffres.",
  },
  {
    q: "Odoo Community est gratuit : pourquoi le comparateur affiche-t-il un coût ?",
    a: "Community est gratuit en licence, mais l'implémentation (paramétrage, reprise de données, formation) a un coût. Le comparateur additionne licence et intégration sur trois ans.",
  },
  {
    q: "Le comparateur tient-il compte de la facturation électronique DGI ?",
    a: "Il intègre le coût de la mise en conformité dans le poste intégration Odoo. Pour Sage, demandez à votre revendeur le coût de la mise à jour DGI et ajoutez-le au total.",
  },
  {
    q: "Puis-je garder Sage pour la comptabilité et utiliser Odoo pour le reste ?",
    a: "Techniquement oui, via des exports. En pratique, cela maintient une double saisie et deux contrats de maintenance. Le comparateur montre le coût total d'un outil unique.",
  },
];

export default function ComparateurSageOdooPage() {
  useProductSeo({
    title: "Odoo vs Sage au Maroc : comparateur 2026 (prix, DGI)",
    description:
      "Comparez Sage et Odoo pour une PME marocaine : licence, plan comptable CGNC, facturation électronique DGI, support local, coût total sur 3 ans.",
    path: "/outils/comparateur-sage-odoo",
    faqs,
    ldId: "ld-faq-comparateur",
  });
  return (
    <ToolWizard
      slug="comparateur-sage-odoo"
      eyebrow="Outil · Sage vs Odoo"
      title="Dois-je quitter Sage pour Odoo ?"
      intro="Six questions pour comparer le coût total et la couverture fonctionnelle Sage vs Odoo dans votre situation."
      questions={questions}
      computeResult={computeResult}
      partialTeaser="La fourchette de coût se précise. Continuez : à la fin, vous recevez la comparaison Sage 3 ans vs Odoo 3 ans et notre recommandation."
      besoin="erp"
      toolDisplayName="Comparateur Sage-Odoo"
    />
  );
}