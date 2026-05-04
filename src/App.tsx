import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import HomePage from "./pages/HomePage";
import CrmPage from "./pages/CrmPage";
import OdooErpPage from "./pages/OdooErpPage";
import FinancePage from "./pages/FinancePage";
import StockPage from "./pages/StockPage";
import ProductionPage from "./pages/ProductionPage";
import RhPage from "./pages/RhPage";
import ServicesProPage from "./pages/ServicesProPage";
import HorecaPage from "./pages/HorecaPage";
import BtpPage from "./pages/BtpPage";
import SantePage from "./pages/SantePage";
import StockMarocPage from "./pages/StockMarocPage";
import TransportPage from "./pages/TransportPage";
import WebPage from "./pages/WebPage";
import MarketingPage from "./pages/MarketingPage";
import RealisationsPage from "./pages/RealisationsPage";
import TarifsPage from "./pages/TarifsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ConsultantBePage from "./pages/ConsultantBePage";
import TarifBePage from "./pages/TarifBePage";
import BlogPage from "./pages/BlogPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import PmeStructurationPage from "./pages/PmeStructurationPage";
import MultiSitesPage from "./pages/MultiSitesPage";
import CroissanceRapidePage from "./pages/CroissanceRapidePage";
import AppointmentPage from "./pages/AppointmentPage";
import NotFound from "./pages/NotFound";
import { retryPendingLeads } from "@/lib/leads";

const queryClient = new QueryClient();

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
            <Route path="/creation-web" element={<WebPage />} />
            <Route path="/marketing-digital" element={<MarketingPage />} />
            <Route path="/realisations" element={<RealisationsPage />} />
            <Route path="/tarifs" element={<TarifsPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/consultant-odoo-belgique" element={<ConsultantBePage />} />
            <Route path="/tarif-odoo-belgique" element={<TarifBePage />} />
            <Route path="/pme-en-structuration" element={<PmeStructurationPage />} />
            <Route path="/entreprise-multi-sites" element={<MultiSitesPage />} />
            <Route path="/structure-en-croissance" element={<CroissanceRapidePage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
            <Route path="/prendre-rendez-vous" element={<AppointmentPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
