import { useEffect } from "react";

const SITE = "https://msl-itech.com";

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
  "@id": `${SITE}/#service`,
  name: "MSL-iTECH — Implémentation Odoo & Services Digitaux",
  url: SITE,
  description:
    "Odoo Ready Partner au Maroc — consultants certifiés v18 & v19. Implémentation ERP, développement de modules custom et personnalisation d'Odoo natif, création web React/WordPress et marketing digital. Accompagnement à distance des PME en Belgique, au Canada et à l'international.",
  provider: { "@id": `${SITE}/#organization` },
  areaServed: ["BE", "MA", "CA"],
  serviceType: [
    "Implémentation Odoo ERP",
    "Développement de modules Odoo sur mesure",
    "Personnalisation d'Odoo natif",
    "Création de sites web",
    "Marketing digital",
    "Référencement SEO",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Odoo Ready Partner — consultants certifiés v18 & v19",
    url: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
  },
};

export const localBusinessBeSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}/#localbusiness-be`,
  name: "MSL-iTECH — Service Belgique (à distance)",
  url: SITE,
  telephone: "+32-2-886-05-49",
  email: "info@msl-itech.com",
  description:
    "Odoo Ready Partner au Maroc — consultants certifiés v18 & v19. Accompagnement à distance des PME belges. Implémentation ERP, modules custom et personnalisation d'Odoo natif. Pas de bureau physique en Belgique.",
  priceRange: "€€",
  areaServed: "BE",
  sameAs: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
};

export const localBusinessMaSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE}/#localbusiness-ma`,
  name: "MSL-iTECH Maroc",
  url: SITE,
  telephone: "+212-6-89-30-62-78",
  email: "info@msl-itech.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "951 Q.I. Al Massar N°2, Route de Safi",
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  description:
    "Odoo Ready Partner au Maroc — consultants certifiés v18 & v19 — basé à Marrakech. Implémentation ERP, modules custom et personnalisation d'Odoo natif pour PME marocaines : HORECA, BTP, Santé, Commerce. Accompagne également des clients en Belgique et au Canada à distance.",
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-18:00",
  areaServed: "MA",
  sameAs: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
};

export const localBusinessCaSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}/#localbusiness-ca`,
  name: "MSL-iTECH — Service Canada (à distance)",
  url: SITE,
  email: "info@msl-itech.com",
  description:
    "Odoo Ready Partner au Maroc — consultants certifiés v18 & v19. Accompagnement à distance des PME canadiennes francophones. Implémentation ERP, modules custom et personnalisation d'Odoo natif. Pas de bureau physique au Canada.",
  priceRange: "$$",
  areaServed: "CA",
  sameAs: "https://www.odoo.com/fr_FR/partners/msl-itech-15851608",
};
