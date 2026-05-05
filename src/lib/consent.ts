/**
 * Lightweight cookie-consent store (RGPD / Loi 09-08).
 * Persists choices in localStorage and emits a "consentchange" event.
 * No third-party script (GA, Ads, etc.) should run before the user accepts
 * the matching category.
 */

export type ConsentCategories = {
  necessary: true; // always true, cannot be refused
  analytics: boolean;
  marketing: boolean;
};

export type ConsentState = {
  decided: boolean;
  timestamp: number | null;
  version: number;
  categories: ConsentCategories;
};

const STORAGE_KEY = "msl_consent_v1";
const CONSENT_VERSION = 1;
export const CONSENT_EVENT = "msl:consentchange";

const defaultState: ConsentState = {
  decided: false,
  timestamp: null,
  version: CONSENT_VERSION,
  categories: { necessary: true, analytics: false, marketing: false },
};

export function getConsent(): ConsentState {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return defaultState;
    return {
      ...defaultState,
      ...parsed,
      categories: { ...defaultState.categories, ...parsed.categories, necessary: true },
    };
  } catch {
    return defaultState;
  }
}

export function setConsent(categories: Partial<ConsentCategories>): ConsentState {
  const next: ConsentState = {
    decided: true,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
    categories: {
      necessary: true,
      analytics: !!categories.analytics,
      marketing: !!categories.marketing,
    },
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // storage unavailable — degrade silently
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: next }));
  }
  return next;
}

export function acceptAll(): ConsentState {
  return setConsent({ analytics: true, marketing: true });
}

export function rejectAll(): ConsentState {
  return setConsent({ analytics: false, marketing: false });
}

/** Open the preferences modal from anywhere (footer link). */
export const OPEN_PREFERENCES_EVENT = "msl:openConsentPreferences";
export function openConsentPreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
  }
}

/** Subscribe to consent changes. Returns an unsubscribe function. */
export function onConsentChange(cb: (s: ConsentState) => void) {
  if (typeof window === "undefined") return () => {};
  const handler = (e: Event) => cb((e as CustomEvent<ConsentState>).detail);
  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
}