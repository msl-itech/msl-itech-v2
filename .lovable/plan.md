# Plan — Tunnel de vente outils interactifs MSL-iTECH

## Objectif
Créer 4 outils interactifs publiés sous `/outils/*`, intégrés au tunnel de vente (capture lead → Odoo CRM → scoring → nurturing email). Tous les CTA contenu/blog/LinkedIn pointeront vers ces URLs exactes (jamais l'accueil).

## Périmètre de ce chantier (Lot 1 — fondations frontend + capture)

1. **4 pages outils** sous `/outils/*` :
   - `/outils/conformite-dgi` — Simulateur de conformité DGI (6 questions max, score risque, résultat partiel après Q3)
   - `/outils/roi-erp` — Calculateur ROI migration ERP (gains 12 mois en MAD)
   - `/outils/diagnostic-digital` — Diagnostic maturité digitale (4 niveaux : Conformité / Intégration / Automatisation / Intelligence)
   - `/outils/comparateur-sage-odoo` — Comparateur Sage vs Odoo (coût 3 ans + 3 critères qualitatifs)

2. **UX commune des outils** :
   - Max 6 questions, barre de progression
   - Résultat partiel visible après Q3
   - Formulaire capture en fin : prénom (obl.) + email pro (obl.) + téléphone (opt.) + outil actuel (Excel/Sage/Odoo/Autre, obl.)
   - Tracking UTM (source, medium, campaign, content) capturé depuis l'URL et conservé en sessionStorage
   - Tracking de progression + abandon (pour relance J+1)

3. **Capture & scoring (frontend, via lib existante `src/lib/odoo.ts`)** :
   - Construction du payload Odoo Lead avec :
     - `name` = "Prénom — Société (si fournie) — [Outil]"
     - `source` = `msl-itech.com{path}` + UTM
     - `tag_names` = ["outil:dgi" | "outil:roi" | "outil:diagnostic" | "outil:sage-odoo", `score:<segment>`, `outil-actuel:<...>`]
     - `description` HTML structurée : réponses, score calculé, segment, UTM
     - `extra` : `lead_score` (0–100), `segment` ("tres_chaud"|"chaud"|"tiede"|"froid"), `tool_slug`, réponses brutes
   - Scoring 0–100 calculé côté client selon grille Partie 5 (taille entreprise, outil actuel, urgence, email pro vs gratuit, téléphone, outil utilisé)
   - Détection email pro : exclusion gmail/yahoo/outlook/hotmail/icloud/free/orange/...

4. **Pages outils — composants partagés** :
   - Nouveau dossier `src/components/outils/`
     - `ToolShell.tsx` (hero + breadcrumb + structure commune)
     - `ToolWizard.tsx` (état des questions, progression, navigation, calcul score)
     - `ToolQuestion.tsx` (rendu d'une question : choix unique, slider, number)
     - `ToolPartialResult.tsx` (preview après Q3)
     - `ToolLeadForm.tsx` (capture + soumission Odoo + état succès/erreur)
     - `ToolResult.tsx` (résultat complet + CTA "Planifier mon diagnostic" → `/contact`)
   - Nouveau fichier `src/lib/lead-scoring.ts` (fonction `scoreLead(...)` + classification de segment + detection email pro)

5. **Routing** : ajout des 4 routes dans `src/App.tsx` (lazy-loaded) et nouvelles entrées dans `src/lib/sitemap-routes.ts` + `public/sitemap.xml`.

6. **SEO** : chaque page outil utilise `useProductSeo` avec titre/description/canonical/JSON-LD `SoftwareApplication` ou `WebApplication`.

7. **Maillage interne (sans CTA générique)** :
   - Ajout d'un bloc "Outils" discret dans le footer (4 liens).
   - Sur chaque article de blog correspondant, ajout d'un encart contextuel (1 seul, ciblé) vers l'outil exact lié au sujet — pas vers l'accueil. (Réf. règle absolue.)
   - Mise à jour des articles existants déjà publiés :
     - article DGI → encart vers `/outils/conformite-dgi`
     - article Sage vs Odoo → encart vers `/outils/comparateur-sage-odoo`
     - article migration Excel → encart vers `/outils/roi-erp`
     - article Data Readiness + ERP agentique + transformation digitale → encart vers `/outils/diagnostic-digital`

## Hors périmètre de ce lot (à traiter dans un Lot 2 séparé)
Ces parties demandent une infrastructure backend dédiée et seront proposées dans un plan suivant après validation du Lot 1 :

- **Séquences email automatiques (Partie 4)** : 4 séquences (DGI, ROI, Sage/Odoo, Diagnostic) avec emails J+0/J+3/J+7/J+14/J+30. Nécessite :
  - Lovable Cloud + table `lead_sequences` + Edge Function planifiée (pg_cron) + envoi via domaine email Lovable.
  - Templates HTML personnalisables et tracking ouvertures/clics.
- **Relance d'abandon J+1** (si email saisi avant abandon, sinon impossible).
- **Notifications internes** (email/Slack) sur lead score ≥ 75 → tâche commerciale "contact dans 2h".
- **Tableau de bord interne** des leads & KPIs (taux complétion outil, score moyen, segments).
- **Tracking GEO/citations IA, A/B test des accroches LinkedIn** — outils externes, hors codebase.

## Détails techniques

### Scoring (`src/lib/lead-scoring.ts`)
```text
score = taille + outilActuel + urgence + emailType + telephone + outilUtilise
segment = >=75 'tres_chaud' | 55-74 'chaud' | 35-54 'tiede' | <35 'froid'
```

### Payload Odoo (extension `OdooLeadData.extra`)
```text
extra: {
  lead_score: number,
  segment: 'tres_chaud'|'chaud'|'tiede'|'froid',
  tool_slug: 'conformite-dgi'|'roi-erp'|'diagnostic-digital'|'comparateur-sage-odoo',
  answers: Record<string, string|number>,
  utm: { source, medium, campaign, content, term }
}
```

### Structure de fichiers ajoutée
```text
src/
  components/outils/
    ToolShell.tsx
    ToolWizard.tsx
    ToolQuestion.tsx
    ToolPartialResult.tsx
    ToolLeadForm.tsx
    ToolResult.tsx
  lib/
    lead-scoring.ts
    utm.ts                # parse + persistance sessionStorage
  pages/outils/
    ConformiteDgiPage.tsx
    RoiErpPage.tsx
    DiagnosticDigitalPage.tsx
    ComparateurSageOdooPage.tsx
```

### Routes ajoutées dans `src/App.tsx`
```text
/outils/conformite-dgi
/outils/roi-erp
/outils/diagnostic-digital
/outils/comparateur-sage-odoo
```

## Question avant exécution
Confirmes-tu :
1. On démarre uniquement par le **Lot 1** (4 outils + capture Odoo + scoring + maillage blog), et je te proposerai ensuite un plan Lot 2 dédié aux séquences email automatiques et à la notification "lead chaud" ?
2. Les leads sont bien envoyés vers ton CRM Odoo via l'API actuelle (`src/lib/odoo.ts` → `api-connect-odoo.vercel.app`) — pas de nouveau backend pour cette étape ?
