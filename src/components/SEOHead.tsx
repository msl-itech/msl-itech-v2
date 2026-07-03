import { Helmet } from "react-helmet-async";

export interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noIndex?: boolean;
  /**
   * One JSON-LD object or an array of them. Each is rendered as a
   * <script type="application/ld+json"> tag inside <head>.
   */
  schemaJson?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULT_OG_IMAGE = "/og-default.jpg";
const SITE_ORIGIN =
  typeof window !== "undefined" ? window.location.origin : "";

function toAbsolute(url: string): string {
  if (!url) return url;
  if (url.startsWith("http")) return url;
  return SITE_ORIGIN + (url.startsWith("/") ? url : "/" + url);
}

/**
 * Central SEO component (react-helmet-async).
 * Handles: <title>, meta description, canonical, Open Graph, Twitter Card,
 * robots (via noIndex) and JSON-LD schema(s).
 */
export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  noIndex,
  schemaJson,
}: SEOHeadProps) {
  const absCanonical = toAbsolute(canonical);
  const absOgImage = toAbsolute(ogImage || DEFAULT_OG_IMAGE);
  const schemas = Array.isArray(schemaJson)
    ? schemaJson
    : schemaJson
      ? [schemaJson]
      : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={absCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={absCanonical} />
      <meta property="og:image" content={absOgImage} />
      <meta property="og:site_name" content="MSL-iTECH" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absOgImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export default SEOHead;