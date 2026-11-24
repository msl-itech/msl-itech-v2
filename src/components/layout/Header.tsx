import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { track } from "@/lib/analytics";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import logoDark from "@/assets/logo-msl-dark.png";
import { useLang } from "@/hooks/useLang";
import { homePath, localizedPath } from "@/lib/i18n";
import { ui } from "@/lib/ui-strings";

const odooLinks = [
  { to: "/odoo-crm-ventes", label: "CRM & Ventes" },
  { to: "/odoo-finance-comptabilite", label: "Finance & Comptabilité" },
  { to: "/odoo-stock-inventaire", label: "Stock & Inventaire" },
  { to: "/odoo-production-fabrication", label: "Production & Fabrication" },
  { to: "/odoo-rh-paie", label: "RH & Paie" },
  { to: "/odoo-services-professionnels", label: "Services Professionnels" },
];

const integrateurLink = { to: "/integrateur-odoo-maroc", label: "Intégrateur Odoo Maroc" };

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

const blogHubLinks = [
  { to: "/blog", label: "Tous les articles" },
  { to: "/blog/facturation-electronique-dgi", label: "Conformité DGI Maroc" },
  { to: "/blog/acheter-odoo", label: "Acheter Odoo" },
  { to: "/blog/problematiques-metier", label: "Problématiques métier" },
  { to: "/blog/sites-web-acquisition", label: "Sites web & Acquisition" },
];

const simpleLinks = [
  { to: "/creation-web", label: "Création Web" },
  { to: "/marketing-digital", label: "Marketing" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/notre-approche", label: "Notre approche" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "odoo" | "sectors" | "blog">(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const location = useLocation();
  const lang = useLang();
  const t = ui(lang);
  const L = (to: string) => localizedPath(to, lang);
  const lbl = (l: { to: string; label: string }) => t.nav[l.to] ?? l.label;

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
          to={homePath(lang)}
          className="flex items-center"
          aria-label={t.header.homeAria}
        >
          <img
            src={logoDark}
            alt="MSL-iTECH"
            className="h-8 w-auto"
            width="288"
            height="120"
            loading="eager"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label={t.header.mainNavAria} className="hidden items-center gap-5 lg:flex xl:gap-7">
          {/* Odoo ERP dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("odoo")}
            onMouseLeave={() => setOpenMenu(null)}
            onFocus={() => setOpenMenu("odoo")}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null); }}
            onKeyDown={(e) => { if (e.key === "Escape") { setOpenMenu(null); (e.currentTarget.querySelector("a,button") as HTMLElement | null)?.focus(); } }}
          >
            <NavLink
              to={L("/odoo-erp")}
              className={({ isActive }) =>
                `flex items-center gap-1 font-body text-sm transition-colors hover:text-brand-blue ${
                  isActive ? "font-medium text-brand-blue" : "text-brand-black"
                }`
              }
            >
              {t.nav["/odoo-erp"]} <ChevronDown size={14} aria-hidden="true" />
            </NavLink>
            {openMenu === "odoo" && (
              <div className="absolute left-0 top-full pt-3">
                <div className="w-72 rounded-lg border border-brand-grey-light bg-brand-white p-2 shadow-lg">
                  <NavLink
                    to={L(integrateurLink.to)}
                    className="block rounded-md px-3 py-2 font-body text-sm font-semibold text-brand-blue transition hover:bg-[var(--blue-light)]"
                  >
                    {lbl(integrateurLink)}
                  </NavLink>
                  <hr className="my-1.5 border-brand-grey-light" />
                  {odooLinks.map((l) => (
                    <NavLink
                      key={l.to}
                      to={L(l.to)}
                      className="block rounded-md px-3 py-2 font-body text-sm text-brand-black transition hover:bg-[var(--blue-light)] hover:text-brand-blue"
                    >
                      {lbl(l)}
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
            onFocus={() => setOpenMenu("sectors")}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null); }}
            onKeyDown={(e) => { if (e.key === "Escape") { setOpenMenu(null); (e.currentTarget.querySelector("a,button") as HTMLElement | null)?.focus(); } }}
          >
            <button type="button" aria-haspopup="true" aria-expanded={openMenu === "sectors"} onClick={() => setOpenMenu(openMenu === "sectors" ? null : "sectors")} className="flex items-center gap-1 font-body text-sm text-brand-black hover:text-brand-blue">
              {t.header.sectors} <ChevronDown size={14} aria-hidden="true" />
            </button>
            {openMenu === "sectors" && (
              <div className="absolute left-0 top-full pt-3">
                <div className="grid w-[520px] grid-cols-2 gap-6 rounded-lg border border-brand-grey-light bg-brand-white p-5 shadow-lg">
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                      {t.header.bySector}
                    </p>
                    <ul className="space-y-1">
                      {sectorLinks.map((l) => (
                        <li key={l.to}>
                          <NavLink
                            to={L(l.to)}
                            className="block rounded-md px-2 py-1.5 font-body text-sm text-brand-black hover:bg-[var(--blue-light)] hover:text-brand-blue"
                          >
                            {lbl(l)}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                      {t.header.byProfile}
                    </p>
                    <ul className="space-y-1">
                      {profileItems.map((p) => (
                        <li key={p.to}>
                          <NavLink
                            to={L(p.to)}
                            className="block rounded-md px-2 py-1.5 font-body text-sm text-brand-black hover:bg-[var(--blue-light)] hover:text-brand-blue"
                          >
                            {lbl(p)}
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
            <NavLink key={l.to} to={L(l.to)} className={linkClass}>
              {lbl(l)}
            </NavLink>
          ))}

          {/* Blog dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("blog")}
            onMouseLeave={() => setOpenMenu(null)}
            onFocus={() => setOpenMenu("blog")}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null); }}
            onKeyDown={(e) => { if (e.key === "Escape") { setOpenMenu(null); (e.currentTarget.querySelector("a,button") as HTMLElement | null)?.focus(); } }}
          >
            <NavLink
              to={L("/blog")}
              className={({ isActive }) =>
                `flex items-center gap-1 font-body text-sm transition-colors hover:text-brand-blue ${
                  isActive ? "font-medium text-brand-blue" : "text-brand-black"
                }`
              }
            >
              {t.header.blog} <ChevronDown size={14} aria-hidden="true" />
            </NavLink>
            {openMenu === "blog" && (
              <div className="absolute right-0 top-full pt-3">
                <div className="w-60 rounded-lg border border-brand-grey-light bg-brand-white p-2 shadow-lg">
                  {blogHubLinks.map((l) => (
                    <NavLink
                      key={l.to}
                      to={L(l.to)}
                      className="block rounded-md px-3 py-2 font-body text-sm text-brand-black transition hover:bg-[var(--blue-light)] hover:text-brand-blue"
                    >
                      {lbl(l)}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          {/* Lien FR/EN — invisible tant que la page n'a pas de traduction */}
          <LanguageSwitch />
          <Link
            to={L("/contact")}
            onClick={() => track("cta_click", { cta_label: t.header.cta, cta_location: "header", cta_target: L("/contact") })}
            className="hidden rounded-md px-4 py-2 font-body text-sm font-medium text-brand-white transition hover:opacity-90 sm:inline-flex"
            style={{ backgroundColor: "var(--blue)" }}
          >
            {t.header.cta}
          </Link>
          <button
            aria-label={t.header.openMenu} aria-expanded={mobileOpen}
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div role="dialog" aria-modal="true" aria-label={t.header.mobileMenuAria} onKeyDown={(e) => { if (e.key === "Escape") setMobileOpen(false); }} className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-brand-white lg:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Link
              to={homePath(lang)}
              onClick={() => setMobileOpen(false)}
              className="flex items-center"
              aria-label={t.header.homeAria}
            >
              <img src={logoDark} alt="MSL-iTECH" className="h-8 w-auto" width="288" height="120" loading="eager" decoding="async" />
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSwitch />
              <button type="button" autoFocus aria-label={t.header.closeMenu} onClick={() => setMobileOpen(false)}>
                <X size={26} />
              </button>
            </div>
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
                  {t.nav["/odoo-erp"]}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileSection === "odoo" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSection === "odoo" && (
                  <ul className="mb-3 space-y-0.5 pl-3">
                    <li>
                      <NavLink
                        to={L(integrateurLink.to)}
                        className="block rounded-md px-3 py-2 font-body text-sm font-semibold text-brand-blue"
                      >
                        {lbl(integrateurLink)} →
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={L("/odoo-erp")}
                        className="block rounded-md px-3 py-2 font-body text-sm font-medium text-brand-black"
                      >
                        {t.header.odooOverview}
                      </NavLink>
                    </li>
                    {odooLinks.map((l) => (
                      <li key={l.to}>
                        <NavLink
                          to={L(l.to)}
                          className="block rounded-md px-3 py-2 font-body text-sm text-brand-black hover:bg-[var(--blue-light)] hover:text-brand-blue"
                        >
                          {lbl(l)}
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
                  {t.header.sectors}
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
                          to={L(l.to)}
                          className="block rounded-md px-3 py-2 font-body text-sm text-brand-black hover:bg-[var(--blue-light)] hover:text-brand-blue"
                        >
                          {lbl(l)}
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
                  {t.header.byProfile}
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
                          to={L(p.to)}
                          className="block rounded-md px-3 py-2 font-body text-sm text-brand-black hover:bg-[var(--blue-light)] hover:text-brand-blue"
                        >
                          {lbl(p)}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Blog — accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => toggleSection("blog")}
                  aria-expanded={mobileSection === "blog"}
                  className="flex w-full items-center justify-between py-4 font-body text-base font-medium text-brand-black"
                >
                  {t.header.blog}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileSection === "blog" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSection === "blog" && (
                  <ul className="mb-3 space-y-0.5 pl-3">
                    {blogHubLinks.map((l) => (
                      <li key={l.to}>
                        <NavLink
                          to={L(l.to)}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-3 py-2 font-body text-sm text-brand-black hover:bg-[var(--blue-light)] hover:text-brand-blue"
                        >
                          {lbl(l)}
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
                    to={L(l.to)}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 font-body text-base font-medium text-brand-black"
                  >
                    {lbl(l)}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to={L("/contact")}
              onClick={() => { track("cta_click", { cta_label: t.header.cta, cta_location: "header", cta_target: L("/contact") }); setMobileOpen(false); }}
              className="mt-6 block rounded-md px-4 py-3 text-center font-body text-sm font-medium text-brand-white"
              style={{ backgroundColor: "var(--blue)" }}
            >
              {t.header.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};