/**
 * Conditional analytics loaders — Google Analytics 4 + Microsoft Clarity.
 * Both are loaded ONLY after the user grants the "analytics" consent.
 *
 * GA4: set VITE_GA_MEASUREMENT_ID in your environment (e.g. "G-XXXXXX").
 *      Without it the GA loader is a no-op (safe in dev / preview).
 * Clarity: tag ID is hardcoded (xrf313hs67) — public by design, no secret.
 */

import { getConsent, onConsentChange } from "./consent";

const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || "";
const CLARITY_ID = "xrf313hs67";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

/* ── Google Analytics 4 ─────────────────────────────────────────── */

let gaLoaded = false;

function loadGa() {
  if (gaLoaded || !GA_ID || typeof document === "undefined") return;
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
  window.gtag("config", GA_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

/* ── Microsoft Clarity ──────────────────────────────────────────── */

let clarityLoaded = false;

function loadClarity() {
  if (clarityLoaded || typeof document === "undefined") return;
  clarityLoaded = true;

  // Minimal Clarity snippet — identical to the official tag, injected on demand.
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

/* ── Boot ───────────────────────────────────────────────────────── */

/**
 * Initialise listeners. Call once at app boot.
 * Loads GA4 + Clarity if consent is already granted, otherwise waits for the event.
 */
export function initAnalytics() {
  if (typeof window === "undefined") return;
  if (getConsent().categories.analytics) {
    loadGa();
    loadClarity();
  }
  onConsentChange((s) => {
    if (s.categories.analytics) {
      loadGa();
      loadClarity();
    }
  });
}