import type { BlogPost } from "./blogPosts";

export const newArticles9to10: BlogPost[] = [
  // ── ARTICLE 9 — Odoo 20 : nouveautés et migration ──────────────────────────
  {
    slug: "odoo-20-nouveautes-guide-2026",
    title:
      "Odoo 20 : les principales nouveautés et ce qu'elles changent pour votre entreprise",
    metaTitle:
      "Odoo 20 : nouveautés, agents IA et migration — Guide complet 2026",
    metaDescription:
      "Sorti le 24 septembre 2026, Odoo 20 place l'IA au cœur des processus métier. Découvrez les principales nouveautés par module, la comparaison avec Odoo 19 et comment évaluer si une migration est pertinente.",
    excerpt:
      "Odoo 20 est sorti le 24 septembre 2026. L'intelligence artificielle ne suggère plus — elle agit. Les agents IA créent des enregistrements, déclenchent des processus et s'exécutent automatiquement. En parallèle, le mode hors ligne est généralisé, la fabrication continue est disponible et le CRM s'enrichit automatiquement. Ce guide vous aide à comprendre ce qui change, ce que cela peut améliorer dans votre entreprise, et si une migration mérite d'être envisagée maintenant.",
    category: "ERP & Odoo",
    region: "INT",
    readingTime: "14 min",
    publishedAt: "2026-10-02",
    updatedAt: "2026-10-02",
    author: "El Houssine BOUHMAIDA",
    sources: [
      "https://www.odoo.com/odoo-20-release-notes",
      "https://www.odoo.com/blog/odoo-news-5/meet-odoo-20-2439",
      "https://www.odoo.com/blog/odoo-news-5/odoo-takes-stock-of-2026-and-unveils-its-ambitions-for-2027-during-odoo-experience-2444",
    ],
    enBref: [
      "Odoo 20 est sorti le 24 septembre 2026 lors de l'Odoo Experience à Bruxelles.",
      "Les agents IA peuvent désormais créer et modifier des enregistrements — pas seulement répondre à des questions.",
      "Le mode hors ligne est complet : entrepôt, point de vente, terrain, tout fonctionne sans connexion.",
      "La fabrication continue permet de libérer les étapes suivantes sans attendre la fin d'un ordre complet.",
      "Migrer vers Odoo 20 n'est pas automatiquement pertinent — cela dépend de votre situation et de vos personnalisations.",
    ],
    relatedPath: "/contact",
    relatedLabel: "Discuter de ma migration Odoo",
    faqs: [
      {
        q: "Qu'est-ce qu'Odoo 20 ?",
        a: "Odoo 20 est la version majeure d'Odoo publiée le 24 septembre 2026 lors de l'Odoo Experience à Bruxelles. C'est un ERP modulaire qui couvre CRM, ventes, comptabilité, inventaire, fabrication, ressources humaines et de nombreux autres domaines. La version 20 met l'accent sur les agents IA opérationnels — capables d'agir sur vos données — et sur le mode hors ligne complet pour toutes les applications.",
      },
      {
        q: "Quand Odoo 20 est-il sorti ?",
        a: "Odoo 20 a été présenté et publié le 24 septembre 2026 lors de l'Odoo Experience à Bruxelles. Les notes de version complètes sont disponibles sur odoo.com/odoo-20-release-notes. C'est la version annuelle majeure d'Odoo, qui succède à Odoo 19.",
      },
      {
        q: "Quelles sont les principales nouveautés d'Odoo 20 ?",
        a: "Les nouveautés les plus importantes sont : les agents IA capables de créer et modifier des enregistrements, le protocole MCP pour connecter des IA externes (ChatGPT, Claude…) à Odoo, le mode hors ligne complet sur toutes les applications, la production continue en fabrication, le paiement direct de factures fournisseurs via PISP, la détection des visiteurs web anonymes en CRM, et l'introduction du Light User comme nouveau type de licence.",
      },
      {
        q: "Odoo 20 utilise-t-il l'intelligence artificielle ?",
        a: "Oui. Odoo 20 va plus loin que les versions précédentes : les agents IA peuvent agir sur vos données — créer des commandes, mettre à jour des fiches, déclencher des processus — et non plus seulement répondre à des questions. Les fonctionnalités IA consomment des crédits IAP (achetés séparément) et les agents nécessitent le plan Custom. La connexion MCP permet aussi à des IA externes d'interroger vos données Odoo.",
      },
      {
        q: "Quelle différence entre Odoo 19 et Odoo 20 ?",
        a: "Les différences majeures sont : des agents IA qui agissent (versus qui suggèrent dans Odoo 19), le mode hors ligne complet sur toutes les apps, la production continue en fabrication, le paiement fournisseurs via PISP, la détection des visiteurs web anonymes en CRM, et le Light User comme nouvelle catégorie de licence. L'interface adopte aussi un nouveau système d'icônes Google Material Symbols et des droits d'accès simplifiés.",
      },
      {
        q: "Faut-il migrer d'Odoo 18 ou 19 vers Odoo 20 ?",
        a: "Pas nécessairement dans l'immédiat. La pertinence dépend de votre situation : vos personnalisations, vos intégrations, votre phase d'adoption de la version actuelle, et les fonctionnalités d'Odoo 20 qui répondent à de vraies frictions. Si vous venez de migrer vers Odoo 19, il est souvent préférable d'attendre que votre équipe soit pleinement à l'aise avant d'enchaîner. Une analyse préalable est toujours recommandée.",
      },
      {
        q: "Combien coûte Odoo 20 ?",
        a: "Les tarifs Odoo 20 varient selon votre zone géographique et votre devise — il n'y a pas un prix universel. Odoo propose quatre formules : One App Free (gratuit), Standard, Custom et Light User. Pour les prix exacts dans votre région, consultez [odoo.com/fr_FR/pricing](https://www.odoo.com/fr_FR/pricing). Notre article dédié explique en détail les différences entre chaque formule.",
      },
      {
        q: "Peut-on conserver ses développements personnalisés en migrant vers Odoo 20 ?",
        a: "Oui, mais pas sans analyse. Les modules personnalisés doivent être vérifiés pour leur compatibilité avec les évolutions techniques d'Odoo 20 (nouveau système de droits d'accès notamment). Les modules développés selon les bonnes pratiques Odoo se migrent plus facilement que les personnalisations hors norme. Un audit de l'existant est indispensable avant toute décision.",
      },
      {
        q: "Comment préparer une migration vers Odoo 20 ?",
        a: "La préparation passe par : un audit de l'environnement actuel (modules, personnalisations, intégrations), une analyse de compatibilité module par module, un environnement de test avec vos données réelles, des tests fonctionnels par les équipes métier, puis la migration en production avec un plan de retour arrière défini. L'accompagnement d'un partenaire Odoo certifié comme MSL-iTECH réduit significativement les risques.",
      },
      {
        q: "Odoo 20 fonctionne-t-il sans connexion internet ?",
        a: "Oui. Odoo 20 introduit un mode hors ligne complet sur toutes les applications : vous pouvez créer, modifier, archiver et supprimer des enregistrements sans connexion. Les données sont synchronisées automatiquement à la reconnexion. C'est particulièrement utile pour les équipes terrain, les entrepôts et les points de vente en environnement réseau instable.",
      },
    ],
    cta: {
      title: "Analyser votre environnement Odoo avant de décider",
      subtitle:
        "Vous utilisez Odoo 17, 18 ou 19 et vous vous demandez si Odoo 20 vous apporte quelque chose de concret ? MSL-iTECH évalue votre configuration, vos personnalisations et vos besoins pour vous donner une recommandation objective — sans pression commerciale.",
    },
    body: [
      {
        type: "p",
        text: "Odoo 20 est sorti le 24 septembre 2026, lors de l'Odoo Experience à Bruxelles. Cette version marque une transition importante : l'intelligence artificielle ne se contente plus de suggérer, elle agit — elle crée des enregistrements, met à jour des données, déclenche des processus. En parallèle, chaque module majeur a évolué : CRM, comptabilité, inventaire, fabrication, point de vente. Cet article vous aide à comprendre ce qui change concrètement pour une PME, comment Odoo 20 se distingue d'Odoo 19, et si une migration mérite d'être envisagée aujourd'hui.",
      },
      {
        type: "h2",
        text: "Odoo 20 en bref",
      },
      {
        type: "table",
        headers: ["Information", "Détail"],
        rows: [
          ["Date de sortie", "24 septembre 2026"],
          ["Événement", "Odoo Experience 2026, Bruxelles"],
          ["Orientation principale", "IA opérationnelle, mode hors ligne généralisé, productivité métier"],
          ["Entreprises concernées", "Utilisateurs Odoo 17/18/19 et PME évaluant un ERP"],
        ],
      },
      {
        type: "h3",
        text: "Les 7 changements les plus significatifs",
      },
      {
        type: "table",
        headers: ["Domaine", "Nouveauté", "Impact concret"],
        rows: [
          ["Intelligence artificielle", "Les agents IA créent et modifient des enregistrements", "Automatisation réelle de tâches métier, pas seulement des suggestions"],
          ["Connexion MCP", "Connexion d'assistants IA externes à Odoo", "Interopérabilité avec ChatGPT, Claude et autres outils IA"],
          ["Comptabilité", "Paiement fournisseurs via PISP, détection de doublons renforcée", "Moins d'erreurs de paiement, rapprochements plus rapides"],
          ["Fabrication", "Production continue, ordres fractionnables", "Réactivité accrue sur la chaîne de production"],
          ["CRM", "Détection des visiteurs web, leads via Dun & Bradstreet", "Pipeline enrichi sans saisie manuelle"],
          ["Mode hors ligne", "Complet sur toutes les applications", "Continuité pour équipes terrain, entrepôt, POS"],
          ["Light User", "Nouveau type de licence pour accès limités", "Maîtrise du coût licences dans les grandes équipes"],
        ],
      },
      {
        type: "h2",
        text: "L'IA devient réellement opérationnelle dans Odoo 20",
      },
      {
        type: "h3",
        text: "La différence entre une IA qui répond et une IA qui agit",
      },
      {
        type: "p",
        text: "Jusqu'à Odoo 19, l'IA dans Odoo fonctionnait principalement comme un assistant conversationnel : vous posiez une question, elle répondait. Odoo 20 introduit une architecture différente : les agents IA peuvent désormais interagir directement avec vos données et vos processus. Concrètement, un agent peut lire un fichier que vous uploadez, en extraire les informations pertinentes, et créer automatiquement un enregistrement dans votre base — une commande fournisseur, une opportunité CRM, une fiche article. Il peut également mettre à jour des enregistrements existants, être planifié pour s'exécuter automatiquement, et s'adapter aux changements de contexte.",
      },
      {
        type: "p",
        text: "Cette évolution reste encadrée : les agents respectent les droits d'accès Odoo existants de l'utilisateur qui les déclenche. Un agent n'accède pas à des données auxquelles l'utilisateur n'a pas accès.",
      },
      {
        type: "h3",
        text: "Nouveauté technique importante : le protocole MCP",
      },
      {
        type: "p",
        text: "Odoo 20 implémente le Model Context Protocol (MCP), un standard ouvert qui permet à des assistants IA externes — ChatGPT, Claude, Gemini, ou tout outil compatible — de se connecter à votre base Odoo et d'interroger vos données, toujours dans les limites de vos droits d'accès. Pour les entreprises qui utilisent déjà des outils d'IA en dehors d'Odoo, c'est une intégration significative.",
      },
      {
        type: "h3",
        text: "Exemples concrets d'usage des agents IA dans une PME",
      },
      {
        type: "ul",
        items: [
          "Traitement d'un bon de commande reçu par email : vous uploadez un PDF fournisseur, l'agent crée un bon de réception pré-rempli que vous n'avez qu'à confirmer.",
          "Analyse de trésorerie : vous demandez « montre-moi les créances de plus de 60 jours », l'agent interroge vos données et peut déclencher des relances selon vos règles.",
          "Enrichissement CRM : un visiteur navigue plusieurs minutes sur vos pages, Odoo détecte son IP et crée automatiquement une opportunité dans votre pipeline.",
        ],
      },
      {
        type: "p",
        text: "Point important : toutes les fonctionnalités IA consomment des crédits IAP (achats in-app Odoo). L'accès aux agents IA nécessite le plan Custom. Ce n'est pas un accès illimité inclus dans toutes les formules.",
      },
      {
        type: "h2",
        text: "Les principales nouveautés Odoo 20 par métier",
      },
      {
        type: "h3",
        text: "Comptabilité et finance",
      },
      {
        type: "p",
        text: "Odoo 20 introduit le paiement direct de factures fournisseurs via des prestataires PISP (Payment Initiation Service Provider), ce qui permet de payer individuellement ou en lot sans sortir d'Odoo. La détection de doublons est renforcée avec deux niveaux d'alerte : rouge pour les doublons probables, jaune pour les cas à vérifier. Le moteur de rapprochement bancaire gagne des règles de tolérance configurables et une prédiction automatique des lignes de factures (produit, compte, taxe, analytique). Les journaux de caisse sont sécurisés contre la falsification via un hachage cryptographique.",
      },
      {
        type: "p",
        text: "Ce que cela change en pratique : votre service comptable évite les doubles paiements avant qu'ils surviennent, les rapprochements bancaires se font plus vite, et les nouvelles devises (Azerbaïdjan, Géorgie, Kazakhstan, Arabie Saoudite, Ouzbékistan) sont supportées nativement.",
      },
      {
        type: "h3",
        text: "CRM et ventes",
      },
      {
        type: "p",
        text: "Odoo 20 intègre l'accès à une base de 580 millions d'entités mondiales via Dun & Bradstreet pour la prospection ciblée par secteur et localisation. La détection IP identifie automatiquement les visiteurs web anonymes et les convertit en prospects dans le pipeline. L'import de contacts depuis Outlook et Gmail est désormais direct, tout comme la création d'opportunités CRM par scan de carte de visite.",
      },
      {
        type: "p",
        text: "Côté ventes : des modèles de sections accélèrent la construction des devis, les marges sont éditables directement sur les lignes, et la signature électronique est intégrée aux documents commerciaux.",
      },
      {
        type: "h3",
        text: "Inventaire et logistique",
      },
      {
        type: "p",
        text: "Les niveaux de réapprovisionnement sont désormais suggérés automatiquement à partir des 30 derniers jours de demande. Le système calcule un min/max recommandé que le responsable logistique valide ou ajuste. Les documents CMR de transport sont générés directement depuis le bon de livraison, pré-remplis. Les flux inter-sociétés et inter-entrepôts sont renforcés : réapprovisionnement d'une société depuis une autre, livraison depuis l'entrepôt d'une autre entité.",
      },
      {
        type: "h3",
        text: "Fabrication",
      },
      {
        type: "p",
        text: "Odoo 20 introduit la production continue : l'opérateur saisit les quantités produites, et les ordres de travail suivants se libèrent automatiquement sans attendre la fin complète de l'ordre de fabrication. Les ordres peuvent être fractionnés en cours de production. Un exemple concret : votre atelier fabrique 100 pièces, l'opérateur valide les 40 premières dès qu'elles sont prêtes, et l'étape suivante se déclenche immédiatement sur ces 40 pièces pendant que les 60 restantes sont encore en cours.",
      },
      {
        type: "ul",
        items: [
          "Planification Gantt avec drag-and-drop et buffers configurables",
          "Comparaison côte à côte de nomenclatures (BOM)",
          "Suivi du coût prévisionnel versus coût réel par ordre de fabrication",
          "Points de qualité intégrés aux workflows de production",
          "Kanban de fabrication regroupé par semaine avec statut des composants",
        ],
      },
      {
        type: "h3",
        text: "Point de vente",
      },
      {
        type: "p",
        text: "Nouveau tableau de bord POS redessiné, éditeur de plan de salle simplifié pour la restauration, combos automatiques générés au fur et à mesure que les articles sont ajoutés, et surtout : mode hors ligne complet. Vos caissiers et serveurs continuent de travailler sans connexion — les données sont synchronisées à la reconnexion.",
      },
      {
        type: "h3",
        text: "Équipes terrain et field service",
      },
      {
        type: "p",
        text: "Calendrier unifié avec calcul automatique du temps de trajet entre interventions, carte en temps réel de l'équipe, et mode hors ligne complet pour les techniciens. Les interventions Field Service sont intégrées dans le module Planning. Un technicien peut créer et modifier des bons d'intervention, prendre des photos, enregistrer des pièces utilisées — tout cela sans connexion.",
      },
      {
        type: "h3",
        text: "Expérience utilisateur générale",
      },
      {
        type: "p",
        text: "Odoo 20 remplace les icônes Font Awesome par Google Material Symbols sur l'ensemble de l'interface. Le système de droits d'accès est simplifié : les règles de domaine remplacent les règles d'enregistrement, ce qui réduit la complexité d'administration. La gestion des pièces jointes en masse (téléchargement ZIP), les liens de recherche partageables avec filtres et regroupements, et les améliorations mobiles (palette de commandes par swipe, formulaires tactiles) complètent l'évolution.",
      },
      {
        type: "h2",
        text: "Odoo 20 vs Odoo 19 : les différences importantes",
      },
      {
        type: "table",
        headers: ["Sujet", "Odoo 19", "Odoo 20", "Impact pour l'entreprise"],
        rows: [
          ["Agents IA", "Suggestions uniquement", "Création et mise à jour d'enregistrements", "Automatisation réelle vs assistance passive"],
          ["Connexion IA externe", "Aucune", "Protocole MCP", "Connexion à ChatGPT, Claude, Gemini, etc."],
          ["Mode hors ligne", "Partiel", "Complet sur toutes les apps", "Continuité pour terrain, entrepôt, POS"],
          ["Paiement fournisseurs", "Via banque externe", "PISP direct depuis Odoo", "Moins de sorties de l'ERP"],
          ["Fabrication continue", "Non disponible", "Disponible", "Réduction des temps d'attente entre étapes"],
          ["Light User", "Non disponible", "Disponible", "Nouveau levier de maîtrise des coûts licences"],
          ["Détection visiteurs web", "Non disponible", "Disponible", "Enrichissement automatique du pipeline CRM"],
          ["Iconographie UI", "Font Awesome", "Google Material Symbols", "Interface plus moderne et homogène"],
          ["IAP pour l'IA", "Optionnel", "Obligatoire pour les fonctions IA", "Coût variable selon l'usage"],
        ],
      },
      {
        type: "p",
        text: "Sources : notes de version officielles Odoo 20 (odoo.com/odoo-20-release-notes), blog Odoo (odoo.com/blog), Odoo Experience 2026. Tableau établi en octobre 2026.",
      },
      {
        type: "h2",
        text: "Faut-il migrer vers Odoo 20 ?",
      },
      {
        type: "p",
        text: "La question d'une migration ne se résume pas à « Odoo 20 est-il meilleur qu'Odoo 19 ? ». Elle dépend de votre situation spécifique.",
      },
      {
        type: "h3",
        text: "Une migration peut être pertinente si…",
      },
      {
        type: "ul",
        items: [
          "Vous utilisez Odoo 17 ou une version antérieure et approchez de la fin de support.",
          "Vos équipes terrain ou entrepôt bénéficieraient du mode hors ligne complet.",
          "Vous souhaitez utiliser les agents IA pour automatiser des tâches répétitives.",
          "Votre volume de prospection justifie les nouvelles fonctionnalités CRM (détection visiteurs, D&B).",
          "Votre process de fabrication peut gagner en fluidité avec la production continue.",
        ],
      },
      {
        type: "h3",
        text: "Il peut être préférable d'attendre si…",
      },
      {
        type: "ul",
        items: [
          "Vous venez de migrer vers Odoo 18 ou 19 et votre équipe est encore en phase d'adoption.",
          "Vous avez des modules personnalisés ou des développements Studio qui nécessitent une analyse de compatibilité.",
          "Votre version actuelle couvre tous vos besoins métier sans friction identifiée.",
          "Vous êtes en période fiscale ou opérationnelle critique — une migration est toujours une période de risque.",
        ],
      },
      {
        type: "h3",
        text: "Une analyse est indispensable si…",
      },
      {
        type: "ul",
        items: [
          "Vous avez des intégrations externes (connecteurs API, EDI, logiciels tiers).",
          "Vous avez réalisé des développements spécifiques sur votre version actuelle.",
          "Votre base de données dépasse plusieurs millions d'enregistrements.",
          "Vous utilisez Odoo.sh et avez des branches de staging actives.",
        ],
      },
      {
        type: "p",
        text: "La migration vers Odoo 20 n'est pas un simple upgrade. Elle implique un audit de l'existant, des tests sur un environnement de recette, une vérification de la compatibilité des modules, et une formation des utilisateurs aux changements d'interface. Sans cette préparation, le risque opérationnel est réel.",
      },
      {
        type: "h2",
        text: "Combien coûte Odoo 20 ?",
      },
      {
        type: "p",
        text: "Le coût d'Odoo 20 dépend de plusieurs facteurs : le nombre d'utilisateurs, le plan choisi (Standard ou Custom), et l'usage des fonctionnalités IA. En résumé : les licences Standard commencent à environ 7,95 € par utilisateur et par mois en facturation annuelle (tarif promotionnel première année). Le plan Custom — qui inclut Studio, les agents IA, le multi-société et l'API externe — est facturé à partir de 12 € par utilisateur et par mois. Une nouvelle catégorie Light User est disponible à environ 7,90 € par employé et par mois pour des accès limités (RH, présence, barcode, etc.).",
      },
      {
        type: "p",
        text: "Pour une estimation complète et à jour, consultez notre article dédié : [Nouveaux tarifs Odoo : comprendre Standard, Custom et Light User avant de choisir votre abonnement](/blog/tarifs-odoo-standard-custom-light-user).",
      },
      {
        type: "p",
        text: "Note : les tarifs Odoo évoluent et dépendent de la devise, de la région et de la période de facturation. Vérifiez toujours les prix actualisés sur odoo.com avant de vous engager.",
      },
      {
        type: "h2",
        text: "Comment préparer une migration vers Odoo 20 ?",
      },
      {
        type: "ul",
        items: [
          "Audit de l'environnement actuel : inventaire complet des modules installés, des personnalisations Studio ou code, et des intégrations avec des systèmes tiers.",
          "Analyse de compatibilité : vérification module par module. Les modules Odoo standard sont mis à jour par Odoo. Les modules tiers et développements spécifiques nécessitent une analyse individuelle.",
          "Environnement de test : instance de recette avec vos données réelles. Test de chaque processus métier critique avant toute décision.",
          "Migration des données : validation de la qualité des données source, migration, vérification des enregistrements (contacts, commandes, stock, écritures comptables).",
          "Tests fonctionnels : recette par les utilisateurs clés. Chaque processus critique est validé par les équipes qui l'utilisent quotidiennement.",
          "Formation : ciblée sur les changements d'Odoo 20 (nouveaux icônes, droits d'accès simplifiés, UX mobile) — pas une formation complète depuis zéro pour les utilisateurs existants.",
          "Mise en production : basculement avec un plan de retour arrière défini. Suivi post-démarrage les premières semaines.",
        ],
      },
      {
        type: "h2",
        text: "Ce que fait MSL-iTECH",
      },
      {
        type: "p",
        text: "En tant qu'[intégrateur Odoo certifié](/integrateur-odoo-maroc), MSL-iTECH accompagne les PME marocaines, belges et canadiennes dans leurs migrations Odoo depuis la version 14. Notre approche : audit de l'existant d'abord, recommandation ensuite. Nous ne déconseillons pas une migration si elle n'est pas pertinente pour vous — et nous ne la recommandons pas non plus si votre version actuelle couvre vos besoins. L'objectif est de vous donner une vision claire pour décider en connaissance de cause.",
      },
    ],
  },

  // ── ARTICLE 10 — Tarifs Odoo : Standard, Custom, Light User ────────────────
  {
    slug: "tarifs-odoo-standard-custom-light-user",
    title: "Nouveaux tarifs Odoo : Standard, Custom et Light User expliqués simplement",
    metaTitle:
      "Tarifs Odoo 2026 : Standard, Custom et Light User expliqués simplement",
    metaDescription:
      "Comprendre la tarification Odoo en 2026 : One App Free, Standard, Custom, Light User. Prix variables selon la zone, différences clés, exemples PME et méthode pour dimensionner vos licences sans erreur.",
    excerpt:
      "Combien vais-je réellement payer pour Odoo ? En 2026, Odoo propose quatre niveaux d'accès : One App Free, Standard, Custom, et le nouveau Light User. Tous vos collaborateurs n'ont pas nécessairement besoin du même type de licence. Ce guide explique le modèle, les différences clés, et comment éviter les erreurs de dimensionnement les plus courantes.",
    category: "Tarifs & ROI",
    region: "INT",
    readingTime: "12 min",
    publishedAt: "2026-10-02",
    updatedAt: "2026-10-02",
    author: "El Houssine BOUHMAIDA",
    sources: [
      "https://www.odoo.com/fr_FR/pricing",
      "https://www.odoo.com/pricing-configurator",
      "https://www.odoo.com/documentation/19.0/legal/terms/enterprise.html",
    ],
    enBref: [
      "Odoo propose quatre formules : One App Free, Standard, Custom et Light User (nouveau en 2026).",
      "Le plan Standard couvre plusieurs modules sans Studio ni API externe. Custom ajoute Studio, agents IA, multi-société et API.",
      "Le Light User donne accès à des fonctions RH limitées et à des rôles opérationnels spécifiques — pas aux modules back-office. Son prix varie selon votre zone géographique.",
      "Le tarif de la première année est promotionnel et inférieur au tarif de renouvellement.",
      "Le coût des licences est distinct du coût d'implémentation — deux entreprises avec le même nombre de licences peuvent avoir des budgets projet très différents.",
    ],
    relatedPath: "/outils/roi-erp",
    relatedLabel: "Estimer le ROI d'un ERP pour ma PME",
    faqs: [
      {
        q: "Combien coûte Odoo par mois ?",
        a: "Le prix d'Odoo varie selon votre zone géographique, votre devise locale et la période de facturation (mensuelle ou annuelle). Les plans Standard, Custom et Light User sont tous payants avec des tarifs différents selon les régions. Le plan One App Free reste gratuit. Pour connaître les prix exacts dans votre pays, consultez la page officielle odoo.com/fr_FR/pricing.",
      },
      {
        q: "Quel est le prix d'Odoo par utilisateur ?",
        a: "Le prix par utilisateur dépend du plan choisi (Standard ou Custom) et de votre zone géographique. Odoo facture par utilisateur actif par mois, avec un tarif promotionnel la première année inférieur au tarif de renouvellement. Consultez odoo.com/fr_FR/pricing pour les tarifs actuels dans votre région.",
      },
      {
        q: "Qu'est-ce qu'un Light User Odoo ?",
        a: "Un Light User est un compte actif avec accès limité à certaines fonctions RH (congés, frais, présence, paie) et à des rôles opérationnels spécifiques (Point de Vente, Barcode, Shop Floor, Field Service). Il n'a pas accès aux modules de back-office comme la comptabilité, les ventes, le CRM ou la gestion de projet.",
      },
      {
        q: "Combien coûte un Light User Odoo ?",
        a: "Le prix d'un Light User varie selon votre zone géographique et votre devise. Ce tarif s'ajoute à un abonnement Standard ou Custom existant. Consultez odoo.com/fr_FR/pricing pour connaître le prix applicable dans votre pays avant de vous engager.",
      },
      {
        q: "Quelle différence entre Odoo Standard et Custom ?",
        a: "Custom ajoute au Standard : Odoo Studio (personnalisation sans code), les agents IA (Agentic AI), le multi-société sur une base unique, l'accès API externe, et les options d'hébergement Odoo.sh et on-premise. Si vous n'avez pas besoin de ces fonctionnalités, Standard suffit généralement.",
      },
      {
        q: "Tous les employés doivent-ils avoir une licence Odoo ?",
        a: "Non. Seuls les utilisateurs qui se connectent à Odoo nécessitent une licence. Parmi eux, ceux dont l'accès est limité à des fonctions RH ou opérationnelles spécifiques peuvent être qualifiés en Light User à un tarif réduit. Les employés qui n'utilisent pas Odoo du tout ne sont pas concernés.",
      },
      {
        q: "Peut-on utiliser Odoo gratuitement ?",
        a: "Oui, avec le plan One App Free : une seule application, utilisateurs illimités, hébergement sur Odoo Online. C'est adapté à un usage très ciblé — pas à une gestion multi-modules d'une PME. Odoo Studio peut être choisi comme l'unique application gratuite.",
      },
      {
        q: "Odoo.sh est-il inclus dans le prix ?",
        a: "Non. Odoo.sh est disponible uniquement avec le plan Custom, mais facturé séparément en plus du coût par utilisateur. C'est un poste budgétaire distinct à intégrer dans votre estimation.",
      },
      {
        q: "Odoo Studio est-il inclus dans le plan Standard ?",
        a: "Non. Studio est inclus uniquement dans le plan Custom. Exception : dans le plan One App Free, Studio peut être sélectionné comme l'unique application gratuite. Il n'est pas disponible dans le plan Standard.",
      },
      {
        q: "L'API Odoo est-elle disponible avec le plan Standard ?",
        a: "Non. L'accès à l'API externe — pour connecter Odoo à des systèmes tiers via des intégrations automatisées — est réservé au plan Custom. Si vous avez besoin d'intégrations avec d'autres logiciels, Custom est nécessaire.",
      },
      {
        q: "Le prix Odoo inclut-il l'implémentation ?",
        a: "Non. Le prix par utilisateur couvre l'abonnement au logiciel et l'hébergement Odoo Online. Le paramétrage, la migration des données, la formation et les développements spécifiques sont des prestations séparées facturées par votre partenaire Odoo.",
      },
      {
        q: "Quel abonnement Odoo choisir pour une PME ?",
        a: "Standard convient si vous utilisez les modules Odoo sans personnalisation profonde, sans API externe et sans multi-société. Custom est nécessaire si vous avez des intégrations, des développements Studio, plusieurs entités juridiques ou si vous hébergez en dehors d'Odoo Online. Un dimensionnement avec un partenaire certifié évite de payer pour des fonctionnalités inutiles.",
      },
    ],
    cta: {
      title: "Dimensionner vos licences Odoo avant de vous engager",
      subtitle:
        "Un mauvais dimensionnement des licences peut augmenter inutilement votre budget ou limiter vos utilisateurs. MSL-iTECH cartographie vos profils, vos applications et vos besoins réels avant toute souscription — sans engagement.",
    },
    body: [
      {
        type: "p",
        text: "La question revient systématiquement avant tout projet Odoo : « Combien vais-je réellement payer ? » La réponse dépend de plusieurs facteurs — et notamment de votre zone géographique, car les tarifs Odoo varient selon les régions et les devises. En 2026, Odoo propose quatre niveaux d'accès — One App Free, Standard, Custom, et le nouveau Light User — avec des différences importantes en termes de droits, d'hébergement et de fonctionnalités incluses. Pour les prix exacts dans votre région, consultez la [page officielle de tarification Odoo](https://www.odoo.com/fr_FR/pricing). Tous les collaborateurs d'une entreprise n'ont pas nécessairement besoin du même niveau d'accès, et un bon dimensionnement des licences peut avoir un impact significatif sur votre budget.",
      },
      {
        type: "h2",
        text: "Comment fonctionne la tarification Odoo en 2026 ?",
      },
      {
        type: "p",
        text: "Odoo facture par utilisateur actif et par mois, selon le plan choisi. Le modèle repose sur quatre catégories.",
      },
      {
        type: "table",
        headers: ["Formule", "Accès", "Pour qui ?", "Limite principale"],
        rows: [
          ["One App Free", "Gratuit", "Toute organisation pour un usage ciblé", "Une seule application"],
          ["Standard", "Payant — prix variable selon la zone", "PME ayant besoin de plusieurs modules", "Pas de Studio, pas d'API externe, pas de multi-société"],
          ["Custom", "Payant — prix variable selon la zone", "Entreprises avec personnalisations ou besoins avancés", "Tarif plus élevé, Odoo.sh facturé séparément"],
          ["Light User", "Payant — prix variable selon la zone", "Employés à accès limité", "Pas d'accès au back-office complet"],
        ],
      },
      {
        type: "p",
        text: "⚠️ Les tarifs Odoo varient selon votre zone géographique, votre devise locale et la période de facturation choisie (mensuelle ou annuelle). Consultez la page officielle odoo.com/fr_FR/pricing pour connaître les prix exacts applicables dans votre région avant toute décision.",
      },
      {
        type: "p",
        text: "Point important à ne pas négliger : Odoo applique une tarification promotionnelle la première année, sensiblement inférieure au tarif de renouvellement. Ce point est souvent source de surprise — calculez votre budget sur 3 ans pour avoir une vision réaliste du coût total.",
      },
      {
        type: "h2",
        text: "Qu'est-ce qu'un Light User Odoo ?",
      },
      {
        type: "p",
        text: "Un Light User Odoo est un compte utilisateur actif configuré avec un accès limité, ou un enregistrement d'employé actif qui n'est pas lié à un compte utilisateur back-office complet. Il s'agit d'une licence distincte, moins coûteuse, conçue pour les collaborateurs qui n'ont pas besoin d'accéder aux modules de gestion opérationnelle complets.",
      },
      {
        type: "h3",
        text: "Ce qu'un Light User peut faire",
      },
      {
        type: "ul",
        items: [
          "Fonctions RH self-service : congés, notes de frais, bulletins de paie, évaluations, présences, parrainage, annuaire employé, lecture Knowledge.",
          "Opérateur Point de Vente (caissier en POS uniquement).",
          "Opérateur Barcode / Inventaire (scan uniquement, pas le back-office inventaire complet).",
          "Opérateur Shop Floor en fabrication (interface atelier uniquement).",
          "Consultation et soumission de plannings.",
          "Technicien Field Service (interventions terrain, mode hors ligne).",
        ],
      },
      {
        type: "h3",
        text: "Ce qu'un Light User ne peut pas faire",
      },
      {
        type: "ul",
        items: [
          "Accéder aux modules back-office : Comptabilité, CRM, Ventes, Achats, Inventaire complet, Gestion de projet.",
          "Effectuer des tâches administratives ou de configuration.",
          "Utiliser Odoo Studio.",
          "Accéder à l'API externe.",
          "Créer des opportunités, des devis, des commandes ou des factures.",
        ],
      },
      {
        type: "p",
        text: "Important : les droits précis des Light Users sont définis par Odoo et peuvent évoluer avec chaque version. Vérifiez la documentation officielle et les termes de votre contrat avant de qualifier un utilisateur comme Light User.",
      },
      {
        type: "h2",
        text: "Light User ou utilisateur Standard : comment choisir ?",
      },
      {
        type: "table",
        headers: ["Profil", "Usage dans Odoo", "Licence à examiner", "Point à vérifier"],
        rows: [
          ["Employé d'entrepôt (scan uniquement)", "Valide des bons de réception via Barcode", "Light User potentiel", "Utilise-t-il uniquement l'app Barcode ?"],
          ["Employé RH self-service", "Congés, frais, présence uniquement", "Light User potentiel", "A-t-il besoin d'autres modules ?"],
          ["Commercial créant des devis", "Opportunités CRM + devis + commandes", "Standard requis", "Accès CRM et Ventes = licence complète"],
          ["Comptable", "Saisie de factures, rapprochements bancaires", "Standard requis", "Accès Comptabilité = licence complète"],
          ["Chef de projet", "Tâches, planning, feuilles de temps", "Standard requis", "Accès Projet = licence complète"],
          ["Caissier POS uniquement", "Point de Vente en caisse", "Light User potentiel", "Utilise-t-il uniquement POS ?"],
          ["Technicien terrain", "Interventions Field Service", "Light User potentiel", "Crée-t-il des bons de commande ou des factures ?"],
          ["Directeur général", "Lecture multi-applications, reporting", "Standard requis", "Accès multi-modules = licence complète"],
          ["Opérateur Shop Floor", "Valide des étapes de production", "Light User potentiel", "Utilise-t-il uniquement l'interface atelier ?"],
        ],
      },
      {
        type: "p",
        text: "Ces exemples sont des orientations, pas des garanties contractuelles. La qualification définitive doit être confirmée avec Odoo ou votre partenaire selon les conditions commerciales en vigueur.",
      },
      {
        type: "h2",
        text: "Standard vs Custom : quelle différence concrète ?",
      },
      {
        type: "table",
        headers: ["Fonctionnalité", "One App Free", "Standard", "Custom"],
        rows: [
          ["Toutes les applications Odoo", "Non (1 seule)", "Oui", "Oui"],
          ["Hébergement Odoo Online", "Oui", "Oui", "Oui"],
          ["Hébergement Odoo.sh", "Non", "Non", "Oui (facturé séparément)"],
          ["Hébergement On-premise", "Non", "Non", "Oui"],
          ["Odoo Studio", "Uniquement si c'est l'app choisie", "Non", "Oui"],
          ["Agents IA (Agentic AI)", "Non", "Non", "Oui"],
          ["Multi-société (base unique)", "Oui (exception)", "Non", "Oui"],
          ["API externe", "Non", "Non", "Oui"],
          ["Modules personnalisés", "Non", "Non", "Oui"],
          ["Light User compatible", "N/A", "Oui", "Oui"],
        ],
      },
      {
        type: "p",
        text: "Choisissez Standard lorsque : vous avez besoin de plusieurs modules Odoo standards, votre hébergement sur Odoo Online convient, vous n'avez pas besoin de personnalisations profondes ni d'API externe, et vous gérez une seule entité juridique.",
      },
      {
        type: "p",
        text: "Custom devient généralement nécessaire lorsque : vous souhaitez modifier l'interface ou les formulaires via Studio, vous avez plusieurs sociétés sur une même base, vous connectez Odoo à des systèmes externes via API, vous hébergez sur Odoo.sh ou en on-premise, ou vous avez des développements spécifiques.",
      },
      {
        type: "h2",
        text: "Attention : le prix de la licence n'est pas le coût total d'un projet Odoo",
      },
      {
        type: "p",
        text: "C'est l'erreur de calcul la plus répandue. Deux entreprises utilisant le même nombre de licences peuvent avoir des budgets projet très différents.",
      },
      {
        type: "table",
        headers: ["Poste de coût", "Nature", "Remarque"],
        rows: [
          ["Licences", "Mensuel ou annuel, par utilisateur", "Facturé directement par Odoo"],
          ["Hébergement Odoo.sh", "Mensuel si plan Custom", "Facturé séparément par Odoo"],
          ["Analyse et cadrage", "Unique", "Varie selon la complexité du périmètre"],
          ["Paramétrage et configuration", "Unique", "Varie selon le nombre de modules et processus"],
          ["Migration de données", "Unique", "Varie selon le volume et la qualité des données source"],
          ["Développements spécifiques", "Unique + maintenance", "Dépend des besoins hors standard"],
          ["Intégrations", "Unique + maintenance", "Dépend des systèmes tiers à connecter"],
          ["Formation", "Unique", "Dépend de la taille de l'équipe et des modules"],
          ["Crédits IAP (IA)", "Variable", "Selon l'usage des fonctions IA dans Odoo 20"],
        ],
      },
      {
        type: "p",
        text: "Une PME qui souscrit 10 licences Standard ne dépensera pas uniquement le coût mensuel des licences. Si elle migre depuis un ancien système, a des données à importer, des processus à configurer et des équipes à former, le budget d'implémentation est distinct — et souvent plus significatif que les licences la première année.",
      },
      {
        type: "h2",
        text: "Exemple : combien peut coûter Odoo pour une PME ?",
      },
      {
        type: "p",
        text: "Les prix Odoo variant selon la zone géographique, les exemples ci-dessous décrivent la structure des licences sans montants fixes. Pour obtenir un chiffrage précis dans votre région, consultez odoo.com/fr_FR/pricing.",
      },
      {
        type: "h3",
        text: "PME A — 10 employés, besoins mixtes",
      },
      {
        type: "ul",
        items: [
          "3 utilisateurs complets (comptable, commercial, gestionnaire) → plan Standard.",
          "7 employés accès limité (présence, congés, frais) → Light User.",
          "Impact : le Light User réduit le coût des 7 profils simples par rapport à des licences Standard complètes.",
        ],
      },
      {
        type: "h3",
        text: "PME B — 20 utilisateurs Odoo complets",
      },
      {
        type: "ul",
        items: [
          "20 utilisateurs Standard.",
          "Tous accèdent à plusieurs modules back-office → aucun n'est qualifiable en Light User.",
        ],
      },
      {
        type: "h3",
        text: "PME C — 30 employés, besoins avancés (API + Studio + multi-société)",
      },
      {
        type: "ul",
        items: [
          "8 utilisateurs Custom (besoins API, Studio, multi-société).",
          "5 utilisateurs Standard (accès multi-modules classiques).",
          "17 Light Users (terrain, entrepôt, POS).",
          "Hébergement Odoo.sh : coût supplémentaire à vérifier sur odoo.com.",
          "Résultat : la combinaison Standard + Light User réduit le coût global vs 30 licences Custom.",
        ],
      },
      {
        type: "p",
        text: "Pour un chiffrage adapté à votre contexte, contactez un partenaire Odoo certifié ou utilisez le configurateur officiel sur odoo.com/fr_FR/pricing.",
      },
      {
        type: "h2",
        text: "Le Light User permet-il réellement de réduire le coût d'Odoo ?",
      },
      {
        type: "p",
        text: "L'impact peut être significatif dans certaines organisations, limité dans d'autres.",
      },
      {
        type: "h3",
        text: "L'économie peut être importante si…",
      },
      {
        type: "ul",
        items: [
          "Vous avez beaucoup d'employés de terrain, d'entrepôt ou de production qui utilisent Odoo uniquement pour des fonctions limitées.",
          "Vous gérez un réseau de magasins avec des caissiers POS sans autre accès.",
          "Votre équipe RH accède uniquement aux congés, à la paie et aux présences.",
          "Votre ratio « employés totaux / utilisateurs back-office » est élevé.",
        ],
      },
      {
        type: "h3",
        text: "L'économie sera limitée si…",
      },
      {
        type: "ul",
        items: [
          "La plupart de vos employés ont besoin d'accéder à plusieurs modules opérationnels.",
          "Vous avez une petite équipe où chacun a des rôles transversaux.",
          "Vos collaborateurs terrain créent aussi des commandes, des opportunités ou des factures.",
        ],
      },
      {
        type: "h2",
        text: "Les erreurs à éviter quand on calcule son budget Odoo",
      },
      {
        type: "ul",
        items: [
          "Compter tous les employés comme utilisateurs complets. Identifiez précisément qui fait quoi avant de dimensionner.",
          "Qualifier des utilisateurs en Light User sans vérifier leurs droits réels. Si un Light User doit créer une commande, ce n'est pas un Light User.",
          "Oublier les intégrations. Une connexion à votre e-commerce ou logistique peut nécessiter l'API externe et donc le plan Custom.",
          "Oublier l'hébergement Odoo.sh. Si vous optez pour Custom avec Odoo.sh, le coût d'hébergement s'ajoute aux licences.",
          "Confondre licence et implémentation. Le projet de déploiement est un coût distinct, souvent plus significatif la première année.",
          "Regarder uniquement le tarif de la première année. Le renouvellement est plus élevé — calculez sur 3 ans.",
          "Ignorer les personnalisations existantes. Leur maintenance sur une nouvelle version est un coût à anticiper.",
          "Sous-estimer la migration de données. Plus vos données sont nombreuses ou hétérogènes, plus la migration est complexe.",
        ],
      },
      {
        type: "h2",
        text: "Comment dimensionner correctement ses licences Odoo ?",
      },
      {
        type: "ul",
        items: [
          "Lister tous les utilisateurs : nom, poste, département. Inclure les prestataires réguliers si applicable.",
          "Identifier leurs tâches dans Odoo : quelles applications ? Lisent-ils ou créent-ils des enregistrements ?",
          "Identifier les applications nécessaires par profil.",
          "Distinguer qui crée ou modifie des données métier (licence complète nécessaire) de qui consulte ou saisit des données simples.",
          "Repérer les accès limités : congés, frais, scan barcode, POS — candidats au Light User.",
          "Vérifier les besoins API, Studio, multi-société : si oui, Custom est nécessaire.",
          "Comparer Standard et Custom selon les besoins identifiés.",
          "Faire valider l'architecture avant souscription — un mauvais dimensionnement est difficile à corriger.",
        ],
      },
      {
        type: "h2",
        text: "Ce que fait MSL-iTECH",
      },
      {
        type: "p",
        text: "En tant qu'[intégrateur Odoo certifié au Maroc](/integrateur-odoo-maroc), MSL-iTECH accompagne les PME dans le dimensionnement de leurs licences avant toute souscription. Nous cartographions vos profils utilisateurs, vos processus et vos applications pour vous proposer une architecture de licences adaptée à votre usage réel — pas au maximum de ce qu'Odoo propose. L'objectif est de ne pas payer pour des fonctionnalités inutiles, et de ne pas manquer ce dont vous avez besoin. Pour estimer le retour sur investissement de votre projet, utilisez notre [outil ROI ERP](/outils/roi-erp).",
      },
      {
        type: "p",
        text: "Pour aller plus loin sur les nouveautés Odoo 20 et comprendre si une migration est pertinente pour vous, consultez notre article : [Odoo 20 : les principales nouveautés et ce qu'elles changent pour votre entreprise](/blog/odoo-20-nouveautes-guide-2026).",
      },
    ],
  },
];
