import { useEffect } from "react";

export type SeoFaq = { q: string; a: string };

export function useProductSeo(opts: {
  title: string;
  description: string;
  path: string;
  faqs?: SeoFaq[];
  ldId?: string;
}) {
  useEffect(() => {
    document.title = opts.title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", opts.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + opts.path);

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
  }, [opts.title, opts.description, opts.path, opts.ldId]);
}