# NovaTrait — Configuration CRM, Automatisations & Campagnes Marketing

Dernière mise à jour : 2026-10-23

Ce document résume l'ensemble des configurations réalisées côté Odoo CRM, proxy API et Edge Functions Supabase pour le site **novatrait.com**.

---

## Table des matières

1. [Architecture globale](#1--architecture-globale)
2. [Proxy API (api-connect-odoo)](#2--proxy-api-api-connect-odoo)
3. [Étiquettes CRM (crm.tag)](#3--étiquettes-crm-crmtag)
4. [Automatisation \[37\] — "Contact site"](#4--automatisation-37--contact-site)
5. [Campagnes Marketing Automation (tunnels A→J)](#5--campagnes-marketing-automation-tunnels-aj)
6. [Champ Studio `x_studio_outil_source`](#6--champ-studio-x_studio_outil_source)
7. [Edge Function — submit-tool](#7--edge-function--submit-tool)
8. [Edge Function — submit-resource](#8--edge-function--submit-resource)
9. [Frontend — Données lisibles (answers_display)](#9--frontend--données-lisibles-answers_display)
10. [Flux complet pas-à-pas](#10--flux-complet-pas-à-pas)
11. [Tableau de correspondance tags ↔ campagnes](#11--tableau-de-correspondance-tags--campagnes)
12. [Template email \[252\]](#12--template-email-252)
13. [Corrections appliquées](#13--corrections-appliquées)
14. [Points d'attention](#14--points-dattention)

---

## 1 — Architecture globale

```
 Visiteur novatrait.com
        │
        ▼
 ┌──────────────────┐
 │  Site React       │  Collecte : réponses quiz / formulaire ressource
 │  (Lovable)        │  + consentement Loi 25 + UTM
 └────────┬─────────┘
          │ POST
          ▼
 ┌──────────────────┐
 │  Edge Function    │  submit-tool ou submit-resource (Supabase)
 │  (Supabase)       │  → Enregistre le lead dans Supabase (table `leads`)
 │                   │  → Programme les emails tunnel (table `email_schedule`)
 │                   │  → Appelle le proxy Odoo (best-effort)
 └────────┬─────────┘
          │ POST /api/leads
          ▼
 ┌──────────────────┐
 │  Proxy API        │  api-connect-odoo (Vercel)
 │  (Vercel)         │  → Crée le lead Odoo (company_id=33, team_id=15)
 │                   │  → Écrit les tags séparément (2e appel XML-RPC)
 └────────┬─────────┘
          │ XML-RPC
          ▼
 ┌──────────────────┐
 │  Odoo CRM         │  company_id=33 (NOVATRAIT)
 │  (Production)     │
 │                   │  → Automation [37] : détecte tag "Contact site"
 │                   │     → Vendeur + activité appel + email
 │                   │
 │                   │  → Marketing Automation : détecte tag outil/ressource
 │                   │     → Séquence emails résultat + nurturing
 └──────────────────┘
```

---

## 2 — Proxy API (api-connect-odoo)

| Paramètre | Valeur |
|---|---|
| URL | `https://api-connect-odoo.vercel.app/api/leads` |
| Header `x-client-id` | `client_novatrait` |
| Header `x-company-id` | `33` |
| Header `x-signature` | HMAC-SHA256 pré-calculé |
| Flag `studio_routing` | `true` |

### Comportement avec `studio_routing: true`

Le proxy **ne fait pas** le routage équipe/vendeur lui-même. C'est Odoo (automation [37]) qui s'en charge. Mais le proxy :

1. **Crée le lead** avec `company_id = 33` (NOVATRAIT)
2. **Résout le `team_id`** automatiquement : cherche la 1ère équipe CRM de company_id=33 → `team_id = 15` (MSALES Leads)
3. **Écrit les tags séparément** (2e appel `write`) → c'est ce qui déclenche les automatisations Odoo

### Pourquoi écrire les tags séparément ?

L'automation [37] est de type `on_write` avec un `filter_pre_domain` qui vérifie que le tag était **absent avant** l'écriture. Si on inclut les tags dans le `create` initial, le `filter_pre_domain` ne peut pas comparer avant/après → l'automation ne se déclenche pas.

### Champs `x_studio_*` transmis

| Champ Odoo | Source | Type |
|---|---|---|
| `x_studio_outil_source` | Label de l'outil ou de la ressource | Sélection |
| `x_studio_score` | `result.leadScore` | Nombre |
| `x_studio_score_affiche` | `result.scoreValue` (si numérique) | Nombre |
| `x_studio_resultat_cle` | `result.headline` | Texte |
| `x_studio_recommandations` | `result.recommendations` (join `\n`) | Texte |
| `x_studio_consentement` | `consent` (booléen du frontend) | Booléen |
| `x_studio_consentement_date` | Timestamp ISO si consentement=true | Date |
| `x_download_url` | URL du PDF (ressources uniquement) | Texte |

### Champs UTM natifs

| Champ proxy | Modèle Odoo |
|---|---|
| `utm_source_name` | `utm.source` (créé si inexistant) |
| `utm_medium_name` | `utm.medium` (créé si inexistant) |
| `utm_campaign_name` | `utm.campaign` (créé si inexistant) |

---

## 3 — Étiquettes CRM (crm.tag)

### Étiquettes outils (6)

| ID | Nom | Créée pour |
|---|---|---|
| 41 | Diagnostic Maturité Numérique | diagnostic-maturite |
| 42 | Conformité Loi 25 | conformite-loi-25 |
| 43 | Calculateur Économies | calculateur-economies |
| 44 | Calculateur ROI IA | roi-ia |
| 45 | Comparateur Coût CTO | cout-cto |
| 46 | Diagnostic Express IA | diagnostic-express-ia |

### Étiquettes ressources (4)

| ID | Nom | Créée pour |
|---|---|---|
| 47 | Ressource: Checklist Outils | checklist-outils-qui-ralentissent |
| 48 | Ressource: Checklist Inventaire | checklist-inventaire-technologique |
| 49 | Ressource: Checklist 2027 | checklist-numerique-2027 |
| 50 | Ressource: Plan 90 Jours | gabarit-plan-90-jours |

### Étiquette transversale (1)

| ID | Nom | Couleur | Rôle |
|---|---|---|---|
| 91 | Contact site | Violet (9) | Déclencheur de l'automation [37] |

**Total : 11 étiquettes NovaTrait.**

---

## 4 — Automatisation [37] — "Contact site"

| Paramètre | Valeur |
|---|---|
| ID | 37 |
| Nom | [NovaTrait] Lead Contact site |
| Modèle | crm.lead |
| Déclencheur | `on_write` (à la modification) |
| `filter_pre_domain` | `company_id = 33` ET tag "Contact site" **absent** |
| `filter_domain` | `company_id = 33` ET tag "Contact site" **présent** |

### Actions exécutées (dans l'ordre)

| Séq. | ID | Type | Détail |
|---|---|---|---|
| 1 | — | `code` | Assigne `user_id = 24` (Arnaud Diaz) comme vendeur |
| 2 | 1649 | `next_activity` | Crée une activité "Appel téléphonique" à J+3, assignée au vendeur |
| 3 | 1648 | `mail_post` | Envoie le template [252] en commentaire dans le chatter du lead |

### Résultat concret

Quand un lead NovaTrait est créé avec le tag "Contact site" :
- Arnaud Diaz est automatiquement assigné comme responsable
- Il reçoit un rappel dans 3 jours pour appeler le prospect
- Un email de premier contact est envoyé (template [252])

---

## 5 — Campagnes Marketing Automation (tunnels A→J)

### Tunnels outils (6 campagnes × 4 étapes)

| Campagne | Série | Tag déclencheur | Étapes |
|---|---|---|---|
| Tunnel A — Maturité numérique | A | Diagnostic Maturité Numérique (#41) | A1 (J+0), A2 (J+2), A3 (J+9), A4 (J+39) |
| Tunnel B — Conformité Loi 25 | B | Conformité Loi 25 (#42) | B1→B4 |
| Tunnel C — Calculateur Économies | C | Calculateur Économies (#43) | C1→C4 |
| Tunnel D — ROI IA | D | Calculateur ROI IA (#44) | D1→D4 |
| Tunnel E — Coût CTO | E | Comparateur Coût CTO (#45) | E1→E4 |
| Tunnel F — Diagnostic Express IA | F | Diagnostic Express IA (#46) | F1→F4 |

### Tunnels ressources (4 campagnes × 3 étapes)

| Campagne | Série | Tag déclencheur | Étapes |
|---|---|---|---|
| Tunnel G — Checklist Outils | G | Ressource: Checklist Outils (#47) | G1 (J+0), G2 (J+3), G3 (J+10) |
| Tunnel H — Checklist Inventaire | H | Ressource: Checklist Inventaire (#48) | H1→H3 |
| Tunnel I — Checklist 2027 | I | Ressource: Checklist 2027 (#49) | I1→I3 |
| Tunnel J — Plan 90 Jours | J | Ressource: Plan 90 Jours (#50) | J1→J3 |

### Expéditeur des emails Marketing

| Champ | Valeur |
|---|---|
| `email_from` | `"NovaTrait" <contact@novatrait.com>` |

**Correction appliquée le 23/10/2026** : les 20 mailings (10 campagnes × 2 courriels en moyenne) avaient `Junior TAGNE <...>` comme expéditeur. Tous corrigés vers `"NovaTrait" <contact@novatrait.com>`.

---

## 6 — Champ Studio `x_studio_outil_source`

Champ de type **Sélection** sur `crm.lead`. Contient 16 valeurs :

### MSL-iTECH (6 valeurs, existantes avant NovaTrait)

| Valeur |
|---|
| Diagnostic de maturité numérique |
| Auto-évaluation Loi 25 |
| Calculateur d'économies TI |
| Calculateur ROI IA |
| Comparateur coût CTO |
| Diagnostic Express IA |

### NovaTrait — Outils (6 valeurs)

| Valeur | Outil |
|---|---|
| Diagnostic de maturité numérique | diagnostic-maturite |
| Auto-évaluation Loi 25 | conformite-loi-25 |
| Calculateur d'économies TI | calculateur-economies |
| Calculateur ROI IA | roi-ia |
| Comparateur coût CTO | cout-cto |
| Diagnostic Express IA | diagnostic-express-ia |

> Note : les labels outils sont identiques entre MSL-iTECH et NovaTrait car les outils sont les mêmes. Le `company_id` (1 vs 33) distingue les leads.

### NovaTrait — Ressources (4 valeurs, ajoutées le 23/10/2026)

| Valeur | Ressource |
|---|---|
| Checklist — 5 signes que vos outils vous ralentissent | checklist-outils-qui-ralentissent |
| Checklist — Inventaire technologique | checklist-inventaire-technologique |
| Checklist numérique 2027 | checklist-numerique-2027 |
| Gabarit — Plan technologique 90 jours | gabarit-plan-90-jours |

---

## 7 — Edge Function — submit-tool

Fichier : `supabase/functions/submit-tool/index.ts`

### Données collectées

| Champ | Source | Obligatoire |
|---|---|---|
| `tool_slug` | URL de l'outil | Oui |
| `contact.nom` | Formulaire | Oui |
| `contact.email` | Formulaire | Oui |
| `contact.entreprise` | Formulaire | Non |
| `contact.telephone` | Formulaire | Non |
| `consent` | Case à cocher Loi 25 | Non |
| `answers` | Réponses brutes du quiz (clé→valeur) | Oui |
| `answers_display` | Réponses lisibles (question→réponse) | Non |
| `result` | Résultat calculé (score, band, recommendations) | Oui |
| `utm` | Paramètres UTM de la session | Non |
| `source_url` | URL de la page source | Non |
| `session_id` | ID de session pour le tracking | Non |

### Nom du lead Odoo

Format : `[Label outil] Prénom — Entreprise`

Exemples :
- `[Diagnostic de maturité numérique] Marie Dupont — ABC Corp`
- `[Calculateur ROI IA] Jean Martin`

### Programmation email (Supabase)

| Étape | Délai | Code |
|---|---|---|
| 1 | J+0 (immédiat) | `{série}1` |
| 2 | J+2 | `{série}2` |
| 3 | J+9 | `{série}3` |
| 4 | J+39 | `{série}4` |

En cas de re-soumission : les envois antérieurs non envoyés sont annulés et la séquence est reprogrammée.

---

## 8 — Edge Function — submit-resource

Fichier : `supabase/functions/submit-resource/index.ts`

### Données collectées

| Champ | Source | Obligatoire |
|---|---|---|
| `ressource_id` | Slug de la ressource | Oui |
| `prenom` | Formulaire | Oui |
| `courriel` | Formulaire | Oui |
| `utm` | Paramètres UTM | Non |
| `source_url` | URL de la page source | Non |
| `session_id` | ID de session | Non |

### Champs Odoo envoyés

| Champ Odoo | Valeur |
|---|---|
| `name` | `[Label ressource] Prénom` |
| `contact_name` | Prénom |
| `email_from` | Courriel |
| `source` | `novatrait.com/ressources/{ressource_id}` |
| `studio_routing` | `true` |
| `tag_names` | `[tag ressource, "Contact site"]` |
| `x_studio_outil_source` | Label complet de la ressource |
| `x_studio_consentement` | `true` |
| `x_studio_consentement_date` | Timestamp ISO |
| `x_download_url` | URL du PDF |
| `description` | HTML : nom ressource + lien PDF |
| `utm_source_name` / `utm_medium_name` / `utm_campaign_name` | Valeurs UTM |

### URLs des PDFs

| Ressource | URL |
|---|---|
| checklist-outils-qui-ralentissent | `https://novatrait.com/ressources/checklist-outils-qui-ralentissent.pdf` |
| checklist-inventaire-technologique | `https://novatrait.com/ressources/checklist-inventaire-technologique.pdf` |
| checklist-numerique-2027 | `https://novatrait.com/ressources/checklist-numerique-2027.pdf` |
| gabarit-plan-90-jours | `https://novatrait.com/ressources/gabarit-plan-90-jours.pdf` |

### Programmation email (Supabase)

| Étape | Délai | Code |
|---|---|---|
| 1 | J+0 (immédiat) | `{série}1` |
| 2 | J+3 | `{série}2` |
| 3 | J+10 | `{série}3` |

---

## 9 — Frontend — Données lisibles (answers_display)

### Problème résolu

Les réponses aux quiz étaient envoyées à Odoo sous forme de **codes bruts** (ex: `erp_legacy`, `50_100`), illisibles pour les commerciaux.

### Solution

Le composant `ToolRunner.tsx` résout chaque réponse en texte lisible **avant** l'envoi :

1. Pour chaque question du quiz, récupère la réponse brute
2. Si la question a des options (radio/select), trouve le `label` correspondant à la `value`
3. Sinon (texte libre, nombre), utilise la valeur telle quelle
4. Envoie le tableau `answers_display: [{ question, answer }]` à l'Edge Function

### Exemple

| Brut (answers) | Lisible (answers_display) |
|---|---|
| `{ erp_usage: "erp_legacy" }` | `{ question: "Utilisez-vous un ERP ?", answer: "Oui, un système ancien (legacy)" }` |
| `{ employees: "50_100" }` | `{ question: "Nombre d'employés", answer: "50 à 100" }` |

La description HTML envoyée à Odoo utilise `answers_display` en priorité, avec fallback sur `answers` brut.

---

## 10 — Flux complet pas-à-pas

### Exemple : un visiteur complète le Diagnostic de maturité numérique

```
1. Visiteur répond aux 10 questions du quiz
2. Frontend calcule le résultat (score, bande, recommandations)
3. Visiteur entre nom + email + consent → clic "Voir mes résultats"

4. ToolRunner.tsx :
   - Résout answers_display (réponses lisibles)
   - POST vers submit-tool Edge Function

5. submit-tool (Supabase) :
   - Valide le payload (Zod)
   - Rate-limit : max 10 leads/24h par IP
   - Upsert lead dans table `leads`
   - Insert événement `tool_completed` dans `lead_events`
   - Annule les emails planifiés antérieurs
   - Programme A1 (J+0), A2 (J+2), A3 (J+9), A4 (J+39)
   - POST vers proxy Odoo (best-effort)

6. Proxy API (api-connect-odoo) :
   - Authentifie via x-signature + x-client-id
   - Crée le lead Odoo : company_id=33, team_id=15
     (PAS de tags dans le create initial)
   - Résout UTM (crée utm.source/medium/campaign si inexistants)
   - Écrit les tags séparément : ["Diagnostic Maturité Numérique", "Contact site"]
     → tag_ids = [[6, 0, [41, 91]]]

7. Odoo — Automation [37] se déclenche (on_write, tag "Contact site" ajouté) :
   - Action 1 : user_id = 24 (Arnaud Diaz)
   - Action 2 : activité appel téléphonique à J+3
   - Action 3 : email template [252]

8. Odoo — Marketing Automation détecte tag #41 :
   - Envoie email résultat A1 immédiatement
   - Programme A2 à J+2, A3 à J+9, A4 à J+39
   - Expéditeur : "NovaTrait" <contact@novatrait.com>
```

---

## 11 — Tableau de correspondance tags ↔ campagnes

| Code TAG_MAP | ID Tag | Campagne Marketing | Séries | Statut |
|---|---|---|---|---|
| Diagnostic Maturité Numérique | 41 | Tunnel A — Maturité numérique | A1–A4 | OK |
| Conformité Loi 25 | 42 | Tunnel B — Conformité Loi 25 | B1–B4 | OK |
| Calculateur Économies | 43 | Tunnel C — Calculateur Économies | C1–C4 | OK |
| Calculateur ROI IA | 44 | Tunnel D — ROI IA | D1–D4 | OK |
| Comparateur Coût CTO | 45 | Tunnel E — Coût CTO | E1–E4 | OK |
| Diagnostic Express IA | 46 | Tunnel F — Diagnostic Express IA | F1–F4 | OK |
| Ressource: Checklist Outils | 47 | Tunnel G — Checklist Outils | G1–G3 | OK |
| Ressource: Checklist Inventaire | 48 | Tunnel H — Checklist Inventaire | H1–H3 | OK |
| Ressource: Checklist 2027 | 49 | Tunnel I — Checklist 2027 | I1–I3 | OK |
| Ressource: Plan 90 Jours | 50 | Tunnel J — Plan 90 Jours | J1–J3 | OK |
| Contact site | 91 | — (Automation [37]) | — | OK |

**Les 11 tags sont alignés entre le code frontend, les Edge Functions, le proxy et Odoo.**

---

## 12 — Template email [252]

| Paramètre | Valeur |
|---|---|
| ID | 252 |
| Nom | Premier contact Novatrait |
| Modèle | crm.lead |
| `email_from` | `{{ object.user_id.email_formatted }}` (= email du vendeur assigné) |
| Envoyé par | Action mail_post de l'automation [37] (commentaire chatter) |

---

## 13 — Corrections appliquées

### Proxy API

| Correction | Détail |
|---|---|
| `company_id` manquant avec `studio_routing: true` | Le lead était créé dans MSL-iTECH (company 1) au lieu de NOVATRAIT (33). Corrigé : le proxy assigne `company_id` même avec `studio_routing: true`. |
| `team_id` par défaut incorrect | Après fix company_id, Odoo rejetait le lead ("Sales Team appartient à une autre société"). Corrigé : le proxy résout `team_id` via `crm.team` filtré par `company_id`. |
| Champ `function` ignoré | Le proxy ne transmettait pas `function` (mot réservé JS). Corrigé : extraction via variable intermédiaire. |

### Edge Functions

| Correction | Détail |
|---|---|
| Tag "Contact site" absent | Les Edge Functions n'envoyaient pas le tag "Contact site" → automation [37] ne se déclenchait pas. Corrigé : ajouté dans `tag_names`. |
| Nom du lead sans préfixe | Le nom était juste le prénom. Corrigé : format `[Label outil] Nom — Entreprise`. |
| Champs `x_studio_*` manquants | `x_studio_outil_source`, `x_studio_consentement`, UTM natifs n'étaient pas envoyés. Corrigé : tous les champs ajoutés. |
| Consentement Loi 25 en dur | `x_studio_consentement: true` était hardcodé. Corrigé pour submit-tool : transmis depuis le frontend. (submit-resource : reste `true` car case obligatoire) |
| Réponses illisibles dans Odoo | Les réponses brutes (codes) étaient envoyées dans `description`. Corrigé : `answers_display` résout les labels côté frontend. |

### Odoo

| Correction | Détail |
|---|---|
| `x_studio_outil_source` — valeurs manquantes | Les 4 labels de ressources n'existaient pas dans les valeurs de sélection → Odoo rejetait le lead (ValueError). Corrigé : 4 valeurs ajoutées via `ir.model.fields.selection`. |
| Email Marketing Automation | Les 20 mailings (campagnes A–J) avaient `Junior TAGNE` comme expéditeur. Corrigé : tous mis à `"NovaTrait" <contact@novatrait.com>`. |

---

## 14 — Points d'attention

### SPF/DKIM pour contact@novatrait.com

Les emails Marketing Automation partent maintenant de `contact@novatrait.com`. Il faut s'assurer que le serveur SMTP d'Odoo est autorisé à envoyer au nom de ce domaine :
- **SPF** : ajouter le serveur Odoo dans l'enregistrement SPF de `novatrait.com`
- **DKIM** : configurer la signature DKIM si ce n'est pas déjà fait

Sans cela, les emails risquent d'atterrir en spam.

### Abonnés automatiques

Le partenaire NOVATRAIT (company_id=33) s'auto-abonne aux leads créés dans sa société. Les emails internes (commentaires chatter, template [252]) sont donc aussi envoyés à `contact@novatrait.com`. Si ce n'est pas souhaité, retirer manuellement l'abonnement dans Odoo.

### Tunnel email Supabase (email_schedule)

Les Edge Functions programment des emails dans la table `email_schedule` (Supabase). Ce système nécessite un **cron job** (non encore implémenté) pour lire les lignes `scheduled_for < now() AND sent_at IS NULL AND cancelled_at IS NULL` et envoyer les emails correspondants. Les emails Marketing Automation d'Odoo couvrent déjà le nurturing — vérifier s'il y a redondance avant d'activer le cron Supabase.

### Tests end-to-end validés

| Flux | Lead test | Résultat |
|---|---|---|
| Contact (MSL-iTECH, référence) | #20671 | 22/22 checks OK |
| submit-tool (NovaTrait) | #20674 | 7/7 checks OK |
| submit-resource (NovaTrait) | — | OK (après ajout valeurs sélection) |
