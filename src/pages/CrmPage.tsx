import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  BellRing,
  FileText,
  BarChart3,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import crmHero from "@/assets/crm-hero.jpg";

function useSeo() {
  useEffect(() => {
    document.title = "Odoo CRM & Ventes — Pilotez vos commerciaux | MSL-iTECH";
    const desc =
      "Centralisez votre pipeline commercial avec Odoo CRM. Implémentation certifiée par MSL-iTECH. Belgique, Maroc, Canada. Démo gratuite.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/odoo-crm-ventes");

    const ldId = "ld-faq-crm";
    document.getElementById(ldId)?.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = ldId;
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Odoo CRM est-il adapté aux PME de moins de 20 personnes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Oui. Odoo CRM est conçu pour s'adapter à la taille de l'équipe. Une PME de 5 commerciaux tirera autant de valeur d'Odoo CRM qu'une structure de 50 — la configuration est simplement allégée. MSL-iTECH propose des packs d'implémentation spécifiquement calibrés pour les PME.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps faut-il pour implémenter Odoo CRM ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pour une PME standard, l'implémentation du module CRM prend entre 2 et 4 semaines selon la complexité du cycle de vente et le volume de données à migrer.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on migrer nos données depuis Excel ou un autre CRM ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Oui. MSL-iTECH réalise la migration complète de vos données existantes vers Odoo CRM. La migration est incluse dans les packs Avancé, Premium, VIP et Elite.",
          },
        },
      ],
    });
    document.head.appendChild(script);
  }, []);
}

const features = [
  {
    icon: Users,
    title: "Pipeline centralisé et visible",
    desc:
      "Chaque opportunité commerciale a une fiche complète : contact, historique, valeur estimée, prochaine action. Votre direction voit le pipeline consolidé en temps réel. Vos commerciaux savent exactement quoi faire chaque matin.",
  },
  {
    icon: BellRing,
    title: "Relances automatisées, zéro oubli",
    desc:
      "Odoo génère automatiquement des rappels de relance selon les règles que vous définissez. Plus jamais un prospect oublié après un premier contact positif.",
  },
  {
    icon: FileText,
    title: "Devis professionnels en 2 clics",
    desc:
      "Créez des devis personnalisés depuis la fiche opportunité, envoyez-les directement par email et suivez leur ouverture. Vos clients signent et paient en ligne via des plateformes sécurisées.",
  },
  {
    icon: BarChart3,
    title: "Reporting commercial en temps réel",
    desc:
      "Taux de conversion par commercial, valeur du pipeline par secteur, délai moyen de signature : tous vos indicateurs clés disponibles sans exporter la moindre donnée.",
  },
];

const faqs = [
  {
    q: "Odoo CRM est-il adapté aux PME de moins de 20 personnes ?",
    a: "Oui. Odoo CRM est conçu pour s'adapter à la taille de l'équipe. Une PME de 5 commerciaux tirera autant de valeur d'Odoo CRM qu'une structure de 50 — la configuration est simplement allégée. MSL-iTECH propose des packs d'implémentation spécifiquement calibrés pour les PME.",
  },
  {
    q: "Combien de temps faut-il pour implémenter Odoo CRM ?",
    a: "Pour une PME standard, l'implémentation du module CRM prend entre 2 et 4 semaines selon la complexité du cycle de vente et le volume de données à migrer.",
  },
  {
    q: "Peut-on migrer nos données depuis Excel ou un autre CRM ?",
    a: "Oui. MSL-iTECH réalise la migration complète de vos données existantes vers Odoo CRM. La migration est incluse dans les packs Avancé, Premium, VIP et Elite.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, rgba(255,221,87,0.18), transparent 60%), radial-gradient(900px 500px at 0% 20%, rgba(18,77,90,0.12), transparent 60%)",
        }}
      />
      <div className="container grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ borderColor: "var(--blue)", color: "var(--blue)" }}
          >
            <Sparkles size={12} /> Odoo CRM & Ventes
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] text-brand-black md:text-5xl lg:text-6xl">
            Vos commerciaux travaillent encore chacun de leur côté —{" "}
            <span style={{ color: "var(--blue)" }}>Odoo CRM</span> centralise
            tout en{" "}
            <span className="italic" style={{ color: "var(--blue)" }}>
              temps réel
            </span>
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-brand-grey">
            Leads perdus, relances oubliées, pipeline illisible : si votre
            équipe commerciale gère encore ses contacts dans Excel ou dans sa
            tête, vous perdez des opportunités à chaque cycle. Odoo CRM élimine
            ce problème en centralisant leads, opportunités, devis et relances
            dans un seul outil — visible par tous, en temps réel.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 font-body text-sm font-medium text-white transition hover:opacity-90"
              style={{ backgroundColor: "var(--blue)" }}
            >
              Réserver ma démo gratuite <ArrowRight size={16} />
            </Link>
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 rounded-md border px-5 py-3 font-body text-sm font-medium transition hover:bg-[var(--blue-light)]"
              style={{ borderColor: "var(--blue)", color: "var(--blue)" }}
            >
              Voir nos réalisations
            </Link>
          </div>
          <p className="mt-4 font-mono text-xs text-brand-grey">
            30 minutes · Sans engagement · Configuré pour votre secteur
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-4 -z-10 rounded-3xl opacity-60 blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(18,77,90,0.25), rgba(255,221,87,0.25))",
            }}
          />
          <img
            src={crmHero}
            alt="Pipeline commercial Odoo CRM centralisé"
            className="w-full rounded-2xl border shadow-2xl"
            style={{ borderColor: "var(--grey-light)" }}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-grey">
          Le problème
        </p>
        <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
          Le problème que vous connaissez
        </h2>
        <p className="mt-6 font-body text-lg text-brand-grey">
          Un prospect contacté il y a 3 semaines attend une relance. Votre
          meilleur commercial est absent et personne ne sait où en est son
          pipeline. Un devis est parti sans suivi. Ces situations vous coûtent
          des contrats — pas par manque de compétences, mais par manque d'outil
          structurant.
        </p>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--blue-light)" }}
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-grey">
            Ce qu'Odoo CRM change
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Ce qu'Odoo CRM change concrètement
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-2xl border bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: "var(--blue)", color: "var(--gold)" }}
              >
                <f.icon size={22} />
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-black">
                {f.title}
              </h3>
              <p className="mt-3 font-body text-base text-brand-grey">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMsl() {
  const points = [
    "Consultants certifiés Odoo",
    "Configuration adaptée à votre cycle de vente réel",
    "Migration complète de vos données existantes",
    "Formation des équipes et support post-production",
  ];
  return (
    <section className="container py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-grey">
            MSL-iTECH
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Pourquoi faire appel à MSL-iTECH pour votre CRM Odoo
          </h2>
          <p className="mt-6 font-body text-lg text-brand-grey">
            Un CRM mal paramétré crée plus de résistance qu'il n'en supprime.
            Nos consultants certifiés Odoo adaptent la configuration à votre
            cycle de vente réel — pas à un modèle générique. Nous migrons vos
            données existantes, formons vos équipes et restons disponibles
            après la mise en production.
          </p>
        </div>
        <ul className="grid gap-4">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-xl border bg-white p-5"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <CheckCircle2
                size={22}
                style={{ color: "var(--blue)" }}
                className="mt-0.5 shrink-0"
              />
              <span className="font-body text-base text-brand-black">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-grey">
            FAQ
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-heading text-lg font-semibold text-brand-black">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-base text-brand-grey">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "var(--blue)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(600px 300px at 80% 20%, rgba(255,221,87,0.6), transparent 60%)",
        }}
      />
      <div className="container relative text-center text-white">
        <h2 className="font-heading text-3xl font-bold md:text-5xl">
          Réserver ma démo gratuite — CRM & Ventes
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-base opacity-90">
          Voir Odoo CRM configuré pour votre secteur · 30 minutes · Sans
          engagement
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 font-body text-sm font-semibold transition hover:opacity-90"
            style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
          >
            Réserver ma démo <ArrowRight size={16} />
          </Link>
          <Link
            to="/tarifs"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Voir nos tarifs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function CrmPage() {
  useSeo();
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <WhyMsl />
      <Faq />
      <FinalCta />
    </>
  );
}
