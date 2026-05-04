import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

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
      <Header />
      <main className={isAppointmentPage ? "min-h-0 flex-1 overflow-hidden" : undefined}>
        <Outlet />
      </main>
      {!isAppointmentPage && <Footer />}
    </div>
  );
};