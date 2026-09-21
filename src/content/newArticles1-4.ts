import type { BlogPost } from "./blogPosts";

export const newArticles1to4: BlogPost[] = [
  {
    slug: "facturation-electronique-maroc-qui-quand-que-faire",
    title:
      "Facturation électronique au Maroc : qui est concerné, à quelle date, que faire",
    metaTitle:
      "Facturation électronique Maroc : qui est concerné, quand, que faire",
    metaDescription:
      "Obligation DGI : entreprises concernées, calendrier, formats acceptés et méthode pour basculer sans arrêter votre activité. Vérifiez votre cas en 2 min.",
    noIndex: true,
    excerpt:
      "La facturation électronique devient obligatoire au Maroc par étapes. Ce guide vous dit qui est concerné, à quelle date, et ce que vous devez changer concrètement dans votre façon de facturer.",
    category: "Conformité & DGI",
    region: "MA",
    readingTime: "10 min",
    publishedAt: "2026-09-15",
    author: "Équipe MSL-iTECH",
    intent: "Informationnel · Top-funnel",
    relatedPath: "/contact",
    relatedLabel: "Vérifier ma conformité",
    faqs: [
      {
        q: "La facturation électronique concerne-t-elle les ventes aux particuliers ?",
        a: "Pas dans un premier temps. La DGI a indiqué que la première phase du dispositif concernera les échanges B2B, c'est-à-dire les transactions entre entreprises. Les ventes aux particuliers (B2C) ne sont pas prévues dans cette première étape et devraient être traitées ultérieurement, après le déploiement du B2B.",
      },
      {
        q: "Un PDF signé électroniquement est-il une facture électronique ?",
        a: "Pas à lui seul dans le dispositif présenté par la DGI. Un PDF est principalement une représentation visuelle du document, tandis que la future facture électronique reposera sur des données structurées directement interprétables par les systèmes informatiques. La DGI a annoncé un format structuré UBL, associé à une signature électronique qualifiée. La signature permet notamment de garantir l'authenticité et l'intégrité du document, mais elle ne transforme pas à elle seule un PDF classique en fichier UBL structuré.",
      },
      {
        q: "Faut-il changer de logiciel de comptabilité ?",
        a: "Pas nécessairement. La DGI a indiqué vouloir permettre aux entreprises de conserver leurs systèmes existants lorsqu'ils peuvent être interfacés avec le futur dispositif. Pour les entreprises équipées d'un ERP, un mécanisme d'échange de données est prévu. Pour les TPE et PME ne disposant pas d'un système adapté, la DGI a également annoncé une interface web permettant de saisir et d'émettre les factures électroniques sans installer un ERP. La bonne question est donc moins « dois-je changer de logiciel ? » que : mon outil actuel pourra-t-il produire les données exigées et communiquer avec le dispositif retenu par la DGI ?",
      },
      {
        q: "Combien de temps faut-il pour être prêt ?",
        a: "Cela dépend de votre situation actuelle. Pour une PME qui passe de Word ou Excel à un outil de facturation structuré sur un périmètre limité à la facturation, il est prudent de prévoir plusieurs semaines entre le cadrage, la préparation des données, le paramétrage, les tests, la formation et la mise en production. Un projet comprenant également les stocks, plusieurs sociétés, une migration comptable ou des développements spécifiques demandera généralement davantage de préparation.",
      },
      {
        q: "Que se passe-t-il pour les factures émises avant la date d'obligation ?",
        a: "Le calendrier précis et les modalités de transition doivent encore être fixés par le texte réglementaire définitif. Le directeur général des impôts a confirmé un déploiement progressif et indiqué qu'un décret devait préciser le calendrier et les modalités opérationnelles. En pratique, continuez à respecter les règles de facturation actuellement applicables jusqu'à l'entrée en vigueur du nouveau dispositif pour votre entreprise.",
      },
      {
        q: "Comment vérifier rapidement ma situation ?",
        a: "Utilisez notre simulateur de conformité DGI : six questions permettent d'identifier votre niveau de préparation et les principaux points à traiter avant le passage à la facturation électronique. Vous pouvez ensuite recevoir votre plan d'action par e-mail.",
      },
    ],
    cta: {
      title: "Vérifier ma conformité en 2 minutes",
      subtitle:
        "Répondez à six questions pour connaître votre échéance, votre score de conformité et votre plan d'action.",
    },
    body: [
      {
        type: "p",
        text: "La facturation électronique se prépare au Maroc. Son principe est déjà inscrit dans le Code Général des Impôts, et la Direction Générale des Impôts a annoncé un déploiement progressif à partir de 2026.",
      },
      {
        type: "p",
        text: "À ce stade, toutefois, il faut distinguer le cadre légal existant du calendrier opérationnel : les dates précises d'entrée en obligation, les seuils de chiffre d'affaires et les différentes vagues de déploiement doivent encore être confirmés par les textes réglementaires applicables.",
      },
      {
        type: "p",
        text: "Le dispositif annoncé commencera par les échanges entre entreprises (B2B), avec un déploiement progressif commençant par les grandes entreprises avant de s'étendre aux PME et TPE. Le B2C n'est pas prévu dans la première phase.",
      },
      {
        type: "p",
        text: "En pratique, une entreprise qui facture aujourd'hui avec Word, Excel, un logiciel ancien ou un carnet de factures devra vérifier si son organisation peut s'intégrer au futur dispositif. Cela ne signifie pas nécessairement acheter un ERP : la DGI a notamment annoncé la mise à disposition d'une interface web destinée aux TPE et PME.",
      },
      {
        type: "p",
        text: "Pour évaluer votre niveau de préparation, vous pouvez utiliser notre simulateur de conformité.",
      },
      {
        type: "h2",
        text: "Qu'est-ce que la facturation électronique au sens du dispositif annoncé par la DGI ?",
      },
      {
        type: "p",
        text: "Une facture électronique ne se résume pas à un PDF envoyé par e-mail.",
      },
      {
        type: "p",
        text: "Le dispositif présenté par la DGI repose sur une facture créée sous forme structurée, permettant à un système informatique de lire directement les informations qu'elle contient : émetteur, client, date, montants, TVA, lignes de facturation et autres données obligatoires.",
      },
      {
        type: "p",
        text: "Le directeur général des impôts a indiqué en avril 2026 que le format retenu serait basé sur UBL, un standard international utilisant une structure XML. Les spécifications techniques détaillées du profil marocain devront toutefois être confirmées par la documentation technique officielle.",
      },
      {
        type: "p",
        text: "Trois idées sont à retenir.",
      },
      {
        type: "ul",
        items: [
          "Le format change. Un PDF classique reste principalement une représentation visuelle de la facture. Le futur dispositif annoncé repose sur des données structurées directement exploitables par les systèmes informatiques.",
          "La transmission sera encadrée. Selon le schéma présenté par la DGI, la facture transitera par les systèmes de l'administration et, à terme, éventuellement par des prestataires de services certifiés. La DGI a également annoncé une interface web pour les petites structures et un système d'interfaçage destiné notamment aux ERP.",
          "L'archivage reste une obligation. Les factures et documents comptables doivent déjà être conservés pendant la durée légale applicable. Les modalités techniques spécifiques d'archivage des futures factures électroniques devront être précisées par les textes et spécifications du dispositif.",
        ],
      },
      {
        type: "h2",
        text: "Qui est concerné, et à partir de quand ?",
      },
      {
        type: "p",
        text: "La DGI a annoncé que le premier périmètre concernerait les transactions B2B, c'est-à-dire les factures échangées entre entreprises.",
      },
      {
        type: "p",
        text: "Le déploiement sera progressif : les grandes entreprises doivent être intégrées en premier, puis le dispositif sera progressivement étendu aux PME et TPE.",
      },
      {
        type: "p",
        text: "En revanche, il serait prématuré de publier aujourd'hui un tableau donnant des seuils de chiffre d'affaires et des dates précises par catégorie d'entreprise tant que ces éléments ne sont pas fixés dans un texte réglementaire publié.",
      },
      {
        type: "p",
        text: "La bonne démarche consiste donc à surveiller la publication du calendrier officiel et à préparer dès maintenant les données et processus qui seront nécessaires : identification correcte des entreprises et clients, numérotation des factures, TVA, données produits et services, conditions de paiement et capacité du logiciel à échanger des données structurées.",
      },
      {
        type: "p",
        text: "La réception des factures sera également intégrée au futur circuit : dans le fonctionnement présenté par la DGI, la facture validée est transmise au client à travers le dispositif, avec une date de réception traçable.",
      },
      {
        type: "h2",
        text: "Que se passe-t-il si vous n'êtes pas prêt ?",
      },
      {
        type: "p",
        text: "À ce stade, il ne faut pas annoncer de montant d'amende, de perte automatique du droit à déduction de TVA ou d'autre sanction spécifique à la future facturation électronique sans disposer du texte réglementaire qui les établit.",
      },
      {
        type: "p",
        text: "Le risque opérationnel est cependant réel : lorsqu'une entreprise entrera dans le périmètre obligatoire, son processus de facturation devra pouvoir fonctionner avec le dispositif défini par la DGI.",
      },
      {
        type: "p",
        text: "L'enjeu est donc de se préparer suffisamment tôt pour adapter les données, le logiciel et les processus internes, sans attendre la date d'entrée en obligation.",
      },
      {
        type: "h2",
        text: "Comment savoir si votre facturation actuelle est conforme ?",
      },
      {
        type: "p",
        text: "Posez-vous quatre questions :",
      },
      {
        type: "ul",
        items: [
          "Votre outil produit-il un fichier structuré (XML de type UBL ou CII, ou format imposé par la DGI) en plus du PDF ? Si vous facturez sur Word, Excel ou un carnet, la réponse est non.",
          "Toutes les mentions obligatoires figurent-elles sur chaque facture — ICE, identifiant fiscal, registre de commerce, taxe professionnelle, CNSS, numérotation continue, TVA détaillée ?",
          "Votre numérotation est-elle continue et sans trou, y compris entre vos différents points de vente ou sociétés ?",
          "Pouvez-vous retrouver et rééditer une facture émise il y a plusieurs années, à l'identique ?",
        ],
      },
      {
        type: "p",
        text: "Une seule réponse négative signifie qu'un chantier est à prévoir. Le simulateur de conformité DGI formalise ces questions et vous donne un plan d'action en deux minutes.",
      },
      {
        type: "h2",
        text: "Que faire, concrètement, selon votre situation",
      },
      {
        type: "h3",
        text: "Vous facturez sur Word, Excel ou carnet à souches",
      },
      {
        type: "p",
        text: "C'est la situation la plus fréquente dans les TPE et petites PME, et la plus urgente. Il n'existe pas de « module » à ajouter à Word : il faut un outil de facturation qui produise le format structuré, gère la numérotation et archive. La bonne nouvelle : la bascule peut se faire en quelques semaines si elle est bien cadrée. Nous décrivons la méthode dans Passer de Word, Excel ou du carnet à souches à la facture électronique sans arrêter l'activité.",
      },
      {
        type: "h3",
        text: "Vous utilisez un logiciel de facturation ou de comptabilité local",
      },
      {
        type: "p",
        text: "Interrogez votre éditeur par écrit : quel format produit-il, à quelle date la mise à jour est-elle disponible, à quel coût, et prend-il en charge la transmission et l'archivage ? Gardez la réponse : c'est votre preuve de diligence. Si la réponse est floue ou tardive, c'est le moment d'évaluer une alternative ; notre comparatif Odoo vs Sage donne une grille de lecture.",
      },
      {
        type: "h3",
        text: "Vous êtes déjà sur un ERP comme Odoo",
      },
      {
        type: "p",
        text: "Si vous utilisez déjà Odoo, commencez par vérifier votre version, votre localisation fiscale marocaine et la qualité de vos données de facturation : informations légales de l'entreprise, ICE des clients, taxes, séquences de numérotation, produits et conditions de paiement.",
      },
      {
        type: "p",
        text: "Odoo dispose d'une localisation fiscale officielle pour le Maroc. En revanche, l'intégration au futur dispositif de facturation électronique de la DGI devra être vérifiée lorsque les spécifications techniques définitives et les fonctionnalités correspondantes seront disponibles.",
      },
      {
        type: "p",
        text: "Selon votre installation, la mise en conformité pourra nécessiter une mise à jour d'Odoo, l'activation de fonctionnalités supplémentaires, l'installation d'un connecteur ou une adaptation spécifique. Le périmètre exact ne pourra être déterminé qu'une fois les exigences techniques de la DGI définitivement publiées.",
      },
      {
        type: "h2",
        text: "Le calendrier d'un projet de mise en conformité",
      },
      {
        type: "p",
        text: "Pour un projet limité principalement à la facturation, nous pouvons retenir comme base de planification les étapes suivantes :",
      },
      {
        type: "ul",
        items: [
          "Cadrage initial : analyse des processus actuels et des données à préparer.",
          "Choix du périmètre et préparation : généralement 1 à 2 semaines.",
          "Paramétrage et reprise des données : généralement 2 à 4 semaines.",
          "Tests et formation : environ 1 semaine.",
          "Mise en production : bascule organisée à une date définie avec l'entreprise.",
        ],
      },
      {
        type: "p",
        text: "Ces délais constituent des ordres de grandeur de planification et non un engagement de délai. Ils dépendent notamment de la qualité des données existantes, des personnalisations nécessaires, de la disponibilité des équipes et du nombre de processus concernés.",
      },
      {
        type: "p",
        text: "Un projet limité à la facturation sera généralement plus simple qu'un projet comprenant également les stocks, plusieurs sociétés, des développements spécifiques ou la migration complète d'un ancien système.",
      },
      {
        type: "h2",
        text: "Ce que fait MSL-iTECH",
      },
      {
        type: "p",
        text: "MSL-iTECH est [partenaire Odoo au Maroc](/integrateur-odoo-maroc), basé à Marrakech.",
      },
      {
        type: "p",
        text: "Pour préparer votre entreprise à la facturation électronique, nous intervenons en trois étapes : un premier cadrage pour analyser votre organisation et votre périmètre, une proposition détaillée adaptée aux fonctionnalités réellement nécessaires, puis le déploiement et le paramétrage d'Odoo avec reprise des données utiles, tests et formation des utilisateurs.",
      },
      {
        type: "p",
        text: "Lorsque les spécifications techniques définitives de la DGI seront disponibles, nous pourrons également déterminer précisément les adaptations nécessaires pour assurer la compatibilité de votre environnement Odoo avec le dispositif marocain.",
      },
      {
        type: "p",
        text: "Le budget dépend du nombre d'utilisateurs, du périmètre fonctionnel, des données à reprendre et des éventuelles personnalisations. Les principaux postes de coût sont détaillés dans [Combien coûte un ERP Odoo au Maroc](/blog/combien-coute-erp-odoo-maroc).",
      },
    ],
  },
  {
    slug: "facture-electronique-maroc-mentions-obligatoires-formats",
    title:
      "Facture électronique au Maroc : mentions obligatoires et formats acceptés (UBL, CII, PDF signé)",
    metaTitle:
      "Facture électronique Maroc : mentions obligatoires et formats",
    metaDescription:
      "ICE, IF, RC, TVA détaillée, numérotation continue, format UBL ou CII : la liste complète pour émettre une facture électronique conforme DGI. Guide PME.",
    image: "/20fe9f6c-cc2b-497a-96a8-beae034186e5.png",
    noIndex: true,
    excerpt:
      "Une facture électronique conforme au Maroc doit réunir toutes les mentions exigées par le Code Général des Impôts et un format de fichier structuré accepté par la DGI. Voici la liste de contrôle complète.",
    category: "Conformité & DGI",
    region: "MA",
    readingTime: "8 min",
    publishedAt: "2026-09-15",
    author: "Équipe MSL-iTECH",
    intent: "Informationnel · Référence",
    relatedPath: "/contact",
    relatedLabel: "Vérifier ma conformité",
    faqs: [
      {
        q: "L'ICE du client est-il obligatoire sur la facture ?",
        a: "Pour une vente à une entreprise, oui : l'ICE (Identifiant Commun de l'Entreprise) doit figurer sur la facture. Il identifie le client et conditionne pour lui la récupération de la TVA. Cette obligation découle des dispositions fiscales en vigueur au Maroc.",
      },
      {
        q: "Puis-je garder mes factures PDF actuelles comme modèle ?",
        a: "Comme modèle visuel, oui. Mais le contenu doit désormais provenir d'un outil qui produit aussi le fichier structuré ; le PDF devient un sous-produit, pas la source.",
      },
      {
        q: "Une facture avec une mention manquante est-elle nulle ?",
        a: "Elle expose à un rejet par le client et à des sanctions lors d'un contrôle fiscal (amende prévue par le CGI en cas de facturation non conforme). Dans un système électronique, la mention manquante bloque souvent l'émission elle-même, ce qui est finalement protecteur.",
      },
      {
        q: "Que faire d'une facture émise avec une erreur ?",
        a: "On ne modifie jamais une facture émise : on émet un avoir (note de crédit) puis une nouvelle facture. L'outil doit gérer ce lien.",
      },
      {
        q: "UBL et CII sont-ils compatibles entre eux ?",
        a: "Ce sont deux vocabulaires différents pour décrire les mêmes informations ; des convertisseurs existent, mais l'entreprise doit produire celui qu'exige la réglementation de son pays.",
      },
    ],
    cta: {
      title: "Vérifier ma conformité en 2 minutes",
      subtitle:
        "Répondez à six questions pour connaître votre score de conformité et votre plan d'action.",
    },
    body: [
      {
        type: "p",
        text: "Il faut distinguer les règles de facturation déjà applicables au Maroc de celles qui accompagneront la future facturation électronique.",
      },
      {
        type: "p",
        text: "Aujourd'hui, toute facture doit respecter les mentions et règles prévues notamment par l'article 145 du Code Général des Impôts : identification des parties, identifiants fiscaux requis, date de l'opération, désignation et quantité des biens ou services, prix, TVA lorsqu'elle est applicable, références et mode de paiement, ainsi qu'une numérotation établie selon une série continue.",
      },
      {
        type: "p",
        text: "La réforme de la facturation électronique ajoutera une dimension technique à ces obligations. Selon le dispositif présenté par la Direction Générale des Impôts, la facture électronique ne sera plus simplement un document PDF : elle prendra la forme d'un fichier structuré, lisible automatiquement par les systèmes informatiques, et transitera par le dispositif de validation prévu par la DGI.",
      },
      {
        type: "p",
        text: "Le directeur général des impôts a indiqué en avril 2026 que le format retenu serait basé sur le standard UBL, au format XML. À ce stade, il convient toutefois d'attendre la publication des textes d'application et des spécifications techniques définitives avant d'affirmer une version précise du standard, un schéma XML particulier ou les modalités exactes de transmission.",
      },
      {
        type: "p",
        text: "Un PDF restera utile comme représentation lisible de la facture pour l'utilisateur, mais dans le futur dispositif de facturation électronique annoncé par la DGI, il ne remplacera pas le fichier structuré constituant la facture électronique.",
      },
      {
        type: "h3",
        text: "En bref",
      },
      {
        type: "p",
        text: "Les mentions obligatoires sont principalement encadrées par l'article 145 du Code Général des Impôts. Le passage à la facturation électronique ne supprime pas ces informations : elles devront être correctement structurées afin de pouvoir être contrôlées automatiquement.",
      },
      {
        type: "p",
        text: "Le format annoncé par la DGI est l'UBL, un standard international basé sur XML. Les spécifications techniques définitives du profil marocain et les modalités précises de transmission doivent cependant être confirmées par les textes et documents techniques officiels.",
      },
      {
        type: "p",
        text: "Enfin, la numérotation des factures doit respecter une série continue. Il faut donc configurer le logiciel de manière à garantir l'unicité et la continuité des numéros et à éviter la suppression de factures déjà validées.",
      },
      {
        type: "h2",
        text: "Les mentions obligatoires sur une facture au Maroc",
      },
      {
        type: "p",
        text: "Pour une entreprise marocaine, les mentions d'une facture résultent principalement de l'article 145 du Code Général des Impôts, complété par les règles commerciales et, pour les sociétés, par les dispositions propres à leur forme juridique.",
      },
      {
        type: "p",
        text: "La liste ci-dessous vise principalement les factures B2B émises par une société commerciale. Certaines situations particulières peuvent imposer des mentions supplémentaires.",
      },
      {
        type: "ul",
        items: [
          "Émetteur — Dénomination ou raison sociale, forme juridique et adresse du siège. Ces informations doivent être conformes aux données légales de l'entreprise.",
          "Émetteur — Identifiant Commun de l'Entreprise (ICE). L'ICE comporte 15 positions et doit figurer sur les factures émises par l'entreprise.",
          "Émetteur — Identifiant Fiscal (IF).",
          "Émetteur — Numéro d'article à la taxe professionnelle (TP).",
          "Émetteur — Registre de commerce (RC). Pour les sociétés commerciales concernées, le numéro d'immatriculation au registre du commerce doit apparaître sur les factures.",
          "Émetteur — Capital social. Il doit notamment figurer sur les factures des SARL et des SA, conformément aux règles propres à ces formes de société.",
          "Client — Nom, prénom ou raison sociale et adresse.",
          "Client — Identifiant Commun de l'Entreprise (ICE). L'article 145 du CGI prévoit expressément l'ICE de l'acheteur ou du client parmi les informations à reprendre sur la facture.",
          "Facture — Numéro appartenant à une série continue. Les factures doivent être pré-numérotées et tirées d'une série continue ou être éditées par un système informatique selon une série continue. Le système doit notamment éviter les doublons et permettre de justifier la continuité de la numérotation.",
          "Facture — Date de l'opération. Il convient également d'indiquer, lorsque cela est pertinent, la date de livraison.",
          "Lignes — Nature précise des biens, travaux ou services, quantités et prix. La facture doit permettre d'identifier suffisamment l'opération réalisée.",
          "Lignes — Prix unitaires. Les règles commerciales prévoient notamment l'indication des prix unitaires hors taxes ou toutes taxes comprises.",
          "Réductions — Remises ou réductions accordées, lorsqu'elles sont déterminables au moment de la vente ou de la prestation.",
          "TVA — Montant de la TVA présenté distinctement. Lorsque l'opération est exonérée ou réalisée sous régime suspensif, la mention de la TVA est remplacée par l'indication du régime applicable.",
          "Montants — Total hors taxe, TVA et total toutes taxes comprises. Cette présentation permet de matérialiser clairement la base imposable, la taxe et le montant final de la facture.",
          "Paiement — Références et mode de paiement. Les modalités de paiement doivent également être indiquées. Les coordonnées bancaires peuvent être ajoutées lorsqu'elles sont utiles au règlement, mais ne constituent pas à elles seules une mention fiscale obligatoire générale.",
          "Acomptes ou réductions déjà imputés — le cas échéant. Lorsqu'un acompte, une remise ou un autre élément modifie le montant restant dû, il convient de le faire apparaître afin que le net à payer soit identifiable.",
          "Mentions particulières — selon le régime fiscal applicable. Une opération exonérée ou réalisée sous régime suspensif doit porter la mention correspondante. D'autres régimes fiscaux peuvent imposer des mentions spécifiques selon la nature de l'opération.",
        ],
      },
      {
        type: "p",
        text: "Deux mentions sont, dans notre expérience, à l'origine de la majorité des factures refusées par les clients : l'ICE du client absent ou erroné, et la numérotation qui reprend à 1 chaque mois ou chaque année sans préfixe permettant de garantir l'unicité.",
      },
      {
        type: "h2",
        text: "Ce qu'on appelle un « format structuré »",
      },
      {
        type: "p",
        text: "Un PDF et un fichier structuré peuvent représenter la même facture, mais ils ne transportent pas l'information de la même manière.",
      },
      {
        type: "p",
        text: "Un PDF est avant tout une représentation visuelle : il permet à une personne de lire la facture. Un logiciel peut tenter d'en extraire automatiquement les informations grâce à l'OCR ou à d'autres technologies, mais les données ne sont pas nécessairement organisées selon une structure normalisée.",
      },
      {
        type: "p",
        text: "Un fichier structuré contient directement les données de la facture dans des champs identifiés. Il peut, par exemple, indiquer à un système informatique : « ceci est une facture », « voici sa date », « voici l'ICE de l'émetteur », « voici son montant hors taxe », « voici le taux et le montant de TVA ».",
      },
      {
        type: "p",
        text: "Cette structure permet aux logiciels de contrôler, rapprocher, transmettre et comptabiliser les données beaucoup plus facilement, sans devoir interpréter la présentation visuelle du document.",
      },
      {
        type: "h3",
        text: "Deux standards internationaux à connaître",
      },
      {
        type: "p",
        text: "UBL (Universal Business Language) est un standard développé par OASIS. Il repose sur XML et couvre de nombreux documents commerciaux : factures, commandes, avoirs, avis d'expédition et autres échanges entre entreprises. Il est notamment utilisé dans l'écosystème européen Peppol pour les échanges structurés de factures.",
      },
      {
        type: "p",
        text: "CII (Cross Industry Invoice) est un standard de facture structurée développé par l'UN/CEFACT. Il constitue une autre syntaxe internationale permettant de représenter les données d'une facture sous forme structurée. CII est notamment utilisé dans Factur-X, un format hybride qui associe une représentation PDF/A-3 lisible par l'utilisateur à un fichier XML structuré embarqué dans le document.",
      },
      {
        type: "h3",
        text: "Et au Maroc ?",
      },
      {
        type: "p",
        text: "En avril 2026, le directeur général des impôts a indiqué que le futur dispositif marocain de facturation électronique reposera sur un format structuré UBL, associé à une signature électronique et à un mécanisme de validation des factures.",
      },
      {
        type: "p",
        text: "À ce stade, il faut toutefois distinguer cette orientation annoncée des spécifications techniques définitives. Le profil UBL exact retenu par le Maroc, son schéma XML, les règles de validation, les champs obligatoires, les versions acceptées et les modalités techniques de transmission devront être confirmés par les documents techniques officiels de la DGI.",
      },
      {
        type: "p",
        text: "Aucune source officielle consultée ne permet, à ce jour, d'affirmer que CII sera également accepté ou qu'un format hybride PDF/A-3 + XML sera obligatoire au Maroc. Il est donc prématuré de présenter UBL 2.1, CII ou PDF/A-3 comme des spécifications définitivement imposées par la DGI.",
      },
      {
        type: "p",
        text: "Le format structuré UBL a été annoncé par la DGI. Les spécifications techniques définitives du profil marocain restent à confirmer par la documentation officielle.",
      },
      {
        type: "p",
        text: "Notre article [Le PDF n'est plus une facture](/blog/facturation-electronique-dgi-maroc-2026-pdf-ubl) explique pourquoi ce changement de nature est le cœur de la réforme.",
      },
      {
        type: "h2",
        text: "Le PDF signé : utile, mais différent d'une facture structurée",
      },
      {
        type: "p",
        text: "Une signature électronique permet notamment de vérifier l'origine d'un document et de détecter une modification intervenue après sa signature. Lorsqu'elle est qualifiée, elle apporte un niveau élevé de garantie sur l'identité du signataire et l'intégrité du document.",
      },
      {
        type: "p",
        text: "Mais la signature ne transforme pas, à elle seule, un PDF en facture structurée. Un PDF reste principalement une représentation visuelle destinée à être lue par une personne. Même signé électroniquement, il ne contient pas nécessairement les données de la facture dans les champs normalisés qu'un système informatique peut directement interpréter comme le fait un fichier UBL.",
      },
      {
        type: "p",
        text: "Dans le dispositif présenté par la DGI en avril 2026, la future facture électronique marocaine prendra la forme d'un fichier structuré UBL et sera associée à une signature électronique qualifiée.",
      },
      {
        type: "p",
        text: "Une représentation PDF pourra rester utile pour permettre au client de consulter facilement la facture, mais elle ne devra pas être confondue avec le fichier structuré constituant la facture électronique dans le futur dispositif.",
      },
      {
        type: "p",
        text: "Les modalités techniques définitives — notamment l'utilisation éventuelle d'un cachet électronique pour les personnes morales — devront être confirmées par les textes et spécifications de la DGI.",
      },
      {
        type: "h2",
        text: "Transmission et archivage : deux dimensions supplémentaires",
      },
      {
        type: "p",
        text: "Produire une facture au bon format ne suffira pas. Il faudra également respecter son circuit de transmission et les règles de conservation.",
      },
      {
        type: "h3",
        text: "Transmission",
      },
      {
        type: "p",
        text: "Selon le fonctionnement présenté par la DGI, la facture électronique sera transmise à travers les systèmes prévus par l'administration. Le schéma annoncé est le suivant : fournisseur → facture structurée et signée → système DGI ou prestataire certifié → contrôles et validation → transmission au client.",
      },
      {
        type: "p",
        text: "La DGI a notamment annoncé une interface destinée aux petites et moyennes entreprises ainsi que des mécanismes permettant l'interfaçage avec les ERP. Des prestataires de services certifiés pourront également intervenir dans ce circuit.",
      },
      {
        type: "p",
        text: "Dans ce futur dispositif, l'envoi d'un simple PDF par e-mail ne correspondra donc pas, à lui seul, au circuit réglementaire de transmission de la facture électronique. Les API, protocoles d'échange, conditions de certification des prestataires et modalités techniques définitives devront toutefois être confirmés par la documentation officielle.",
      },
      {
        type: "h3",
        text: "Archivage",
      },
      {
        type: "p",
        text: "Indépendamment de la réforme de la facturation électronique, le Code Général des Impôts impose déjà aux entreprises concernées de conserver pendant dix ans les doubles des factures de vente ainsi que les pièces et documents comptables nécessaires au contrôle fiscal.",
      },
      {
        type: "p",
        text: "Pour les futures factures électroniques, il faudra donc prévoir un archivage permettant de retrouver durablement les documents et données nécessaires et d'en préserver l'intégrité.",
      },
      {
        type: "p",
        text: "À ce stade, il convient toutefois d'attendre les spécifications définitives de la DGI avant d'affirmer que l'entreprise devra obligatoirement conserver simultanément le fichier structuré UBL et une représentation PDF de chaque facture.",
      },
      {
        type: "p",
        text: "Un simple dossier de PDF stocké sur un ordinateur constitue par ailleurs une méthode fragile : il peut être supprimé, modifié ou perdu. Une politique d'archivage sérieuse doit donc prévoir au minimum des droits d'accès maîtrisés, des sauvegardes et une capacité à retrouver les documents pendant toute leur durée légale de conservation.",
      },
      {
        type: "h2",
        text: "Liste de contrôle avant votre première facture électronique",
      },
      {
        type: "ul",
        items: [
          "Toutes les mentions du tableau ci-dessus sont paramétrées une fois dans l'outil (fiche société, fiches clients avec ICE) et non ressaisies à chaque facture.",
          "La séquence de numérotation est unique par société, continue, avec un préfixe qui évite tout doublon entre points de vente.",
          "Chaque produit ou service a une désignation explicite et un taux de TVA rattaché.",
          "L'outil produit le fichier structuré au format exigé et le PDF lisible.",
          "La transmission est configurée et testée en environnement de test.",
          "L'archivage est automatique et la réédition à l'identique d'une facture ancienne fonctionne.",
        ],
      },
      {
        type: "h2",
        text: "Ce que fait MSL-iTECH",
      },
      {
        type: "p",
        text: "En tant qu'[intégrateur Odoo au Maroc](/integrateur-odoo-maroc), nous paramétrons dans [Odoo Finance](/odoo-finance-comptabilite) les éléments nécessaires à une facturation correctement structurée : informations légales de la société, données fiscales des clients, taxes applicables, séquences de numérotation, modèle de facture, conditions de paiement ainsi que les informations reprises sur les lignes de facturation.",
      },
      {
        type: "p",
        text: "Odoo dispose d'une localisation fiscale officielle pour le Maroc, qui fournit les éléments comptables et fiscaux propres au pays. En revanche, le format technique définitif de la future facture électronique DGI et son canal de transmission devront être intégrés conformément aux spécifications officielles lorsqu'elles seront publiées et disponibles dans Odoo.",
      },
      {
        type: "p",
        text: "En tant que partenaire Odoo Ready au Maroc, MSL-iTECH vous accompagne dans le paramétrage de votre environnement, la reprise de vos clients et produits, la configuration des règles de facturation et les tests avant mise en production.",
      },
      {
        type: "p",
        text: "Pour évaluer votre niveau de préparation à la réforme : [simulateur de conformité](/outils/conformite-dgi).",
      },
    ],
  },
  {
    slug: "passer-facture-electronique-sans-arreter-activite",
    title:
      "Passer de Word, Excel ou du carnet à souches à la facture électronique sans arrêter l'activité",
    metaTitle:
      "De Word/Excel à la facture électronique : méthode en 4 semaines",
    metaDescription:
      "Vous facturez sur Word, Excel ou un carnet ? Voici la méthode que suivent les PME marocaines pour passer à la facture électronique conforme sans interrompre les ventes.",
    image: "/5b8d22e2-df07-49e0-b9da-c56b4f865430.png",
    excerpt:
      "Une PME qui facture sur Word, Excel ou un carnet peut être opérationnelle sur un outil de facturation électronique conforme en quatre à six semaines. Voici la méthode étape par étape.",
    category: "Conformité & DGI",
    region: "MA",
    readingTime: "9 min",
    publishedAt: "2026-09-15",
    author: "Équipe MSL-iTECH",
    intent: "Informationnel · Mid-funnel",
    relatedPath: "/contact",
    relatedLabel: "Recevoir un devis détaillé sous 48 h",
    faqs: [
      {
        q: "Combien de temps faut-il pour passer d'Excel à la facture électronique ?",
        a: "Pour une PME sur le seul périmètre facturation, quatre à six semaines entre le cadrage et la première facture réelle, dont une à deux semaines de mise au propre des données de votre côté.",
      },
      {
        q: "Dois-je arrêter de facturer pendant la transition ?",
        a: "Non. L'ancien système reste actif jusqu'à la bascule ; la semaine de test se fait en parallèle.",
      },
      {
        q: "Que deviennent mes anciennes factures Word ou Excel ?",
        a: "Elles restent valables et doivent être conservées dans leur format d'origine. La nouvelle séquence continue là où l'ancienne s'est arrêtée.",
      },
      {
        q: "Mon comptable externe peut-il continuer à travailler comme avant ?",
        a: "Oui, soit par export périodique des écritures, soit avec un accès direct à l'outil. Cela se définit au paramétrage.",
      },
      {
        q: "Faut-il reprendre tout l'historique dans le nouvel outil ?",
        a: "Pas pour la conformité. Les encours et la continuité de numérotation suffisent au démarrage ; l'historique peut être importé ensuite si vous le souhaitez.",
      },
    ],
    cta: {
      title: "Recevoir un devis détaillé sous 48 h",
      subtitle:
        "Cadrage gratuit de 30 minutes, puis un devis détaillé pour votre bascule vers la facture électronique conforme.",
    },
    body: [
      {
        type: "p",
        text: "Une PME qui facture sur Word, Excel ou un carnet peut être opérationnelle sur un outil de facturation électronique conforme en quatre à six semaines, à condition de traiter le sujet comme un petit projet et non comme un achat de logiciel. Voici la méthode que nous appliquons, étape par étape, avec les pièges qui font perdre du temps.",
      },
      {
        type: "p",
        text: "En bref — Le vrai travail n'est pas le logiciel, c'est la mise au propre de vos données : clients avec ICE, produits avec taux de TVA, numérotation. On ne bascule pas « un lundi matin » : on fait tourner l'ancien et le nouveau système en parallèle sur une courte période, puis on coupe. Le périmètre minimal est la facturation ; ventes, comptabilité et stock peuvent venir ensuite, sur la même base. Le budget dépend de trois choses : le nombre d'utilisateurs, la quantité de données à reprendre et le périmètre. Les fourchettes sont dans [Combien coûte Odoo au Maroc](/blog/cout-erp-odoo-maroc-2026).",
      },
      {
        type: "h2",
        text: "Pourquoi Word et Excel ne peuvent pas être « mis à jour »",
      },
      {
        type: "p",
        text: "Word et Excel produisent des documents, pas des données. Ils ne savent pas : garantir une numérotation continue, rattacher chaque ligne à un taux de TVA, produire un fichier structuré au format exigé, transmettre la facture par le canal réglementaire, ni archiver de façon intègre. Ce que la réforme demande (voir [qui est concerné et quand](/blog/facturation-electronique-maroc-qui-quand-que-faire)) suppose donc un changement d'outil, pas un ajustement de modèle.",
      },
      {
        type: "p",
        text: "Le carnet à souches pose le même problème, avec en plus la ressaisie manuelle en comptabilité, source d'écarts.",
      },
      {
        type: "h2",
        text: "La méthode en cinq étapes",
      },
      {
        type: "h3",
        text: "Étape 1 — Cadrer (une réunion de 30 minutes)",
      },
      {
        type: "p",
        text: "Quatre questions suffisent :",
      },
      {
        type: "ul",
        items: [
          "Combien de factures émettez-vous par mois, et combien de clients actifs avez-vous ?",
          "Qui facture aujourd'hui, et qui devra facturer demain (une personne, plusieurs, plusieurs sites) ?",
          "Votre comptabilité est-elle tenue en interne ou par un cabinet ? Sous quel outil ?",
          "Quelle est votre échéance d'obligation (voir [le calendrier](/blog/facturation-electronique-maroc-qui-quand-que-faire)) ?",
        ],
      },
      {
        type: "p",
        text: "À la sortie, vous savez si le périmètre est « facturation seule » ou « facturation + devis + suivi des paiements », et vous avez une date cible.",
      },
      {
        type: "h3",
        text: "Étape 2 — Mettre les données au propre (1 à 2 semaines, en interne)",
      },
      {
        type: "p",
        text: "C'est l'étape que les entreprises sous-estiment et c'est celle qui conditionne tout le reste.",
      },
      {
        type: "ul",
        items: [
          "Clients — Un fichier unique : raison sociale exacte, adresse, ICE, IF si connu, contact, conditions de paiement. Piège fréquent : le même client saisi trois fois avec trois orthographes.",
          "Produits et services — Une désignation claire par article, unité, prix HT, taux de TVA. Piège fréquent : des lignes « Divers » ou « Prestation » sans détail.",
          "Numérotation — La dernière facture émise, pour que la nouvelle séquence continue sans trou. Piège fréquent : reprendre à 1 dans le nouvel outil.",
          "Encours — La liste des factures non encore payées à la date de bascule. Piège fréquent : les oublier et perdre le suivi des impayés.",
          "Modèle de facture — Logo, mentions légales, coordonnées bancaires. Piège fréquent : mentions manquantes (voir [la liste](/blog/facture-electronique-maroc-mentions-obligatoires-formats)).",
        ],
      },
      {
        type: "p",
        text: "Notre article [Migrer d'Excel vers Odoo sans perdre votre historique](/blog/migration-excel-vers-odoo-maroc-methode) détaille la reprise d'historique lorsqu'elle est souhaitée.",
      },
      {
        type: "h3",
        text: "Étape 3 — Paramétrer l'outil (1 à 2 semaines, avec l'intégrateur)",
      },
      {
        type: "p",
        text: "Dans Odoo, cette étape recouvre notamment la configuration de la fiche société avec les informations légales nécessaires, les taxes applicables, la séquence de numérotation des factures, le modèle de facture, l'import des clients et des produits ainsi que les conditions de paiement.",
      },
      {
        type: "p",
        text: "Elle sert également à préparer les données qui devront être utilisées pour la facturation électronique : identification correcte de l'entreprise et des clients, informations fiscales, références des factures, détail des lignes et TVA. Le format électronique définitif et le canal de transmission vers la DGI devront être configurés conformément aux spécifications techniques officielles lorsqu'elles seront publiées.",
      },
      {
        type: "p",
        text: "Si votre comptabilité est tenue par un cabinet externe, il faut également définir dès cette étape la manière dont il travaillera avec Odoo : export périodique des données, transmission des pièces ou accès direct à la base avec les droits appropriés.",
      },
      {
        type: "h3",
        text: "Étape 4 — Tester en parallèle (1 semaine)",
      },
      {
        type: "p",
        text: "Pendant une semaine, chaque facture réelle est émise dans l'ancien système et saisie dans le nouveau, en environnement de test. On compare : montants, TVA, mentions, numérotation, rendu du PDF, fichier structuré produit. On corrige ce qui manque. C'est aussi la semaine de formation : une demi-journée pour les personnes qui facturent, une heure pour celles qui consultent.",
      },
      {
        type: "h3",
        text: "Étape 5 — Basculer (un jour)",
      },
      {
        type: "p",
        text: "On arrête l'ancien outil à une date fixée, on émet la première facture réelle dans le nouveau, on vérifie la transmission, on archive. Les factures antérieures restent dans leur format d'origine et sont conservées. Pendant un mois, un point hebdomadaire de 15 minutes règle les questions d'usage.",
      },
      {
        type: "h2",
        text: "Le calendrier type",
      },
      {
        type: "ul",
        items: [
          "Semaine 0 — Cadrage, devis (vous + intégrateur).",
          "Semaines 1–2 — Données au propre (vous, avec un modèle de fichier fourni).",
          "Semaines 2–3 — Paramétrage, imports (intégrateur).",
          "Semaine 4 — Tests en parallèle, formation (vous + intégrateur).",
          "Semaine 5 — Bascule (vous).",
        ],
      },
      {
        type: "p",
        text: "Pour une PME de 5 à 30 personnes, sur un périmètre limité à la facturation, ce délai peut être réaliste lorsque le cadrage, la préparation des données et les tests sont correctement réalisés en amont. La durée exacte dépend toutefois de la qualité des données existantes, des éventuelles personnalisations et de la disponibilité des équipes.",
      },
      {
        type: "h2",
        text: "Les quatre erreurs qui font déraper",
      },
      {
        type: "ul",
        items: [
          "Vouloir tout faire en même temps (facturation, stock, paie, CRM). Commencez par la facturation, c'est elle qui a une échéance ; le reste s'ajoute ensuite sur la même base.",
          "Reprendre tout l'historique. Pour la conformité, seuls les encours et la continuité de numérotation sont indispensables. L'historique complet peut être importé plus tard, ou conservé dans l'ancien format.",
          "Négliger la formation. Un outil conforme mal utilisé produit des factures non conformes (mauvais taux de TVA, client sans ICE).",
          "Attendre le dernier trimestre. À l'approche des échéances, les intégrateurs sont saturés et les délais s'allongent.",
        ],
      },
      {
        type: "h2",
        text: "Et après la facturation ?",
      },
      {
        type: "p",
        text: "Une fois la facturation en place, la même base permet, sans nouveau projet lourd : d'émettre les devis et de les transformer en factures en un clic, de suivre les paiements et de relancer automatiquement, de tenir la comptabilité dans [Odoo Finance](/odoo-finance-comptabilite) ou de l'exporter vers votre cabinet, puis d'ajouter le stock si vous vendez des produits. C'est l'intérêt de choisir dès le départ un outil qui couvre ces domaines plutôt qu'un simple logiciel de facturation.",
      },
      {
        type: "h2",
        text: "Ce que fait MSL-iTECH",
      },
      {
        type: "p",
        text: "Nous accompagnons cette bascule de bout en bout : cadrage gratuit de 30 minutes, modèle de fichier pour mettre vos données au propre, paramétrage d'Odoo, tests en parallèle et formation. Nous sommes [intégrateur Odoo officiel au Maroc](/integrateur-odoo-maroc), avec une équipe à Marrakech et des clients à Casablanca et dans tout le pays. Le devis détaillé est envoyé sous 48 heures après le cadrage.",
      },
    ],
  },
  {
    slug: "odoo-vs-sage-maroc-comparatif",
    title:
      "Odoo vs Sage au Maroc en 2026 : le comparatif complet (prix, CGNC, DGI, support)",
    metaTitle:
      "Odoo vs Sage au Maroc 2026 : comparatif prix, CGNC, DGI, support",
    metaDescription:
      "Comparez Sage et Odoo pour une PME marocaine : modèle de licence, plan comptable CGNC, facturation électronique DGI, support local, coût total sur 3 ans.",
    image: "/b4ce3644-f462-44a0-b018-5604bbc622a4.png",
    excerpt:
      "Sage et Odoo répondent à la même question avec deux philosophies différentes. Ce comparatif en dix critères vous donne une grille de lecture pour décider, sans slogans.",
    category: "ERP & Odoo",
    region: "MA",
    readingTime: "11 min",
    publishedAt: "2026-09-15",
    author: "Équipe MSL-iTECH",
    intent: "Informationnel · Mid-funnel",
    relatedPath: "/contact",
    relatedLabel: "Recevoir un devis détaillé sous 48 h",
    faqs: [
      {
        q: "Odoo est-il gratuit ?",
        a: "La version Community est gratuite et open source. Elle permet d'utiliser le socle d'Odoo, mais ne comprend pas la comptabilité complète ni certaines fonctionnalités avancées disponibles dans Enterprise. La version Enterprise donne accès à l'ensemble des applications et fonctionnalités couvertes par le plan choisi et repose, hors offre particulière, sur un abonnement par utilisateur. Les tarifs éditeur varient selon le plan, le pays et les conditions commerciales applicables. Dans les deux cas, l'intégration a un coût.",
      },
      {
        q: "Sage gère-t-il la facturation électronique DGI ?",
        a: "Nous ne pouvons pas répondre à la place de l'éditeur. Demandez une confirmation écrite à votre revendeur : format produit, mode de transmission, date de disponibilité.",
      },
      {
        q: "Mon cabinet comptable travaille sur Sage ; puis-je passer à Odoo ?",
        a: "Oui. Le cabinet peut recevoir des exports périodiques ou disposer d'un accès direct à Odoo en lecture. Nous le définissons au cadrage.",
      },
      {
        q: "Peut-on récupérer l'historique Sage dans Odoo ?",
        a: "Les soldes d'ouverture, les tiers et leurs encours, oui. L'historique détaillé est repris si nécessaire, ou conservé dans Sage en consultation.",
      },
      {
        q: "Combien de temps dure une migration Sage vers Odoo ?",
        a: "Cela dépend du périmètre ; pour la seule comptabilité-facturation d'une PME, quelques semaines. Un devis détaillé fixe le délai.",
      },
    ],
    cta: {
      title: "Recevoir un devis détaillé sous 48 h",
      subtitle:
        "Cadrage gratuit de 30 minutes pour vérifier qu'Odoo est le bon choix pour vous, puis un devis détaillé.",
    },
    body: [
      {
        type: "p",
        text: "Sage et Odoo répondent à la même question — gérer la comptabilité et la gestion commerciale d'une PME marocaine — avec deux philosophies différentes : un logiciel spécialisé par domaine d'un côté, une plateforme intégrée couvrant tous les métiers de l'autre. Ce comparatif vous donne une grille de lecture en dix critères pour décider, sans slogans.",
      },
      {
        type: "p",
        text: "En bref — Sage est historiquement très présent dans les PME marocaines, notamment en comptabilité et paie, avec un réseau de revendeurs établi. Odoo est une plateforme modulaire : comptabilité, ventes, achats, stock, CRM, site web, RH, dans une seule base, avec une version Community open source et une version Enterprise sous licence. Le critère qui pèse le plus en 2026 est la facturation électronique DGI : pour chaque solution, exigez la réponse écrite de l'éditeur ou de l'intégrateur sur le format, la transmission et le calendrier. Le bon comparatif se fait sur le coût total sur trois ans (licences + intégration + maintenance + temps interne), pas sur le prix de la licence. Notre [comparateur interactif](/outils/comparateur-sage-odoo) applique cette grille à votre situation.",
      },
      {
        type: "h2",
        text: "Deux philosophies",
      },
      {
        type: "p",
        text: "Sage 100 fonctionne comme une suite modulaire : comptabilité, gestion commerciale, trésorerie, immobilisations, moyens de paiement et autres fonctions peuvent être combinés selon les besoins de l'entreprise. Les différents modules s'intègrent entre eux afin d'éviter certaines ressaisies, par exemple entre la gestion commerciale et la comptabilité. Au Maroc, Sage propose notamment Sage 100 sous forme hébergée dans le cloud Microsoft Azure, avec accès à distance, sauvegardes et maintenance de l'infrastructure. L'entreprise peut ainsi construire progressivement son environnement de gestion en sélectionnant les modules dont elle a réellement besoin.",
      },
      {
        type: "p",
        text: "Odoo propose une base unique où chaque « application » (comptabilité, ventes, stock, CRM, site web, RH, projet) partage les mêmes données : un client, un produit, une facture n'existent qu'une fois. L'éditeur est belge, le logiciel est diffusé dans le monde entier via des partenaires intégrateurs, dont MSL-iTECH au Maroc.",
      },
      {
        type: "p",
        text: "Aucune des deux approches n'est « meilleure » dans l'absolu ; elles conviennent à des entreprises différentes.",
      },
      {
        type: "h2",
        text: "La grille en dix critères",
      },
      {
        type: "table",
        headers: ["Critère", "Sage 100", "Odoo"],
        rows: [
          ["Périmètre", "Suite modulaire (compta, gestion co., immobilisations…)", "Base unique intégrée (compta, ventes, stock, CRM, RH, site web)"],
          ["Licence", "Par devis (utilisateurs + périmètre + support)", "Community gratuite / Enterprise par utilisateur (plan Standard ou Custom)"],
          ["Plan comptable MA", "Offre dédiée Maroc disponible", "Localisation comptable officielle Maroc (CGNC, taxes)"],
          ["Facturation DGI", "Préparation annoncée — demandez confirmation écrite", "Localisation MA présente — connexion plateforme DGI à confirmer"],
          ["Hébergement", "Cloud Azure (offre Sage 100 Maroc)", "Odoo Online / Odoo.sh / on-premise"],
          ["Personnalisation", "Paramétrage + réseau partenaires", "Studio + modules custom Python (Odoo.sh ou on-premise)"],
          ["Multi-société", "Multi-sociétés et multi-exercices", "Multi-sociétés dans une base (plan Custom)"],
          ["Ergonomie / mobile", "Interface bureau ; mobile selon gamme", "Interface web responsive + app mobile"],
          ["Support local", "Réseau revendeurs MA ancien et dense", "Partenaires officiels MA (dont MSL-iTECH) + communauté mondiale"],
          ["Évolutivité", "Ajout de logiciels de la gamme + passerelles", "Activation d'apps sur la même base, sans migration"],
        ],
      },
      {
        type: "p",
        text: "Détail de chaque critère :",
      },
      {
        type: "ul",
        items: [
          "Périmètre couvert — Sage 100 fonctionne comme une suite modulaire : comptabilité, gestion commerciale, immobilisations, moyens de paiement et autres fonctions peuvent être combinés selon le périmètre retenu. Odoo regroupe ses différentes applications dans une même base et permet de les activer progressivement selon les besoins. Ce qui compte pour vous : avez-vous besoin de relier ventes, achats, stock et comptabilité dans un même environnement, sans ressaisie ?",
          "Modèle de licence — Chez Sage 100, la tarification dépend notamment du nombre d'utilisateurs, du périmètre fonctionnel, des besoins d'intégration et du niveau de support ; elle doit donc être confirmée par devis. Odoo Community est open source et gratuite, mais ne comprend pas l'ensemble des fonctions de comptabilité avancée d'Enterprise. Odoo Enterprise fonctionne sur abonnement par utilisateur, selon le plan choisi. Ce qui compte pour vous : combien d'utilisateurs auront réellement besoin d'accéder au système et avec quel périmètre fonctionnel ?",
          "Plan comptable et fiscalité marocaine — Sage 100 dispose d'une offre dédiée au marché marocain. Odoo dispose également d'une localisation comptable officielle pour le Maroc, avec un plan comptable, des taxes et des composants de reporting adaptés au pays. Le périmètre exact doit être vérifié selon la version et l'édition utilisées. Ce qui compte pour vous : votre expert-comptable ou votre équipe financière maîtrise-t-il la solution et les paramétrages retenus ?",
          "Facturation électronique DGI — La réforme marocaine est en cours de mise en œuvre et les spécifications définitives doivent être suivies au fur et à mesure de leur publication. Sage communique sur sa préparation à cette réforme. Pour Odoo, la présence d'une localisation marocaine ne signifie pas automatiquement qu'une connexion à la future plateforme DGI est déjà disponible. Dans les deux cas, demandez à l'éditeur ou à l'intégrateur une confirmation écrite précisant le format supporté, le mode de transmission, la version nécessaire et le calendrier de disponibilité. Ce qui compte pour vous : ne choisissez pas une solution sur la seule promesse qu'elle sera « compatible DGI ».",
          "Hébergement — Les offres actuelles de Sage 100 Maroc mettent notamment en avant un hébergement cloud sur Microsoft Azure. Odoo peut être utilisé sur Odoo Online, Odoo.sh ou sur une infrastructure on-premise selon l'édition et le plan retenus. Ce qui compte pour vous : accès à distance, sécurité, sauvegardes, disponibilité et localisation de vos données.",
          "Personnalisation — Sage 100 propose une solution modulaire et personnalisable, complétée par son réseau de partenaires et des solutions additionnelles. Odoo repose sur une architecture modulaire : Community est open source et Enterprise permet également des adaptations, notamment via Studio ou des modules spécifiques. Les développements Python personnalisés nécessitent toutefois Odoo.sh ou un hébergement on-premise et ne sont pas supportés sur Odoo Online. Ce qui compte pour vous : vos besoins nécessitent-ils uniquement du paramétrage ou de véritables développements spécifiques ?",
          "Multi-société — Sage 100 Comptabilité prend en charge la gestion multi-sociétés et multi-exercices. Odoo permet également de gérer plusieurs sociétés dans une même base, avec des droits, comptabilités et paramètres propres à chaque entité. Sur l'offre Odoo actuelle, cette fonctionnalité relève du plan Custom. Ce qui compte pour vous : gérez-vous plusieurs sociétés, filiales, activités ou entités qui doivent partager certaines données tout en conservant des comptabilités séparées ?",
          "Ergonomie et mobilité — Sage : interface bureau traditionnelle ; applications mobiles selon la gamme. Odoo : interface web, utilisable sur mobile et tablette, application mobile. Ce qui compte pour vous : vos commerciaux et vos magasiniers travaillent-ils hors du bureau ?",
          "Écosystème et support local — Sage : réseau de revendeurs agréés au Maroc, ancien et dense. Odoo : partenaires officiels au Maroc (dont MSL-iTECH), communauté mondiale, documentation ouverte. Ce qui compte pour vous : qui vous répond quand ça bloque, et en combien de temps ?",
          "Évolutivité — Sage : ajout de logiciels de la gamme, passerelles. Odoo : activation d'applications supplémentaires sur la même base, sans migration. Ce qui compte pour vous : où serez-vous dans trois ans ?",
        ],
      },
      {
        type: "h2",
        text: "Le coût total sur trois ans : la seule comparaison honnête",
      },
      {
        type: "p",
        text: "Comparer le prix d'une licence Sage au prix d'un abonnement Odoo ne dit rien. Le coût réel d'un outil de gestion sur trois ans additionne :",
      },
      {
        type: "ul",
        items: [
          "Licences ou abonnements (par poste ou par utilisateur, selon le nombre réel).",
          "Intégration : paramétrage, reprise de données, formation. C'est le poste le plus variable.",
          "Maintenance et support : contrat annuel, mises à jour, assistance.",
          "Hébergement et sauvegardes si l'outil n'est pas en cloud.",
          "Développements spécifiques si vos processus sortent du standard.",
          "Temps interne : le coût caché des ressaisies quand deux logiciels ne se parlent pas (nous l'estimons dans [Ce que la double saisie coûte à une PME](/blog/double-saisie-cout-reel-pme), à paraître).",
        ],
      },
      {
        type: "p",
        text: "Pour Odoo, les fourchettes que nous pratiquons sont détaillées dans [Combien coûte un ERP Odoo au Maroc en 2026](/blog/cout-erp-odoo-maroc-2026). Pour Sage, demandez un devis complet à trois ans à votre revendeur, en exigeant que les six postes soient remplis. Comparez ensuite ligne à ligne. Le [comparateur](/outils/comparateur-sage-odoo) vous aide à structurer ce calcul.",
      },
      {
        type: "h2",
        text: "Trois profils, trois réponses",
      },
      {
        type: "p",
        text: "Vous êtes une TPE dont la comptabilité est tenue par un cabinet sur Sage, et vous voulez simplement facturer conformément. Restez pragmatique : un outil de facturation conforme qui exporte vers votre cabinet suffit ; Odoo (périmètre facturation) ou une mise à jour Sage peuvent tous deux convenir. Le critère décisif est la réponse écrite sur la facturation électronique.",
      },
      {
        type: "p",
        text: "Vous êtes une PME de 10 à 80 personnes avec ventes, stock et compta gérés dans des outils séparés ou sur Excel. La question n'est plus « quel logiciel de compta » mais « comment arrêter les ressaisies ». C'est le terrain naturel d'une plateforme intégrée ; c'est là que nous voyons Odoo apporter le plus, à condition d'un projet bien cadré.",
      },
      {
        type: "p",
        text: "Vous êtes déjà sur Sage, satisfait, et votre revendeur vous confirme par écrit la conformité DGI et son calendrier. Changer d'outil pour changer n'a pas de sens. Gardez la confirmation écrite et planifiez la mise à jour.",
      },
      {
        type: "h2",
        text: "Migrer de Sage vers Odoo : ce que ça implique",
      },
      {
        type: "p",
        text: "Si vous décidez de migrer, le projet suit la logique décrite dans [notre méthode de bascule](/blog/passer-facture-electronique-sans-arreter-activite), avec une étape supplémentaire : la reprise des écritures et des balances depuis Sage. On reprend en général les soldes d'ouverture, les tiers avec leurs encours et l'historique nécessaire aux déclarations ; l'historique complet peut rester consultable dans Sage en lecture.",
      },
      {
        type: "h2",
        text: "Ce que fait MSL-iTECH",
      },
      {
        type: "p",
        text: "Nous sommes [intégrateur Odoo officiel au Maroc](/integrateur-odoo-maroc). Nous n'avons donc pas d'avis neutre sur la conclusion, mais nous avons intérêt à ce que la grille soit juste : un projet mal choisi est un projet qui échoue. Le cadrage de 30 minutes sert précisément à vérifier qu'Odoo est le bon choix pour vous ; quand ce n'est pas le cas, nous le disons.",
      },
    ],
  },
];
