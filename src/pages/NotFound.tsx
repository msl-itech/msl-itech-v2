import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Compass, Home, MessageCircle, Sparkles } from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";

function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden
        className="absolute inset-x-[-4px] bottom-[6%] -z-0 h-[42%] -rotate-[1.5deg] rounded-[6px]"
        style={{ backgroundColor: "var(--gold)", filter: "blur(0.3px)" }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

const quickLinks = [
  { to: "/", label: "Accueil", desc: "La home MSL-iTECH" },
  { to: "/odoo-erp", label: "Odoo ERP", desc: "Notre offre ERP complète" },
  { to: "/realisations", label: "Réalisations", desc: "Nos clients & projets" },
  { to: "/blog", label: "Blog", desc: "Conseils & analyses Odoo" },
  { to: "/notre-approche", label: "Notre approche", desc: "Tarification sur mesure" },
  { to: "/contact", label: "Contact", desc: "Parler à un consultant" },
];

const NotFound = () => {
  const location = useLocation();

  useProductSeo({
    title: "Page introuvable (404) — MSL-iTECH",
    description:
      "Cette page n'existe pas ou a été déplacée. Retrouvez nos offres Odoo, notre blog et nos réalisations depuis l'accueil MSL-iTECH.",
    path: location.pathname,
  });

  useEffect(() => {
    console.warn(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="relative isolate overflow-hidden bg-brand-bg py-20 md:py-28">
      <HeroCursorGlow color="rgba(255, 221, 87, 1)" size={520} intensity={0.35} />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: "var(--gold)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "var(--blue)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(13,13,13,0.7) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-white/70 px-3.5 py-1.5 backdrop-blur-sm">
            <Sparkles size={12} className="text-brand-blue" aria-hidden="true" />
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-blue">
              Erreur 404 · Page introuvable
            </p>
          </div>

          <h1 className="mt-8 font-heading text-6xl font-bold leading-[1.04] tracking-tight text-brand-black md:text-[96px]">
            On <Mark>s'est perdus</Mark>.
          </h1>

          <p className="mx-auto mt-6 max-w-xl font-body text-base text-brand-grey md:text-lg">
            La page <code className="rounded bg-brand-white px-2 py-0.5 font-mono text-xs text-brand-blue">{location.pathname}</code> n'existe pas
            — ou plus. Pas de panique, on vous remet sur les rails.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              style={{ backgroundColor: "var(--gold)" }}
            >
              <Home size={18} aria-hidden="true" />
              Retour à l'accueil
              <ArrowRight size={18} aria-hidden="true" className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue/30 bg-brand-white px-6 py-3.5 font-body text-sm font-semibold text-brand-blue transition hover:border-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Quick links */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-brand-blue" aria-hidden="true" />
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-blue">
              Reprenez la navigation
            </p>
            <span className="h-px w-10 bg-brand-blue" aria-hidden="true" />
          </div>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group flex items-center gap-4 rounded-2xl border bg-brand-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Compass size={18} aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <p className="font-heading text-sm font-bold text-brand-black">
                      {l.label}
                    </p>
                    <p className="font-body text-xs text-brand-grey">{l.desc}</p>
                  </div>
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="text-brand-blue/60 transition group-hover:translate-x-1 group-hover:text-brand-blue"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
