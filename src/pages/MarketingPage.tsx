import { OdooWebsite, OdooMarketingAutomation, OdooMassMailing } from "@/components/icons/odoo";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles, X } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import marketingHero from "@/assets/marketing-hero.webp";
import marketingSeo from "@/assets/marketing-seo.jpg";
import marketingGeo from "@/assets/marketing-geo.jpg";
import marketingAds from "@/assets/marketing-ads.jpg";

const features = [
  {
    icon: OdooWebsite,
    title: "SEO — Être trouvé sur Google",
    desc: "Audit technique, stratégie de mots-clés, création de pages piliers et de contenus optimisés. Nous ciblons les requêtes à forte intention commerciale pour votre marché.",
    image: marketingSeo,
    imageAlt: "Illustration SEO — référencement Google",
    badge: "SEO",
  },
  {
    icon: OdooMarketingAutomation,
    title: "GEO — Être cité par les IA",
    desc: "Le GEO (Generative Engine Optimization) est le référencement de demain. Nous structurons vos contenus pour être cités par ChatGPT, Perplexity, Claude et Gemini.",
    image: marketingGeo,
    imageAlt: "Illustration GEO — citation par les IA",
    badge: "GEO",
  },
  {
    icon: OdooMassMailing,
    title: "Campagnes d'acquisition",
    desc: "Google Ads, Meta Ads, LinkedIn Ads selon votre cible. Nous gérons vos campagnes de A à Z avec reporting mensuel clair.",
    image: marketingAds,
    imageAlt: "Illustration campagnes d'acquisition payantes",
    badge: "ADS",
  },
];

const faqs = [
  {
    q: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
    a: "Le GEO — aussi appelé AEO (Answer Engine Optimization) — est l'optimisation d'un site pour être cité et recommandé par les moteurs IA : ChatGPT, Perplexity, Claude, Gemini. Concrètement : contenu structuré en questions/réponses, données factuelles datées, balisage JSON-LD FAQPage, fichier llms.txt à la racine.",
  },
  {
    q: "Quel est le tarif d'un accompagnement SEO ou GEO chez MSL-iTECH ?",
    a: "Nos prestations marketing démarrent par un audit digital gratuit. Les missions récurrentes (SEO, GEO, contenu) s'organisent en forfaits mensuels adaptés à la taille du site et au volume de mots-clés visés. Devis sous 24 à 72h après audit.",
  },
  {
    q: "Combien de temps avant de voir des résultats SEO ?",
    a: "Sur des requêtes longue-traîne peu concurrentielles, les premiers gains de positions arrivent en 4 à 8 semaines. Sur des mots-clés concurrentiels (ex. \"intégrateur Odoo Belgique\"), il faut compter 4 à 6 mois de production de contenu et de signaux pour stabiliser la première page.",
  },
  {
    q: "Le GEO remplace-t-il le SEO classique ?",
    a: "Non, il le complète. Les LLM s'appuient en partie sur les pages bien classées dans Google : un bon SEO reste la base. Le GEO ajoute une couche (FAQ structurées, llms.txt, citations factuelles) qui rend le contenu plus facilement réutilisable par les moteurs IA.",
  },
];

function WebsitePromoSection() {
  const included = [
    "Site vitrine 4 à 5 pages au design sur-mesure",
    "Optimisation SEO & GEO dès la conception",
    "100% responsive, performance et accessibilité soignées",
    "Formulaire de contact + analytics + RGPD",
    "3 mois de suivi marketing digital offerts",
  ];
  const excluded = [
    "E-commerce, paiement en ligne, gestion de stock",
    "Calculateurs, simulateurs, outils métier complexes",
    "Espace client, intégrations ERP/CRM avancées",
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "var(--white)" }}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            <span className="inline-block h-px w-8 bg-brand-blue" />
            Offre site web + marketing
            <span className="inline-block h-px w-8 bg-brand-blue" />
          </p>
          <h2 className="font-heading text-3xl font-bold leading-[1.1] text-brand-black md:text-[2.5rem]">
            Votre site vitrine à{" "}
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute inset-x-[-4px] bottom-[8%] -z-0 h-[38%] -rotate-[1.5deg] rounded-[6px]"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <span className="relative z-10">1 300 €</span>
            </span>{" "}
            — 3 mois de suivi marketing offerts
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-brand-grey">
            Un site clair, rapide et bien référencé — pensé pour convertir dès le premier mois. Et pour ne pas vous laisser seul après la mise en ligne, on pilote votre marketing digital pendant 3 mois.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Carte principale — offre */}
          <article
            className="relative overflow-hidden rounded-3xl border bg-white p-8 md:p-10"
            style={{ borderColor: "var(--grey-light)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full opacity-25 blur-3xl"
              style={{ backgroundColor: "var(--gold)" }}
            />

            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{
                  borderColor: "var(--blue)",
                  backgroundColor: "var(--gold)",
                  color: "var(--blue)",
                }}
              >
                <Sparkles size={10} />
                Promo lancement
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey">
                Pack site + marketing
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-end gap-4">
              <p className="font-heading text-5xl font-bold text-brand-black md:text-6xl">
                1 300 €
              </p>
              <p className="pb-2 font-body text-sm text-brand-grey">
                HTVA · paiement en 2 fois possible
              </p>
            </div>
            <p className="mt-2 font-body text-sm font-semibold" style={{ color: "var(--blue)" }}>
              + 3 mois de suivi marketing digital offerts
            </p>

            <ul className="mt-7 space-y-3 border-t pt-6" style={{ borderColor: "var(--grey-light)" }}>
              {included.map((b) => (
                <li key={b} className="flex items-start gap-3 font-body text-sm text-brand-black">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "var(--blue)", color: "var(--gold)" }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-bold transition hover:scale-[1.02]"
                style={{ backgroundColor: "var(--blue)", color: "var(--white)" }}
              >
                Je veux ce pack
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/creation-web"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-body text-sm font-semibold text-brand-blue transition hover:bg-brand-blue/5"
                style={{ borderColor: "var(--blue)" }}
              >
                En savoir plus sur nos sites
              </Link>
            </div>
          </article>

          {/* Carte secondaire — exclusions / sur-devis */}
          <article
            className="relative overflow-hidden rounded-3xl border p-8 md:p-10"
            style={{ borderColor: "var(--grey-light)", backgroundColor: "var(--bg)" }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey">
              Hors pack — sur devis
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold text-brand-black">
              Projets plus complexes
            </h3>
            <p className="mt-3 font-body text-sm text-brand-grey">
              Certains projets demandent un cadrage spécifique. On les chiffre au cas par cas pour ne facturer que le juste nécessaire.
            </p>

            <ul className="mt-6 space-y-3">
              {excluded.map((b) => (
                <li key={b} className="flex items-start gap-3 font-body text-sm text-brand-black">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border"
                    style={{ borderColor: "var(--grey-light)", color: "var(--blue)" }}
                  >
                    <X size={12} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 font-body text-sm font-semibold text-brand-blue underline-offset-4 hover:underline"
            >
              Demander un devis sur-mesure
              <ArrowRight size={14} />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function MarketingPage() {
  useProductSeo({
    title: "Marketing Digital Belgique & Maroc — SEO, GEO & Acquisition | MSL-iTECH",
    description:
      "Audit digital, SEO, référencement IA et campagnes d'acquisition pour PME. MSL-iTECH pilote votre croissance en ligne. Audit gratuit.",
    path: "/marketing-digital",
    faqs,
    ldId: "ld-faq-marketing",
    service: {
      name: "Marketing digital, SEO & GEO",
      description:
        "Audit digital, référencement naturel (SEO), optimisation pour les moteurs IA (GEO/AEO) et campagnes d'acquisition pour PME en Belgique et au Maroc par MSL-iTECH.",
      serviceType: ["SEO", "Référencement IA (GEO/AEO)", "Acquisition digitale"],
    },
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
        <>
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
                      className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-2xl border-2 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.45)]"
                      style={{
                        backgroundColor: "var(--blue)",
                        color: "var(--gold)",
                        borderColor: "var(--gold)",
                      }}
                    >
                      <f.icon size={24} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
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
        <WebsitePromoSection />
        </>
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
      faqs={faqs}
    />
  );
}
