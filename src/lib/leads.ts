import { OdooLeadData } from "./odoo";

const ODOO_API_URL = "https://api-connect-odoo.vercel.app/api";
const TIMEOUT_MS = 30000;

const ODOO_HEADERS: Record<string, string> = {
  "Content-Type": "application/json",
  "x-signature":
    "196b63f5e878f2df528b484da7e6db0a923a8ab497d53b5977166af3b0e6068f",
  "x-client-id": "client_mslitech",
};

export interface SubmitResult {
  success: true;
  message: "ok";
}

/**
 * Envoie un lead vers Odoo avec timeout.
 * T14 — plus de fallback localStorage : chaque retry créait un doublon dans Odoo
 * car l'API n'a pas de déduplication. Si l'envoi échoue, on laisse l'erreur remonter.
 */
export async function submitLead(
  data: OdooLeadData
): Promise<SubmitResult> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(`${ODOO_API_URL}/leads`, {
      method: "POST",
      headers: ODOO_HEADERS,
      body: JSON.stringify(data),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return { success: true, message: "ok" };
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

/**
 * Purge les anciennes entrées pending_leads du localStorage.
 * Appelé une fois au chargement pour nettoyer les navigateurs qui avaient
 * accumulé des leads avec l'ancien mécanisme de fallback (supprimé T14).
 */
export function clearLegacyPendingLeads(): void {
  try {
    const raw = localStorage.getItem("pending_leads");
    if (raw) {
      localStorage.removeItem("pending_leads");
      console.info("[Odoo] pending_leads legacy nettoyé");
    }
  } catch {
    // localStorage indisponible — pas grave
  }
}
