---
numero: 8
hub: D — Sites web & acquisition
slug: site-web-relie-odoo-crm
title: "Site web relié à Odoo CRM : chaque formulaire devient un prospect suivi"
metaTitle: "Site web relié à Odoo CRM : aucun prospect perdu"
metaDescription: "Comment connecter votre site web à Odoo CRM pour que chaque formulaire crée un prospect assigné, suivi et mesuré, avec sa source. Méthode, champs à transmettre, pièges."
motCle: "site web odoo crm"
motsCleSecondaires: ["formulaire site web crm", "connecter site web odoo", "leads odoo", "suivi des demandes site web"]
auteur: "[Nom du consultant] — Consultant Odoo, MSL-iTECH"
datePublication: "AAAA-MM-JJ"
dateMiseAJour: "AAAA-MM-JJ"
cta: "Recevoir un devis site → /contact?besoin=site"
liensInternes:
  - /creation-web
  - /odoo-crm-ventes
  - /blog/site-web-ne-genere-aucun-client-10-causes
  - /realisations   # cas Titis Bout'Choux (inscriptions depuis le site)
  - /contact
  - /integrateur-odoo-maroc
validation: "Aucune dépendance réglementaire. [CHIFFRE À VALIDER] pour le cas client. Ne pas décrire le fonctionnement interne réel du formulaire msl-itech.com au-delà de ce qui est public."
---

# Site web relié à Odoo CRM : chaque formulaire devient un prospect suivi

**La plupart des sites d'entreprise envoient leurs formulaires vers une boîte email. La demande y arrive, puis dépend de la personne qui lit cette boîte, de son emploi du temps et de sa mémoire. Relier le site à un CRM change cela : chaque formulaire crée une fiche, assignée à quelqu'un, avec un rappel et une source. Voici comment le faire avec Odoo, ce qu'il faut transmettre, et les erreurs à éviter.**

> **En bref**
> - Un formulaire relié à Odoo crée un **prospect** (lead) dans le CRM, dans la bonne équipe, avec une activité « à appeler » et une échéance.
> - Le prospect porte sa **source** (Google, LinkedIn, campagne email, fiche Google) et la **page** d'où il vient : on sait enfin quel canal amène des clients.
> - Deux façons de faire : un site construit sur Odoo Website (connexion native), ou un site externe (WordPress, React, autre) relié par un connecteur.
> - Le piège classique : relier le formulaire et s'arrêter là. Sans attribution, sans rappel et sans étapes définies, le CRM devient une boîte email plus chère.
> - Nous appliquons ce principe à notre propre site : chaque demande sur msl-itech.com arrive dans notre Odoo.

## Pourquoi la boîte email ne suffit pas

Une demande reçue par email pose quatre problèmes : personne n'est **responsable** de la traiter, aucun **délai** n'est fixé, on ne sait pas **d'où** elle vient, et une fois traitée (ou oubliée), elle **disparaît** des statistiques. Or, dans une PME, le premier qui rappelle un prospect a une longueur d'avance : un rappel sous une heure pendant les heures ouvrées change le taux de rendez-vous, un rappel à trois jours le ruine. Notre article [Pourquoi votre site ne génère aucun client](/blog/site-web-ne-genere-aucun-client-10-causes) classe la perte des demandes parmi les dix causes les plus fréquentes.

## Ce que fait un site relié à Odoo CRM

1. Le visiteur remplit le formulaire (ou réserve un créneau, ou termine un outil en ligne).
2. Odoo crée un **prospect** avec ses coordonnées, son besoin, la page d'origine et la source de trafic.
3. Une règle d'**attribution** l'affecte à la bonne personne ou équipe (par service demandé, par pays, par ville).
4. Une **activité** « appeler » est créée avec une échéance (par exemple J+1) ; la personne est notifiée.
5. Le prospect avance dans des **étapes** (contacté, rendez-vous fixé, proposition envoyée, gagné/perdu) ; chaque étape est datée.
6. Un **tableau de bord** montre, par source et par page, combien de demandes deviennent des rendez-vous, puis des clients.

Le point 6 est celui qui change la stratégie : on cesse de payer pour du trafic et on investit dans les canaux qui produisent des clients. Voir [Odoo CRM et Ventes](/odoo-crm-ventes).

## Deux architectures possibles

| | Site construit sur Odoo Website | Site externe (WordPress, React, Lovable, autre) |
|---|---|---|
| Connexion au CRM | Native : le formulaire crée le prospect sans développement | Par connecteur : appel à l'API Odoo à la soumission, ou automatisation intermédiaire |
| Sources de trafic | Capturées automatiquement (paramètres UTM) | À capturer côté site et à transmettre |
| Liberté de conception | Bonne, dans le cadre des thèmes Odoo | Totale |
| Quand la choisir | Vous avez déjà Odoo et voulez un site simple, vite | Vous avez des exigences de design ou de performance, ou un site existant à conserver |

Les deux fonctionnent. Ce qui compte est que le prospect arrive dans Odoo avec les bonnes informations ; le choix technique se fait sur le site lui-même (voir [notre offre de création de sites](/creation-web)).

## Les informations à transmettre avec chaque formulaire

Un formulaire minimal (nom, email, message) crée un prospect pauvre. Voici ce qu'il vaut la peine de transmettre :

| Information | Pourquoi | Comment |
|---|---|---|
| Nom, email, téléphone, entreprise | Joindre le prospect | Champs visibles, téléphone obligatoire si vous rappelez |
| Service demandé | Router vers la bonne équipe | Choix en début de formulaire |
| Pays ou ville | Router et adapter le discours | Liste déroulante |
| Une ou deux questions de qualification | Préparer l'appel | Facultatives : outil actuel, échéance, taille |
| Page d'origine | Savoir quel contenu a déclenché la demande | Champ caché rempli automatiquement |
| Source, medium, campagne (UTM) | Savoir quel canal a amené le visiteur | Champs cachés, capturés à l'arrivée sur le site |
| Consentement | Respect de la loi 09-08 au Maroc et du RGPD en Europe | Case à cocher, horodatage conservé |

Dans Odoo, ces informations vont dans les champs natifs du prospect (contact, société, pays, source, medium, campagne, équipe) et, pour les questions de qualification, dans des champs dédiés ou la description.

## Les erreurs qui vident le CRM de son intérêt

1. **Pas d'attribution.** Les prospects arrivent « non assignés » et personne ne les regarde. Règle : chaque prospect a un propriétaire dès sa création.
2. **Pas d'échéance.** Sans activité datée, rien ne rappelle qu'il faut appeler. Règle : une activité automatique à J+1 maximum.
3. **Pas de source.** On ne saura jamais si le blog, LinkedIn ou la fiche Google produit des clients. Règle : UTM et page d'origine sur tous les formulaires.
4. **Trop de champs.** Le formulaire décourage. Règle : quatre à six champs obligatoires, le reste facultatif.
5. **Pas de traitement des indésirables.** Spam, candidatures et démarchages polluent les statistiques. Règle : anti-robot sur le formulaire, étape « non pertinent » avec motif dans le CRM.
6. **Pas de vérification.** Le formulaire cesse d'envoyer après une mise à jour et personne ne s'en aperçoit. Règle : un test d'envoi par mois.

## Un exemple

**[CHIFFRE À VALIDER — cas Titis Bout'Choux]** : une crèche belge dont le site permet aux parents de déposer une demande d'inscription ; chaque demande crée une fiche dans Odoo, suivie par la direction jusqu'à l'inscription. Ce qu'on retient : le formulaire n'est plus un point d'arrivée, c'est le début d'un processus visible. Détails sur [nos réalisations](/realisations).

## Et les autres points d'entrée ?

Le formulaire n'est pas le seul. Une **prise de rendez-vous en ligne** (Odoo propose un module de rendez-vous) doit créer ou rattacher un prospect, sinon les rendez-vous échappent au suivi. Un **outil en ligne** (simulateur, diagnostic) doit proposer de recevoir le résultat par email et créer un prospect qualifié par son score. Le **téléphone** affiché sur le site doit, lui aussi, aboutir à une fiche créée à la main. La règle est simple : tout contact entrant, quel que soit son canal, finit dans le même CRM.

## Ce que fait MSL-iTECH

Nous construisons des [sites web](/creation-web) conçus dès le départ pour alimenter Odoo CRM : formulaire adapté au service demandé, capture des sources, attribution, activités automatiques, tableau de bord. Pour les entreprises qui ont déjà un site, nous relions l'existant à Odoo. Et nous configurons le CRM lui-même (équipes, étapes, règles) en tant qu'[intégrateur Odoo au Maroc](/integrateur-odoo-maroc). Notre propre site fonctionne ainsi : la demande que vous ferez en bas de cet article arrivera dans notre Odoo avec la mention de cet article comme page d'origine.

## Questions fréquentes

**Faut-il que le site soit construit sur Odoo pour être relié au CRM ?**
Non. Un site WordPress, React ou autre se relie à Odoo par un connecteur. La connexion est simplement native quand le site est sur Odoo Website.

**Que devient une demande envoyée par email en plus du CRM ?**
Rien n'empêche d'envoyer aussi une notification email ; mais la fiche CRM est la référence, l'email n'est qu'une alerte.

**Combien coûte la connexion d'un formulaire à Odoo ?**
Cela dépend du site et du nombre de formulaires ; pour un site existant avec un formulaire, c'est un travail de quelques jours au plus, chiffré au devis.

**Comment savoir quel canal amène des clients ?**
En transmettant la source (UTM) et la page d'origine avec chaque prospect, puis en lisant le rapport CRM par source jusqu'à l'étape « gagné ».

**Le CRM remplace-t-il le rappel téléphonique ?**
Non, il le déclenche. La vitesse et la qualité du rappel restent humaines ; le CRM garantit qu'il a lieu et qu'on sait ce qu'il a donné.

---

**Votre site envoie ses demandes dans le vide ?** [Recevez un devis pour un site relié à Odoo](/contact?besoin=site), ou [faites auditer votre site actuel gratuitement](/audit-digital-gratuit).

<!-- JSON-LD à insérer dans le <head> -->
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {"@type": "Article",
     "headline": "Site web relié à Odoo CRM : chaque formulaire devient un prospect suivi",
     "description": "Relier un site web à Odoo CRM : architectures, informations à transmettre, attribution, rappels et mesure par source.",
     "author": {"@type": "Person", "name": "[Nom du consultant]", "jobTitle": "Consultant Odoo", "url": "https://msl-itech.com/a-propos"},
     "publisher": {"@type": "Organization", "name": "MSL-iTECH", "url": "https://msl-itech.com", "logo": {"@type": "ImageObject", "url": "https://msl-itech.com/logo.png"}},
     "datePublished": "[AAAA-MM-JJ]", "dateModified": "[AAAA-MM-JJ]",
     "mainEntityOfPage": "https://msl-itech.com/blog/site-web-relie-odoo-crm", "inLanguage": "fr"},
    {"@type": "BreadcrumbList", "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://msl-itech.com/"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://msl-itech.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "Sites web & acquisition", "item": "https://msl-itech.com/creation-web"},
      {"@type": "ListItem", "position": 4, "name": "Site web relié à Odoo CRM"}]},
    {"@type": "FAQPage", "mainEntity": [
      {"@type": "Question", "name": "Faut-il que le site soit construit sur Odoo pour être relié au CRM ?", "acceptedAnswer": {"@type": "Answer", "text": "Non : un site WordPress, React ou autre se relie à Odoo par un connecteur ; la connexion est native sur Odoo Website."}},
      {"@type": "Question", "name": "Combien coûte la connexion d'un formulaire à Odoo ?", "acceptedAnswer": {"@type": "Answer", "text": "Quelques jours de travail au plus pour un site existant avec un formulaire, chiffrés au devis."}},
      {"@type": "Question", "name": "Comment savoir quel canal amène des clients ?", "acceptedAnswer": {"@type": "Answer", "text": "En transmettant la source et la page d'origine avec chaque prospect puis en lisant le rapport CRM par source jusqu'à l'étape gagné."}},
      {"@type": "Question", "name": "Le CRM remplace-t-il le rappel téléphonique ?", "acceptedAnswer": {"@type": "Answer", "text": "Non, il le déclenche et garantit qu'il a lieu ; la qualité du rappel reste humaine."}}
    ]}
  ]
}
```
