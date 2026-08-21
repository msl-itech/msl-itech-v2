/**
 * Cas clients MSL-iTECH.
 *
 * Règles éditoriales :
 * - `outcomes` décrit uniquement ce qui a été livré et constaté, sans chiffre inventé.
 * - `metrics` et `quote` restent vides jusqu'à validation écrite du client
 *   (chiffre mesuré avant/après go-live + autorisation de citation).
 * - `imageIsIllustration` : true quand le visuel est une illustration sectorielle
 *   et non une photo du projet — l'attribut alt doit le dire.
 */

export type CaseMetric = {
  value: string;
  label: string;
  /** Comment le chiffre a été obtenu (obligatoire pour être affiché). */
  source: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  sector: string;
  country: "Maroc" | "Belgique" | "Cameroun" | "International";
  /** Clé de l'illustration, résolue dans src/lib/case-images.ts */
  imageKey: string;
  imageIsIllustration: boolean;
  iconKey: string;
  context: string;
  challenge: string;
  modules: string[];
  /** Livrables concrets et vérifiables. */
  outcomes: string[];
  /** Résumé court affiché sur la carte. */
  result: string;
  metrics?: CaseMetric[];
  quote?: { text: string; author: string; role: string };
  verifiedOn?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "nasli-holding",
    name: "NASLI HOLDING",
    sector: "Holding & Investissement",
    country: "Maroc",
    imageKey: "scaleup",
    imageIsIllustration: true,
    iconKey: "Landmark",
    context:
      "Groupe d'investissement marocain basé à Marrakech. Société holding (SA) active dans l'hôtellerie, l'enseignement, la santé et l'immobilier de prestige, dont le projet M Avenue.",
    challenge:
      "Des données du personnel dispersées entre filiales et des processus RH gérés hors système, sans référentiel unique des collaborateurs.",
    modules: ["RH", "Gestion du personnel", "Digitalisation des processus RH"],
    outcomes: [
      "Référentiel unique des collaborateurs du groupe dans Odoo RH.",
      "Structuration des dossiers du personnel et des données contractuelles.",
      "Digitalisation des demandes et validations RH (congés, absences, documents).",
    ],
    result:
      "Référentiel RH unique pour le groupe et processus RH digitalisés dans Odoo (dossiers du personnel, congés, absences).",
  },
  {
    slug: "downtown-hotel-corporation",
    name: "DOWNTOWN HOTEL CORPORATION (DHC)",
    sector: "Hôtellerie & Immobilier",
    country: "Maroc",
    imageKey: "hospitality",
    imageIsIllustration: true,
    iconKey: "Home",
    context:
      "Société hôtelière, filiale du groupe Nasli Holding, en charge de l'exploitation hôtelière et de la gestion immobilière et locative de ses actifs.",
    challenge:
      "Un parc immobilier locatif suivi sur tableurs : échéances de loyers calculées à la main, révisions oubliées, reporting reconstruit chaque mois.",
    modules: ["État Locatif", "Abonnements", "Comptabilité"],
    outcomes: [
      "État locatif centralisé : tous les biens loués, baux et échéances dans un seul module.",
      "Calcul automatique des échéances et des révisions de loyers, sans reprise manuelle.",
      "Facturation récurrente des contrats via le module Abonnements.",
      "Comptabilité mise en place et rattachée aux flux locatifs.",
    ],
    result:
      "État locatif centralisé avec échéances et révisions de loyers calculées automatiquement, facturation récurrente et comptabilité intégrée.",
  },
  {
    slug: "ait-oukhali-travaux",
    name: "AIT OUKHALI TRAVAUX",
    sector: "BTP & Marchés Publics",
    country: "Maroc",
    imageKey: "btp",
    imageIsIllustration: true,
    iconKey: "Building2",
    context:
      "Entreprise de travaux répondant à des marchés publics et privés au Maroc.",
    challenge:
      "Appels d'offres suivis sur fichiers, ressaisie systématique entre commercial, chantier, facturation et RH.",
    modules: ["CRM & appels d'offres", "Gestion de projet & Construction", "Facturation", "RH"],
    outcomes: [
      "Pipeline d'appels d'offres suivi dans le CRM (dates limites, statuts, documents).",
      "Chantiers structurés en projets avec tâches, jalons et rattachement des coûts.",
      "Facturation générée depuis les projets, sans ressaisie.",
      "Dossiers du personnel et affectations gérés dans Odoo RH.",
    ],
    result:
      "Chaîne appels d'offres → chantier → facturation dans un seul système : plus de double saisie entre les services.",
  },
  {
    slug: "ais-hector-denis",
    name: "AIS HECTOR DENIS",
    sector: "Agence Immobilière Sociale",
    country: "Belgique",
    imageKey: "realestate",
    imageIsIllustration: true,
    iconKey: "Home",
    context:
      "Agence immobilière sociale à but non lucratif basée à Evere, gestion de plus de 1.000 logements locatifs en Région Bruxelloise.",
    challenge:
      "Un site institutionnel à refondre pour présenter clairement les missions et l'offre de logements aux candidats locataires et propriétaires.",
    modules: ["Site web WordPress professionnel"],
    outcomes: [
      "Site WordPress professionnel livré et mis en production.",
      "Arborescence orientée candidats locataires et propriétaires bailleurs.",
      "Référence publiquement consultable sur notre fiche partenaire officielle Odoo.",
    ],
    result:
      "Site institutionnel WordPress livré, référence publiquement consultable sur notre fiche partenaire Odoo.",
  },
  {
    slug: "edge-sport-maroc",
    name: "EDGE SPORT MAROC",
    sector: "Vente en gros / Vente au détail",
    country: "Maroc",
    imageKey: "wholesale",
    imageIsIllustration: true,
    iconKey: "ShoppingBag",
    context:
      "Distributeur d'articles de sport. Gestion du flux commercial, stocks multi-dépôts et suivi des ventes B2B et B2C.",
    challenge:
      "Stocks suivis dépôt par dépôt sur fichiers séparés : disponibilité incertaine au moment de la vente.",
    modules: ["Ventes", "Achats", "Stock", "Comptabilité", "CRM"],
    outcomes: [
      "Stock multi-dépôts unifié, disponibilité consultable en temps réel depuis le devis.",
      "Cycle devis → commande → livraison → facture intégré dans Odoo.",
      "Réapprovisionnements déclenchés depuis les règles de stock minimum.",
    ],
    result:
      "Disponibilité stock multi-dépôts en temps réel et circuit commercial intégré du devis à la facture.",
  },
  {
    slug: "hamimi-export",
    name: "Hamimi Export",
    sector: "Vente en gros / Vente au détail",
    country: "Maroc",
    imageKey: "b2b",
    imageIsIllustration: true,
    iconKey: "ShoppingBag",
    context:
      "Société d'export et de distribution. Pilotage des commandes internationales, logistique et trésorerie.",
    challenge:
      "Commandes export suivies hors système, visibilité limitée sur les encours et la trésorerie.",
    modules: ["Ventes", "Achats", "Stock", "Comptabilité", "CRM"],
    outcomes: [
      "Commandes export suivies de la confirmation à l'expédition dans Odoo.",
      "Achats et stocks rattachés aux commandes clients.",
      "Comptabilité et encours clients consultables sans consolidation manuelle.",
    ],
    result:
      "Commandes export et encours clients suivis dans un seul système, du bon de commande à la facture.",
  },
  {
    slug: "icc-douala",
    name: "ICC DOUALA",
    sector: "Organisation communautaire",
    country: "Cameroun",
    imageKey: "church",
    imageIsIllustration: true,
    iconKey: "Church",
    context:
      "Église évangélique charismatique à Douala, Cameroun. Gestion des membres, dons, événements et ressources humaines.",
    challenge:
      "Fichiers membres dispersés, dons et événements suivis manuellement, pas de traçabilité financière consolidée.",
    modules: ["CRM", "Site web", "Événements", "Comptabilité", "RH"],
    outcomes: [
      "Base membres centralisée dans le CRM.",
      "Inscriptions aux événements gérées en ligne depuis le site.",
      "Dons et dépenses enregistrés en comptabilité avec reporting consolidé.",
    ],
    result:
      "Base membres centralisée, inscriptions événements en ligne et comptabilité consolidée des dons.",
  },
  {
    slug: "jcd-renov",
    name: "JCD RENOV",
    sector: "Construction et Rénovation",
    country: "Maroc",
    imageKey: "renovation",
    imageIsIllustration: true,
    iconKey: "Hammer",
    context:
      "Entreprise de construction et rénovation. Suivi de chantiers, devis, facturation et gestion des approvisionnements.",
    challenge:
      "Coûts de chantier connus après coup : devis, achats et heures suivis dans des outils séparés.",
    modules: ["Projet", "Ventes", "Achats", "Comptabilité", "RH"],
    outcomes: [
      "Chantiers ouverts comme projets avec budget, achats et heures rattachés.",
      "Devis et situations de facturation générés depuis le projet.",
      "Comparaison budget / réel disponible en cours de chantier, pas en fin d'exercice.",
    ],
    result:
      "Chantiers pilotés en projets Odoo : budget, achats et heures rattachés, écart budget/réel visible en cours de chantier.",
  },
  {
    slug: "les-titis-boutchoux",
    name: "LES TITIS BOUT'CHOUX",
    sector: "Petite enfance",
    country: "Belgique",
    imageKey: "daycare",
    imageIsIllustration: true,
    iconKey: "Baby",
    context:
      "Crèche à Uccle, Bruxelles. Gestion des inscriptions, planning du personnel, facturation familles et communication parents.",
    challenge:
      "Inscriptions et facturation des familles gérées à la main, plannings du personnel hors système.",
    modules: ["CRM", "Ventes", "RH", "Comptabilité", "Site web"],
    outcomes: [
      "Demandes d'inscription suivies dans le CRM depuis le site.",
      "Facturation des familles générée depuis Odoo.",
      "Plannings et dossiers du personnel gérés dans le module RH.",
    ],
    result:
      "Inscriptions suivies depuis le site, facturation des familles et plannings du personnel gérés dans Odoo.",
  },
  {
    slug: "louve-soins",
    name: "LOUVE SOINS SRL",
    sector: "Santé & aide à la personne",
    country: "Belgique",
    imageKey: "health",
    imageIsIllustration: true,
    iconKey: "HeartPulse",
    context:
      "Structure de soins et services de santé. Coordination des interventions, gestion des stocks et facturation.",
    challenge:
      "Interventions coordonnées par téléphone et tableur, consommables suivis approximativement.",
    modules: ["CRM", "Stock", "Ventes", "Comptabilité", "RH"],
    outcomes: [
      "Interventions planifiées et tracées dans Odoo.",
      "Stocks de consommables suivis avec seuils de réapprovisionnement.",
      "Facturation des prestations rattachée aux interventions réalisées.",
    ],
    result:
      "Interventions planifiées et tracées, stocks de consommables sous seuils, facturation rattachée aux prestations.",
  },
  {
    slug: "mc-avocat",
    name: "MC Avocat",
    sector: "Services juridiques",
    country: "Belgique",
    imageKey: "services",
    imageIsIllustration: true,
    iconKey: "Briefcase",
    context:
      "Cabinet d'avocats. Gestion des dossiers clients, temps passé, facturation et conformité.",
    challenge:
      "Temps passé noté à part de la facturation : heures oubliées et facturation tardive.",
    modules: ["CRM", "Projet", "Comptabilité", "RH", "Facturation"],
    outcomes: [
      "Dossiers clients structurés en projets avec feuilles de temps.",
      "Facturation générée depuis le temps saisi, sans reprise manuelle.",
      "Suivi des encours et des règlements dans la comptabilité.",
    ],
    result:
      "Dossiers en projets avec feuilles de temps, facturation générée directement depuis les heures saisies.",
  },
  {
    slug: "phazz4",
    name: "Phazz4",
    sector: "Vente en gros / Vente au détail",
    country: "Maroc",
    imageKey: "retail",
    imageIsIllustration: true,
    iconKey: "ShoppingBag",
    context:
      "Distributeur multi-marques. Pilotage des commandes fournisseurs, inventaires et ventes omnicanal.",
    challenge:
      "Réassort décidé au ressenti, inventaires physiques longs et écarts fréquents.",
    modules: ["Ventes", "Achats", "Stock", "Comptabilité", "CRM"],
    outcomes: [
      "Règles de réapprovisionnement automatiques par référence.",
      "Inventaires tournants outillés dans Odoo Stock.",
      "Ventes des différents canaux rattachées au même stock.",
    ],
    result:
      "Réassort automatisé par règles de stock, inventaires tournants outillés et canaux de vente sur un stock unique.",
  },
  {
    slug: "maroc-destination-sante",
    name: "SARL Maroc Destination Santé",
    sector: "Transport sanitaire & logistique",
    country: "Maroc",
    imageKey: "logistics",
    imageIsIllustration: true,
    iconKey: "Truck",
    context:
      "Transport sanitaire et logistique médicale au Maroc. Planification des tournées, suivi des véhicules et facturation.",
    challenge:
      "Planning des courses tenu sur papier, entretien des véhicules déclenché après panne.",
    modules: ["Flotte", "Stock", "Ventes", "Comptabilité", "Maintenance"],
    outcomes: [
      "Flotte enregistrée dans Odoo avec coûts et documents par véhicule.",
      "Entretiens préventifs planifiés à échéance kilométrique ou calendaire.",
      "Courses facturées depuis les prestations enregistrées.",
    ],
    result:
      "Flotte suivie véhicule par véhicule, entretiens préventifs planifiés et courses facturées depuis les prestations.",
  },
  {
    slug: "cuco-materiaux-construction",
    name: "STE CUCO DES MATERIAUX DE CONSTRUCTION",
    sector: "Matériaux de construction",
    country: "Maroc",
    imageKey: "materials",
    imageIsIllustration: true,
    iconKey: "Factory",
    context:
      "Société de matériaux de construction. Gestion des stocks, approvisionnements, ventes et livraisons.",
    challenge:
      "Ruptures sur les références à forte rotation et bons de livraison difficiles à rapprocher des factures.",
    modules: ["Stock", "Ventes", "Achats", "Comptabilité", "Projet"],
    outcomes: [
      "Stock par emplacement avec seuils sur les références à forte rotation.",
      "Achats déclenchés depuis les besoins constatés.",
      "Livraisons et factures rapprochées automatiquement dans Odoo.",
    ],
    result:
      "Seuils de stock sur les références à forte rotation, achats déclenchés par les besoins et rapprochement livraison/facture automatique.",
  },
  {
    slug: "sd-maintenance",
    name: "Sd Maintenance",
    sector: "Énergie & distribution d'eau",
    country: "Maroc",
    imageKey: "engineering",
    imageIsIllustration: true,
    iconKey: "Zap",
    context:
      "Société de maintenance et distribution d'eau. Gestion des interventions, planning et stocks de pièces.",
    challenge:
      "Demandes d'intervention reçues par téléphone, sans historique par équipement ni suivi des pièces consommées.",
    modules: ["Maintenance", "Projet", "Stock", "Comptabilité", "RH"],
    outcomes: [
      "Demandes d'intervention centralisées avec historique par équipement.",
      "Maintenance préventive planifiée par échéance.",
      "Pièces de rechange suivies en stock et consommées sur l'intervention.",
    ],
    result:
      "Interventions centralisées avec historique par équipement, préventif planifié et pièces consommées suivies en stock.",
  },
  {
    slug: "studely-finance-cameroun",
    name: "Studely Finance Cameroun",
    sector: "Finance & conseil",
    country: "Cameroun",
    imageKey: "finance",
    imageIsIllustration: true,
    iconKey: "Landmark",
    context:
      "Cabinet de conseil financier au Cameroun. Gestion des dossiers clients, conformité et reporting.",
    challenge:
      "Dossiers clients suivis dans des fichiers individuels, reporting reconstitué manuellement.",
    modules: ["CRM", "Comptabilité", "Projet", "RH", "Site web"],
    outcomes: [
      "Dossiers clients structurés et suivis dans le CRM et les projets.",
      "Pièces justificatives rattachées aux dossiers.",
      "Reporting client généré depuis Odoo.",
    ],
    result:
      "Dossiers clients structurés dans le CRM, pièces rattachées et reporting généré depuis Odoo.",
  },
  {
    slug: "tpmr-maroc",
    name: "TPMR Maroc",
    sector: "Transport de personnes",
    country: "Maroc",
    imageKey: "transport",
    imageIsIllustration: true,
    iconKey: "Truck",
    context:
      "Transport de personnes à mobilité réduite au Maroc. Planification, suivi des courses et facturation.",
    challenge:
      "Courses institutionnelles à justifier une par une, facturation partenaires longue à préparer.",
    modules: ["Flotte", "Ventes", "Comptabilité", "RH", "Maintenance"],
    outcomes: [
      "Courses enregistrées avec les informations exigées par les partenaires institutionnels.",
      "Facturation partenaires générée depuis les courses réalisées.",
      "Suivi de la flotte et des entretiens dans Odoo.",
    ],
    result:
      "Courses enregistrées avec les justificatifs attendus et facturation partenaires générée depuis les courses réalisées.",
  },
  {
    slug: "wam-lek-faya",
    name: "Wam Lek Faya, LLC — The Perfect Kick",
    sector: "Épices & sauces piquantes",
    country: "International",
    imageKey: "food",
    imageIsIllustration: true,
    iconKey: "ShoppingBag",
    context:
      "Marque d'épices et sauces piquantes artisanales. Gestion des recettes, lots de production, stocks et ventes en ligne et en magasin.",
    challenge:
      "Production par lots suivie hors système et ventes en ligne désynchronisées du stock réel.",
    modules: ["Ventes", "Stock", "eCommerce", "Comptabilité", "CRM"],
    outcomes: [
      "Recettes et lots de production gérés dans Odoo.",
      "Traçabilité par numéro de lot, de la matière première à la vente.",
      "Boutique en ligne synchronisée avec le stock unique.",
    ],
    result:
      "Lots de production tracés de la matière première à la vente et boutique en ligne synchronisée avec le stock unique.",
  },
  {
    slug: "les-cles-du-sahara",
    name: "Les Clés du Sahara",
    sector: "Agriculture (hydroponie)",
    country: "Maroc",
    imageKey: "agriculture",
    imageIsIllustration: true,
    iconKey: "Leaf",
    context:
      "Ferme hydroponique produisant des salades bio. Gestion de la production, traçabilité, ventes et opérations.",
    challenge:
      "Cycles de culture suivis sur cahiers, traçabilité difficile à produire en cas de contrôle.",
    modules: ["Production (MRP)", "Stock", "Ventes", "Achats", "Comptabilité", "Qualité"],
    outcomes: [
      "Cycles de culture modélisés en ordres de production.",
      "Traçabilité amont/aval par lot, mobilisable en cas de contrôle.",
      "Contrôles qualité intégrés aux étapes de production.",
    ],
    result:
      "Cycles de culture en ordres de production, traçabilité par lot mobilisable en contrôle et points qualité intégrés.",
  },
];

export const caseStudyBySlug = Object.fromEntries(
  caseStudies.map((c) => [c.slug, c]),
) as Record<string, CaseStudy>;
