import { Link } from "react-router-dom";
import { useMarket, setMarketOverride } from "@/hooks/useMarket";
import logoWhite from "@/assets/logo-msl-white.png";

const odooCol = [
  { to: "/odoo-crm-ventes", label: "CRM & Ventes" },
  { to: "/odoo-finance-comptabilite", label: "Finance" },
  { to: "/odoo-stock-inventaire", label: "Stock" },
  { to: "/odoo-production-fabrication", label: "Production" },
  { to: "/odoo-rh-paie", label: "RH" },
  { to: "/odoo-services-professionnels", label: "Services Pro" },
];

const sectorsCol = [
  { to: "/odoo-horeca-maroc", label: "HORECA" },
  { to: "/odoo-btp-maroc", label: "BTP" },
  { to: "/odoo-sante-maroc", label: "Santé" },
  { to: "/odoo-gestion-stock-maroc", label: "Commerce" },
  { to: "/odoo-transport-logistique-maroc", label: "Transport" },
];

const companyCol = [
  { to: "/a-propos", label: "À Propos" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/blog/cout-implementation-odoo-belgique-2026", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const COUNTRIES = {
  BE: "🇧🇪 Belgique",
  MA: "🇲🇦 Maroc",
  CA: "🇨🇦 Canada",
} as const;

export const Footer = () => {
  const { market } = useMarket();

  const order: (keyof typeof COUNTRIES)[] =
    market === "MA" ? ["MA", "BE", "CA"] : ["BE", "MA", "CA"];

  const toggleMarket = () => {
    setMarketOverride(market === "BE" ? "MA" : "BE");
    window.location.reload();
  };

  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="container grid gap-8 px-4 py-12 sm:grid-cols-2 sm:gap-10 sm:px-6 md:py-16 lg:grid-cols-4">
        {/* Col 1 */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" aria-label="MSL-iTECH — accueil" className="inline-block">
            <img
              src={logoWhite}
              alt="MSL-iTECH"
              className="h-9 w-auto"
              loading="lazy"
            />
          </Link>
          <p className="mt-4 max-w-md font-body text-sm text-brand-grey-light/85">
            L'intégrateur Odoo qui structure, construit et accélère.
          </p>
          <p className="mt-4 max-w-md font-body text-xs text-brand-grey-light/70">
            Partenaire officiel Odoo —{" "}
            <a
              href="https://www.odoo.com/partners"
              target="_blank"
              rel="noreferrer noopener"
              className="underline hover:text-brand-white"
            >
              vérifiable sur odoo.com/partners
            </a>
          </p>
          <p className="mt-5 font-mono text-[11px] text-brand-grey-light/80 sm:text-xs">
            {order.map((c) => COUNTRIES[c]).join(" · ")}
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide">
            Odoo ERP
          </h4>
          <ul className="mt-4 space-y-2 font-body text-sm text-brand-grey-light/85">
            {odooCol.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-brand-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide">
            Secteurs
          </h4>
          <ul className="mt-4 space-y-2 font-body text-sm text-brand-grey-light/85">
            {sectorsCol.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-brand-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide">
            Entreprise
          </h4>
          <ul className="mt-4 space-y-2 font-body text-sm text-brand-grey-light/85">
            {companyCol.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-brand-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="hover:text-brand-white">
                Devenir partenaire
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-grey/30">
        <div className="container grid gap-4 px-4 py-6 text-center font-mono text-[11px] text-brand-grey-light/70 sm:px-6 sm:text-xs md:grid-cols-3 md:items-center md:gap-3 md:text-left">
          <span>© 2026 MSL-iTECH · Tous droits réservés</span>
          <span className="break-words md:text-center">
            +32 2 886 05 49 · +212 6 89 30 62 78 · info@msl-itech.com
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-end">
            <button
              type="button"
              onClick={toggleMarket}
              className="rounded-full border border-brand-grey/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey-light/80 transition hover:border-brand-white hover:text-brand-white"
              title="Basculer le contenu entre BE et MA (test QA)"
            >
              Test : {market === "BE" ? "🇧🇪 BE → 🇲🇦 MA" : "🇲🇦 MA → 🇧🇪 BE"}
            </button>
            <Link to="/a-propos" className="hover:text-brand-white">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};