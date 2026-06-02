/**
 * Source de vérité unique pour le sitemap.xml.
 * Le fichier est généré dynamiquement au build (voir vite.config.ts) et
 * également servi en dev pour pouvoir le tester localement.
 *
 * Ce fichier ne doit avoir AUCUNE dépendance sur l'app (pas d'imports
 * d'images, de hooks, d'alias `@/...`) pour pouvoir être consommé par
 * Node lors du build. Les slugs blog sont déclarés ici explicitement.
 */
export type SitemapEntry = {
  loc: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
  lastmod?: string;
};

const SITE = "https://msl-itech-v2.lovable.app";

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

  // Pages cibles structure
  { loc: "/pme-en-structuration", changefreq: "monthly", priority: 0.85 },
  { loc: "/entreprise-multi-sites", changefreq: "monthly", priority: 0.85 },
  { loc: "/structure-en-croissance", changefreq: "monthly", priority: 0.85 },

  // Services
  { loc: "/creation-web", changefreq: "monthly", priority: 0.8 },
  { loc: "/marketing-digital", changefreq: "monthly", priority: 0.8 },

  // Pages corporate
  { loc: "/realisations", changefreq: "monthly", priority: 0.85 },
  { loc: "/tarifs", changefreq: "monthly", priority: 0.9 },
  { loc: "/a-propos", changefreq: "monthly", priority: 0.7 },
  { loc: "/contact", changefreq: "monthly", priority: 0.8 },
  { loc: "/prendre-rendez-vous", changefreq: "monthly", priority: 0.7 },

  // Piliers SEO Belgique
  { loc: "/consultant-odoo-belgique", changefreq: "monthly", priority: 0.95 },
  { loc: "/tarif-odoo-belgique", changefreq: "monthly", priority: 0.95 },

  // Blog index
  { loc: "/blog", changefreq: "weekly", priority: 0.8 },
];

/** Articles de blog — tenir à jour quand on en publie un nouveau. */
const blogSlugs: { slug: string; publishedAt: string }[] = [
  { slug: "facturation-electronique-maroc-2026", publishedAt: "2026-04-15" },
  { slug: "gestion-stock-maroc-apres-1-5m-mad", publishedAt: "2026-03-20" },
  { slug: "partenaire-odoo-certifie-vs-freelance", publishedAt: "2026-02-10" },
  { slug: "cout-implementation-odoo-belgique-2026", publishedAt: "2026-01-22" },
];

export function buildSitemapEntries(): SitemapEntry[] {
  const blogEntries: SitemapEntry[] = blogSlugs.map((p) => ({
    loc: `/blog/${p.slug}`,
    changefreq: "monthly",
    priority: 0.85,
    lastmod: p.publishedAt,
  }));
  return [...staticEntries, ...blogEntries];
}

export function renderSitemapXml(entries: SitemapEntry[] = buildSitemapEntries()): string {
  const today = new Date().toISOString().slice(0, 10);
  const urls = entries
    .map((e) => {
      const parts = [`    <loc>${SITE}${e.loc}</loc>`];
      parts.push(`    <lastmod>${e.lastmod ?? today}</lastmod>`);
      if (e.changefreq) parts.push(`    <changefreq>${e.changefreq}</changefreq>`);
      if (e.priority !== undefined) parts.push(`    <priority>${e.priority.toFixed(2)}</priority>`);
      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}