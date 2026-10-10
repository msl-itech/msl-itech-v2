# T13 — Guide pas-à-pas pour IA navigateur

> Ce guide est destiné à une IA qui contrôle un navigateur sur `https://msl-itech.odoo.com`.
> Chaque étape indique : l'URL ou le chemin de navigation, les clics exacts, les valeurs à saisir, et le résultat attendu.
> L'utilisateur connecté est **Junior** (admin). La langue de l'interface Odoo peut être en **anglais** (noms internes) ou en **français** — adapter selon ce qui s'affiche.
>
> **La majorité des éléments ont été créés par script API (phases 1 et 2).** Ce guide se concentre sur les vérifications visuelles et les tests manuels restants.
>
> **Ordre obligatoire : P1 → P2 → D (vérifs) → A (vérifs) → C (vérifs) → B (vérifs) → Recette**

---

## Table des matières

1. [P1 — Tester les réponses dans le fil du lead](#p1)
2. [P2 — Vérifier/dupliquer les automatisations d'arrêt](#p2)
3. [D — Vérifications des éléments créés par script](#d-verifs)
4. [A — Vérifications et tests des rappels vendeur](#a-verifs)
5. [C — Vérifications visuelles des campagnes 21–24](#c-verifs)
6. [B — Vérifications visuelles des campagnes B1/B2](#b-verifs)
7. [Recette finale](#recette)

---

<a id="p1"></a>
## P1 — Tester les réponses dans le fil du lead

### Objectif
Vérifier que quand un prospect répond à un email, sa réponse apparaît dans le fil de discussion du lead Odoo (pas dans une boîte mail externe).

### Étapes

**Étape 1 : Créer un lead de test**
1. Aller à `https://msl-itech.odoo.com/odoo/crm`
2. Cliquer le bouton **« + »** ou **« Nouveau »** en haut du pipeline
3. Remplir :
   - Nom du contact : `Test P1 Relances`
   - Email : une adresse Gmail de test que tu contrôles
   - Société : laisser vide ou `Test`
4. Cliquer **Ajouter** puis ouvrir le lead créé

**Étape 2 : Envoyer un email depuis le lead**
1. Dans le lead ouvert, cliquer **« Envoyer un message »** (icône enveloppe en bas du fil de discussion)
2. Écrire un texte court : `Test P1 — merci de répondre`
3. Cliquer **Envoyer**

**Étape 3 : Répondre depuis Gmail**
1. Ouvrir la boîte Gmail de test
2. Trouver l'email reçu, cliquer **Répondre**
3. Écrire : `Réponse test P1`
4. Envoyer

**Étape 4 : Vérifier le retour dans Odoo**
1. Revenir sur le lead dans Odoo (attendre 1-2 minutes, rafraîchir la page)
2. **Résultat attendu** : la réponse `Réponse test P1` apparaît dans le fil de discussion du lead
3. Vérifier que le vendeur assigné voit une notification (icône cloche en haut)

**Si la réponse n'arrive PAS dans le lead → Corriger les modèles 372–379 :**

1. Aller à `https://msl-itech.odoo.com/odoo/email/templates`
2. Pour chacun des modèles dont l'ID est 372, 373, 374, 375, 376, 377, 378, 379 :
   - Ouvrir le modèle
   - Chercher le champ **« Répondre à »** (Reply To)
   - **Vider** ce champ complètement (supprimer tout le contenu)
   - Cliquer **Enregistrer**
3. Résultat attendu : le champ « Répondre à » est vide → les réponses iront vers l'alias catchall du lead

**Étape 5 : Re-tester avec un email d'outil**
1. Envoyer un email depuis un lead en utilisant un des modèles 376–379 (cliquer « Envoyer un message » → choisir un modèle)
2. Répondre depuis Gmail
3. **Résultat attendu** : la réponse apparaît dans le fil du lead

---

<a id="p2"></a>
## P2 — Vérifier/dupliquer les automatisations d'arrêt

### Contexte
Le script a mis à jour la règle MSL existante (id=86) pour stopper sur `rendez-vous pris` (35) ET `réponse reçue` (36). Il faut vérifier que ça fonctionne, et vérifier si des règles séparées doivent être dupliquées depuis MFINANCES.

### Étapes

**Étape 1 : Vérifier la règle MSL existante (id=86)**
1. Aller à `https://msl-itech.odoo.com/odoo/action-base_automation.base_automation_act`
2. Chercher la règle id=86 (ou par nom contenant « MSL »)
3. Vérifier que le code d'action mentionne bien les tags 35 ET 36

**Étape 2 : Identifier les règles MFINANCES**
1. Dans la liste des règles automatisées, chercher les règles contenant « MFINANCES » ou « réponse » ou « rendez-vous »
2. Lire leur logique — comprendre si elles sont séparées (une pour réponse, une pour rdv) ou combinées
3. Si MSL-iTECH a besoin de règles séparées identiques, les dupliquer :
   - **Dupliquer** chaque règle MFINANCES
   - Modifier le nom (MFINANCES → MSL-iTECH)
   - Modifier la condition `company_id` → MSL-iTECH (id=1)
   - Vérifier les étiquettes (reponse_recue=36, rdv_pris=35)
   - Enregistrer et **activer**

**Étape 3 : Tester**
1. Sur un lead de test MSL-iTECH, ajouter l'étiquette `reponse_recue` → la règle se déclenche
2. Sur un autre lead, ajouter `rdv_pris` → la règle se déclenche
3. Noter si les réponses automatiques d'absence sont filtrées (ne pas corriger, juste noter)

---

<a id="d-verifs"></a>
## D — Vérifications des éléments créés par script

> Les blocs D1, D2, D3 ont été créés par le script API. Il faut juste vérifier qu'ils sont corrects dans l'interface.

### D1 — Vérifier les motifs de perte

1. Aller à `https://msl-itech.odoo.com/odoo/crm` → menu **Configuration** → **Motifs de perte**
2. Vérifier la présence des 9 motifs (ids 8–16) :

| Motif | ID |
|-------|-----|
| Sans réponse | 8 |
| Budget insuffisant | 9 |
| Projet reporté | 10 |
| Choix d'un concurrent | 11 |
| Outil actuel conservé | 12 |
| Hors cible | 13 |
| Doublon | 14 |
| Test ou spam | 15 |
| Non renseigné | 16 |

3. **Résultat attendu** : les 9 motifs sont visibles, aucun motif existant supprimé ou renommé

### D2 — Vérifier l'automatisation rattrapage + tester

1. Aller aux règles automatisées
2. Chercher **« MSL — Rattrapage leads perdus sans motif »** (rule id=88)
3. Vérifier : déclencheur basé sur le temps, délai 15 min, domaine correct, actions 2220 + 2221, **actif**

**Test 1** — Lead perdu SANS motif :
1. Ouvrir un lead de test, cliquer **Perdu**, laisser le motif **vide**, confirmer
2. Attendre 15-30 minutes
3. **Résultat attendu** : motif = `Non renseigné` + commercial reçoit un email

**Test 2** — Lead perdu AVEC motif :
1. Autre lead, cliquer Perdu, choisir **Budget insuffisant**, confirmer
2. **Résultat attendu** : motif reste `Budget insuffisant`

### D3 — Vérifier le filtre favori

1. Aller à `https://msl-itech.odoo.com/odoo/crm`
2. Barre de recherche → **Favoris** → chercher **« Perdus — Non renseigné »**
3. **Résultat attendu** : le filtre existe, partagé, affiche les leads archivés avec motif « Non renseigné » et société MSL-iTECH

---

<a id="a-verifs"></a>
## A — Vérifications et tests des rappels vendeur

### A0 — Vérifier le modèle email URGENT

1. Aller à `https://msl-itech.odoo.com/odoo/email/templates`
2. Chercher **« URGENT — Lead ERP sans appel 48 h »** (id=380)
3. Vérifier : s'applique à crm.lead, destinataire = houssine@msl-itech.com, champs dynamiques dans l'objet et le corps
4. Cliquer **Aperçu** sur un lead existant → les champs dynamiques affichent les vraies valeurs

### A1 — Tester le rappel H+20

1. Aller aux règles automatisées, ouvrir **« MSL — Rappel vendeur H+20 »** (rule id=89)
2. Vérifier : délai 20h, domaine correct, action 2222, **actif**
3. **Test** : dupliquer → délai **15 minutes** → `[TEST]` dans le nom → activer
4. Créer un lead de test (étiquette `Odoo ERP`, étape `Nouveau`, société `MSL-iTECH`, vendeur assigné)
5. Attendre ~18 min
6. **Résultat attendu** : activité « À faire » créée sur le lead, assignée au vendeur
7. Supprimer la copie `[TEST]` + le lead de test

### A2 — Tester l'escalade Web H+48

1. Ouvrir **« MSL — Escalade Web&Marketing H+48 »** (rule id=90)
2. Vérifier : délai 48h, équipe Web & Marketing (team_id=2), action 2223
3. **Test** : dupliquer → 15 min → lead de test (étiquette `Site web`, équipe `Web & Marketing`)
4. **Résultat attendu** : activité assignée à **El Houssine** + note dans le fil « ⚠️ Escalade H+48 »
5. Supprimer la copie + lead de test

### A3 — Tester le rappel renforcé ERP H+48

1. Ouvrir **« MSL — Rappel renforcé ERP H+48 »** (rule id=91)
2. Vérifier : délai 48h, équipe ERP Odoo (team_id=1), actions 2224 (email template 380) + 2225 (activité)
3. **Test** : dupliquer → 15 min → lead de test (étiquette `Odoo ERP`, équipe `ERP Odoo`)
4. **Résultat attendu** : El Houssine reçoit l'email URGENT + activité créée
5. Supprimer la copie + lead de test

---

<a id="c-verifs"></a>
## C — Vérifications visuelles des campagnes 21–24

> Tout a été fait par script : archivage C0, filtres C1, activités workflow C2, contenu C3.
> Il ne reste que des **vérifications visuelles**.

### C0 — Vérifier l'archivage

1. Aller à `https://msl-itech.odoo.com/odoo/marketing-automation`
2. Ouvrir chaque campagne (21, 22, 23, 24)
3. Dans le workflow, vérifier que les anciens mailings (210, 215, 220, 225) sont **archivés** (grisés ou absents)
4. Si besoin, aller dans Marketing → Email Marketing → Mailings, activer le filtre « Archivé », vérifier qu'ils y sont

### C1 — Vérifier les filtres

1. Ouvrir chaque campagne (21, 22, 23, 24)
2. Vérifier le champ **Domaine/Filtre** :
   - Contient : société MSL-iTECH, étape Nouveau, actif, email défini, sans reponse_recue, sans rdv_pris, tag séquence propre
3. **Résultat attendu** : le compteur de records correspond à des leads MSL-iTECH valides

### C2 — Vérifier la structure (4 relances + clôture)

Pour chaque campagne, vérifier dans le workflow visuel :
- **5 activités** chainées (4 emails + 1 action serveur)
- Délais : J+3 → +4j → +7j → +16j → +7j (clôture)

| Campagne | Mailings | Activités | Action clôture |
|----------|----------|-----------|----------------|
| 21 | 211-214 | 100-104 | action 2226 |
| 22 | 216-219 | 105-109 | action 2227 |
| 23 | 221-224 | 110-114 | action 2228 |
| 24 | 226-229 | 115-119 | action 2229 |

### C3 — Vérifier le contenu des mailings

Ouvrir quelques mailings au hasard (ex: 211, 217, 223, 228) et vérifier :

1. **Pas de date 2026** : chercher `2026`, `Q1 2026`, `serein pour 2026` → absent
2. **DGI (mailing 211)** : pas d'affirmation fausse sur le rejet de PDF signé
3. **Faute** : chercher `plus vites` → absent (remplacé par `plus rapides`)
4. **Salutation** : la salutation est `Bonjour {{ object.contact_name or 'Madame, Monsieur' }},` (pas `là`)
5. **Reply-to** : le champ « Répondre à » est **vide**
6. **Désinscription** : `use_exclusion_list` est activé sur le mailing (vérifiable dans les paramètres du mailing)

---

<a id="b-verifs"></a>
## B — Vérifications visuelles des campagnes B1/B2

> Les deux campagnes ont été créées par script. Vérification visuelle uniquement.

### B1 — Campagne « Relances formulaire — ERP Odoo » (id=27)

1. Ouvrir `https://msl-itech.odoo.com/odoo/marketing-automation` → campagne **27**
2. Vérifier :
   - **Filtre** : société MSL-iTECH, outil source = Formulaire de contact, tag Odoo ERP, étape Nouveau, actif, email défini, sans reponse_recue, sans rdv_pris
   - **Workflow** : 4 activités chainées (3 emails + 1 action serveur)
   - Email 1 (J+2, mailing 230) : objet `Votre demande Odoo : quand peut-on échanger ?`, expéditeur El Houssine
   - Email 2 (J+7, mailing 231) : objet `Votre projet Odoo : deux repères en attendant`, liens blog cliquables
   - Email 3 (J+21, mailing 232) : objet `Je clôture votre demande ?`
   - Action clôture (J+28, action 2230) : crée activité pour le commercial
3. Vérifier visuellement le **rendu** de chaque mailing (ouvrir en édition, vérifier la mise en forme)
4. Vérifier que le bouton **« Réserver un appel »** contient la bonne URL de rendez-vous ERP
5. **Statut** : la campagne doit être en **brouillon** (pas lancée)

### B2 — Campagne « Relances formulaire — Web & Marketing » (id=28)

1. Ouvrir la campagne **28**
2. Vérifier :
   - **Filtre** : comme B1 mais avec tags Site web OU Marketing digital (opérateur `|`)
   - **Workflow** : 4 activités (3 emails + 1 action serveur)
   - Email 1 (J+2, mailing 233) : objet `Votre projet web : quand peut-on échanger ?`, expéditeur **Manal AIT AYAD** `manal@msl-itech.com`
   - Email 2 (J+7, mailing 234) : objet `Un audit gratuit de votre site ?`, lien `/audit-digital-gratuit` cliquable
   - Email 3 (J+21, mailing 235) : objet `Je clôture votre demande ?`
   - Action clôture (J+28, action 2231)
3. Vérifier le rendu visuel + bouton « Réserver un appel » avec URL Web & Marketing
4. **Statut** : brouillon

### Tests B1/B2

1. Pour chaque campagne, cliquer **« Lancer un test »** sur un lead de test
2. Exécuter chaque activité manuellement et vérifier que l'email reçu est correct
3. Supprimer les leads de test après

---

<a id="recette"></a>
## Recette finale — Tests avant lancement

### Test 1 : Arrêt par changement d'étape

1. Créer un lead de test (société MSL-iTECH, étape Nouveau, étiquette Odoo ERP)
2. L'inscrire dans une campagne de test
3. **Déplacer** le lead hors de l'étape Nouveau (ex: Qualifié)
4. **Résultat attendu** : l'activité suivante de la campagne est refusée

### Test 2 : Désinscription

1. Depuis un email de test reçu
2. Cliquer le lien **« Se désinscrire »**
3. **Résultat attendu** : email en liste noire, activité suivante refusée
4. Vérification : Marketing → Configuration → Liste noire

### Test 3 : Salutation sans prénom

1. Créer un lead de test avec `contact_name` VIDE
2. Déclencher un email de campagne vers ce lead
3. **Résultat attendu** : `Bonjour Madame, Monsieur,` (pas `Bonjour là,`)

### Test 4 : Liens cliquables

1. Ouvrir un email reçu de chaque campagne
2. Cliquer chaque lien
3. **Résultat attendu** : tous les liens fonctionnent (blog, outils, audit, rendez-vous)

### Test 5 : Signature et expéditeur

| Campagne | Expéditeur |
|----------|-----------|
| 21–24 (séquences outils) | El Houssine BOUHMAIDA |
| B1 (formulaire ERP) | El Houssine BOUHMAIDA |
| B2 (formulaire Web) | Manal AIT AYAD |

Vérifier : une seule signature par email, expéditeur conforme.

### Nettoyage

1. **Supprimer tous les leads de test**
2. Supprimer les copies de règles `[TEST]`
3. Retirer les emails de test de la liste noire si besoin

---

## Livraison

Une fois tous les tests passés, préparer le message pour El Houssine :

**Règles Studio créées :**
- `MSL — Rattrapage leads perdus sans motif` (D2, rule id=88)
- `MSL — Rappel vendeur H+20` (A1, rule id=89)
- `MSL — Escalade Web&Marketing H+48` (A2, rule id=90)
- `MSL — Rappel renforcé ERP H+48` (A3, rule id=91)

**Campagnes créées :**
- `Relances formulaire — ERP Odoo` (B1, campagne id=27)
- `Relances formulaire — Web & Marketing` (B2, campagne id=28)

**Campagnes corrigées (pas encore lancées) :**
- 21 — Séquence MSL — Conformité DGI
- 22 — Séquence MSL — ROI ERP
- 23 — Séquence MSL — Diagnostic Digital
- 24 — Séquence MSL — Comparateur Sage-Odoo

→ El Houssine fait sa recette → feu vert → lancer B1, B2, et relancer 21–24.
