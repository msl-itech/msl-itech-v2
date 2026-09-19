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
export type SeoArticle = {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image?: string;
  articleSection?: string;
};
export type SeoBreadcrumb = { name: string; url: string };

const DEFAULT_OG_IMAGE = "/og-default.jpg";
const SITE_ORIGIN = "https://msl-itech.com";

/**
 * Central ProfessionalService entity — the single source of truth.
 * Only emitted on entity pages (accueil, contact, city pages).
 * All other schemas reference it via { "@id": "…/#organization" }.
 */
const ORGANIZATION_ENTITY = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_ORIGIN}/#organization`,
  name: "MSL-iTECH",
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/og-default.jpg`,
  image: `${SITE_ORIGIN}/og-default.jpg`,
  description:
    "Odoo Ready Partner basé à Marrakech (v18 & v19). Implémentation ERP, développement de modules sur mesure et personnalisation d'Odoo natif pour les PME marocaines (HORECA, BTP, santé, commerce, transport, services).",
  foundingDate: "2020",
  telephone: "+212-6-89-30-62-78",
  email: "info@msl-itech.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "951 Q.I. Al Massar N°2, Route de Safi",
    addressLocality: "Marrakech",
    postalCode: "40000",
    addressCountry: "MA",
  },
  areaServed: [
    { "@type": "Country", name: "Maroc" },
    { "@type": "Country", name: "Belgique" },
    { "@type": "Country", name: "Canada" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+212-6-89-30-62-78",
      contactType: "customer service",
      areaServed: "MA",
      availableLanguage: ["French", "Arabic"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+32-2-886-05-49",
      contactType: "customer service",
      areaServed: "BE",
      availableLanguage: ["French"],
    },
  ],
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [
    "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
    "https://www.linkedin.com/company/msl-itech",
  ],
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
  /** Emits an Article JSON-LD with publisher → @id and author. */
  article?: SeoArticle;
  /** Emits a BreadcrumbList JSON-LD. Defaults to [Accueil → {title}]. */
  breadcrumbs?: SeoBreadcrumb[];
  /** If true, emits <meta name="robots" content="noindex, nofollow">. */
  noIndex?: boolean;
  /** If true, includes the full ProfessionalService entity on this page (accueil, contact, villes). */
  isEntityPage?: boolean;
}) {
  useEffect(() => {
    const origin = SITE_ORIGIN;
    const url = origin + opts.path;
    const ogImage = opts.ogImage ?? DEFAULT_OG_IMAGE;

    // Assemble JSON-LD schemas for this page.
    const schemas: Record<string, unknown>[] = [];

    // ProfessionalService entity — only on entity pages.
    if (opts.isEntityPage) {
      schemas.push(ORGANIZATION_ENTITY);
    }

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

    if (opts.article) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: opts.article.headline,
        description: opts.article.description,
        image: opts.article.image,
        articleSection: opts.article.articleSection,
        datePublished: opts.article.datePublished,
        dateModified: opts.article.dateModified,
        inLanguage: "fr",
        author: {
          "@type": "Person",
          name: opts.article.authorName,
          url: `${origin}/a-propos`,
        },
        publisher: { "@id": `${origin}/#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
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
    opts.isEntityPage,
    JSON.stringify(opts.service),
    JSON.stringify(opts.article),
    JSON.stringify(opts.breadcrumbs),
    JSON.stringify(opts.faqs),
  ]);
}
