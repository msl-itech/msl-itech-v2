/**
 * Source de vérité unique pour le sitemap.xml.
 * Le fichier est généré dynamiquement au build (voir vite.config.ts) et
 * également servi en dev pour pouvoir le tester localement.
 *
 * Contraintes : pas d'imports d'images, de hooks React, ni d'alias `@/`.
 * Les imports relatifs vers des fichiers de pure data sont autorisés —
 * ils sont transpilés par Vite sans dépendance navigateur.
 *
 * Les articles de blog sont lus directement depuis blogPosts.ts :
 * publier un article suffit pour qu'il apparaisse dans le sitemap au build suivant.
 */
import { blogPosts } from "../content/blogPosts";
import { caseStudies } from "../content/caseStudies";
import { getAlternates, TRANSLATED_ROUTES } from "./i18n";

export type SitemapEntry = {
  loc: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
  lastmod?: string;
};

const SITE = "https://msl-itech.com";

const staticEntries: SitemapEntry[] = [
  { loc: "/", changefreq: "weekly", priority: 1.0 },

  // Modules Odoo
  { loc: "/odoo-erp", changefreq: "monthly", priority: 0.9 },
  { loc: "/odoo-crm-ventes", changefreq: "monthly", priority: 0.9 },
  { loc: "/odoo-finance-comptabilite", changefreq: "monthly", priority: 0.9 },
  { loc: "/odoo-stock-inventaire", changefreq: "monthly", priority: 0.9 },
  { loc: "/odoo-production-fabrication", changefreq: "monthly", priority: 0.8 },
  { loc: "/odoo-rh-paie", changefreq: "monthly", priority: 0.8 },
  { loc: "/odoo-services-professionnels", changefreq: "monthly", priority: 0.8 },

  // Pages sectorielles Maroc
  { loc: "/odoo-horeca-maroc", changefreq: "monthly", priority: 0.95 },
  { loc: "/odoo-btp-maroc", changefreq: "monthly", priority: 0.95 },
  { loc: "/odoo-sante-maroc", changefreq: "monthly", priority: 0.95 },
  { loc: "/odoo-gestion-stock-maroc", changefreq: "monthly", priority: 0.95 },
  { loc: "/odoo-transport-logistique-maroc", changefreq: "monthly", priority: 0.8 },
  { loc: "/odoo-tourisme-maroc", changefreq: "monthly", priority: 0.9 },

  // Pages de positionnement intégrateur (SEO commercial)
  { loc: "/integrateur-odoo-maroc", changefreq: "monthly", priority: 0.95 },
  { loc: "/integrateur-odoo-marrakech", changefreq: "monthly", priority: 0.9 },
  { loc: "/integrateur-odoo-casablanca", changefreq: "monthly", priority: 0.9 },

  // Pages cibles structure
  { loc: "/pme-en-structuration", changefreq: "monthly", priority: 0.85 },
  { loc: "/entreprise-multi-sites", changefreq: "monthly", priority: 0.85 },
  { loc: "/structure-en-croissance", changefreq: "monthly", priority: 0.85 },

  // Services
  { loc: "/creation-web", changefreq: "monthly", priority: 0.8 },
  { loc: "/marketing-digital", changefreq: "monthly", priority: 0.8 },

  // Outils interactifs (tunnel de conversion)
  { loc: "/outils/conformite-dgi", changefreq: "monthly", priority: 0.9 },
  { loc: "/outils/roi-erp", changefreq: "monthly", priority: 0.9 },
  { loc: "/outils/diagnostic-digital", changefreq: "monthly", priority: 0.9 },
  { loc: "/outils/comparateur-sage-odoo", changefreq: "monthly", priority: 0.9 },

  // Pages corporate
  { loc: "/realisations", changefreq: "monthly", priority: 0.85 },
  { loc: "/realisations/odoo", changefreq: "monthly", priority: 0.85 },
  { loc: "/realisations/sites-web", changefreq: "monthly", priority: 0.8 },
  { loc: "/notre-approche", changefreq: "monthly", priority: 0.9 },
  { loc: "/a-propos", changefreq: "monthly", priority: 0.7 },
  { loc: "/contact", changefreq: "monthly", priority: 0.8 },
  { loc: "/prendre-rendez-vous", changefreq: "monthly", priority: 0.7 },

  // Blog index + hub pages
  { loc: "/blog", changefreq: "weekly", priority: 0.8 },
  { loc: "/blog/facturation-electronique-dgi", changefreq: "weekly", priority: 0.85 },
  { loc: "/blog/acheter-odoo", changefreq: "weekly", priority: 0.85 },
  { loc: "/blog/problematiques-metier", changefreq: "weekly", priority: 0.85 },
  { loc: "/blog/sites-web-acquisition", changefreq: "weekly", priority: 0.85 },
  { loc: "/blog/belgique", changefreq: "weekly", priority: 0.85 },

  // Pages de conversion outbound
  { loc: "/audit-digital-gratuit", changefreq: "monthly", priority: 0.6 },

  // Pages légales
  { loc: "/politique-de-confidentialite", changefreq: "yearly", priority: 0.3 },
  { loc: "/conditions-generales-de-vente", changefreq: "yearly", priority: 0.3 },
  { loc: "/mentions-legales", changefreq: "yearly", priority: 0.3 },
  { loc: "/conformite-loi-09-08", changefreq: "yearly", priority: 0.3 },
];

export function buildSitemapEntries(): SitemapEntry[] {
  const blogEntries: SitemapEntry[] = blogPosts.filter((p) => !p.noIndex).map((p) => ({
    loc: `/blog/${p.slug}`,
    changefreq: "monthly" as const,
    priority: 0.85,
    lastmod: p.updatedAt ?? p.publishedAt,
  }));
  const caseEntries: SitemapEntry[] = caseStudies.map((c) => ({
    loc: `/realisations/${c.slug}`,
    changefreq: "monthly" as const,
    priority: 0.8,
    lastmod: c.publishedAt,
  }));
  const frEntries = [...staticEntries, ...blogEntries, ...caseEntries];
  // Versions anglaises : une entrée par page traduite, mêmes réglages que la page FR.
  const enEntries: SitemapEntry[] = frEntries
    .filter((e) => TRANSLATED_ROUTES[e.loc])
    .map((e) => ({ ...e, loc: TRANSLATED_ROUTES[e.loc] }));
  return [...frEntries, ...enEntries];
}

/** Balises <xhtml:link> hreflang d'une URL (vide si la page n'a qu'une langue). */
function alternateLinks(loc: string): string[] {
  const alt = getAlternates(loc);
  if (!alt.fr || !alt.en) return [];
  return [
    `    <xhtml:link rel="alternate" hreflang="fr" href="${SITE}${alt.fr}"/>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${alt.en}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${alt.fr}"/>`,
  ];
}

export function renderSitemapXml(entries: SitemapEntry[] = buildSitemapEntries()): string {
  const today = new Date().toISOString().slice(0, 10);
  const urls = entries
    .map((e) => {
      const parts = [`    <loc>${SITE}${e.loc}</loc>`];
      parts.push(`    <lastmod>${e.lastmod ?? today}</lastmod>`);
      if (e.changefreq) parts.push(`    <changefreq>${e.changefreq}</changefreq>`);
      if (e.priority !== undefined) parts.push(`    <priority>${e.priority.toFixed(2)}</priority>`);
      parts.push(...alternateLinks(e.loc));
      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}