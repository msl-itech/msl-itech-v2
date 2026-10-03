# T14 — Vrais codes 404 via Cloudflare Worker

**Statut :** Spécification technique  
**Priorité :** Non urgent  
**Branche :** `fix/t14` (à créer depuis `fix/t8`)

---

## Contexte

Le site est une SPA React déployée sur Lovable. Le serveur Lovable retourne toujours `200 + index.html`, quelle que soit l'URL demandée. React Router gère le routage côté client : les routes inconnues affichent le composant `<NotFound />`, mais le navigateur et Googlebot ont déjà reçu un **HTTP 200**.

**Conséquence SEO :** une URL inventée comme `/blog/zz-page-inexistante` est indiscernable d'une vraie page pour Google. Les pages supprimées ou malformées restent dans l'index. Google Search Console les comptabilise comme des pages valides.

**Objectif :** toute URL qui ne correspond à aucune route du site retourne un vrai **HTTP 404**, tout en affichant la page "On s'est perdus".

---

## Architecture retenue : Cloudflare Worker

Cloudflare est déjà en place comme DNS. Un **Worker** s'intercale entre l'internaute et Lovable sans toucher à l'hébergement.

```
Internaute
    │
    ▼
Cloudflare (DNS + Worker)
    │
    ├── Route connue ?  ──OUI──▶  Proxy vers Lovable  ──▶  200 + index.html
    │
    └── Route inconnue ? ──OUI──▶  Proxy vers Lovable  ──▶  body index.html
                                   MAIS status = 404
```

Lovable ne change pas. Le Worker lit, décide, et réécrit le statut si nécessaire.

---

## Validation des routes : deux niveaux

### Niveau 1 — Préfixes dynamiques (vérifiés contre le sitemap)

Ces routes peuvent changer souvent (articles, réalisations, pages hub) :

| Préfixe | Source de vérité |
|---------|-----------------|
| `/blog/` | `sitemap.xml` |
| `/realisations/` | `sitemap.xml` |

Pour ces préfixes, le Worker vérifie que l'URL exacte figure dans le `sitemap.xml`. Si elle n'y est pas → 404.

### Niveau 2 — Routes statiques (liste en dur)

Ces routes sont stables et changent rarement :

```
/
/odoo-erp
/odoo-crm-ventes
/odoo-finance-comptabilite
/odoo-stock-inventaire
/odoo-production-fabrication
/odoo-rh-paie
/odoo-services-professionnels
/odoo-horeca-maroc
/odoo-btp-maroc
/odoo-sante-maroc
/odoo-gestion-stock-maroc
/odoo-transport-logistique-maroc
/odoo-tourisme-maroc
/integrateur-odoo-maroc
/integrateur-odoo-marrakech
/integrateur-odoo-casablanca
/pme-en-structuration
/entreprise-multi-sites
/structure-en-croissance
/creation-web
/marketing-digital
/outils/conformite-dgi
/outils/roi-erp
/outils/diagnostic-digital
/outils/comparateur-sage-odoo
/audit-digital-gratuit
/realisations
/notre-approche
/a-propos
/contact
/prendre-rendez-vous
/blog
/blog/facturation-electronique-dgi
/blog/acheter-odoo
/blog/problematiques-metier
/blog/sites-web-acquisition
/blog/belgique
/politique-de-confidentialite
/conditions-generales-de-vente
/mentions-legales
/conformite-loi-09-08
```

Pour tout ce qui ne correspond ni à un préfixe dynamique ni à cette liste → 404.

---

## Cache du sitemap

Fetcher le sitemap à chaque requête serait trop lent (~200 ms). Le Worker utilise la **Cloudflare Cache API** :

```
Durée de cache : 1 heure (TTL = 3600s)
Clé de cache   : https://msl-itech.com/sitemap.xml
Invalidation   : automatique au prochain build Lovable (le sitemap est régénéré)
```

Si le fetch échoue (sitemap indisponible) → le Worker laisse passer la requête sans bloquer (fail-open : mieux vaut un faux 200 que bloquer un vrai utilisateur).

---

## Cas limites à gérer

| Cas | Comportement attendu |
|-----|---------------------|
| `/blog/article-existant` (dans sitemap) | 200 |
| `/blog/article-supprime` (plus dans sitemap) | 404 |
| `/blog/article-supprime` avec redirect dans App.tsx | 200 (la redirect React s'applique avant) |
| `/outils/conformite-dgi` | 200 (liste statique) |
| `/outils/inexistant` | 404 |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | 200 (fichiers publics) |
| `/_next/`, `/assets/`, `/api/` | 200 (ressources statiques) |
| Requêtes avec extension (`.png`, `.js`, `.css`) | 200 (assets) |
| `marrakech.msl-itech.com/*` | Redirigé → `/integrateur-odoo-marrakech` (géré séparément) |

---

## Code du Worker (pseudocode)

```javascript
// worker.js — Cloudflare Worker msl-itech.com

const STATIC_ROUTES = new Set([
  '/', '/odoo-erp', '/contact', '/a-propos',
  // ... liste complète ci-dessus
])

const DYNAMIC_PREFIXES = ['/blog/', '/realisations/']

const ALWAYS_PASS = [
  /\.[a-z0-9]+$/i,          // assets avec extension (.js, .css, .png…)
  /^\/api\//,
  /^\/sitemap\.xml/,
  /^\/robots\.txt/,
  /^\/llms.*\.txt/,
  /^\/public\//,
]

async function getSitemapRoutes(ctx) {
  const cacheKey = new Request('https://msl-itech.com/sitemap.xml')
  const cache = caches.default

  let cached = await cache.match(cacheKey)
  if (cached) {
    const text = await cached.text()
    return extractLocs(text)
  }

  try {
    const res = await fetch('https://msl-itech.com/sitemap.xml')
    const text = await res.text()
    // Mettre en cache 1h
    ctx.waitUntil(cache.put(cacheKey, new Response(text, {
      headers: { 'Cache-Control': 'public, max-age=3600' }
    })))
    return extractLocs(text)
  } catch {
    return null  // fail-open
  }
}

function extractLocs(xml) {
  const routes = new Set()
  for (const match of xml.matchAll(/<loc>https:\/\/msl-itech\.com([^<]*)<\/loc>/g)) {
    routes.add(match[1] || '/')
  }
  return routes
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const path = url.pathname

    // 1. Toujours laisser passer les assets et fichiers système
    if (ALWAYS_PASS.some(pattern => pattern.test(path))) {
      return fetch(request)
    }

    // 2. Routes statiques connues → proxy direct
    if (STATIC_ROUTES.has(path) || STATIC_ROUTES.has(path.replace(/\/$/, ''))) {
      return fetch(request)
    }

    // 3. Préfixes dynamiques → vérifier le sitemap
    const isDynamic = DYNAMIC_PREFIXES.some(prefix => path.startsWith(prefix))
    if (isDynamic) {
      const sitemapRoutes = await getSitemapRoutes(ctx)
      if (sitemapRoutes === null) {
        // fail-open : sitemap inaccessible, on laisse passer
        return fetch(request)
      }
      if (sitemapRoutes.has(path)) {
        return fetch(request)  // route valide
      }
      // Route inconnue → fetch index.html mais retourner 404
      const origin = await fetch(request)
      return new Response(origin.body, {
        status: 404,
        headers: origin.headers,
      })
    }

    // 4. Tout le reste → 404
    const origin = await fetch(request)
    return new Response(origin.body, {
      status: 404,
      headers: origin.headers,
    })
  }
}
```

---

## Déploiement

### Prérequis
- Accès au dashboard Cloudflare de `msl-itech.com`
- Wrangler CLI installé : `npm install -g wrangler`

### Étapes

```bash
# 1. Créer le projet Worker
wrangler init msl-itech-404-worker
cd msl-itech-404-worker

# 2. Copier le code ci-dessus dans src/index.js

# 3. Configurer wrangler.toml
# name = "msl-itech-404-worker"
# main = "src/index.js"
# compatibility_date = "2024-01-01"
# [[routes]]
# pattern = "msl-itech.com/*"
# zone_name = "msl-itech.com"

# 4. Déployer
wrangler deploy
```

### Configuration Cloudflare (dashboard)
1. Workers & Pages → Créer un Worker
2. Coller le code ou déployer via Wrangler
3. Workers & Pages → Routes → Ajouter `msl-itech.com/*` → lier au Worker

---

## Maintenance

### Nouvelle page statique ajoutée
Ajouter son chemin dans `STATIC_ROUTES` dans le Worker. Redéployer via `wrangler deploy`.

### Nouvel article de blog
Rien à faire. Le sitemap est régénéré au build Lovable. Le Worker le détectera dans l'heure (TTL cache).

### Vérification post-déploiement

```bash
# Doit retourner 200
curl -I https://msl-itech.com/contact
curl -I https://msl-itech.com/blog/facturation-electronique-obligatoire-maroc-2026-erp

# Doit retourner 404
curl -I https://msl-itech.com/blog/zz-page-inexistante-test-123
curl -I https://msl-itech.com/page-inventee

# Assets — doit retourner 200
curl -I https://msl-itech.com/robots.txt
```

---

## Impact SEO

| Avant | Après |
|-------|-------|
| URL inconnue → HTTP 200 | URL inconnue → HTTP 404 |
| Google indexe les pages fantômes | Google supprime les pages fantômes sous ~7 jours |
| GSC : couverture polluée | GSC : seules les vraies pages apparaissent |
| Pages supprimées persistent dans l'index | Pages supprimées désindexées rapidement |

---

## Ce que ce ticket ne couvre PAS

- **Redirections 301** pour les anciennes URLs (déjà dans App.tsx et vercel.json)
- **Sitemap** : déjà correct (`sitemap-routes.ts` + filtre `noIndex`)
- **T13** : séquences email de relance Marketing Automation
