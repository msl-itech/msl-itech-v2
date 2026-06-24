import { useState } from "react";
import { OdooWebsite, OdooMarketingAutomation, OdooMassMailing } from "@/components/icons/odoo";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Sparkles,
  Search,
  Target,
  Rocket,
  BarChart3,
  MessageSquareQuote,
} from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import marketingHero from "@/assets/marketing-hero.webp";
import stepAudit from "@/assets/marketing-step-audit.jpg";
import stepStrategy from "@/assets/marketing-step-strategy.jpg";
import stepExecution from "@/assets/marketing-step-execution.jpg";
import stepReporting from "@/assets/marketing-step-reporting.jpg";

/* ─── Features (3 leviers) ─── */
const features = [
  {
    icon: OdooWebsite,
    title: "SEO — Être trouvé sur Google",
    desc: "Audit technique, stratégie de mots-clés, création de pages piliers et de contenus optimisés. Nous ciblons les requêtes à forte intention commerciale pour votre marché.",
    badge: "SEO",
  },
  {
    icon: OdooMarketingAutomation,
    title: "GEO — Être cité par les IA",
    desc: "Le GEO (Generative Engine Optimization) est le référencement de demain. Nous structurons vos contenus pour être cités par ChatGPT, Perplexity, Claude et Gemini.",
    badge: "GEO",
  },
  {
    icon: OdooMassMailing,
    title: "Campagnes d'acquisition",
    desc: "Google Ads, Meta Ads, LinkedIn Ads selon votre cible. Nous gérons vos campagnes de A à Z avec reporting mensuel clair.",
    badge: "ADS",
  },
];

/* ─── FAQs (sans prix) ─── */
const faqs = [
  {
    q: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
    a: "Le GEO — aussi appelé AEO (Answer Engine Optimization) — est l'optimisation d'un site pour être cité et recommandé par les moteurs IA : ChatGPT, Perplexity, Claude, Gemini. Concrètement : contenu structuré en questions/réponses, données factuelles datées, balisage JSON-LD FAQPage, fichier llms.txt à la racine.",
  },
  {
    q: "Comment se déroule un accompagnement marketing chez MSL-iTECH ?",
    a: "Tout commence par un audit digital gratuit de votre présence en ligne. Nous analysons votre site, vos positions Google, votre visibilité IA et vos canaux d'acquisition. Sur cette base, nous construisons une stratégie personnalisée avec des objectifs clairs et un calendrier d'exécution. Vous recevez un reporting mensuel détaillé.",
  },
  {
    q: "Combien de temps avant de voir des résultats SEO ?",
    a: "Sur des requêtes longue-traîne peu concurrentielles, les premiers gains de positions arrivent en 4 à 8 semaines. Sur des mots-clés concurrentiels (ex. \"intégrateur Odoo Belgique\"), il faut compter 4 à 6 mois de production de contenu et de signaux pour stabiliser la première page.",
  },
  {
    q: "Le GEO remplace-t-il le SEO classique ?",
    a: "Non, il le complète. Les LLM s'appuient en partie sur les pages bien classées dans Google : un bon SEO reste la base. Le GEO ajoute une couche (FAQ structurées, llms.txt, citations factuelles) qui rend le contenu plus facilement réutilisable par les moteurs IA.",
  },
  {
    q: "Qu'est-ce qui est inclus dans l'audit digital gratuit ?",
    a: "L'audit couvre : l'analyse technique de votre site (vitesse, mobile, Core Web Vitals), votre positionnement sur Google pour vos mots-clés stratégiques, votre présence dans les réponses des IA génératives, et une revue de vos canaux d'acquisition actuels. Vous recevez un document de recommandations actionnables sous 24h.",
  },
  {
    q: "Pourquoi une approche sur-mesure plutôt qu'un forfait standard ?",
    a: "Chaque entreprise a un marché, une concurrence et des objectifs différents. Un forfait unique ne peut pas adresser ces spécificités. Notre approche sur-mesure garantit que chaque euro investi cible les leviers les plus rentables pour votre activité, avec des indicateurs de performance adaptés à vos objectifs réels.",
  },
];

/* ─── Processus en 4 étapes ─── */
const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Audit digital gratuit",
    desc: "Nous analysons votre site, vos positions Google, votre visibilité dans les IA et vos canaux d'acquisition. Vous recevez un diagnostic complet sous 24h.",
    highlight: "Gratuit & sans engagement",
    image: stepAudit,
  },
  {
    icon: Target,
    step: "02",
    title: "Stratégie personnalisée",
    desc: "Sur base de l'audit, nous construisons un plan d'action adapté à vos objectifs, votre budget et votre marché. Pas de template — chaque stratégie est unique.",
    highlight: "100% sur-mesure",
    image: stepStrategy,
  },
  {
    icon: Rocket,
    step: "03",
    title: "Mise en œuvre",
    desc: "Nos experts déploient la stratégie : optimisations techniques, création de contenus, configuration des campagnes, structuration GEO. Vous êtes informé à chaque étape.",
    highlight: "Exécution par des experts",
    image: stepExecution,
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Suivi & optimisation",
    desc: "Chaque mois, vous recevez un reporting clair avec les résultats obtenus et les ajustements prévus. On optimise en continu pour maximiser votre ROI.",
    highlight: "Reporting mensuel",
    image: stepReporting,
  },
];

/* ─── Chiffres clés (social proof) ─── */
const stats = [
  { value: "sous 24h", label: "Délai de réponse" },
  { value: "100%", label: "Stratégies sur-mesure" },
  { value: "3", label: "Pays couverts" },
];

/* ═══════════════════════════════════════════════════
   SECTION: Processus sur-mesure (remplace les prix)
   ═══════════════════════════════════════════════════ */
function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="overflow-hidden py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            <span className="inline-block h-px w-8 bg-brand-blue" />
            Notre approche
            <span className="inline-block h-px w-8 bg-brand-blue" />
          </p>
          <h2 className="font-heading text-3xl font-bold leading-[1.1] text-brand-black md:text-[2.5rem]">
            Chaque entreprise est unique —{" "}
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute inset-x-[-4px] bottom-[8%] -z-0 h-[38%] -rotate-[1.5deg] rounded-[6px]"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <span className="relative z-10">votre stratégie aussi</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-brand-grey">
            Pas de forfait rigide ni de solution générique. Nous construisons une
            stratégie digitale taillée pour vos objectifs, votre marché et votre
            budget — avec un suivi transparent à chaque étape.
          </p>
        </div>

        {/* Interactive Accordion + Sticky Image */}
        <div className="mx-auto mt-20 grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: Accordion Steps */}
          <div className="flex flex-col justify-center gap-4">
            {processSteps.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative flex w-full flex-col items-start gap-4 rounded-3xl border p-6 text-left transition-all duration-500 md:p-8 ${
                    isActive
                      ? "bg-white shadow-[0_24px_60px_-20px_rgba(18,77,90,0.22)]"
                      : "bg-transparent hover:bg-white/40"
                  }`}
                  style={{
                    borderColor: isActive ? "var(--gold)" : "var(--grey-light)",
                  }}
                >
                  {/* Glow when active */}
                  {isActive && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full opacity-25 blur-3xl transition-opacity"
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                  )}
                  
                  <div className="flex w-full items-center justify-between">
                    <span
                      className="font-heading text-4xl font-bold transition-colors duration-300 md:text-5xl"
                      style={{ color: isActive ? "var(--gold)" : "var(--grey-light)" }}
                    >
                      {s.step}
                    </span>
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                        isActive ? "scale-110" : "scale-100"
                      }`}
                      style={{
                        backgroundColor: isActive ? "var(--blue)" : "var(--grey-light)",
                        color: isActive ? "var(--gold)" : "var(--grey)",
                      }}
                    >
                      <s.icon size={22} />
                    </span>
                  </div>

                  <div className="mt-2 w-full">
                    <h3 className={`font-heading text-2xl font-bold transition-colors duration-300 ${isActive ? "text-brand-black" : "text-brand-grey"}`}>
                      {s.title}
                    </h3>
                    
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-4">
                          <div className="h-px w-full mb-4" style={{ backgroundColor: "var(--grey-light)" }} />
                          <p className="font-body text-base leading-relaxed text-brand-grey">
                            {s.desc}
                          </p>
                          <div className="mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                            style={{
                              borderColor: "var(--blue)",
                              backgroundColor: "var(--blue-light)",
                              color: "var(--blue)",
                            }}
                          >
                            <Check size={10} strokeWidth={3} />
                            {s.highlight}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Sticky Image Gallery */}
          <div className="relative hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-[2rem] border shadow-[0_24px_60px_-20px_rgba(18,77,90,0.25)]" style={{ borderColor: "var(--grey-light)" }}>
              <div className="aspect-[4/5] w-full">
                {processSteps.map((s, idx) => (
                  <img
                    key={s.step}
                    src={s.image}
                    alt={s.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                      activeStep === idx ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-black/10" />
            </div>
          </div>
        </div>

        {/* CTA intermédiaire */}
        <div className="mt-24 text-center">
          <Link
            to="/contact"
            className="group cta-pulse-gold hover-shine inline-flex items-center gap-2 rounded-full px-8 py-4 font-body text-base font-bold shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
            style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
          >
            Demander mon audit digital gratuit
            <ArrowRight
              size={20}
              className="transition group-hover:translate-x-1"
            />
          </Link>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-brand-grey">
            <span
              aria-hidden
              className="mr-2 inline-block h-1.5 w-1.5 rounded-full align-middle"
              style={{ backgroundColor: "var(--gold)" }}
            />
            Sans engagement · Réponse sous 24h
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION: Social proof (chiffres clés)
   ═══════════════════════════════════════════════════ */
function SocialProofSection() {
  return (
    <section
      className="relative isolate overflow-hidden py-20"
      style={{ backgroundColor: "var(--blue)" }}
    >
      <HeroCursorGlow color="rgba(255, 221, 87, 1)" size={500} intensity={0.35} />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
            <Sparkles size={10} className="text-brand-gold" />
            Des résultats concrets
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-[2.5rem]">
            Ils nous font{" "}
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute inset-x-[-4px] bottom-[8%] -z-0 h-[38%] -rotate-[1.5deg] rounded-[6px]"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <span className="relative z-10">confiance</span>
            </span>
          </h2>
        </div>

        {/* Side-by-side Testimonial and Stats */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Testimonial quote (Left) */}
          <div className="flex h-full flex-col justify-center rounded-[2.5rem] border border-white/15 bg-white/5 p-8 backdrop-blur-md md:p-12">
            <MessageSquareQuote
              size={36}
              className="mb-8"
              style={{ color: "var(--gold)" }}
            />
            <blockquote className="font-heading text-xl font-medium leading-relaxed text-white md:text-3xl">
              "MSL-iTECH a construit une stratégie digitale entièrement adaptée à notre
              activité. En 3 mois, notre trafic organique a doublé et nous recevons
              des demandes de devis qualifiées chaque semaine."
            </blockquote>
            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-heading text-base font-bold shadow-inner"
                style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
              >
                PM
              </div>
              <div>
                <p className="font-body text-base font-bold text-white">
                  Dirigeant PME
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Secteur B2B
                </p>
              </div>
            </div>
          </div>

          {/* Stats stack (Right) */}
          <div className="flex flex-col justify-center gap-6">
            {stats.map((s, idx) => (
              <div
                key={s.label}
                className="group relative flex items-center justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle at right, rgba(255,221,87,0.15) 0%, transparent 60%)"
                  }}
                />
                <p className="font-body text-lg font-medium text-white/80 md:text-xl">
                  {s.label}
                </p>
                <p
                  className="font-heading text-5xl font-bold tracking-tight md:text-6xl"
                  style={{ color: "var(--gold)" }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/realisations#sites-plateformes"
            className="group cta-pulse-gold hover-shine inline-flex items-center gap-2 rounded-full px-8 py-4 font-body text-base font-bold transition hover:scale-[1.02]"
            style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
          >
            Voir nos réalisations
            <ArrowRight size={20} className="transition group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-body text-base font-semibold text-white transition hover:bg-white/10"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE PRINCIPALE
   ═══════════════════════════════════════════════════ */
export default function MarketingPage() {
  useProductSeo({
    title:
      "Marketing Digital Sur-Mesure au Maroc — SEO, GEO & Acquisition | MSL-iTECH",
    description:
      "Stratégie marketing digitale sur-mesure pour PME : audit gratuit, SEO, référencement IA (GEO) et campagnes d'acquisition. MSL-iTECH pilote votre croissance en ligne.",
    path: "/marketing-digital",
    faqs,
    ldId: "ld-faq-marketing",
    service: {
      name: "Marketing digital sur-mesure, SEO & GEO",
      description:
        "Stratégie marketing digitale sur-mesure, audit digital, référencement naturel (SEO), optimisation pour les moteurs IA (GEO/AEO) et campagnes d'acquisition pour PME en Belgique et au Maroc par MSL-iTECH.",
      serviceType: ["SEO", "Référencement IA (GEO/AEO)", "Acquisition digitale", "Stratégie marketing sur-mesure"],
    },
  });

  return (
    <ProductPageShell
      eyebrow="Marketing Digital — Belgique & Maroc"
      title={
        <>
          Vos concurrents captent vos prospects en ligne —{" "}
          <span style={{ color: "var(--gold)" }}>
            inversons la tendance
          </span>
        </>
      }
      intro="Un beau site web ne suffit pas si personne ne le visite. Et dans un monde où ChatGPT, Perplexity et Google répondent directement aux questions de vos prospects, être visible signifie aussi être cité et recommandé par les IA. Nous construisons la stratégie digitale qui correspond à votre entreprise — pas un forfait générique."
      heroImage={marketingHero}
      heroImageAlt="Stratégie marketing digital sur-mesure par MSL-iTECH"
      heroBullets={[
        "Stratégie 100% sur-mesure",
        "Audit digital gratuit & sans engagement",
        "SEO + GEO + Acquisition combinés",
        "Reporting mensuel transparent",
      ]}
      metaNote="Audit offert · Stratégie personnalisée · Réponse sous 24h"
      proposalEyebrow="Le constat"
      proposalTitle={
        <>
          Une stratégie digitale{" "}
          <span className="relative inline-block">
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1 -z-10 h-3 md:h-4"
              style={{
                backgroundColor: "var(--gold)",
                transform: "skew(-6deg)",
              }}
            />
            <span className="relative" style={{ color: "var(--blue)" }}>
              taillée pour vous
            </span>
          </span>
        </>
      }
      featuresEyebrow="Nos 3 leviers de croissance"
      featuresTitle="SEO, GEO et campagnes d'acquisition"
      features={features}
      featuresSlot={
        <>
          {/* Section features — 3 leviers (réutilisation du layout custom) */}
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
              <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((f, i) => (
                  <article
                    key={f.title}
                    className="group relative flex flex-col rounded-3xl border bg-white p-8 transition hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.22)] md:p-10"
                    style={{ borderColor: "var(--grey-light)" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="font-heading text-5xl font-bold leading-none tracking-tight"
                        style={{ color: "var(--gold)" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{
                          borderColor: "var(--blue)",
                          backgroundColor: "var(--blue-light)",
                          color: "var(--blue)",
                        }}
                      >
                        <f.icon size={12} />
                        {f.badge}
                      </span>
                    </div>

                    <div
                      className="mt-8 h-px w-full"
                      style={{ backgroundColor: "var(--grey-light)" }}
                    />

                    <h3 className="mt-6 font-heading text-2xl font-bold leading-tight text-brand-black">
                      {f.title}
                    </h3>
                    <p className="mt-4 font-body text-base leading-relaxed text-brand-grey">
                      {f.desc}
                    </p>

                    <div aria-hidden className="mt-auto pt-8">
                      <span
                        className="block h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                        style={{ backgroundColor: "var(--gold)" }}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Processus sur-mesure (remplace l'ancienne section prix) */}
          <ProcessSection />

          {/* Social proof */}
          <SocialProofSection />
        </>
      }
      whySection={{
        title: "Pourquoi MSL-iTECH pour votre croissance digitale",
        desc: "Nous ne vendons pas de forfaits standardisés. Chaque stratégie est construite sur-mesure, en combinant les fondamentaux du SEO, l'optimisation pour les moteurs génératifs (GEO) et la performance des campagnes publicitaires.",
        points: [
          "Audit digital complet et gratuit avant toute proposition",
          "Stratégie personnalisée adaptée à votre marché et vos objectifs",
          "Contenus structurés pour Google, ChatGPT, Perplexity et Gemini",
          "Reporting mensuel clair et transparent — pas de jargon inutile",
        ],
      }}
      ctaTitle="Demander mon audit digital gratuit"
      ctaSubtitle="Analyse complète de votre présence en ligne · Recommandations concrètes et actionnables · Réponse sous 24h"
      faqs={faqs}
    />
  );
}
