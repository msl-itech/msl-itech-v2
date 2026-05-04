import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import logoDark from "@/assets/logo-msl-dark.png";

const odooLinks = [
  { to: "/odoo-crm-ventes", label: "CRM & Ventes" },
  { to: "/odoo-finance-comptabilite", label: "Finance & Comptabilité" },
  { to: "/odoo-stock-inventaire", label: "Stock & Inventaire" },
  { to: "/odoo-production-fabrication", label: "Production & Fabrication" },
  { to: "/odoo-rh-paie", label: "RH & Paie" },
  { to: "/odoo-services-professionnels", label: "Services Professionnels" },
];

const sectorLinks = [
  { to: "/odoo-horeca-maroc", label: "HORECA Maroc" },
  { to: "/odoo-btp-maroc", label: "BTP & Construction" },
  { to: "/odoo-sante-maroc", label: "Santé / Pharma" },
  { to: "/odoo-gestion-stock-maroc", label: "Commerce & Stock" },
  { to: "/odoo-transport-logistique-maroc", label: "Transport & Logistique" },
];

const profileItems = [
  { to: "/pme-en-structuration", label: "PME en structuration (5-50 salariés)" },
  { to: "/entreprise-multi-sites", label: "Entreprise multi-sites" },
  { to: "/structure-en-croissance", label: "Structure en croissance rapide" },
];

const simpleLinks = [
  { to: "/creation-web", label: "Création Web" },
  { to: "/marketing-digital", label: "Marketing" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "odoo" | "sectors">(null);
  const [mobileSection, setMobileSection] = useState<
    null | "odoo" | "sectors" | "profile"
  >("odoo");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-body text-sm transition-colors hover:text-brand-blue ${
      isActive ? "text-brand-blue font-medium" : "text-brand-black"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-brand-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center"
          aria-label="MSL-iTECH — accueil"
        >
          <img
            src={logoDark}
            alt="MSL-iTECH"
            className="h-8 w-auto"
            loading="eager"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {/* Odoo ERP dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("odoo")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <NavLink
              to="/odoo-erp"
              className={({ isActive }) =>
                `flex items-center gap-1 font-body text-sm transition-colors hover:text-brand-blue ${
                  isActive ? "font-medium text-brand-blue" : "text-brand-black"
                }`
              }
            >
              Odoo ERP <ChevronDown size={14} />
            </NavLink>
            {openMenu === "odoo" && (
              <div className="absolute left-0 top-full pt-3">
                <div className="w-72 rounded-lg border border-brand-grey-light bg-brand-white p-2 shadow-lg">
                  {odooLinks.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      className="block rounded-md px-3 py-2 font-body text-sm text-brand-black transition hover:bg-[var(--blue-light)] hover:text-brand-blue"
                    >
                      {l.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sectors dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("sectors")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 font-body text-sm text-brand-black hover:text-brand-blue">
              Nos Secteurs <ChevronDown size={14} />
            </button>
            {openMenu === "sectors" && (
              <div className="absolute left-0 top-full pt-3">
                <div className="grid w-[520px] grid-cols-2 gap-6 rounded-lg border border-brand-grey-light bg-brand-white p-5 shadow-lg">
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                      Par secteur
                    </p>
                    <ul className="space-y-1">
                      {sectorLinks.map((l) => (
                        <li key={l.to}>
                          <NavLink
                            to={l.to}
                            className="block rounded-md px-2 py-1.5 font-body text-sm text-brand-black hover:bg-[var(--blue-light)] hover:text-brand-blue"
                          >
                            {l.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                      Par profil
                    </p>
                    <ul className="space-y-1">
                      {profileItems.map((p) => (
                        <li key={p.to}>
                          <NavLink
                            to={p.to}
                            className="block rounded-md px-2 py-1.5 font-body text-sm text-brand-black hover:bg-[var(--blue-light)] hover:text-brand-blue"
                          >
                            {p.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {simpleLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-md px-4 py-2 font-body text-sm font-medium text-brand-white transition hover:opacity-90 sm:inline-flex"
            style={{ backgroundColor: "var(--blue)" }}
          >
            Réserver une démo
          </Link>
          <button
            aria-label="Menu"
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-brand-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Panel */}
        <aside
          className={`absolute right-0 top-0 flex h-[100dvh] w-[88%] max-w-sm flex-col bg-brand-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          {/* Header */}
          <div className="flex h-16 items-center justify-between border-b border-brand-grey-light/60 px-5">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center"
              aria-label="MSL-iTECH — accueil"
            >
              <img
                src={logoDark}
                alt="MSL-iTECH"
                className="h-7 w-auto"
                loading="eager"
                decoding="async"
              />
            </Link>
            <button
              aria-label="Fermer le menu"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-grey-light text-brand-black transition hover:bg-brand-bg"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable content */}
          <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-5">
            {/* Accordion: Odoo ERP */}
            <MobileAccordion
              label="Odoo ERP"
              isOpen={mobileSection === "odoo"}
              onToggle={() =>
                setMobileSection(mobileSection === "odoo" ? null : "odoo")
              }
              cta={{ to: "/odoo-erp", label: "Voir la page Odoo ERP" }}
              items={odooLinks}
              onNavigate={() => setMobileOpen(false)}
            />
            <MobileAccordion
              label="Nos Secteurs"
              isOpen={mobileSection === "sectors"}
              onToggle={() =>
                setMobileSection(mobileSection === "sectors" ? null : "sectors")
              }
              items={sectorLinks}
              onNavigate={() => setMobileOpen(false)}
            />
            <MobileAccordion
              label="Par profil"
              isOpen={mobileSection === "profile"}
              onToggle={() =>
                setMobileSection(mobileSection === "profile" ? null : "profile")
              }
              items={profileItems}
              onNavigate={() => setMobileOpen(false)}
            />

            <ul className="mt-2 border-t border-brand-grey-light/60 pt-2">
              {simpleLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-lg px-3 py-3 font-body text-[15px] font-medium transition ${
                        isActive
                          ? "bg-[var(--blue-light)] text-brand-blue"
                          : "text-brand-black hover:bg-brand-bg"
                      }`
                    }
                  >
                    <span>{l.label}</span>
                    <ArrowRight size={14} className="text-brand-grey" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sticky CTA */}
          <div className="border-t border-brand-grey-light/60 bg-brand-white px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-body text-sm font-bold text-brand-white shadow-[0_10px_24px_-12px_rgba(18,77,90,0.6)] transition hover:opacity-95"
              style={{ backgroundColor: "var(--blue)" }}
            >
              Réserver une démo
              <ArrowRight size={16} />
            </Link>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
              🇧🇪 Belgique · 🇲🇦 Maroc · 🇨🇦 Canada
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
};

/* ----------------------------- Mobile Accordion ----------------------------- */
function MobileAccordion({
  label,
  isOpen,
  onToggle,
  items,
  cta,
  onNavigate,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  items: { to: string; label: string }[];
  cta?: { to: string; label: string };
  onNavigate: () => void;
}) {
  return (
    <div className="border-b border-brand-grey-light/60">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between px-1 py-4 text-left"
      >
        <span className="font-heading text-[15px] font-semibold uppercase tracking-wide text-brand-black">
          {label}
        </span>
        <ChevronDown
          size={18}
          className={`text-brand-grey transition-transform duration-200 ${
            isOpen ? "rotate-180 text-brand-blue" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-0.5 pb-3 pl-1">
            {cta && (
              <li>
                <NavLink
                  to={cta.to}
                  onClick={onNavigate}
                  className="mb-1 flex items-center gap-2 rounded-lg px-3 py-2 font-body text-[13px] font-semibold text-brand-blue hover:bg-[var(--blue-light)]"
                >
                  → {cta.label}
                </NavLink>
              </li>
            )}
            {items.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 font-body text-[14px] transition ${
                      isActive
                        ? "bg-[var(--blue-light)] font-medium text-brand-blue"
                        : "text-brand-grey hover:bg-brand-bg hover:text-brand-black"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}