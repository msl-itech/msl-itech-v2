import { ToolWizard, ToolQuestion } from "@/components/outils/ToolWizard";
import { useProductSeo } from "@/hooks/useProductSeo";

const questions: ToolQuestion[] = [
  {
    id: "ca",
    label: "Quel est le chiffre d'affaires annuel approximatif de votre entreprise ?",
    type: "single",
    options: [
      { value: "lt5", label: "Moins de 5 M MAD" },
      { value: "5_50", label: "Entre 5 et 50 M MAD" },
      { value: "50_500", label: "Entre 50 et 500 M MAD" },
      { value: "gt500", label: "Plus de 500 M MAD" },
    ],
  },
  {
    id: "facturation",
    label: "Comment émettez-vous vos factures aujourd'hui ?",
    type: "single",
    options: [
      { value: "papier", label: "Papier / carnet à souches", scoreMap: { urgency: "dgi" } },
      { value: "word_excel", label: "Word / Excel / PDF non structuré", scoreMap: { urgency: "dgi" } },
      { value: "logiciel", label: "Logiciel de facturation simple", scoreMap: { urgency: "annee" } },
      { value: "erp", label: "ERP qui génère du PDF/UBL", scoreMap: { urgency: "reflexion" } },
    ],
  },
  {
    id: "volume",
    label: "Combien de factures émettez-vous par mois ?",
    type: "single",
    options: [
      { value: "lt20", label: "Moins de 20" },
      { value: "20_100", label: "Entre 20 et 100" },
      { value: "100_500", label: "Entre 100 et 500" },
      { value: "gt500", label: "Plus de 500" },
    ],
  },
  {
    id: "team",
    label: "Combien de collaborateurs travaillent dans votre entreprise ?",
    type: "single",
    options: [
      { value: "lt10", label: "Moins de 10", scoreMap: { companySize: "lt10" } },
      { value: "10_20", label: "Entre 10 et 20", scoreMap: { companySize: "10_20" } },
      { value: "20_50", label: "Entre 20 et 50", scoreMap: { companySize: "20_50" } },
      { value: "gt50", label: "Plus de 50", scoreMap: { companySize: "gt50" } },
    ],
  },
  {
    id: "echeance",
    label: "Quand pensez-vous devoir être conforme à la facturation électronique DGI ?",
    type: "single",
    options: [
      { value: "asap", label: "Le plus vite possible — je suis déjà concerné", scoreMap: { urgency: "dgi" } },
      { value: "cette_annee", label: "Cette année", scoreMap: { urgency: "annee" } },
      { value: "12_24", label: "D'ici 12 à 24 mois", scoreMap: { urgency: "reflexion" } },
      { value: "inconnu", label: "Je ne sais pas encore", scoreMap: { urgency: "curieux" } },
    ],
  },
  {
    id: "blocage",
    label: "Quel est aujourd'hui votre principal frein ?",
    type: "single",
    options: [
      { value: "tech", label: "Choix technique (PDF/UBL, plateforme DGI…)" },
      { value: "budget", label: "Budget / cadrage du projet" },
      { value: "equipe", label: "Équipe non préparée au changement" },
      { value: "personne", label: "Personne ne s'en occupe en interne" },
    ],
  },
];

function computeResult(answers: Record<string, string | number>) {
  const fact = answers.facturation;
  const ech = answers.echeance;
  let risk = "Modéré";
  if (fact === "papier" || fact === "word_excel" || ech === "asap") risk = "Élevé";
  else if (fact === "erp" && ech === "12_24") risk = "Faible";
  const delais =
    ech === "asap" ? "0 à 3 mois" : ech === "cette_annee" ? "3 à 9 mois" : "9 à 18 mois";
  return {
    headline: `Risque de non-conformité : ${risk}`,
    summary:
      "Sur la base de vos réponses, voici le diagnostic synthétique de votre exposition à la réforme DGI de facturation électronique au Maroc. Le détail complet et les étapes à engager vous sont envoyés par email.",
    highlights: [
      { label: "Niveau de risque", value: risk },
      { label: "Fenêtre conseillée", value: delais },
      { label: "Format cible DGI", value: "PDF + UBL" },
    ],
  };
}

export default function ConformiteDgiPage() {
  useProductSeo({
    title: "Simulateur de conformité DGI — Êtes-vous prêt pour la facture électronique ?",
    description:
      "Évaluez en 2 minutes votre exposition à la réforme DGI de facturation électronique au Maroc. Score, fenêtre conseillée et plan d'action MSL-iTECH × Odoo.",
    path: "/outils/conformite-dgi",
  });
  return (
    <ToolWizard
      slug="conformite-dgi"
      eyebrow="Outil · Conformité DGI Maroc"
      title="Suis-je concerné par la facturation électronique DGI ?"
      intro="Six questions, deux minutes, un diagnostic clair de votre exposition à l'obligation de facturation électronique au Maroc."
      questions={questions}
      computeResult={computeResult}
      partialTeaser="Votre profil de risque se dessine. Continuez : à la fin, vous obtenez votre fenêtre conseillée de mise en conformité et le format DGI cible (PDF/UBL)."
    />
  );
}