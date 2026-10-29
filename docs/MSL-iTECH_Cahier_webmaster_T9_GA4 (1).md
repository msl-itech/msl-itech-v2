# **MSL-iTECH — Cahier webmaster T9 — Taggage GA4** 

Oct 19, 2026 · @El houssine BOUHMAIDA 

## **Objet, état actuel et configuration** 

Le T9 doit permettre de répondre à trois questions : d'où viennent les visiteurs qui deviennent des leads, quels outils et quelles pages les convertissent, et où ils abandonnent. Il ne remplace pas Odoo : le nombre de leads fait foi dans le CRM, GA4 sert à comprendre le parcours. 

**État actuel du code** , lu dans le dépôt le 19/10/2026 : 

- <mark>src/lib/analytics.ts</mark> charge déjà GA4 (gtag.js) et Microsoft Clarity, seulement après le consentement « statistiques » donné dans la bannière ( <mark>src/lib/consent.ts</mark> ). Il est appelé depuis <mark>Layout.tsx</mark> . 

- L'identifiant GA4 vient de la variable <mark>VITE_GA_MEASUREMENT_ID</mark> . Elle n'est pas dans le fichier <mark>.env</mark> du dépôt : si elle n'est pas définie sur Vercel, GA4 ne se charge jamais aujourd'hui. 

- Aucun événement personnalisé n'est envoyé. Seules les pages vues partent. 

- Le retrait du consentement ne coupe pas GA4 avant le prochain rechargement de la page. 

- La page /prendre-rendez-vous affiche l'agenda Odoo dans un iframe (odoo.msl-itech.com). La réservation elle-même ne peut pas être mesurée par GA4 depuis le site : elle reste suivie dans Odoo, par l'étiquette rdv_pris. 

#### **Choix techniques** 

|Sujet|Choix|Raison|
|---|---|---|
|Outil|gtag.js direct, déjà en<br>place|Pas de Google Tag Manager : un outil de moins<br>à maintenir|
|Consentement|Rien ne se charge avant<br>l'accord, comme<br>aujourd'hui|Loi 09-08 et RGPD (visiteurs belges). GA4 ne<br>comptera que les visiteurs qui acceptent : c'est<br>normal|
|Pages vues|Mesure améliorée de<br>GA4 (changements<br>d'historique)|Le site est une application monopage : pas<br>d'envoi manuel, sinon chaque page compterait<br>deux fois|
|Environnements|Mesure uniquement<br>sur msl-itech.com|Les préversions Vercel ne doivent jamais<br>polluer les chiffres|
|Données personnelles|Aucune envoyée à GA4|Ni nom, ni email, ni téléphone, ni société, ni<br>message, ni URL de site saisie|



**Prérequis et configuration GA4** (à faire par El Houssine ou Junior, dans l'interface GA4) 

1. Propriété GA4 de MSL-iTECH : fuseau horaire Casablanca, devise MAD. Flux web pour https://msl-itech.com. Noter l'identifiant de mesure (G-…). 

2. Vercel : définir <mark>VITE_GA_MEASUREMENT_ID</mark> dans l'environnement **Production uniquement** , pas dans Preview. 

3. Mesure améliorée : activer pages vues avec changements d'historique, défilements, clics sortants et téléchargements. **Désactiver « Interactions avec les formulaires »** : nos événements de formulaire sont envoyés par le code, sinon ils seraient comptés deux fois. 

4. Signaux Google désactivés, et conservation des données à 14 mois. 

5. Trafic interne : créer le filtre de données « Trafic interne » (traffic_type = internal), d'abord en mode test, puis actif une fois la recette faite. Le paramètre est posé par le code (section suivante), puisque l'équipe travaille à distance et qu'un filtre par adresse IP ne marcherait pas. 

6. Définitions personnalisées : créer une dimension de portée « événement » pour chaque paramètre du plan de taggage (section suivante). 

7. Événement clé : marquer <mark>generate_lead</mark> . Créer aussi un événement <mark>appointment_page_view</mark> à partir de page_view, quand l'adresse contient /prendre-rendez-vous, et le marquer comme événement clé. 

8. Associer la Search Console (propriété msl-itech.com) à la propriété GA4. 

9. Clarity : passer le masquage en mode « Strict », pour que les enregistrements de session ne montrent jamais le texte saisi dans les formulaires. 

## **Code et plan de taggage** 

### **1. Remplacer** **<mark>src/lib/analytics.ts</mark>** 

Le fichier garde ce qui existe (chargement après consentement, Clarity) et ajoute : 

- le chargement limité à msl-itech.com, pour GA4 comme pour Clarity ; 

- la fonction <mark>track()</mark> , seule porte d'entrée pour tous les événements ; 

- l'arrêt immédiat de GA4 et de Clarity quand le visiteur retire son consentement ; 

- le marqueur de trafic interne : ouvrir une fois <mark>https://msl-itech.com/?msl_internal=1</mark> sur un navigateur de l'équipe le marque comme interne, et ses visites sont exclues des rapports et visibles dans DebugView. <mark>?msl_internal=0</mark> l'enlève. 

##### /** 

- Conditional analytics loaders — Google Analytics 4 + Microsoft Clarity. 

- Both load ONLY after the user grants the "analytics" consent, 

- and ONLY on the production host (never on Vercel previews or localhost). * 

- GA4: VITE_GA_MEASUREMENT_ID must be set in the Vercel *Production* environment only. * Clarity: tag ID is hardcoded (xrf313hs67) — public by design, no secret. 

- Internal traffic: open the site once with ?msl_internal=1 to flag the browser 

- (excluded from reports via the GA4 "Internal traffic" data filter, visible in DebugView). */ 

import { getConsent, onConsentChange } from "./consent"; 

const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || ""; const CLARITY_ID = "xrf313hs67"; 

const PRODUCTION_HOSTS = ["msl-itech.com"]; const INTERNAL_FLAG_KEY = "msl_internal"; 

declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; clarity?: (...args: unknown[]) => void; } } 

export type TrackParams = Record<string, string | number | boolean | null | undefined>; 

── ───────────────────────────────────────────────────────────── /* Helpers */ 

function isProductionHost(): boolean { return typeof window !== "undefined" && PRODUCTION_HOSTS.includes(window.location.hostname); } 

/** Reads ?msl_internal=1|0 once, persists it, and returns the current flag. */ function isInternal(): boolean { try { 

const param = new URLSearchParams(window.location.search).get(INTERNAL_FLAG_KEY); if (param === "1") localStorage.setItem(INTERNAL_FLAG_KEY, "1"); if (param === "0") localStorage.removeItem(INTERNAL_FLAG_KEY); return localStorage.getItem(INTERNAL_FLAG_KEY) === "1"; } catch { return false; } } 

/** GA4 official opt-out switch: window['ga-disable-G-XXXX'] = true stops all hits. */ function setGaDisabled(disabled: boolean) { if (!GA_ID) return; (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = disabled; } 

── ───────────────────────────────────────────────── /* Google Analytics 4 */ 

let gaLoaded = false; 

function loadGa() { if (gaLoaded || !GA_ID || !isProductionHost() || typeof document === "undefined") return; gaLoaded = true; 

const s = document.createElement("script"); 

s.id = "ga4-loader"; s.async = true; s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`; document.head.appendChild(s); window.dataLayer = window.dataLayer || []; window.gtag = function gtag() { // eslint-disable-next-line prefer-rest-params window.dataLayer!.push(arguments); }; window.gtag("js", new Date()); const config: Record<string, unknown> = { allow_google_signals: false, allow_ad_personalization_signals: false, }; if (isInternal()) { config.traffic_type = "internal"; // matched by the GA4 "Internal traffic" data filter config.debug_mode = true; // visible in GA4 DebugView } window.gtag("config", GA_ID, config); } ── ────────────────────────────────────────────────── /* Microsoft Clarity */ let clarityLoaded = false; function loadClarity() { if (clarityLoaded || !isProductionHost() || typeof document === "undefined") return; clarityLoaded = true; const c = window as Window & { clarity?: (...args: unknown[]) => void }; c.clarity = c.clarity || function (...args: unknown[]) { ((c.clarity as unknown as { q?: unknown[][] }).q = (c.clarity as unknown as { q?: unknown[][] }).q || []).push(args); }; const s = document.createElement("script"); s.id = "clarity-loader"; s.async = true; s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`; document.head.appendChild(s); } ── ────────────────────────────────────────────────────────── /* Public API */ 

##### /** 

* Send a GA4 event. No-op when GA is not loaded (no consent, no ID, preview host). * Never pass personal data (name, email, phone, company, free text, entered URLs). */ export function track(event: string, params: TrackParams = {}): void { if (typeof window === "undefined" || !gaLoaded || !window.gtag) return; if (!getConsent().categories.analytics) return; 

const clean: Record<string, string | number | boolean> = {}; for (const [key, value] of Object.entries(params)) { if (value !== undefined && value !== null && value !== "") clean[key] = value; } window.gtag("event", event, clean); } /** * Initialise listeners. Call once at app boot. * Loads GA4 + Clarity when consent is granted; stops them when it is withdrawn. */ export function initAnalytics() { if (typeof window === "undefined") return; isInternal(); // persist ?msl_internal=1|0 on first page load 

const apply = (granted: boolean) => { if (granted) { setGaDisabled(false); loadGa(); loadClarity(); } else { setGaDisabled(true); window.clarity?.("stop"); } }; 

apply(getConsent().categories.analytics); onConsentChange((s) => apply(s.categories.analytics)); } 

### **2. Plan de taggage** 

Tous les événements passent par <mark>track(nom, paramètres)</mark> . Les noms et les valeurs fixes s'écrivent exactement comme ci-dessous : en minuscules, sans accents, avec des tirets bas. 

|Événement|Quand l'envoyer|Paramètres|Où|
|---|---|---|---|
|form_start|Au premier choix de<br>besoin,à l'étape 1 du|lead_source = contact, form_type|ContactPage|



|Événement|Quand l'envoyer|Paramètres|Où|
|---|---|---|---|
||formulaire de contact|||
|form_step|À l'affichage des étapes 2<br>et 3|lead_source = contact, form_type,<br>step (2 ou 3)|ContactPage|
|generate_lead|Après la réponse « OK »<br>du connecteur Odoo, une<br>seule fois par envoi,<br>jamais au clic|lead_source (contact, audit ou<br>outil), form_type (erp, site_web,<br>marketing ou audit), tool_name<br>(outils seulement), market|ContactPage,<br>page d'audit,<br>ToolWizard|
|form_error|Quand l'envoi échoue|lead_source, form_type ou<br>tool_name, error_type (network,<br>server ou validation)|Mêmes fichiers|
|tool_start|À la première réponse<br>d'un outil|tool_name (dgi, roi, diagnostic ou<br>sage)|ToolWizard|
|tool_complete|À l'affichage de l'écran de<br>résultat|tool_name, result_level (niveau<br>ou risque affiché, par exemple «<br>Eleve » ou « 3 »)|ToolWizard|
|tool_restart|Au clic sur « Refaire le test<br>»|tool_name|ToolWizard|
|cta_click|Au clic sur un bouton qui<br>mène à /contact,<br>/prendre-rendez-vous,<br>/audit-digital-gratuit ou un<br>outil|cta_label (texte du bouton),<br>cta_location (header, hero,<br>section, footer, article ou<br>tool_result), cta_target (chemin<br>visé)|Composants de<br>boutons et de<br>liens|
|contact_click|Au clic sur un lien<br>téléphone, email ou<br>WhatsApp|contact_method (phone, email ou<br>whatsapp), cta_location|Header,<br>Footer, pages|



<mark>market</mark> reprend la valeur de la fonction de marché du site (MA aujourd'hui). 

Le défilement, les clics sortants (dont odoo.com/partners) et les téléchargements sont mesurés par la mesure améliorée : ne pas les recoder. 

**Dimensions personnalisées à créer dans GA4** (portée événement) : lead_source, form_type, tool_name, step, error_type, result_level, cta_label, cta_location, cta_target, contact_method, market. 

### **3. Règles** 

- **Aucune donnée personnelle** dans un événement : ni nom, ni email, ni téléphone, ni société, ni message, ni URL de site saisie, ni valeur de champ libre. 

- <mark>generate_lead</mark> part uniquement après le succès de l'envoi à Odoo, une fois par lead. Un envoi en échec envoie <mark>form_error</mark> , jamais <mark>generate_lead</mark> . 

- Aucun envoi direct à <mark>window.gtag</mark> en dehors de <mark>analytics.ts</mark> : tout passe par <mark>track()</mark> . 

- Aucune page vue envoyée à la main : la mesure améliorée s'en charge. 

- **Hors périmètre** : la réservation dans l'iframe de l'agenda Odoo (suivie dans Odoo), Google Ads, LinkedIn Insight, et la transmission de l'identifiant GA4 à Odoo. 

## **Recette et livraison** 

La préversion Vercel ne mesure rien, par construction. La recette se fait donc en deux temps : sur la préversion, on vérifie que rien ne part ; en production, après fusion, on vérifie les événements dans DebugView, avec un navigateur marqué <mark>?msl_internal=1</mark> . 

#### **Sur la préversion, avant fusion** 

- ☐ Aucun script googletagmanager.com ni clarity.ms chargé, même après avoir tout accepté dans la bannière. 

- ☐ Aucun appel à <mark>window.gtag</mark> en dehors de <mark>analytics.ts</mark> : rechercher « gtag( » dans le code. 

- ☐ Chaque appel à <mark>track()</mark> respecte le tableau du plan de taggage : noms, paramètres et valeurs fixes. 

**En production, après fusion** , avec un navigateur marqué interne 

- ☐ Bannière refusée : aucune requête vers google-analytics.com ni clarity.ms. 

- ☐ Bannière acceptée : un page_view à l'arrivée, puis un seul par changement de page, jamais deux. 

- ☐ Consentement retiré depuis le lien du pied de page : plus aucune requête GA4 ni Clarity, sans recharger la page. 

- ☐ Formulaire de contact, besoin Odoo ERP : form_start, form_step 2, form_step 3, puis un seul generate_lead avec lead_source = contact et form_type = erp. 

- ☐ Formulaire d'audit : un seul generate_lead avec lead_source = audit et form_type = audit. 

- ☐ Un outil (DGI) : tool_start, tool_complete avec result_level, generate_lead avec lead_source = outil et tool_name = dgi, et tool_restart au clic sur « Refaire le test ». 

- ☐ Envoi en échec (couper le réseau juste avant l'envoi) : form_error, et aucun generate_lead. 

- ☐ Un bouton « Réserver une démo » du header et un lien téléphone ou WhatsApp : cta_click et contact_click avec leurs paramètres. 

- ☐ Dans l'onglet Réseau, aucune requête de collecte ne contient le nom, l'email, le téléphone ou la société saisis. 

- ☐ Les visites du navigateur interne n'apparaissent pas dans les rapports, une fois le filtre « Trafic interne » passé en actif. 

- ☐ Les leads de test créés pendant la recette sont nommés « TEST… », avec une adresse de test, puis passés en perdu « Test ou spam » dans Odoo. 

**Lecture des chiffres** : GA4 ne compte que les visiteurs qui acceptent les statistiques. Le nombre de generate_lead sera donc toujours inférieur au nombre de leads dans Odoo, qui reste la référence. On comparera les deux chaque mois, par outil source. 

**Livraison** : Junior travaille dans une branche créée depuis main, envoie la préversion et l'identifiant de mesure GA4, puis fusionne après le feu vert d'El Houssine. La recette en production suit la fusion. Il fournit enfin une capture de DebugView montrant generate_lead avec ses paramètres. 

