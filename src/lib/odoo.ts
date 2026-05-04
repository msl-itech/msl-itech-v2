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
  description?: string;  // notes/HTML
  source?: string;       // origine ex: "msl-itech.com /contact"
  tag_names?: string[];  // tags Odoo (créés s'ils n'existent pas)
  country_code?: string; // BE, MA, CA, ...
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