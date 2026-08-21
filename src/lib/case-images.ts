import caseBe from "@/assets/home/case-be.webp";
import caseMa from "@/assets/home/case-ma.webp";
import caseChurch from "@/assets/home/case-church.webp";
import caseDaycare from "@/assets/home/case-daycare.webp";
import sectorWholesale from "@/assets/home/sector-wholesale.webp";
import sectorBtp from "@/assets/home/sector-btp.webp";
import sectorHealth from "@/assets/home/sector-health.webp";
import sectorServices from "@/assets/home/sector-services.webp";
import sectorLogistics from "@/assets/home/sector-logistics.webp";
import sectorEngineering from "@/assets/home/sector-engineering.webp";
import sectorFood from "@/assets/home/sector-food.webp";
import sectorB2b from "@/assets/home/sector-b2b.webp";
import sectorScaleup from "@/assets/home/sector-scaleup.webp";
import sectorHoreca from "@/assets/home/sector-horeca.webp";
import btpHero from "@/assets/btp-hero.webp";
import productionHero from "@/assets/production-hero.webp";
import servicesHero from "@/assets/services-hero.webp";
import stockHero from "@/assets/stock-hero.webp";
import financeHero from "@/assets/finance-hero.webp";
import transportHero from "@/assets/transport-hero.webp";

export const caseImageByKey: Record<string, string> = {
  scaleup: sectorScaleup,
  hospitality: sectorHoreca,
  btp: sectorBtp,
  realestate: caseBe,
  wholesale: sectorWholesale,
  b2b: sectorB2b,
  church: caseChurch,
  renovation: btpHero,
  daycare: caseDaycare,
  health: sectorHealth,
  services: servicesHero,
  retail: stockHero,
  logistics: sectorLogistics,
  materials: productionHero,
  engineering: sectorEngineering,
  finance: financeHero,
  transport: transportHero,
  food: sectorFood,
  agriculture: caseMa,
};

/** Alt honnête : le visuel est une illustration sectorielle, pas une photo du projet. */
export function caseImageAlt(sector: string, isIllustration: boolean, name: string) {
  return isIllustration
    ? `Illustration sectorielle — ${sector}`
    : `Projet Odoo réalisé par MSL-iTECH pour ${name}`;
}
