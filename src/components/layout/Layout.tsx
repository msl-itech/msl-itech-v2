import { Suspense, useEffect } from "react";
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
        <Suspense
          fallback={
            <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
              <span className="sr-only">Chargement de la page…</span>
              <span className="h-10 w-10 animate-spin rounded-full border-2 border-brand-blue/20 border-t-brand-blue" />
            </div>
          }
        >
          <RevealRoot>
            <Outlet />
          </RevealRoot>
        </Suspense>
      </main>
      <Footer />
      <ChatBot />
      <CookieConsent />
      {isHome && <FeaturedArticlePopup />}
    </div>
  );
};