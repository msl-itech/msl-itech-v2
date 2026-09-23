# T12 — Suivi d'exécution

Dernière mise à jour : 2026-09-23 (Phases B + C terminées)

---

## Légende

- [ ] À faire
- [~] En cours
- [x] Terminé
- [!] Bloqué / point d'attention

---

## Phase A — Préparation Odoo *(~20 min — Manuel)*

- [ ] **A1** Vérifier si le formulaire T6 est en production
  - [ ] Si oui : lister les vrais leads avec anciennes étiquettes
  - [ ] Si non : confirmer qu'il n'y a rien à migrer
- [ ] **A2** Supprimer les leads de test dans Odoo CRM
- [ ] **A3** Vérifier si le formulaire T6 est en prod — si oui, évaluer si des leads arrivent pendant la config Studio (si oui, voir Phase D avant de continuer)
- [x] **A4** Créer les 3 étiquettes CRM → Configuration → Étiquettes
  - [x] Odoo ERP (vert) — id=66
  - [x] Site web (bleu) — id=67
  - [x] Marketing digital (orange) — id=68

**Contrôle A** : pipeline vide de leads de test · 3 étiquettes présentes · aucun nouveau lead ne reçoit d'équipe/activité/email

---

## Phase B — Studio : onglet Qualification *(~1h20 — Manuel Odoo)*

> Pré-requis : mode développeur activé avant de lancer Studio

### B1 — Champs Studio (onglet "Qualification")

**Bloc Demande**
- [x] `x_studio_outil_source` — Sélection : Formulaire de contact / Simulateur DGI / Diagnostic digital
- [x] `x_studio_score` — Entier
- [x] `x_studio_segment` — Sélection lecture seule : Froid / Tiède / Chaud

**Bloc Projet**
- [x] `x_studio_secteur` — Sélection (Commerce/Distribution · BTP/Construction · HORECA · Santé · Transport · Production · Services B2B · Tourisme · Autre)
- [x] `x_studio_outil_actuel` — Sélection (Excel/Word · Sage · Autre ERP · Odoo · Aucun · Autre)
- [x] `x_studio_echeance` — Sélection (< 3 mois · 3 à 6 mois · Plus tard · Je me renseigne)
- [x] `x_studio_objectif` — Sélection (Nouveau site · Refonte · E-commerce · Plus de demandes · Visibilité Google/IA · Campagnes pub)
- [x] `x_studio_budget` — Sélection (< 1 000 € · 1 000 à 3 500 € · > 3 500 €)
- [x] `x_studio_url_site` — Texte

**Bloc Conformité**
- [x] `x_studio_consentement` — Case à cocher
- [x] `x_studio_consentement_date` — Date et heure

### B2 — Calcul du segment

- [x] Paramètres → Technique → Champs → `x_studio_segment`
  - Dépendances : `x_studio_score`
  - Stocké : coché
  - Calcul : code Annexe B (seuils : < 30 = Froid · 30–69 = Tiède · ≥ 70 = Chaud)

### B3 — Relever les clés techniques *(CRITIQUE pour le code)*

> À remplir après création des champs — le connecteur envoie les clés, pas les libellés

| Champ | Valeur Studio | Clé technique réelle |
|-------|--------------|----------------------|
| x_studio_outil_source | Formulaire de contact | `Formulaire de contact` |
| x_studio_outil_source | Simulateur DGI | `Simulateur DGI` |
| x_studio_outil_source | Diagnostic digital | `Diagnostic digital` |
| x_studio_segment | Froid | `Froid` |
| x_studio_segment | Tiède | `Tiède` |
| x_studio_segment | Chaud | `Chaud` |
| x_studio_secteur | Commerce / Distribution | `Commerce / Distribution` |
| x_studio_secteur | BTP / Construction | `BTP / Construction` |
| x_studio_secteur | HORECA / Restauration | `HORECA / Restauration` |
| x_studio_secteur | Santé / Services médicaux | `\u200bSanté / Services médicaux` ⚠️ zéro-width |
| x_studio_secteur | Transport / Logistique | `\u200bTransport / Logistique` ⚠️ zéro-width |
| x_studio_secteur | Production / Industrie | `Production / Industrie` |
| x_studio_secteur | Services B2B | `Services B2B` |
| x_studio_secteur | Tourisme / Hôtellerie | `Tourisme / Hôtellerie` |
| x_studio_secteur | Autre | `Autre` |
| x_studio_outil_actuel | Excel / Word | `Excel / Word` |
| x_studio_outil_actuel | Sage | `Sage` |
| x_studio_outil_actuel | Autre ERP | `Autre ERP` |
| x_studio_outil_actuel | Odoo | `Odoo` |
| x_studio_outil_actuel | Aucun outil | `Aucun outil` |
| x_studio_outil_actuel | Autre | `Autre` |
| x_studio_echeance | Moins de 3 mois | `Moins de 3 mois` |
| x_studio_echeance | 3 à 6 mois | `\u200b3 à 6 mois` ⚠️ zéro-width |
| x_studio_echeance | Plus tard | `\u200bPlus tard` ⚠️ zéro-width |
| x_studio_echeance | Je me renseigne | `\u200b\u200bJe me renseigne` ⚠️ double zéro-width |
| x_studio_objectif | Nouveau site | `Nouveau site` |
| x_studio_objectif | Refonte | `Refonte` |
| x_studio_objectif | E-commerce | `E-commerce` |
| x_studio_objectif | Plus de demandes | `Plus de demandes` |
| x_studio_objectif | Visibilité Google / IA | `Visibilité Google / IA` |
| x_studio_objectif | Campagnes pub | `Campagnes pub` |
| x_studio_budget | Moins de 1 000 € | `Moins de 1 000 €` |
| x_studio_budget | 1 000 à 3 500 € | `1 000 à 3 500 €` |
| x_studio_budget | Plus de 3 500 € | `Plus de 3 500 €` |

### B4 — Filtres et regroupements (Studio → Vues → Recherche)

- [x] Filtre rapide "Odoo ERP" (via éditeur domaine, pas texte libre)
- [x] Filtre rapide "Site web"
- [x] Filtre rapide "Marketing digital"
- [x] Filtre "Score ≥ 60"
- [x] Filtre "Chauds" (segment = Chaud)
- [x] Regroupement par Étiquettes
- [x] Regroupement par Secteur
- [x] Regroupement par Origine
- [x] Regroupement par Segment

**Contrôle B** : score=75 sur un lead de test → segment "Chaud" automatique · filtres et regroupements OK dans le pipeline

---

## Phase C — Studio : emails + automatisations *(~1h15 — Manuel Odoo)*

### C1 — 3 modèles d'email (Paramètres → Technique → Emails → Modèles)

- [x] **Accusé de réception — Odoo ERP** — id=372
  - Objet : "Votre projet Odoo — prochaines étapes"
  - De : `{{ object.user_id.email_formatted }}`
  - Prénom + vendeur en champs dynamiques
- [x] **Accusé de réception — Site web** — id=373
  - Objet : "Votre projet de site web — prochaines étapes"
- [x] **Accusé de réception — Marketing digital** — id=374
  - Objet : "Votre demande en marketing digital — prochaines étapes"

**Contrôle C1** : aperçu depuis un lead de test → bon prénom + bon vendeur affiché

### C2 — 3 automatisations (créées via script API)

- [x] **Règle "Lead Odoo ERP"** — id=82
  - Déclencheur : on_write · tag_ids in [66] · company_id=1
  - Action 1 (id=2198) : code Python → team_id=1, user_id=8
  - Action 2 (id=2199) : next_activity · Call · J+1 · generic (vendeur)
  - Action 3 (id=2200) : mail_post email → template id=372
- [x] **Règle "Lead Site web"** — id=83
  - Déclencheur : on_write · tag_ids in [67] · company_id=1
  - Action 1 (id=2201) : code Python → team_id=2, user_id=33
  - Action 2 (id=2202) : next_activity · Call · J+1 · generic
  - Action 3 (id=2203) : mail_post email → template id=373
- [x] **Règle "Lead Marketing digital"** — id=84
  - Déclencheur : on_write · tag_ids in [68] · company_id=1
  - Action 1 (id=2204) : code Python → team_id=2, user_id=33
  - Action 2 (id=2205) : next_activity · Call · J+1 · generic
  - Action 3 (id=2206) : mail_post email → template id=374

> ⚠️ team_id provisoires : 1=Sales, 2=Website — à corriger vers ERP Odoo / Web & Marketing dès que les IDs sont accessibles via API

**Contrôle C2** : lead à la main + étiquette "Site web" → Manal assignée · activité téléphone J+1 · email dans le fil

---

## Phase D — Code *(~2h — Développement)*

### D1 — Connecteur : additions uniquement ✅

> Règle absolue : rien n'est supprimé ni modifié dans `api-connect-odoo`. Autres clients inchangés.
> Déployer en une seule fois après avoir les clés B3 + Studio configuré.

Fichier : `api-connect-odoo/src/controllers/lead.controller.js`, fonction `createLead`

**Additions :**
- [x] `const studio_routing = req.body.studio_routing === true`
- [x] Bloc routage équipe wrappé dans `if (!studio_routing && team_name)` / `else if (!studio_routing && companyId)`
- [x] Bloc création activité wrappé dans `if (!studio_routing) try {`
- [x] Résolution `country_id` via `res.country` `[['code','=',country_code]]`
- [x] Mapping `x_studio_*` dans `leadData` (passthrough depuis `req.body`)
- [x] `partner_name` ajouté dans `leadData`

> Sans le flag, le connecteur se comporte exactement comme avant pour tous les autres clients.
- [x] Déployer sur Vercel ✅ — https://api-connect-odoo-nine.vercel.app

### D2 — Site : type OdooLeadData ✅

Fichier : `msl-itech-v2/src/lib/odoo.ts`

- [x] Champs `studio_routing`, `x_studio_*` ajoutés à l'interface
- [x] `team_name` conservé (marqué legacy dans le commentaire)

### D3 — Site : ContactPage.tsx ✅

Fichier : `msl-itech-v2/src/pages/ContactPage.tsx`

- [x] `studio_routing: true`
- [x] `tag_names: [besoinLabel]` — une seule étiquette
- [x] `team_name` retiré du payload
- [x] `x_studio_outil_source: "formulaire_de_contact"` (TODO B3 : remplacer par clé réelle)
- [x] `x_studio_consentement: true` + `x_studio_consentement_date`
- [x] Champs ERP/Site/Marketing → `x_studio_secteur`, `x_studio_echeance`, `x_studio_objectif`, `x_studio_budget`, `x_studio_url_site` (TODO B3 : clés techniques)
- [x] `description` : message libre marketing uniquement

### D4 — Site : ToolWizard.tsx ✅

Fichier : `msl-itech-v2/src/components/outils/ToolWizard.tsx`

- [x] `studio_routing: true`
- [x] `tag_names: [besoinLabel]` — une seule étiquette
- [x] `team_name` retiré du payload
- [x] `x_studio_score: score`
- [x] `x_studio_outil_source` selon slug (TODO B3 : clés réelles)
- [x] `x_studio_consentement: true` + `x_studio_consentement_date`
- [x] `description` : résultat + recommandations + réponses uniquement

### D5 — Validation technique ✅

- [x] `npx tsc --noEmit` → 0 erreur
- [x] `npx vitest run` → 13 tests verts
- [x] `npx vite build` → succès
- [x] Déployer connecteur sur Vercel ✅ — commit ce9a3e4
- [ ] Déployer site sur Vercel *(après Phase B)*

---

## Phase E — Tests + nettoyage *(~30 min)*

### E1 — Migration vrais leads (si Phase A en a trouvé)

- [ ] Désactiver les 3 automatisations Studio
- [ ] Reporter valeurs → nouveaux champs · poser la bonne étiquette
- [ ] Réactiver les automatisations

### E2 — Supprimer les anciennes étiquettes

- [ ] `besoin:*`
- [ ] `consentement:*` / `Consentement OK`
- [ ] `secteur:*`
- [ ] `segment:*`
- [ ] `score:*`
- [ ] `outil-actuel:*`
- [ ] `Outil : *`

### E3 — 3 soumissions de test (une par besoin, URL avec UTM)

- [ ] Lead **Odoo ERP** créé
  - [ ] Une seule étiquette "Odoo ERP"
  - [ ] Onglet Qualification rempli
  - [ ] Onglet Contact : Société + Pays + Nom du contact présents
  - [ ] Note : aucune info déjà dans un champ
  - [ ] Équipe = ERP Odoo · Vendeur = El Houssine
  - [ ] 1 seule activité · type Appel · icône téléphone · J+1 · assignée au vendeur
  - [ ] 1 seul email dans le fil · reçu en boîte Gmail externe (pas spam)
- [ ] Lead **Site web** créé (mêmes vérifications · vendeur = Manal)
- [ ] Lead **Marketing digital** créé (mêmes vérifications · vendeur = Manal)
- [ ] Filtres et regroupements pipeline OK
- [ ] Anciennes étiquettes disparues

---

## Livrables finaux (section 6 du cahier)

- [ ] Liste des champs avec noms techniques réels et clés de sélection (tableau B3 complété)
- [ ] Capture des 3 automatisations (déclencheur + actions)
- [ ] Les 3 modèles d'email
- [ ] Connecteur mis à jour + liste de ce qui a été retiré
- [ ] Captures des 3 leads de test : onglet Qualification + Contact + activité + email dans le fil

---

## Blocages / Notes

*(à remplir au fil de l'exécution)*
