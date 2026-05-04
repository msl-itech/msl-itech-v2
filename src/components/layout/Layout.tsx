import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { RevealRoot } from "@/components/RevealRoot";

export const Layout = () => {
  const { pathname } = useLocation();
  const isAppointmentPage = pathname === "/prendre-rendez-vous";

  return (
    <div
      className={`flex flex-col bg-brand-bg text-brand-black ${
        isAppointmentPage ? "h-dvh overflow-hidden" : "min-h-screen"
      }`}
    >
      <ScrollToTop />
      {!isAppointmentPage && <SmoothScroll />}
      {!isAppointmentPage && <ScrollProgress />}
      <Header />
      <main className={isAppointmentPage ? "min-h-0 flex-1 overflow-hidden" : undefined}>
        {isAppointmentPage ? (
          <Outlet />
        ) : (
          <RevealRoot>
            <Outlet />
          </RevealRoot>
        )}
      </main>
      {!isAppointmentPage && <Footer />}
    </div>
  );
};