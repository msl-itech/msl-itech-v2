import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { RevealRoot } from "@/components/RevealRoot";
import ChatBot from "@/components/ChatBot";
import { initTracker, trackPageVisit } from "@/lib/visitor-tracker";
import { CookieConsent } from "@/components/CookieConsent";
import { FeaturedArticlePopup } from "@/components/FeaturedArticlePopup";
import { initAnalytics } from "@/lib/analytics";
import { GlobalSEO } from "@/hooks/useProductSeo";

export const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    initTracker();
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageVisit(pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-brand-bg text-brand-black">
      <GlobalSEO />
      <ScrollToTop />
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <main>
        <RevealRoot>
          <Outlet />
        </RevealRoot>
      </main>
      <Footer />
      <ChatBot />
      <CookieConsent />
      {isHome && <FeaturedArticlePopup />}
    </div>
  );
};