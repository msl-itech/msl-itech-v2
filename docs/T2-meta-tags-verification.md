# T2.1 — Checklist de recette navigateur

**Ticket** : T2.1 — Titles & meta-descriptions SERP
**Branche** : `fix/t2.1-arbitrage`
**Date** : 2026-09-15
**Testeur** : _______________

---

## Mode opératoire

Pour chaque page ci-dessous :
1. Ouvrir l'URL dans le navigateur (preview ou production)
2. Faire **clic droit > Inspecter** (ou `Cmd + Option + I`)
3. Vérifier dans le `<head>` la balise `<title>` et la balise `<meta name="description">`
4. Cocher la case si la valeur correspond exactement au texte attendu

---

## Page 1 — Blog : Facturation électronique obligatoire

**URL** : `/blog/facturation-electronique-obligatoire-maroc-2026-erp`

- [ ] **`<title>`** affiche exactement :
      `Facturation électronique Maroc : qui, quand, comment`
- [ ] **`<meta description>`** affiche exactement :
      `Obligation DGI : entreprises concernées, calendrier, formats acceptés et méthode pour basculer sans arrêter votre activité. Vérifiez votre cas en 2 min.`
- [ ] Le **H1 visible** sur la page n'a **pas changé** (toujours "Facturation électronique obligatoire au Maroc : pourquoi le papier ne suffit plus…")
- [ ] Le contenu de l'article est **intact**

---

## Page 2 — Blog : Formats DGI (PDF / UBL)

**URL** : `/blog/facturation-electronique-dgi-maroc-2026-pdf-ubl`

- [ ] **`<title>`** affiche exactement :
      `Facture électronique DGI : le PDF suffit-il ? Formats exigés`
- [ ] **`<meta description>`** affiche exactement :
      `PDF signé, UBL, CII : ce que la DGI accepte réellement et comment mettre votre facturation en conformité. Guide pratique pour PME marocaines.`
- [ ] Le **H1 visible** n'a **pas changé**
- [ ] Le contenu de l'article est **intact**

---

## Page 3 — Blog : Coût Odoo Maroc

**URL** : `/blog/cout-erp-odoo-maroc-2026`

- [ ] **`<title>`** affiche exactement :
      `Prix Odoo au Maroc 2026 : licences, intégration, budget PME`
- [ ] **`<meta description>`** affiche exactement :
      `Fourchettes réelles pour déployer Odoo dans une PME marocaine : licences, intégration, hébergement, formation. Devis détaillé sous 48 h.`
- [ ] Le **H1 visible** n'a **pas changé**
- [ ] Le contenu de l'article est **intact**

---

## Page 4 — Comparateur Sage vs Odoo

**URL** : `/outils/comparateur-sage-odoo`

- [ ] **`<title>`** affiche exactement :
      `Odoo vs Sage au Maroc : comparateur 2026 (prix, DGI)`
- [ ] **`<meta description>`** affiche exactement :
      `Comparez Sage et Odoo pour une PME marocaine : licence, plan comptable CGNC, facturation électronique DGI, support local, coût total sur 3 ans.`
- [ ] Le **formulaire comparateur** fonctionne normalement
- [ ] Le design de la page est **intact**

---

## Page 5 — Multi-sites / Multi-sociétés

**URL** : `/entreprise-multi-sites`

- [ ] **`<title>`** affiche exactement :
      `Odoo multi-société : une base, plusieurs entités`
- [ ] **`<meta description>`** affiche exactement :
      `Gérez plusieurs sociétés, dépôts ou agences dans un seul Odoo : comptabilité par entité, consolidation, stocks partagés. Partenaire Odoo officiel.`
- [ ] Le **H1 visible** n'a **pas changé**
- [ ] Le design de la page est **intact**

---

## Page 6 — Finance & Comptabilité

**URL** : `/odoo-finance-comptabilite`

- [ ] **`<title>`** affiche exactement :
      `Odoo Finance & comptabilité Maroc : CGNC, TVA, DGI`
- [ ] **`<meta description>`** affiche exactement :
      `Comptabilité marocaine dans Odoo : plan comptable CGNC, TVA, facturation électronique DGI, rapprochement bancaire. Déployé par un partenaire certifié.`
- [ ] Le **H1 visible** n'a **pas changé**
- [ ] Le design de la page est **intact**

---

## Page 7 — Intégrateur Odoo Maroc (NON MODIFIÉE)

**URL** : `/integrateur-odoo-maroc` (ou URL actuelle)

- [ ] Confirmer que le **title et la description n'ont PAS changé** par rapport à la version en production
- [ ] _(Arbitrage direction en cours — ticket T2.1)_

---

## Vérifications globales

- [ ] Aucune autre page du site n'a été impactée
- [ ] Les schémas JSON-LD (FAQ, etc.) sont toujours présents et inchangés sur chaque page
- [ ] Aucun lien cassé sur les 6 pages modifiées

---

**Résultat** : [ ] VALIDÉ / [ ] REJETÉ

**Commentaire** : _______________________________________________

**Signature testeur** : ___________________________ **Date** : _______________
