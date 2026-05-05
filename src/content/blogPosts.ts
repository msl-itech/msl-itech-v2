export type BlogSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  region: "BE" | "MA" | "INT";
  readingTime: string;
  publishedAt: string;
  image?: string;
  intent?: string;
  relatedPath?: string;
  relatedLabel?: string;
  faqs?: { q: string; a: string }[];
  cta: { title: string; subtitle: string };
  body: BlogSection[];
};

import facturationElectroniqueMarocImg from "@/assets/blog/facturation-electronique-maroc.jpg";
import gestionStockMarocImg from "@/assets/blog/gestion-stock-maroc.jpg";
import partenaireVsFreelanceImg from "@/assets/blog/partenaire-vs-freelance.jpg";
import coutOdooBelgiqueImg from "@/assets/blog/cout-odoo-belgique.jpg";

export const blogPosts: BlogPost[] = [
  {
    slug: "facturation-electronique-maroc-2026",
    title:
      "Facturation électronique au Maroc 2026 — ce que votre entreprise doit faire maintenant pour être prête",
    metaTitle:
      "Facturation Électronique Maroc 2026 — Ce que Votre Entreprise Doit Faire Maintenant",
    metaDescription:
      "La facturation électronique est en cours de déploiement au Maroc. Ce que la loi impose, qui est concerné, et comment s'y préparer avec Odoo.",
    excerpt:
      "La facturation électronique se déploie au Maroc. Ce que la loi impose, qui est concerné et comment s'y préparer dès maintenant avec Odoo.",
    category: "Réglementation & conformité",
    region: "MA",
    readingTime: "6 min",
    publishedAt: "2026-02-05",
    image: facturationElectroniqueMarocImg,
    intent: "Réglementaire · Urgence réelle",
    relatedPath: "/odoo-finance",
    relatedLabel: "Voir Odoo Finance & Comptabilité",
    cta: {
      title: "Préparez votre conformité avec MSL-iTECH",
      subtitle:
        "Démo Odoo Finance · Expertise réglementaire marocaine · Réponse sous 24 à 72h",
    },
    body: [
      {
        type: "p",
        text: "La Direction Générale des Impôts (DGI) du Maroc déploie progressivement la facturation électronique. Selon les textes en vigueur, certaines catégories d'entreprises sont concernées dès 2026. Si vous êtes dirigeant d'une PME marocaine et que vous ne vous êtes pas encore penché sur ce sujet, cet article est fait pour vous.",
      },
      { type: "h2", text: "Qu'est-ce que la facturation électronique au Maroc ?" },
      {
        type: "p",
        text: "La facturation électronique marocaine implique l'émission, la transmission et la conservation des factures dans un format numérique structuré. Il ne s'agit pas simplement d'envoyer un PDF par email.",
      },
      { type: "h2", text: "Qui est concerné et à partir de quand ?" },
      {
        type: "p",
        text: "La généralisation s'effectue par étapes selon la taille et le secteur de l'entreprise. Le calendrier exact dépend des décrets d'application. MSL-iTECH suit l'évolution des textes et accompagne ses clients dans la mise en conformité à leur date d'obligation spécifique.",
      },
      { type: "h2", text: "Comment Odoo vous prépare à cette obligation" },
      {
        type: "p",
        text: "Odoo peut être configuré pour accompagner votre mise en conformité selon les exigences applicables à votre secteur et votre calendrier d'obligation. Vous émettez vos factures depuis Odoo dans un format structuré, configuré pour répondre aux exigences applicables à votre situation.",
      },
      { type: "h2", text: "Les 3 risques si vous attendez trop longtemps" },
      {
        type: "ul",
        items: [
          "Sanctions pour non-conformité à partir de la date d'obligation",
          "Précipitation dans l'implémentation sans le temps de former vos équipes",
          "Choisir une solution de fortune qui ne tient pas dans la durée",
        ],
      },
    ],
    faqs: [
      {
        q: "Odoo est-il prêt pour la facturation électronique marocaine ?",
        a: "Odoo peut être configuré pour accompagner votre mise en conformité en fonction des exigences applicables à votre secteur et à votre date d'obligation.",
      },
      {
        q: "Un simple logiciel de facturation PDF est-il suffisant ?",
        a: "Non. La facturation électronique conforme DGI nécessite un format de données structuré et une transmission via un canal agréé. Odoo, correctement configuré par MSL-iTECH, est conçu pour répondre à ces exigences selon leur évolution.",
      },
    ],
  },
  {
    slug: "gestion-stock-maroc-apres-1-5m-mad",
    title:
      "Gestion de stock au Maroc : pourquoi Excel devient un frein à partir de 1,5 million de dirhams de chiffre d'affaires",
    metaTitle:
      "Gestion de Stock Maroc : Pourquoi Excel Devient un Frein après 1,5M MAD",
    metaDescription:
      "À partir de quel CA faut-il arrêter de gérer son stock dans Excel ? Ce que les entreprises marocaines perdent sans outil dédié — et comment y remédier.",
    excerpt:
      "À partir de quel chiffre d'affaires faut-il arrêter de gérer son stock dans Excel ? Le seuil critique pour les PME marocaines.",
    category: "Gestion & opérations",
    region: "MA",
    readingTime: "6 min",
    publishedAt: "2026-01-29",
    image: gestionStockMarocImg,
    intent: "Informationnelle · Funnel haut",
    relatedPath: "/odoo-gestion-stock-maroc",
    relatedLabel: "Découvrir Odoo Gestion de Stock pour le Maroc",
    cta: {
      title: "Voir Odoo Inventaire configuré pour votre activité",
      subtitle: "Démo gratuite · Réponse sous 24 à 72h · +212 6 89 30 62 78",
    },
    body: [
      {
        type: "p",
        text: "Dans les premières années d'activité, Excel suffit. Quelques dizaines de références, un ou deux fournisseurs, une équipe réduite — un tableau bien tenu fait l'affaire. Mais passé un certain seuil, Excel ne suffit plus.",
      },
      { type: "h2", text: "Le seuil critique : 1,5 million de MAD et 5 employés" },
      {
        type: "p",
        text: "C'est le seuil à partir duquel plusieurs choses se produisent simultanément : le nombre de références dépasse ce qu'on peut gérer mentalement, plusieurs personnes touchent au stock en même temps, et les erreurs commencent à coûter plus cher que le logiciel qui les éviterait.",
      },
      { type: "h2", text: "Les 4 pertes invisibles d'une gestion de stock sans outil" },
      { type: "h3", text: "1. Les ruptures de stock non anticipées" },
      {
        type: "p",
        text: "Vous commandez trop tard parce que vous n'aviez pas vu que le stock descendait sous le seuil critique. Un client commande, vous n'avez plus le produit, il part chez un concurrent.",
      },
      { type: "h3", text: "2. Les surstocks qui immobilisent la trésorerie" },
      {
        type: "p",
        text: "Par peur de la rupture, on commande trop. Pour une entreprise marocaine à 1,5M MAD de CA, immobiliser 20 % du stock en surplus représente 300 000 MAD de trésorerie gelée.",
      },
      { type: "h3", text: "3. Les pertes pour péremption (agroalimentaire, pharma)" },
      {
        type: "p",
        text: "Un restaurant marocain perd selon les études sectorielles jusqu'à 27 % de ses aliments faute de gestion rigoureuse.",
      },
      { type: "h3", text: "4. Le temps perdu en gestion manuelle" },
      {
        type: "p",
        text: "Dans une PME marocaine sans logiciel, 15 à 20 % du temps des équipes administratives peut partir dans des tâches à zéro valeur ajoutée.",
      },
      { type: "h2", text: "Odoo Inventaire : ce que vous gagnez dès le premier mois" },
      {
        type: "ul",
        items: [
          "Stock en temps réel",
          "Alertes de réapprovisionnement automatiques",
          "Traçabilité par lot",
          "Inventaire physique simplifié",
          "Commandes fournisseurs automatiques",
          "Intégration caisse et facturation",
        ],
      },
    ],
  },
  {
    slug: "partenaire-odoo-certifie-vs-freelance",
    title:
      "Partenaire Odoo certifié ou freelance — les 5 différences qui impactent vraiment votre projet",
    metaTitle: "Partenaire Odoo Certifié vs Freelance — Ce que ça change vraiment",
    metaDescription:
      "Freelance Odoo ou cabinet certifié ? Les 5 différences concrètes qui impactent votre projet ERP. Guide pour PME belges par MSL-iTECH.",
    excerpt:
      "Freelance Odoo ou cabinet certifié ? Les 5 différences concrètes qui impactent votre projet ERP — analyse honnête pour PME belges.",
    category: "Stratégie & prestataires",
    region: "BE",
    readingTime: "5 min",
    publishedAt: "2026-01-22",
    image: partenaireVsFreelanceImg,
    intent: "Transactionnelle · Comparaison prestataires",
    relatedPath: "/consultant-odoo-belgique",
    relatedLabel: "Découvrir notre approche de consultant Odoo certifié en Belgique",
    cta: {
      title: "Parlez à un consultant certifié Odoo — c'est gratuit",
      subtitle: "30 minutes · Conseils personnalisés · Sans engagement",
    },
    body: [
      {
        type: "p",
        text: "La question revient souvent lors des premières conversations avec nos prospects : « Est-ce qu'on ne ferait pas la même chose avec un freelance Odoo, moins cher ? » C'est une bonne question. Voici une réponse honnête.",
      },
      {
        type: "h2",
        text: "Ce qu'un partenaire certifié fait que la plupart des freelances ne font pas",
      },
      { type: "h3", text: "1. Il suit une méthodologie d'implémentation structurée" },
      {
        type: "p",
        text: "Un partenaire certifié Odoo a suivi la formation officielle de l'éditeur et applique une méthodologie de projet éprouvée — analyse des besoins, configuration, tests, formation, mise en production.",
      },
      { type: "h3", text: "2. Il garantit une continuité de service" },
      {
        type: "p",
        text: "Un freelance, c'est une personne. Si cette personne est en vacances, malade ou change de cap, votre projet s'arrête. Un cabinet certifié a une équipe — donc une continuité.",
      },
      { type: "h3", text: "3. Il a accès aux ressources officielles Odoo" },
      {
        type: "p",
        text: "Les partenaires certifiés ont accès à l'espace partenaire Odoo et au support de l'éditeur pour les cas complexes. C'est un filet de sécurité que vous n'avez pas avec un freelance non certifié.",
      },
      { type: "h3", text: "4. Il est responsable au-delà du déploiement" },
      {
        type: "p",
        text: "Un cabinet a une réputation à défendre. Son modèle économique repose sur des relations clients durables — pas sur des missions ponctuelles.",
      },
      { type: "h3", text: "5. Il connaît votre secteur — pas seulement l'outil" },
      {
        type: "p",
        text: "Un bon partenaire Odoo a implémenté l'ERP dans plusieurs entreprises du même secteur que le vôtre. Il connaît les pièges et les configurations qui fonctionnent.",
      },
      { type: "h2", text: "Quand un freelance peut faire sens" },
      {
        type: "p",
        text: "Un freelance peut convenir pour des projets très limités — une correction de bug ou une personnalisation mineure. Dès que le projet implique plusieurs modules, de la migration et une formation d'équipe, un partenaire certifié est le bon choix.",
      },
    ],
  },
  {
    slug: "cout-implementation-odoo-belgique-2026",
    title: "Combien coûte une implémentation Odoo en Belgique en 2026 ?",
    metaTitle: "Combien coûte une implémentation Odoo en Belgique en 2026 ?",
    metaDescription:
      "Prix, packs, heures consultants : tout ce qu'il faut savoir sur le coût réel d'Odoo pour une PME belge en 2026. Grille tarifaire et conseils pratiques.",
    excerpt:
      "Prix, packs, heures consultants : tout ce qu'il faut savoir sur le coût réel d'Odoo pour une PME belge en 2026.",
    category: "Tarifs & ROI",
    region: "BE",
    readingTime: "9 min",
    publishedAt: "2026-01-15",
    image: coutOdooBelgiqueImg,
    intent: "Transactionnelle · Décision",
    relatedPath: "/tarif-odoo-belgique",
    relatedLabel: "Voir la grille tarifaire Odoo Belgique 2026",
    cta: {
      title: "Estimez votre projet en 30 minutes — Démo gratuite",
      subtitle: "Recommandation personnalisée · Grille tarifaire complète · Sans engagement",
    },
    body: [
      {
        type: "p",
        text: "C'est la question que pose chaque dirigeant de PME belge avant de se lancer dans un projet ERP. Et c'est une question légitime — parce que les réponses qu'on trouve en ligne sont souvent vagues, incomplètes ou délibérément floues. Dans cet article, on vous donne les chiffres réels.",
      },
      {
        type: "p",
        text: "Tout au long de cet article, on a un parti pris : transparence totale sur les fourchettes de prix, sur ce qui les fait varier, et sur les pièges qui font exploser un budget en cours de route. À la fin, vous aurez une estimation crédible de ce que va coûter votre projet — avant même d'avoir signé quoi que ce soit.",
      },
      { type: "h2", text: "Les 3 composantes du coût total Odoo (ce qu'on oublie souvent)" },
      {
        type: "p",
        text: "Avant de parler chiffres, il faut comprendre que le coût d'Odoo se décompose en trois lignes distinctes — et la majorité des devis ne montrent que la troisième.",
      },
      { type: "h3", text: "1. La licence Odoo Enterprise (récurrent annuel)" },
      {
        type: "p",
        text: "Comptez 31,10 €/utilisateur/mois en formule Standard ou 46,80 €/utilisateur/mois en Custom (tarifs Odoo SA en Belgique en 2026). Une PME de 10 utilisateurs sur tous les modules paiera donc entre 3 700 € et 5 600 € par an de licence. Odoo Online inclut l'hébergement ; Odoo.sh ajoute environ 50 €/mois pour la plateforme dédiée.",
      },
      { type: "h3", text: "2. L'hébergement (si Odoo.sh ou auto-hébergé)" },
      {
        type: "p",
        text: "Sur Odoo Online, l'hébergement est compris. Sur Odoo.sh, comptez 60 à 200 €/mois selon le worker et le storage. En auto-hébergement, c'est variable selon votre infra (de 30 à 300 €/mois sur un VPS managé).",
      },
      { type: "h3", text: "3. L'implémentation (le coût visible)" },
      {
        type: "p",
        text: "C'est la ligne qui figure sur les devis. Elle représente le travail du partenaire pour configurer, migrer, former et déployer. C'est ce sur quoi on se concentre dans la suite de l'article.",
      },
      { type: "h2", text: "Les 3 facteurs qui déterminent le prix d'une implémentation Odoo" },
      { type: "h3", text: "1. Le nombre de modules" },
      {
        type: "p",
        text: "Odoo est une plateforme modulaire. Implémenter uniquement le CRM et la facturation prend 10 à 25 heures. Ajouter la gestion de stock, la production et les RH peut porter le projet à 50 à 100 heures.",
      },
      {
        type: "p",
        text: "Concrètement : chaque module ajouté demande paramétrage, mapping de processus, tests et formation. Doubler le périmètre ne double pas le prix — mais il l'augmente significativement parce que les interactions entre modules deviennent plus complexes (un article passe du stock à la facturation, un employé est lié à un projet, une commande déclenche un OF…).",
      },
      { type: "h3", text: "2. Le volume de données existantes" },
      {
        type: "p",
        text: "Si vous avez 5 000 clients dans votre CRM actuel et 3 ans d'historique comptable, la migration représente un travail significatif. Une implémentation sur données vierges est toujours plus rapide.",
      },
      {
        type: "p",
        text: "Règle de pouce : reprendre 12 mois d'historique comptable + base clients/produits ajoute en moyenne 8 à 20 heures de prestation. Reprendre 5 ans d'historique avec rapprochements bancaires complets peut ajouter 40 à 80 heures et nécessite souvent un script de migration sur mesure.",
      },
      { type: "h3", text: "3. Le taux horaire de l'intégrateur" },
      {
        type: "p",
        text: "En Belgique, les taux horaires des consultants Odoo varient entre 80 € et 200 €/heure. Un cabinet établi à Bruxelles facture généralement entre 120 € et 180 €/heure. MSL-iTECH propose des packs d'heures 20 à 50 % plus accessibles que les Success Packs observés sur le marché belge, grâce à notre structure internationale.",
      },
      { type: "h2", text: "La grille de prix réelle pour une PME belge en 2026" },
      {
        type: "ul",
        items: [
          "Projet CRM + Facturation uniquement : 800 € à 2 500 €",
          "Projet CRM + Finance + Stock : 2 000 € à 5 000 €",
          "Projet ERP complet (CRM, Finance, Stock, RH, Production) : 5 000 € à 15 000 €",
          "Multi-sociétés / multi-devises / EDI : ajouter 30 à 60 % au pack équivalent",
          "Développements spécifiques (modules custom) : 100 à 180 €/heure en sus",
        ],
      },
      {
        type: "p",
        text: "Ces fourchettes correspondent à des projets bien cadrés livrés par des partenaires Odoo certifiés en Belgique. En dessous de ces seuils, méfiez-vous : ce sont rarement des prestations complètes (pas de formation, pas de migration, pas de support post-démarrage).",
      },
      { type: "h2", text: "Quel pack choisir selon la taille de votre PME ?" },
      {
        type: "p",
        text: "Pour une PME de moins de 10 salariés, un pack 10 à 25 heures (900 € à 2 000 €) est généralement suffisant pour démarrer. Pour une PME de 15 à 30 salariés avec plusieurs modules, comptez un pack 25 à 50 heures (2 000 € à 3 500 €).",
      },
      {
        type: "p",
        text: "Pour une PME de 30 à 80 salariés avec plusieurs sites ou un cycle métier complexe (BTP, production, santé), prévoyez 80 à 150 heures (8 000 € à 18 000 €) répartis sur 4 à 6 mois. Le ROI typique observé chez nos clients : 12 à 24 mois après le go-live.",
      },
      { type: "h2", text: "Les coûts cachés à anticiper (qui font exploser un budget)" },
      { type: "h3", text: "Les développements spécifiques non chiffrés" },
      {
        type: "p",
        text: "« On le fait en standard » est souvent vrai à 80 %. Les 20 % restants — règles de remise spécifiques, workflow d'approbation, étiquettes douanières marocaines — finissent en module custom. Demandez à votre partenaire de chiffrer explicitement la part standard vs spécifique du devis.",
      },
      { type: "h3", text: "La conduite du changement" },
      {
        type: "p",
        text: "Sous-estimer la formation, c'est mettre en danger l'adoption. Comptez 1 à 2 jours de formation par profil utilisateur (vente, achat, compta, gestionnaire). Sur un projet de 10 utilisateurs avec 4 profils, cela représente 32 à 64 heures à intégrer au pack.",
      },
      { type: "h3", text: "Le support post-démarrage" },
      {
        type: "p",
        text: "Les 30 jours qui suivent le go-live sont critiques : 90 % des questions « bloquantes » remontent à ce moment. Un bon partenaire inclut un forfait support de 8 à 20 heures dans le pack, ou facture un abonnement mensuel transparent (généralement 200 à 800 €/mois).",
      },
      { type: "h2", text: "Comment éviter les mauvaises surprises tarifaires" },
      {
        type: "p",
        text: "Demandez toujours un plan d'implémentation détaillé avant de signer. Vérifiez si la migration de données est incluse. Choisissez un intégrateur certifié Odoo et vérifiable sur odoo.com/partners.",
      },
      {
        type: "ul",
        items: [
          "Demandez un détail jour/homme par module — pas seulement un total",
          "Faites lister explicitement ce qui est inclus / exclu (formation, migration, support)",
          "Exigez un point d'étape à 50 % du budget consommé pour anticiper les dépassements",
          "Vérifiez le statut Partenaire sur odoo.com/partners (Ready, Silver, Gold)",
          "Demandez 2 références clients du même secteur que le vôtre",
        ],
      },
      { type: "h2", text: "Le calcul de TCO sur 3 ans (la vraie question)" },
      {
        type: "p",
        text: "Pour décider, ne regardez pas le prix d'implémentation seul — calculez le TCO 3 ans : licence + hébergement + implémentation + support. Pour une PME belge type (10 utilisateurs, 4 modules, hébergement Online) : environ 14 000 à 25 000 € sur 3 ans, tout compris. C'est généralement 30 à 50 % moins cher qu'un SAP Business One ou un Sage X3 équivalent.",
      },
    ],
    faqs: [
      {
        q: "Quel est le prix d'une implémentation Odoo en Belgique en 2026 ?",
        a: "Pour une PME belge type, comptez 800 € à 2 500 € pour un projet CRM + Facturation, 2 000 € à 5 000 € pour CRM + Finance + Stock, et 5 000 € à 15 000 € pour un ERP complet (CRM, Finance, Stock, RH, Production). Ces prix concernent l'implémentation par un partenaire certifié et n'incluent pas les licences Odoo.",
      },
      {
        q: "Combien coûte la licence Odoo Enterprise par utilisateur ?",
        a: "En 2026, la licence Odoo Enterprise est facturée 31,10 €/utilisateur/mois en formule Standard et 46,80 €/utilisateur/mois en Custom (tarifs Odoo SA Belgique). Odoo Online inclut l'hébergement ; Odoo.sh ajoute environ 50 €/mois pour la plateforme dédiée.",
      },
      {
        q: "Quel taux horaire pour un consultant Odoo certifié en Belgique ?",
        a: "Les taux horaires des consultants Odoo en Belgique varient entre 80 € et 200 €/heure. Un cabinet établi à Bruxelles facture généralement entre 120 € et 180 €/heure. MSL-iTECH propose des packs 20 à 50 % plus accessibles grâce à sa structure internationale Belgique-Maroc.",
      },
      {
        q: "Quels sont les coûts cachés d'un projet Odoo ?",
        a: "Les principaux coûts cachés sont : les développements spécifiques non chiffrés à l'avance, la conduite du changement (formation des utilisateurs), le support post-démarrage des 30 premiers jours et la migration de données historiques. Demandez toujours un détail jour/homme par module et la liste explicite des inclus/exclus avant de signer.",
      },
      {
        q: "Quel est le TCO d'Odoo sur 3 ans pour une PME ?",
        a: "Pour une PME belge type (10 utilisateurs, 4 modules, hébergement Odoo Online), le TCO 3 ans tout compris (licence + hébergement + implémentation + support) se situe entre 14 000 € et 25 000 €. C'est généralement 30 à 50 % moins cher qu'un SAP Business One ou Sage X3 équivalent.",
      },
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
