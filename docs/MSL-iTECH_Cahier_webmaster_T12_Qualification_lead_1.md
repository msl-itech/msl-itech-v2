# MSL-iTECH — Cahier de travail webmaster

## Lot 1B — Ticket T12 : qualification du lead et automatisations Studio

Version 3 du 23 septembre 2026 · Instance : **Odoo Online (SaaS) avec Studio** · Rôle : webmaster · Effort estimé : 1 jour · Remplace la partie routage du T6

**Changements de la version 3** : l'instance est sur Odoo Online, où les modules personnalisés sont interdits. Tout se fait dans Studio : champs, vues, filtres, modèles d'email et automatisations. Le code du module de la version 2 est abandonné. Le document est réorganisé en étapes à suivre dans l'ordre.

Convention inchangée : **\[À VÉRIFIER\]** signale un point à contrôler avant d'agir.

## 1\. Pourquoi ce ticket

Les leads de test du 23/09/2026 ont montré quatre défauts :

- **Trop d'étiquettes, dans trois formats différents** : besoin:erp, Consentement OK, Outil : Diagnostic digital… et surtout score:38, qui crée une étiquette par valeur. Dans quelques mois, la liste serait illisible et aucune n'est filtrable par plage.
- **L'activité « Appeler le prospect » porte une icône d'enveloppe** : elle est créée avec le type _Email_ au lieu du type _Appel_.
- **Le lead ERP est arrivé dans l'équipe Web & Marketing**, et les deux leads ont été attribués au webmaster.
- **Aucun accusé de réception n'a été envoyé.**

S'y ajoute un constat de l'onglet Contact : **Nom de la société, Pays et Nom du contact sont vides**, alors que ces informations sont saisies dans le formulaire.

## 2\. Le résultat attendu

**Trois étiquettes seulement** — Odoo ERP, Site web, Marketing digital — qui correspondent aux trois cartes de l'étape 1 du formulaire. Elles servent à filtrer vite et à déclencher les automatisations.

**Tout le reste dans des champs**, regroupés dans un onglet « Qualification » de la fiche lead, filtrables et regroupables.

**Le site crée le lead, Odoo fait le reste.** Le connecteur écrit les données et pose une étiquette. Trois automatisations Studio, une par étiquette, fixent l'équipe et le vendeur, planifient l'appel et envoient l'accusé de réception.

| **Étiquette**     | **Équipe**      | **Vendeur**           | **Accusé de réception**      |
| ----------------- | --------------- | --------------------- | ---------------------------- |
| Odoo ERP          | ERP Odoo        | El Houssine BOUHMAIDA | modèle « Odoo ERP »          |
| Site web          | Web & Marketing | Manal AIT AYAD        | modèle « Site web »          |
| Marketing digital | Web & Marketing | Manal AIT AYAD        | modèle « Marketing digital » |

## 3\. Les étapes, dans l'ordre

Chaque étape se termine par un contrôle. Ne pas passer à la suivante tant que le contrôle n'est pas bon.

### Étape 1 — Préparer (15 min)

1. Vérifier si le nouveau formulaire est déjà en production. **S'il ne l'est pas, aucun vrai lead ne porte les anciennes étiquettes : il n'y a rien à migrer**, seulement des leads de test à supprimer. S'il l'est, lister les leads concernés avant toute modification.
2. Supprimer les leads de test existants.
3. Dans le code du connecteur, **désactiver provisoirement** l'écriture des étiquettes, de l'équipe, du vendeur et de l'activité, pour éviter les conflits pendant la mise en place.

**Contrôle** : plus aucun lead de test dans le pipeline, et la liste des vrais leads concernés est connue (ou vide).

### Étape 2 — Créer les trois étiquettes (5 min)

Menu : **CRM → Configuration → Étiquettes**

| **Nom**           | **Couleur** |
| ----------------- | ----------- |
| Odoo ERP          | vert        |
| Site web          | bleu        |
| Marketing digital | orange      |

Libellés lisibles, sans préfixe technique : ce sont eux que les commerciaux verront.

**Contrôle** : les trois étiquettes existent, avec exactement ces noms.

### Étape 3 — Créer les champs avec Studio (1 h)

Ouvrir une fiche lead, lancer **Studio**, ajouter un onglet **« Qualification »** et y créer les champs suivants, en trois blocs.

Activer le mode développeur avant de lancer Studio : il permet de **choisir le nom technique** au moment de la création. Utiliser les noms ci-dessous, pour que le connecteur et les automatisations s'appuient sur des noms stables.

**Bloc « Demande »**

| **Nom technique**     | **Libellé**           | **Type**                 | **Valeurs**                                                 |
| --------------------- | --------------------- | ------------------------ | ----------------------------------------------------------- |
| x_studio_outil_source | Origine de la demande | Sélection                | Formulaire de contact · Simulateur DGI · Diagnostic digital |
| x_studio_score        | Score                 | Entier                   | 0 à 100                                                     |
| x_studio_segment      | Segment               | Sélection, lecture seule | Froid · Tiède · Chaud                                       |

**Bloc « Projet »**

| **Nom technique**     | **Libellé**             | **Type**           | **Valeurs**                                                                                                                                                                                       |
| --------------------- | ----------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| x_studio_secteur      | Secteur                 | Sélection          | Commerce / Distribution · BTP / Construction · HORECA / Restauration · Santé / Services médicaux · Transport / Logistique · Production / Industrie · Services B2B · Tourisme / Hôtellerie · Autre |
| x_studio_outil_actuel | Outil actuel            | Sélection          | Excel / Word · Sage · Autre ERP · Odoo · Aucun outil · Autre                                                                                                                                      |
| x_studio_echeance     | Échéance                | Sélection          | Moins de 3 mois · 3 à 6 mois · Plus tard · Je me renseigne                                                                                                                                        |
| x_studio_objectif     | Objectif                | Sélection          | Nouveau site · Refonte · E-commerce · Plus de demandes · Visibilité Google / IA · Campagnes pub                                                                                                   |
| x_studio_budget       | Budget indicatif        | Sélection          | Moins de 1 000 € · 1 000 à 3 500 € · Plus de 3 500 €                                                                                                                                              |
| x_studio_url_site     | Site actuel du prospect | Texte (widget URL) | —                                                                                                                                                                                                 |

**Bloc « Conformité »**

| **Nom technique**          | **Libellé**          | **Type**      |
| -------------------------- | -------------------- | ------------- |
| x_studio_consentement      | Consentement         | Case à cocher |
| x_studio_consentement_date | Date du consentement | Date et heure |

**Le segment se calcule à partir du score** : un lead à 38 ne doit jamais pouvoir être classé « chaud » par erreur. Studio ne permet pas d'écrire ce calcul directement. Après avoir créé le champ, aller dans **Paramètres → Technique → Structure de la base → Champs**, ouvrir x_studio_segment, et renseigner :

- Dépendances : x_studio_score
- Stocké : coché
- Calcul : le code de l'annexe B

**\[À VÉRIFIER\]** : les clés techniques que Studio a générées pour les valeurs du segment, à reporter dans le code de l'annexe B ; et les seuils actuels du scoring des outils (38 donne « tiède » : il faut les bornes exactes).

**Contrôle** : l'onglet Qualification s'affiche sur un lead ; saisir un score de 75 à la main fait passer le segment à « Chaud ». Noter les noms techniques réels et les clés de sélection générées, ils serviront à l'étape 6.

### Étape 4 — Ajouter filtres et regroupements (20 min)

Depuis le pipeline, **Studio → Vues → Recherche** :

- trois filtres rapides : Odoo ERP, Site web, Marketing digital — en choisissant l'étiquette dans l'éditeur de domaine, pas en tapant son nom
- un filtre « Score ≥ 60 »
- un filtre « Chauds » (segment = Chaud)
- des regroupements par Étiquettes, Secteur, Origine, Segment

**Contrôle** : dans le pipeline, un commercial affiche « leads Odoo ERP, chauds, regroupés par secteur » en trois clics.

### Étape 5 — Créer les trois modèles d'email (30 min)

Menu : **Paramètres → Technique → Emails → Modèles**, modèle _Piste/Opportunité_.

Textes à reprendre dans l'**annexe A**. Pour chacun :

- De : l'adresse du vendeur du lead, {{ object.user_id.email_formatted }}
- À : l'email du lead
- Dans le corps, insérer le prénom du prospect et le nom du vendeur par les champs dynamiques de l'éditeur, pas en dur

**Contrôle** : depuis un lead de test, l'aperçu du modèle affiche le bon prénom et le bon vendeur.

### Étape 6 — Créer les trois automatisations (45 min)

Menu : **Studio → Automatisations**, modèle _Piste/Opportunité_. Une règle par étiquette.

**Règle « Lead Odoo ERP »**

- Déclencheur : **Étiquette ajoutée**, étiquette **Odoo ERP**
- Action 1 — _Mettre à jour l'enregistrement_ : Équipe commerciale = ERP Odoo ; Vendeur = El Houssine BOUHMAIDA
- Action 2 — _Planifier une activité_ :
  - Type : **Appel** (icône téléphone) — et non Email
  - Résumé : « Appeler le prospect »
  - Échéance : 1 jour après le déclenchement
  - Assigné à : **utilisateur dynamique, champ Vendeur** — et non un utilisateur fixe
- Action 3 — _Envoyer un email_ : modèle « Accusé de réception — Odoo ERP », envoyé comme **message** pour qu'il apparaisse dans le fil

**Règle « Lead Site web »** : identique, avec Équipe = Web & Marketing, Vendeur = Manal AIT AYAD, modèle « Accusé de réception — Site web ».

**Règle « Lead Marketing digital »** : identique, avec Équipe = Web & Marketing, Vendeur = Manal AIT AYAD, modèle « Accusé de réception — Marketing digital ».

**L'ordre des actions compte** : le vendeur doit être fixé par l'action 1 avant que l'activité lui soit assignée et que l'email cite son nom.

**Contrôle** : sur un lead créé à la main, ajouter l'étiquette Site web fait passer le lead chez Manal, crée une activité à icône téléphone assignée à Manal, et fait apparaître l'email dans le fil.

### Étape 7 — Mettre à jour le connecteur du site (2 h)

**Le connecteur écrit :**

| **Donnée du formulaire**                                       | **Champ Odoo**                                       |
| -------------------------------------------------------------- | ---------------------------------------------------- |
| Nom complet                                                    | contact_name (Nom du contact) — actuellement vide    |
| Email, téléphone                                               | email_from, phone                                    |
| Entreprise                                                     | partner_name (Nom de la société) — actuellement vide |
| Pays                                                           | country_id (Pays) — actuellement vide                |
| Besoin                                                         | **une seule** étiquette parmi les trois              |
| Page de soumission                                             | x_studio_outil_source                                |
| Score (outils)                                                 | x_studio_score                                       |
| Secteur, outil actuel, échéance, objectif, budget, site actuel | champs x_studio_\* de l'étape 3                      |
| Consentement et horodatage                                     | x_studio_consentement, x_studio_consentement_date    |
| UTM et page d'origine                                          | champs Marketing natifs, comme aujourd'hui           |

Pour les champs de sélection, le connecteur envoie **la clé technique** relevée à l'étape 3, pas le libellé affiché.

**Le connecteur ne fait plus :**

- l'affectation de l'équipe et du vendeur
- la création de l'activité
- aucun envoi d'email
- aucune autre étiquette que l'une des trois

Si ces éléments restent dans le code en plus des automatisations, chaque lead aura **deux activités** et le prospect recevra **deux emails**. C'est pourquoi le routage demandé dans le message du T6 ne doit **pas** être codé dans le connecteur.

**La note du lead ne contient plus rien qui figure déjà dans un champ.** Aujourd'hui, besoin, pays, UTM, page d'origine et consentement y apparaissent en double. Si un commercial corrige un champ, la note continue d'afficher l'ancienne valeur, et personne ne sait laquelle croire. La consigne donnée au T6 — garder la ligne UTM en description « en plus » — est annulée.

| **Retiré de la note**                                          | **Parce que la donnée est dans**                             |
| -------------------------------------------------------------- | ------------------------------------------------------------ |
| Besoin                                                         | l'étiquette                                                  |
| Pays                                                           | country_id                                                   |
| Société, nom, téléphone, email                                 | partner_name, contact_name, phone, email_from                |
| UTM                                                            | Source, Médium, Campagne (onglet Contact, section Marketing) |
| Page d'origine                                                 | Recommandé par                                               |
| Consentement et sa date                                        | x_studio_consentement, x_studio_consentement_date            |
| Secteur, outil actuel, échéance, objectif, budget, site actuel | champs x_studio_\*                                           |
| Outil utilisé, score, segment                                  | x_studio_outil_source, x_studio_score, x_studio_segment      |

**Ce qui reste dans la note** : le message libre saisi par le prospect dans le formulaire Marketing digital, et, pour les outils gratuits, les réponses détaillées et les recommandations affichées. Ce sont les seules informations qui n'ont pas de champ, et elles aident le commercial à préparer l'appel.

**Pour une demande venue du formulaire de contact sans message libre, la note est donc vide. C'est le résultat attendu.**

**Contrôle** : une soumission de test crée un lead avec une seule étiquette, les champs remplis, Société, Pays et Nom du contact renseignés dans l'onglet Contact.

### Étape 8 — Nettoyer (15 min)

1. Si des vrais leads portaient les anciennes étiquettes (étape 1), reporter leurs valeurs dans les nouveaux champs et poser la bonne étiquette — **en désactivant les trois automatisations pendant l'opération**, sinon chaque lead converti enverra un accusé de réception à un vrai prospect, parfois des jours après sa demande.
2. Supprimer les anciennes étiquettes : besoin:\*, consentement:\*, Consentement OK, secteur:\*, segment:\*, score:\*, outil-actuel:\*, Outil : \*.
3. Réactiver les automatisations.

**Contrôle** : la liste des étiquettes CRM ne contient plus que les trois nouvelles, plus TEST et les étiquettes historiques antérieures au nouveau formulaire.

## 4\. Pièges à éviter

| **Piège**                                                         | **Conséquence**                                                         | **Parade**                                                              |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Laisser le routage dans le connecteur                             | Deux activités, deux emails par lead                                    | Étape 7, liste « ne fait plus »                                         |
| Type d'activité Email au lieu d'Appel                             | Icône enveloppe, pas de bouton d'appel                                  | Étape 6, action 2                                                       |
| Activité assignée à un utilisateur fixe                           | Toutes les activités chez la même personne                              | Utilisateur dynamique, champ Vendeur                                    |
| Deux étiquettes de besoin sur un lead                             | Deux automatisations déclenchées                                        | Une seule étiquette ; changer d'étiquette revient à requalifier le lead |
| Automatisations actives pendant le nettoyage                      | Accusés envoyés à de vrais prospects en retard                          | Étape 8, désactiver d'abord                                             |
| Garder la ligne UTM ou la page d'origine dans la note « en plus » | Deux versions d'une même donnée, qui divergent à la première correction | Étape 7, tableau « Retiré de la note »                                  |
| Libellé envoyé au lieu de la clé                                  | Champ de sélection vide ou erreur API                                   | Étape 3, relever les clés                                               |
| Emails envoyés depuis @msl-itech.com classés en spam              | Accusé jamais lu                                                        | Test vers une boîte Gmail externe à l'étape 9                           |

## 5\. Critères d'acceptation — étape 9

Trois soumissions de test depuis le site, une par besoin, en arrivant par une URL avec UTM. Étiquette TEST sur chacune.

1. Chaque lead porte **une seule** étiquette parmi les trois.
2. Les données du formulaire sont dans l'onglet Qualification, et Société, Pays, Nom du contact dans l'onglet Contact.
3. **La note ne contient aucune information déjà présente dans un champ** : ni besoin, ni pays, ni UTM, ni page d'origine, ni consentement.
4. Un lead venu d'un outil porte son score, et son segment s'est calculé seul.
5. Routage conforme au tableau de la section 2 : équipe et vendeur.
6. **Une seule** activité par lead, de type Appel, **icône téléphone**, assignée au vendeur, échéance le lendemain.
7. **Un seul** accusé de réception, reçu dans la boîte et visible dans le fil, citant le nom du vendeur. Un envoi au moins vers une adresse Gmail externe, pour vérifier qu'il n'arrive pas en spam.
8. Les filtres et regroupements fonctionnent dans le pipeline.
9. Les anciennes étiquettes ont disparu.

## 6\. Livrables

- La liste des champs créés, avec leurs noms techniques réels et les clés de sélection générées par Studio.
- Une capture de chacune des trois automatisations, montrant déclencheur et actions.
- Les trois modèles d'email.
- Le connecteur mis à jour, avec la liste de ce qui en a été retiré.
- Les trois leads de test : capture de l'onglet Qualification, de l'onglet Contact, de l'activité et de l'email dans le fil.

## Annexe A — Les trois accusés de réception

Les champs entre crochets sont à insérer comme **champs dynamiques** dans l'éditeur, pas à taper.

**Modèle « Accusé de réception — Odoo ERP »**

_Objet : Votre projet Odoo — prochaines étapes_

_Bonjour \[Prénom du contact\],_

_Merci pour votre demande. \[Nom du vendeur\], consultant MSL-iTECH, vous appelle sous 24 h ouvrées pour un premier échange de 10 minutes : comprendre votre situation et vérifier que nous pouvons vous aider._

_Si votre besoin est confirmé, nous fixons ensemble un cadrage gratuit de 30 minutes, puis vous recevez un devis détaillé sous 48 h._

_D'ici là, deux ressources utiles :_

_— Vérifier votre conformité à la facturation électronique DGI en 2 minutes : <https://msl-itech.com/outils/conformite-dgi>_

_— Combien coûte Odoo au Maroc en 2026 : <https://msl-itech.com/blog/cout-erp-odoo-maroc-2026>_

_\[Nom du vendeur\]_

_MSL-iTECH — Intégrateur Odoo au Maroc_

**Modèle « Accusé de réception — Site web »**

_Objet : Votre projet de site web — prochaines étapes_

_Bonjour \[Prénom du contact\],_

_Merci pour votre demande. \[Nom du vendeur\] vous appelle sous 24 h ouvrées pour comprendre votre projet, vos objectifs et vos délais._

_Vous recevrez ensuite une proposition adaptée, avec un prix ferme._

_D'ici là, vous pouvez parcourir nos réalisations : <https://msl-itech.com/realisations>_

_\[Nom du vendeur\]_

_MSL-iTECH_

**Modèle « Accusé de réception — Marketing digital »**

_Objet : Votre demande en marketing digital — prochaines étapes_

_Bonjour \[Prénom du contact\],_

_Merci pour votre demande. \[Nom du vendeur\] vous appelle sous 24 h ouvrées pour faire le point sur votre visibilité actuelle et vos objectifs._

_Si vous nous avez indiqué l'adresse de votre site, nous l'aurons parcouru avant l'appel, pour vous faire un premier retour concret._

_\[Nom du vendeur\]_

_MSL-iTECH_

**\[À VÉRIFIER\] avec la direction** : le modèle Marketing digital engage Manal à parcourir le site avant chaque appel. Si ce n'est pas tenable, retirer la dernière phrase.

## Annexe B — Calcul du segment

À coller dans le champ « Calcul » de x_studio_segment (étape 3). Remplacer les clés froid, tiede, chaud par celles que Studio a réellement générées, et les seuils par ceux du scoring actuel.

for record in self:  
score = record\['x_studio_score'\]  
if not score:  
record\['x_studio_segment'\] = False  
elif score >= 70:  
record\['x_studio_segment'\] = 'chaud'  
elif score >= 30:  
record\['x_studio_segment'\] = 'tiede'  
else:  
record\['x_studio_segment'\] = 'froid'