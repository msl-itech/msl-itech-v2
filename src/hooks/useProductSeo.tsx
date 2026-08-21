import { useEffect, useSyncExternalStore } from "react";
import type { SEOHeadProps } from "@/components/SEOHead";
import { SEOHead } from "@/components/SEOHead";

export type SeoFaq = { q: string; a: string };
export type SeoService = {
  /** Service display name, e.g. "Implémentation Odoo CRM & Ventes" */
  name: string;
  /** 1–2 sentence description used in the JSON-LD `description`. */
  description: string;
  /** e.g. ["Odoo CRM", "Automatisation commerciale"] */
  serviceType: string[];
  /** ISO country codes. Defaults to ["MA"]. */
  areaServed?: string[];
};
export type SeoBreadcrumb = { name: string; url: string };

const DEFAULT_OG_IMAGE = "/og-default.jpg";
const SITE_ORIGIN = "https://msl-itech.com";

/* ----- Sitewide LocalBusiness schemas (injected on every page using the hook) ----- */
const LOCAL_BUSINESS_MA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_ORIGIN}/#localbusiness-ma`,
  name: "MSL-iTECH Maroc",
  url: SITE_ORIGIN,
  telephone: "+212-6-89-30-62-78",
  email: "info@msl-itech.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "951 Q.I. Al Massar N°2, Route de Safi",
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-18:00",
  areaServed: ["MA"],
  sameAs: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
};

/* ------------------------------------------------------------------ *
 * SEO store — the hook pushes per-page SEO data into this store; the
 * <GlobalSEO /> component (mounted in <Layout />) subscribes and
 * renders a single <SEOHead /> for the currently active page.
 * ------------------------------------------------------------------ */
let currentSeo: SEOHeadProps | null = null;
const listeners = new Set<() => void>();

function setCurrentSeo(next: SEOHeadProps) {
  currentSeo = next;
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

function getSnapshot() {
  return currentSeo;
}

/**
 * Central SEO renderer — mounted once inside <Layout />.
 * Reads the SEO store and renders <SEOHead /> for the current page.
 */
export function GlobalSEO() {
  const seo = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  if (!seo) return null;
  return <SEOHead {...seo} />;
}

export function useProductSeo(opts: {
  title: string;
  description: string;
  path: string;
  /** Absolute URL or path under public/. Defaults to brand OG image. */
  ogImage?: string;
  ogType?: "website" | "article";
  faqs?: SeoFaq[];
  ldId?: string;
  /** Emits a Service JSON-LD with provider=Organization. */
  service?: SeoService;
  /** Emits a BreadcrumbList JSON-LD. Defaults to [Accueil → {title}]. */
  breadcrumbs?: SeoBreadcrumb[];
  /** If true, emits <meta name="robots" content="noindex, nofollow">. */
  noIndex?: boolean;
}) {
  useEffect(() => {
    const origin = SITE_ORIGIN;
    const url = origin + opts.path;
    const ogImage = opts.ogImage ?? DEFAULT_OG_IMAGE;

    // Assemble JSON-LD schemas for this page.
    const schemas: Record<string, unknown>[] = [];

    if (opts.faqs && opts.faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: opts.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
    }

    // Sitewide LocalBusiness (Maroc) — every route.
    schemas.push({ ...LOCAL_BUSINESS_MA, "@id": `${origin}/#localbusiness-ma`, url: origin });

    // BreadcrumbList — default to [Accueil → current page].
    const breadcrumbs: SeoBreadcrumb[] =
      opts.breadcrumbs && opts.breadcrumbs.length > 0
        ? opts.breadcrumbs
        : opts.path === "/"
          ? []
          : [
              { name: "Accueil", url: origin + "/" },
              { name: opts.title.split("—")[0].trim() || opts.title, url },
            ];
    if (breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: b.url.startsWith("http") ? b.url : origin + b.url,
        })),
      });
    }

    if (opts.service) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": url + "#service",
        name: opts.service.name,
        description: opts.service.description,
        serviceType: opts.service.serviceType,
        provider: { "@id": `${origin}/#organization` },
        areaServed: opts.service.areaServed ?? ["MA"],
        url,
      });
    }

    setCurrentSeo({
      title: opts.title,
      description: opts.description,
      canonical: url,
      ogImage,
      ogType: opts.ogType,
      noIndex: opts.noIndex,
      schemaJson: schemas,
    });
  }, [
    opts.title,
    opts.description,
    opts.path,
    opts.ogImage,
    opts.ogType,
    opts.ldId,
    opts.noIndex,
    JSON.stringify(opts.service),
    JSON.stringify(opts.breadcrumbs),
    JSON.stringify(opts.faqs),
  ]);
}