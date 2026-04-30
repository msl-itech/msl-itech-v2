import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  TrendingDown,
  Info,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { useMarket } from "@/hooks/useMarket";

type Currency = "EUR" | "MAD";
const EUR_TO_MAD = 11;

const fmt = (eur: number, currency: Currency) => {
  if (currency === "EUR") {
    return `${eur.toLocaleString("fr-FR")} €`;
  }
  const mad = eur * EUR_TO_MAD;
  return `${mad.toLocaleString("fr-FR")} MAD`;
};

const packs = [
  {
    name: "Essentiel",
    hours: "4h",
    priceNew: 400,
    priceOld: 400,
    for: "Support fondamental",
    incl: "Paramétrage, formation initiale",
  },
  {
    name: "Standard",
    hours: "10h",
    priceNew: 900,
    priceOld: 900,
    for: "Découvrir Odoo",
    incl: "Paramétrage, formation, assistance",
  },
  {
    name: "Avancé",
    hours: "25h",
    priceNew: 2000,
    priceOld: 2000,
    for: "Booster votre activité",
    incl: "+ Import données, optimisation",
    highlight: true,
  },
  {
    name: "Premium",
    hours: "50h",
    priceNew: 3500,
    priceOld: 3500,
    for: "Solutions sur mesure",
    incl: "+ Personnalisation apps, automatisation",
  },
  {
    name: "VIP",
    hours: "100h",
    priceNew: 5400,
    priceOld: 6000,
    for: "Performance optimale",
    incl: "+ Développement sur mesure",
  },
  {
    name: "Elite",
    hours: "200h",
    priceNew: 8500,
    priceOld: 10000,
    for: "Vision 360",
    incl: "Pack complet toutes fonctionnalités",
  },
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
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0F3F4A" }}>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 90% 0%, rgba(255,221,87,0.18), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(255,255,255,0.08), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="container relative py-20 lg:py-28 text-white">
          <p
            className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{
              backgroundColor: "rgba(255,221,87,0.14)",
              color: "var(--gold)",
              border: "1px solid rgba(255,221,87,0.35)",
            }}
          >
            <Sparkles size={12} /> Tarifs · MSL-iTECH
          </p>
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.08] md:text-5xl lg:text-[3.25rem]">
            Des tarifs transparents — et un partenaire officiel Odoo dont le statut est{" "}
            <span style={{ color: "var(--gold)" }}>vérifiable publiquement</span>
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg text-white/80">
            Dans le monde de l'ERP, la transparence tarifaire est rare. Chez MSL-iTECH, nos tarifs
            sont affichés, et notre statut de partenaire officiel Odoo est vérifiable publiquement.
            Vous pouvez évaluer notre légitimité et notre point d'entrée tarifaire avant même de
            réserver un rendez-vous.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "white" }}
            >
              <ShieldCheck size={16} style={{ color: "var(--gold)" }} /> Partenaire officiel Odoo
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "white" }}
            >
              <TrendingDown size={16} style={{ color: "var(--gold)" }} /> -20% à -49% vs Success Packs
            </span>
          </div>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full p-1" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <button
              type="button"
              onClick={() => setCurrency("EUR")}
              aria-pressed={currency === "EUR"}
              className="rounded-full px-4 py-1.5 text-sm font-semibold transition"
              style={{
                backgroundColor: currency === "EUR" ? "var(--gold)" : "transparent",
                color: currency === "EUR" ? "#0F3F4A" : "white",
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
                color: currency === "MAD" ? "#0F3F4A" : "white",
              }}
            >
              MAD Dirham
            </button>
          </div>
        </div>
      </section>

      {/* WHY COMPETITIVE */}
      <section className="bg-background py-20">
        <div className="container max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Notre structure
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Comment nous pouvons proposer des tarifs aussi compétitifs
          </h2>
          <p className="mt-6 font-body text-lg text-brand-grey">
            Notre structure internationale — équipe technique certifiée au Maroc, présence
            commerciale en Belgique — nous permet de proposer des packs d'heures{" "}
            <strong className="text-brand-black">20 à 50% plus accessibles</strong> que les Success
            Packs observés sur le marché belge, sur des volumes comparables. Vous bénéficiez d'un
            cadre d'intervention certifié, transparent et structuré, avec une logique de prix plus
            accessible.
          </p>
        </div>
      </section>

      {/* PACKS GRID */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Packs d'implémentation
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Choisissez le pack adapté à votre périmètre
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packs.map((p) => (
              <article
                key={p.name}
                className={`relative rounded-2xl border bg-card p-7 shadow-sm transition hover:shadow-md ${
                  p.highlight ? "border-brand-blue ring-1 ring-brand-blue" : "border-border"
                }`}
              >
                {p.highlight && (
                  <span
                    className="absolute -top-3 left-7 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                    style={{ backgroundColor: "var(--gold)", color: "#0F3F4A" }}
                  >
                    Recommandé
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <h3 className="font-heading text-xl font-bold text-brand-black">{p.name}</h3>
                  <span className="font-mono text-sm text-brand-grey">{p.hours}</span>
                </div>
                <p className="mt-1 text-sm text-brand-grey">{p.for}</p>

                <div className="mt-6">
                  <p className="font-heading text-3xl font-bold text-brand-black">
                    {fmt(p.priceNew, currency)}
                  </p>
                  <p className="mt-1 text-xs text-brand-grey">
                    Nouveau client · {currency === "EUR" ? "HTVA" : "TTC"}{" "}
                    {p.priceOld !== p.priceNew && (
                      <span className="text-brand-grey">
                        · Ancien client : {fmt(p.priceOld, currency)}
                      </span>
                    )}
                  </p>
                </div>

                <p className="mt-6 flex items-start gap-2 font-body text-sm text-brand-black">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                  {p.incl}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 flex items-start gap-2 text-sm text-brand-grey">
            <Info size={14} className="mt-0.5 shrink-0" />
            Prix HTVA · Belgique en € · Maroc en MAD TTC (équivalent affiché selon localisation).
          </p>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-background py-20">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Repère de comparaison
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            MSL-iTECH vs Success Packs Odoo (marché belge)
          </h2>
          <p className="mt-4 max-w-3xl font-body text-base text-brand-grey">
            Sur des volumes comparables, nos packs ressortent à un niveau de prix significativement
            plus accessible que les Success Packs observés pour nouveaux clients. L'écart varie de
            20% à près de 50% selon le volume d'heures.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead style={{ backgroundColor: "#0F3F4A", color: "white" }}>
                <tr>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">Volume</th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">Odoo Success Pack</th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">MSL-iTECH</th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">Écart</th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">Niveau</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {comparison.map((r, i) => (
                  <tr key={r.vol} className={i % 2 ? "bg-muted/40" : ""}>
                    <td className="px-5 py-4 font-medium text-brand-black">{r.vol}</td>
                    <td className="px-5 py-4 text-brand-grey line-through">{fmt(r.odoo, currency)}</td>
                    <td className="px-5 py-4 font-semibold text-brand-black">{fmt(r.msl, currency)}</td>
                    <td className="px-5 py-4">
                      <span
                        className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold"
                        style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#15803d" }}
                      >
                        {r.gap}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-brand-grey">{r.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-brand-grey">
            Source comparaison : <a href="https://www.odoo.com/fr_FR/pricing-packs" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-blue">odoo.com/fr_FR/pricing-packs</a>
          </p>
        </div>
      </section>

      {/* INCLUDED + CONDITIONS */}
      <section className="bg-muted/40 py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-heading text-2xl font-bold text-brand-black">
              Ce qui est inclus dans chaque pack
            </h3>
            <p className="mt-4 font-body text-base text-brand-grey">
              Tous nos packs incluent : analyse de vos besoins, paramétrage Odoo selon votre
              activité, migration de vos données existantes (selon le palier), formation de vos
              équipes et support post-déploiement.
            </p>
            <p className="mt-3 font-body text-sm font-semibold text-brand-black">
              Pas d'heures cachées, pas de facturation surprise.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-brand-black">Conditions</h3>
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20">
        <div className="container max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">FAQ Tarifs</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Questions fréquentes
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border bg-card p-5 transition hover:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between font-body font-semibold text-brand-black">
                  {f.q}
                  <span className="ml-4 text-brand-blue transition group-open:rotate-45 text-2xl leading-none">
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
      <section className="py-20" style={{ backgroundColor: "#0F3F4A" }}>
        <div className="container text-center text-white">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Réserver ma démo gratuite — je choisis{" "}
            <span style={{ color: "var(--gold)" }}>mon pack ensuite</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-white/80">
            Sans engagement · Conseil personnalisé · Réponse sous 24 à 72h ouvrables
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold transition hover:opacity-90"
            style={{ backgroundColor: "var(--gold)", color: "#0F3F4A" }}
          >
            Réserver ma démo <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
