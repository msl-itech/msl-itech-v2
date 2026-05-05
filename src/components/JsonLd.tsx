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
    "Partenaire officiel Odoo. Implémentation ERP certifiée, création web React/WordPress et marketing digital pour PME en Belgique et au Maroc. Packs d'heures 20 à 50% plus accessibles que les Success Packs observés sur le marché belge.",
  provider: { "@id": "https://www.msl-itech.com/#organization" },
  areaServed: ["BE", "MA", "CA"],
  serviceType: [
    "Implémentation Odoo ERP",
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
    name: "Partenaire officiel Odoo certifié",
    url: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
  },
};

export const localBusinessBeSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.msl-itech.com/#localbusiness-be",
  name: "MSL-iTECH Belgique",
  url: "https://www.msl-itech.com",
  telephone: "+32-2-886-05-49",
  email: "info@msl-itech.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bruxelles",
    addressCountry: "BE",
  },
  description:
    "Partenaire officiel Odoo en Belgique. Implémentation ERP, création web et marketing digital pour PME belges.",
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
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
    "Partenaire officiel Odoo au Maroc. Implémentation ERP pour PME marocaines : HORECA, BTP, Santé, Commerce.",
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
};