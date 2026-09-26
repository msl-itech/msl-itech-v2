# T12 — Guide opérateur Odoo (Manuel pas-à-pas)

Dernière mise à jour : 2026-09-23

Ce document couvre les phases A, B et C du ticket T12.
Chaque action est décrite dans l'ordre exact à suivre dans l'interface Odoo.

---

## Avant de commencer — Activer le mode développeur

> Le mode développeur est indispensable pour voir et choisir les noms techniques
> des champs dans Studio. À faire **une seule fois** par session.

1. Aller dans **Paramètres** (icône engrenage dans le menu principal)
2. Faire défiler jusqu'à la section **Développeur**
3. Cliquer sur **Activer le mode développeur**
4. La page se recharge — vérifier qu'il y a une icône "bug" 🐛 en haut à droite de l'écran

---

## Phase A — Préparer (≈ 20 min)

### A1 — Vérifier l'état des leads de test

1. Aller dans **CRM** → **Leads** (vue liste)
2. Chercher les leads créés depuis le formulaire du site (chercher par email de test)
3. Identifier si des **vrais leads** portent les anciennes étiquettes (`besoin:erp`, `score:xx`, etc.)
   - Si **oui** : noter leurs IDs avant toute modification → les migrer en Phase E
   - Si **non** : passer à l'étape suivante

### A2 — Supprimer les leads de test

1. En vue liste, sélectionner tous les leads de test (cases à cocher)
2. Menu **Action** → **Supprimer**
3. Confirmer

**Contrôle A2** : le pipeline est vide de leads de test.

### A3 — Créer les 3 étiquettes

Menu : **CRM** → **Configuration** → **Étiquettes**

#### Étiquette 1 — Odoo ERP

1. Cliquer **Nouveau**
2. **Nom** : `Odoo ERP` ← exactement ces deux mots, respect de la casse
3. **Couleur** : choisir **vert** (case verte dans la palette)
4. Cliquer **Enregistrer**

#### Étiquette 2 — Site web

1. Cliquer **Nouveau**
2. **Nom** : `Site web`
3. **Couleur** : choisir **bleu**
4. Cliquer **Enregistrer**

#### Étiquette 3 — Marketing digital

1. Cliquer **Nouveau**
2. **Nom** : `Marketing digital`
3. **Couleur** : choisir **orange**
4. Cliquer **Enregistrer**

**Contrôle A3** : la liste affiche exactement ces 3 étiquettes avec les bons noms.

---

## Phase B — Studio : onglet Qualification (≈ 1h20)

### Ouvrir Studio sur une fiche lead

1. Aller dans **CRM** → **Pipeline**
2. Ouvrir **n'importe quelle fiche lead** (ou en créer une de test)
3. Cliquer sur l'icône **Studio** (crayon dans un carré) en haut à droite
   — Studio s'ouvre, la fiche lead apparaît en mode édition
4. Vérifier que le mode développeur est actif (icône bug visible)

### B1 — Créer l'onglet "Qualification"

1. Dans Studio, faire défiler la fiche jusqu'en bas
2. Chercher le bouton **"+ Ajouter un onglet"** (ou cliquer sur une zone vide en bas de la fiche)
3. Nommer l'onglet : `Qualification`
4. Cliquer **Confirmer**

---

### B2 — Bloc "Demande" — 3 champs

> Cliquer **"+ Ajouter un champ"** dans l'onglet Qualification pour chaque champ ci-dessous.

---

#### Champ 1 — Origine de la demande

| Propriété | Valeur |
|-----------|--------|
| **Type** | Sélection |
| **Nom technique** | `x_studio_outil_source` ← taper exactement ce nom dans le champ "Nom du champ" |
| **Libellé** | `Origine de la demande` |

**Valeurs à créer** (dans l'ordre, bouton "+ Ajouter une ligne") :

| Libellé à saisir | → noter la clé générée dans la colonne B3 |
|-----------------|------------------------------------------|
| `Formulaire de contact` | |
| `Simulateur DGI` | |
| `Diagnostic digital` | |

> ⚠️ Après avoir saisi chaque libellé, regarder la colonne "Valeur" à côté — c'est la **clé technique** à noter dans la table B3 du fichier `T12-suivi.md`.

Cliquer **Enregistrer le champ**.

---

#### Champ 2 — Score

| Propriété | Valeur |
|-----------|--------|
| **Type** | Entier |
| **Nom technique** | `x_studio_score` |
| **Libellé** | `Score` |

Aucune valeur à configurer. Cliquer **Enregistrer le champ**.

---

#### Champ 3 — Segment

| Propriété | Valeur |
|-----------|--------|
| **Type** | Sélection |
| **Nom technique** | `x_studio_segment` |
| **Libellé** | `Segment` |
| **Lecture seule** | ✅ cocher |

**Valeurs à créer** :

| Libellé à saisir | → noter la clé générée dans B3 |
|-----------------|-------------------------------|
| `Froid` | |
| `Tiède` | |
| `Chaud` | |

> ⚠️ Ces clés sont aussi utilisées dans le code de calcul de l'Annexe B. Les noter impérativement.

Cliquer **Enregistrer le champ**.

---

### B3 — Bloc "Projet" — 6 champs

---

#### Champ 4 — Secteur

| Propriété | Valeur |
|-----------|--------|
| **Type** | Sélection |
| **Nom technique** | `x_studio_secteur` |
| **Libellé** | `Secteur` |

**Valeurs à créer** :

| Libellé à saisir | → clé B3 |
|-----------------|---------|
| `Commerce / Distribution` | |
| `BTP / Construction` | |
| `HORECA / Restauration` | |
| `Santé / Services médicaux` | |
| `Transport / Logistique` | |
| `Production / Industrie` | |
| `Services B2B` | |
| `Tourisme / Hôtellerie` | |
| `Autre` | |

Cliquer **Enregistrer le champ**.

---

#### Champ 5 — Outil actuel

| Propriété | Valeur |
|-----------|--------|
| **Type** | Sélection |
| **Nom technique** | `x_studio_outil_actuel` |
| **Libellé** | `Outil actuel` |

**Valeurs à créer** :

| Libellé à saisir | → clé B3 |
|-----------------|---------|
| `Excel / Word` | |
| `Sage` | |
| `Autre ERP` | |
| `Odoo` | |
| `Aucun outil` | |
| `Autre` | |

Cliquer **Enregistrer le champ**.

---

#### Champ 6 — Échéance

| Propriété | Valeur |
|-----------|--------|
| **Type** | Sélection |
| **Nom technique** | `x_studio_echeance` |
| **Libellé** | `Échéance` |

**Valeurs à créer** :

| Libellé à saisir | → clé B3 |
|-----------------|---------|
| `Moins de 3 mois` | |
| `3 à 6 mois` | |
| `Plus tard` | |
| `Je me renseigne` | |

Cliquer **Enregistrer le champ**.

---

#### Champ 7 — Objectif

| Propriété | Valeur |
|-----------|--------|
| **Type** | Sélection |
| **Nom technique** | `x_studio_objectif` |
| **Libellé** | `Objectif` |

**Valeurs à créer** :

| Libellé à saisir | → clé B3 |
|-----------------|---------|
| `Nouveau site` | |
| `Refonte` | |
| `E-commerce` | |
| `Plus de demandes` | |
| `Visibilité Google / IA` | |
| `Campagnes pub` | |

Cliquer **Enregistrer le champ**.

---

#### Champ 8 — Budget indicatif

| Propriété | Valeur |
|-----------|--------|
| **Type** | Sélection |
| **Nom technique** | `x_studio_budget` |
| **Libellé** | `Budget indicatif` |

**Valeurs à créer** :

| Libellé à saisir | → clé B3 |
|-----------------|---------|
| `Moins de 1 000 €` | |
| `1 000 à 3 500 €` | |
| `Plus de 3 500 €` | |

Cliquer **Enregistrer le champ**.

---

#### Champ 9 — Site actuel du prospect

| Propriété | Valeur |
|-----------|--------|
| **Type** | Texte (une ligne) / Char |
| **Widget** | laisser par défaut (pas de widget URL nécessaire) |
| **Nom technique** | `x_studio_url_site` |
| **Libellé** | `Site actuel du prospect` |

> Le champ stocke l'URL en texte brut — c'est suffisant pour l'usage CRM.

Cliquer **Enregistrer le champ**.

---

### B4 — Bloc "Conformité" — 2 champs

---

#### Champ 10 — Consentement

| Propriété | Valeur |
|-----------|--------|
| **Type** | Case à cocher (Booléen) |
| **Nom technique** | `x_studio_consentement` |
| **Libellé** | `Consentement` |

Cliquer **Enregistrer le champ**.

---

#### Champ 11 — Date du consentement

| Propriété | Valeur |
|-----------|--------|
| **Type** | Date et heure |
| **Nom technique** | `x_studio_consentement_date` |
| **Libellé** | `Date du consentement` |

Cliquer **Enregistrer le champ**.

---

### B5 — Quitter Studio et configurer le calcul du segment

1. Dans Studio, cliquer **Fermer** (ou icône X) pour revenir à l'interface normale
2. Aller dans **Paramètres** → **Technique** → **Structure de la base** → **Champs**
   > Si "Technique" n'est pas visible, vérifier que le mode développeur est toujours actif
3. Dans la barre de recherche, taper `x_studio_segment` et appuyer sur Entrée
4. Cliquer sur le champ `x_studio_segment` pour l'ouvrir
5. Renseigner :
   - **Dépendances** : `x_studio_score`
   - **Stocké** : ✅ cocher
   - **Calcul** : coller le code ci-dessous (après avoir remplacé les clés)

```python
for record in self:
    score = record['x_studio_score']
    if not score:
        record['x_studio_segment'] = False
    elif score >= 70:
        record['x_studio_segment'] = 'Chaud'
    elif score >= 30:
        record['x_studio_segment'] = 'Tiède'
    else:
        record['x_studio_segment'] = 'Froid'
```

6. Cliquer **Enregistrer**

**Contrôle B5** :
- Ouvrir un lead de test
- Saisir `75` dans le champ Score (onglet Qualification)
- Le champ Segment doit afficher automatiquement **Chaud**
- Saisir `40` → doit afficher **Tiède**
- Saisir `10` → doit afficher **Froid**

---

### B6 — Filtres et regroupements dans le pipeline

1. Retourner dans **CRM** → **Pipeline** (vue Kanban ou liste)
2. Cliquer sur l'icône **Studio** pour ouvrir Studio sur la vue pipeline
3. Dans Studio, cliquer sur l'onglet **Vues** → **Recherche**

#### Ajouter les 3 filtres rapides par étiquette

Tu es dans **Vues > Rechercher** (Studio). Cliquer **"Filtrer"** dans les Composants ouvre une fenêtre **"Nouveau filtre"**.

Pour chacune des 3 étiquettes :

1. **Libellé de filtre** : taper `Odoo ERP` (puis `Site web`, puis `Marketing digital`)
2. Cliquer **"Nouvelle règle"** — une ligne apparaît avec 3 champs
3. Configurer la règle :
   - **1er champ (champ)** : chercher `Tag` → sélectionner `Tag (tag_ids)`
   - **2e champ (opérateur)** : `contient`
   - **3e champ (valeur)** : taper `Odoo ERP` (puis `Site web`, puis `Marketing digital`)
4. Cliquer **Confirmer**
5. Répéter les étapes 1–4 pour les deux étiquettes suivantes

#### Ajouter le filtre "Score ≥ 60"

1. Cliquer **"+ Nouveau filtre"**
2. **Nom** : `Score ≥ 60`
3. Domaine :
   - Champ : **Score** (`x_studio_score`)
   - Opérateur : **≥**
   - Valeur : `60`
4. Cliquer **Enregistrer**

#### Ajouter le filtre "Chauds"

1. Cliquer **"+ Nouveau filtre"**
2. **Nom** : `Chauds`
3. Domaine :
   - Champ : **Segment** (`x_studio_segment`)
   - Opérateur : **=**
   - Valeur : sélectionner `Chaud` dans la liste
4. Cliquer **Enregistrer**

#### Ajouter les regroupements

Les regroupements s'ajoutent en **glissant des champs** depuis le panneau gauche vers la colonne **"Regrouper par"** — pas de bouton dédié.

1. Dans le panneau gauche, descendre jusqu'à **"Champs existants"**
2. Pour chaque champ ci-dessous, le glisser-déposer dans la colonne **"Regrouper par"** :

| Champ à glisser | Ce que ça donne |
|-----------------|-----------------|
| `tag_ids` | Regrouper par Étiquettes |
| `x_studio_secteur` | Regrouper par Secteur |
| `x_studio_outil_source` | Regrouper par Origine |
| `x_studio_segment` | Regrouper par Segment |

> Si les champs `x_studio_*` ne sont pas visibles dans la liste, chercher dans la section "Les champs suivants ne sont pas dans la vue" — ils restent glissables.

Cliquer **Fermer Studio** (ou Enregistrer selon la version).

**Contrôle B6** : dans le pipeline, les filtres et regroupements apparaissent dans la barre de recherche.

---

## Phase C — Emails + automatisations (≈ 1h15)

### C1 — Créer les 3 modèles d'email

Menu : **Paramètres** → **Technique** → **Emails** → **Modèles**

> Si "Technique" n'est pas visible → vérifier le mode développeur.

#### Modèle 1 — Odoo ERP

1. Cliquer **Nouveau**
2. **Nom** : `Accusé de réception — Odoo ERP`
3. **S'applique à** : `Piste/Opportunité (crm.lead)`
4. **De** : laisser vide ou saisir `{{ object.user_id.email_formatted }}`
5. **À** : `{{ object.email_from }}`
6. **Objet** : `Votre projet Odoo — prochaines étapes`
7. **Corps** (éditeur HTML) — utiliser les boutons "Champ dynamique" de l'éditeur pour insérer les variables :

```
Bonjour [insérer : Prénom du contact → object.partner_name ou object.contact_name.split()[0]],

Merci pour votre demande. [insérer : Nom du vendeur → object.user_id.name], consultant MSL-iTECH, vous appelle sous 24 h ouvrées pour un premier échange de 10 minutes : comprendre votre situation et vérifier que nous pouvons vous aider.

Si votre besoin est confirmé, nous fixons ensemble un cadrage gratuit de 30 minutes, puis vous recevez un devis détaillé sous 48 h.

D'ici là, deux ressources utiles :

— Vérifier votre conformité à la facturation électronique DGI en 2 minutes :
https://msl-itech.com/outils/conformite-dgi

— Combien coûte Odoo au Maroc en 2026 :
https://msl-itech.com/blog/cout-erp-odoo-maroc-2026

[insérer : Nom du vendeur → object.user_id.name]
MSL-iTECH — Intégrateur Odoo au Maroc
```

8. Cliquer **Enregistrer**
9. **Contrôle** : cliquer **Aperçu** depuis un lead de test → prénom et vendeur s'affichent correctement

---

#### Modèle 2 — Site web

1. Cliquer **Nouveau**
2. **Nom** : `Accusé de réception — Site web`
3. **S'applique à** : `Piste/Opportunité (crm.lead)`
4. **De** : `{{ object.user_id.email_formatted }}`
5. **À** : `{{ object.email_from }}`
6. **Objet** : `Votre projet de site web — prochaines étapes`
7. **Corps** :

```
Bonjour [Prénom du contact],

Merci pour votre demande. [Nom du vendeur] vous appelle sous 24 h ouvrées pour comprendre votre projet, vos objectifs et vos délais.

Vous recevrez ensuite une proposition adaptée, avec un prix ferme.

D'ici là, vous pouvez parcourir nos réalisations :
https://msl-itech.com/realisations

[Nom du vendeur]
MSL-iTECH
```

8. Cliquer **Enregistrer**

---

#### Modèle 3 — Marketing digital

1. Cliquer **Nouveau**
2. **Nom** : `Accusé de réception — Marketing digital`
3. **S'applique à** : `Piste/Opportunité (crm.lead)`
4. **De** : `{{ object.user_id.email_formatted }}`
5. **À** : `{{ object.email_from }}`
6. **Objet** : `Votre demande en marketing digital — prochaines étapes`
7. **Corps** :

```
Bonjour [Prénom du contact],

Merci pour votre demande. [Nom du vendeur] vous appelle sous 24 h ouvrées pour faire le point sur votre visibilité actuelle et vos objectifs.

Si vous nous avez indiqué l'adresse de votre site, nous l'aurons parcouru avant l'appel, pour vous faire un premier retour concret.

[À VÉRIFIER avec la direction : supprimer la phrase ci-dessus si ce n'est pas tenable]

[Nom du vendeur]
MSL-iTECH
```

8. Cliquer **Enregistrer**

---

### C2 — Créer les 3 automatisations

Menu : **Studio** → icône **Automatisations** (dans le menu Studio) **OU**
**Paramètres** → **Technique** → **Automatisation** → **Règles automatisées**

> Filtrer par modèle : `Piste/Opportunité`

---

#### ⚠️ Ordre des actions — règle absolue

Dans chaque automatisation, les actions doivent être dans cet ordre :
1. **Mettre à jour l'enregistrement** (fixer équipe + vendeur) ← EN PREMIER
2. **Planifier une activité** (assignée au vendeur dynamique)
3. **Envoyer un email** (cite le nom du vendeur)

Si l'ordre est inversé, l'activité sera assignée au mauvais vendeur et l'email n'aura pas le bon nom.

---

#### Automatisation 1 — Lead Odoo ERP

1. Cliquer **Nouveau**
2. **Nom** : `Lead Odoo ERP`
3. **Modèle** : `Piste/Opportunité (crm.lead)`
4. **Déclencheur** : `Étiquette ajoutée`
5. **Étiquette** : sélectionner `Odoo ERP` dans la liste ← ne pas taper à la main

**Action 1 — Mettre à jour l'enregistrement**

6. Cliquer **"+ Ajouter une action"** → choisir **Mettre à jour l'enregistrement**
7. Ajouter deux mises à jour :
   - Champ : **Équipe commerciale** → valeur : `ERP Odoo`
   - Champ : **Vendeur** → valeur : `El Houssine BOUHMAIDA`
8. Cliquer **Enregistrer l'action**

**Action 2 — Planifier une activité**

9. Cliquer **"+ Ajouter une action"** → choisir **Planifier une activité**
10. Renseigner :
    - **Type d'activité** : `Appel` ← vérifier que l'icône est un **téléphone** et non une enveloppe
    - **Résumé** : `Appeler le prospect`
    - **Échéance** : `1` jour après le déclenchement
    - **Assigné à** : choisir **Utilisateur dynamique** → champ **Vendeur** ← ne pas mettre un utilisateur fixe
11. Cliquer **Enregistrer l'action**

**Action 3 — Envoyer un email**

12. Cliquer **"+ Ajouter une action"** → choisir **Envoyer un email**
13. Renseigner :
    - **Modèle** : `Accusé de réception — Odoo ERP`
    - **Envoyer comme** : **Message** (pour qu'il apparaisse dans le fil de discussion)
14. Cliquer **Enregistrer l'action**
15. Cliquer **Enregistrer** (la règle entière)

---

#### Automatisation 2 — Lead Site web

1. Cliquer **Nouveau**
2. **Nom** : `Lead Site web`
3. **Modèle** : `Piste/Opportunité (crm.lead)`
4. **Déclencheur** : `Étiquette ajoutée`
5. **Étiquette** : `Site web`

**Action 1** : Équipe = `Web & Marketing` · Vendeur = `Manal AIT AYAD`

**Action 2** : Activité type **Appel** · "Appeler le prospect" · J+1 · Assigné au **Vendeur (dynamique)**

**Action 3** : Envoyer email modèle `Accusé de réception — Site web` en **message**

Cliquer **Enregistrer**

---

#### Automatisation 3 — Lead Marketing digital

1. Cliquer **Nouveau**
2. **Nom** : `Lead Marketing digital`
3. **Modèle** : `Piste/Opportunité (crm.lead)`
4. **Déclencheur** : `Étiquette ajoutée`
5. **Étiquette** : `Marketing digital`

**Action 1** : Équipe = `Web & Marketing` · Vendeur = `Manal AIT AYAD`

**Action 2** : Activité type **Appel** · "Appeler le prospect" · J+1 · Assigné au **Vendeur (dynamique)**

**Action 3** : Envoyer email modèle `Accusé de réception — Marketing digital` en **message**

Cliquer **Enregistrer**

---

### C3 — Tester les automatisations

1. Créer un lead à la main (nom : "TEST automatisation")
2. Dans la fiche lead, aller dans l'onglet **Étiquettes**
3. Ajouter l'étiquette `Site web`
4. Sauvegarder
5. **Vérifier immédiatement** :
   - [ ] Vendeur = Manal AIT AYAD
   - [ ] Équipe = Web & Marketing
   - [ ] Une activité créée, icône **téléphone** ☎️ (pas enveloppe ✉️), assignée à Manal, échéance demain
   - [ ] Un email visible dans le fil de discussion, avec le prénom du contact et le nom de Manal

Si l'icône de l'activité est une enveloppe → le type d'activité choisi est "Email" et non "Appel". Corriger dans l'automatisation.

Répéter avec les étiquettes `Odoo ERP` et `Marketing digital`.

**Supprimer le lead de test** après validation.

---

## Après Phase B+C — Remplir la table B3

Une fois tous les champs créés, aller dans **Paramètres** → **Technique** → **Structure de la base** → **Champs**, chercher chaque champ `x_studio_*` et noter les clés techniques dans le fichier `T12-suivi.md`, table B3.

Ces clés sont à communiquer au développeur pour mettre à jour les `TODO B3` dans le code avant le déploiement.
