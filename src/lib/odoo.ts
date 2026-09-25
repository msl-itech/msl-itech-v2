/**
 * Types & helpers pour l'envoi des leads vers Odoo
 * (via l'API proxy api-connect-odoo.vercel.app).
 */

export interface OdooLeadData {
  /** Nom du lead (souvent: "Nom complet — Société") */
  name: string;
  contact_name?: string;
  email_from?: string;
  phone?: string;
  partner_name?: string; // société
  description?: string;  // notes/HTML — message libre uniquement (T12)
  source?: string;       // origine ex: "msl-itech.com /contact"
  tag_names?: string[];  // une seule étiquette parmi : "Odoo ERP" | "Site web" | "Marketing digital"
  country_code?: string; // BE, MA, CA, ...
  team_name?: string;    // équipe Odoo — legacy, non utilisé si studio_routing=true
  /** T12 — active le mode Studio : connecteur ne fait plus le routage ni l'activité */
  studio_routing?: boolean;
  /** UTM natifs Odoo — le proxy mappe vers source_id / medium_id / campaign_id */
  utm_source_name?: string;
  utm_medium_name?: string;
  utm_campaign_name?: string;
  referred?: string;     // → crm.lead.referred (URL page d'origine)
  /** T12 — onglet Qualification (champs x_studio_*)
   *  Les valeurs des champs de sélection sont les clés techniques Studio (table B3).
   *  TODO: mettre à jour les valeurs envoyées une fois la table B3 complétée. */
  x_studio_outil_source?: string;      // clé ex: "formulaire_de_contact"
  x_studio_score?: number;             // 0–100
  x_studio_secteur?: string;           // clé ex: "commerce_distribution"
  x_studio_outil_actuel?: string;      // clé ex: "excel_word"
  x_studio_echeance?: string;          // clé ex: "lt3m"
  x_studio_objectif?: string;          // clé ex: "nouveau" | "plus_demandes"
  x_studio_budget?: string;            // clé ex: "lt1000"
  x_studio_url_site?: string;          // URL libre
  x_studio_score_affiche?: number;     // Score affiché à l'écran au prospect (≠ score lead)
  x_studio_recommandations?: string;   // 3 recommandations affichées, séparées par \n
  x_studio_consentement?: boolean;
  x_studio_consentement_date?: string; // ISO 8601
  /** Champs additionnels libres */
  extra?: Record<string, unknown>;
}

/**
 * Construit une description HTML lisible côté Odoo
 * à partir d'un objet de paires clé/valeur.
 */
export function buildLeadDescription(
  sections: Record<string, string | undefined | null>
): string {
  const parts: string[] = [];
  for (const [label, value] of Object.entries(sections)) {
    if (!value || !String(value).trim()) continue;
    parts.push(
      `<p><b>${escapeHtml(label)}</b><br/>${escapeHtml(String(value)).replace(
        /\n/g,
        "<br/>"
      )}</p>`
    );
  }
  return parts.join("\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}