import { Link } from "react-router-dom";
import { useMarket } from "@/hooks/useMarket";

const modules = [
  { to: "/odoo-crm-ventes", label: "CRM & Ventes" },
  { to: "/odoo-finance-comptabilite", label: "Finance & Comptabilité" },
  { to: "/odoo-stock-inventaire", label: "Stock & Inventaire" },
  { to: "/odoo-production-fabrication", label: "Production" },
  { to: "/odoo-rh-paie", label: "RH & Paie" },
  { to: "/odoo-services-professionnels", label: "Services pro" },
];

export default function HomePage() {
  const { market } = useMarket();

  return (
    <>
      <section className="container py-24">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
          Partenaire Odoo certifié · {market === "BE" ? "Belgique" : "Maroc"}
        </p>
        <h1 className="max-w-4xl font-heading text-5xl font-bold leading-[1.05] text-brand-black md:text-6xl">
          Implémentation Odoo,
          <span className="text-brand-blue"> sans dérapage.</span>
        </h1>
        <p className="mt-6 max-w-2xl font-body text-lg text-brand-grey">
          MSL-iTECH déploie Odoo pour des PME exigeantes, avec une méthode
          éprouvée et des consultants certifiés.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="rounded-md bg-brand-blue px-6 py-3 font-body text-sm font-medium text-brand-white hover:opacity-90"
          >
            Demander un devis
          </Link>
          <Link
            to="/realisations"
            className="rounded-md border border-brand-black/20 px-6 py-3 font-body text-sm font-medium text-brand-black hover:bg-brand-grey-light/40"
          >
            Voir nos réalisations
          </Link>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="font-heading text-3xl font-bold text-brand-black">Modules Odoo</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <Link
              key={m.to}
              to={m.to}
              className="group rounded-lg border border-brand-grey-light bg-brand-white p-6 transition hover:border-brand-blue"
            >
              <div className="font-heading text-lg font-semibold text-brand-black group-hover:text-brand-blue">
                {m.label}
              </div>
              <div className="mt-2 font-mono text-xs text-brand-grey">→ Découvrir</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}