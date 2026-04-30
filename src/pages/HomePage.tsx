import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Globe2, ShieldCheck, Wallet, Sparkles } from "lucide-react";
import { useMarket } from "@/hooks/useMarket";
import heroBeImg from "@/assets/hero-be.jpg";
import heroMaImg from "@/assets/hero-ma.jpg";

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

/* ------------------------------ Hero (shared shell) ------------------------------ */
function HeroShell({
  bgImage,
  eyebrow,
  titleTop,
  titleAccent,
  description,
}: {
  bgImage: string;
  eyebrow: string;
  titleTop: string;
  titleAccent: string;
  description: string;
}) {
  return (
    <section className="relative isolate overflow-hidden" style={{ backgroundColor: "var(--blue)" }}>
      {/* Background image with blend & fade */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bgImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(10,45,54,0.92) 0%, rgba(18,77,90,0.78) 50%, rgba(18,77,90,0.45) 100%)",
          }}
        />
      </div>

      {/* Glow effects */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: "var(--gold)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "var(--blue-light)" }}
      />

      <div className="container relative py-24 md:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <Sparkles size={14} className="text-brand-gold" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/80">{eyebrow}</p>
        </div>

        <h1 className="mt-8 max-w-[860px] font-heading text-4xl font-bold leading-[1.05] text-white md:text-[56px]">
          {titleTop}{" "}
          <span className="block text-brand-gold">{titleAccent}</span>
        </h1>

        <p className="mt-6 max-w-[620px] font-body text-lg text-white/80">{description}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-md px-8 py-4 font-body text-base font-bold text-brand-black shadow-[0_10px_40px_-10px_rgba(255,221,87,0.6)] transition hover:opacity-90"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Réserver ma démo gratuite
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
        <p className="mt-4 font-body text-sm text-white/60">
          Sans engagement · Réponse sous 24 à 72h ouvrables
        </p>
      </div>
    </section>
  );
}

function HeroBE() {
  return (
    <HeroShell
      bgImage={heroBeImg}
      eyebrow="Partenaire officiel Odoo · Belgique"
      titleTop="L'expertise d'un partenaire officiel certifié."
      titleAccent="Des tarifs repensés."
      description="Votre PME mérite un ERP performant sans la lourdeur d'un grand cabinet. Profitez de packs d'heures 20 à 50% plus accessibles que les standards du marché belge, sans compromis sur la qualité."
    />
  );
}

function HeroMA() {
  return (
    <HeroShell
      bgImage={heroMaImg}
      eyebrow="Partenaire officiel Odoo · Maroc"
      titleTop="Vous avez dépassé Excel."
      titleAccent="Passez à la vitesse supérieure."
      description="HORECA, BTP, Santé, Commerce : équipez-vous des outils des grandes structures au prix du marché marocain. Nous structurons vos opérations et pilotons votre acquisition."
    />
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
    "✓ 9 références publiques vérifiées",
    "✓ Tarifs 20 à 50% plus compétitifs",
    "✓ Réponse sous 24 à 72h ouvrables",
  ];
  const doubled = [...items, ...items, ...items];
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

/* ------------------------------ Pillars (Bento with images) ------------------------------ */
function Pillars() {
  return (
    <section className="container py-24">
      <div className="max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="h-px w-8 bg-brand-blue" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
            Notre écosystème
          </p>
        </div>
        <h2 className="font-heading text-3xl font-bold text-brand-black md:text-5xl">
          Structurer. Construire. Accélérer.
        </h2>
        <p className="mt-5 font-body text-base text-brand-grey md:text-lg">
          Bien plus qu'une agence. Un interlocuteur unique qui aligne votre gestion interne (ERP)
          avec votre croissance externe (Web & Marketing).
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-7">
        {/* Main pillar — Odoo */}
        <Link
          to="/odoo-crm-ventes"
          className="group relative isolate flex min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl p-10 lg:col-span-4"
          style={{ backgroundColor: "var(--blue)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 mix-blend-luminosity transition duration-700 group-hover:opacity-30 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(18,77,90,0.85) 0%, rgba(10,45,54,0.95) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: "var(--gold)" }}
          />

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold">
              01 — Pilier central
            </p>
            <h3 className="mt-5 max-w-md font-heading text-3xl font-bold text-white md:text-4xl">
              L'ERP qui structure vos opérations.
            </h3>
            <p className="mt-4 max-w-md font-body text-base text-white/80">
              Finance, CRM, Stock, RH. Odoo rassemble tous vos outils en un seul écosystème
              intelligent et centralisé.
            </p>
          </div>
          <div className="mt-10 inline-flex items-center gap-2 font-body text-sm font-medium text-brand-gold">
            Découvrir les modules
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </div>
        </Link>

        {/* Right column — 2 stacked */}
        <div className="grid gap-5 lg:col-span-3">
          <Link
            to="/creation-web"
            className="group relative isolate flex min-h-[200px] flex-col justify-between overflow-hidden rounded-3xl p-8"
          >
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-black/85 via-brand-black/55 to-brand-black/30" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold">
              02 — Web
            </p>
            <div>
              <h3 className="font-heading text-2xl font-bold text-white">Création & Refonte</h3>
              <p className="mt-2 font-body text-sm text-white/80">
                Sites vitrines et e-commerce taillés pour la conversion.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 font-body text-sm font-medium text-brand-gold">
                Explorer <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link
            to="/marketing-digital"
            className="group relative isolate flex min-h-[200px] flex-col justify-between overflow-hidden rounded-3xl p-8"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-black/85 via-brand-black/55 to-brand-black/30" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold">
              03 — Growth
            </p>
            <div>
              <h3 className="font-heading text-2xl font-bold text-white">Marketing Digital</h3>
              <p className="mt-2 font-body text-sm text-white/80">
                Acquisition IA, SEO et campagnes ciblées.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 font-body text-sm font-medium text-brand-gold">
                Explorer <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Sectors (image cards) ------------------------------ */
const sectorsBE = [
  { label: "Services & Conseil", desc: "Agences, freelances structurés", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", to: null as string | null },
  { label: "Bureaux d'études", desc: "Architecture, ingénierie", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80", to: null },
  { label: "Commerce B2B", desc: "Distribution, grossistes", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", to: null },
  { label: "Administratif & RH", desc: "ASBL, RH externalisée", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80", to: null },
  { label: "Scale-ups (10-50 emp.)", desc: "Entreprises en forte croissance", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", to: null },
];

const sectorsMA = [
  { label: "HORECA", to: "/odoo-horeca-maroc", desc: "Restaurants, cafés, hôtels", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
  { label: "BTP & Construction", to: "/odoo-btp-maroc", desc: "Marchés publics, chantiers", img: "https://images.unsplash.com/photo-1541888088374-c6e001925b30?auto=format&fit=crop&w=800&q=80" },
  { label: "Santé & Pharma", to: "/odoo-sante-maroc", desc: "Cliniques, distribution", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" },
  { label: "Commerce de gros", to: "/odoo-gestion-stock-maroc", desc: "Multi-dépôts, e-commerce", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80" },
  { label: "Logistique", to: "/odoo-transport-logistique-maroc", desc: "Flotte, expéditions", img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80" },
  { label: "Agroalimentaire", to: null as string | null, desc: "Production, traçabilité", img: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80" },
];

function Sectors({ market }: { market: "BE" | "MA" }) {
  const items = market === "MA" ? sectorsMA : sectorsBE;
  return (
    <section className="bg-brand-bg">
      <div className="container py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-5xl">
            Des solutions pensées pour <br className="hidden md:block" />
            votre réalité terrain.
          </h2>
          <p className="mt-5 font-body text-base text-brand-grey md:text-lg">
            Chaque industrie a ses codes. Nos implémentations sont pré-configurées pour vos cas
            d'usage spécifiques.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => {
            const isClickable = !!s.to;
            const Card = (
              <div className="group relative isolate flex h-72 flex-col justify-end overflow-hidden rounded-2xl">
                <img
                  src={s.img}
                  alt={s.label}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-black/90 via-brand-black/50 to-transparent" />
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-white">{s.label}</h3>
                  <p className="mt-1 font-body text-sm text-white/80">{s.desc}</p>
                  <div className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-brand-gold">
                    {isClickable ? (
                      <span className="inline-flex items-center gap-1">
                        Découvrir la solution <ArrowRight size={12} />
                      </span>
                    ) : (
                      <span className="rounded-full bg-white/10 px-2 py-1 backdrop-blur-sm">
                        Bientôt disponible
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );

            return isClickable && s.to ? (
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

/* ------------------------------ Case Study (split with image) ------------------------------ */
function CaseStudy({ market }: { market: "BE" | "MA" }) {
  const data =
    market === "MA"
      ? {
          tag: "BTP · Marchés publics",
          name: "AIT OUKHALI TRAVAUX",
          quote:
            "Toute la gestion centralisée dans Odoo en moins de 10 semaines. CRM appels d'offres, chantier, RH et facturation.",
          metrics: [
            { k: "<10", v: "semaines" },
            { k: "100%", v: "centralisé" },
            { k: "1", v: "seul outil" },
          ],
          img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
        }
      : {
          tag: "Immobilier social · Bruxelles",
          name: "AIS Hector Denis",
          quote:
            "Une implémentation structurée et transparente. AIS figure parmi nos références publiques, vérifiables sur odoo.com.",
          metrics: [
            { k: "9", v: "références" },
            { k: "V17", v: "certifié" },
            { k: "100%", v: "vérifiable" },
          ],
          img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
        };

  return (
    <section className="container py-24">
      <div className="grid overflow-hidden rounded-3xl border border-brand-grey-light bg-brand-white lg:grid-cols-2">
        {/* Left content */}
        <div className="flex flex-col justify-between p-8 md:p-12">
          <div>
            <span className="inline-block rounded-full bg-brand-blue-light px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
              {data.tag}
            </span>
            <h3 className="mt-5 font-heading text-3xl font-bold text-brand-black md:text-4xl">
              {data.name}
            </h3>
            <p className="mt-5 font-body text-lg italic text-brand-grey">"{data.quote}"</p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {data.metrics.map((m) => (
              <div key={m.v} className="border-l-2 border-brand-gold pl-4">
                <div className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
                  {m.k}
                </div>
                <div className="mt-1 font-body text-xs text-brand-grey">{m.v}</div>
              </div>
            ))}
          </div>

          <Link
            to="/realisations"
            className="mt-10 inline-flex items-center gap-2 font-body text-sm font-medium text-brand-blue hover:underline"
          >
            Voir toutes les études de cas <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right image */}
        <div className="relative min-h-[320px] lg:min-h-full">
          <img src={data.img} alt={data.name} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-white/40 via-transparent to-transparent lg:from-brand-white/20" />
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
      title: "Vérifiable publiquement",
      desc: "Certifications et références clients directement visibles sur la fiche officielle odoo.com/partners. La transparence avant tout.",
    },
    {
      icon: Wallet,
      title: "Tarification optimisée",
      desc: "Notre présence BeLux-Maroc nous permet de proposer des packs 20 à 50% plus accessibles, à qualité et volume équivalents.",
    },
    {
      icon: Globe2,
      title: "Un interlocuteur unique",
      desc: "ERP, création web et stratégie d'acquisition. Une seule équipe qui comprend votre business dans sa globalité.",
    },
    {
      icon: Clock,
      title: "Réactivité cadrée",
      desc: "Réponse experte sous 24 à 72h. Pas de commerciaux génériques — vous parlez directement à des consultants qui comprennent votre métier.",
    },
  ];

  return (
    <section className="bg-brand-white">
      <div className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-5xl">
            Pourquoi choisir MSL-iTECH ?
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-brand-grey-light bg-brand-bg p-7 transition hover:border-brand-blue hover:shadow-[0_12px_40px_-12px_rgba(18,77,90,0.25)]"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:scale-110"
                style={{ backgroundColor: "var(--blue-light)" }}
              >
                <Icon size={22} className="text-brand-blue" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-brand-black">{title}</h3>
              <p className="mt-2 font-body text-sm text-brand-grey">{desc}</p>
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
    <section className="relative isolate overflow-hidden" style={{ backgroundColor: "var(--blue)" }}>
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 mix-blend-luminosity"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(18,77,90,0.92) 0%, rgba(10,45,54,0.96) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "var(--gold)" }}
      />

      <div className="container relative py-24 text-center">
        <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
          Prêt à structurer votre entreprise avec Odoo ?
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-base text-white/80">
          Consultant dédié · Démo sur mesure · Sans engagement
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-md px-8 py-4 font-body text-base font-bold text-brand-black shadow-[0_10px_40px_-10px_rgba(255,221,87,0.6)] transition hover:opacity-90"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Réserver ma démo
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
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
