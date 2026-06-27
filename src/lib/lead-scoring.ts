/**
 * Scoring lead 0-100 — conforme à la grille MSL-iTECH (Partie 5 du tunnel).
 * Calculé côté client à la soumission de l'outil.
 */
export type ToolSlug =
  | "conformite-dgi"
  | "roi-erp"
  | "diagnostic-digital"
  | "comparateur-sage-odoo";

export type Segment = "tres_chaud" | "chaud" | "tiede" | "froid";

export type CompanySize = "lt10" | "10_20" | "20_50" | "gt50";
export type CurrentTool = "excel" | "sage" | "odoo" | "autre";
export type Urgency = "dgi" | "annee" | "reflexion" | "curieux";

export type ScoreInputs = {
  companySize?: CompanySize;
  currentTool?: CurrentTool;
  urgency?: Urgency;
  email?: string;
  phone?: string;
  toolSlug: ToolSlug;
};

const FREE_EMAIL_DOMAINS = [
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.fr",
  "outlook.com",
  "hotmail.com",
  "hotmail.fr",
  "live.fr",
  "live.com",
  "icloud.com",
  "me.com",
  "free.fr",
  "orange.fr",
  "wanadoo.fr",
  "sfr.fr",
  "laposte.net",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "yopmail.com",
  "mailinator.com",
];

export function isProfessionalEmail(email?: string): boolean {
  if (!email) return false;
  const at = email.toLowerCase().split("@")[1];
  if (!at) return false;
  return !FREE_EMAIL_DOMAINS.includes(at.trim());
}

function pSize(s?: CompanySize): number {
  switch (s) {
    case "gt50":
      return 25;
    case "20_50":
      return 15;
    case "10_20":
      return 10;
    case "lt10":
      return 5;
    default:
      return 0;
  }
}
function pTool(t?: CurrentTool): number {
  switch (t) {
    case "sage":
      return 20;
    case "excel":
      return 18;
    case "odoo":
      return 15;
    case "autre":
      return 10;
    default:
      return 0;
  }
}
function pUrgency(u?: Urgency): number {
  switch (u) {
    case "dgi":
      return 20;
    case "annee":
      return 15;
    case "reflexion":
      return 8;
    case "curieux":
      return 2;
    default:
      return 0;
  }
}
function pToolUsed(slug: ToolSlug): number {
  switch (slug) {
    case "conformite-dgi":
      return 10;
    case "roi-erp":
      return 10;
    case "comparateur-sage-odoo":
      return 8;
    case "diagnostic-digital":
      return 5;
  }
}

export function scoreLead(input: ScoreInputs): { score: number; segment: Segment } {
  const size = pSize(input.companySize);
  const tool = pTool(input.currentTool);
  const urg = pUrgency(input.urgency);
  const email = isProfessionalEmail(input.email) ? 15 : input.email ? 5 : 0;
  const phone = input.phone && input.phone.trim().length >= 6 ? 10 : 0;
  const used = pToolUsed(input.toolSlug);
  const score = Math.min(100, size + tool + urg + email + phone + used);
  let segment: Segment = "froid";
  if (score >= 75) segment = "tres_chaud";
  else if (score >= 55) segment = "chaud";
  else if (score >= 35) segment = "tiede";
  return { score, segment };
}

export function segmentLabel(s: Segment): string {
  return s === "tres_chaud"
    ? "Très chaud"
    : s === "chaud"
      ? "Chaud"
      : s === "tiede"
        ? "Tiède"
        : "Froid";
}