import { OdooLeadData } from "./odoo";

const ODOO_API_URL = "https://api-connect-odoo.vercel.app/api";
const TIMEOUT_MS = 8000;

/** Durée de vie maximale d'un lead en attente avant purge (30 jours). */
const PENDING_TTL_MS = 30 * 24 * 60 * 60 * 1000;
/** Nombre maximum de tentatives avant purge (anti-boucle). */
const PENDING_MAX_ATTEMPTS = 10;

const ODOO_HEADERS: Record<string, string> = {
  "Content-Type": "application/json",
  "x-signature":
    "196b63f5e878f2df528b484da7e6db0a923a8ab497d53b5977166af3b0e6068f",
  "x-client-id": "client_mslitech",
  "x-company-id": "3",
};

interface PendingLead {
  data: OdooLeadData;
  savedAt: string;
  status: "pending" | "retried";
  attempts?: number;
  lastAttemptAt?: string;
}

/**
 * Filtre les leads expirés (TTL dépassé ou trop de tentatives échouées).
 * Loggue les purges pour traçabilité.
 */
function purgeExpired(pending: PendingLead[]): PendingLead[] {
  const now = Date.now();
  const kept: PendingLead[] = [];
  let purged = 0;
  for (const lead of pending) {
    const age = now - new Date(lead.savedAt).getTime();
    const attempts = lead.attempts ?? 0;
    if (age > PENDING_TTL_MS || attempts >= PENDING_MAX_ATTEMPTS) {
      purged++;
      continue;
    }
    kept.push(lead);
  }
  if (purged > 0) {
    console.warn(
      `[Odoo] ${purged} lead(s) en attente purgé(s) (TTL ${PENDING_TTL_MS / 86_400_000}j ou ${PENDING_MAX_ATTEMPTS} tentatives)`
    );
  }
  return kept;
}

function saveLeadLocally(data: OdooLeadData): void {
  try {
    const raw = localStorage.getItem("pending_leads");
    const all: PendingLead[] = raw ? JSON.parse(raw) : [];
    const pending = purgeExpired(all);
    pending.push({
      data,
      savedAt: new Date().toISOString(),
      status: "pending",
      attempts: 0,
    });
    localStorage.setItem("pending_leads", JSON.stringify(pending));
    console.warn("[Fallback] Lead sauvegardé localement", data.name);
  } catch (e) {
    console.error("[Fallback] Sauvegarde locale impossible", e);
  }
}

async function sendWithTimeout(
  data: OdooLeadData,
  timeout: number
): Promise<void> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
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
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export interface SubmitResult {
  success: true;
  message: "ok" | "fallback";
}

/**
 * Envoie un lead vers Odoo avec timeout et fallback localStorage.
 * Retourne TOUJOURS success: true pour ne jamais bloquer l'UX.
 */
export async function submitLead(
  data: OdooLeadData
): Promise<SubmitResult> {
  try {
    await sendWithTimeout(data, TIMEOUT_MS);
    return { success: true, message: "ok" };
  } catch (error) {
    console.error("[Odoo] Échec envoi, fallback localStorage:", error);
    saveLeadLocally(data);
    return { success: true, message: "fallback" };
  }
}

/**
 * Retente l'envoi des leads en attente dans localStorage.
 * Peut être appelé au chargement de l'app ou périodiquement.
 */
export async function retryPendingLeads(): Promise<number> {
  const raw = localStorage.getItem("pending_leads");
  if (!raw) return 0;

  const all: PendingLead[] = JSON.parse(raw);
  const pending = purgeExpired(all);
  if (pending.length === 0) {
    localStorage.removeItem("pending_leads");
    return 0;
  }

  const remaining: PendingLead[] = [];
  let sent = 0;

  for (const lead of pending) {
    try {
      await sendWithTimeout(lead.data, TIMEOUT_MS);
      sent++;
    } catch {
      remaining.push({
        ...lead,
        status: "retried",
        attempts: (lead.attempts ?? 0) + 1,
        lastAttemptAt: new Date().toISOString(),
      });
    }
  }

  const finalKept = purgeExpired(remaining);
  if (finalKept.length > 0) {
    localStorage.setItem("pending_leads", JSON.stringify(finalKept));
  } else {
    localStorage.removeItem("pending_leads");
  }

  if (sent > 0) {
    console.info(
      `[Odoo] ${sent} lead(s) en attente renvoyé(s) avec succès`
    );
  }
  return sent;
}