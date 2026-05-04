import { Calculator, FileText, Receipt, Wallet } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import financeHero from "@/assets/finance-hero.webp";

const features = [
  {
    icon: Calculator,
    title: "Comptabilité automatisée",
    desc: "Chaque vente et chaque achat génère automatiquement les écritures comptables correspondantes. Votre plan comptable est toujours à jour, sans ressaisie manuelle.",
  },
  {
    icon: FileText,
    title: "Facturation professionnelle",
    desc: "Créez des factures personnalisées, envoyez-les par email avec suivi d'ouverture, et proposez le paiement en ligne. Odoo génère automatiquement les rappels pour les impayés.",
  },
  {
    icon: Receipt,
    title: "Notes de frais sans friction",
    desc: "Vos collaborateurs photographient leurs justificatifs depuis leur téléphone. Les notes de frais sont validées en ligne, comptabilisées automatiquement et remboursées à la prochaine paie.",
  },
  {
    icon: Wallet,
    title: "Trésorerie en temps réel",
    desc: "Tableau de bord trésorerie actualisé en permanence, prévisions de flux, rapprochement bancaire automatique. Vous savez à tout moment ce que vous avez en banque.",
  },
];

/* Bento — charte MSL : blue, gold, blue-light, bg, white */
const bentoCards = [
  {
    icon: Calculator,
    title: "Comptabilité automatisée",
    desc: "Chaque vente et chaque achat génère automatiquement les écritures comptables. Votre plan comptable est toujours à jour, sans ressaisie.",
    variant: "blue", // dark blue card, gold accent
    span: "lg:col-span-7",
  },
  {
    icon: FileText,
    title: "Facturation pro",
    desc: "Factures personnalisées, suivi d'ouverture, paiement en ligne et rappels d'impayés automatiques.",
    variant: "gold", // gold tinted
    span: "lg:col-span-5",
  },
  {
    icon: Receipt,
    title: "Notes de frais",
    desc: "Photo du justificatif, validation en ligne, comptabilisation et remboursement automatiques.",
    variant: "white", // white card with blue border
    span: "lg:col-span-5",
  },
  {
    icon: Wallet,
    title: "Trésorerie temps réel",
    desc: "Dashboard actualisé, prévisions de flux et rapprochement bancaire automatique.",
    variant: "bluelight", // blue-light tinted
    span: "lg:col-span-7",
  },
] as const;

const variantStyles = {
  blue: {
    bg: "var(--blue)",
    text: "white",
    desc: "rgba(255,255,255,0.78)",
    iconBg: "var(--gold)",
    iconColor: "var(--blue)",
    chipBg: "rgba(255,221,87,0.16)",
    chipColor: "var(--gold)",
    chipBorder: "rgba(255,221,87,0.3)",
    glow: "var(--gold)",
    border: "transparent",
  },
  gold: {
    bg: "var(--gold)",
    text: "var(--blue)",
    desc: "rgba(18,77,90,0.78)",
    iconBg: "var(--blue)",
    iconColor: "var(--gold)",
    chipBg: "rgba(18,77,90,0.10)",
    chipColor: "var(--blue)",
    chipBorder: "rgba(18,77,90,0.18)",
    glow: "var(--blue)",
    border: "transparent",
  },
  white: {
    bg: "white",
    text: "var(--black)",
    desc: "var(--grey)",
    iconBg: "var(--blue)",
    iconColor: "var(--gold)",
    chipBg: "rgba(18,77,90,0.06)",
    chipColor: "var(--blue)",
    chipBorder: "var(--grey-light)",
    glow: "var(--gold)",
    border: "var(--grey-light)",
  },
  bluelight: {
    bg: "var(--blue-light)",
    text: "var(--blue)",
    desc: "rgba(18,77,90,0.75)",
    iconBg: "var(--blue)",
    iconColor: "var(--gold)",
    chipBg: "white",
    chipColor: "var(--blue)",
    chipBorder: "rgba(18,77,90,0.15)",
    glow: "var(--gold)",
    border: "transparent",
  },
} as const;

function FinanceBento() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            <span className="inline-block h-px w-8 bg-brand-blue" />
            Ce qu'Odoo Finance résout
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-[2.5rem]">
            Ce qu'Odoo Finance résout pour vous
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(220px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-12">
          {bentoCards.map((c) => {
            const Icon = c.icon;
            const s = variantStyles[c.variant];
            return (
              <article
                key={c.title}
                className={`group relative overflow-hidden rounded-[28px] border p-7 md:p-8 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.28)] ${c.span}`}
                style={{ backgroundColor: s.bg, borderColor: s.border }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-25 blur-3xl"
                  style={{ backgroundColor: s.glow }}
                />

                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                      style={{
                        backgroundColor: s.chipBg,
                        color: s.chipColor,
                        borderColor: s.chipBorder,
                      }}
                    >
                      Odoo Finance
                    </span>
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] transition group-hover:scale-105"
                      style={{ backgroundColor: s.iconBg, color: s.iconColor }}
                    >
                      <Icon size={22} />
                    </div>
                  </div>

                  <div>
                    <h3
                      className="font-heading text-2xl font-bold leading-[1.1] md:text-[1.75rem]"
                      style={{ color: s.text }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="mt-3 max-w-md font-body text-sm md:text-base"
                      style={{ color: s.desc }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Odoo Finance est-il conforme à la réglementation comptable belge ?",
    a: "Oui. Odoo intègre le plan comptable belge (PCMN), les taux de TVA belges et les formats de déclarations fiscales. MSL-iTECH configure la localisation belge lors de l'implémentation.",
  },
  {
    q: "Odoo Finance est-il adapté à la réglementation marocaine ?",
    a: "Odoo peut être configuré pour accompagner votre mise en conformité selon les exigences applicables à votre secteur et votre calendrier d'obligation. MSL-iTECH suit l'évolution des textes de la DGI et adapte les implémentations en conséquence.",
  },
  {
    q: "Mon expert-comptable peut-il continuer à travailler avec Odoo ?",
    a: "Absolument. Odoo génère tous les exports comptables standard. Votre expert-comptable peut accéder à un espace dédié ou travailler à partir des exports.",
  },
];

export default function FinancePage() {
  useProductSeo({
    title: "Odoo Finance & Comptabilité PME — MSL-iTECH",
    description:
      "Pilotez votre trésorerie et automatisez votre comptabilité avec Odoo. Implémentation certifiée MSL-iTECH. Belgique & Maroc. Démo gratuite.",
    path: "/odoo-finance-comptabilite",
    faqs,
    ldId: "ld-faq-finance",
  });

  return (
    <ProductPageShell
      eyebrow="Odoo Finance & Comptabilité"
      title={
        <>
          Vous pilotez votre trésorerie à vue —{" "}
          <span style={{ color: "var(--gold)" }}>Odoo</span> vous donne les
          données financières en{" "}
          <em className="font-heading italic">temps réel</em>
        </>
      }
      intro="Clôtures de fin de mois stressantes, rapprochements bancaires manuels, relances impayés chronophages : la gestion financière d'une PME sans outil intégré coûte des heures chaque semaine et produit des erreurs coûteuses. Odoo Finance automatise l'essentiel et vous donne une vision claire à tout moment."
      heroImage={financeHero}
      heroImageAlt="Tableau de bord financier Odoo Finance"
      metaNote="30 minutes · Sans engagement · Configuré pour votre structure"
      featuresEyebrow="Ce qu'Odoo Finance résout"
      featuresTitle="Ce qu'Odoo Finance résout pour vous"
      features={features}
      featuresSlot={<FinanceBento />}
      whySection={{
        title: "MSL-iTECH configure Odoo Finance pour votre contexte",
        desc: "La comptabilité belge et la comptabilité marocaine ont des exigences différentes — plan comptable, TVA, obligations déclaratives. Nos consultants configurent Odoo selon les normes de votre pays et de votre secteur.",
        points: [
          "Localisation belge (PCMN, TVA, déclarations)",
          "Configuration adaptée aux exigences marocaines",
          "Suivi de l'évolution des textes DGI",
          "Espace dédié pour votre expert-comptable",
        ],
      }}
      faqs={faqs}
      ctaTitle="Réserver ma démo gratuite — Finance & Comptabilité"
      ctaSubtitle="Voir Odoo Finance configuré pour votre structure · 30 minutes · Sans engagement"
    />
  );
}