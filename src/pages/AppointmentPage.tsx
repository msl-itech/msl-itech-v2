import { CalendarCheck, Clock, Sparkles, Video } from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";

export default function AppointmentPage() {
  useProductSeo({
    title: "Prendre rendez-vous — MSL-iTECH",
    description:
      "Réservez un créneau avec MSL-iTECH pour discuter de votre projet Odoo, web ou marketing digital. Échange clair, sans engagement.",
    path: "/prendre-rendez-vous",
  });

  return (
    <main style={{ backgroundColor: "var(--bg)" }}>
      {/* Header */}
      <section
        className="relative isolate overflow-hidden"
        style={{ backgroundColor: "var(--blue)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="container relative z-10 px-6 pb-16 pt-20 text-center md:pb-20 md:pt-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
            <Sparkles size={12} className="text-brand-gold" />
            Prendre rendez-vous
          </p>
          <h1 className="mx-auto mt-7 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            Réservez un créneau{" "}
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute inset-x-[-8px] bottom-[8%] -z-0 h-[38%] -rotate-[1.5deg] rounded-[8px]"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <span className="relative z-10 text-white">avec notre équipe</span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base text-white/85 md:text-lg">
            Choisissez la date et l'heure qui vous conviennent. Nous échangeons
            sur votre projet Odoo, web ou marketing digital — sans engagement.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { icon: Clock, label: "≈ 30 minutes" },
              { icon: Video, label: "Visio ou téléphone" },
              { icon: CalendarCheck, label: "Confirmation immédiate" },
            ].map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm"
              >
                <b.icon size={12} className="text-brand-gold" />
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Iframe — fondu dans la page, sans cadre visible */}
      <section className="pb-20 pt-10 md:pb-28 md:pt-14">
        <div className="container">
          <iframe
            src="https://odoo.msl-itech.com/appointment/4?iframe=1"
            title="Prendre rendez-vous avec MSL-iTECH"
            className="odoo-iframe block h-[1400px] w-full md:h-[1200px]"
            style={{ background: "transparent" }}
            frameBorder={0}
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}