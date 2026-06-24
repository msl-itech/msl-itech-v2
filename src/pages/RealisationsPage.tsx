import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Building2,
  Home,
  Globe,
  ExternalLink,
  CheckCircle2,
  Star,
  ShoppingBag,
  Church,
  Hammer,
  Baby,
  HeartPulse,
  Briefcase,
  Truck,
  Zap,
  Landmark,
  Leaf,
  Factory,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import caseBe from "@/assets/home/case-be.webp";
import caseMa from "@/assets/home/case-ma.webp";
import pillarWeb from "@/assets/home/pillar-web.webp";
import sectorWholesale from "@/assets/home/sector-wholesale.webp";
import sectorBtp from "@/assets/home/sector-btp.webp";
import sectorHealth from "@/assets/home/sector-health.webp";
import sectorServices from "@/assets/home/sector-services.webp";
import sectorLogistics from "@/assets/home/sector-logistics.webp";
import sectorEngineering from "@/assets/home/sector-engineering.webp";
import sectorFood from "@/assets/home/sector-food.webp";
import sectorB2b from "@/assets/home/sector-b2b.webp";
import sectorScaleup from "@/assets/home/sector-scaleup.webp";
import caseChurch from "@/assets/home/case-church.webp";
import caseDaycare from "@/assets/home/case-daycare.webp";
import ctaBg from "@/assets/home/cta-bg.webp";

/* ---------------- Highlight (marker brushstroke) ---------------- */
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

/* ---------------- Sticker ---------------- */
function Sticker({
  children,
  rotate = -6,
  className = "",
}: {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-2xl border-2 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] ${className}`}
      style={{
        backgroundColor: "var(--gold)",
        borderColor: "var(--blue)",
        color: "var(--blue)",
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </span>
  );
}

const odooCases = [
  {
    icon: Landmark,
    name: "NASLI HOLDING",
    sector: "Holding & Investissement — Maroc",
    image: sectorScaleup,
    context:
      "Groupe d'investissement marocain basé à Marrakech. Société holding (SA) active dans l'hôtellerie, l'enseignement, la santé et l'immobilier de prestige, dont le projet M Avenue.",
    modules: ["RH", "Gestion du personnel", "Digitalisation des processus RH"],
    result:
      "Mise en place de la gestion RH sur Odoo : structuration des données du personnel, suivi des collaborateurs et digitalisation des processus de ressources humaines.",
  },
  {
    icon: Home,
    name: "DOWNTOWN HOTEL CORPORATION (DHC)",
    sector: "Hôtellerie & Immobilier — Maroc",
    image: caseMa,
    context:
      "Société hôtelière, filiale du groupe Nasli Holding, en charge de l'exploitation hôtelière et de la gestion immobilière et locative de ses actifs.",
    modules: ["État Locatif", "Abonnements", "Comptabilité"],
    result:
      "État locatif : centralisation des biens loués, calcul automatique des échéances et révisions de loyers, reporting dédié au parc immobilier. Abonnements : gestion et facturation des contrats récurrents. Comptabilité : mise en place et suivi de la gestion comptable.",
  },
  {
    icon: Building2,
    name: "AIT OUKHALI TRAVAUX",
    sector: "BTP & Marchés Publics — Maroc",
    image: caseMa,
    context:
      "Centralisation des données commerciales, CRM marchés publics, gestion du flux commercial et automatisation des projets, facturation et RH.",
    modules: ["CRM & appels d'offres", "Gestion de projet & Construction", "Facturation", "RH"],
    result: "Toute la gestion opérationnelle centralisée dans Odoo. Zéro ressaisie entre les services.",
  },
  {
    icon: Home,
    name: "AIS HECTOR DENIS",
    sector: "Agence Immobilière Sociale — Belgique",
    image: caseBe,
    context:
      "Agence immobilière sociale à but non lucratif basée à Evere, gestion de plus de 1.000 logements locatifs en Région Bruxelloise.",
    modules: ["Site web WordPress professionnel"],
    result:
      "Référence publiquement consultable sur notre fiche partenaire officielle Odoo.",
  },
  {
    icon: ShoppingBag,
    name: "EDGE SPORT MAROC",
    sector: "Vente en gros / Vente au détail — Maroc",
    image: sectorWholesale,
    context:
      "Distributeur d'articles de sport. Gestion du flux commercial, stocks multi-dépôts et suivi des ventes B2B et B2C.",
    modules: ["Ventes", "Achats", "Stock", "Comptabilité", "CRM"],
    result: "Visibilité en temps réel sur les stocks et les commandes. Circuit commercial entièrement intégré.",
  },
  {
    icon: ShoppingBag,
    name: "Hamimi Export",
    sector: "Vente en gros / Vente au détail — Maroc",
    image: sectorB2b,
    context:
      "Société d'export et de distribution. Pilotage des commandes internationales, logistique et trésorerie.",
    modules: ["Ventes", "Achats", "Stock", "Comptabilité", "CRM"],
    result: "Suivi des exports simplifié et contrôle financier renforcé.",
  },
  {
    icon: Church,
    name: "ICC DOUALA",
    sector: "Extraterritorial — Cameroun",
    image: caseChurch,
    context:
      "Église évangélique charismatique à Douala, Cameroun. Gestion des membres, dons, événements et ressources humaines.",
    modules: ["CRM", "Site web", "Événements", "Comptabilité", "RH"],
    result: "Administration communautaire centralisée et transparence financière assurée.",
  },
  {
    icon: Hammer,
    name: "JCD RENOV",
    sector: "Construction et Rénovation — Maroc",
    image: sectorBtp,
    context:
      "Entreprise de construction et rénovation. Suivi de chantiers, devis, facturation et gestion des approvisionnements.",
    modules: ["Projet", "Ventes", "Achats", "Comptabilité", "RH"],
    result: "Chantiers pilotés de bout en bout avec une marge maîtrisée en temps réel.",
  },
  {
    icon: Baby,
    name: "LES TITIS BOUT'CHOUX",
    sector: "Éducation — Belgique",
    image: caseDaycare,
    context:
      "Crèche à Uccle, Bruxelles. Gestion des inscriptions, planning du personnel, facturation familles et communication parents.",
    modules: ["CRM", "Ventes", "RH", "Comptabilité", "Site web"],
    result: "Gestion administrative simplifiée et suivi familial personnalisé.",
  },
  {
    icon: HeartPulse,
    name: "LOUVE SOINS SRL",
    sector: "Santé / Aide sociale / Pharmaceutique — Belgique",
    image: sectorHealth,
    context:
      "Structure de soins et services de santé. Coordination des interventions, gestion des stocks et facturation.",
    modules: ["CRM", "Stock", "Ventes", "Comptabilité", "RH"],
    result: "Parcours patient fluidifié et stocks médicaux optimisés.",
  },
  {
    icon: Briefcase,
    name: "MC Avocat",
    sector: "Finance / Assurance — Belgique",
    image: sectorServices,
    context:
      "Cabinet d'avocats. Gestion des dossiers clients, temps passé, facturation et conformité.",
    modules: ["CRM", "Projet", "Comptabilité", "RH", "Facturation"],
    result: "Productivité du cabinet augmentée grâce au suivi centralisé des affaires.",
  },
  {
    icon: ShoppingBag,
    name: "Phazz4",
    sector: "Vente en gros / Vente au détail — Maroc",
    image: sectorWholesale,
    context:
      "Distributeur multi-marques. Pilotage des commandes fournisseurs, inventaires et ventes omnicanal.",
    modules: ["Ventes", "Achats", "Stock", "Comptabilité", "CRM"],
    result: "Rotation de stock optimisée et commandes automatisées.",
  },
  {
    icon: Truck,
    name: "SARL Maroc Destination Santé",
    sector: "Transport / Logistique — Maroc",
    image: sectorLogistics,
    context:
      "Transport sanitaire et logistique médicale au Maroc. Planification des tournées, suivi des véhicules et facturation.",
    modules: ["Flotte", "Stock", "Ventes", "Comptabilité", "Maintenance"],
    result: "Tournées optimisées et maintenance préventive planifiée.",
  },
  {
    icon: Factory,
    name: "STE CUCO DES MATERIAUX DE CONSTRUCTION",
    sector: "Construction et Rénovation — Maroc",
    image: sectorBtp,
    context:
      "Société de matériaux de construction. Gestion des stocks, approvisionnements, ventes et livraisons.",
    modules: ["Stock", "Ventes", "Achats", "Comptabilité", "Projet"],
    result: "Disponibilité des matériaux garantie et circuits d'achat accélérés.",
  },
  {
    icon: Zap,
    name: "Sd Maintenance",
    sector: "Services publics / Énergie / Distribution d'eau — Maroc",
    image: sectorEngineering,
    context:
      "Société de maintenance et distribution d'eau. Gestion des interventions, planning et stocks de pièces.",
    modules: ["Maintenance", "Projet", "Stock", "Comptabilité", "RH"],
    result: "Interventions planifiées et pièces de rechange toujours disponibles.",
  },
  {
    icon: Landmark,
    name: "Studely Finance Cameroun",
    sector: "Finance / Assurance — Cameroun",
    image: sectorScaleup,
    context:
      "Cabinet de conseil financier au Cameroun. Gestion des dossiers clients, conformité et reporting.",
    modules: ["CRM", "Comptabilité", "Projet", "RH", "Site web"],
    result: "Processus financiers structurés et reporting client automatisé.",
  },
  {
    icon: Truck,
    name: "TPMR Maroc",
    sector: "Transport / Logistique — Maroc",
    image: sectorLogistics,
    context:
      "Transport de personnes à mobilité réduite au Maroc. Planification, suivi des courses et facturation.",
    modules: ["Flotte", "Ventes", "Comptabilité", "RH", "Maintenance"],
    result: "Courses sécurisées et facturation simplifiée pour les partenaires institutionnels.",
  },
  {
    icon: ShoppingBag,
    name: "Wam Lek Faya, LLC — The Perfect Kick",
    sector: "Vente en gros / Vente au détail — Épices & sauces piquantes",
    image: sectorFood,
    context:
      "Marque d'épices et sauces piquantes artisanales. Gestion des recettes, lots de production, stocks et ventes en ligne et en magasin.",
    modules: ["Ventes", "Stock", "eCommerce", "Comptabilité", "CRM"],
    result: "Présence omnicanale synchronisée avec traçabilité des lots en temps réel.",
  },
  {
    icon: Leaf,
    name: "Les Clés du Sahara",
    sector: "Agriculture — Maroc",
    image: sectorFood,
    context:
      "Ferme hydroponique produisant des salades bio. Gestion de la production, traçabilité, ventes et opérations.",
    modules: ["Production (MRP)", "Stock", "Ventes", "Achats", "Comptabilité", "Qualité"],
    result: "Traçabilité complète des cultures et qualité constante garantie.",
  },
];

const webProjects = [
  { url: "odoo-finances.pro", label: "Odoo Finances", tag: "Showcase ERP" },
  { url: "mfinances.be", label: "M-Finances", tag: "Cabinet conseil" },
  { url: "msales.ma", label: "M-Sales Strategy", tag: "Stratégie B2B" },
  { url: "novatrait.com", label: "Novatrait", tag: "Industrie & Services" },
];

export default function RealisationsPage() {
  useProductSeo({
    title: "Nos Réalisations Odoo & Web — Cas Clients MSL-iTECH",
    description:
      "Découvrez les projets Odoo et sites web réalisés par MSL-iTECH au Maroc. BTP, HORECA, immobilier, services. Références vérifiables sur odoo.com/partners.",
    path: "/realisations",
  });

  return (
    <>
      {/* HERO — image overlay (style /odoo-erp) */}
      <section className="bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate rounded-[28px] md:rounded-[36px]">
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
              <img
                src={pillarWeb}
                alt="Réalisations MSL-iTECH"
                className="absolute inset-0 h-full w-full object-cover"
              loading="eager" fetchPriority="high" decoding="async"/>
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,30,38,0.55) 0%, rgba(10,30,38,0.7) 55%, rgba(10,30,38,0.88) 100%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-25 blur-3xl"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: "var(--blue)" }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            <HeroCursorGlow radius="inherit" />

            <div className="absolute -top-3 left-8 z-20 md:-top-4 md:left-12">
              <Sticker rotate={-8}>★ Références vérifiables</Sticker>
            </div>

            <div className="relative flex min-h-[420px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[520px] md:py-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  Réalisations · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-[64px] lg:text-[76px]">
                Nos preuves,{" "}
                <span className="italic font-light text-brand-gold">
                  publiquement
                </span>{" "}
                <Mark>vérifiables.</Mark>
              </h1>

              <p className="mt-7 max-w-2xl font-body text-base text-white/80 md:text-lg">
                Les meilleures preuves viennent de nos clients et de notre fiche
                partenaire officielle Odoo — consultable et vérifiable en un clic.
              </p>
            </div>

            {/* Breadcrumb pill */}
            <div className="absolute -bottom-5 right-6 z-30 md:right-10">
              <div
                className="flex items-center gap-3 rounded-full border bg-brand-white px-5 py-2.5 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.25)]"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <Link
                  to="/"
                  className="font-body text-sm text-brand-grey transition hover:text-brand-blue"
                >
                  Accueil
                </Link>
                <ArrowRight size={14} className="text-brand-gold" />
                <span className="font-body text-sm font-semibold text-brand-blue">
                  Réalisations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ODOO CASES */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Cas clients Odoo
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Implémentations
                <br />
                <Mark>livrées.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              Du cadrage au déploiement — voici comment nous transformons la
              gestion quotidienne de PME ambitieuses.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {odooCases.map((c, idx) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.name}
                  className="group relative isolate overflow-hidden rounded-[28px] border bg-brand-white shadow-sm transition hover:shadow-xl"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  {/* Image header */}
                  <div className="relative h-56 overflow-hidden md:h-64">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(18,77,90,0.15) 0%, rgba(18,77,90,0.75) 100%)",
                      }}
                    />
                    <div className="absolute left-5 top-5">
                      <Sticker rotate={idx % 2 === 0 ? -6 : 6}>
                        Cas {String(idx + 1).padStart(2, "0")}
                      </Sticker>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-gold">
                        {c.sector}
                      </p>
                      <h3 className="mt-2 font-heading text-2xl font-bold text-white md:text-3xl">
                        {c.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8">
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: "rgba(18,77,90,0.08)", color: "var(--blue)" }}
                      >
                        <Icon size={20} />
                      </div>
                      <p className="font-body text-base text-brand-grey">{c.context}</p>
                    </div>

                    <div className="mt-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
                        Solution déployée
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {c.modules.map((m) => (
                          <li
                            key={m}
                            className="rounded-full border bg-brand-bg px-3 py-1 font-body text-xs text-brand-black"
                            style={{ borderColor: "var(--grey-light)" }}
                          >
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="mt-6 flex items-start gap-3 rounded-2xl p-4"
                      style={{ backgroundColor: "rgba(255,221,87,0.18)" }}
                    >
                      <CheckCircle2
                        size={18}
                        style={{ color: "var(--blue)" }}
                        className="mt-0.5 shrink-0"
                      />
                      <p className="font-body text-sm text-brand-black">{c.result}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WEB PROJECTS */}
      <section id="sites-plateformes" className="bg-brand-white py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Sites & plateformes
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Créations <Mark>web.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              Sites React haute performance, plateformes WordPress et refontes
              pour des entreprises en Belgique et au Maroc.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {webProjects.map((p, i) => (
              <a
                key={p.url}
                href={`https://${p.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative isolate flex flex-col justify-between overflow-hidden rounded-[24px] border bg-brand-bg p-6 transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--grey-light)", minHeight: 200 }}
              >
                <div
                  className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition group-hover:opacity-60"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--blue)" }}
                  >
                    <Globe size={18} className="text-white" />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-brand-grey transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-blue"
                  />
                </div>
                <div className="mt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-grey">
                    {p.tag}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-bold text-brand-black">
                    {p.label}
                  </h3>
                  <p className="mt-1 font-body text-xs text-brand-grey">{p.url}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ODOO PARTNER */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div
            className="relative isolate rounded-[28px] p-10 lg:p-16"
            style={{ backgroundColor: "var(--blue)" }}
          >
            {/* Glow clipped inside */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
              <div
                className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
                style={{ backgroundColor: "var(--gold)" }}
              />
            </div>
            <div className="absolute -top-4 left-8 z-20">
              <Sticker rotate={-6}>★ Partenaire officiel</Sticker>
            </div>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">
                  Vérifiez par vous-même
                </p>
                <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
                  Nos références sont consultables sur{" "}
                  <span className="italic font-light">odoo.com/partners</span>
                </h2>
                <p className="mt-5 max-w-xl font-body text-base text-white/80">
                  Statut, certifications et clients : tout est public. Aucune
                  promesse en l'air, juste des preuves vérifiables.
                </p>
              </div>
              <div className="flex justify-start lg:col-span-4 lg:justify-end">
                <a
                  href="https://www.odoo.com/fr_FR/partners/country/maroc-132?search=msl-itech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  Voir odoo.com/partners
                  <ExternalLink
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-brand-black py-24 md:py-28">
        <HeroCursorGlow color="rgba(255, 221, 87, 1)" size={620} intensity={0.55} />
        <img
          src={ctaBg}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        loading="lazy" decoding="async"/>
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,13,13,0.7) 0%, rgba(18,77,90,0.85) 100%)",
          }}
        />
        <div className="container text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
            <Star size={12} className="text-brand-gold" />
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
              À votre tour
            </p>
          </div>
          <h2 className="mx-auto mt-7 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Votre projet est <Mark>le prochain.</Mark>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-base text-white/80 md:text-lg">
            Réponse sous 24h · Consultant dédié · Sans engagement
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group cta-pulse-gold hover-shine inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black transition hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Réserver ma démo gratuite
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/odoo-erp"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Découvrir Odoo ERP
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
