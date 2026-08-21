import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  PhoneCall,
  Clock,
  Wrench,
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
    q: "MSL-iTECH intervient-il directement à Marrakech ?",
    a: "Oui. MSL-iTECH est basé à Marrakech (951 Q.I. Al Massar N°2, Route de Safi). Nous intervenons en présentiel pour les audits, les ateliers de cadrage, la formation et le démarrage en production. La majorité du paramétrage et du développement est réalisée en mode projet depuis nos bureaux.",
  },
  {
    q: "Quels secteurs d'activité accompagnez-vous à Marrakech ?",
    a: "Nous accompagnons principalement les acteurs du tourisme et de l'hôtellerie (riads, hôtels, agences), du BTP et de la promotion immobilière, du commerce de détail et de gros, ainsi que les services professionnels et les cabinets médicaux de la région de Marrakech-Safi.",
  },
  {
    q: "Combien de temps dure une implémentation Odoo à Marrakech ?",
    a: "La durée dépend du périmètre projet. Pour une PME de 5 à 30 utilisateurs avec 2 à 4 modules Odoo, comptez en général entre 6 et 16 semaines du cadrage au go-live. Nous planifions les phases pour limiter les interruptions de votre activité courante.",
  },
  {
    q: "Proposez-vous un support Odoo après l'implémentation à Marrakech ?",
    a: "Oui. Nous proposons un contrat de support avec hotline dédiée, interventions prioritaires, gestion des montées de version et développements complémentaires. Nos équipes sont disponibles en français, arabe et anglais.",
  },
];

const localSectors = [
  {
    title: "Tourisme & Hôtellerie",
    desc: "Riads, hôtels, agences de voyage : gestion des réservations, facturation, stock F&B et RH saisonnière avec Odoo.",
    href: "/odoo-tourisme-maroc",
  },
  {
    title: "BTP & Promotion immobilière",
    desc: "Gestion de chantier, appels d'offres, facturation à l'avancement et sous-traitance dans la région Marrakech-Safi.",
    href: "/odoo-btp-maroc",
  },
  {
    title: "Commerce & Distribution",
    desc: "Caisse point de vente, gestion des stocks multi-entrepôts, achats et comptabilité pour commerces de la médina et zones industrielles.",
    href: "/odoo-gestion-stock-maroc",
  },
  {
    title: "HORECA",
    desc: "Restaurants, cafés, traiteurs : tickets de caisse, gestion des recettes, stock cuisine et fidélisation client.",
    href: "/odoo-horeca-maroc",
  },
];

function useSeo() {
  useProductSeo({
    title: "Intégrateur Odoo Marrakech — Consultant certifié sur place | MSL-iTECH",
    description:
      "MSL-iTECH, intégrateur Odoo basé à Marrakech. Intervention en présentiel pour PME de la région : tourisme, hôtellerie, BTP, commerce. Partenaire Odoo certifié Ready Partner.",
    path: "/integrateur-odoo-marrakech",
    ogImage: heroMaImg,
    faqs,
    service: {
      name: "Intégration Odoo ERP à Marrakech",
      description:
        "Implémentation, personnalisation et support de la plateforme Odoo pour les PME de Marrakech et de la région Marrakech-Safi.",
      serviceType: ["Intégration ERP", "Implémentation Odoo", "Conseil Odoo", "Support Odoo"],
      areaServed: ["MA"],
    },
    breadcrumbs: [
      { name: "Accueil", url: "/" },
      { name: "Intégrateur Odoo Maroc", url: "/integrateur-odoo-maroc" },
      { name: "Marrakech", url: "/integrateur-odoo-marrakech" },
    ],
  });
}

export default function IntegrateurOdooMarrakechPage() {
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
                Intégrateur Odoo · Marrakech
              </p>
            </div>

            <h1 className="mt-8 font-heading text-5xl font-bold leading-[1.04] tracking-tight text-brand-black md:text-[72px]">
              Votre intégrateur Odoo <Mark>à Marrakech</Mark>.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-body text-base text-brand-grey md:text-lg">
              MSL-iTECH est un partenaire Odoo certifié <strong>basé à Marrakech</strong>.
              Nous intervenons en présentiel dans toute la région Marrakech-Safi pour déployer,
              personnaliser et soutenir votre ERP Odoo — du cadrage au support post-démarrage.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-white px-4 py-2 font-body text-sm text-brand-grey">
              <MapPin size={14} className="text-brand-blue" aria-hidden="true" />
              951 Q.I. Al Massar N°2, Route de Safi — Marrakech
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Démarrer mon projet à Marrakech
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

      {/* ── Avantages local ── */}
      <section className="border-y border-brand-grey/10 bg-brand-white py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-2xl font-bold text-brand-black md:text-3xl">
              Pourquoi travailler avec un intégrateur Odoo local à Marrakech ?
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: MapPin,
                  title: "Présence physique",
                  desc: "Ateliers de cadrage, formations et démarrages réalisés en présentiel dans vos locaux. Pas de décalage horaire, pas de réunion en visio uniquement.",
                },
                {
                  icon: Clock,
                  title: "Réactivité terrain",
                  desc: "En cas de blocage au démarrage, un consultant MSL-iTECH peut être sur place le jour même. Aucun temps de déplacement depuis Casablanca ou l'étranger.",
                },
                {
                  icon: Wrench,
                  title: "Connaissance du tissu économique local",
                  desc: "Nous connaissons les secteurs dominants de Marrakech : tourisme, hôtellerie, BTP, artisanat et commerce. Nos solutions sont calibrées pour leur réalité.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border bg-brand-bg p-6"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <item.icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-brand-black">{item.title}</h3>
                  <p className="mt-2 font-body text-sm text-brand-grey">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Secteurs locaux ── */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Secteurs phares que nous accompagnons à Marrakech
            </h2>
            <p className="mt-4 max-w-2xl font-body text-brand-grey">
              L'économie marrakchie est diverse. Nos consultants ont l'expérience des métiers
              les plus représentés dans la région.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {localSectors.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="group flex flex-col gap-3 rounded-2xl border bg-brand-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: "var(--grey-light)" }}
                >
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

      {/* ── Ce que comprend notre accompagnement ── */}
      <section className="bg-brand-bg py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Notre accompagnement Odoo à Marrakech — de A à Z
            </h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                "Audit des processus métier en présentiel",
                "Cadrage fonctionnel et plan de projet détaillé",
                "Configuration et paramétrage des modules Odoo",
                "Développement de modules sur mesure si nécessaire",
                "Migration sécurisée de vos données (Excel, Sage, autre ERP)",
                "Formation des utilisateurs dans vos locaux",
                "Accompagnement au démarrage en production",
                "Support post-démarrage avec hotline dédiée",
                "Montées de version Odoo sans rupture",
                "Connecteurs avec vos outils tiers (e-commerce, DGI, API)",
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

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Questions fréquentes — Odoo à Marrakech
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
              Vous cherchez un intégrateur Odoo dans une autre ville ?
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/integrateur-odoo-maroc"
                className="rounded-full border border-brand-blue/20 px-4 py-2 font-body text-sm text-brand-blue transition hover:border-brand-blue"
              >
                Maroc (national)
              </Link>
              <Link
                to="/integrateur-odoo-casablanca"
                className="rounded-full border border-brand-blue/20 px-4 py-2 font-body text-sm text-brand-blue transition hover:border-brand-blue"
              >
                Casablanca
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
              Démarrons votre projet Odoo à Marrakech
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-white/80">
              Envoyez-nous une description de votre projet. Nous vous proposons un premier
              rendez-vous en présentiel ou en visio sous 48 heures — sans engagement.
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
