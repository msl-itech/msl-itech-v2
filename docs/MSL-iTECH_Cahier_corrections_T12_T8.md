# MSL-iTECH — Cahier de travail webmaster

## Corrections T12 et T8 — recette du 24 septembre 2026

Version 1 du 24 septembre 2026 · Instance : Odoo Online avec Studio · Rôle : webmaster · Effort estimé : 1 à 1,5 jour · Tickets concernés : T12, T8, et T7 pour la fusion

Ce document fait suite à la recette du 24/09/2026 : sept soumissions depuis les préversions T12 et T8, puis un relevé complet dans Odoo par lecture seule. Il reprend tout ce qui reste à faire, avec les décisions prises par la direction. Convention inchangée : **\[À VÉRIFIER\]** signale un point à contrôler avant d'agir.

## 1\. Synthèse

**Le T12 est presque clos.** L'architecture fonctionne : trois étiquettes, routage, champs, activités et accusés de réception. Restent cinq corrections et trois points secondaires.

**Le T8 a un défaut bloquant** : la soumission du formulaire d'audit ne produit aucun lead visible dans Odoo. Restent aussi neuf corrections.

### Ce qui est validé sur le T12

| **Élément**                         | **Résultat constaté**                                                             |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| Expéditeur de l'email du simulateur | MSL-iTECH, plus MFINANCES                                                         |
| Segmentation                        | ERP « moins de 3 mois » → chaud ; simulateur à 68 → chaud ; Site web sans segment |
| Anciennes étiquettes                | Les onze supprimées, celles des autres sociétés intactes                          |
| Anciens leads de test               | Supprimés                                                                         |
| Routage                             | ERP chez Houssine, Site et Marketing chez Manal, dans la bonne équipe             |
| Activité                            | Une par lead, type Appel, icône téléphone, bon vendeur, échéance le lendemain     |
| Accusés dans le fil                 | Visibles, après décochage de « Supprimer automatiquement » par la direction       |
| Score masqué sur les formulaires    | Oui                                                                               |
| Onglet partenaire                   | Renommé « Qualification msales »                                                  |
| Simulateur                          | Turnstile présent, bouton désactivé pendant l'envoi                               |

## 2\. Décisions de la direction

| **Sujet**                                    | **Décision**                                                   |
| -------------------------------------------- | -------------------------------------------------------------- |
| Contenu de l'email du diagnostic DGI         | Conservé tel quel, **sauf la phrase sur le module** (voir 3.4) |
| Module MSL-iTECH de conformité DGI           | En cours de développement : ne pas l'annoncer au présent       |
| Nombre d'emails pour un lead venu d'un outil | **Un seul** : l'email du diagnostic, qui annonce aussi l'appel |
| Téléphone sur le formulaire d'audit          | **Obligatoire**                                                |

## 3\. T12 — corrections

### 3.1 — Caractères invisibles dans les champs de sélection

**Constat** : cinq valeurs commencent par un caractère invisible, U+200B (espace sans largeur), sans doute issu d'un copier-coller dans Studio.

| **Champ** | **Valeur**                | **Caractères cachés** |
| --------- | ------------------------- | --------------------- |
| Échéance  | 3 à 6 mois                | 1 × U+200B            |
| Échéance  | Plus tard                 | 1 × U+200B            |
| Échéance  | Je me renseigne           | 2 × U+200B            |
| Secteur   | Santé / Services médicaux | 1 × U+200B            |
| Secteur   | Transport / Logistique    | 1 × U+200B            |

**Pourquoi c'est devenu important** : la segmentation dépend de l'échéance. La recette n'a utilisé que « Moins de 3 mois », la seule valeur propre. Un prospect qui choisit « 3 à 6 mois » risque de n'avoir aucun segment, sans aucune erreur visible.

**À faire** :

1. Supprimer les caractères invisibles des cinq valeurs. Les libellés peuvent rester utilisés comme clés techniques.
2. Contrôler tous les autres champs de sélection x_studio_\* pour le même défaut.
3. Mettre à jour **en même temps** les valeurs, le connecteur du site et le calcul du champ Segment. Corriger un seul des trois côtés laisserait le champ vide.

**Contrôle** : un lead ERP avec échéance « 3 à 6 mois » et secteur « Santé / Services médicaux » arrive avec le segment Tiède et le secteur rempli.

### 3.2 — Débordement de 96 px du formulaire

**Constat** : toujours scrollWidth=798 pour clientWidth=702. Le formulaire est passé en overflow-x: hidden, ce qui ne suffit pas : un conteneur hidden peut encore défiler par programme, lors d'un focus ou d'un scrollIntoView. C'est ce qui avait fait glisser le contenu et masqué la case de consentement lors d'une recette précédente.

**À faire** : overflow-clip sur le &lt;form&gt;, ou retirer du conteneur le décor en absolute -right-24 -top-24.

**Contrôle** : après une erreur de validation à l'étape 2, scrollWidth est inférieur ou égal à clientWidth, sur ordinateur et en affichage mobile 390 px.

### 3.3 — Un seul email pour les leads des outils

**Constat** : le lead du simulateur reçoit deux emails à une minute d'intervalle — l'accusé « Merci pour votre demande » et le diagnostic.

**Principe retenu** : l'accusé de réception générique ne part que pour les leads du **formulaire de contact**. Un lead venu d'un outil reçoit uniquement l'email de cet outil ; un lead d'audit reçoit l'email dédié à l'audit (voir 4.3).

**À faire** : dans chacune des trois automatisations « Lead … », conserver le routage et l'activité, et **conditionner l'envoi de l'email à l'origine de la demande**. L'envoi doit rester placé **après** le routage, pour que l'email puisse citer le vendeur.

| **Automatisation**     | **Origine = Formulaire de contact** | **Origine = Audit gratuit** | **Origine = Simulateur ou Diagnostic** |
| ---------------------- | ----------------------------------- | --------------------------- | -------------------------------------- |
| Lead Odoo ERP          | Accusé « Odoo ERP »                 | —                           | aucun accusé                           |
| Lead Site web          | Accusé « Site web »                 | —                           | aucun accusé                           |
| Lead Marketing digital | Accusé « Marketing digital »        | Accusé « Audit gratuit »    | aucun accusé                           |

Studio ne permet pas de conditionner une action seule. La solution la plus simple est de remplacer l'action « Envoyer un email » par une action **« Exécuter du code »**, à la même position. Exemple pour la règle Marketing digital, **\[À VÉRIFIER\]** sur l'instance avant mise en production :

origine = record.x_studio_outil_source  
modeles = {  
'Formulaire de contact': 'Accusé de réception — Marketing digital',  
'Audit gratuit': 'Accusé de réception — Audit gratuit',  
}  
nom = modeles.get(origine)  
if nom:  
modele = env\['mail.template'\].search(\[('name', '=', nom)\], limit=1)  
if modele:  
record.message_post_with_source(  
modele,  
message_type='comment',  
subtype_xmlid='mail.mt_comment',  
)

Pour les règles Odoo ERP et Site web, le dictionnaire ne contient que la ligne « Formulaire de contact » avec leur modèle.

**Contrôle** : un lead du simulateur n'a qu'un seul email dans son fil, le diagnostic ; un lead du formulaire a son accusé.

### 3.4 — L'email du diagnostic DGI

**Constat** : trois écarts.

- Il affirme qu'« Odoo 18 + le module MSL-iTECH **gère** l'émission DGI conforme nativement ». Le module est en cours de développement.
- L'écran du simulateur promet « le détail complet et vos **recommandations personnalisées** ». L'email est générique : ni score, ni recommandations.
- Depuis la décision 3.3, c'est le seul email que reçoit le prospect : il doit aussi annoncer l'appel.

**À faire** :

1. Remplacer la phrase sur le module par :

- _Bonne nouvelle : Odoo 18 permet d'émettre des factures au format structuré, et MSL-iTECH prépare un module dédié à la conformité DGI._

1. Annoncer l'appel en nommant le vendeur : « \[Nom du vendeur\], consultant MSL-iTECH, vous appelle sous 24 h ouvrées pour en parler avec vous. »
2. Ajouter **le score affiché au prospect** et **ses trois recommandations**. Ces deux informations doivent devenir des champs, pour pouvoir être insérées dans l'email :

| **Nouveau champ**        | **Type** | **Contenu**                                                |
| ------------------------ | -------- | ---------------------------------------------------------- |
| x_studio_score_affiche   | Entier   | Le score montré au prospect à l'écran (35 dans la recette) |
| x_studio_recommandations | Texte    | Les trois recommandations affichées                        |

Le champ existant **Score** devient **« Score lead »** : c'est la note de qualité du lead calculée par le connecteur (68 dans la recette), qui sert à la segmentation. Les deux ne doivent pas être confondus — un commercial qui citerait « 68 » au téléphone à un prospect qui a vu « 35 » sèmerait le doute.

Le reste du contenu de l'email est conservé, par décision de la direction. Même règle pour le module dans les autres emails de la séquence.

**Contrôle** : l'email reçu après le simulateur affiche le score vu à l'écran, les trois recommandations, et le nom du vendeur qui va appeler.

### 3.5 — La séquence d'emails

**Constat** : le lead du simulateur porte une deuxième étiquette, « Séquence: Conformité DGI », et l'email part d'une campagne. Quatre étiquettes « Séquence » ont été créées : Comparateur Sage-Odoo, Conformité DGI, Diagnostic Digital, ROI ERP. Ces relances automatiques n'étaient pas encore spécifiées ; elles relevaient du futur T13.

**À faire avant la production** : documenter chaque séquence dans ce tableau et le renvoyer.

| **Séquence**   | **Email n°** | **Délai après l'entrée** | **Objet**                               | **Ce qui arrête la séquence** |
| -------------- | ------------ | ------------------------ | --------------------------------------- | ----------------------------- |
| Conformité DGI | 1            | immédiat                 | Votre diagnostic de conformité DGI 2026 |                               |
|                | 2            |                          |                                         |                               |
| …              |              |                          |                                         |                               |

**Règle impérative** : un prospect qui a répondu, pris rendez-vous ou changé d'étape ne doit plus recevoir de relance. La base contient déjà des automatisations d'arrêt pour d'autres sociétés (« Auto-stop séquences si rdv_pris / reponse_recue / desabonne ») : s'en inspirer, en les limitant à la société MSL-iTECH.

### 3.6 — Secondaires

- **Logo absent** dans l'accusé Site web, alors qu'il s'affiche dans l'accusé Odoo ERP : corriger l'adresse de l'image dans le modèle.
- **Page d'origine du simulateur** : le lead a « / » dans « Recommandé par » au lieu de /outils/conformite-dgi. Enregistrer la page de soumission, pas la page d'arrivée.

## 4\. T8 — corrections

### 4.1 — Bloquant : le lead d'audit est introuvable

**Constat** : la soumission du formulaire d'audit a reçu une réponse 201 de api-connect-odoo.vercel.app/api/leads, mais aucun lead correspondant n'existe dans Odoo, ni actif ni archivé. Aucun accusé n'est arrivé. Un prospect qui demande un audit serait perdu sans que personne le sache.

**À faire** : dans les journaux du connecteur, retrouver ce qui a été créé — identifiant, nom, société de la base. Trois hypothèses : lead créé sous un autre nom, lead créé dans une autre société de la base partagée, ou réponse 201 renvoyée sans création effective. Dans le dernier cas, le connecteur doit renvoyer une erreur, jamais un succès.

**Contrôle** : une soumission d'audit crée un lead visible dans la société MSL-iTECH, et le connecteur renvoie l'identifiant créé.

### 4.2 — Étiquette et origine

- Supprimer l'étiquette « Audit » : on reste à trois étiquettes.
- Le lead d'audit porte l'étiquette **Marketing digital**, ce qui le route vers Manal.
- Ajouter la valeur **« Audit gratuit »** au champ Origine de la demande, sans caractère invisible (voir 3.1).

### 4.3 — Email dédié à l'audit

Créer le modèle **« Accusé de réception — Audit gratuit »**, envoyé par la règle Marketing digital quand l'origine est « Audit gratuit » (voir 3.3). Texte :

_Objet : Votre audit gratuit est lancé_

_Bonjour \[Prénom du contact\],_

_Merci pour votre demande. Nous analysons \[Site du prospect\] sur 10 points : visibilité Google, présence dans les réponses des IA, vitesse, mobile, clarté de l'offre, formulaire et suivi des demandes._

_Vous recevrez votre rapport de 2 pages sous 48 h ouvrées, avec une invitation à un appel de 15 minutes pour le commenter ensemble._

_\[Nom du vendeur\]_

_MSL-iTECH_

Les champs entre crochets s'insèrent comme champs dynamiques ; \[Site du prospect\] correspond à x_studio_url_site.

### 4.4 — Téléphone obligatoire

Décision de la direction. L'automatisation crée une activité « Appeler » pour Manal : il lui faut un numéro.

### 4.5 — Les exemples présentés comme réels

**Constat** : la section titrée « Exemples réels » affiche des résultats chiffrés — « +40 % de leads qualifiés en 60 jours », « Position 1 sur 4 requêtes en 90 jours ». Le cahier demandait des **observations**, pas des résultats.

**À faire** : si ces résultats ne viennent pas d'audits réels documentés, retirer les chiffres et le mot « réels », et ne garder que les observations. C'est le même problème que le témoignage « trafic doublé en 3 mois » retiré au T7 : un résultat invérifiable, sur la page même qui vend la rigueur de l'audit.

### 4.6 — Délais contradictoires

/marketing-digital annonce « réponse sous 24h » et « diagnostic complet sous 24h » ; la page d'audit promet 48 h ouvrées. Aligner partout sur **48 h ouvrées**, délai tenable pour un audit réalisé à la main.

### 4.7 — Turnstile

Ajouter Turnstile au formulaire d'audit, comme sur le formulaire de contact et le simulateur. C'est la page qui recevra les liens des emails de prospection : elle sera la plus exposée au spam.

### 4.8 — Title et description

| **Balise**  | **Actuel**     | **Proposé**                                                                                                                                              |
| ----------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title       | 83 caractères  | Audit gratuit de votre site : 10 points vérifiés \| MSL-iTECH (60)                                                                                       |
| Description | 159 caractères | Audit gratuit de votre site en 10 points : visibilité Google, présence IA, vitesse, mobile, formulaires. Rapport PDF et appel de 15 min sous 48 h. (146) |

### 4.9 — Données structurées

Seul BreadcrumbList est présent. Ajouter un schéma Service avec provider référencé par {"@id": "<https://msl-itech.com/#organization"}>, conformément à la matrice du T11.

### 4.10 — Secondaire

Ajouter un attribut name à chaque champ du formulaire, pour le remplissage automatique des navigateurs.

## 5\. Fusion et mise en production

1. **T4, T5, T6 et T12** sur une seule branche, puis fusion. Ils touchent tous le connecteur ; le débordement 3.2 montre ce qui arrive quand une correction reste sur une autre branche.
2. **T7 et T8** ensemble. Sur la branche T8, le bouton de /marketing-digital mène encore à /contact, parce que sa correction est sur la branche T7.
3. **En production** : vérifier que /audit-digital-gratuit figure dans le sitemap et qu'elle est prérendue pour les robots, comme le reste du site. Puis vérifier les trois redirections décidées : /blog/facturation-electronique-maroc-2026, /blog/sage-vs-odoo-maroc-comparatif-2026, et le sous-domaine marrakech.msl-itech.com.

## 6\. Recette finale

Trois soumissions depuis la préversion, étiquette TEST sur chaque lead.

| **Soumission**                                                                 | **Résultat attendu**                                                                                                                                                               |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Formulaire ERP, échéance « 3 à 6 mois », secteur « Santé / Services médicaux » | Segment Tiède, secteur rempli, un seul email : l'accusé Odoo ERP                                                                                                                   |
| Simulateur DGI                                                                 | Un seul email : le diagnostic, avec score affiché, trois recommandations, nom du vendeur ; page d'origine /outils/conformite-dgi ; Score lead et Score affiché remplis             |
| Formulaire d'audit                                                             | Lead présent dans MSL-iTECH, étiquette Marketing digital, origine Audit gratuit, UTM apollo / outbound / audit-web, téléphone rempli, email « Audit gratuit », activité chez Manal |

Et sur les trois : scrollWidth du formulaire inférieur ou égal à clientWidth après une erreur de validation.

## 7\. Livrables

- Les liens de préversion pour la recette.
- La liste des champs de sélection contrôlés (3.1), avec confirmation qu'aucun ne contient plus de caractère invisible.
- Une capture des trois automatisations modifiées, montrant l'action conditionnée.
- Le tableau des séquences (3.5), rempli.
- L'explication du lead d'audit introuvable (4.1) et la correction appliquée.
- Le modèle « Accusé de réception — Audit gratuit ».