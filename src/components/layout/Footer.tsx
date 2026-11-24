import { Link } from "react-router-dom";
import { useMarket } from "@/hooks/useMarket";
import logoWhite from "@/assets/logo-msl-white.png";
import { useState } from "react";
import { ChevronDown, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { track } from "@/lib/analytics";
import { openConsentPreferences } from "@/lib/consent";
import { SOCIAL_LINKS } from "@/lib/social-links";
import { useLang } from "@/hooks/useLang";
import { homePath, localizedPath } from "@/lib/i18n";
import { ui } from "@/lib/ui-strings";

const SOCIAL_ICONS = { LinkedIn: Linkedin, Facebook, Instagram, YouTube: Youtube } as const;

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
  { to: "/odoo-tourisme-maroc", label: "Tourisme" },
  { to: "/entreprise-multi-sites", label: "Multi-sites" },
];

const citiesCol = [
  { to: "/integrateur-odoo-maroc", label: "Intégrateur Odoo Maroc" },
  { to: "/integrateur-odoo-casablanca", label: "Intégrateur Odoo Casablanca" },
  { to: "/integrateur-odoo-marrakech", label: "Intégrateur Odoo Marrakech" },
];

const companyCol = [
  { to: "/a-propos", label: "À Propos" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/notre-approche", label: "Notre approche" },
  { to: "/blog", label: "Blog" },
  { to: "/blog/facturation-electronique-dgi", label: "Conformité DGI — Guide" },
  { to: "/contact", label: "Contact" },
];

const toolsCol = [
  { to: "/outils/conformite-dgi", label: "Simulateur conformité DGI" },
  { to: "/outils/roi-erp", label: "Calculateur ROI ERP" },
  { to: "/outils/diagnostic-digital", label: "Diagnostic maturité digitale" },
  { to: "/outils/comparateur-sage-odoo", label: "Comparateur Sage vs Odoo" },
];

type CountryCode = "BE" | "MA" | "CA";

type FooterColProps = {
  id: string;
  title: string;
  links: { to: string; label: string }[];
  openId: string | null;
  setOpenId: (id: string | null) => void;
  extra?: React.ReactNode;
};

function FooterCol({ id, title, links, openId, setOpenId, extra }: FooterColProps) {
  const isOpen = openId === id;
  const lang = useLang();
  const labels = ui(lang).footer.nav;
  return (
    <div>
      {/* Mobile: accordion trigger */}
      <button
        type="button"
        onClick={() => setOpenId(isOpen ? null : id)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between border-b border-brand-grey/30 py-3 text-left font-heading text-sm font-semibold uppercase tracking-wide sm:hidden"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {/* Desktop: static heading */}
      <h2 className="hidden font-heading text-sm font-semibold uppercase tracking-wide sm:block">
        {title}
      </h2>
      <ul
        className={`mt-4 space-y-2 font-body text-sm text-brand-grey-light/85 sm:block ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {links.map((l) => (
          <li key={l.to}>
            <Link to={localizedPath(l.to, lang)} className="hover:text-brand-white">
              {labels[l.to] ?? l.label}
            </Link>
          </li>
        ))}
        {extra}
      </ul>
    </div>
  );
}

export const Footer = () => {
  const { market } = useMarket();
  const [openId, setOpenId] = useState<string | null>(null);
  const lang = useLang();
  const t = ui(lang).footer;
  const L = (to: string) => localizedPath(to, lang);

  const order: CountryCode[] =
    market === "MA" ? ["MA", "BE", "CA"] : ["BE", "MA", "CA"];

  /* QA market toggle — hidden in production
  const toggleMarket = () => {
    setMarketOverride(market === "BE" ? "MA" : "BE");
    window.location.reload();
  };
  */

  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="container grid gap-4 px-4 py-10 sm:grid-cols-2 sm:gap-10 sm:px-6 sm:py-12 md:py-16 lg:grid-cols-6">
        {/* Col 1 */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to={homePath(lang)} aria-label={ui(lang).header.homeAria} className="inline-block">
          <img
            src={logoWhite}
            alt="MSL-iTECH"
            className="h-9 w-auto"
            width="288"
            height="120"
            loading="lazy"
          />
          </Link>
          <p className="mt-3 max-w-md font-body text-sm text-brand-grey-light/85 sm:mt-4">
            {t.tagline}
          </p>
          <ul className="mt-4 flex items-center gap-3">
            {SOCIAL_LINKS.map((s) => {
              const Icon = SOCIAL_ICONS[s.name];
              return (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={t.socialAria(s.name)}
                    onClick={() => track("social_click", { network: s.name, cta_location: "footer" })}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-grey/40 text-brand-grey-light/85 transition hover:border-brand-white hover:text-brand-white"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 hidden max-w-md font-body text-xs text-brand-grey-light/70 sm:mt-4 sm:block">
            {t.partner}{" "}
            <a
              href={t.partnerUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="underline hover:text-brand-white"
            >
              {t.partnerLink}
            </a>
          </p>
          <p className="mt-3 font-mono text-[11px] text-brand-grey-light/80 sm:mt-5 sm:text-xs">
            {order.map((c) => t.countries[c]).join(" · ")}
          </p>
        </div>

        <FooterCol id="odoo" title={t.colOdoo} links={odooCol} openId={openId} setOpenId={setOpenId} />
        <FooterCol id="sectors" title={t.colSectors} links={sectorsCol} openId={openId} setOpenId={setOpenId} />
        <FooterCol id="tools" title={t.colTools} links={toolsCol} openId={openId} setOpenId={setOpenId} />
        <FooterCol id="cities" title={t.colCities} links={citiesCol} openId={openId} setOpenId={setOpenId} />
        <FooterCol
          id="company"
          title={t.colCompany}
          links={companyCol}
          openId={openId}
          setOpenId={setOpenId}
        />
      </div>

      <div className="border-t border-brand-grey/30">
        <div className="container grid gap-4 px-4 py-6 text-center font-mono text-[11px] text-brand-grey-light/70 sm:px-6 sm:text-xs md:grid-cols-3 md:items-center md:gap-3 md:text-left">
          <span>{t.copyright}</span>
          <span className="break-words md:text-center">
            <a href="tel:+3228860549" onClick={() => track("contact_click", { contact_method: "phone", cta_location: "footer" })} className="transition hover:text-brand-white">+32 2 886 05 49</a>
            {" · "}
            <a href="tel:+212689306278" onClick={() => track("contact_click", { contact_method: "phone", cta_location: "footer" })} className="transition hover:text-brand-white">+212 6 89 30 62 78</a>
            {" · "}
            <a href="tel:+12046500765" onClick={() => track("contact_click", { contact_method: "phone", cta_location: "footer" })} className="transition hover:text-brand-white">+1 204 650 0765</a>
            {" · "}
            <a href="mailto:info@msl-itech.com" onClick={() => track("contact_click", { contact_method: "email", cta_location: "footer" })} className="transition hover:text-brand-white">info@msl-itech.com</a>
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-end">
            {/* QA button — hidden in production
            <button
              type="button"
              onClick={toggleMarket}
              className="rounded-full border border-brand-grey/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey-light/80 transition hover:border-brand-white hover:text-brand-white"
              title="Basculer le contenu entre BE et MA (test QA)"
            >
              Test : {market === "BE" ? "🇧🇪 BE → 🇲🇦 MA" : "🇲🇦 MA → 🇧🇪 BE"}
            </button>
            */}
            <Link to={L("/politique-de-confidentialite")} className="hover:text-brand-white">
              {t.privacy}
            </Link>
            <Link to={L("/mentions-legales")} className="hover:text-brand-white">
              {t.legal}
            </Link>
            <Link to={L("/conditions-generales-de-vente")} className="hover:text-brand-white">
              {t.terms}
            </Link>
            <Link to={L("/conformite-loi-09-08")} className="hover:text-brand-white">
              {t.law0908}
            </Link>
            <button
              type="button"
              onClick={openConsentPreferences}
              className="hover:text-brand-white"
            >
              {t.cookies}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};