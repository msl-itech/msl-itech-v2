import { ArrowRight, Check, Code2, Gauge, Globe, Rocket, Search, Smartphone, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import webHero from "@/assets/web-hero.webp";

const features = [
  {
    icon: Code2,
    title: "React / Lovable — pour les projets ambitieux",
    desc: "Performance maximale, personnalisation totale, expérience utilisateur irréprochable. Délai : 6 à 12 semaines selon la complexité.",
  },
  {
    icon: Globe,
    title: "WordPress — pour une présence rapide et efficace",
    desc: "Déployé en 2 à 6 semaines, facile à maintenir en autonomie, excellent rapport qualité-prix.",
  },
  {
    icon: Rocket,
    title: "Ce que tous nos sites intègrent",
    desc: "Optimisation SEO dès la conception, compatibilité mobile, temps de chargement optimisé, pré-rendu pour l'indexation, formulaire de conversion et analytics.",
  },
];

function TechShowcase() {
  const stacks = [
    {
      tag: "Premium · Sur-mesure",
      icon: Code2,
      title: "React / Lovable",
      subtitle: "Pour les projets ambitieux",
      desc: "Performance maximale, personnalisation totale, expérience utilisateur irréprochable. L'arme idéale pour vous démarquer durablement.",
      delay: "6 à 12 semaines",
      perfect: ["Marque premium", "App SaaS / interne", "Site corporate"],
      bullets: [
        "Architecture moderne, pré-rendue pour Google",
        "Animations sur-mesure, micro-interactions",
        "Évolutif vers une vraie plateforme",
      ],
      accent: false,
    },
    {
      tag: "Rapide · Autonome",
      icon: Globe,
      title: "WordPress",
      subtitle: "Pour une présence rapide et efficace",
      desc: "Déployé vite, facile à maintenir en autonomie, excellent rapport qualité-prix. Le bon choix pour démarrer ou pivoter sans surcoût.",
      delay: "2 à 6 semaines",
      perfect: ["Site vitrine", "Blog éditorial", "Catalogue produits"],
      bullets: [
        "Vous gardez la main sur le contenu",
        "Écosystème riche de plugins éprouvés",
        "Hébergement & maintenance simples",
      ],
      accent: true,
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            <span className="inline-block h-px w-8 bg-brand-blue" />
            Deux technologies, deux cas d'usage
            <span className="inline-block h-px w-8 bg-brand-blue" />
          </p>
          <h2 className="font-heading text-3xl font-bold leading-[1.1] text-brand-black md:text-[2.5rem]">
            Le bon socle technique{" "}
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute inset-x-[-4px] bottom-[8%] -z-0 h-[38%] -rotate-[1.5deg] rounded-[6px]"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <span className="relative z-10">selon vos enjeux</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-brand-grey">
            Pas de dogmatisme. On choisit ensemble la techno qui sert votre objectif business — pas celle qui flatte l'ego du développeur.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {stacks.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-25px_rgba(18,77,90,0.3)] md:p-10"
              style={{ borderColor: "var(--grey-light)" }}
            >
              {/* corner accent */}
              <div
                aria-hidden
                className="absolute right-0 top-0 h-40 w-40 -translate-y-12 translate-x-12 rounded-full opacity-0 transition group-hover:opacity-100"
                style={{
                  background: s.accent
                    ? "radial-gradient(closest-side, rgba(255,221,87,0.45), transparent)"
                    : "radial-gradient(closest-side, rgba(18,77,90,0.18), transparent)",
                }}
              />

              <div className="flex items-start justify-between gap-4">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{
                    borderColor: s.accent ? "var(--gold)" : "var(--blue)",
                    backgroundColor: s.accent ? "rgba(255,221,87,0.18)" : "var(--blue-light)",
                    color: "var(--blue)",
                  }}
                >
                  <Sparkles size={10} />
                  {s.tag}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-grey">
                  0{i + 1}
                </span>
              </div>

              <div className="mt-7 flex items-center gap-5">
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition group-hover:rotate-3"
                  style={{
                    backgroundColor: s.accent ? "var(--gold)" : "var(--blue)",
                    color: s.accent ? "var(--blue)" : "var(--gold)",
                  }}
                >
                  <s.icon size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-brand-black md:text-[28px]">
                    {s.title}
                  </h3>
                  <p className="mt-1 font-body text-sm text-brand-grey">
                    {s.subtitle}
                  </p>
                </div>
              </div>

              <p className="mt-6 font-body text-base leading-relaxed text-brand-grey">
                {s.desc}
              </p>

              {/* meta row */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-blue"
                  style={{ borderColor: "var(--blue)", backgroundColor: "var(--blue-light)" }}
                >
                  <Gauge size={12} /> Délai : {s.delay}
                </span>
                {s.perfect.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-grey"
                    style={{ borderColor: "var(--grey-light)" }}
                  >
                    {p}
                  </span>
                ))}
              </div>

              <ul className="mt-7 space-y-3 border-t pt-6" style={{ borderColor: "var(--grey-light)" }}>
                {s.bullets.map((b) => (
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

              <div
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: s.accent ? "var(--gold)" : "var(--blue)" }}
              />
            </article>
          ))}
        </div>

        {/* Bandeau "ce que tous nos sites intègrent" */}
        <div
          className="relative mt-10 overflow-hidden rounded-3xl border p-8 md:p-10"
          style={{ borderColor: "var(--grey-light)", backgroundColor: "var(--white)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-center">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
                Standard MSL-iTECH
              </p>
              <h3 className="font-heading text-2xl font-bold text-brand-black md:text-3xl">
                Ce que tous nos sites intègrent
              </h3>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: Search, label: "SEO dès la conception" },
                { icon: Smartphone, label: "100% mobile responsive" },
                { icon: Zap, label: "Chargement ultra-rapide" },
                { icon: Rocket, label: "Pré-rendu pour Google" },
              ].map((f) => (
                <li
                  key={f.label}
                  className="flex items-center gap-3 rounded-2xl border bg-brand-bg px-4 py-3 font-body text-sm font-medium text-brand-black"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--blue)", color: "var(--gold)" }}
                  >
                    <f.icon size={16} />
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-6" style={{ borderColor: "var(--grey-light)" }}>
            <p className="font-body text-sm text-brand-grey">
              Pas sûr du bon choix ? On en discute 30 minutes, gratuitement.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-bold transition hover:scale-[1.02]"
              style={{ backgroundColor: "var(--blue)", color: "var(--white)" }}
            >
              Comparer pour mon projet
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WebPage() {
  const faqs = [
    {
      q: "Combien coûte un site web professionnel chez MSL-iTECH ?",
      a: "Nos sites vont de 900€ (site WordPress basique) à 7 500€ (site React/JavaScript entreprise avec pré-rendu). Le tarif dépend du nombre de pages, des intégrations (formulaire, CRM, paiement) et du niveau de personnalisation graphique.",
    },
    {
      q: "Quelle différence entre un site React et un site WordPress ?",
      a: "WordPress est rapide à déployer et facile à mettre à jour pour des sites éditoriaux ou vitrines (à partir de 900€). React/Lovable offre des performances supérieures, une animation plus fine et un pré-rendu LovableHTML optimal pour le SEO (à partir de 3 500€), idéal pour les sites produit ou SaaS.",
    },
    {
      q: "En combien de temps mon site sera-t-il en ligne ?",
      a: "Un site WordPress vitrine se livre en 2 à 4 semaines. Un site React complet avec contenus rédigés et SEO optimisé prend 4 à 8 semaines selon la complexité et la réactivité côté contenus client.",
    },
    {
      q: "Mon site sera-t-il optimisé pour Google et les moteurs IA ?",
      a: "Oui. Chaque site MSL-iTECH est livré avec balises title/description par page, JSON-LD Organization/LocalBusiness/FAQPage, sitemap.xml, robots.txt et fichier llms.txt. Les sites React sont pré-rendus pour garantir l'indexation côté Googlebot et les crawlers IA.",
    },
  ];

  useProductSeo({
    title: "Création Site Web Professionnel au Maroc — React & WordPress | MSL-iTECH",
    description:
      "Sites web React haute performance ou WordPress rapides pour les PME marocaines. Conçus pour convertir et optimisés pour être trouvés. Devis gratuit.",
    path: "/creation-web",
    faqs,
    ldId: "ld-faq-web",
    service: {
      name: "Création de sites web React & WordPress",
      description:
        "Conception et développement de sites web performants (React/Vite ou WordPress) optimisés conversion et SEO, par MSL-iTECH. Belgique, Maroc, international.",
      serviceType: ["Développement web React", "Sites WordPress", "Optimisation SEO technique"],
    },
  });

  return (
    <ProductPageShell
      eyebrow="Création Web — Belgique & Maroc"
      title={
        <>
          Votre site web doit <span className="whitespace-nowrap">travailler pour vous</span> — pas se contenter{" "}
          <span style={{ color: "var(--gold)" }}>d'exister</span>
        </>
      }
      intro="Un site web qui ne génère pas de leads est un coût. Un site web qui convertit est un investissement. MSL-iTECH conçoit des sites professionnels qui répondent à une question simple : est-ce que votre visiteur comprend ce que vous faites en moins de 10 secondes ?"
      heroImage={webHero}
      heroImageAlt="Création de site web professionnel React et WordPress par MSL-iTECH"
      metaNote="Devis gratuit · Réponse sous 24 à 72h ouvrables · Sans engagement"
      featuresEyebrow="Deux technologies, deux cas d'usage"
      featuresTitle="Combien d'opportunités perdez-vous chaque mois ?"
      features={features}
      featuresSlot={<TechShowcase />}
      whySection={{
        title: "Ce que tous nos sites intègrent",
        desc: "Quel que soit le socle technique choisi, chaque site MSL-iTECH est livré prêt à performer.",
        points: [
          "Optimisation SEO dès la conception",
          "Compatibilité mobile et temps de chargement optimisé",
          "Pré-rendu pour une indexation Google fiable",
          "Formulaire de conversion et analytics intégrés",
        ],
      }}
      ctaTitle="Démarrer mon projet web"
      ctaSubtitle="Devis gratuit · Réponse sous 24 à 72h ouvrables · Sans engagement · Belgique & Maroc"
      faqs={faqs}
    />
  );
}
