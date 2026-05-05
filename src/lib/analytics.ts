/**
 * Conditional Google Analytics loader.
 * GA is loaded ONLY after the user grants the "analytics" consent.
 * IP anonymization is forced (anonymize_ip / IP Anonymization is default in
 * GA4, but we keep the flag explicit for transparency).
 *
 * To activate: set VITE_GA_MEASUREMENT_ID in your environment, e.g. "G-XXXXXX".
 * Without it, this module is a no-op (safe in dev / preview).
 */

import { getConsent, onConsentChange } from "./consent";

const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || "";
const SCRIPT_ID = "ga4-loader";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;

function loadGa() {
  if (loaded || !GA_ID || typeof document === "undefined") return;
  loaded = true;

  const s = document.createElement("script");
  s.id = SCRIPT_ID;
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

/**
 * Initialise listeners. Call once at app boot.
 * Loads GA if consent is already granted, otherwise waits for the event.
 */
export function initAnalytics() {
  if (typeof window === "undefined") return;
  if (getConsent().categories.analytics) loadGa();
  onConsentChange((s) => {
    if (s.categories.analytics) loadGa();
  });
}