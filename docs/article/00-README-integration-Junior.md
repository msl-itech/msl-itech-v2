# Articles du mois 1 — Notes d'intégration pour Junior

Version 1 du 14/09/2026 · 8 articles · Hub A (DGI) : 1, 2, 3 · Hub B (Acheter Odoo) : 4, 5, 6 · Hub D (Sites web) : 7, 8

## Ordre de publication recommandé
1. **Après** les tickets T1 (redirections) et T2 (titres) du cahier webmaster.
2. Articles 4, 5, 6, 7, 8 d'abord (aucune dépendance réglementaire ; seuls des [CHIFFRE À VALIDER] restent).
3. Articles 1, 2, 3 uniquement quand un consultant a remplacé chaque **[À SOURCER]** par une source officielle datée. Ne jamais publier un article contenant encore la mention « [À SOURCER] ».

## Structure de chaque fichier
- **En-tête YAML** (entre `---`) : métadonnées à reporter dans le CMS/composant blog — `title` (= H1), `metaTitle` (balise <title>), `metaDescription`, `slug` (URL = /blog/{slug}), `hub` (catégorie), `auteur`, dates, `cta`, `liensInternes`, `validation`. Ne pas afficher l'en-tête sur la page.
- **Corps Markdown** : un seul H1, H2/H3 hiérarchisés, encadré « En bref » (citation Markdown `>` → à rendre comme un bloc mis en avant), tableaux (à rendre en `<table>` HTML natif, jamais en image), FAQ, ligne CTA finale.
- **Bloc JSON-LD** (```json en fin de fichier) : à insérer dans le `<head>` de la page dans une balise `<script type="application/ld+json">`. Remplacer `[Nom du consultant]`, `[AAAA-MM-JJ]`, et vérifier l'URL du logo. Le bloc n'est pas affiché dans le corps.

## Réservés à traiter avant publication
| Marqueur | Qui | Action |
|---|---|---|
| `[À SOURCER]` | Consultant | Remplacer par l'information + citer la source (texte, date, lien) dans l'article |
| `[À SOURCER : …]` | Consultant | Idem, la précision indique ce qui manque |
| `[CHIFFRE À VALIDER]` | Direction | Insérer le chiffre/cas après accord écrit du client, ou supprimer la phrase |
| `[À VÉRIFIER ÉDITEUR]` / `[PRIX ÉDITEUR À VÉRIFIER]` | Consultant | Confirmer sur la documentation officielle datée, ou reformuler en renvoi vers l'éditeur |
| `[À VÉRIFIER VERSION]` | Consultant | Confirmer selon version/édition Odoo proposée |
| `[INSÉRER : …]` / `[SECTEUR, VILLE …]` | Rédaction | Compléter |

## Liens internes
- Les liens en `/chemin` sont relatifs à msl-itech.com. Certains pointent vers des pages **à créer** (signalées en commentaire dans le YAML) : `/facturation-electronique-maroc-odoo` (pilier), `/audit-digital-gratuit`, et vers des articles **à paraître** (`/blog/odoo-conforme-facturation-electronique-dgi`, `/blog/implementation-odoo-ratee-8-causes`, `/blog/double-saisie-cout-reel-pme`). Tant que la cible n'existe pas : soit retirer temporairement le lien (garder le texte), soit créer la page avant.
- Chaque article ERP marocain doit contenir le lien vers `/integrateur-odoo-maroc` avec l'ancre « intégrateur Odoo au Maroc » (règle T3). C'est déjà le cas dans les textes : ne pas le supprimer.
- Ajouter en fin d'article le bloc « Articles liés » du gabarit (T10) : 3 articles du hub + pilier + page service.

## Après publication (5 gestes, checklist n°14 du plan éditorial)
1. URL ajoutée au sitemap.
2. Test des résultats enrichis Google (Article, FAQPage, Breadcrumb) sans erreur.
3. Page catégorie (hub) mise à jour avec le nouvel article.
4. Ligne du plan Excel passée en « Publié » avec l'URL.
5. Partage LinkedIn préparé (texte fourni séparément si demandé).

## Décision en attente (direction)
- Article 2 vs article existant « Le PDF n'est plus une facture » : garder les deux (angles distincts) ou rediriger l'ancien vers le nouveau.
- Article 4 vs article existant « Sage vs Odoo au Maroc : le comparatif que les éditeurs n'osent pas faire » : fusionner ou rediriger (voir onglet « Existant à optimiser »).
