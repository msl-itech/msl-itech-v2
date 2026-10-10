# T12 — Guide pas à pas Odoo Studio

Recette du 24/09/2026 · Instance : Odoo Online · Rôle : webmaster  
À faire dans cet ordre : **3.1 → 3.6 → 3.4 → 3.3 → 3.5**  
(3.1 en premier car 3.3 dépend des valeurs propres)

---

## 3.1 — Supprimer les caractères invisibles U+200B

> ⚠️ Faire les trois côtés (Studio + connecteur + segment) en même temps.  
> Si un seul est corrigé, les leads avec ces valeurs n'auront plus de segment sans aucune erreur visible.

### Étape A — Corriger les valeurs dans Odoo Studio

**Chemin :** Paramètres → Studio → (ouvre n'importe quel formulaire CRM lead) → onglet **Qualification msales**

Pour chaque champ ci-dessous, clique sur le champ pour l'éditer dans Studio, puis sur **Modifier les options** (icône crayon à côté du champ de sélection) :

#### Champ : Échéance (`x_studio_echeance`)

| Libellé visible | Ce qu'il faut faire |
|----------------|---------------------|
| `3 à 6 mois` | Supprimer le U+200B en début de valeur. Libellé final : `3 à 6 mois` |
| `Plus tard` | Supprimer le U+200B en début de valeur. Libellé final : `Plus tard` |
| `Je me renseigne` | Supprimer les 2 × U+200B en début de valeur. Libellé final : `Je me renseigne` |

#### Champ : Secteur (`x_studio_secteur`)

| Libellé visible | Ce qu'il faut faire |
|----------------|---------------------|
| `Santé / Services médicaux` | Supprimer le U+200B en début de valeur. Libellé final : `Santé / Services médicaux` |
| `Transport / Logistique` | Supprimer le U+200B en début de valeur. Libellé final : `Transport / Logistique` |

**Comment détecter un U+200B :** place le curseur au tout début du libellé (avant le premier caractère visible) et appuie sur Suppr (ou Backspace depuis la fin) — si quelque chose est supprimé sans qu'un caractère visible disparaisse, c'était un U+200B.

#### Contrôle des autres champs x_studio_*

Vérifier de la même façon, un par un :

| Champ | Valeurs à contrôler |
|-------|---------------------|
| `x_studio_outil_source` | Formulaire de contact, Simulateur DGI, Diagnostic digital, Comparateur Sage-Odoo, **Audit gratuit** (à créer — voir 4.2) |
| `x_studio_outil_actuel` | Toutes les valeurs |
| `x_studio_objectif` | Toutes les valeurs |
| `x_studio_budget` | Toutes les valeurs |
| `x_studio_segmentation` | Toutes les valeurs |

### Étape B — Ajouter la valeur "Audit gratuit" dans x_studio_outil_source

Dans le même écran d'édition du champ `x_studio_outil_source` :

1. Cliquer **Ajouter une ligne**
2. Libellé : `Audit gratuit`
3. Clé technique : `audit_gratuit` (sans espace, sans caractère spécial)
4. Enregistrer

### Étape C — Mettre à jour le connecteur (api-connect-odoo)

> À faire après avoir confirmé les nouvelles clés techniques dans Studio.  
> Fichier : `api-connect-odoo/src/controllers/lead.controller.js`  
> Section : mapping des valeurs de sélection (table `SELECTION_VALUES` ou équivalent)

Valeurs à mettre à jour si les clés techniques ont changé :

| Champ | Ancienne clé (avec U+200B) | Nouvelle clé (propre) |
|-------|---------------------------|----------------------|
| `x_studio_echeance` | `\u200B3 à 6 mois` | `3 à 6 mois` |
| `x_studio_echeance` | `\u200BPlus tard` | `Plus tard` |
| `x_studio_echeance` | `\u200B\u200BJe me renseigne` | `Je me renseigne` |
| `x_studio_secteur` | `\u200BSanté / Services médicaux` | `Santé / Services médicaux` |
| `x_studio_secteur` | `\u200BTransport / Logistique` | `Transport / Logistique` |

### Étape D — Vérifier le calcul du champ Segment

**Chemin :** Studio → champ `x_studio_segmentation` (ou le champ calculé Segment) → formule ou automatisation liée

Vérifier que la condition sur l'échéance utilise bien les nouvelles valeurs sans U+200B. Par exemple :

```
# Avant (avec caractère invisible)
if record.x_studio_echeance == '\u200B3 à 6 mois':
# Après (propre)
if record.x_studio_echeance == '3 à 6 mois':
```

### Contrôle 3.1

Soumettre un lead de test ERP avec :
- Échéance : `3 à 6 mois`
- Secteur : `Santé / Services médicaux`

→ Le lead doit avoir le segment **Tiède** et le secteur rempli.

---

## 3.6 — Corrections secondaires

### 3.6a — Logo absent dans l'accusé "Site web"

**Chemin :** Marketing → Modèles d'email → rechercher `Accusé de réception — Site web`

1. Ouvrir le modèle
2. Passer en vue **Code** (icône `</>`)
3. Rechercher la balise `<img` correspondant au logo
4. Remplacer l'URL de l'image par celle qui fonctionne dans l'accusé Odoo ERP :
   ```
   /web/image/54875-29a0d83f/Logo-MSL_pour_fond.png?access_token=dab42a61-13d9-4bd5-9d73-8d3c44d6954d
   ```
5. Enregistrer

**Contrôle :** envoyer un email de test → le logo MSL-iTECH apparaît.

### 3.6b — Page d'origine du simulateur

**Constat :** le champ "Recommandé par" du lead du simulateur contient `/` au lieu de `/outils/conformite-dgi`.

**Chemin :** Marketing → Automatisations → `Lead Odoo ERP` (et les deux autres) → chercher l'action qui écrit `referred` ou `x_studio_url_site`

> Ce point nécessite de vérifier comment le connecteur envoie la page d'origine. Si le champ `referred` reçoit la valeur `/`, le problème est côté connecteur ou côté formulaire (le champ UTM `landing` capture la page d'accueil plutôt que la page du simulateur). À investiguer dans les logs du connecteur avant de modifier Studio.

---

## 3.4 — Email du diagnostic DGI + nouveaux champs

### Étape A — Créer les deux nouveaux champs dans Studio

**Chemin :** Studio → formulaire CRM lead → onglet **Qualification msales** → Ajouter un champ

#### Champ 1 : Score affiché

| Propriété | Valeur |
|-----------|--------|
| Nom technique | `x_studio_score_affiche` |
| Libellé | `Score affiché` |
| Type | Entier |
| Onglet | Qualification msales |

#### Champ 2 : Recommandations

| Propriété | Valeur |
|-----------|--------|
| Nom technique | `x_studio_recommandations` |
| Libellé | `Recommandations` |
| Type | Texte (multi-ligne) |
| Onglet | Qualification msales |

### Étape B — Renommer le champ "Score"

**Chemin :** Studio → formulaire CRM lead → cliquer sur le champ `Score` existant → modifier le libellé

| Avant | Après |
|-------|-------|
| `Score` | `Score lead` |

> Le nom technique (`x_studio_score`) ne change pas. Seul le libellé affiché change.

### Étape C — Modifier le modèle email "Diagnostic DGI"

**Chemin :** Marketing → Modèles d'email → rechercher `Votre diagnostic de conformité DGI 2026`

Trois modifications :

#### Modification 1 — Phrase sur le module

Rechercher et remplacer :

| Avant | Après |
|-------|-------|
| `Odoo 18 + le module MSL-iTECH gère l'émission DGI conforme nativement` (formulation exacte à chercher) | `Odoo 18 permet d'émettre des factures au format structuré, et MSL-iTECH prépare un module dédié à la conformité DGI.` |

#### Modification 2 — Annoncer l'appel avec le nom du vendeur

Ajouter après le contenu principal, avant la signature :

```
[Nom du vendeur], consultant MSL-iTECH, vous appelle sous 24 h ouvrées pour en parler avec vous.
```

Insérer comme champ dynamique : **Responsable → Nom** (champ `user_id.name` dans Odoo).

#### Modification 3 — Insérer le score affiché et les recommandations

Ajouter dans le corps de l'email :

```
Votre score : {{ object.x_studio_score_affiche }}

Vos 3 priorités :
{{ object.x_studio_recommandations }}
```

Enregistrer le modèle.

**Contrôle :** soumettre le simulateur DGI → l'email reçu affiche le score vu à l'écran, les trois recommandations, et le nom du vendeur assigné.

---

## 3.3 — Un seul email par lead selon l'origine

> Prérequis : 3.1 terminé (les valeurs de x_studio_outil_source sont propres).  
> Prérequis : le modèle "Accusé de réception — Audit gratuit" est créé (voir 4.3 ci-dessous).

**Chemin :** Marketing → Automatisations

Modifier les **trois automatisations** : `Lead Odoo ERP`, `Lead Site web`, `Lead Marketing digital`.

Pour chacune, dans la liste des actions :

1. Repérer l'action **Envoyer un email** (l'accusé de réception)
2. La supprimer
3. À la même position, ajouter une action **Exécuter du code**
4. Coller le code correspondant ci-dessous
5. Enregistrer et activer

---

### Code pour l'automatisation "Lead Odoo ERP"

```python
origine = record.x_studio_outil_source
modeles = {
    'Formulaire de contact': 'Accusé de réception — Odoo ERP',
}
nom = modeles.get(origine)
if nom:
    modele = env['mail.template'].search([('name', '=', nom)], limit=1)
    if modele:
        record.message_post_with_source(
            modele,
            message_type='comment',
            subtype_xmlid='mail.mt_comment',
        )
```

---

### Code pour l'automatisation "Lead Site web"

```python
origine = record.x_studio_outil_source
modeles = {
    'Formulaire de contact': 'Accusé de réception — Site web',
}
nom = modeles.get(origine)
if nom:
    modele = env['mail.template'].search([('name', '=', nom)], limit=1)
    if modele:
        record.message_post_with_source(
            modele,
            message_type='comment',
            subtype_xmlid='mail.mt_comment',
        )
```

---

### Code pour l'automatisation "Lead Marketing digital"

```python
origine = record.x_studio_outil_source
modeles = {
    'Formulaire de contact': 'Accusé de réception — Marketing digital',
    'Audit gratuit': 'Accusé de réception — Audit gratuit',
}
nom = modeles.get(origine)
if nom:
    modele = env['mail.template'].search([('name', '=', nom)], limit=1)
    if modele:
        record.message_post_with_source(
            modele,
            message_type='comment',
            subtype_xmlid='mail.mt_comment',
        )
```

---

### Contrôle 3.3

| Soumission | Résultat attendu |
|-----------|-----------------|
| Formulaire ERP (origine = Formulaire de contact) | 1 seul email : l'accusé Odoo ERP |
| Simulateur DGI (origine = Simulateur DGI) | 1 seul email : le diagnostic — aucun accusé générique |
| Formulaire d'audit (origine = Audit gratuit) | 1 seul email : l'accusé Audit gratuit |

---

## 4.3 — Créer le modèle "Accusé de réception — Audit gratuit"

**Chemin :** Marketing → Modèles d'email → Nouveau

| Propriété | Valeur |
|-----------|--------|
| Nom | `Accusé de réception — Audit gratuit` |
| Sujet | `Votre audit gratuit est lancé` |
| Modèle de référence | `CRM Lead/Opportunité` |
| Expéditeur | MSL-iTECH (même que les autres accusés) |

Corps de l'email :

```
Bonjour {{ object.contact_name or object.partner_name }},

Merci pour votre demande. Nous analysons {{ object.x_studio_url_site }} sur 10 points : 
visibilité Google, présence dans les réponses des IA, vitesse, mobile, clarté de l'offre, 
formulaire et suivi des demandes.

Vous recevrez votre rapport de 2 pages sous 48 h ouvrées, avec une invitation à un appel 
de 15 minutes pour le commenter ensemble.

{{ object.user_id.name }}
MSL-iTECH
```

Enregistrer.

---

## 3.5 — Séquences d'emails (décision direction requise)

> Ce point ne peut pas être finalisé sans décision de la direction sur le contenu et les délais.

Remplir ce tableau et le renvoyer avant la mise en production :

| Séquence | Email n° | Délai après entrée | Objet | Ce qui arrête la séquence |
|----------|----------|--------------------|-------|--------------------------|
| Conformité DGI | 1 | Immédiat | Votre diagnostic de conformité DGI 2026 | |
| Conformité DGI | 2 | … | … | rdv_pris / reponse_recue / desabonne |
| Comparateur Sage-Odoo | 1 | … | … | |
| Diagnostic Digital | 1 | … | … | |
| ROI ERP | 1 | … | … | |

Une fois le tableau complété, créer les automatisations d'arrêt sur le modèle de celles déjà présentes sur la base (filtrer sur la société MSL-iTECH).

---

## Récapitulatif — ordre d'exécution

```
1. 3.1A  — Supprimer U+200B (Studio)
2. 3.1B  — Ajouter "Audit gratuit" dans x_studio_outil_source (Studio)
3. 3.1C  — Mettre à jour le connecteur (api-connect-odoo)
4. 3.1D  — Vérifier calcul Segment (Studio)
5. 3.6a  — Logo accusé Site web (Modèles email)
6. 3.4A  — Créer x_studio_score_affiche + x_studio_recommandations (Studio)
7. 3.4B  — Renommer Score → Score lead (Studio)
8. 3.4C  — Modifier email Diagnostic DGI (Modèles email)
9. 4.3   — Créer modèle "Accusé de réception — Audit gratuit" (Modèles email)
10. 3.3  — Remplacer action email par code conditionnel (3 automatisations)
11. 3.5  — Séquences (en attente décision direction)
```
