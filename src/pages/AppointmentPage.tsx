import { useProductSeo } from "@/hooks/useProductSeo";

export default function AppointmentPage() {
  useProductSeo({
    title: "Prendre rendez-vous — MSL-iTECH",
    description:
      "Réservez un créneau avec MSL-iTECH pour discuter de votre projet Odoo, web ou marketing digital. Échange clair, sans engagement.",
    path: "/prendre-rendez-vous",
  });

  return (
    <main className="h-full overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      <section className="h-full w-full overflow-hidden">
        <iframe
          src="https://odoo.msl-itech.com/appointment/4?iframe=1"
          title="Prendre rendez-vous avec MSL-iTECH"
          className="odoo-iframe block h-full w-full"
          style={{
            background: "transparent",
            border: 0,
            display: "block",
          }}
          allowFullScreen
        />
      </section>
    </main>
  );
}