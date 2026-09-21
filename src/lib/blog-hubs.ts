import type { BlogPost } from "@/content/blogPosts";

/* ------------------------------------------------------------------ *
 * Blog Hubs — editorial clusters that group articles by intent.
 *
 * Each hub maps to:
 * • A breadcrumb level (Accueil › Blog › Hub › Article)
 * • A "Ce que fait MSL-iTECH" CTA at the end of articles
 * • A hub page (/blog/:hubSlug) with intro + reading order
 * ------------------------------------------------------------------ */

export type BlogHub = {
  slug: string;
  /** Display name used in breadcrumbs and headings. */
  name: string;
  /** CTA label shown in the "Ce que fait MSL-iTECH" block. */
  ctaLabel: string;
  /** CTA destination path. */
  ctaPath: string;
  /** Pillar page for the hub (linked from related articles). */
  pillarPath: string;
  /** Default service/city page linked from related articles. */
  defaultServicePath: string;
  /** ~150-word intro paragraph for the hub page. */
  intro: string;
  /** 3-line description for the "Ce que fait MSL-iTECH" end-of-article block. */
  mslBlock: string;
};

export const BLOG_HUBS: BlogHub[] = [
  {
    slug: "facturation-electronique-dgi",
    name: "Facturation électronique DGI",
    ctaLabel: "Vérifier ma conformité en 2 minutes",
    ctaPath: "/outils/conformite-dgi",
    pillarPath: "/blog/facturation-electronique-dgi",
    defaultServicePath: "/odoo-finance-comptabilite",
    intro:
      "La facturation électronique devient obligatoire au Maroc. La DGI impose un calendrier progressif : grandes entreprises d'abord, PME ensuite. Chaque facture B2B devra être émise dans un format structuré (XML/UBL) et transmise via une plateforme conforme. Les carnets à souches, les factures Word et les classeurs Excel ne passeront plus. Ce hub rassemble nos analyses sur le calendrier DGI, les formats acceptés, les mentions obligatoires et la méthode pour basculer sans interrompre votre activité. Chaque article est sourcé, daté et mis à jour dès qu'un nouveau texte officiel paraît. Commencez par l'article pilier pour une vue d'ensemble, puis consultez les guides pratiques selon votre situation.",
    mslBlock:
      "MSL-iTECH est Odoo Ready Partner certifié v18 & v19. Nous déployons la facturation électronique conforme DGI en 4 à 8 semaines pour les PME marocaines, avec reprise de données, formation et support post-déploiement.",
  },
  {
    slug: "acheter-odoo",
    name: "Acheter Odoo : prix, comparatifs, intégrateur",
    ctaLabel: "Recevoir un devis détaillé sous 48 h",
    ctaPath: "/contact?besoin=erp",
    pillarPath: "/blog/acheter-odoo",
    defaultServicePath: "/odoo-erp",
    intro:
      "Vous envisagez Odoo pour votre PME et vous cherchez des réponses concrètes : combien ça coûte, quel intégrateur choisir, comment se compare Odoo face à Sage ou SAP, quel ROI attendre la première année ? Ce hub regroupe nos comparatifs chiffrés, nos grilles tarifaires et nos guides de sélection d'intégrateur. Chaque article inclut des fourchettes de prix vérifiables et des critères objectifs pour vous aider à décider sans pression commerciale. Nous sommes Odoo Ready Partner — notre parti pris est transparent — mais les chiffres parlent d'eux-mêmes. Commencez par le comparatif global, puis affinez avec le calculateur ROI.",
    mslBlock:
      "MSL-iTECH est Odoo Ready Partner basé à Marrakech. Nous accompagnons les PME du cadrage gratuit au déploiement complet : audit des besoins, estimation budgétaire, implémentation et formation. Devis détaillé sous 48 h, sans engagement.",
  },
  {
    slug: "problematiques-metier",
    name: "Problématiques métier",
    ctaLabel: "Voir comment Odoo s'applique à votre secteur",
    ctaPath: "/realisations",
    pillarPath: "/blog/problematiques-metier",
    defaultServicePath: "/odoo-erp",
    intro:
      "Chaque secteur a ses propres contraintes : traçabilité des lots en agroalimentaire, suivi de chantier en BTP, gestion des chambres en hôtellerie, relances automatiques en services B2B. Ce hub regroupe nos analyses métier : comment Odoo répond aux problématiques concrètes des PME marocaines, quels modules activer en priorité, quels pièges éviter. Les articles couvrent la gestion de stock après un certain seuil de CA, le pilotage financier pour les DAF, l'automatisation des relances et l'intégration de l'IA dans les processus opérationnels. Chaque cas est illustré par des références clients vérifiables sur notre fiche partenaire Odoo.",
    mslBlock:
      "MSL-iTECH est Odoo Ready Partner avec des références vérifiables en HORECA, BTP, santé, commerce et transport. Nous adaptons Odoo aux contraintes spécifiques de votre secteur : modules métier, workflows personnalisés et intégrations API.",
  },
  {
    slug: "sites-web-acquisition",
    name: "Sites web & acquisition",
    ctaLabel: "Recevoir l'audit gratuit de mon site",
    ctaPath: "/outils/diagnostic-digital",
    pillarPath: "/blog/sites-web-acquisition",
    defaultServicePath: "/creation-web",
    intro:
      "Votre site web est votre commercial qui travaille 24h/24 — encore faut-il qu'il soit trouvé, compris et qu'il convertisse. Ce hub rassemble nos articles sur la création web performante, le SEO technique, la connexion site-CRM et les stratégies d'acquisition digitale pour les PME. Pourquoi votre site ne génère aucun client ? Comment relier votre formulaire de contact à Odoo CRM ? Quels indicateurs suivre pour mesurer le ROI de votre présence en ligne ? Chaque article donne des réponses actionnables, avec des exemples concrets et des outils gratuits pour auditer votre situation.",
    mslBlock:
      "MSL-iTECH conçoit des sites web haute performance connectés à Odoo CRM. SEO technique, formulaires intelligents et suivi des conversions — votre site devient un vrai canal d'acquisition.",
  },
  {
    slug: "belgique",
    name: "Odoo en Belgique",
    ctaLabel: "Parler à un consultant Odoo en Belgique",
    ctaPath: "/contact?pays=BE",
    pillarPath: "/blog/belgique",
    defaultServicePath: "/contact?pays=BE",
    intro:
      "MSL-iTECH accompagne les PME belges dans leur déploiement Odoo, à distance depuis le Maroc avec des tarifs 20 à 50 % plus accessibles que les grands cabinets d'intégration belges. Ce hub regroupe nos articles dédiés au marché belge : réglementation, fiscalité, cas d'usage et retours d'expérience. Le contenu est en français — tant que le public cible reste francophone, pas de hreflang nécessaire. Chaque article est rédigé en tenant compte des spécificités belges : TVA, comptabilité PCMN, obligations légales et écosystème local.",
    mslBlock:
      "MSL-iTECH accompagne les PME belges à distance avec des tarifs 20 à 50 % plus accessibles que les grands cabinets belges. Consultants certifiés Odoo v18 & v19, comptabilité PCMN et TVA belge.",
  },
];

/**
 * Category → hub slug mapping.
 * If a category doesn't appear, it falls back to "problematiques-metier".
 */
const CATEGORY_TO_HUB: Record<string, string> = {
  "Conformité & DGI": "facturation-electronique-dgi",
  "Réglementation & conformité": "facturation-electronique-dgi",
  "Tarifs & ROI": "acheter-odoo",
  "ROI & Automatisation": "acheter-odoo",
  "Comparatifs ERP": "acheter-odoo",
  "Migration & implémentation": "acheter-odoo",
  "ERP & Odoo": "acheter-odoo",
  "Marketing digital": "sites-web-acquisition",
  "Gestion & opérations": "problematiques-metier",
  "Direction financière": "problematiques-metier",
  "Architecture & hébergement": "problematiques-metier",
  "IA & Automatisation": "problematiques-metier",
  "Données & IA": "problematiques-metier",
  "ERP & Automatisation": "problematiques-metier",
  "Transformation digitale": "problematiques-metier",
};

/** Returns the hub for a given blog post. Belgian posts go to the "belgique" hub. */
export function getHubForPost(post: BlogPost): BlogHub {
  if (post.region === "BE") {
    return BLOG_HUBS.find((h) => h.slug === "belgique")!;
  }
  const hubSlug = CATEGORY_TO_HUB[post.category] ?? "problematiques-metier";
  return BLOG_HUBS.find((h) => h.slug === hubSlug)!;
}

/** Returns the hub by slug, or undefined. */
export function getHubBySlug(slug: string): BlogHub | undefined {
  return BLOG_HUBS.find((h) => h.slug === slug);
}

/** Returns all posts in a given hub, sorted by date descending. */
export function getPostsByHub(
  hubSlug: string,
  allPosts: BlogPost[],
): BlogPost[] {
  return allPosts
    .filter((p) => !p.noIndex && getHubForPost(p).slug === hubSlug)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
