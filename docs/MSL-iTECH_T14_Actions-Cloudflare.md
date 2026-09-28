# T14 — Actions à faire dans Cloudflare

## Prérequis
- Être connecté sur dash.cloudflare.com
- Avoir accès à la zone `msl-itech.com`
- Avoir le fichier `worker.js` prêt (fourni par le code)

---

## Étape 1 — Créer le Worker

1. Menu gauche → **Workers & Pages**
2. Bouton **Créer une application**
3. Onglet **Worker** → **Créer un Worker**
4. Nom du Worker : `msl-itech-404`
5. Cliquer **Déployer** (le code par défaut n'a pas d'importance pour l'instant)
6. Sur la page suivante → cliquer **Modifier le code**
7. **Tout sélectionner** (Ctrl+A) et **coller** le contenu de `cloudflare-worker/worker.js`
8. Bouton **Enregistrer et déployer**

---

## Étape 2 — Lier le Worker au domaine

1. Menu gauche → **Workers & Pages**
2. Cliquer sur **msl-itech-404**
3. Onglet **Déclencheurs** (ou *Triggers*)
4. Section **Routes** → bouton **Ajouter une route**
5. Remplir :
   - **Route** : `msl-itech.com/*`
   - **Zone** : `msl-itech.com`
6. Cliquer **Enregistrer**

---

## Étape 3 — Vérifier

Ouvrir un terminal et lancer ces commandes :

```bash
# Doit retourner HTTP/2 200
curl -I https://msl-itech.com/contact
curl -I https://msl-itech.com/blog/facturation-electronique-obligatoire-maroc-2026-erp

# Doit retourner HTTP/2 404
curl -I https://msl-itech.com/blog/zz-page-inexistante-test-123
curl -I https://msl-itech.com/page-inventee-test

# Assets — doit retourner 200
curl -I https://msl-itech.com/robots.txt
curl -I https://msl-itech.com/sitemap.xml
```

---

## Mise à jour du Worker (si nouvelle page statique)

1. **Workers & Pages** → **msl-itech-404**
2. Onglet **Code** → **Modifier le code**
3. Ajouter le nouveau chemin dans `STATIC_ROUTES`
4. **Enregistrer et déployer**

> Les nouveaux articles de blog ne nécessitent aucune action : le Worker lit le sitemap automatiquement (mise à jour dans l'heure suivant le build).
