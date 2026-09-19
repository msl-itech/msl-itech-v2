---
numero: 6
hub: B — Acheter Odoo
slug: odoo-multi-societe
title: "Odoo multi-société : gérer plusieurs sociétés, dépôts ou agences dans une seule base"
metaTitle: "Odoo multi-société : plusieurs sociétés dans une seule base"
metaDescription: "Holding, réseau d'agences, plusieurs points de vente : comment Odoo gère plusieurs sociétés dans une base unique — comptabilité par entité, consolidation, stocks partagés, flux inter-sociétés."
motCle: "odoo multi société"
motsCleSecondaires: ["multi société odoo", "erp multi société", "odoo multi-sites", "consolidation odoo", "odoo holding"]
auteur: "[Nom du consultant] — Consultant Odoo, MSL-iTECH"
datePublication: "AAAA-MM-JJ"
dateMiseAJour: "AAAA-MM-JJ"
cta: "Recevoir un devis détaillé sous 48 h → /contact?besoin=erp"
liensInternes:
  - /entreprise-multi-sites   # page à retitrer « Odoo multi-société et multi-sites » (ticket T2)
  - /odoo-finance-comptabilite
  - /odoo-gestion-stock-maroc
  - /realisations   # cas NASLI Holding, DHC
  - /integrateur-odoo-maroc
  - /blog/odoo-vs-sage-maroc-comparatif
validation: "Fonctionnel — vérifier que les fonctions citées (règles inter-sociétés, consolidation) correspondent à la version et à l'édition proposées (certaines sont Enterprise uniquement) : marquer [À VÉRIFIER VERSION]. [CHIFFRE À VALIDER] pour les cas clients."
---

# Odoo multi-société : gérer plusieurs sociétés, dépôts ou agences dans une seule base

**Quand une entreprise devient plusieurs — une holding et ses filiales, une société par ville, une activité de négoce et une de services — la question n'est plus « quel logiciel » mais « une base ou plusieurs ». Odoo est conçu pour faire tenir plusieurs sociétés dans une seule base, avec une comptabilité séparée par entité et des données partagées quand c'est utile. Voici ce que cela permet, ce que cela impose, et comment le mettre en place.**

> **En bref**
> - Dans Odoo, le **multi-société** est natif : chaque société a sa comptabilité, ses séquences, ses documents ; l'utilisateur bascule d'une société à l'autre depuis la même interface.
> - Les **données partagées** (contacts, produits) et les **données propres** (prix, stocks, comptes) se règlent entité par entité.
> - Les **flux entre sociétés** (une filiale vend à une autre) peuvent générer automatiquement la facture d'achat en face **[À VÉRIFIER VERSION : règles inter-sociétés, généralement Enterprise]**.
> - La **consolidation** des comptes est possible dans Odoo **[À VÉRIFIER VERSION : application Consolidation, Enterprise]** ou via export vers l'expert-comptable.
> - Le multi-société n'est pas un module qu'on active à la fin : il se décide au cadrage.

## Multi-société, multi-sites, multi-dépôts : de quoi parle-t-on ?

Trois situations sont souvent confondues :

| Situation | Ce que c'est | Ce que ça implique dans Odoo |
|---|---|---|
| **Multi-société** | Plusieurs entités juridiques (ICE, IF, RC distincts) | Une société Odoo par entité, comptabilité séparée, factures séparées |
| **Multi-sites / multi-agences** | Une seule société, plusieurs lieux (agences, points de vente) | Une société, plusieurs entrepôts ou points de vente, une seule comptabilité, analyse par site |
| **Multi-dépôts** | Une seule société, plusieurs lieux de stockage | Une société, plusieurs entrepôts avec règles de réapprovisionnement entre eux |

La première nécessite le multi-société. Les deux autres se règlent avec les entrepôts, les points de vente et la comptabilité analytique, sans créer plusieurs sociétés. Confondre les deux conduit à des architectures inutilement lourdes.

## Ce que le multi-société Odoo permet

### Une comptabilité par société, une interface pour tous

Chaque société a son plan comptable (le CGNC pour une société marocaine, un autre plan pour une filiale à l'étranger), ses journaux, ses séquences de numérotation, ses taux de TVA, ses rapports. Un utilisateur autorisé sur plusieurs sociétés passe de l'une à l'autre par un sélecteur, sans se reconnecter, et peut afficher une vue « toutes sociétés » pour les tableaux de bord. Voir [Odoo Finance](/odoo-finance-comptabilite).

### Des données partagées quand c'est utile

Un client commun à deux filiales n'existe qu'une fois ; un catalogue produits peut être partagé ou propre à chaque société. Ce réglage se fait fiche par fiche (« société » vide = partagé). C'est ce qui évite les doublons et les ressaisies entre entités.

### Des droits d'accès par société

Un comptable peut voir toutes les sociétés, un commercial une seule. Les documents d'une société sont invisibles pour qui n'y est pas autorisé.

### Les flux entre sociétés

Quand la société A vend à la société B du même groupe, Odoo peut créer automatiquement, côté B, la commande d'achat et la facture fournisseur correspondantes **[À VÉRIFIER VERSION : règles inter-sociétés disponibles en édition Enterprise ; en Community, le flux est manuel ou via développement]**. Ces flux doivent ensuite être éliminés en consolidation.

### La consolidation

Pour présenter des comptes de groupe, Odoo propose une application de consolidation (périmètre, taux de conversion, éliminations) **[À VÉRIFIER VERSION : Enterprise]**. Beaucoup de PME préfèrent exporter les balances par société vers leur expert-comptable, ce qui fonctionne aussi.

## Ce que le multi-société impose

1. **Un cadrage précis des entités** : lesquelles existent, lesquelles vont naître, ce qui est partagé.
2. **Une discipline sur les fiches** : un contact créé « dans » une société n'est visible que d'elle ; il faut décider des règles.
3. **Des séquences de numérotation par société** : chaque entité a ses factures, obligatoires pour la [facturation électronique](/facturation-electronique-maroc-odoo), avec un préfixe distinct.
4. **Une réflexion sur les stocks** : un entrepôt appartient à une société ; les transferts entre sociétés sont des ventes/achats, pas de simples mouvements. Voir [gestion de stock](/odoo-gestion-stock-maroc).
5. **Une attention aux droits** : qui voit quoi, dès le départ.

## Un exemple concret

**[CHIFFRE À VALIDER — cas NASLI Holding]** : un groupe hôtelier avec plusieurs sociétés, une fonction RH mutualisée et des reportings par entité. Ce que le multi-société a permis : une seule base pour les contacts et les collaborateurs, une comptabilité et des factures par société, des tableaux de bord de groupe. Détails et résultats sur [nos réalisations](/realisations) une fois l'accord du client confirmé.

**[CHIFFRE À VALIDER — cas DHC]** : gestion locative multi-entités **[à préciser]**.

## Multi-société ou plusieurs bases séparées ?

| Critère | Une base multi-société | Une base par société |
|---|---|---|
| Vision groupe | Immédiate | Par exports et rapprochements |
| Données partagées | Natives | Doublons à synchroniser |
| Coût de licence | Utilisateurs comptés une fois **[PRIX ÉDITEUR À VÉRIFIER]** | Utilisateurs comptés par base |
| Indépendance des entités | Moindre : une mise à jour concerne tout le monde | Totale |
| Cession d'une filiale | Extraction à prévoir | Simple |
| Complexité de paramétrage | Plus élevée au départ | Plus faible par base, plus élevée au total |

Pour un groupe de PME sous direction commune, la base unique l'emporte presque toujours. Pour des entités destinées à être cédées ou sans lien opérationnel, des bases séparées se défendent.

## Ce que fait MSL-iTECH

En tant qu'[intégrateur Odoo au Maroc](/integrateur-odoo-maroc), nous cadrons l'architecture multi-société avant tout paramétrage : entités, données partagées, séquences, stocks, droits, consolidation. C'est le sujet d'une séance de cadrage dédiée, gratuite, de 30 minutes. Le devis qui suit précise l'édition et la version nécessaires selon les fonctions attendues.

## Questions fréquentes

**Combien de sociétés peut-on gérer dans une base Odoo ?**
Il n'y a pas de limite fonctionnelle pratique pour une PME ou un groupe de PME ; le dimensionnement se fait au cadrage.

**Faut-il l'édition Enterprise pour le multi-société ?**
Le multi-société de base existe dans les deux éditions ; certaines fonctions avancées (règles inter-sociétés automatiques, consolidation) relèvent de l'édition Enterprise **[À VÉRIFIER VERSION]**.

**Peut-on ajouter une société plus tard ?**
Oui, c'est l'un des intérêts de la base unique. Le paramétrage initial doit toutefois avoir prévu les règles de partage.

**Une filiale à l'étranger peut-elle avoir son propre plan comptable et sa devise ?**
Oui : plan comptable, devise et taxes se règlent par société.

**Multi-agences dans une seule société : ai-je besoin du multi-société ?**
Non. Plusieurs entrepôts, points de vente et la comptabilité analytique par agence suffisent.

---

**Plusieurs sociétés, une seule base ?** [Demandez un devis détaillé sous 48 h](/contact?besoin=erp) ou [réservez un cadrage gratuit](/prendre-rendez-vous).

<!-- JSON-LD à insérer dans le <head> -->
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {"@type": "Article",
     "headline": "Odoo multi-société : gérer plusieurs sociétés, dépôts ou agences dans une seule base",
     "description": "Ce que permet et impose le multi-société Odoo : comptabilité par entité, données partagées, flux inter-sociétés, consolidation.",
     "author": {"@type": "Person", "name": "[Nom du consultant]", "jobTitle": "Consultant Odoo", "url": "https://msl-itech.com/a-propos"},
     "publisher": {"@type": "Organization", "name": "MSL-iTECH", "url": "https://msl-itech.com", "logo": {"@type": "ImageObject", "url": "https://msl-itech.com/logo.png"}},
     "datePublished": "[AAAA-MM-JJ]", "dateModified": "[AAAA-MM-JJ]",
     "mainEntityOfPage": "https://msl-itech.com/blog/odoo-multi-societe", "inLanguage": "fr"},
    {"@type": "BreadcrumbList", "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://msl-itech.com/"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://msl-itech.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "Acheter Odoo", "item": "https://msl-itech.com/odoo-erp"},
      {"@type": "ListItem", "position": 4, "name": "Odoo multi-société"}]},
    {"@type": "FAQPage", "mainEntity": [
      {"@type": "Question", "name": "Combien de sociétés peut-on gérer dans une base Odoo ?", "acceptedAnswer": {"@type": "Answer", "text": "Pas de limite fonctionnelle pratique pour un groupe de PME ; le dimensionnement se fait au cadrage."}},
      {"@type": "Question", "name": "Faut-il l'édition Enterprise pour le multi-société ?", "acceptedAnswer": {"@type": "Answer", "text": "Le multi-société de base existe dans les deux éditions ; les règles inter-sociétés automatiques et la consolidation relèvent de l'édition Enterprise."}},
      {"@type": "Question", "name": "Peut-on ajouter une société plus tard ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui, à condition que les règles de partage aient été prévues au paramétrage initial."}},
      {"@type": "Question", "name": "Multi-agences dans une seule société : ai-je besoin du multi-société ?", "acceptedAnswer": {"@type": "Answer", "text": "Non : plusieurs entrepôts, points de vente et la comptabilité analytique par agence suffisent."}}
    ]}
  ]
}
```
