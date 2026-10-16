# T13 — Plan d'exécution : Relances, rappels et motifs de perte

Basé sur : `MSL-iTECH_Cahier_webmaster_T13_Relances.md` · 05/10/2026  
Ordre de réalisation imposé par le cahier : **Prérequis → D → A → B → C**

> ✅ Branche `fix-t8` déjà fusionnée et déployée en production.  
> ✅ Le site et le connecteur ne nécessitent aucune modification pour T13.  
> Tout le travail est dans **Odoo** (Studio + Marketing Automation).

---

## Prérequis Odoo (Studio)

---

## Prérequis Odoo (Studio)

### P1 — Vérifier que les réponses arrivent dans le fil du lead

1. Ouvrir un lead de test dans CRM
2. Cliquer **« Envoyer un message »** → envoyer un email au prospect
3. Répondre depuis une boîte Gmail externe
4. **Vérifier** que la réponse s'affiche dans le fil de discussion du lead et que le vendeur reçoit la notification
5. Refaire le test en répondant à un email issu des modèles 372–379 (accusés + diagnostics)

**Si la réponse n'arrive pas dans le lead :**
- Aller dans **Marketing → Modèles d'email**
- Ouvrir chacun des modèles 372 à 379
- Passer en vue **Code** (`</>`)
- Supprimer le contenu du champ **« Répondre à »** pour laisser le retour vers l'alias `<catchall@msl-itech.com>`
- Enregistrer

### P2 — Étendre les automatisations d'arrêt MFINANCES vers MSL-iTECH

**Chemin :** Paramètres → Technique → Automatisation → Règles automatisées

1. Chercher les règles existantes : « réponse reçue » et « rendez-vous pris » de la société **MFINANCES**
2. Lire leur code pour comprendre comment elles retrouvent le lead (email, contact, société)
3. Les **dupliquer** (ne pas modifier l'original)
4. Sur chaque copie :
   - Modifier la condition **société = MSL-iTECH**
   - Vérifier que les étiquettes posées sont : `réponse reçue` et `rendez-vous pris`
5. Activer les deux nouvelles règles
6. **Vérifier** si les réponses automatiques d'absence sont filtrées — si non, le noter sans corriger

> ⚠️ Ces deux étiquettes servent de signal d'arrêt pour les blocs B et C. Elles doivent exister avant de créer les campagnes.

---

## Bloc D — Motifs de perte (Studio + CRM config)

> À faire en premier : simple à configurer, bloque rien d'autre, utile immédiatement.

### D1 — Créer les motifs de perte

**Chemin :** CRM → Configuration → Motifs de perte

1. Lister les motifs existants (communs MSL-iTECH / MFINANCES)
2. Ajouter **uniquement les motifs manquants** (ne pas renommer ni supprimer l'existant) :

| Motif à créer (si absent) | Usage |
|--------------------------|-------|
| `Sans réponse` | Aucun échange après les relances |
| `Budget insuffisant` | Le prix bloque |
| `Projet reporté` | Besoin réel, pas maintenant |
| `Choix d'un concurrent` | Un autre prestataire est retenu |
| `Outil actuel conservé` | Le prospect garde Sage, Excel ou son site |
| `Hors cible` | Taille, secteur ou besoin hors offre |
| `Doublon` | Le même prospect existe déjà |
| `Test ou spam` | Faux lead |
| `Non renseigné` | Réservé au rattrapage automatique — jamais choisi à la main |

### D2 — Automatisation de rattrapage « perdus sans motif »

**Chemin :** Studio → Automatisations → Nouvelle règle

| Propriété | Valeur |
|-----------|--------|
| Nom | `MSL — Rattrapage leads perdus sans motif` |
| Modèle | `Piste/Opportunité (crm.lead)` |
| Déclencheur | `Après la dernière mise à jour` |
| Délai | 15 minutes |

**Conditions :**
- Société = MSL-iTECH
- Actif = faux
- Probabilité = 0
- Motif de perte est vide

**Actions (dans cet ordre) :**

1. **Mettre à jour l'enregistrement** : Motif de perte → `Non renseigné`
2. **Envoyer un email** au commercial du lead :
   - Objet : `Lead perdu sans motif — action requise`
   - Corps : `Le lead {{ object.partner_name }} a été perdu sans motif renseigné. Merci de corriger : {{ object.get_base_url() }}/web#id={{ object.id }}&model=crm.lead`

> ⚠️ Tester d'abord : marquer un lead perdu sans motif → il doit porter « Non renseigné » dans les 30 min. Marquer un autre avec motif → il conserve son motif.

### D3 — Filtre favori « Perdus — Non renseigné »

**Chemin :** CRM → Pipeline (vue liste, inclure archivés)

1. Filtrer : actif = faux + motif de perte = `Non renseigné` + société = MSL-iTECH
2. Cliquer **Enregistrer le filtre** → nommer `Perdus — Non renseigné` → cocher **Partagé**

---

## Bloc A — Rappels internes vendeur (Studio)

> Déclencheur commun : « Après la création ».  
> Condition commune à ajouter sur toutes les règles A : société = MSL-iTECH · étape = Nouveau · actif = vrai · étiquette parmi (Odoo ERP, Site web, Marketing digital) · **sans l'étiquette `rendez-vous pris`**.

### Étape préalable — Créer le modèle email pour A3

**Chemin :** Marketing → Modèles d'email → Nouveau

| Propriété | Valeur |
|-----------|--------|
| Nom | `URGENT — Lead ERP sans appel 48 h` |
| S'applique à | `Piste/Opportunité (crm.lead)` |
| De | Système |
| À | `houssine@msl-itech.com` |
| Objet | `URGENT — {{ object.partner_name }} sans appel depuis 48 h` |

Corps :
```
Lead en attente depuis 48 heures sans échange.

Nom : {{ object.partner_name }}
Société : {{ object.contact_name }}
Outil source : {{ object.x_studio_outil_source }}
Vendeur assigné : {{ object.user_id.name }}

Lien direct : {{ object.get_base_url() }}/web#id={{ object.id }}&model=crm.lead
```

### A1 — Rappel H+20 (toutes équipes)

**Chemin :** Studio → Automatisations → Nouvelle règle

| Propriété | Valeur |
|-----------|--------|
| Nom | `MSL — Rappel vendeur H+20` |
| Modèle | `Piste/Opportunité` |
| Déclencheur | `Après la création` · délai **20 heures** |

**Condition :** condition commune (voir ci-dessus)

**Action — Planifier une activité :**
- Type : `À faire`
- Résumé : `Rappel : lead en attente d'appel depuis 20 h, rappel promis sous 24 h`
- Assigné à : **Utilisateur dynamique → Vendeur**
- Échéance : aujourd'hui

### A2 — Escalade H+48, équipe Web & Marketing

| Propriété | Valeur |
|-----------|--------|
| Nom | `MSL — Escalade Web&Marketing H+48` |
| Déclencheur | `Après la création` · délai **48 heures** |

**Condition :** condition commune + équipe = `Web & Marketing`

**Actions :**
1. **Planifier une activité** pour El Houssine BOUHMAIDA :
   - Type : `À faire`
   - Résumé : `Escalade : lead Web sans échange depuis 48 h`
   - Assigné à : El Houssine BOUHMAIDA (fixe)
   - Échéance : aujourd'hui
2. **Enregistrer une note** dans le fil du lead :
   - Texte : `⚠️ Escalade H+48 — lead transmis à El Houssine (Web & Marketing).`

### A3 — Rappel renforcé H+48, équipe ERP Odoo

| Propriété | Valeur |
|-----------|--------|
| Nom | `MSL — Rappel renforcé ERP H+48` |
| Déclencheur | `Après la création` · délai **48 heures** |

**Condition :** condition commune + équipe = `ERP Odoo`

**Actions :**
1. **Envoyer un email** → modèle `URGENT — Lead ERP sans appel 48 h`
2. **Planifier une activité** pour El Houssine BOUHMAIDA :
   - Type : `À faire`
   - Résumé : `URGENT — lead ERP sans appel depuis 48 h`
   - Assigné à : El Houssine BOUHMAIDA (fixe)
   - Échéance : aujourd'hui

> ⚠️ Note technique : un délai < 40 h (comme 20 h) accélère la tâche planifiée Odoo à ~18 min d'intervalle. Ne pas toucher à cette tâche planifiée.

**Contrôle A :** dupliquer A1 et A3 avec un délai de 15 minutes, soumettre un lead de test, vérifier l'activité et l'email reçu, puis supprimer les copies.

---

## Bloc B — Relances formulaire de contact (Marketing Automation)

**Chemin :** Marketing → Marketing Automation → Nouveau

> Créer **2 campagnes séparées**.

### Filtre commun aux deux campagnes

- Société = MSL-iTECH
- `x_studio_outil_source` = `Formulaire de contact`
- Étape = Nouveau
- Actif = vrai
- Email renseigné
- **Sans** l'étiquette `réponse reçue`
- **Sans** l'étiquette `rendez-vous pris`

> Odoo réévalue ce filtre avant chaque activité : un lead qui en sort ne reçoit plus rien.

---

### Campagne B1 — Relances formulaire ERP Odoo

| Propriété | Valeur |
|-----------|--------|
| Nom | `Relances formulaire — ERP Odoo` |
| Cible | `Piste/Opportunité` |
| Filtre propre supplémentaire | Étiquette = `Odoo ERP` |
| Unicité | Email du contact |
| Expéditeur | El Houssine BOUHMAIDA · `houssine@msl-itech.com` |

**Activités (délais par rapport à l'activité précédente) :**

| # | Délai | Type | Objet / Action |
|---|-------|------|---------------|
| 1 | Début + 2 jours | Email | `Votre demande Odoo : quand peut-on échanger ?` |
| 2 | +5 jours | Email | `Votre projet Odoo : deux repères en attendant` |
| 3 | +14 jours | Email | `Je clôture votre demande ?` |
| 4 | +7 jours | Action serveur | Créer activité « À faire » pour le commercial : *Sans réponse après 3 relances : clôturer en perdu (motif Sans réponse), ou requalifier* |

**Textes des emails :** copier les textes de l'annexe du cahier T13 (section « ERP Odoo »).

**Réponse :** dans chaque email, la réponse revient **dans le document** (pas sur contact@).

**Désinscription :** ajouter le bloc « Se désinscrire » en pied des 3 emails (activités 1, 2, 3).

---

### Campagne B2 — Relances formulaire Web & Marketing

| Propriété | Valeur |
|-----------|--------|
| Nom | `Relances formulaire — Web & Marketing` |
| Cible | `Piste/Opportunité` |
| Filtre propre supplémentaire | Étiquette = `Site web` **OU** `Marketing digital` |
| Unicité | Email du contact |
| Expéditeur | Manal AIT AYAD · son adresse @msl-itech.com |

**Activités :** même structure que B1 (J+2, J+7, J+21, J+28).

**Textes :** copier les textes de l'annexe (section « Web & Marketing »).

**Réponse + désinscription :** mêmes règles que B1.

---

## Bloc C — Correction des 4 campagnes existantes (Marketing Automation)

**Chemin :** Marketing → Marketing Automation → ouvrir chaque campagne 21 à 24

> Ces 4 campagnes **existent déjà**. On ne les recrée pas — on les corrige en place.  
> Le premier email de chaque séquence est **déjà envoyé par l'automatisation T12** (modèles 376–379). Ne pas le remettre dans la campagne.

### C0 — Archiver les anciens mailings inutilisés

Dans chaque campagne, archiver (sans supprimer) les mailings : **210, 215, 220, 225**

### C1 — Mettre à jour le filtre des 4 campagnes

Ouvrir chaque campagne 21–24 → onglet **Filtre** → ajouter les conditions manquantes :
- Étape = Nouveau
- Actif = vrai
- Email renseigné
- Sans l'étiquette `réponse reçue`
- Sans l'étiquette `rendez-vous pris`
- Société = MSL-iTECH

> Ne pas ajouter la condition `x_studio_outil_source` — l'étiquette Séquence propre à chaque campagne suffit.

### C2 — Vérifier la structure des 4 campagnes

Contrôler que chaque campagne contient bien 4 relances + 1 activité de clôture :

| Campagne | Outil | Mailings à conserver | Expéditeur |
|----------|-------|----------------------|------------|
| 21 — Conformité DGI | Simulateur DGI | 211, 212, 213, 214 | El Houssine |
| 22 — ROI ERP | Calculateur ROI | 216, 217, 218, 219 | El Houssine |
| 23 — Diagnostic Digital | Diagnostic digital | 221, 222, 223, 224 | El Houssine |
| 24 — Comparateur Sage-Odoo | Comparateur | 226, 227, 228, 229 | El Houssine |

**Déroulé attendu dans chaque campagne :**

| # | Délai depuis l'activité précédente | Type |
|---|-------------------------------------|------|
| Relance 1 | Début + 3 jours | Email |
| Relance 2 | +4 jours | Email |
| Relance 3 | +7 jours | Email |
| Relance 4 | +16 jours | Email |
| Activité clôture | +7 jours | Action serveur — activité « À faire » pour El Houssine |

Si la structure est différente, la corriger pour correspondre à ce tableau.

### C3 — Corrections de contenu dans les 16 mailings existants

Ouvrir chaque mailing (211–214, 216–219, 221–224, 226–229) et appliquer :

| Problème | Rechercher | Remplacer par |
|----------|-----------|---------------|
| Dates dépassées | `Q1 2026`, toute occurrence de `2026` dans le texte | `avant l'échéance qui vous concerne` |
| Dates dépassées | `serein pour 2026` | `serein pour vos prochaines échéances` |
| Contradiction DGI (mailing 211 uniquement) | Phrase affirmant qu'un PDF signé est rejeté | `Le format exact attendu par la plateforme DGI dépend de votre situation : notre échange permet de le préciser.` |
| Faute | `Décisions plus vites` | `Décisions plus rapides` |
| Salutation par défaut | `là` (valeur par défaut du prénom) | `Madame, Monsieur` |
| Reply-to | champ « Répondre à » → adresse fixe | Vider → réponse revient dans le document |
| Désinscription | absent | Ajouter le bloc « Se désinscrire » en pied de chaque mailing |

---

## Récapitulatif — ordre strict d'exécution

> ✅ Site et connecteur : rien à faire.  
> Tout se passe dans Odoo.

```
1.  Studio P1 — Tester les réponses dans le fil du lead (+ corriger Reply-to si besoin)
2.  Studio P2 — Dupliquer automatisations arrêt MFINANCES → MSL-iTECH
3.  Studio D1 — Créer les motifs de perte manquants (vérifier l'existant d'abord)
4.  Studio D2 — Automatisation rattrapage perdus sans motif
5.  Studio D3 — Filtre favori « Perdus — Non renseigné »
6.  Studio A0 — Créer le modèle email « URGENT — Lead ERP sans appel 48 h »
7.  Studio A1 — Automatisation rappel vendeur H+20
8.  Studio A2 — Automatisation escalade Web & Marketing H+48
9.  Studio A3 — Automatisation rappel renforcé ERP H+48
10. Studio C0 — Dans les 4 campagnes existantes : archiver mailings 210/215/220/225
11. Studio C1 — Dans les 4 campagnes existantes : mettre à jour les filtres
12. Studio C2 — Dans les 4 campagnes existantes : vérifier la structure (4 relances + clôture)
13. Studio C3 — Dans les 4 campagnes existantes : corriger le contenu des 16 mailings
14. Studio B1 — CRÉER (nouvelle) campagne « Relances formulaire — ERP Odoo »
15. Studio B2 — CRÉER (nouvelle) campagne « Relances formulaire — Web & Marketing »
16. Recette   — Tests complets avant de lancer B et C
```

---

## Recette avant lancement campagnes B et C

- [ ] **P1** : réponse Gmail à un email d'outil → visible dans le fil du lead
- [ ] **P2** : réponse et rendez-vous posent bien leur étiquette sur un lead MSL-iTECH
- [ ] **A** : dupliquer A1 et A3 à 15 min, vérifier activité + email → supprimer les copies
- [ ] **B/C** : bouton « Lancer un test » sur chaque campagne, exécuter chaque activité sur lead de test, lire l'email reçu
- [ ] **Arrêt** : passer le lead de test hors de Nouveau → l'activité suivante est refusée
- [ ] **Désinscription** : un clic met l'email en liste noire → activité suivante refusée
- [ ] **D2** : lead perdu sans motif → porte `Non renseigné` dans les 30 min + email au commercial · lead perdu avec motif → garde son motif
- [ ] **Rendu** : salutation par défaut = « Madame, Monsieur » · liens corrects · signature unique · expéditeur conforme

**Livraison Junior → El Houssine :** liste cochée + noms exacts des règles et campagnes créées → feu vert direction avant lancement.
