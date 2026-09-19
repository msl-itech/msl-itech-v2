---
numero: 2
hub: A — Facturation électronique DGI
slug: facture-electronique-maroc-mentions-obligatoires-formats
title: "Facture électronique au Maroc : mentions obligatoires et formats acceptés (UBL, CII, PDF signé)"
metaTitle: "Facture électronique Maroc : mentions obligatoires et formats"
metaDescription: "ICE, IF, RC, TVA détaillée, numérotation continue, format UBL ou CII : la liste complète pour émettre une facture électronique conforme DGI. Guide PME."
motCle: "format facture électronique maroc"
motsCleSecondaires: ["mentions obligatoires facture maroc", "UBL maroc", "facture PDF signée DGI", "CII facture"]
auteur: "[Nom du consultant] — Consultant Odoo, MSL-iTECH"
datePublication: "AAAA-MM-JJ"
dateMiseAJour: "AAAA-MM-JJ"
cta: "Vérifier ma conformité en 2 minutes → /outils/conformite-dgi"
liensInternes:
  - /facturation-electronique-maroc-odoo
  - /blog/facturation-electronique-maroc-qui-quand-que-faire
  - /blog/facturation-electronique-dgi-maroc-2026-pdf-ubl
  - /odoo-finance-comptabilite
  - /outils/conformite-dgi
validation: "RÉGLEMENTAIRE — liste des mentions à contrôler contre l'article 145 du Code Général des Impôts et le décret d'application ; formats à contrôler contre la spécification technique DGI. Vérifier le recouvrement avec l'article existant « Le PDF n'est plus une facture » : garder les deux si les angles restent distincts (celui-ci = référence exhaustive), sinon rediriger l'ancien vers celui-ci."
---

# Facture électronique au Maroc : mentions obligatoires et formats acceptés (UBL, CII, PDF signé)

**Une facture électronique conforme au Maroc doit réunir deux choses : toutes les mentions exigées par le Code Général des Impôts, et un format de fichier structuré accepté par la DGI. Un PDF, même signé, ne remplit que la première condition. Voici la liste de contrôle complète, mention par mention et format par format.**

> **En bref**
> - Les mentions obligatoires sont fixées par le Code Général des Impôts (article 145) **[À SOURCER : version en vigueur]** ; elles ne changent pas avec le passage à l'électronique, mais leur absence bloque désormais la facture au lieu d'être tolérée.
> - Le format « structuré » désigne un fichier de données (XML) que les systèmes peuvent lire automatiquement ; les standards internationaux courants sont UBL et CII. Le format exigé au Maroc est **[À SOURCER : spécification DGI]**.
> - Le PDF reste utile pour l'humain qui lit la facture ; il accompagne le fichier structuré, il ne le remplace pas.
> - La numérotation doit être continue, chronologique et sans trou ; c'est le point de contrôle le plus fréquent.

## Les mentions obligatoires sur une facture au Maroc

La liste ci-dessous reprend les mentions habituellement exigées d'une facture émise par une entreprise marocaine. **Contrôlez-la contre le texte en vigueur avant publication [À SOURCER]** ; ne supprimez aucune ligne sans source.

| Bloc | Mention | Remarque fréquente |
|---|---|---|
| Émetteur | Raison sociale, forme juridique, adresse du siège | Doit correspondre exactement au registre de commerce |
| Émetteur | Identifiant Commun de l'Entreprise (ICE) | 15 chiffres ; mention la plus souvent oubliée sur les factures Word |
| Émetteur | Identifiant Fiscal (IF) | |
| Émetteur | Numéro de registre de commerce (RC) et tribunal | |
| Émetteur | Numéro de taxe professionnelle (TP, ex-patente) | |
| Émetteur | Numéro d'affiliation CNSS | |
| Émetteur | Capital social **[À SOURCER : selon forme juridique]** | |
| Client | Raison sociale ou nom, adresse, ICE du client (entreprise) | L'ICE du client conditionne la déductibilité de la TVA pour lui |
| Facture | Numéro de facture unique, continu et chronologique | Pas de trou, pas de doublon, pas de remise à zéro non justifiée |
| Facture | Date d'émission | |
| Facture | Date de livraison ou de prestation si différente | |
| Lignes | Désignation précise des biens ou services, quantités, prix unitaires hors taxe | « Prestation diverse » est un motif de rejet fréquent |
| Montants | Total hors taxe, taux de TVA appliqué par ligne, montant de TVA par taux, total TTC | Les taux multiples doivent apparaître séparément |
| Montants | Remises, acomptes déjà versés, net à payer | |
| Paiement | Mode et délai de paiement, références bancaires | |
| Mentions particulières | Exonération de TVA avec référence à l'article, autoliquidation, régime particulier **[À SOURCER]** | |

Deux mentions sont, dans notre expérience, à l'origine de la majorité des factures refusées par les clients : l'ICE du client absent ou erroné, et la numérotation qui reprend à 1 chaque mois ou chaque année sans préfixe permettant de garantir l'unicité.

## Ce qu'on appelle un « format structuré »

Un PDF est une **représentation visuelle** : il montre la facture. Un fichier structuré est une **représentation de données** : il dit à une machine « ce document est une facture, émise le [date], par l'entreprise dont l'ICE est [numéro], pour un montant de [montant] avec une TVA de [taux] ». Le second peut être contrôlé, rapproché et comptabilisé automatiquement ; le premier non.

Les deux standards internationaux les plus répandus :

| Standard | Origine | Ce qu'il apporte |
|---|---|---|
| **UBL** (Universal Business Language) | OASIS ; utilisé par le réseau Peppol en Europe | Vocabulaire XML complet pour factures, commandes, avis de livraison |
| **CII** (Cross Industry Invoice) | UN/CEFACT | Alternative XML, utilisée notamment dans les formats hybrides (PDF + XML embarqué) |

Le Maroc **[À SOURCER : format(s) retenu(s), schéma XML publié par la DGI, éventuel format hybride PDF/A-3 + XML]**. Tant que la spécification n'est pas citée, cet article doit indiquer « format en cours de confirmation » plutôt qu'affirmer UBL ou CII.

Notre article [Le PDF n'est plus une facture](/blog/facturation-electronique-dgi-maroc-2026-pdf-ubl) explique pourquoi ce changement de nature est le cœur de la réforme.

## Le PDF signé : utile, mais insuffisant

Une signature électronique garantit **l'intégrité** (le document n'a pas été modifié) et **l'authenticité** (on sait qui l'a émis). Elle ne rend pas le contenu lisible par une machine. Un PDF signé peut donc accompagner la facture structurée, ou servir de « lisible » pour le client, mais il ne constitue pas à lui seul la facture électronique au sens de la réforme. **[À SOURCER : position de la DGI sur la signature électronique et sur le cachet électronique]**

## Transmission et archivage : les deux autres exigences

Émettre un fichier au bon format ne suffit pas :

- **Transmission** : la facture doit parvenir à la DGI et au client par le canal prévu **[À SOURCER : plateforme publique, prestataires agréés, API]**. L'envoi par simple email n'est pas une transmission au sens réglementaire.
- **Archivage** : la facture structurée et son lisible doivent être conservés, intègres et retrouvables, pendant la durée légale **[À SOURCER : durée, généralement exprimée en années à compter de la clôture de l'exercice]**. Un dossier de PDF sur un ordinateur ne garantit ni l'intégrité ni la pérennité.

## Liste de contrôle avant votre première facture électronique

1. Toutes les mentions du tableau ci-dessus sont paramétrées **une fois** dans l'outil (fiche société, fiches clients avec ICE) et non ressaisies à chaque facture.
2. La séquence de numérotation est unique par société, continue, avec un préfixe qui évite tout doublon entre points de vente.
3. Chaque produit ou service a une désignation explicite et un taux de TVA rattaché.
4. L'outil produit le fichier structuré au format exigé **et** le PDF lisible.
5. La transmission est configurée et testée en environnement de test.
6. L'archivage est automatique et la réédition à l'identique d'une facture ancienne fonctionne.

## Ce que fait MSL-iTECH

Dans [Odoo Finance](/odoo-finance-comptabilite), les mentions obligatoires sont portées par la fiche société et les fiches clients, la numérotation par des séquences verrouillées, et le format électronique par la localisation marocaine **[À SOURCER : périmètre exact de la localisation Odoo Maroc et version minimale]**. En tant qu'[intégrateur Odoo officiel au Maroc](/integrateur-odoo-maroc), nous paramétrons ces éléments, reprenons vos clients et produits, et testons la première facture avec vous. Pour savoir où vous en êtes : [simulateur de conformité](/outils/conformite-dgi).

## Questions fréquentes

**L'ICE du client est-il obligatoire sur la facture ?**
Pour une vente à une entreprise, oui : il identifie le client et conditionne pour lui la récupération de la TVA. **[À SOURCER]**

**Puis-je garder mes factures PDF actuelles comme modèle ?**
Comme modèle visuel, oui. Mais le contenu doit désormais provenir d'un outil qui produit aussi le fichier structuré ; le PDF devient un sous-produit, pas la source.

**Une facture avec une mention manquante est-elle nulle ?**
Elle expose à un rejet par le client et à des sanctions lors d'un contrôle **[À SOURCER : régime]**. Dans un système électronique, la mention manquante bloque souvent l'émission elle-même, ce qui est finalement protecteur.

**Que faire d'une facture émise avec une erreur ?**
On ne modifie jamais une facture émise : on émet un avoir (note de crédit) puis une nouvelle facture. L'outil doit gérer ce lien.

**UBL et CII sont-ils compatibles entre eux ?**
Ce sont deux vocabulaires différents pour décrire les mêmes informations ; des convertisseurs existent, mais l'entreprise doit produire celui qu'exige la réglementation de son pays.

---

**Votre facturation contient-elle toutes ces mentions ?** [Vérifiez en 2 minutes](/outils/conformite-dgi) ou [demandez un cadrage gratuit](/prendre-rendez-vous).

<!-- JSON-LD à insérer dans le <head> -->
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Facture électronique au Maroc : mentions obligatoires et formats acceptés (UBL, CII, PDF signé)",
      "description": "Liste complète des mentions obligatoires et des formats structurés pour une facture électronique conforme DGI.",
      "author": {"@type": "Person", "name": "[Nom du consultant]", "jobTitle": "Consultant Odoo", "url": "https://msl-itech.com/a-propos"},
      "publisher": {"@type": "Organization", "name": "MSL-iTECH", "url": "https://msl-itech.com", "logo": {"@type": "ImageObject", "url": "https://msl-itech.com/logo.png"}},
      "datePublished": "[AAAA-MM-JJ]", "dateModified": "[AAAA-MM-JJ]",
      "mainEntityOfPage": "https://msl-itech.com/blog/facture-electronique-maroc-mentions-obligatoires-formats", "inLanguage": "fr"
    },
    {"@type": "BreadcrumbList", "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://msl-itech.com/"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://msl-itech.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "Facturation électronique DGI", "item": "https://msl-itech.com/facturation-electronique-maroc-odoo"},
      {"@type": "ListItem", "position": 4, "name": "Mentions obligatoires et formats acceptés"}]},
    {"@type": "FAQPage", "mainEntity": [
      {"@type": "Question", "name": "L'ICE du client est-il obligatoire sur la facture ?", "acceptedAnswer": {"@type": "Answer", "text": "Pour une vente à une entreprise, oui : il identifie le client et conditionne pour lui la récupération de la TVA."}},
      {"@type": "Question", "name": "Puis-je garder mes factures PDF actuelles comme modèle ?", "acceptedAnswer": {"@type": "Answer", "text": "Comme modèle visuel oui, mais le contenu doit provenir d'un outil qui produit aussi le fichier structuré."}},
      {"@type": "Question", "name": "Que faire d'une facture émise avec une erreur ?", "acceptedAnswer": {"@type": "Answer", "text": "On ne modifie jamais une facture émise : on émet un avoir puis une nouvelle facture."}},
      {"@type": "Question", "name": "UBL et CII sont-ils compatibles entre eux ?", "acceptedAnswer": {"@type": "Answer", "text": "Ce sont deux vocabulaires XML différents pour les mêmes informations ; l'entreprise doit produire celui qu'exige la réglementation de son pays."}}
    ]}
  ]
}
```
