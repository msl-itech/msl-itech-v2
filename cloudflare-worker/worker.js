/**
 * Cloudflare Worker — msl-itech.com
 * T14 : Vrais codes 404 pour les routes inconnues
 *
 * Logique :
 *  0. 301 — Slash final → sans slash (ex: /contact/ → /contact)
 *  0. 301 — Anciennes URLs blog (anciens slugs → nouveaux slugs)
 *  1. Assets et fichiers système → toujours 200, proxy direct
 *  2. Routes statiques connues   → 200, proxy direct
 *  3. Préfixes dynamiques (/blog/, /realisations/) → vérifier le sitemap
 *  4. Tout le reste              → 404 (body = index.html de Lovable)
 */

// ── 301 — Anciennes URLs blog ────────────────────────────────────────────────
// Ces redirections remplacent les <Navigate> client-side de App.tsx.

const BLOG_REDIRECTS = {
  "/blog/facturation-electronique-maroc-2026":
    "/blog/facturation-electronique-obligatoire-maroc-2026-erp",
  "/blog/sage-vs-odoo-maroc-comparatif-2026":
    "/blog/odoo-vs-sage-maroc-comparatif",
};

// ── Routes statiques ────────────────────────────────────────────────────────
// Mettre à jour ici quand une nouvelle page statique est ajoutée au site.

const STATIC_ROUTES = new Set([
  "/",

  // Modules Odoo
  "/odoo-erp",
  "/odoo-crm-ventes",
  "/odoo-finance-comptabilite",
  "/odoo-stock-inventaire",
  "/odoo-production-fabrication",
  "/odoo-rh-paie",
  "/odoo-services-professionnels",

  // Pages sectorielles Maroc
  "/odoo-horeca-maroc",
  "/odoo-btp-maroc",
  "/odoo-sante-maroc",
  "/odoo-gestion-stock-maroc",
  "/odoo-transport-logistique-maroc",
  "/odoo-tourisme-maroc",

  // Intégrateur
  "/integrateur-odoo-maroc",
  "/integrateur-odoo-marrakech",
  "/integrateur-odoo-casablanca",

  // Cibles structure
  "/pme-en-structuration",
  "/entreprise-multi-sites",
  "/structure-en-croissance",

  // Services
  "/creation-web",
  "/marketing-digital",

  // Outils
  "/outils/conformite-dgi",
  "/outils/roi-erp",
  "/outils/diagnostic-digital",
  "/outils/comparateur-sage-odoo",
  "/audit-digital-gratuit",

  // Corporate
  "/realisations",
  "/notre-approche",
  "/a-propos",
  "/contact",
  "/prendre-rendez-vous",

  // Blog index + hubs
  "/blog",
  "/blog/facturation-electronique-dgi",
  "/blog/acheter-odoo",
  "/blog/problematiques-metier",
  "/blog/sites-web-acquisition",
  "/blog/belgique",

  // Légales
  "/politique-de-confidentialite",
  "/conditions-generales-de-vente",
  "/mentions-legales",
  "/conformite-loi-09-08",
]);

// ── Préfixes dynamiques ─────────────────────────────────────────────────────
// Ces chemins sont vérifiés contre le sitemap.xml (cache 1h).

const DYNAMIC_PREFIXES = ["/blog/", "/realisations/"];

// ── Patterns qui passent toujours (assets, fichiers système) ────────────────

const ALWAYS_PASS = [
  /\.[a-zA-Z0-9]+$/,     // tout ce qui a une extension (.js, .css, .png, .webp…)
  /^\/api\//,            // routes API
  /^\/sitemap\.xml/,
  /^\/robots\.txt/,
  /^\/llms/,             // llms.txt, llms-full.txt
  /^\/favicon/,
  /^\/assets\//,
  /^\/public\//,
];

// ── Cache sitemap ───────────────────────────────────────────────────────────

const SITEMAP_URL = "https://msl-itech.com/sitemap.xml";
const SITEMAP_TTL = 3600; // 1 heure en secondes

async function getSitemapRoutes(ctx) {
  const cache = caches.default;
  const cacheKey = new Request(SITEMAP_URL);

  // Lire depuis le cache Cloudflare
  const cached = await cache.match(cacheKey);
  if (cached) {
    const text = await cached.text();
    return parseSitemapLocs(text);
  }

  // Fetch depuis l'origine
  try {
    const res = await fetch(SITEMAP_URL, { cf: { cacheTtl: 0 } });
    if (!res.ok) return null;

    const text = await res.text();
    const routes = parseSitemapLocs(text);

    // Stocker en cache pour 1h
    ctx.waitUntil(
      cache.put(
        cacheKey,
        new Response(text, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": `public, max-age=${SITEMAP_TTL}`,
          },
        })
      )
    );

    return routes;
  } catch {
    // fail-open : si le sitemap est inaccessible, on laisse passer
    return null;
  }
}

function parseSitemapLocs(xml) {
  const routes = new Set();
  const re = /<loc>https:\/\/msl-itech\.com([^<]*)<\/loc>/g;
  let match;
  while ((match = re.exec(xml)) !== null) {
    const path = match[1] || "/";
    routes.add(path);
    // Ajouter aussi sans slash final
    if (path.endsWith("/") && path !== "/") {
      routes.add(path.slice(0, -1));
    }
  }
  return routes;
}

// ── Réponse 404 ─────────────────────────────────────────────────────────────

async function respond404(request) {
  // Fetch l'index.html de Lovable (qui affiche <NotFound />)
  // mais on retourne le status 404
  const origin = await fetch(request);
  return new Response(origin.body, {
    status: 404,
    statusText: "Not Found",
    headers: origin.headers,
  });
}

// ── Handler principal ────────────────────────────────────────────────────────

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 0a. Slash final → 301 vers la version sans slash (sauf "/")
    if (path.length > 1 && path.endsWith("/")) {
      const target = url.origin + path.slice(0, -1) + (url.search || "");
      return Response.redirect(target, 301);
    }

    const normalizedPath = path;

    // 0b. Anciennes URLs blog → 301 vers le nouvel URL canonique
    if (BLOG_REDIRECTS[normalizedPath]) {
      return Response.redirect(
        url.origin + BLOG_REDIRECTS[normalizedPath],
        301
      );
    }

    // 1. Assets et fichiers système → proxy direct
    if (ALWAYS_PASS.some((pattern) => pattern.test(path))) {
      return fetch(request);
    }

    // 2. Routes statiques connues → proxy direct
    if (STATIC_ROUTES.has(normalizedPath)) {
      return fetch(request);
    }

    // 3. Préfixes dynamiques → vérifier le sitemap
    const isDynamic = DYNAMIC_PREFIXES.some((prefix) =>
      normalizedPath.startsWith(prefix)
    );

    if (isDynamic) {
      const sitemapRoutes = await getSitemapRoutes(ctx);

      // fail-open : sitemap inaccessible → on laisse passer
      if (sitemapRoutes === null) {
        return fetch(request);
      }

      if (sitemapRoutes.has(normalizedPath)) {
        return fetch(request); // route valide
      }

      return respond404(request); // route inconnue dans ce préfixe
    }

    // 4. Tout le reste → 404
    return respond404(request);
  },
};
