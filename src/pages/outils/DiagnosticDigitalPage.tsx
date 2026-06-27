import { ToolWizard, ToolQuestion } from "@/components/outils/ToolWizard";
import { useProductSeo } from "@/hooks/useProductSeo";

const questions: ToolQuestion[] = [
  {
    id: "facturation",
    label: "Vos factures sont-elles générées de façon structurée (PDF/UBL) ?",
    type: "single",
    options: [
      { value: "non", label: "Non — papier ou Word/Excel" },
      { value: "partiel", label: "Partiellement — PDF non structuré" },
      { value: "oui", label: "Oui — UBL conforme DGI" },
    ],
  },
  {
    id: "donnees",
    label: "Vos données métier (clients, stocks, ventes) sont-elles centralisées ?",
    type: "single",
    options: [
      { value: "silos", label: "Non — chaque service a son fichier" },
      { value: "partiel", label: "Partiellement — quelques outils communs" },
      { value: "central", label: "Oui — un référentiel unique" },
    ],
  },
  {
    id: "automatisation",
    label: "Quelle est la part de tâches automatisées (relances, suivi stock, KPI) ?",
    type: "single",
    options: [
      { value: "rien", label: "Aucune — tout est manuel" },
      { value: "qq", label: "Quelques workflows simples" },
      { value: "bcp", label: "La majorité des tâches répétitives" },
    ],
  },
  {
    id: "kpi",
    label: "Pouvez-vous consulter vos KPI clés en temps réel ?",
    type: "single",
    options: [
      { value: "non", label: "Non — Excel reconstitué chaque mois" },
      { value: "partiel", label: "Partiellement — quelques dashboards" },
      { value: "live", label: "Oui — dashboards live partagés" },
    ],
  },
  {
    id: "ia",
    label: "Utilisez-vous l'IA dans vos processus métier ?",
    type: "single",
    options: [
      { value: "non", label: "Pas du tout" },
      { value: "chatgpt", label: "ChatGPT ad-hoc côté équipes" },
      { value: "integre", label: "IA intégrée à l'ERP (agents, copilote)" },
    ],
  },
  {
    id: "ambition",
    label: "Quelle est votre ambition à 12 mois ?",
    type: "single",
    options: [
      { value: "conformite", label: "Être conforme DGI", scoreMap: { urgency: "dgi" } },
      { value: "structurer", label: "Structurer mes opérations", scoreMap: { urgency: "annee" } },
      { value: "automatiser", label: "Automatiser un maximum", scoreMap: { urgency: "annee" } },
      { value: "intelligence", label: "Piloter par la donnée et l'IA", scoreMap: { urgency: "reflexion" } },
    ],
  },
];

function computeResult(answers: Record<string, string | number>) {
  const map = (v: string | number | undefined) =>
    v === "oui" || v === "central" || v === "bcp" || v === "live" || v === "integre"
      ? 3
      : v === "partiel" || v === "qq" || v === "chatgpt"
        ? 2
        : 1;
  const total =
    map(answers.facturation) +
    map(answers.donnees) +
    map(answers.automatisation) +
    map(answers.kpi) +
    map(answers.ia);
  let level = "1 — Conformité";
  let next = "Mettre en place un socle ERP unifié (Odoo) et la conformité DGI.";
  if (total >= 13) {
    level = "4 — Intelligence";
    next = "Industrialiser les agents IA et l'aide à la décision en temps réel.";
  } else if (total >= 10) {
    level = "3 — Automatisation";
    next = "Étendre les workflows automatisés (relances, stock, achats) et déployer un copilote IA.";
  } else if (total >= 7) {
    level = "2 — Intégration";
    next = "Centraliser les données et connecter vos modules (ventes ↔ stock ↔ compta).";
  }
  return {
    headline: `Votre niveau de maturité digitale : ${level}`,
    summary:
      "Diagnostic synthétique de votre maturité digitale en 5 dimensions clés. Le détail par axe et le plan d'action priorisé vous sont envoyés par email.",
    highlights: [
      { label: "Niveau", value: level.split(" — ")[0] },
      { label: "Score", value: `${total} / 15` },
      { label: "Prochain palier", value: next.split(" ").slice(0, 4).join(" ") + "…" },
    ],
  };
}

export default function DiagnosticDigitalPage() {
  useProductSeo({
    title: "Diagnostic maturité digitale PME Maroc — Score & plan d'action",
    description:
      "Évaluez en 2 minutes le niveau de digitalisation de votre PME marocaine (Conformité → Intégration → Automatisation → Intelligence). Plan d'action MSL-iTECH inclus.",
    path: "/outils/diagnostic-digital",
  });
  return (
    <ToolWizard
      slug="diagnostic-digital"
      eyebrow="Outil · Maturité digitale"
      title="À quel niveau de digitalisation est mon entreprise ?"
      intro="Six questions pour situer votre PME sur l'échelle Conformité → Intégration → Automatisation → Intelligence — et identifier votre prochain palier."
      questions={questions}
      computeResult={computeResult}
      partialTeaser="Votre niveau commence à se dessiner. Continuez : à la fin, vous recevez votre score / 15 et les 3 actions prioritaires pour passer au niveau supérieur."
    />
  );
}