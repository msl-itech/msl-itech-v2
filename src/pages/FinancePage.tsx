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

const bentoCards = [
  {
    icon: Calculator,
    title: "Comptabilité automatisée",
    desc: "Chaque vente et chaque achat génère automatiquement les écritures. Votre plan comptable est toujours à jour, sans ressaisie.",
    bg: "#EAE6FA", // lavender
    accent: "#6E5BD0",
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    icon: FileText,
    title: "Facturation pro",
    desc: "Factures personnalisées, suivi d'ouverture, paiement en ligne et rappels automatiques.",
    bg: "#FBE3EA", // soft pink
    accent: "#D14B7A",
    span: "lg:col-span-5",
  },
  {
    icon: Receipt,
    title: "Notes de frais",
    desc: "Photo du justificatif, validation en ligne, comptabilisation auto.",
    bg: "#FBF1C5", // pastel yellow
    accent: "#C29A1A",
    span: "lg:col-span-2",
  },
  {
    icon: Wallet,
    title: "Trésorerie temps réel",
    desc: "Dashboard, prévisions et rapprochement bancaire automatique.",
    bg: "#E1EFD6", // pastel green
    accent: "#5C8A3A",
    span: "lg:col-span-3",
  },
];

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

        <div
          className="mt-14 grid auto-rows-[minmax(180px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-12"
        >
          {bentoCards.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className={`group relative overflow-hidden rounded-[28px] p-7 md:p-9 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.28)] ${c.span}`}
                style={{ backgroundColor: c.bg }}
              >
                {/* Decorative blob */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-30 blur-2xl"
                  style={{ backgroundColor: c.accent }}
                />

                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold leading-[1.05] text-brand-black md:text-3xl lg:text-[2.25rem]">
                      {c.title}
                    </h3>
                    <p className="mt-3 max-w-md font-body text-sm text-brand-black/70 md:text-base">
                      {c.desc}
                    </p>
                  </div>

                  <div className="flex items-end justify-between">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur"
                      style={{ color: c.accent }}
                    >
                      Odoo Finance
                    </span>
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] transition group-hover:scale-105 md:h-16 md:w-16"
                      style={{ backgroundColor: c.accent, color: "white" }}
                    >
                      <Icon size={26} />
                    </div>
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