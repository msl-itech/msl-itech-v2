import { Link } from "react-router-dom";
import { useMarket } from "@/hooks/useMarket";

export const Footer = () => {
  const { market } = useMarket();

  return (
    <footer className="mt-24 border-t border-brand-grey-light/60 bg-brand-black text-brand-white">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="font-heading text-xl font-bold">
            MSL-<span className="text-brand-gold">iTECH</span>
          </div>
          <p className="mt-3 max-w-xs font-body text-sm text-brand-grey-light/80">
            Partenaire Odoo certifié — {market === "BE" ? "Belgique" : "Maroc"}.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide">Odoo</h4>
          <ul className="mt-4 space-y-2 font-body text-sm text-brand-grey-light/80">
            <li><Link to="/odoo-crm-ventes">CRM & Ventes</Link></li>
            <li><Link to="/odoo-finance-comptabilite">Finance</Link></li>
            <li><Link to="/odoo-stock-inventaire">Stock</Link></li>
            <li><Link to="/odoo-rh-paie">RH & Paie</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide">Services</h4>
          <ul className="mt-4 space-y-2 font-body text-sm text-brand-grey-light/80">
            <li><Link to="/creation-web">Création web</Link></li>
            <li><Link to="/marketing-digital">Marketing digital</Link></li>
            <li><Link to="/realisations">Réalisations</Link></li>
            <li><Link to="/tarifs">Tarifs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide">Contact</h4>
          <ul className="mt-4 space-y-2 font-body text-sm text-brand-grey-light/80">
            <li><Link to="/contact">Nous contacter</Link></li>
            <li><Link to="/a-propos">À propos</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-grey/30">
        <div className="container flex flex-col items-start justify-between gap-2 py-6 font-mono text-xs text-brand-grey-light/70 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} MSL-iTECH. Tous droits réservés.</span>
          <span>msl-itech.com</span>
        </div>
      </div>
    </footer>
  );
};