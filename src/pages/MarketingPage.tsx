import { Search, Sparkles, Megaphone } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import marketingHero from "@/assets/marketing-hero.webp";

const features = [
  {
    icon: Search,
    title: "SEO — Être trouvé sur Google",
    desc: "Audit technique, stratégie de mots-clés, création de pages piliers et de contenus optimisés. Nous ciblons les requêtes à forte intention commerciale pour votre marché.",
  },
  {
    icon: Sparkles,
    title: "GEO — Être cité par les IA",
    desc: "Le GEO (Generative Engine Optimization) est le référencement de demain. Nous structurons vos contenus pour être cités par ChatGPT, Perplexity, Claude et Gemini.",
  },
  {
    icon: Megaphone,
    title: "Campagnes d'acquisition",
    desc: "Google Ads, Meta Ads, LinkedIn Ads selon votre cible. Nous gérons vos campagnes de A à Z avec reporting mensuel clair.",
  },
];

export default function MarketingPage() {
  useProductSeo({
    title: "Marketing Digital Belgique & Maroc — SEO, GEO & Acquisition | MSL-iTECH",
    description:
      "Audit digital, SEO, référencement IA et campagnes d'acquisition pour PME. MSL-iTECH pilote votre croissance en ligne. Audit gratuit.",
    path: "/marketing-digital",
  });

  return (
    <ProductPageShell
      eyebrow="Marketing Digital — Belgique & Maroc"
      title={
        <>
          Votre site existe sur Google — mais vos prospects idéaux{" "}
          <span style={{ color: "var(--gold)" }}>ne le trouvent pas</span>
        </>
      }
      intro="Avoir un beau site web ne suffit pas si personne ne le visite. Et dans un monde où ChatGPT, Perplexity et Google répondent directement aux questions de vos prospects, être visible signifie aussi être cité et recommandé par les IA."
      heroImage={marketingHero}
      heroImageAlt="Tableau de bord marketing digital, SEO et GEO par MSL-iTECH"
      metaNote="Analyse de votre présence en ligne · Recommandations concrètes · Réponse sous 24 à 72h"
      featuresEyebrow="Nos 3 leviers de croissance"
      featuresTitle="SEO, GEO et campagnes d'acquisition"
      features={features}
      whySection={{
        title: "Pourquoi MSL-iTECH pour votre croissance digitale",
        desc: "Nous combinons les fondamentaux du SEO, l'optimisation pour les moteurs génératifs (GEO) et la performance des régies publicitaires pour générer des leads qualifiés.",
        points: [
          "Audit technique et stratégie de mots-clés",
          "Contenus structurés pour ChatGPT, Perplexity et Gemini",
          "Campagnes Google Ads, Meta Ads et LinkedIn Ads",
          "Reporting mensuel clair et orienté résultats",
        ],
      }}
      ctaTitle="Demander mon audit digital gratuit"
      ctaSubtitle="Analyse de votre présence en ligne · Recommandations concrètes · Réponse sous 24 à 72h"
    />
  );
}
