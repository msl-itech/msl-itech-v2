# CLAUDE.md — MSL-iTECH v2

## Projet

SPA React (Vite + React Router) déployée sur Vercel. SEO géré côté client via `react-helmet-async` et le hook central `useProductSeo`. JSON-LD assemblé dans `SEOHead.tsx` avec merge `@graph` automatique quand plusieurs schemas coexistent sur une page.

---

## Agent de validation de ticket

Avant de considérer un ticket comme terminé, **exécute systématiquement** les trois phases ci-dessous. Ne saute aucune étape, même si elle semble évidente.

### Phase 1 — Pré-vol

1. **Branche** : vérifie que tu es sur la bonne branche (`git branch --show-current`). Crée-la depuis la branche demandée si elle n'existe pas.
2. **Spec** : lis le cahier du ticket (dans `docs/` ou fourni par l'utilisateur) en entier avant de toucher au code.
3. **Fichiers impactés** : liste les fichiers que le ticket va toucher. Lis-les avant de les modifier.
4. **État initial** : note l'état du `<head>` rendu (schemas, meta, canonical) des pages concernées avant modification — c'est le "before" du relevé.

### Phase 2 — Règles d'implémentation obligatoires

#### SEO — Entité et schemas

| Règle | Détail |
|-------|--------|
| **Entité unique** | Une seule entité société par page, identifiée `https://msl-itech.com/#organization` (type `ProfessionalService`). Pas de `LocalBusiness` séparé par pays — utiliser `areaServed` et `contactPoint` dans l'entité centrale. |
| **Pas de `@id` orphelin** | Si un schema référence `{ "@id": ".../#organization" }` (publisher, provider), l'entité `ORGANIZATION_ENTITY` **doit** être émise sur la même page. Vérifier que `useProductSeo` l'inclut (via `isEntityPage`, `article` ou `service`). |
| **BreadcrumbList** | Blog : 4 niveaux (Accueil > Blog > Hub > Article). Autres pages : au minimum 2 niveaux (Accueil > Page). Toujours en JSON-LD via `useProductSeo`. |
| **Article schema** | Chaque article de blog doit avoir : `headline`, `datePublished`, `dateModified`, `author` (Person + lien /a-propos), `publisher` (ref `@id`), `image`, `articleSection`, `inLanguage: "fr"`. |
| **FAQPage** | 4 à 6 questions. JSON-LD via `useProductSeo({ faqs })`. Ne jamais injecter un `FAQPage` en doublon via `<JsonLd>`. |
| **noIndex ↔ sitemap** | Si un article a `noIndex: true`, il doit être exclu du sitemap (`sitemap-routes.ts` filtre `.filter((p) => !p.noIndex)`) ET du blog index (`BlogIndexPage.tsx`). |
| **Canonical unique** | Jamais de canonical statique dans `index.html` — tout passe par `useProductSeo` → `SEOHead`. Vérifier qu'il n'y a pas de doublon. |
| **`lang="fr"`** | Toujours présent sur `<html>` dans `index.html`. |

#### SEO — GEO et crawl

| Règle | Détail |
|-------|--------|
| **robots.txt** | Doit autoriser : `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Googlebot`, `Bingbot`. Bloquer : `/admin/`, `/api/`, `/_lovable/`. |
| **llms.txt** | Mettre à jour si de nouvelles pages piliers ou hubs sont créés. |
| **Piège robots + noindex** | Une page bloquée par `robots.txt` ne peut pas être lue par Google → son `noindex` est invisible. **Ne jamais cumuler les deux.** Si noindex est nécessaire, ne pas bloquer dans robots.txt. |

#### Blog — Gabarit d'article (T10)

Chaque article de blog doit contenir ces 10 éléments :

1. Fil d'Ariane visuel (Accueil > Blog > Hub > Article) + JSON-LD `BreadcrumbList`
2. H1 unique = titre ; sous-titre (excerpt) qui répond à la question
3. Encadré "En bref" si `enBref` est renseigné (3-5 puces factuelles)
4. Sommaire automatique (ancres H2) si > 2 H2
5. Corps : H2 comme questions, tableaux HTML natifs (`type: "table"` dans `BlogSection`), sources datées
6. Bloc "Ce que fait MSL-iTECH" : description hub + CTA contextuel (mapping dans `blog-hubs.ts`)
7. FAQ : 4-6 questions, JSON-LD FAQPage
8. Auteur : nom, fonction, lien /a-propos, date publication + date mise à jour visibles
9. Articles liés : 3 du même hub + lien vers la page pilier + lien vers la page service
10. `lang="fr"` sur le document

#### Code

| Règle | Détail |
|-------|--------|
| **Un seul chemin SEO** | Tout le SEO passe par `useProductSeo` → `GlobalSEO` → `SEOHead`. Ne pas injecter de `<JsonLd>` en parallèle sauf cas exceptionnel documenté (ex: FAQ homepage lazy-loaded). |
| **Pas de schema statique dans index.html** | Le HTML shell ne contient que les meta OG/Twitter de fallback. Pas de JSON-LD, pas de canonical statique. |
| **`<JsonLd>` legacy** | Le composant `JsonLd.tsx` existe encore pour les cas legacy. Avant d'y toucher, vérifier si le schema peut passer par `useProductSeo` à la place. |
| **Images blog** | Les images sont servies via `blogImageBySlug` dans `src/lib/blog-images.ts`, pas via le champ `image` de `BlogPost`. Ajouter l'entrée dans ce mapping quand on ajoute un article. |

### Phase 3 — Validation avant commit

Exécuter **dans cet ordre** :

```bash
# 1. TypeScript — zéro erreur
npx tsc --noEmit

# 2. Tests — tous verts
npx vitest run

# 3. Build — succès
npx vite build
```

Puis vérifier manuellement :

- [ ] **Diff review** : `git diff --stat` — aucun fichier inattendu modifié
- [ ] **Pas de secrets** : pas de `.env`, credentials, clés API dans le diff
- [ ] **Schemas** : sur chaque page modifiée, vérifier que le JSON-LD contient exactement les types attendus (pas de doublon, pas d'orphelin)
- [ ] **Sitemap** : si des pages ont été ajoutées/retirées, vérifier `sitemap-routes.ts`
- [ ] **Commit message** : format `T[N] : description courte` — le numéro de ticket en premier

---

## Pièges connus (leçons des tickets passés)

| Piège | Contexte | Prévention |
|-------|----------|------------|
| Canonical dupliquée | `index.html` avait un `<link rel="canonical">` statique que Helmet ne pouvait pas supprimer | Ne jamais mettre de canonical dans le HTML shell |
| LocalBusiness x3 sur /contact | 3 schemas BE/MA/CA injectés via `<JsonLd>` en plus de `#organization` | Une seule entité avec `areaServed` + `contactPoint` multiples |
| Publisher orphelin sur blog | Article référençait `#organization` mais l'entité n'était pas émise sur la page | `useProductSeo` émet l'entité dès qu'un `article` ou `service` est présent |
| `professionalServiceSchema` + `ORGANIZATION_ENTITY` | HomePage avait `#service` ET `#organization` = 2 entités | Supprimer les anciens schemas `<JsonLd>` quand `useProductSeo` prend le relais |
| noIndex absent du sitemap filter | `sitemap-routes.ts` sur main n'avait pas `.filter((p) => !p.noIndex)` | Toujours vérifier le sitemap quand on ajoute `noIndex` |
| Images blog via mauvais champ | Le champ `image` de `BlogPost` n'est pas celui qui sert les images — c'est `blogImageBySlug` | Ajouter les entrées dans `src/lib/blog-images.ts` |
| Preview deploy indexé | Les deploys lovable.app doivent être noindex | `SEOHead.tsx` force noindex si hostname contient "lovable.app" — ne pas toucher |
| Test FAQPage dans @graph | Le test cherchait `j["@type"] === "FAQPage"` mais `SEOHead` merge en `@graph` | Toujours `.flatMap((j) => j["@graph"] ? j["@graph"] : [j])` avant `.find()` |

---

## Structure des fichiers clés

```
src/
├── hooks/useProductSeo.tsx    # Hook SEO central — ORGANIZATION_ENTITY, schemas, store
├── components/SEOHead.tsx      # Rendu Helmet (title, meta, canonical, JSON-LD @graph)
├── components/JsonLd.tsx       # Injection manuelle JSON-LD (legacy, utiliser useProductSeo de préférence)
├── lib/blog-hubs.ts            # 5 hubs éditoriaux, mapping catégorie→hub, CTA par hub
├── lib/blog-images.ts          # slug → URL image (source de vérité pour les images blog)
├── lib/sitemap-routes.ts       # Génération du sitemap.xml au build
├── content/blogPosts.ts        # Type BlogPost + tableau principal + exports getPostBySlug, getRelatedPosts
├── content/newArticles1-4.ts   # Articles récents batch 1 (certains noIndex)
├── content/newArticles5-8.ts   # Articles récents batch 2
├── pages/BlogPage.tsx          # Gabarit d'article (T10)
├── pages/BlogHubPage.tsx       # Pages hub éditoriales
├── pages/BlogIndexPage.tsx     # Index blog avec filtres catégorie
public/
├── robots.txt                  # Autorisations crawl (GPTBot, ClaudeBot, etc.)
├── llms.txt                    # Passeport entreprise pour moteurs IA
├── llms-full.txt               # Version étendue llms.txt
index.html                      # Shell HTML — PAS de canonical, PAS de JSON-LD
```

---

## Odoo — Règles absolues

Ces règles s'appliquent **à toute interaction avec Odoo** (templates email, vues, modèles, champs Studio). Aucune exception sans accord explicite de l'utilisateur.

### 1. Ne jamais écrire directement sur un objet de production

| Interdit | Pourquoi | Faire à la place |
|----------|----------|------------------|
| Modifier `body_html` d'un `mail.template` via XML-RPC | Odoo 17+ WYSIWYG stocke sa propre copie ; l'écriture API réussit mais le contenu affiché ne change pas | Préparer le HTML corrigé dans un fichier local, demander à l'utilisateur de le coller dans la vue code (`</>`) d'Odoo |
| Écrire un test/marqueur dans un template de production | Risque d'envoi au client final | Dupliquer le template (`copy()`) dans un template de test, tester dessus, supprimer après |
| Modifier un champ `ir.ui.view` directement | Casse les mises à jour et l'héritage | Utiliser l'héritage de vue (voir §3) |

### 2. Héritage de vues — toujours `inherit_id`

Odoo fonctionne par **héritage de vues** (`ir.ui.view` avec `inherit_id`). Ne jamais modifier la vue parente :

```xml
<!-- ✅ CORRECT : vue héritée -->
<record id="my_custom_view" model="ir.ui.view">
  <field name="name">crm.lead.form.custom</field>
  <field name="model">crm.lead</field>
  <field name="inherit_id" ref="crm.crm_lead_view_form"/>
  <field name="arch" type="xml">
    <xpath expr="//field[@name='phone']" position="after">
      <field name="x_studio_secteur"/>
    </xpath>
  </field>
</record>

<!-- ❌ INTERDIT : réécrire la vue parente -->
<record id="crm.crm_lead_view_form" model="ir.ui.view">
  ...toute l'arch réécrite...
</record>
```

**Règles xpath** :
- `position="after"` / `"before"` / `"inside"` / `"replace"` / `"attributes"`
- Toujours utiliser des expressions xpath précises (`//field[@name='...']`, `//page[@name='...']`)
- Une modification = une vue héritée dans un module custom, jamais un patch sur la vue de base

### 3. Templates email (`mail.template`)

| Règle | Détail |
|-------|--------|
| **Pas de version Odoo** | Écrire "Odoo", jamais "Odoo 18" ou "Odoo 17". Le numéro de version change, le template reste. |
| **Qweb dynamique** | Utiliser `<t t-if>`, `<t t-out>`, `<t t-else="">` pour les champs dynamiques. Toujours prévoir un fallback. |
| **Signature dynamique** | `<t t-if="object.user_id"><t t-out="object.user_id.name"></t></t><t t-else="">El Houssine BOUHMAIDA</t>` — jamais de nom en dur sans fallback. |
| **Pas de test en prod** | Dupliquer le template avant tout test. Ne jamais injecter de marqueur, balise test ou texte temporaire dans un template envoyé aux clients. |
| **Livraison** | Préparer le HTML dans un fichier local (`/tmp/template-XXX.html`). L'utilisateur colle manuellement dans Odoo via `</>`. Ne pas tenter d'écrire via XML-RPC — ça ne marche pas sur Odoo 17+. |

### 4. Champs Studio (`x_studio_*`)

| Règle | Détail |
|-------|--------|
| **Valeurs de sélection** | Toujours utiliser les clés techniques exactes récupérées via API. Garder le mapping synchronisé dans le code frontend (ex: `ODOO_SECTEUR`, `ODOO_ECHEANCE`). |
| **Score affiché ≠ score interne** | `x_studio_score_affiche` = ce que le prospect voit à l'écran. `x_studio_score` = score interne du lead (jamais montré au prospect). Ne jamais les confondre. |
| **Nouveaux champs** | Créer via Studio ou XML dans un module custom. Ne jamais modifier la structure d'un modèle de base directement. |

### 5. Routage des leads

| Étiquette | Équipe | Commercial |
|-----------|--------|------------|
| `Odoo ERP` | `ERP Odoo` | El Houssine |
| `Site web` | `Web & Marketing` | Manal |
| `Marketing digital` | `Web & Marketing` | Manal |

Le champ `team_name` dans le payload API détermine l'équipe. Le commercial est assigné par règle d'automatisation Odoo sur l'équipe.

### 6. Proxy API (`api-connect-odoo`)

- Le proxy est dans un repo séparé (`api-connect-odoo`), déployé sur Vercel
- `studio_routing: true` = le proxy **ne fait pas** le routage ni la création d'activité → tout repose sur les automatisations Odoo
- `team_name: "ERP Odoo"` (sans `studio_routing`) = le proxy **fait** le routage vers l'équipe + crée l'activité de suivi
- Si les automatisations Odoo ne sont pas en place, utiliser `team_name` explicite

### Pièges Odoo (leçons passées)

| Piège | Contexte | Prévention |
|-------|----------|------------|
| XML-RPC write sur `body_html` | Écriture réussit, read-back confirme, mais le WYSIWYG affiche l'ancien contenu | Ne jamais modifier `body_html` par API — toujours via l'UI Odoo |
| Marqueur test en production | "⚡ MARKER TEST API ⚡" envoyé à un vrai prospect | Toujours dupliquer le template avant de tester |
| `x_studio_score_affiche` vide | Le simulateur DGI n'envoyait pas `badgeValue` → email affichait "0/100" | Chaque simulateur avec badge doit retourner `badgeValue` dans `computeResult` |
| `studio_routing: true` sans automatisation | Leads arrivent dans l'équipe "Sales" par défaut, pas de rappel H+48 | Utiliser `team_name` explicite tant que les automatisations Odoo ne sont pas confirmées opérationnelles |
| Vue parente modifiée | Perte à la mise à jour, conflit avec d'autres modules | Toujours hériter avec `inherit_id` + xpath |
| xpath invalide (localisateur orphelin) | `<xpath expr="//page[@name='tunnel_qualification']" position="replace">` dans une vue héritée Studio → le `@name` n'existe pas/plus dans la vue parente → Odoo surligne en rouge, la customisation est ignorée silencieusement | Toujours vérifier que le `@name` ciblé existe dans la vue parente **avant** de créer le xpath. Si un champ/page a été renommé côté base, mettre à jour le xpath dans la vue héritée. |
| "Odoo 18" dans les templates | Devient faux à chaque changement de version | Écrire "Odoo" sans numéro de version |
