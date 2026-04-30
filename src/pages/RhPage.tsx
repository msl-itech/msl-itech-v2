import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Banknote,
  Clock,
  UserPlus,
  Sparkles,
} from "lucide-react";
import rhHero from "@/assets/rh-hero.jpg";

function useSeo() {
  useEffect(() => {
    document.title =
      "Odoo RH & Paie — Gestion des ressources humaines | MSL-iTECH";
    const desc =
      "Automatisez la paie, les congés, les évaluations et le recrutement avec Odoo RH. Implémentation certifiée par MSL-iTECH. Démo gratuite.";
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
    canonical.setAttribute("href", window.location.origin + "/odoo-rh-paie");
  }, []);
}

const features = [
  {
    icon: CalendarDays,
    title: "Congés et absences en libre-service",
    desc:
      "Vos collaborateurs soumettent leurs demandes depuis leur téléphone. Le responsable valide en un clic. Les soldes se mettent à jour automatiquement.",
  },
  {
    icon: Banknote,
    title: "Paie fiable et conforme",
    desc:
      "Odoo calcule les fiches de paie en tenant compte des absences, heures supplémentaires et notes de frais. La paie est produite en quelques minutes.",
  },
  {
    icon: Clock,
    title: "Suivi du temps par projet",
    desc:
      "Vos collaborateurs enregistrent leur temps par projet depuis Odoo Timesheet. Vous visualisez la rentabilité réelle de chaque projet.",
  },
  {
    icon: UserPlus,
    title: "Recrutement structuré",
    desc:
      "Diffusez vos offres d'emploi, recevez les candidatures dans Odoo, programmez les entretiens et suivez l'avancement de chaque candidat.",
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
            <Sparkles size={12} /> Odoo RH & Paie
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] text-brand-black md:text-5xl lg:text-6xl">
            Votre responsable RH passe ses lundis à traiter des demandes de
            congés —{" "}
            <span style={{ color: "var(--blue)" }}>Odoo</span> l'automatise{" "}
            <span className="italic" style={{ color: "var(--blue)" }}>
              entièrement
            </span>
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-brand-grey">
            Demandes de congés par email, notes de frais papier, fiches de paie
            produites manuellement chaque mois : la gestion RH sans outil
            centralisé mobilise du temps qualifié sur des tâches répétitives.
            Odoo RH libère vos équipes.
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
            Configuré pour votre structure · Sans engagement
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
            src={rhHero}
            alt="Tableau de bord Odoo RH et Paie"
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
            Ce qu'Odoo RH automatise
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Ce qu'Odoo RH automatise pour vous
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
          Réserver ma démo gratuite — RH & Paie
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-base opacity-90">
          Voir Odoo RH configuré pour votre structure · Sans engagement
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

export default function RhPage() {
  useSeo();
  return (
    <>
      <Hero />
      <Features />
      <FinalCta />
    </>
  );
}