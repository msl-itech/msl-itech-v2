/**
 * Conditional analytics loaders — Google Analytics 4 + Microsoft Clarity.
 * Both load ONLY after the user grants the "analytics" consent,
 * and ONLY on the production host (never on Vercel previews or localhost).
 *
 * GA4: VITE_GA_MEASUREMENT_ID must be set in the Vercel *Production* environment only.
 * Clarity: tag ID is hardcoded (xrf313hs67) — public by design, no secret.
 *
 * Internal traffic: open the site once with ?msl_internal=1 to flag the browser
 * (excluded from reports via the GA4 "Internal traffic" data filter, visible in DebugView).
 */

import { getConsent, onConsentChange } from "./consent";

const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || "";
const CLARITY_ID = "xrf313hs67";

// TODO T9 : retirer le hostname preview avant merge dans main
const PRODUCTION_HOSTS = ["msl-itech.com", "msl-itech-v2-git-fix-t9-ga4-msl-itech.vercel.app"];
const INTERNAL_FLAG_KEY = "msl_internal";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export type TrackParams = Record<string, string | number | boolean | null | undefined>;

/* ── Page context (kept in sync by SEOHead on each route) ────── */

let _pageTitle = "";
let _pageLocation = "";

/**
 * Called by SEOHead after every route change.
 * Stores the authoritative page title & URL so that sendPageView
 * and gtag("set") always use the Helmet-rendered values, even when
 * GA4 hasn't loaded yet or document.title hasn't caught up.
 */
export function setCurrentPage(title: string, url: string): void {
  _pageTitle = title;
  _pageLocation = url;
}

/** Returns the last title pushed by SEOHead. */
export function getCurrentPageTitle(): string {
  return _pageTitle;
}

/* ── Helpers ───────────────────────────────────────────────────── */

function isProductionHost(): boolean {
  return typeof window !== "undefined" && PRODUCTION_HOSTS.includes(window.location.hostname);
}

/** Reads ?msl_internal=1|0 once, persists it, and returns the current flag. */
function isInternal(): boolean {
  try {
    const param = new URLSearchParams(window.location.search).get(INTERNAL_FLAG_KEY);
    if (param === "1") localStorage.setItem(INTERNAL_FLAG_KEY, "1");
    if (param === "0") localStorage.removeItem(INTERNAL_FLAG_KEY);
    return localStorage.getItem(INTERNAL_FLAG_KEY) === "1";
  } catch {
    return false;
  }
}

/** GA4 official opt-out switch: window['ga-disable-G-XXXX'] = true stops all hits. */
function setGaDisabled(disabled: boolean) {
  if (!GA_ID) return;
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = disabled;
}

/* ── Google Analytics 4 ───────────────────────────────────────── */

let gaLoaded = false;

function loadGa() {
  if (gaLoaded || !GA_ID || !isProductionHost() || typeof document === "undefined") return;
  gaLoaded = true;

  const s = document.createElement("script");
  s.id = "ga4-loader";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());

  const config: Record<string, unknown> = {
    send_page_view: false, // page_view envoyé manuellement par SEOHead avec le bon titre
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  };
  if (isInternal()) {
    config.traffic_type = "internal";
    config.debug_mode = true;
  }
  window.gtag("config", GA_ID, config);
}

/* ── Microsoft Clarity ────────────────────────────────────────── */

let clarityLoaded = false;

function loadClarity() {
  if (clarityLoaded || !isProductionHost() || typeof document === "undefined") return;
  clarityLoaded = true;

  const c = window as Window & { clarity?: (...args: unknown[]) => void };
  c.clarity =
    c.clarity ||
    function (...args: unknown[]) {
      ((c.clarity as unknown as { q?: unknown[][] }).q =
        (c.clarity as unknown as { q?: unknown[][] }).q || []).push(args);
    };

  const s = document.createElement("script");
  s.id = "clarity-loader";
  s.async = true;
  s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  document.head.appendChild(s);
}

/* ── Public API ───────────────────────────────────────────────── */

/**
 * Send a page_view with the stored title and URL.
 * Called by SEOHead after Helmet has set the title, and by initAnalytics
 * when consent is granted after mount. Deduplicates by URL to avoid doubles.
 *
 * Also calls gtag("set") so that subsequent events (scroll, form_*,
 * generate_lead, tool_*, contact_click) inherit the correct page title
 * and location automatically.
 */
let lastPageViewUrl = "";

export function sendPageView(title?: string): void {
  if (typeof window === "undefined" || !gaLoaded || !window.gtag) return;
  if (!getConsent().categories.analytics) return;
  const pageTitle = title || _pageTitle;
  const pageLocation = _pageLocation || window.location.href;
  if (pageLocation === lastPageViewUrl) return;
  lastPageViewUrl = pageLocation;
  // Set global page context so all future events inherit the correct title.
  window.gtag("set", { page_title: pageTitle, page_location: pageLocation });
  window.gtag("event", "page_view", {
    page_title: pageTitle,
    page_location: pageLocation,
  });
}

/**
 * Send a GA4 event. No-op when GA is not loaded (no consent, no ID, preview host).
 * Never pass personal data (name, email, phone, company, free text, entered URLs).
 */
export function track(event: string, params: TrackParams = {}): void {
  if (typeof window === "undefined" || !gaLoaded || !window.gtag) return;
  if (!getConsent().categories.analytics) return;

  const clean: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") clean[key] = value;
  }
  window.gtag("event", event, clean);
}

/**
 * Initialise listeners. Call once at app boot.
 * Loads GA4 + Clarity when consent is granted; stops them when it is withdrawn.
 */
export function initAnalytics() {
  if (typeof window === "undefined") return;
  isInternal(); // persist ?msl_internal=1|0 on first page load

  const apply = (granted: boolean) => {
    if (granted) {
      setGaDisabled(false);
      loadGa();
      // Page_view pour le late consent : SEOHead a déjà monté, son useEffect ne se
      // re-déclenchera pas. Le délai laisse gtag.js charger. Le dédup par URL empêche
      // le doublon si SEOHead envoie aussi (cas du premier chargement).
      setTimeout(() => sendPageView(), 150);
      if (clarityLoaded) window.clarity?.("start"); else loadClarity();
    } else {
      setGaDisabled(true);
      window.clarity?.("stop");
    }
  };

  apply(getConsent().categories.analytics);
  onConsentChange((s) => apply(s.categories.analytics));
}
