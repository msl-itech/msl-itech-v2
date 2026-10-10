/**
 * Cloudflare Worker — msl-itech.com
 * T14 : Vrais codes 404 pour les routes inconnues
 *
 * Logique :
 *  0. Purge cache sitemap (endpoint protégé par secret, POST /?_purge=SECRET)
 *  1. 301 — Slash final → sans slash (ex: /contact/ → /contact)
 *  2. 301 — Anciennes URLs blog (anciens slugs → nouveaux slugs)
 *  3. Assets et fichiers système → toujours 200, proxy direct
 *  4. Routes statiques connues   → 200, proxy direct
 *  5. Préfixes dynamiques (/blog/, /realisations/) → vérifier le sitemap
 *  6. Tout le reste              → 404 (body = index.html de Lovable)
 *
 * Variable d'environnement requise :
 *  PURGE_SECRET — chaîne aléatoire, définie dans le dashboard Worker
 *
 * Purger le cache après une publication :
 *  curl -X POST "https://msl-itech.com/?_purge=VOTRE_SECRET"
 */
// ── 301 — Anciennes URLs blog ────────────────────────────────────────────────
// Ces redirections remplacent les <Navigate> client-side de App.tsx.
const BLOG_REDIRECTS = {
  "/blog/facturation-electronique-maroc-2026":
    "/blog/facturation-electronique-obligatoire-maroc-2026-erp",
  "/blog/sage-vs-odoo-maroc-comparatif-2026":
    "/blog/odoo-vs-sage-maroc-comparatif",
  "/about": "/a-propos",
  "/serviceOdoo": "/odoo-erp",
  "/ventes": "/odoo-crm-ventes",
  "/tarif-odoo": "/notre-approche",
  "/tarif-Odoo": "/notre-approche",
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
  "/email/desinscription",
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
    // fail-open : sitemap trop petit → probablement cassé, on laisse passer                        
    if (routes.size < 50) return null; 
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
// ── Cache HTML ──────────────────────────────────────────────────────────────
const HTML_MAX_AGE = 3600; // 1 heure pour les pages HTML

async function fetchPage(request) {
  const origin = await fetch(request);
  const headers = new Headers(origin.headers);
  headers.set("Cache-Control", `public, max-age=${HTML_MAX_AGE}`);
  return new Response(origin.body, {
    status: origin.status,
    statusText: origin.statusText,
    headers,
  });
}
// ── Réponse 404 ─────────────────────────────────────────────────────────────
async function respond404(request) {
// Fetch l'index.html de Lovable (qui affiche <NotFound />)
// mais on retourne le status 404 avec Cache-Control: no-store
// pour éviter qu'un 404 soit mis en cache (navigateur ou CDN).
  const origin = await fetch(request);
  const headers = new Headers(origin.headers);
  headers.set("Cache-Control", "no-store");
  return new Response(origin.body, {
    status: 404,
    statusText: "Not Found",
    headers,
  });
}
// ── Handler principal ────────────────────────────────────────────────────────
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
// 0. Endpoint de purge du cache sitemap
// POST https://msl-itech.com/?_purge=SECRET
    if (
      request.method === "POST" &&
      url.searchParams.get("_purge") === env.PURGE_SECRET &&
      env.PURGE_SECRET
    ) {
      const cache = caches.default;
      const deleted = await cache.delete(new Request(SITEMAP_URL));
      return new Response(
        JSON.stringify({ purged: deleted, sitemap: SITEMAP_URL }),
        { headers: { "Content-Type": "application/json" } }
      );
    }
// 2. Slash final → 301 vers la version sans slash (sauf "/")
    if (path.length > 1 && path.endsWith("/")) {
      const target = url.origin + path.slice(0, -1) + (url.search || "");
      return Response.redirect(target, 301);
    }
    const normalizedPath = path;
// 3. Anciennes URLs blog → 301 vers le nouvel URL canonique
    if (BLOG_REDIRECTS[normalizedPath]) {
      return Response.redirect(
        url.origin + BLOG_REDIRECTS[normalizedPath] + (url.search || ""),
        301
      );
    }
// 1. Assets et fichiers système → proxy direct
    if (ALWAYS_PASS.some((pattern) => pattern.test(path))) {
      return fetch(request);
    }
// 2. Routes statiques connues → cache HTML 1h
    if (STATIC_ROUTES.has(normalizedPath)) {
      return fetchPage(request);
    }
// 3. Préfixes dynamiques → vérifier le sitemap
    const isDynamic = DYNAMIC_PREFIXES.some((prefix) =>
      normalizedPath.startsWith(prefix)
    );
    if (isDynamic) {
      const sitemapRoutes = await getSitemapRoutes(ctx);
// fail-open : sitemap inaccessible → on laisse passer
      if (sitemapRoutes === null) {
        return fetchPage(request);
      }
      if (sitemapRoutes.has(normalizedPath)) {
        return fetchPage(request); // route valide
      }
      return respond404(request); // route inconnue dans ce préfixe
    }
// 4. Tout le reste → 404
    return respond404(request);
  },
};