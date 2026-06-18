import { lazy, Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { retryPendingLeads } from "@/lib/leads";

// Lazy-load all secondary routes — keeps the initial bundle (Home + Layout) lean.
const CrmPage = lazy(() => import("./pages/CrmPage"));
const OdooErpPage = lazy(() => import("./pages/OdooErpPage"));
const FinancePage = lazy(() => import("./pages/FinancePage"));
const StockPage = lazy(() => import("./pages/StockPage"));
const ProductionPage = lazy(() => import("./pages/ProductionPage"));
const RhPage = lazy(() => import("./pages/RhPage"));
const ServicesProPage = lazy(() => import("./pages/ServicesProPage"));
const HorecaPage = lazy(() => import("./pages/HorecaPage"));
const BtpPage = lazy(() => import("./pages/BtpPage"));
const SantePage = lazy(() => import("./pages/SantePage"));
const StockMarocPage = lazy(() => import("./pages/StockMarocPage"));
const TransportPage = lazy(() => import("./pages/TransportPage"));
const TourismePage = lazy(() => import("./pages/TourismePage"));
const WebPage = lazy(() => import("./pages/WebPage"));
const MarketingPage = lazy(() => import("./pages/MarketingPage"));
const RealisationsPage = lazy(() => import("./pages/RealisationsPage"));
const TarifsPage = lazy(() => import("./pages/TarifsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ConsultantBePage = lazy(() => import("./pages/ConsultantBePage"));
const TarifBePage = lazy(() => import("./pages/TarifBePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogIndexPage = lazy(() => import("./pages/BlogIndexPage"));
const PmeStructurationPage = lazy(() => import("./pages/PmeStructurationPage"));
const MultiSitesPage = lazy(() => import("./pages/MultiSitesPage"));
const CroissanceRapidePage = lazy(() => import("./pages/CroissanceRapidePage"));
const AppointmentPage = lazy(() => import("./pages/AppointmentPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const CgvPage = lazy(() => import("./pages/CgvPage"));
const MentionsLegalesPage = lazy(() => import("./pages/MentionsLegalesPage"));
const Loi0908Page = lazy(() => import("./pages/Loi0908Page"));

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
            <Route path="/notre-approche" element={<TarifsPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/consultant-odoo-belgique" element={<ConsultantBePage />} />
            {/* <Route path="/tarif-odoo-belgique" element={<TarifBePage />} /> */}
            <Route path="/pme-en-structuration" element={<PmeStructurationPage />} />
            <Route path="/entreprise-multi-sites" element={<MultiSitesPage />} />
            <Route path="/structure-en-croissance" element={<CroissanceRapidePage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
            <Route path="/prendre-rendez-vous" element={<AppointmentPage />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPage />} />
            <Route path="/conditions-generales-de-vente" element={<CgvPage />} />
            <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
            <Route path="/conformite-loi-09-08" element={<Loi0908Page />} />
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
