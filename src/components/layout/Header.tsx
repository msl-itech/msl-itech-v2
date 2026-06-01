import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
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
  const [mobileSection, setMobileSection] = useState<string | null>(null);
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
    setMobileSection(null);
  }, [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-body text-sm transition-colors hover:text-brand-blue ${
      isActive ? "text-brand-blue font-medium" : "text-brand-black"
    }`;

  const toggleSection = (id: string) =>
    setMobileSection((s) => (s === id ? null : id));

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
            alt="Logo MSL-iTECH"
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

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-brand-white lg:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center"
              aria-label="MSL-iTECH — accueil"
            >
              <img src={logoDark} alt="Logo MSL-iTECH" className="h-8 w-auto" loading="eager" decoding="async" />
            </Link>
            <button aria-label="Fermer" onClick={() => setMobileOpen(false)}>
              <X size={26} />
            </button>
          </div>
          <nav className="container flex-1 overflow-y-auto py-4">
            <ul className="divide-y divide-brand-grey-light/60">
              {/* Odoo ERP — accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => toggleSection("odoo")}
                  aria-expanded={mobileSection === "odoo"}
                  className="flex w-full items-center justify-between py-4 font-body text-base font-medium text-brand-black"
                >
                  Odoo ERP
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileSection === "odoo" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSection === "odoo" && (
                  <ul className="mb-3 space-y-0.5 pl-3">
                    <li>
                      <NavLink
                        to="/odoo-erp"
                        className="block rounded-md px-3 py-2 font-body text-sm font-medium text-brand-blue"
                      >
                        Vue d'ensemble Odoo →
                      </NavLink>
                    </li>
                    {odooLinks.map((l) => (
                      <li key={l.to}>
                        <NavLink
                          to={l.to}
                          className="block rounded-md px-3 py-2 font-body text-sm text-brand-black hover:bg-[var(--blue-light)] hover:text-brand-blue"
                        >
                          {l.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Secteurs — accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => toggleSection("sectors")}
                  aria-expanded={mobileSection === "sectors"}
                  className="flex w-full items-center justify-between py-4 font-body text-base font-medium text-brand-black"
                >
                  Nos Secteurs
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileSection === "sectors" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSection === "sectors" && (
                  <ul className="mb-3 space-y-0.5 pl-3">
                    {sectorLinks.map((l) => (
                      <li key={l.to}>
                        <NavLink
                          to={l.to}
                          className="block rounded-md px-3 py-2 font-body text-sm text-brand-black hover:bg-[var(--blue-light)] hover:text-brand-blue"
                        >
                          {l.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Profils — accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => toggleSection("profiles")}
                  aria-expanded={mobileSection === "profiles"}
                  className="flex w-full items-center justify-between py-4 font-body text-base font-medium text-brand-black"
                >
                  Par profil
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileSection === "profiles" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSection === "profiles" && (
                  <ul className="mb-3 space-y-0.5 pl-3">
                    {profileItems.map((p) => (
                      <li key={p.to}>
                        <NavLink
                          to={p.to}
                          className="block rounded-md px-3 py-2 font-body text-sm text-brand-black hover:bg-[var(--blue-light)] hover:text-brand-blue"
                        >
                          {p.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Liens simples */}
              {simpleLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 font-body text-base font-medium text-brand-black"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 block rounded-md px-4 py-3 text-center font-body text-sm font-medium text-brand-white"
              style={{ backgroundColor: "var(--blue)" }}
            >
              Réserver une démo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};