# MSL-iTECH — Cahier de travail webmaster

## Lot 1A — Ticket T11 : assainir les schémas JSON-LD

Version 1 du 18 septembre 2026 · Rôle : webmaster · Effort estimé : 3 h · Dépend de : T2 clos (canonical corrigée, description /integrateur-odoo-maroc raccourcie)

Ce ticket complète le cahier de travail webmaster Lot 1 du 12/09/2026. Il naît du relevé du &lt;head&gt; rendu des 7 pages du T2, effectué le 18/09/2026 sur la préversion fix-t22-arbitrage. Convention inchangée : **\[À VÉRIFIER\]** signale un point que le webmaster contrôle dans le code avant d'agir.

## 1\. Constat

Relevé des schémas déclarés, page par page :

| **Page**                                                  | **Schémas trouvés dans le &lt;head&gt; rendu**                                           |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| /integrateur-odoo-maroc                                   | Organization, ProfessionalService \| FAQPage + LocalBusiness + BreadcrumbList + Service  |
| /entreprise-multi-sites                                   | Organization, ProfessionalService \| FAQPage + LocalBusiness + BreadcrumbList            |
| /odoo-finance-comptabilite                                | Organization, ProfessionalService \| FAQPage + LocalBusiness + BreadcrumbList + Service  |
| /outils/comparateur-sage-odoo                             | Organization, ProfessionalService \| **LocalBusiness + BreadcrumbList**                  |
| /blog/facturation-electronique-obligatoire-maroc-2026-erp | Organization, ProfessionalService \| Article \| FAQPage + LocalBusiness + BreadcrumbList |
| /blog/facturation-electronique-dgi-maroc-2026-pdf-ubl     | Organization, ProfessionalService \| Article \| FAQPage + LocalBusiness + BreadcrumbList |
| /blog/cout-erp-odoo-maroc-2026                            | Organization, ProfessionalService \| Article \| FAQPage + LocalBusiness + BreadcrumbList |

Trois problèmes en découlent.

### Problème 1 — FAQPage absent sur le comparateur

/outils/comparateur-sage-odoo est la seule des 7 pages sans FAQPage. Le commit b16de44 en donne la cause : son appel useProductSeo ne passe ni faqs ni ldId, contrairement aux pages Finance et MultiSites.

### Problème 2 — LocalBusiness déclaré partout

Un schéma décrit le contenu principal de la page. Un article sur le prix d'Odoo n'est pas un établissement commercial. Ce n'est pas une pénalité, mais cela brouille la compréhension de l'entité et affaiblit les pages où LocalBusiness a un sens réel : accueil, contact, pages villes.

### Problème 3 — Trois entités concurrentes pour une seule société

Sur chaque page coexistent Organization et ProfessionalService (issus de la coquille index.html) et LocalBusiness (ajouté par le hook). Les trois se recouvrent — ProfessionalService est un sous-type de LocalBusiness, lui-même sous-type d'Organization — sans aucun lien entre eux. Pour un moteur, cela ressemble à trois entreprises distinctes plutôt qu'à une seule.

C'est la même cause racine que la canonical en double relevée au T2 : la coquille statique déclare, le hook ajoute, personne ne remplace.

## 2\. Spécification

### 2.1 — Un nœud d'entité unique et central

Déclarer **une seule fois** la société, avec le type le plus précis et un identifiant stable :

{  
"@context": "<https://schema.org>",  
"@type": "ProfessionalService",  
"@id": "<https://msl-itech.com/#organization>",  
"name": "MSL-iTECH",  
"url": "<https://msl-itech.com>",  
"logo": "<https://msl-itech.com/logo.png>",  
"image": "<https://msl-itech.com/og-default.jpg>",  
"telephone": "\[À VÉRIFIER : numéro affiché sur /contact\]",  
"email": "\[À VÉRIFIER\]",  
"address": {  
"@type": "PostalAddress",  
"streetAddress": "\[À VÉRIFIER : adresse exacte de /contact\]",  
"addressLocality": "Marrakech",  
"addressCountry": "MA"  
},  
"areaServed": \[  
{"@type": "Country", "name": "Maroc"},  
{"@type": "Country", "name": "Belgique"},  
{"@type": "Country", "name": "Canada"}  
\],  
"sameAs": \[  
"\[À VÉRIFIER : URL exacte de la fiche odoo.com/partners\]",  
"\[À VÉRIFIER : LinkedIn, autres réseaux\]"  
\]  
}

Supprimer en conséquence les déclarations concurrentes Organization et LocalBusiness de la coquille index.html.

### 2.2 — Les autres schémas référencent ce nœud

Aucun autre schéma ne redéclare la société. Ils la référencent par son identifiant :

"publisher": { "@id": "<https://msl-itech.com/#organization>" }

"provider": { "@id": "<https://msl-itech.com/#organization>" }

C'est le mécanisme standard de schema.org : une entité, plusieurs références.

### 2.3 — Matrice par type de page

| **Type de page**                                                                                        | **Schémas attendus**                                                        | **Remarque**                                 |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------- |
| Accueil, /contact, pages villes (Casablanca, Marrakech…)                                                | ProfessionalService complet + BreadcrumbList + FAQPage si la page a une FAQ | Seules pages où l'entité complète a sa place |
| Pages service et module (/odoo-finance-comptabilite, /entreprise-multi-sites, /integrateur-odoo-maroc…) | Service + BreadcrumbList + FAQPage · provider → @id                         | Pas de LocalBusiness                         |
| Outils (/outils/\*)                                                                                     | WebApplication ou SoftwareApplication + BreadcrumbList + FAQPage            | Pas de LocalBusiness                         |
| Articles de blog                                                                                        | Article + BreadcrumbList + FAQPage · publisher → @id · author renseigné     | Pas de LocalBusiness                         |

Cas particulier de /integrateur-odoo-maroc : c'est une page de service à forte dimension locale. Elle porte Service et peut porter en plus LocalBusiness si la décision est prise de la relier à la fiche Google Business Profile. **À trancher avec la direction au moment du T3** ; par défaut, Service seul.

### 2.4 — FAQ du comparateur

Passer faqs et ldId dans l'appel useProductSeo de ComparateurSageOdooPage.tsx, sur le modèle des pages Finance et MultiSites. Quatre à six questions tirées du contenu déjà présent sur la page, sans en inventer.

### 2.5 — Champs obligatoires des articles

Les trois articles doivent porter, dans leur nœud Article : headline, description, author (type Person, avec name, jobTitle et url vers /a-propos), publisher référencé par @id, datePublished, dateModified, mainEntityOfPage, inLanguage: "fr".

**\[À VÉRIFIER\]** : le champ author est-il alimenté aujourd'hui ? Le relevé ne le montre pas. S'il est absent ou générique, il faut un nom de personne réel — c'est un signal d'expertise pour Google comme pour les moteurs de réponse.

## 3\. Critères d'acceptation

1. Chaque page valide sans erreur dans le validateur schema.org (validator.schema.org) et dans le test des résultats enrichis de Google.
2. Une seule entité société par page, portant l'identifiant <https://msl-itech.com/#organization>.
3. ProfessionalService complet uniquement sur l'accueil, /contact et les pages villes.
4. Les 3 articles portent Article avec author, datePublished, dateModified et un publisher référencé par @id.
5. /outils/comparateur-sage-odoo porte un FAQPage.
6. Relevé du &lt;head&gt; rendu des 7 pages joint au ticket, produit avec le script de contrôle console.

## 4\. Ce qu'il ne faut pas attendre de ce ticket

Depuis août 2023, Google n'affiche plus les accordéons FAQ dans ses résultats de recherche, sauf pour les sites gouvernementaux et de santé. Le FAQPage ne produira donc **aucun résultat enrichi visible** en SERP.

Il reste utile pour une autre raison, qui est celle de notre stratégie : les moteurs de réponse — ChatGPT, Perplexity, Google AI Overviews — lisent ces blocs question-réponse structurés pour construire leurs réponses. C'est un pilier du volet GEO du plan d'acquisition. Le ticket garde tout son sens, mais son effet se mesurera sur les citations par les IA, pas sur l'apparence des résultats Google.

De la même façon, l'assainissement de l'entité ne fera pas remonter une page de la position 41 à la première page. Il rend l'entreprise compréhensible et citable ; le classement, lui, dépend du T1, du T3 et du contenu.

## 5\. Livrables attendus

- Commit unique, message : T11 — assainissement JSON-LD.
- Relevé du &lt;head&gt; rendu des 7 pages, avant et après.
- Captures des deux validateurs pour 3 pages représentatives : une page service, un article, le comparateur.
- Liste des points **\[À VÉRIFIER\]** renseignés, avec leurs valeurs.