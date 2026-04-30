import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Building2, Home, Globe, ExternalLink, CheckCircle2 } from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";

const odooCases = [
  {
    icon: Building2,
    name: "AIT OUKHALI TRAVAUX",
    sector: "BTP & Marchés Publics — Maroc",
    context:
      "Centralisation des données commerciales, CRM marchés publics, gestion du flux commercial et automatisation des projets, facturation et RH.",
    modules: ["CRM & appels d'offres", "Gestion de projet & Construction", "Facturation", "RH"],
    result: "Toute la gestion opérationnelle centralisée dans Odoo. Zéro ressaisie entre les services.",
  },
  {
    icon: Home,
    name: "AIS HECTOR DENIS",
    sector: "Agence Immobilière Sociale — Belgique",
    context:
      "Agence immobilière sociale à but non lucratif basée à Evere, gestion de plus de 1.000 logements locatifs en Région Bruxelloise.",
    modules: ["Site web WordPress professionnel"],
    result:
      "Référence publiquement consultable sur notre fiche partenaire officielle Odoo.",
  },
];

const webProjects = [
  "odoo-finances.pro",
  "mfinances.be",
  "msales-strategy.com",
  "novatrait.com",
];

export default function RealisationsPage() {
  useProductSeo({
    title: "Nos Réalisations Odoo & Web — Cas Clients MSL-iTECH",
    description:
      "Découvrez les projets Odoo et sites web réalisés par MSL-iTECH. BTP, HORECA, immobilier, services. Belgique & Maroc. Références vérifiables sur odoo.com/partners.",
    path: "/realisations",
  });

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0F3F4A" }}>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 90% 0%, rgba(255,221,87,0.18), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(255,255,255,0.08), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="container relative py-20 lg:py-28 text-white">
          <p
            className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{
              backgroundColor: "rgba(255,221,87,0.14)",
              color: "var(--gold)",
              border: "1px solid rgba(255,221,87,0.35)",
            }}
          >
            <Sparkles size={12} /> Réalisations · MSL-iTECH
          </p>
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.08] md:text-5xl lg:text-[3.25rem]">
            Ce que nous avons livré — et nos références{" "}
            <span style={{ color: "var(--gold)" }}>vérifiables publiquement</span>
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg text-white/80">
            Les meilleures preuves de notre expertise viennent de nos clients, de nos projets
            documentés et de notre fiche partenaire officielle Odoo, où certaines références sont
            directement consultables et vérifiables.
          </p>
        </div>
      </section>

      {/* ODOO CASES */}
      <section className="bg-background py-20">
        <div className="container">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Cas clients
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Implémentations Odoo
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {odooCases.map((c) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.name}
                  className="rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "rgba(15,63,74,0.08)", color: "#0F3F4A" }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-brand-black">
                        {c.name}
                      </h3>
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-brand-grey">
                        {c.sector}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 font-body text-base text-brand-grey">{c.context}</p>

                  <div className="mt-6">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-blue">
                      Solution déployée
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {c.modules.map((m) => (
                        <li
                          key={m}
                          className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-brand-black"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="mt-6 flex items-start gap-3 rounded-xl p-4"
                    style={{ backgroundColor: "rgba(255,221,87,0.12)" }}
                  >
                    <CheckCircle2 size={18} style={{ color: "#0F3F4A" }} className="mt-0.5 shrink-0" />
                    <p className="font-body text-sm text-brand-black">{c.result}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WEB PROJECTS */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Sites & plateformes
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Créations Web
          </h2>
          <p className="mt-6 max-w-3xl font-body text-lg text-brand-grey">
            Sites React haute performance, solutions WordPress et refonte de présence en ligne pour
            des entreprises en Belgique et au Maroc.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {webProjects.map((p) => (
              <a
                key={p}
                href={`https://${p}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition hover:border-brand-blue hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-brand-blue" />
                  <span className="font-body text-sm font-medium text-brand-black">{p}</span>
                </div>
                <ExternalLink
                  size={16}
                  className="text-brand-grey transition group-hover:text-brand-blue"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ODOO PARTNER */}
      <section className="bg-background py-20">
        <div className="container">
          <div
            className="rounded-2xl border border-border p-10 lg:p-14"
            style={{ backgroundColor: "rgba(15,63,74,0.04)" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              Partenaire officiel
            </p>
            <h2 className="mt-3 max-w-3xl font-heading text-2xl font-bold text-brand-black md:text-3xl">
              Certaines de nos références sont également consultables sur notre fiche partenaire
              officielle Odoo
            </h2>
            <p className="mt-4 max-w-2xl font-body text-base text-brand-grey">
              Vérifiez notre statut et nos références directement sur odoo.com/partners.
            </p>
            <a
              href="https://www.odoo.com/partners"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold transition hover:opacity-90"
              style={{ backgroundColor: "#0F3F4A", color: "white" }}
            >
              Voir odoo.com/partners <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#0F3F4A" }}>
        <div className="container text-center text-white">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Votre projet est <span style={{ color: "var(--gold)" }}>le prochain</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-white/80">
            Réponse sous 24 à 72h · Consultant dédié · Sans engagement
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold transition hover:opacity-90"
            style={{ backgroundColor: "var(--gold)", color: "#0F3F4A" }}
          >
            Réserver une démo <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
