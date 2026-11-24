// Purge prérendu — correctif noindex, 29/09/2026
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { sendPageView, setCurrentPage } from "@/lib/analytics";
import { ogLocale, type Alternates, type Lang } from "@/lib/i18n";

export interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  /**
   * One JSON-LD object or an array of them. Each is rendered as a
   * <script type="application/ld+json"> tag inside <head>.
   */
  schemaJson?: Record<string, unknown> | Record<string, unknown>[];
  /** Langue de la page (défaut : "fr"). Pilote <html lang> et og:locale. */
  lang?: Lang;
  /**
   * Versions linguistiques existantes (chemins relatifs). Sans valeur, seule
   * la version française (= canonical) est déclarée.
   */
  alternates?: Alternates;
}

const DEFAULT_OG_IMAGE = "https://msl-itech.com/og-default.jpg";
const SITE_ORIGIN = "https://msl-itech.com";

function toAbsolute(url: string): string {
  if (!url) return url;
  if (url.startsWith("http")) return url;
  return SITE_ORIGIN + (url.startsWith("/") ? url : "/" + url);
}

/**
 * Central SEO component (react-helmet-async).
 * Handles: <title>, meta description, canonical, Open Graph, Twitter Card,
 * robots (max-snippet) and JSON-LD schema(s) merged into @graph.
 */
export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  noIndex = false,
  schemaJson,
  lang = "fr",
  alternates,
}: SEOHeadProps) {

  const absCanonical = toAbsolute(canonical);
  const absOgImage = toAbsolute(ogImage || DEFAULT_OG_IMAGE);
  // hreflang : la version FR sert de x-default (marché principal).
  // Une page noindex ne déclare aucune alternative.
  const altFr = alternates?.fr ? toAbsolute(alternates.fr) : lang === "fr" ? absCanonical : undefined;
  const altEn = alternates?.en ? toAbsolute(alternates.en) : lang === "en" ? absCanonical : undefined;
  const xDefault = altFr ?? altEn;
  const schemas = Array.isArray(schemaJson)
    ? schemaJson
    : schemaJson
      ? [schemaJson]
      : [];

  // Synchronise le store analytics (titre + URL) à chaque changement de route,
  // même si GA4 n'est pas encore chargé. Ainsi, sendPageView et tous les événements
  // ultérieurs (scroll, form_*, contact_click…) utilisent toujours le bon titre.
  // On utilise l'URL réelle (avec UTM/gclid) pour GA4, pas le canonical (sans query).
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete("msl_internal");
    setCurrentPage(title, url.toString());
    const t = setTimeout(() => sendPageView(), 0);
    return () => clearTimeout(t);
  }, [title, absCanonical]); // eslint-disable-line react-hooks/exhaustive-deps

  // Merge multiple schemas into a single @graph block
  const merged =
    schemas.length === 0
      ? null
      : schemas.length === 1
        ? schemas[0]
        : {
            "@context": "https://schema.org",
            "@graph": schemas.map(({ "@context": _ctx, ...rest }) => rest),
          };

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={absCanonical} />

      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* hreflang — "fr" couvre Maroc, Belgique et Québec ; "en" seulement si traduite */}
      {!noIndex && altFr && <link rel="alternate" hrefLang="fr" href={altFr} />}
      {!noIndex && altEn && <link rel="alternate" hrefLang="en" href={altEn} />}
      {!noIndex && xDefault && <link rel="alternate" hrefLang="x-default" href={xDefault} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={absCanonical} />
      <meta property="og:image" content={absOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="MSL-iTECH" />
      <meta property="og:locale" content={ogLocale(lang)} />
      {!noIndex && altFr && altEn && (
        <meta property="og:locale:alternate" content={ogLocale(lang === "fr" ? "en" : "fr")} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absOgImage} />

      {/* JSON-LD — single @graph block */}
      {merged && (
        <script type="application/ld+json">{JSON.stringify(merged)}</script>
      )}
    </Helmet>
  );
}

export default SEOHead;