import { Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { retryPendingLeads } from "@/lib/leads";
import { captureUtm } from "@/lib/utm";
import { lazyRetry } from "@/lib/lazy-retry";

// Lazy-load all secondary routes — keeps the initial bundle (Home + Layout) lean.
const CrmPage = lazyRetry(() => import("./pages/CrmPage"));
const OdooErpPage = lazyRetry(() => import("./pages/OdooErpPage"));
const FinancePage = lazyRetry(() => import("./pages/FinancePage"));
const StockPage = lazyRetry(() => import("./pages/StockPage"));
const ProductionPage = lazyRetry(() => import("./pages/ProductionPage"));
const RhPage = lazyRetry(() => import("./pages/RhPage"));
const ServicesProPage = lazyRetry(() => import("./pages/ServicesProPage"));
const HorecaPage = lazyRetry(() => import("./pages/HorecaPage"));
const BtpPage = lazyRetry(() => import("./pages/BtpPage"));
const SantePage = lazyRetry(() => import("./pages/SantePage"));
const StockMarocPage = lazyRetry(() => import("./pages/StockMarocPage"));
const TransportPage = lazyRetry(() => import("./pages/TransportPage"));
const TourismePage = lazyRetry(() => import("./pages/TourismePage"));
const WebPage = lazyRetry(() => import("./pages/WebPage"));
const MarketingPage = lazyRetry(() => import("./pages/MarketingPage"));
const RealisationsPage = lazyRetry(() => import("./pages/RealisationsPage"));
const CaseStudyPage = lazyRetry(() => import("./pages/CaseStudyPage"));

const TarifsPage = lazyRetry(() => import("./pages/TarifsPage"));
const AboutPage = lazyRetry(() => import("./pages/AboutPage"));
const ContactPage = lazyRetry(() => import("./pages/ContactPage"));
const BlogPage = lazyRetry(() => import("./pages/BlogPage"));
const BlogIndexPage = lazyRetry(() => import("./pages/BlogIndexPage"));
const BlogHubPage = lazyRetry(() => import("./pages/BlogHubPage"));
const PmeStructurationPage = lazyRetry(() => import("./pages/PmeStructurationPage"));
const MultiSitesPage = lazyRetry(() => import("./pages/MultiSitesPage"));
const CroissanceRapidePage = lazyRetry(() => import("./pages/CroissanceRapidePage"));
const AppointmentPage = lazyRetry(() => import("./pages/AppointmentPage"));
const PrivacyPage = lazyRetry(() => import("./pages/PrivacyPage"));
const CgvPage = lazyRetry(() => import("./pages/CgvPage"));
const MentionsLegalesPage = lazyRetry(() => import("./pages/MentionsLegalesPage"));
const Loi0908Page = lazyRetry(() => import("./pages/Loi0908Page"));
const ConformiteDgiToolPage = lazyRetry(() => import("./pages/outils/ConformiteDgiPage"));
const RoiErpToolPage = lazyRetry(() => import("./pages/outils/RoiErpPage"));
const DiagnosticDigitalToolPage = lazyRetry(() => import("./pages/outils/DiagnosticDigitalPage"));
const ComparateurSageOdooToolPage = lazyRetry(() => import("./pages/outils/ComparateurSageOdooPage"));
const EmailUnsubscribePage = lazyRetry(() => import("./pages/EmailUnsubscribePage"));
const IntegrateurOdooMarocPage = lazyRetry(() => import("./pages/IntegrateurOdooMarocPage"));
const IntegrateurOdooMarrakechPage = lazyRetry(() => import("./pages/IntegrateurOdooMarrakechPage"));
const IntegrateurOdooCasablancaPage = lazyRetry(() => import("./pages/IntegrateurOdooCasablancaPage"));
const AuditDigitalGratuitPage = lazyRetry(() => import("./pages/AuditDigitalGratuitPage"));

const queryClient = new QueryClient();

function RouteFallback() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Chargement de la page…</span>
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-brand-blue/20 border-t-brand-blue" />
    </div>
  );
}

const App = () => {
  useEffect(() => {
    // Capture les UTM dès le premier rendu, quelle que soit la page d'entrée.
    // Doit être appelé avant tout routing pour préserver referrer + landing URL.
    captureUtm();
    // Renvoie automatiquement les leads sauvegardés en localStorage
    // si un précédent envoi vers Odoo a échoué (offline / timeout).
    retryPendingLeads().catch(() => {});
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/odoo-erp" element={<OdooErpPage />} />
            <Route path="/odoo-crm-ventes" element={<CrmPage />} />
            <Route path="/odoo-finance-comptabilite" element={<FinancePage />} />
            <Route path="/odoo-stock-inventaire" element={<StockPage />} />
            <Route path="/odoo-production-fabrication" element={<ProductionPage />} />
            <Route path="/odoo-rh-paie" element={<RhPage />} />
            <Route path="/odoo-services-professionnels" element={<ServicesProPage />} />
            <Route path="/odoo-horeca-maroc" element={<HorecaPage />} />
            <Route path="/odoo-btp-maroc" element={<BtpPage />} />
            <Route path="/odoo-sante-maroc" element={<SantePage />} />
            <Route path="/odoo-gestion-stock-maroc" element={<StockMarocPage />} />
            <Route path="/odoo-transport-logistique-maroc" element={<TransportPage />} />
            <Route path="/odoo-tourisme-maroc" element={<TourismePage />} />
            <Route path="/creation-web" element={<WebPage />} />
            <Route path="/marketing-digital" element={<MarketingPage />} />
            <Route path="/realisations" element={<RealisationsPage />} />
            <Route path="/realisations/:slug" element={<CaseStudyPage />} />
            <Route path="/notre-approche" element={<TarifsPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pme-en-structuration" element={<PmeStructurationPage />} />
            <Route path="/entreprise-multi-sites" element={<MultiSitesPage />} />
            <Route path="/structure-en-croissance" element={<CroissanceRapidePage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/facturation-electronique-dgi" element={<BlogHubPage />} />
            <Route path="/blog/acheter-odoo" element={<BlogHubPage />} />
            <Route path="/blog/problematiques-metier" element={<BlogHubPage />} />
            <Route path="/blog/sites-web-acquisition" element={<BlogHubPage />} />
            <Route path="/blog/belgique" element={<BlogHubPage />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
            <Route path="/prendre-rendez-vous" element={<AppointmentPage />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPage />} />
            <Route path="/conditions-generales-de-vente" element={<CgvPage />} />
            <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
            <Route path="/conformite-loi-09-08" element={<Loi0908Page />} />
            <Route path="/outils/conformite-dgi" element={<ConformiteDgiToolPage />} />
            <Route path="/outils/roi-erp" element={<RoiErpToolPage />} />
            <Route path="/outils/diagnostic-digital" element={<DiagnosticDigitalToolPage />} />
            <Route path="/outils/comparateur-sage-odoo" element={<ComparateurSageOdooToolPage />} />
            <Route path="/email/desinscription" element={<EmailUnsubscribePage />} />
            <Route path="/audit-digital-gratuit" element={<AuditDigitalGratuitPage />} />
            {/* Keyword landing pages */}
            <Route path="/integrateur-odoo-maroc" element={<IntegrateurOdooMarocPage />} />
            <Route path="/integrateur-odoo-marrakech" element={<IntegrateurOdooMarrakechPage />} />
            <Route path="/integrateur-odoo-casablanca" element={<IntegrateurOdooCasablancaPage />} />
            {/* Legacy URL redirects (old site) — prevents soft-404 cannibalisation */}
            <Route path="/serviceOdoo" element={<Navigate to="/odoo-erp" replace />} />
            <Route path="/ventes" element={<Navigate to="/odoo-crm-ventes" replace />} />
            <Route path="/about" element={<Navigate to="/a-propos" replace />} />
            <Route path="/tarif-Odoo" element={<Navigate to="/notre-approche" replace />} />
            <Route path="/tarif-odoo" element={<Navigate to="/notre-approche" replace />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
