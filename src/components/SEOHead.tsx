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
  noIndex = false,
  schemaJson,
}: SEOHeadProps) {
  const absCanonical = toAbsolute(canonical);
  const absOgImage = toAbsolute(ogImage || DEFAULT_OG_IMAGE);
  const schemas = Array.isArray(schemaJson)
    ? schemaJson
    : schemaJson
      ? [schemaJson]
      : [];

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
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={absCanonical} />

      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={absCanonical} />
      <meta property="og:image" content={absOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="MSL-iTECH" />
      <meta property="og:locale" content="fr_MA" />

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