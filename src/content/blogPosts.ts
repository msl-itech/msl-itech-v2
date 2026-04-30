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
  intent?: string;
  relatedPath?: string;
  relatedLabel?: string;
  cta: { title: string; subtitle: string };
  body: BlogSection[];
};

export const blogPosts: BlogPost[] = [
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
    readingTime: "6 min",
    publishedAt: "2026-01-15",
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
      { type: "h2", text: "Les 3 facteurs qui déterminent le prix d'une implémentation Odoo" },
      { type: "h3", text: "1. Le nombre de modules" },
      {
        type: "p",
        text: "Odoo est une plateforme modulaire. Implémenter uniquement le CRM et la facturation prend 10 à 25 heures. Ajouter la gestion de stock, la production et les RH peut porter le projet à 50 à 100 heures.",
      },
      { type: "h3", text: "2. Le volume de données existantes" },
      {
        type: "p",
        text: "Si vous avez 5 000 clients dans votre CRM actuel et 3 ans d'historique comptable, la migration représente un travail significatif. Une implémentation sur données vierges est toujours plus rapide.",
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
        ],
      },
      { type: "h2", text: "Quel pack choisir selon la taille de votre PME ?" },
      {
        type: "p",
        text: "Pour une PME de moins de 10 salariés, un pack 10 à 25 heures (900 € à 2 000 €) est généralement suffisant pour démarrer. Pour une PME de 15 à 30 salariés avec plusieurs modules, comptez un pack 25 à 50 heures (2 000 € à 3 500 €).",
      },
      { type: "h2", text: "Comment éviter les mauvaises surprises tarifaires" },
      {
        type: "p",
        text: "Demandez toujours un plan d'implémentation détaillé avant de signer. Vérifiez si la migration de données est incluse. Choisissez un intégrateur certifié Odoo et vérifiable sur odoo.com/partners.",
      },
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
