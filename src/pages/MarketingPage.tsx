import { Search, Sparkles, Megaphone } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import marketingHero from "@/assets/marketing-hero.webp";
import marketingSeo from "@/assets/marketing-seo.jpg";
import marketingGeo from "@/assets/marketing-geo.jpg";
import marketingAds from "@/assets/marketing-ads.jpg";

const features = [
  {
    icon: Search,
    title: "SEO — Être trouvé sur Google",
    desc: "Audit technique, stratégie de mots-clés, création de pages piliers et de contenus optimisés. Nous ciblons les requêtes à forte intention commerciale pour votre marché.",
    image: marketingSeo,
    imageAlt: "Illustration SEO — référencement Google",
    badge: "SEO",
  },
  {
    icon: Sparkles,
    title: "GEO — Être cité par les IA",
    desc: "Le GEO (Generative Engine Optimization) est le référencement de demain. Nous structurons vos contenus pour être cités par ChatGPT, Perplexity, Claude et Gemini.",
    image: marketingGeo,
    imageAlt: "Illustration GEO — citation par les IA",
    badge: "GEO",
  },
  {
    icon: Megaphone,
    title: "Campagnes d'acquisition",
    desc: "Google Ads, Meta Ads, LinkedIn Ads selon votre cible. Nous gérons vos campagnes de A à Z avec reporting mensuel clair.",
    image: marketingAds,
    imageAlt: "Illustration campagnes d'acquisition payantes",
    badge: "ADS",
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
      featuresSlot={
        <section className="py-24" style={{ backgroundColor: "var(--bg)" }}>
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
                <span className="inline-block h-px w-8 bg-brand-blue" />
                Nos 3 leviers de croissance
              </p>
              <h2 className="font-heading text-3xl font-bold text-brand-black md:text-[2.5rem]">
                SEO, GEO et campagnes d'acquisition
              </h2>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <article
                  key={f.title}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border bg-white transition hover:-translate-y-1 hover:border-[var(--blue)]/30 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.28)]"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: "var(--blue)" }}>
                    <img
                      src={f.image}
                      alt={f.imageAlt}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <span
                      className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{
                        backgroundColor: "var(--gold)",
                        borderColor: "var(--blue)",
                        color: "var(--blue)",
                      }}
                    >
                      {f.badge}
                    </span>
                    <div
                      className="absolute -bottom-6 right-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-[0_12px_30px_-10px_rgba(0,0,0,0.4)]"
                      style={{ backgroundColor: "var(--blue)", color: "var(--gold)" }}
                    >
                      <f.icon size={24} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7 pt-9">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey">
                      0{i + 1}
                    </p>
                    <h3 className="mt-1 font-heading text-xl font-bold text-brand-black">
                      {f.title}
                    </h3>
                    <p className="mt-4 font-body text-base leading-relaxed text-brand-grey">
                      {f.desc}
                    </p>
                  </div>
                  <div
                    aria-hidden
                    className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 transition group-hover:scale-x-100"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
      }
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
