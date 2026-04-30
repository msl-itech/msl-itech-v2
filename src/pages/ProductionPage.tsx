import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Factory,
  ListTree,
  ShieldCheck,
  Wrench,
  Sparkles,
} from "lucide-react";
import productionHero from "@/assets/production-hero.jpg";

function useSeo() {
  useEffect(() => {
    document.title = "Odoo Production & Fabrication PME — MSL-iTECH";
    const desc =
      "Planifiez votre production, gérez vos ordres de fabrication et contrôlez la qualité avec Odoo. Implémentation certifiée MSL-iTECH.";
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
      window.location.origin + "/odoo-production-fabrication",
    );
  }, []);
}

const features = [
  {
    icon: Factory,
    title: "Ordres de fabrication automatiques",
    desc:
      "Dès qu'une commande client est validée, Odoo génère automatiquement l'ordre de fabrication correspondant avec les quantités, les nomenclatures et le planning.",
  },
  {
    icon: ListTree,
    title: "Gestion des nomenclatures (BoM)",
    desc:
      "Définissez vos recettes de fabrication une seule fois. Odoo calcule automatiquement les besoins en matières premières et alerte si un composant manque.",
  },
  {
    icon: ShieldCheck,
    title: "Suivi qualité intégré",
    desc:
      "Points de contrôle qualité à chaque étape de production. Non-conformités détectées avant l'expédition. Traçabilité complète des lots produits.",
  },
  {
    icon: Wrench,
    title: "Maintenance préventive",
    desc:
      "Planifiez la maintenance de vos équipements, suivez leur historique et recevez des alertes avant les pannes prévues.",
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
            <Sparkles size={12} /> Odoo Production & Fabrication
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] text-brand-black md:text-5xl lg:text-6xl">
            Vos ordres de fabrication se créent encore manuellement —{" "}
            <span style={{ color: "var(--blue)" }}>Odoo</span> les génère{" "}
            <span className="italic" style={{ color: "var(--blue)" }}>
              automatiquement
            </span>{" "}
            depuis vos commandes clients
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-brand-grey">
            Dans une entreprise industrielle sans ERP intégré, le chemin d'une
            commande client jusqu'à l'ordre de fabrication passe souvent par 3
            ou 4 interlocuteurs, des emails et des feuilles Excel. Odoo
            Production court-circuite tout ça.
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
            Configuré pour votre atelier · Sans engagement
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
            src={productionHero}
            alt="Atelier de production Odoo Manufacturing"
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
            Dans votre atelier
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Ce qu'Odoo Production change dans votre atelier
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
          Réserver ma démo gratuite — Production & Fabrication
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-base opacity-90">
          Voir Odoo Production configuré pour votre atelier · Sans engagement
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

export default function ProductionPage() {
  useSeo();
  return (
    <>
      <Hero />
      <Features />
      <FinalCta />
    </>
  );
}