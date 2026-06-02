import { useEffect } from "react";

export type SeoFaq = { q: string; a: string };
export type SeoService = {
  /** Service display name, e.g. "Implémentation Odoo CRM & Ventes" */
  name: string;
  /** 1–2 sentence description used in the JSON-LD `description`. */
  description: string;
  /** e.g. ["Odoo CRM", "Automatisation commerciale"] */
  serviceType: string[];
  /** ISO country codes. Defaults to ["MA", "BE", "CA"]. */
  areaServed?: string[];
};
export type SeoBreadcrumb = { name: string; url: string };

const DEFAULT_OG_IMAGE = "/og-default.jpg";
const SITE_ORIGIN = typeof window !== "undefined" ? window.location.origin : "";

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
  areaServed: ["MA", "BE", "CA"],
  sameAs: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
};
const LOCAL_BUSINESS_BE = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_ORIGIN}/#localbusiness-be`,
  name: "MSL-iTECH — Service Belgique (à distance)",
  url: SITE_ORIGIN,
  telephone: "+32-2-886-05-49",
  email: "info@msl-itech.com",
  priceRange: "€€",
  areaServed: "BE",
  sameAs: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertJsonLd(id: string, data: unknown) {
  document.getElementById(id)?.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
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
}) {
  useEffect(() => {
    const url = window.location.origin + opts.path;
    const ogImage = opts.ogImage
      ? opts.ogImage.startsWith("http")
        ? opts.ogImage
        : window.location.origin + opts.ogImage
      : DEFAULT_OG_IMAGE;

    document.title = opts.title;

    upsertMeta("name", "description", opts.description);

    // Canonical
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Open Graph
    upsertMeta("property", "og:title", opts.title);
    upsertMeta("property", "og:description", opts.description);
    upsertMeta("property", "og:type", opts.ogType ?? "website");
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:site_name", "MSL-iTECH");
    upsertMeta("property", "og:locale", "fr_FR");

    // Twitter Card
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", opts.title);
    upsertMeta("name", "twitter:description", opts.description);
    upsertMeta("name", "twitter:image", ogImage);

    if (opts.faqs && opts.faqs.length > 0 && opts.ldId) {
      upsertJsonLd(opts.ldId, {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: opts.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
    }

    // Sitewide LocalBusiness (MA + BE) — needed on every route, not only the home.
    upsertJsonLd("ld-localbusiness-ma", LOCAL_BUSINESS_MA);
    upsertJsonLd("ld-localbusiness-be", LOCAL_BUSINESS_BE);

    // BreadcrumbList — default to [Accueil → current page] if not provided.
    const breadcrumbs: SeoBreadcrumb[] =
      opts.breadcrumbs && opts.breadcrumbs.length > 0
        ? opts.breadcrumbs
        : opts.path === "/"
          ? []
          : [
              { name: "Accueil", url: SITE_ORIGIN + "/" },
              { name: opts.title.split("—")[0].trim() || opts.title, url },
            ];
    if (breadcrumbs.length > 0) {
      upsertJsonLd("ld-breadcrumb", {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: b.url.startsWith("http") ? b.url : SITE_ORIGIN + b.url,
        })),
      });
    }

    // Per-route Service schema
    if (opts.service) {
      upsertJsonLd("ld-service", {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": url + "#service",
        name: opts.service.name,
        description: opts.service.description,
        serviceType: opts.service.serviceType,
        provider: { "@id": `${SITE_ORIGIN}/#organization` },
        areaServed: opts.service.areaServed ?? ["MA", "BE", "CA"],
        url,
      });
    } else {
      document.getElementById("ld-service")?.remove();
    }
  }, [
    opts.title,
    opts.description,
    opts.path,
    opts.ogImage,
    opts.ogType,
    opts.ldId,
    JSON.stringify(opts.service),
    JSON.stringify(opts.breadcrumbs),
  ]);
}