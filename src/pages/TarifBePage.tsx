import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  TrendingDown,
  ShieldCheck,
  CheckCircle2,
  Info,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";

const packs = [
  { name: "Essentiel", hours: "4h", price: "400 €", for: "Support fondamental" },
  { name: "Standard", hours: "10h", price: "900 €", for: "Découvrir Odoo" },
  { name: "Avancé", hours: "25h", price: "2 000 €", for: "Booster votre activité", highlight: true },
  { name: "Premium", hours: "50h", price: "3 500 €", for: "Solutions sur mesure" },
  { name: "VIP", hours: "100h", price: "5 400 €", for: "Performance optimale" },
  { name: "Elite", hours: "200h", price: "8 500 €", for: "Vision 360" },
];

const comparison = [
  { vol: "4 heures", odoo: "499 €", msl: "400 €", gap: "-20%" },
  { vol: "25 heures", odoo: "2 635 €", msl: "2 000 €", gap: "-24%" },
  { vol: "50 heures", odoo: "4 675 €", msl: "3 500 €", gap: "-25%" },
  { vol: "100 heures", odoo: "8 415 €", msl: "5 400 €", gap: "-36%" },
  { vol: "200 heures", odoo: "16 830 €", msl: "8 500 €", gap: "-49%" },
];

export default function TarifBePage() {
  useProductSeo({
    title: "Tarif Odoo Belgique 2026 — Prix d'implémentation PME | MSL-iTECH",
    description:
      "Combien coûte Odoo en Belgique ? Grille tarifaire complète 2026. Packs 400€ à 8.500€. 20 à 50% plus accessibles que les Success Packs observés sur le marché belge. Démo gratuite.",
    path: "/tarif-odoo-belgique",
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
            <Sparkles size={12} /> Tarif Odoo · Belgique 2026
          </p>
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.08] md:text-5xl lg:text-[3.25rem]">
            Tarif Odoo en Belgique en 2026 — la grille complète,{" "}
            <span style={{ color: "var(--gold)" }}>sans formulaire à remplir</span>
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg text-white/80">
            Vous comparez les tarifs d'implémentation Odoo en Belgique ? Les prix varient
            considérablement selon les intégrateurs, et peu d'entre eux les publient clairement.
            Voici les nôtres, en toute transparence.
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
        </div>
      </section>

      {/* WHY VARIES */}
      <section className="bg-background py-20">
        <div className="container max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Comprendre le marché
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Pourquoi le tarif Odoo varie-t-il autant en Belgique ?
          </h2>
          <p className="mt-6 font-body text-lg text-brand-grey">
            Un intégrateur établi à Bruxelles avec des consultants locaux facture en général entre{" "}
            <strong className="text-brand-black">100 et 180 €/heure</strong>. MSL-iTECH propose des
            packs d'heures{" "}
            <strong className="text-brand-black">
              20 à 50% plus accessibles
            </strong>{" "}
            que les Success Packs observés sur le marché belge, grâce à notre structure
            internationale — équipe technique certifiée au Maroc, présence commerciale en
            Belgique.
          </p>
        </div>
      </section>

      {/* PACKS */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Grille tarifaire 2026
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Notre grille tarifaire Odoo Belgique
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
                <p className="mt-6 font-heading text-3xl font-bold text-brand-black">{p.price}</p>
                <p className="mt-1 text-xs text-brand-grey">HTVA · Nouveau client</p>
              </article>
            ))}
          </div>

          <p className="mt-6 flex items-start gap-2 text-sm text-brand-grey">
            <Info size={14} className="mt-0.5 shrink-0" />
            Prix HTVA — la TVA belge (21%) s'applique pour les clients belges assujettis.
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

          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead style={{ backgroundColor: "#0F3F4A", color: "white" }}>
                <tr>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">Volume</th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">
                    Odoo Success Pack
                  </th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">MSL-iTECH</th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">Écart</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {comparison.map((r, i) => (
                  <tr key={r.vol} className={i % 2 ? "bg-muted/40" : ""}>
                    <td className="px-5 py-4 font-medium text-brand-black">{r.vol}</td>
                    <td className="px-5 py-4 text-brand-grey line-through">{r.odoo}</td>
                    <td className="px-5 py-4 font-semibold text-brand-black">{r.msl}</td>
                    <td className="px-5 py-4">
                      <span
                        className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold"
                        style={{ backgroundColor: "rgba(255,221,87,0.2)", color: "#0F3F4A" }}
                      >
                        {r.gap}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="bg-muted/40 py-20">
        <div className="container max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Ce qui est inclus
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Ce que comprend chaque pack
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Analyse de vos besoins",
              "Configuration Odoo selon votre activité",
              "Migration des données (selon palier)",
              "Formation des utilisateurs",
              "Support post-déploiement",
              "Compte-rendu d'utilisation des heures",
            ].map((it) => (
              <li
                key={it}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                <span className="font-body text-sm text-brand-black">{it}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/tarifs"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-body text-sm font-semibold text-brand-black transition hover:border-brand-blue hover:shadow-sm"
          >
            Voir la grille complète et les conditions <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#0F3F4A" }}>
        <div className="container text-center text-white">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Réserver ma démo — je choisis{" "}
            <span style={{ color: "var(--gold)" }}>mon pack après</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-white/80">
            Recommandation personnalisée · Sans engagement · 24 à 72h ouvrables
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
