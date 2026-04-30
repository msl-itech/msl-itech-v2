import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Calculator,
  FileText,
  Receipt,
  Wallet,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import financeHero from "@/assets/finance-hero.jpg";

function useSeo() {
  useEffect(() => {
    document.title = "Odoo Finance & Comptabilité PME — MSL-iTECH";
    const desc =
      "Pilotez votre trésorerie et automatisez votre comptabilité avec Odoo. Implémentation certifiée MSL-iTECH. Belgique & Maroc. Démo gratuite.";
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
    canonical.setAttribute(
      "href",
      window.location.origin + "/odoo-finance-comptabilite",
    );

    const ldId = "ld-faq-finance";
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
          name: "Odoo Finance est-il conforme à la réglementation comptable belge ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Oui. Odoo intègre le plan comptable belge (PCMN), les taux de TVA belges et les formats de déclarations fiscales. MSL-iTECH configure la localisation belge lors de l'implémentation.",
          },
        },
        {
          "@type": "Question",
          name: "Odoo Finance est-il adapté à la réglementation marocaine ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Odoo peut être configuré pour accompagner votre mise en conformité selon les exigences applicables à votre secteur et votre calendrier d'obligation. MSL-iTECH suit l'évolution des textes de la DGI et adapte les implémentations en conséquence.",
          },
        },
        {
          "@type": "Question",
          name: "Mon expert-comptable peut-il continuer à travailler avec Odoo ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Absolument. Odoo génère tous les exports comptables standard. Votre expert-comptable peut accéder à un espace dédié ou travailler à partir des exports.",
          },
        },
      ],
    });
    document.head.appendChild(script);
  }, []);
}

const features = [
  {
    icon: Calculator,
    title: "Comptabilité automatisée",
    desc:
      "Chaque vente et chaque achat génère automatiquement les écritures comptables correspondantes. Votre plan comptable est toujours à jour, sans ressaisie manuelle.",
  },
  {
    icon: FileText,
    title: "Facturation professionnelle",
    desc:
      "Créez des factures personnalisées, envoyez-les par email avec suivi d'ouverture, et proposez le paiement en ligne. Odoo génère automatiquement les rappels pour les impayés.",
  },
  {
    icon: Receipt,
    title: "Notes de frais sans friction",
    desc:
      "Vos collaborateurs photographient leurs justificatifs depuis leur téléphone. Les notes de frais sont validées en ligne, comptabilisées automatiquement et remboursées à la prochaine paie.",
  },
  {
    icon: Wallet,
    title: "Trésorerie en temps réel",
    desc:
      "Tableau de bord trésorerie actualisé en permanence, prévisions de flux, rapprochement bancaire automatique. Vous savez à tout moment ce que vous avez en banque.",
  },
];

const faqs = [
  {
    q: "Odoo Finance est-il conforme à la réglementation comptable belge ?",
    a: "Oui. Odoo intègre le plan comptable belge (PCMN), les taux de TVA belges et les formats de déclarations fiscales. MSL-iTECH configure la localisation belge lors de l'implémentation.",
  },
  {
    q: "Odoo Finance est-il adapté à la réglementation marocaine ?",
    a: "Odoo peut être configuré pour accompagner votre mise en conformité selon les exigences applicables à votre secteur et votre calendrier d'obligation. MSL-iTECH suit l'évolution des textes de la DGI et adapte les implémentations en conséquence.",
  },
  {
    q: "Mon expert-comptable peut-il continuer à travailler avec Odoo ?",
    a: "Absolument. Odoo génère tous les exports comptables standard. Votre expert-comptable peut accéder à un espace dédié ou travailler à partir des exports.",
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
            <Sparkles size={12} /> Odoo Finance & Comptabilité
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] text-brand-black md:text-5xl lg:text-6xl">
            Vous pilotez votre trésorerie à vue —{" "}
            <span style={{ color: "var(--blue)" }}>Odoo</span> vous donne les
            données financières en{" "}
            <span className="italic" style={{ color: "var(--blue)" }}>
              temps réel
            </span>
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-brand-grey">
            Clôtures de fin de mois stressantes, rapprochements bancaires
            manuels, relances impayés chronophages : la gestion financière
            d'une PME sans outil intégré coûte des heures chaque semaine et
            produit des erreurs coûteuses. Odoo Finance automatise l'essentiel
            et vous donne une vision claire à tout moment.
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
            30 minutes · Sans engagement · Configuré pour votre structure
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
            src={financeHero}
            alt="Tableau de bord financier Odoo Finance"
            className="w-full rounded-2xl border shadow-2xl"
            style={{ borderColor: "var(--grey-light)" }}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--blue-light)" }}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-grey">
            Ce qu'Odoo Finance résout
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Ce qu'Odoo Finance résout pour vous
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
    "Localisation belge (PCMN, TVA, déclarations)",
    "Configuration adaptée aux exigences marocaines",
    "Suivi de l'évolution des textes DGI",
    "Espace dédié pour votre expert-comptable",
  ];
  return (
    <section className="container py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-grey">
            MSL-iTECH
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
            MSL-iTECH configure Odoo Finance pour votre contexte
          </h2>
          <p className="mt-6 font-body text-lg text-brand-grey">
            La comptabilité belge et la comptabilité marocaine ont des
            exigences différentes — plan comptable, TVA, obligations
            déclaratives. Nos consultants configurent Odoo selon les normes de
            votre pays et de votre secteur.
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
          Réserver ma démo gratuite — Finance & Comptabilité
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-base opacity-90">
          Voir Odoo Finance configuré pour votre structure · 30 minutes · Sans
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

export default function FinancePage() {
  useSeo();
  return (
    <>
      <Hero />
      <Features />
      <WhyMsl />
      <Faq />
      <FinalCta />
    </>
  );
}
