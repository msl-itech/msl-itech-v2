import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  TrendingDown,
  Info,
  Star,
  Minus,
  Zap,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import { useMarket } from "@/hooks/useMarket";
import pillarErp from "@/assets/home/pillar-erp.webp";
import ctaBg from "@/assets/home/cta-bg.webp";

type Currency = "EUR" | "MAD";
const EUR_TO_MAD = 11;

const fmt = (eur: number, currency: Currency) => {
  if (currency === "EUR") {
    return `${eur.toLocaleString("fr-FR")} €`;
  }
  const mad = eur * EUR_TO_MAD;
  return `${mad.toLocaleString("fr-FR")} MAD`;
};

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

const packs = [
  {
    name: "Essentiel",
    hours: "4h",
    priceNew: 400,
    priceOld: 400,
    for: "Support fondamental",
    incl: "Paramétrage, formation initiale",
    color: "#E26B3F",
  },
  {
    name: "Standard",
    hours: "10h",
    priceNew: 900,
    priceOld: 900,
    for: "Découvrir Odoo",
    incl: "Paramétrage, formation, assistance",
    color: "#5C5E8A",
  },
  {
    name: "Avancé",
    hours: "25h",
    priceNew: 2000,
    priceOld: 2000,
    for: "Booster votre activité",
    incl: "+ Import données, optimisation",
    highlight: true,
    color: "#E8867A",
  },
  {
    name: "Premium",
    hours: "50h",
    priceNew: 3500,
    priceOld: 3500,
    for: "Solutions sur mesure",
    incl: "+ Personnalisation apps, automatisation",
    color: "#22A892",
  },
  {
    name: "VIP",
    hours: "100h",
    priceNew: 5400,
    priceOld: 6000,
    for: "Performance optimale",
    incl: "+ Développement sur mesure",
    color: "#5E8AA0",
  },
  {
    name: "Elite",
    hours: "200h",
    priceNew: 8500,
    priceOld: 10000,
    for: "Vision 360",
    incl: "Pack complet toutes fonctionnalités",
    color: "#2E3A4A",
  },
];

/* Feature matrix — order matches the legend image. true = inclus, false = non inclus */
const features: { label: string; values: boolean[] }[] = [
  // [Essentiel, Standard, Avancé, Premium, VIP, Elite]
  { label: "Expert dédié", values: [true, true, true, true, true, true] },
  { label: "Assistance multicanal (E-mail & Téléphone)", values: [true, true, true, true, true, true] },
  { label: "Formation à l'outil", values: [false, true, true, true, true, true] },
  { label: "Paramétrage", values: [false, true, true, true, true, true] },
  { label: "Gestion de Projet", values: [false, false, true, true, true, true] },
  { label: "Assistance à l'importation de données", values: [false, false, true, true, true, true] },
  { label: "Optimisation et structuration des données", values: [false, false, true, true, true, true] },
  { label: "Personnalisation des Applications", values: [false, false, false, true, true, true] },
  { label: "Automatisation", values: [false, false, false, true, true, true] },
  { label: "Développement sur-mesure", values: [false, false, false, false, true, true] },
  { label: "Offre d'adhésion", values: [false, false, false, true, true, true] },
];

const comparison = [
  { vol: "4 heures", odoo: 499, msl: 400, gap: "-20%", level: "Essentiel" },
  { vol: "25 heures", odoo: 2635, msl: 2000, gap: "-24%", level: "Avancé" },
  { vol: "50 heures", odoo: 4675, msl: 3500, gap: "-25%", level: "Premium" },
  { vol: "100 heures", odoo: 8415, msl: 5400, gap: "-36%", level: "VIP" },
  { vol: "200 heures", odoo: 16830, msl: 8500, gap: "-49%", level: "Elite" },
];

const faqs = [
  {
    q: "Les heures achetées peuvent-elles expirer ?",
    a: "Les heures sont valables 12 mois à compter de la date d'achat. Au-delà, un renouvellement au tarif en vigueur est proposé.",
  },
  {
    q: "Peut-on combiner plusieurs packs ?",
    a: "Oui. Vous pouvez acheter un pack initial et le compléter avec un pack supplémentaire à tout moment. Les tarifs « ancien client » s'appliquent à partir du deuxième achat.",
  },
  {
    q: "Quel pack pour une PME de 15 à 25 personnes qui part de zéro ?",
    a: "Pour une première implémentation Odoo couvrant CRM, Finance et Stock, le pack Avancé (25h) est généralement le bon point de départ. Pour un périmètre incluant la Production ou les RH, le pack Premium (50h) est recommandé. Nous affinons cette estimation lors de la démo gratuite.",
  },
  {
    q: "La TVA belge est-elle incluse dans les prix affichés ?",
    a: "Les prix affichés sont hors TVA. La TVA belge (21%) s'applique pour les clients belges assujettis. Pour les clients marocains, les prix sont affichés en MAD TTC.",
  },
];

export default function TarifsPage() {
  const { market } = useMarket();
  const [currency, setCurrency] = useState<Currency>(market === "MA" ? "MAD" : "EUR");
  useEffect(() => {
    setCurrency(market === "MA" ? "MAD" : "EUR");
  }, [market]);

  useProductSeo({
    title: "Tarifs Odoo Belgique & Maroc — Packs transparents | MSL-iTECH",
    description:
      "Tarifs d'implémentation Odoo transparents. Packs de 4h à 200h. Sur volumes comparables, nos packs sont 20 à 50% plus accessibles que les Success Packs observés sur le marché belge.",
    path: "/tarifs",
    faqs,
    ldId: "ld-faq-tarifs",
  });

  return (
    <>
      {/* HERO — image overlay (style /realisations) */}
      <section className="bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate rounded-[28px] md:rounded-[36px]">
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
              <img
                src={pillarErp}
                alt="Tarifs MSL-iTECH"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,30,38,0.55) 0%, rgba(10,30,38,0.7) 55%, rgba(10,30,38,0.9) 100%)",
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
              <Sticker rotate={-8}>★ Tarifs transparents</Sticker>
            </div>

            <div className="relative flex min-h-[460px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[560px] md:py-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  Tarifs · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-[60px] lg:text-[72px]">
                Des tarifs{" "}
                <span className="italic font-light text-brand-gold">
                  transparents
                </span>
                ,<br className="hidden md:block" /> un partenaire{" "}
                <Mark>vérifiable.</Mark>
              </h1>

              <p className="mt-7 max-w-2xl font-body text-base text-white/80 md:text-lg">
                Nos tarifs sont affichés et notre statut de partenaire officiel
                Odoo est consultable publiquement. Évaluez-nous avant même de
                réserver un rendez-vous.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  <ShieldCheck size={16} className="text-brand-gold" /> Partenaire officiel Odoo
                </span>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  <TrendingDown size={16} className="text-brand-gold" /> -20% à -49% vs Success Packs
                </span>
              </div>

              {/* Currency toggle */}
              <div
                className="mt-8 inline-flex items-center gap-1 rounded-full p-1"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
              >
                <button
                  type="button"
                  onClick={() => setCurrency("EUR")}
                  aria-pressed={currency === "EUR"}
                  className="rounded-full px-4 py-1.5 text-sm font-semibold transition"
                  style={{
                    backgroundColor: currency === "EUR" ? "var(--gold)" : "transparent",
                    color: currency === "EUR" ? "var(--blue)" : "white",
                  }}
                >
                  € Euro
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("MAD")}
                  aria-pressed={currency === "MAD"}
                  className="rounded-full px-4 py-1.5 text-sm font-semibold transition"
                  style={{
                    backgroundColor: currency === "MAD" ? "var(--gold)" : "transparent",
                    color: currency === "MAD" ? "var(--blue)" : "white",
                  }}
                >
                  MAD Dirham
                </button>
              </div>
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
                  Tarifs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY COMPETITIVE */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Notre structure
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Compétitifs,
                <br />
                <Mark>par construction.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              Notre structure internationale — équipe technique certifiée au
              Maroc, présence commerciale en Belgique — nous permet de proposer
              des packs <strong className="text-brand-black">20 à 50% plus
              accessibles</strong> que les Success Packs observés sur le marché
              belge, à volume comparable.
            </p>
          </div>
        </div>
      </section>

      {/* PACKS TABLE */}
      <section className="bg-brand-white py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Packs d'implémentation
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Choisissez votre <Mark>palier.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              Six paliers d'engagement, du support fondamental à la vision 360.
              Tous nos packs incluent paramétrage, formation et assistance —
              sans heures cachées.
            </p>
          </div>

          <div
            className="relative mt-14 overflow-hidden rounded-[28px] border bg-brand-white shadow-[0_30px_80px_-40px_rgba(13,13,13,0.25)]"
            style={{ borderColor: "var(--grey-light)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[960px] border-separate border-spacing-0 text-left text-sm">
                {/* Header row — colored pack chips */}
                <thead>
                  <tr>
                    <th className="sticky left-0 z-10 bg-brand-white px-6 py-6 align-bottom">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
                        Comparatif
                      </p>
                      <p className="mt-2 font-heading text-base font-bold text-brand-black">
                        Fonctionnalités
                      </p>
                    </th>
                    {packs.map((p) => (
                      <th
                        key={p.name}
                        className="px-3 pb-4 pt-6 align-bottom text-center"
                      >
                        <div className="relative mx-auto flex w-full max-w-[140px] flex-col items-center">
                          {p.highlight && (
                            <span
                              className="mb-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em]"
                              style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
                            >
                              <Star size={10} fill="currentColor" /> Recommandé
                            </span>
                          )}
                          <div
                            className="flex w-full flex-col items-center rounded-2xl px-3 py-3 text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.35)]"
                            style={{ backgroundColor: p.color }}
                          >
                            <span className="font-heading text-base font-bold leading-tight">
                              {p.name}
                            </span>
                            <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] opacity-90">
                              {p.hours}
                            </span>
                          </div>
                          <span className="mt-2 font-body text-[11px] leading-snug text-brand-grey">
                            {p.for}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {features.map((f, ri) => (
                    <tr key={f.label}>
                      <td
                        className="sticky left-0 z-10 border-t bg-brand-white px-6 py-4 font-body text-sm text-brand-black"
                        style={{
                          borderColor: "var(--grey-light)",
                          backgroundColor: ri % 2 ? "rgba(229,227,220,0.25)" : "white",
                        }}
                      >
                        {f.label}
                      </td>
                      {f.values.map((v, ci) => (
                        <td
                          key={ci}
                          className="border-t px-3 py-4 text-center"
                          style={{
                            borderColor: "var(--grey-light)",
                            backgroundColor: ri % 2 ? "rgba(229,227,220,0.18)" : "transparent",
                          }}
                        >
                          {v ? (
                            <span
                              className="inline-flex h-7 w-7 items-center justify-center rounded-full"
                              style={{
                                backgroundColor: `${packs[ci].color}1A`,
                                color: packs[ci].color,
                              }}
                            >
                              <CheckCircle2 size={16} />
                            </span>
                          ) : (
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-bg text-brand-grey/50">
                              <Minus size={14} />
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Prix ancien client */}
                  <tr>
                    <td
                      className="sticky left-0 z-10 border-t bg-brand-white px-6 py-5 font-heading text-sm font-bold text-brand-black"
                      style={{ borderColor: "var(--grey-light)" }}
                    >
                      Prix ancien client
                    </td>
                    {packs.map((p) => (
                      <td
                        key={p.name}
                        className="border-t px-3 py-5 text-center font-heading text-sm font-bold"
                        style={{ borderColor: "var(--grey-light)", color: p.color }}
                      >
                        {fmt(p.priceOld, currency)}
                      </td>
                    ))}
                  </tr>

                  {/* Prix nouveau client */}
                  <tr>
                    <td
                      className="sticky left-0 z-10 border-t bg-brand-white px-6 py-6 font-heading text-base font-bold text-brand-black"
                      style={{ borderColor: "var(--grey-light)" }}
                    >
                      Prix nouveau client
                      <span className="ml-2 font-mono text-[10px] font-normal uppercase tracking-[0.2em] text-brand-grey">
                        {currency === "EUR" ? "HTVA" : "TTC"}
                      </span>
                    </td>
                    {packs.map((p) => (
                      <td
                        key={p.name}
                        className="border-t px-3 py-6 text-center align-middle"
                        style={{ borderColor: "var(--grey-light)" }}
                      >
                        <div
                          className="mx-auto inline-flex min-w-[110px] flex-col items-center rounded-2xl px-3 py-3 text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.35)]"
                          style={{ backgroundColor: p.color }}
                        >
                          <span className="font-heading text-base font-bold leading-tight">
                            {fmt(p.priceNew, currency)}
                          </span>
                          {p.priceOld !== p.priceNew && (
                            <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] opacity-85">
                              Économie {Math.round((1 - p.priceNew / p.priceOld) * 100)}%
                            </span>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-brand-grey">
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <CheckCircle2 size={12} />
              </span>
              Inclus dans le pack
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-bg text-brand-grey/50">
                <Minus size={12} />
              </span>
              Non inclus
            </span>
          </div>

          <p className="mt-6 flex items-start gap-2 text-sm text-brand-grey">
            <Info size={14} className="mt-0.5 shrink-0" />
            Prix € HTVA pour clients belges · Prix MAD TTC pour clients marocains ·
            Conversion indicative 1 € ≈ {EUR_TO_MAD} MAD.
          </p>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Repère de comparaison
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                MSL-iTECH vs <Mark>Success Packs.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              Sur des volumes comparables, nos packs ressortent à un niveau de
              prix significativement plus accessible que les Success Packs
              observés pour nouveaux clients. L'écart varie de 20% à près de 50%
              selon le volume.
            </p>
          </div>

          <div
            className="relative mt-14 overflow-hidden rounded-[28px] border bg-brand-white shadow-[0_30px_80px_-40px_rgba(13,13,13,0.25)]"
            style={{ borderColor: "var(--grey-light)" }}
          >
            {/* Decorative glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
              style={{ backgroundColor: "var(--gold)" }}
            />

            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-separate border-spacing-0 text-left text-sm">
                <thead>
                  <tr style={{ backgroundColor: "var(--blue)", color: "white" }}>
                    <th className="px-6 py-5 font-mono text-[11px] uppercase tracking-[0.2em]">
                      Volume
                    </th>
                    <th className="px-6 py-5 font-mono text-[11px] uppercase tracking-[0.2em]">
                      Odoo Success Pack
                    </th>
                    <th className="px-6 py-5 font-mono text-[11px] uppercase tracking-[0.2em]">
                      <span className="inline-flex items-center gap-1.5">
                        <Zap size={12} className="text-brand-gold" />
                        MSL-iTECH
                      </span>
                    </th>
                    <th className="px-6 py-5 font-mono text-[11px] uppercase tracking-[0.2em]">
                      Économie
                    </th>
                    <th className="px-6 py-5 font-mono text-[11px] uppercase tracking-[0.2em]">
                      Niveau
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((r, i) => {
                    const savedPct = Math.round((1 - r.msl / r.odoo) * 100);
                    return (
                      <tr
                        key={r.vol}
                        className="group transition"
                        style={{
                          backgroundColor:
                            i % 2 ? "rgba(229,227,220,0.20)" : "transparent",
                        }}
                      >
                        <td
                          className="border-t px-6 py-5 align-middle"
                          style={{ borderColor: "var(--grey-light)" }}
                        >
                          <p className="font-heading text-base font-bold text-brand-black">
                            {r.vol}
                          </p>
                          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                            Pack {r.level}
                          </p>
                        </td>
                        <td
                          className="border-t px-6 py-5 align-middle"
                          style={{ borderColor: "var(--grey-light)" }}
                        >
                          <span
                            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                            style={{
                              backgroundColor: "rgba(13,13,13,0.04)",
                              border: "1px solid var(--grey-light)",
                            }}
                          >
                            <span className="font-body text-sm text-brand-grey line-through">
                              {fmt(r.odoo, currency)}
                            </span>
                          </span>
                        </td>
                        <td
                          className="border-t px-6 py-5 align-middle"
                          style={{ borderColor: "var(--grey-light)" }}
                        >
                          <span
                            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 shadow-[0_8px_24px_-12px_rgba(255,221,87,0.6)]"
                            style={{
                              backgroundColor: "var(--gold)",
                              color: "var(--blue)",
                            }}
                          >
                            <Zap size={14} />
                            <span className="font-heading text-base font-bold">
                              {fmt(r.msl, currency)}
                            </span>
                          </span>
                        </td>
                        <td
                          className="border-t px-6 py-5 align-middle"
                          style={{ borderColor: "var(--grey-light)" }}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-xs font-bold"
                              style={{
                                backgroundColor: "rgba(26,122,74,0.12)",
                                color: "var(--green)",
                              }}
                            >
                              <TrendingDown size={12} />
                              {r.gap}
                            </span>
                            <div
                              className="hidden h-1.5 w-24 overflow-hidden rounded-full md:block"
                              style={{ backgroundColor: "rgba(26,122,74,0.12)" }}
                              aria-hidden
                            >
                              <div
                                className="h-full rounded-full transition-all"
                                style={{
                                  width: `${savedPct}%`,
                                  backgroundColor: "var(--green)",
                                }}
                              />
                            </div>
                          </div>
                        </td>
                        <td
                          className="border-t px-6 py-5 align-middle"
                          style={{ borderColor: "var(--grey-light)" }}
                        >
                          <span
                            className="inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-blue"
                            style={{
                              backgroundColor: "rgba(18,77,90,0.06)",
                              borderColor: "rgba(18,77,90,0.2)",
                            }}
                          >
                            {r.level}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Footer summary strip */}
            <div
              className="grid gap-4 border-t px-6 py-5 sm:grid-cols-3"
              style={{
                borderColor: "var(--grey-light)",
                backgroundColor: "rgba(229,227,220,0.25)",
              }}
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-grey">
                  Économie minimale
                </p>
                <p className="mt-1 font-heading text-xl font-bold text-brand-black">
                  -20%
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-grey">
                  Économie maximale
                </p>
                <p className="mt-1 font-heading text-xl font-bold" style={{ color: "var(--green)" }}>
                  -49%
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-grey">
                  Volumes comparés
                </p>
                <p className="mt-1 font-heading text-xl font-bold text-brand-black">
                  4h → 200h
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-brand-grey">
            Source comparaison :{" "}
            <a
              href="https://www.odoo.com/fr_FR/pricing-packs"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-blue"
            >
              odoo.com/fr_FR/pricing-packs
            </a>
          </p>
        </div>
      </section>

      {/* INCLUDED + CONDITIONS */}
      <section className="bg-brand-white py-24 md:py-28">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <article
              className="relative overflow-hidden rounded-[28px] border bg-brand-bg p-10 shadow-sm"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-25 blur-3xl"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
                Ce qui est inclus
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-brand-black md:text-3xl">
                Tout, dans chaque pack.
              </h3>
              <p className="mt-4 font-body text-base text-brand-grey">
                Analyse de vos besoins, paramétrage Odoo selon votre activité,
                migration des données existantes (selon le palier), formation
                des équipes et support post-déploiement.
              </p>
              <p className="mt-4 font-body text-sm font-semibold text-brand-black">
                Pas d'heures cachées, pas de facturation surprise.
              </p>
            </article>

            <article
              className="relative overflow-hidden rounded-[28px] border bg-brand-bg p-10 shadow-sm"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
                Conditions
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-brand-black md:text-3xl">
                Cadre clair & engagé.
              </h3>
              <ul className="mt-4 space-y-3 font-body text-base text-brand-grey">
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                  Heures valables 12 mois à compter de la date d'achat.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                  Packs cumulables ; toute heure entamée est due.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                  Compte-rendu mensuel d'utilisation sur Avancé, Premium, VIP et Elite.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-bg py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  FAQ Tarifs
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Questions <Mark>fréquentes.</Mark>
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-[20px] border bg-brand-white p-6 transition hover:shadow-md"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-body font-semibold text-brand-black">
                  <span>{f.q}</span>
                  <span className="ml-2 text-2xl leading-none text-brand-blue transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 font-body text-base text-brand-grey">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-brand-black py-24 md:py-28">
        <img
          src={ctaBg}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,13,13,0.7) 0%, rgba(18,77,90,0.85) 100%)",
          }}
        />
        <div className="container text-center text-white">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
            <Sparkles size={12} className="text-brand-gold" />
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
              Prêt à démarrer ?
            </p>
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Réservez votre démo,{" "}
            <span className="italic font-light text-brand-gold">
              choisissez votre pack ensuite.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-base text-white/80 md:text-lg">
            Sans engagement · Conseil personnalisé · Réponse sous 24 à 72h ouvrables.
          </p>
          <Link
            to="/prendre-rendez-vous"
            className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Réserver ma démo gratuite <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
