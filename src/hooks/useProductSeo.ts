import { useEffect } from "react";

export type SeoFaq = { q: string; a: string };

const DEFAULT_OG_IMAGE = "https://www.msl-itech.com/og-default.jpg";

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

export function useProductSeo(opts: {
  title: string;
  description: string;
  path: string;
  /** Absolute URL or path under public/. Defaults to brand OG image. */
  ogImage?: string;
  ogType?: "website" | "article";
  faqs?: SeoFaq[];
  ldId?: string;
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
      document.getElementById(opts.ldId)?.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = opts.ldId;
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: opts.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
      document.head.appendChild(script);
    }
  }, [
    opts.title,
    opts.description,
    opts.path,
    opts.ogImage,
    opts.ogType,
    opts.ldId,
  ]);
}