import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Globe2, ShieldCheck, Wallet } from "lucide-react";
import { useMarket } from "@/hooks/useMarket";

/* ------------------------------ SEO ------------------------------ */
function useSeo(market: "BE" | "MA") {
  useEffect(() => {
    const title =
      market === "MA"
        ? "Intégration Odoo Maroc | ERP PME & Digital — MSL-iTECH"
        : "Expert Odoo Belgique | Intégration ERP & Digital — MSL-iTECH";
    const desc =
      market === "MA"
        ? "Intégrateur Odoo certifié au Maroc. Solutions ERP sur mesure pour HORECA, BTP, Santé et Commerce. À partir de 199 MAD/mois. Démo gratuite."
        : "Partenaire officiel Odoo en Belgique. Implémentation ERP, création web et marketing digital pour PME. Packs d'heures 20 à 50% plus accessibles que les Success Packs observés sur le marché belge. Démo gratuite.";
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/";
  }, [market]);
}

/* ------------------------------ Hero BE ------------------------------ */
function HeroBE() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--blue) 0%, #0a2d36 100%)" }}
    >
      <div className="container py-24 md:py-32">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-white/70">
          Partenaire officiel Odoo · Belgique
        </p>
        <h1 className="max-w-[800px] font-heading text-4xl font-bold leading-[1.05] text-white md:text-[52px]">
          Implémentez Odoo avec un partenaire officiel certifié — avec des packs d'heures{" "}
          <span className="text-brand-gold">20 à 50% plus accessibles</span> que les Success Packs observés sur le marché belge
        </h1>
        <p className="mt-6 max-w-[580px] font-body text-lg text-white/80">
          Votre entreprise mérite un ERP performant sans entrer dans une logique de cabinet lourd ou opaque.
          MSL-iTECH est un partenaire officiel Odoo, avec une équipe structurée entre la Belgique et le Maroc,
          ce qui nous permet de proposer une expertise certifiée, des tarifs transparents et un accompagnement
          adapté à la réalité des PME.
        </p>
        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md px-8 py-4 font-body text-base font-bold text-brand-black transition hover:opacity-90"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Réserver ma démo gratuite <ArrowRight size={18} />
          </Link>
          <p className="mt-4 font-body text-sm text-white/60">
            Sans engagement · Réponse sous 24 à 72h ouvrables
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Hero MA ------------------------------ */
function HeroMA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--blue) 0%, #0a2d36 100%)" }}
    >
      <div className="container py-24 md:py-32">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-white/70">
          Partenaire officiel Odoo · Maroc
        </p>
        <h1 className="max-w-[800px] font-heading text-4xl font-bold leading-[1.05] text-white md:text-[52px]">
          Votre entreprise a dépassé Excel — <span className="text-brand-gold">Odoo vous donne les outils des grandes structures</span>, au prix du marché marocain
        </h1>
        <p className="mt-6 max-w-[580px] font-body text-lg text-white/80">
          HORECA, BTP, Santé, Commerce : si vous gérez un effectif de 5 personnes ou plus et que votre CA
          approche ou dépasse 1,5 million de dirhams, vos outils actuels freinent votre croissance.
          MSL-iTECH structure vos opérations avec Odoo, construit votre présence en ligne et pilote votre acquisition.
        </p>
        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md px-8 py-4 font-body text-base font-bold text-brand-black transition hover:opacity-90"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Réserver ma démo gratuite <ArrowRight size={18} />
          </Link>
          <p className="mt-4 font-body text-sm text-white/60">
            Sans engagement · Réponse sous 24 à 72h ouvrables
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Social proof ticker ------------------------------ */
function SocialProof() {
  const items = [
    <>
      ✓ Partenaire officiel{" "}
      <a
        href="https://www.odoo.com/partners"
        target="_blank"
        rel="noreferrer"
        className="underline decoration-brand-gold underline-offset-4"
      >
        Odoo
      </a>
    </>,
    "✓ Certifié Odoo 17+",
    "✓ Belgique · Maroc · Canada",
    "✓ 9 références publiques sur odoo.com/partners",
    "✓ Packs 20 à 50% plus accessibles que les Success Packs marché belge",
    "✓ Réponse sous 24 à 72h ouvrables",
  ];
  const doubled = [...items, ...items];
  return (
    <section className="overflow-hidden bg-brand-black py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-body text-sm text-white/85">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Pillars ------------------------------ */
function Pillars() {
  return (
    <section className="container py-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
        Notre approche
      </p>
      <h2 className="max-w-2xl font-heading text-3xl font-bold text-brand-black md:text-4xl">
        Nous structurons, construisons et accélérons votre entreprise
      </h2>
      <p className="mt-5 max-w-3xl font-body text-base text-brand-grey md:text-lg">
        MSL-iTECH n'est pas une agence généraliste. Nous partons d'Odoo pour structurer
        vos opérations, puis nous connectons votre présence web et votre acquisition pour
        accélérer votre croissance. Trois expertises. Un seul interlocuteur.
      </p>
      <div className="mt-12 grid gap-6 lg:grid-cols-7">
        {/* Odoo dominant: 3 cols of 7 */}
        <Link
          to="/odoo-crm-ventes"
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 lg:col-span-3 lg:row-span-1"
          style={{ backgroundColor: "var(--blue)" }}
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
              01 — Pilier principal
            </p>
            <h3 className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
              Structurer avec Odoo ERP
            </h3>
            <p className="mt-4 max-w-md font-body text-base text-white/80">
              Intégration Odoo certifiée pour vos finances, votre CRM, votre stock, votre
              production et vos ressources humaines. Un seul outil pour piloter toute votre
              entreprise.
            </p>
          </div>
          <div className="mt-10 inline-flex items-center gap-2 font-body text-sm font-medium text-brand-gold">
            Découvrir les modules <ArrowRight size={16} />
          </div>
        </Link>

        <Link
          to="/creation-web"
          className="group flex flex-col justify-between rounded-2xl border border-brand-grey-light p-8 transition hover:border-brand-blue lg:col-span-2"
          style={{ backgroundColor: "var(--grey-light)" }}
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-grey">
              02
            </p>
            <h3 className="mt-4 font-heading text-2xl font-bold text-brand-black">
              Construire avec la création web
            </h3>
            <p className="mt-3 font-body text-sm text-brand-grey">
              Sites web React haute performance, solutions WordPress rapides, et refonte
              de présence en ligne. Conçus pour convertir, optimisés pour être trouvés.
            </p>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 font-body text-sm font-medium text-brand-blue">
            En savoir plus <ArrowRight size={16} />
          </div>
        </Link>

        <Link
          to="/marketing-digital"
          className="group flex flex-col justify-between rounded-2xl border border-brand-grey-light p-8 transition hover:border-brand-blue lg:col-span-2"
          style={{ backgroundColor: "var(--grey-light)" }}
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-grey">
              03
            </p>
            <h3 className="mt-4 font-heading text-2xl font-bold text-brand-black">
              Accélérer avec le marketing digital
            </h3>
            <p className="mt-3 font-body text-sm text-brand-grey">
              SEO, référencement IA (GEO), campagnes d'acquisition et audit digital. Nous
              générons le trafic qualifié qui nourrit votre pipeline Odoo.
            </p>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 font-body text-sm font-medium text-brand-blue">
            En savoir plus <ArrowRight size={16} />
          </div>
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------ Sectors ------------------------------ */
const sectorsBE = [
  { label: "PME de services", desc: "Cabinets de conseil, agences, freelances structurés" },
  { label: "Cabinets & bureaux d'études", desc: "Architecture, ingénierie, expertise" },
  { label: "Commerce B2B", desc: "Distribution, négoce, grossistes" },
  { label: "Secteur administratif & RH", desc: "Organisations sociales, ASBL, RH externalisée" },
  { label: "Entreprises en croissance (10–50 salariés)", desc: "Scale-ups dépassant les outils tableurs" },
];

const sectorsMA = [
  { label: "HORECA", to: "/odoo-horeca-maroc", desc: "Restaurants, cafés, hôtels" },
  { label: "BTP & Construction", to: "/odoo-btp-maroc", desc: "Marchés publics, chantiers, sous-traitance" },
  { label: "Santé, Pharma & Aide sociale", to: "/odoo-sante-maroc", desc: "Cliniques, cabinets, distribution médicale" },
  { label: "Commerce de gros & Distribution", to: "/odoo-gestion-stock-maroc", desc: "Multi-points de vente, e-commerce, stock multi-dépôts" },
  { label: "Transport & Logistique", to: "/odoo-transport-logistique-maroc", desc: "Flotte, expéditions, douane" },
  { label: "Agroalimentaire", to: null, desc: "Production, traçabilité, distribution" },
];

function Sectors({ market }: { market: "BE" | "MA" }) {
  const items = market === "MA" ? sectorsMA : sectorsBE;
  return (
    <section className="bg-brand-bg">
      <div className="container py-20">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
          Secteurs
        </p>
        <h2 className="max-w-2xl font-heading text-3xl font-bold text-brand-black md:text-4xl">
          Nous connaissons votre secteur
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => {
            const Card = (
              <div className="group h-full rounded-xl border border-brand-grey-light bg-brand-white p-6 transition hover:border-brand-blue hover:shadow-[0_8px_24px_rgba(26,58,143,0.08)]">
                <h3 className="font-heading text-xl font-bold text-brand-black group-hover:text-brand-blue">
                  {s.label}
                </h3>
                <p className="mt-2 font-body text-sm text-brand-grey">{s.desc}</p>
                {"to" in s && s.to && (
                  <div className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-brand-blue">
                    Découvrir <ArrowRight size={12} />
                  </div>
                )}
                {"to" in s && !s.to && (
                  <span className="mt-4 inline-block rounded-full bg-brand-grey-light px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-grey">
                    Coming soon
                  </span>
                )}
              </div>
            );
            return "to" in s && s.to ? (
              <Link key={s.label} to={s.to}>
                {Card}
              </Link>
            ) : (
              <div key={s.label}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Case Study ------------------------------ */
function CaseStudy({ market }: { market: "BE" | "MA" }) {
  const data =
    market === "MA"
      ? {
          tag: "BTP · Marchés publics · Maroc",
          name: "AIT OUKHALI TRAVAUX",
          quote:
            "CRM appels d'offres, gestion de projet chantier, RH et facturation déployés. Toute la gestion centralisée dans Odoo en moins de 10 semaines.",
          metrics: [
            { k: "<10", v: "semaines de déploiement" },
            { k: "100%", v: "gestion centralisée dans Odoo" },
            { k: "1", v: "source de vérité" },
          ],
          isPlaceholder: false as const,
        }
      : {
          tag: "Agence immobilière sociale · Bruxelles",
          name: "AIS Hector Denis",
          quote:
            "AIS Hector Denis figure parmi nos références publiques, vérifiables sur notre fiche partenaire officielle Odoo. Témoignage direct à venir.",
          metrics: [
            { k: "9", v: "références publiques" },
            { k: "Odoo 17", v: "certifié" },
            { k: "100%", v: "vérifiable" },
          ],
          isPlaceholder: true as const,
        };

  return (
    <section className="container py-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
        Étude de cas
      </p>
      <h2 className="mb-8 max-w-2xl font-heading text-3xl font-bold text-brand-black md:text-4xl">
        Ce que nos clients ont obtenu
      </h2>
      <div className="grid gap-8 rounded-2xl border border-brand-grey-light bg-brand-white p-8 md:p-12 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-brand-blue-light px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
            {data.tag}
          </span>
          <h3 className="mt-5 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            {data.name}
          </h3>
          <p className="mt-4 font-body text-base text-brand-grey">{data.quote}</p>
          <Link
            to="/realisations"
            className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-brand-blue hover:underline"
          >
            Voir toutes les réalisations <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4 self-center">
          {data.metrics.map((m) => (
            <div
              key={m.v}
              className="rounded-xl p-5 text-center"
              style={{ backgroundColor: "var(--blue-light)" }}
            >
              <div className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
                {m.k}
              </div>
              <div className="mt-2 font-body text-xs text-brand-grey">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Why ------------------------------ */
function Why() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Partenaire officiel Odoo — vérifiable publiquement",
      desc: "MSL-iTECH figure sur la fiche officielle des partenaires Odoo, accessible sur odoo.com/partners. Nos certifications, notre statut de partenaire et nos références clients y sont visibles. Ce n'est pas une promesse — c'est une preuve externe vérifiable en quelques secondes.",
    },
    {
      icon: Wallet,
      title: "Des packs d'heures plus accessibles sur des volumes comparables",
      desc: "Notre structure internationale — équipe technique au Maroc, présence commerciale en Belgique — nous permet de proposer des packs d'heures 20 à 50% plus accessibles que les Success Packs observés sur le marché belge, sur des volumes comparables. Cet écart ne repose pas sur un compromis de qualité, mais sur une organisation plus optimisée.",
    },
    {
      icon: Globe2,
      title: "Un interlocuteur unique pour tout",
      desc: "ERP, site web, marketing : vous n'avez pas à coordonner trois prestataires différents. Une équipe, un projet, une vision cohérente. C'est ce que fait MSL-iTECH depuis 2020.",
    },
    {
      icon: Clock,
      title: "Réponse rapide et cadrée",
      desc: "Chaque demande de démo est traitée sous 24 à 72 heures ouvrables. Pas de tunnel de vente impersonnel : un consultant qui comprend votre secteur reprend votre demande et prépare un échange utile.",
    },
  ];
  return (
    <section className="bg-brand-bg">
      <div className="container py-20">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
          Pourquoi MSL-iTECH
        </p>
        <h2 className="max-w-2xl font-heading text-3xl font-bold text-brand-black md:text-4xl">
          Pourquoi choisir MSL-iTECH pour votre projet Odoo ?
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-5 rounded-xl border border-brand-grey-light bg-brand-white p-6"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: "var(--blue-light)" }}
              >
                <Icon size={22} className="text-brand-blue" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-brand-black">{title}</h3>
                <p className="mt-1 font-body text-sm text-brand-grey">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Final CTA ------------------------------ */
function FinalCTA() {
  return (
    <section style={{ backgroundColor: "var(--blue)" }}>
      <div className="container flex flex-col items-start gap-10 py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
            Prêt à structurer votre entreprise avec Odoo ?
          </h2>
          <p className="mt-4 font-body text-base text-white/80">
            Sans engagement · Réponse sous 24 à 72h ouvrables · Consultant dédié
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md px-8 py-4 font-body text-base font-bold text-brand-black transition hover:opacity-90"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Réserver ma démo gratuite <ArrowRight size={18} />
          </Link>
          <Link
            to="/realisations"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-4 font-body text-sm font-medium text-white transition hover:bg-white/10"
          >
            Voir nos réalisations <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================== Page ============================== */
export default function HomePage() {
  const { market } = useMarket();
  useSeo(market);

  return (
    <>
      {market === "MA" ? <HeroMA /> : <HeroBE />}
      <SocialProof />
      <Pillars />
      <Sectors market={market} />
      <CaseStudy market={market} />
      <Why />
      <FinalCTA />
    </>
  );
}