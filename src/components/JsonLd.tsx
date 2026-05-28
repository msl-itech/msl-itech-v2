import { useEffect } from "react";

/**
 * Injecte un bloc <script type="application/ld+json"> dans le <head>.
 * Le script est identifié par `id` et nettoyé au démontage.
 */
export function JsonLd({ id, data }: { id: string; data: Record<string, unknown> }) {
  useEffect(() => {
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, [id, JSON.stringify(data)]);
  return null;
}

/* ----------- Schemas réutilisables ----------- */

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.msl-itech.com/#service",
  name: "MSL-iTECH — Implémentation Odoo & Services Digitaux",
  url: "https://www.msl-itech.com",
  description:
    "Odoo Ready Partner certifié au Maroc (v18 & v19). Implémentation ERP, développement de modules custom et personnalisation d'Odoo natif, création web React/WordPress et marketing digital. Accompagnement à distance des PME en Belgique, au Canada et à l'international. Packs d'heures 20 à 50% plus accessibles que les Success Packs observés sur le marché belge.",
  provider: { "@id": "https://www.msl-itech.com/#organization" },
  areaServed: ["BE", "MA", "CA"],
  serviceType: [
    "Implémentation Odoo ERP",
    "Développement de modules Odoo sur mesure",
    "Personnalisation d'Odoo natif",
    "Création de sites web",
    "Marketing digital",
    "Référencement SEO",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Pack Essentiel Odoo",
      price: "400",
      priceCurrency: "EUR",
      description: "Pack 4 heures — Support fondamental Odoo",
    },
    {
      "@type": "Offer",
      name: "Pack Elite Odoo",
      price: "8500",
      priceCurrency: "EUR",
      description: "Pack 200 heures — Vision 360, solution complète",
    },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Odoo Ready Partner — certifié v18 & v19",
    url: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "37",
  },
};

/* ----------- Reviews partagées (3 témoignages publics) ----------- */

const sharedReviews = [
  {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "Karim B." },
    reviewBody:
      "Implémentation Odoo livrée dans les délais. Équipe MSL-iTECH réactive et pédagogue, montée en compétence rapide pour nos équipes.",
  },
  {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "Sophie L." },
    reviewBody:
      "Migration Odoo SaaS → on-premise gérée sans accroc. Reporting financier enfin fiable. Excellent rapport qualité/prix.",
  },
  {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "Hassan E." },
    reviewBody:
      "Déploiement HORECA multi-points de vente : caisse, stock et compta unifiés. ROI visible dès le 3ᵉ mois.",
  },
];

const sharedAggregateRating = {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "37",
};

export const localBusinessBeSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.msl-itech.com/#localbusiness-be",
  name: "MSL-iTECH — Service Belgique (à distance)",
  url: "https://www.msl-itech.com",
  telephone: "+32-2-886-05-49",
  email: "info@msl-itech.com",
  description:
    "Odoo Ready Partner certifié au Maroc (v18 & v19), accompagnement à distance des PME belges. Implémentation ERP, modules custom et personnalisation d'Odoo natif. Pas de bureau physique en Belgique.",
  priceRange: "€€",
  areaServed: "BE",
  sameAs: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
  aggregateRating: sharedAggregateRating,
  review: sharedReviews,
};

export const localBusinessMaSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.msl-itech.com/#localbusiness-ma",
  name: "MSL-iTECH Maroc",
  url: "https://www.msl-itech.com",
  telephone: "+212-6-89-30-62-78",
  email: "info@msl-itech.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "951 Q.I. Al Massar N°2, Route de Safi",
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  description:
    "Odoo Ready Partner certifié (v18 & v19) basé à Marrakech. Implémentation ERP, modules custom et personnalisation d'Odoo natif pour PME marocaines : HORECA, BTP, Santé, Commerce. Accompagne également des clients en Belgique et au Canada à distance.",
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-18:00",
  areaServed: "MA",
  sameAs: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
  aggregateRating: sharedAggregateRating,
  review: sharedReviews,
};

export const localBusinessCaSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.msl-itech.com/#localbusiness-ca",
  name: "MSL-iTECH — Service Canada (à distance)",
  url: "https://www.msl-itech.com",
  email: "info@msl-itech.com",
  description:
    "Odoo Ready Partner certifié au Maroc (v18 & v19), accompagnement à distance des PME canadiennes francophones. Implémentation ERP, modules custom et personnalisation d'Odoo natif. Pas de bureau physique au Canada.",
  priceRange: "$$",
  areaServed: "CA",
  sameAs: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
  aggregateRating: sharedAggregateRating,
  review: sharedReviews,
};