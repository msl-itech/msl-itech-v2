import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  PhoneCall,
  Building2,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import heroMaImg from "@/assets/hero-ma.webp";

function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden
        className="absolute inset-x-[-4px] bottom-[6%] -z-0 h-[42%] -rotate-[1.5deg] rounded-[6px]"
        style={{ backgroundColor: "var(--gold)", filter: "blur(0.3px)" }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

const faqs = [
  {
    q: "MSL-iTECH intervient-il physiquement à Casablanca ?",
    a: "Oui. Bien que notre siège soit à Marrakech, nous intervenons régulièrement à Casablanca pour les phases clés des projets : cadrage initial, ateliers de conception, formation des équipes et accompagnement au démarrage. Le reste du projet est géré à distance avec des outils de collaboration adaptés.",
  },
  {
    q: "Quels secteurs accompagnez-vous à Casablanca ?",
    a: "Casablanca concentre la majorité des PME, ETI et grands comptes marocains. Nous accompagnons principalement des distributeurs et grossistes, des entreprises industrielles, des sociétés de services B2B, des groupes multi-sites, des cabinets professionnels (comptabilité, avocats) et des entreprises du secteur financier.",
  },
  {
    q: "Comment se déroule le support Odoo à distance pour les entreprises casablancaises ?",
    a: "Notre support fonctionne par ticket, hotline téléphonique et télémaintenance (partage d'écran). En cas d'urgence critique au démarrage, nous pouvons déployer un consultant sur site à Casablanca sous 24 à 48 heures. Notre SLA standard garantit une prise en charge des incidents bloquants sous 4 heures ouvrées.",
  },
  {
    q: "Odoo est-il adapté aux grandes entreprises casablancaises multi-sites ?",
    a: "Oui. Odoo gère nativement les structures multi-sociétés, multi-entrepôts et multi-devises — idéal pour les groupes ayant des entités à Casablanca, Rabat, Tanger et à l'international. MSL-iTECH a une expertise spécifique sur ces architectures complexes.",
  },
  {
    q: "Proposez-vous des références de projets Odoo à Casablanca ?",
    a: "Nous pouvons partager des références et retours d'expérience lors d'un premier rendez-vous, sous accord de confidentialité. Consultez également notre page Réalisations pour un aperçu de projets représentatifs.",
  },
];

const casaSectors = [
  {
    icon: Truck,
    title: "Distribution & Logistique",
    desc: "Gestion des stocks multi-entrepôts, commandes fournisseurs, traçabilité des lots et optimisation des tournées — secteur dominant du Grand Casablanca.",
    href: "/odoo-transport-logistique-maroc",
  },
  {
    icon: Building2,
    title: "Industrie & Production",
    desc: "MRP, planification de la production, ordres de fabrication, qualité et maintenance préventive pour les sites industriels de la zone.",
    href: "/odoo-production-fabrication",
  },
  {
    icon: ShieldCheck,
    title: "Services B2B & Cabinets",
    desc: "Gestion des projets, facturation à l'avancement, CRM et suivi des temps pour cabinets d'audit, conseils et ESN.",
    href: "/odoo-services-professionnels",
  },
  {
    icon: Sparkles,
    title: "Commerce & Grande Distribution",
    desc: "Point de vente, gestion des promotions, fidélité client et pilotage multi-points de vente depuis un seul back-office Odoo.",
    href: "/odoo-gestion-stock-maroc",
  },
];

function useSeo() {
  useProductSeo({
    title: "Intégrateur Odoo Casablanca — ERP pour PME et ETI | MSL-iTECH",
    description:
      "MSL-iTECH déploie Odoo à Casablanca et dans le Grand Casablanca. Partenaire Odoo certifié : implémentation ERP, modules custom, support — distribution, industrie, services B2B.",
    path: "/integrateur-odoo-casablanca",
    ogImage: heroMaImg,
    faqs,
    service: {
      name: "Intégration Odoo ERP à Casablanca",
      description:
        "Implémentation, personnalisation et support de la plateforme Odoo pour les PME, ETI et grands comptes du Grand Casablanca.",
      serviceType: ["Intégration ERP", "Implémentation Odoo", "Conseil Odoo", "Support Odoo"],
      areaServed: ["MA"],
    },
    breadcrumbs: [
      { name: "Accueil", url: "/" },
      { name: "Intégrateur Odoo Maroc", url: "/integrateur-odoo-maroc" },
      { name: "Casablanca", url: "/integrateur-odoo-casablanca" },
    ],
  });
}

export default function IntegrateurOdooCasablancaPage() {
  useSeo();

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-brand-bg py-20 md:py-28">
        <HeroCursorGlow color="rgba(255, 221, 87, 1)" size={520} intensity={0.35} />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(rgba(13,13,13,0.7) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-white/70 px-3.5 py-1.5 backdrop-blur-sm">
              <MapPin size={12} className="text-brand-blue" aria-hidden="true" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-blue">
                Intégrateur Odoo · Casablanca
              </p>
            </div>

            <h1 className="mt-8 font-heading text-5xl font-bold leading-[1.04] tracking-tight text-brand-black md:text-[72px]">
              Votre intégrateur Odoo <Mark>à Casablanca</Mark>.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-body text-base text-brand-grey md:text-lg">
              MSL-iTECH accompagne les PME, ETI et groupes du <strong>Grand Casablanca</strong>
              {" "}dans leur déploiement Odoo. Partenaire certifié Ready Partner, nous intervenons
              en présentiel et à distance pour l'implémentation, la personnalisation et le support
              de votre ERP.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Démarrer mon projet à Casablanca
                <ArrowRight size={18} aria-hidden="true" className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/prendre-rendez-vous"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue/30 bg-brand-white px-6 py-3.5 font-body text-sm font-semibold text-brand-blue transition hover:border-brand-blue"
              >
                <PhoneCall size={16} aria-hidden="true" />
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Notre modèle d'intervention à Casa ── */}
      <section className="border-y border-brand-grey/10 bg-brand-white py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-2xl font-bold text-brand-black md:text-3xl">
              Comment nous intervenons à Casablanca
            </h2>
            <p className="mt-4 max-w-2xl font-body text-sm text-brand-grey">
              Notre modèle hybride (présentiel + distance) a été conçu pour les entreprises
              du Grand Casablanca qui veulent la qualité d'un cabinet local sans son tarif horaire.
            </p>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Réunion de cadrage initiale en présentiel à Casablanca",
                "Ateliers de conception fonctionnelle en présentiel ou visio",
                "Configuration et développements depuis nos bureaux de Marrakech",
                "Recette utilisateur avec votre équipe (présentiel ou remote)",
                "Formation des utilisateurs en présentiel à Casablanca",
                "Accompagnement go-live sur site",
                "Support post-démarrage à distance + interventions prioritaires sur site",
                "Déplacements Casablanca facturés au forfait, sans surprise",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-brand-grey">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-blue"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Secteurs Casablanca ── */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Secteurs que nous accompagnons dans le Grand Casablanca
            </h2>
            <p className="mt-4 max-w-2xl font-body text-brand-grey">
              Casablanca concentre les secteurs à plus forte intensité opérationnelle au Maroc.
              Nos consultants en maîtrisent les spécificités.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {casaSectors.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="group flex flex-col gap-3 rounded-2xl border bg-brand-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <s.icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-brand-black group-hover:text-brand-blue">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-brand-grey">{s.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1 font-body text-xs font-semibold text-brand-blue">
                    Voir la solution Odoo
                    <ArrowRight size={12} aria-hidden="true" className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Odoo pour structures complexes ── */}
      <section className="bg-brand-bg py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Odoo pour groupes multi-sites et ETI à Casablanca
            </h2>
            <p className="mt-4 max-w-2xl font-body text-brand-grey">
              Casablanca abrite les sièges sociaux des principales ETI et groupes marocains.
              Odoo répond nativement à leurs exigences de consolidation et de contrôle.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Multi-sociétés",
                  desc: "Consolidation financière, facturation inter-sociétés et pilotage centralisé de plusieurs entités juridiques depuis un seul Odoo.",
                },
                {
                  title: "Multi-entrepôts",
                  desc: "Gestion de stocks répartis sur plusieurs sites (Casablanca, Tanger, Agadir) avec règles de réapprovisionnement automatiques.",
                },
                {
                  title: "Reporting avancé",
                  desc: "Tableaux de bord personnalisés, exports DGI conformes, états financiers CGNC et KPIs opérationnels en temps réel.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border bg-brand-white p-6"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <h3 className="font-heading text-base font-bold text-brand-black">{item.title}</h3>
                  <p className="mt-2 font-body text-sm text-brand-grey">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Questions fréquentes — Odoo à Casablanca
            </h2>
            <dl className="mt-10 space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border bg-brand-white p-6"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <dt className="font-heading text-base font-bold text-brand-black">{faq.q}</dt>
                  <dd className="mt-3 font-body text-sm leading-relaxed text-brand-grey">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Navigation vers autres villes ── */}
      <section className="border-t border-brand-grey/10 bg-brand-white py-12">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-sm text-brand-grey">
              Intégrateur Odoo dans d'autres villes du Maroc :
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/integrateur-odoo-maroc"
                className="rounded-full border border-brand-blue/20 px-4 py-2 font-body text-sm text-brand-blue transition hover:border-brand-blue"
              >
                Maroc (national)
              </Link>
              <Link
                to="/integrateur-odoo-marrakech"
                className="rounded-full border border-brand-blue/20 px-4 py-2 font-body text-sm text-brand-blue transition hover:border-brand-blue"
              >
                Marrakech
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-brand-blue/20 px-4 py-2 font-body text-sm text-brand-blue transition hover:border-brand-blue"
              >
                Autre ville →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-20">
        <div className="container">
          <div
            className="mx-auto max-w-3xl rounded-3xl px-8 py-14 text-center"
            style={{ backgroundColor: "var(--blue)" }}
          >
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Démarrons votre projet Odoo à Casablanca
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-white/80">
              Parlez-nous de votre projet. Nous vous proposons un premier rendez-vous
              (présentiel à Casablanca ou visio) et une estimation sous 48 heures — sans engagement.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black transition hover:scale-[1.02]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Obtenir un devis gratuit
                <ArrowRight size={18} aria-hidden="true" className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/realisations"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3.5 font-body text-sm font-semibold text-white transition hover:border-white"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
