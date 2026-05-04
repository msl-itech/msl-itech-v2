import {
  Users,
  BellRing,
  FileText,
  BarChart3,
} from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import crmHero from "@/assets/crm-hero.webp";
import bentoPipeline from "@/assets/crm/bento-pipeline.jpg";
import bentoRelances from "@/assets/crm/bento-relances.jpg";
import bentoDevis from "@/assets/crm/bento-devis.jpg";
import bentoReporting from "@/assets/crm/bento-reporting.jpg";

const features = [
  {
    icon: Users,
    title: "Pipeline centralisé et visible",
    desc: "Chaque opportunité commerciale a une fiche complète : contact, historique, valeur estimée, prochaine action. Votre direction voit le pipeline consolidé en temps réel. Vos commerciaux savent exactement quoi faire chaque matin.",
  },
  {
    icon: BellRing,
    title: "Relances automatisées, zéro oubli",
    desc: "Odoo génère automatiquement des rappels de relance selon les règles que vous définissez. Plus jamais un prospect oublié après un premier contact positif.",
  },
  {
    icon: FileText,
    title: "Devis professionnels en 2 clics",
    desc: "Créez des devis personnalisés depuis la fiche opportunité, envoyez-les directement par email et suivez leur ouverture. Vos clients signent et paient en ligne via des plateformes sécurisées.",
  },
  {
    icon: BarChart3,
    title: "Reporting commercial en temps réel",
    desc: "Taux de conversion par commercial, valeur du pipeline par secteur, délai moyen de signature : tous vos indicateurs clés disponibles sans exporter la moindre donnée.",
  },
];

const bentoCards = [
  {
    icon: Users,
    title: "Pipeline centralisé et visible",
    desc: "Chaque opportunité a une fiche complète : contact, historique, valeur estimée, prochaine action. Direction et commerciaux voient le pipeline consolidé en temps réel.",
    img: bentoPipeline,
    span: "lg:col-span-4",
    tag: "Pipeline",
  },
  {
    icon: BellRing,
    title: "Relances automatisées",
    desc: "Rappels générés automatiquement selon vos règles. Plus aucun prospect oublié.",
    img: bentoRelances,
    span: "lg:col-span-2",
    tag: "Automation",
  },
  {
    icon: FileText,
    title: "Devis en 2 clics",
    desc: "Devis personnalisés depuis la fiche opportunité. Envoi, suivi d'ouverture, signature et paiement en ligne.",
    img: bentoDevis,
    span: "lg:col-span-2",
    tag: "Devis",
  },
  {
    icon: BarChart3,
    title: "Reporting commercial en temps réel",
    desc: "Taux de conversion par commercial, valeur du pipeline par secteur, délai moyen de signature — tous vos KPI sans aucun export.",
    img: bentoReporting,
    span: "lg:col-span-4",
    tag: "Analytics",
  },
];

function CrmBento() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-grey">
            Ce qu'Odoo CRM change
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-[2.5rem]">
            Ce qu'Odoo CRM change concrètement
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-6">
          {bentoCards.map((c, i) => (
            <article
              key={c.title}
              className={`group relative isolate flex h-[28rem] flex-col justify-end overflow-hidden rounded-3xl border ${c.span}`}
              style={{ borderColor: "var(--grey-light)", backgroundColor: "#0F3F4A" }}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
              />
              <div
                aria-hidden
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,63,74,0.15) 0%, rgba(15,63,74,0.55) 45%, rgba(15,63,74,0.95) 100%)",
                }}
              />

              <div className="absolute left-6 top-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl backdrop-blur-md"
                  style={{
                    backgroundColor: "rgba(255,221,87,0.18)",
                    color: "var(--gold)",
                    border: "1px solid rgba(255,221,87,0.4)",
                  }}
                >
                  <c.icon size={18} />
                </span>
                <span
                  className="rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur-md"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  {c.tag}
                </span>
              </div>

              <div className="absolute right-6 top-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/55">
                  0{i + 1}
                </span>
              </div>

              <div
                className="relative p-7"
                style={{ textShadow: "0 1px 14px rgba(0,0,0,0.5)" }}
              >
                <h3 className="font-heading text-2xl font-bold text-white md:text-[1.65rem]">
                  {c.title}
                </h3>
                <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-white/85">
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Odoo CRM est-il adapté aux PME de moins de 20 personnes ?",
    a: "Oui. Odoo CRM est conçu pour s'adapter à la taille de l'équipe. Une PME de 5 commerciaux tirera autant de valeur d'Odoo CRM qu'une structure de 50 — la configuration est simplement allégée. MSL-iTECH propose des packs d'implémentation spécifiquement calibrés pour les PME.",
  },
  {
    q: "Combien de temps faut-il pour implémenter Odoo CRM ?",
    a: "Pour une PME standard, l'implémentation du module CRM prend entre 2 et 4 semaines selon la complexité du cycle de vente et le volume de données à migrer.",
  },
  {
    q: "Peut-on migrer nos données depuis Excel ou un autre CRM ?",
    a: "Oui. MSL-iTECH réalise la migration complète de vos données existantes vers Odoo CRM. La migration est incluse dans les packs Avancé, Premium, VIP et Elite.",
  },
];

export default function CrmPage() {
  useProductSeo({
    title: "Odoo CRM & Ventes — Pilotez vos commerciaux | MSL-iTECH",
    description:
      "Centralisez votre pipeline commercial avec Odoo CRM. Implémentation certifiée par MSL-iTECH. Belgique, Maroc, Canada. Démo gratuite.",
    path: "/odoo-crm-ventes",
    faqs,
    ldId: "ld-faq-crm",
  });

  return (
    <ProductPageShell
      eyebrow="Odoo CRM & Ventes"
      title={
        <>
          Vos commerciaux travaillent encore chacun de leur côté —{" "}
          <span style={{ color: "var(--gold)" }}>Odoo CRM</span> centralise tout
          en <em className="font-heading italic">temps réel</em>
        </>
      }
      intro="Leads perdus, relances oubliées, pipeline illisible : si votre équipe commerciale gère encore ses contacts dans Excel ou dans sa tête, vous perdez des opportunités à chaque cycle. Odoo CRM élimine ce problème en centralisant leads, opportunités, devis et relances dans un seul outil — visible par tous, en temps réel."
      heroImage={crmHero}
      heroImageAlt="Pipeline commercial Odoo CRM centralisé"
      metaNote="30 minutes · Sans engagement · Configuré pour votre secteur"
      featuresEyebrow="Ce qu'Odoo CRM change"
      featuresTitle="Ce qu'Odoo CRM change concrètement"
      features={features}
      featuresSlot={<CrmBento />}
      whySection={{
        title: "Pourquoi faire appel à MSL-iTECH pour votre CRM Odoo",
        desc: "Un CRM mal paramétré crée plus de résistance qu'il n'en supprime. Nos consultants certifiés Odoo adaptent la configuration à votre cycle de vente réel — pas à un modèle générique. Nous migrons vos données existantes, formons vos équipes et restons disponibles après la mise en production.",
        points: [
          "Consultants certifiés Odoo",
          "Configuration adaptée à votre cycle de vente réel",
          "Migration complète de vos données existantes",
          "Formation des équipes et support post-production",
        ],
      }}
      faqs={faqs}
      ctaTitle="Réserver ma démo gratuite — CRM & Ventes"
      ctaSubtitle="Voir Odoo CRM configuré pour votre secteur · 30 minutes · Sans engagement"
    />
  );
}