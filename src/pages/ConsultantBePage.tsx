import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingDown,
  ExternalLink,
  Clock,
  CheckCircle2,
  Award,
  ListChecks,
  GraduationCap,
  LifeBuoy,
  Search,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";

const reasons = [
  {
    icon: TrendingDown,
    title: "Des packs d'heures plus accessibles sur des volumes comparables",
    desc: "Notre structure internationale — équipe technique au Maroc, présence commerciale en Belgique — nous permet de proposer des packs d'heures 20 à 50% plus accessibles que les Success Packs observés sur le marché belge. Même logique d'accompagnement, cadre certifié, et meilleure accessibilité tarifaire.",
  },
  {
    icon: ListChecks,
    title: "Une grille tarifaire transparente et publiée",
    desc: "Nos tarifs d'implémentation commencent à 400 € pour un pack de 4 heures et montent jusqu'à 8 500 € pour un pack Elite de 200 heures. Tout est publié sur notre page tarifs.",
  },
  {
    icon: Clock,
    title: "Disponibilité et réactivité",
    desc: "Réponse à chaque demande sous 24 à 72 heures ouvrables. Un consultant dédié de bout en bout.",
  },
];

const steps = [
  { n: "01", title: "Démo gratuite (30 min)", icon: Search },
  { n: "02", title: "Proposition plan d'implémentation", icon: ListChecks },
  { n: "03", title: "Configuration & migration", icon: Award },
  { n: "04", title: "Formation équipes", icon: GraduationCap },
  { n: "05", title: "Support post-production", icon: LifeBuoy },
];

const faqs = [
  {
    q: "Quel est le meilleur consultant Odoo en Belgique pour une PME ?",
    a: "Pour une PME belge de 10 à 50 employés, il faut un consultant certifié Odoo qui connaît les spécificités belges (PCMN, TVA, législation du travail). MSL-iTECH est partenaire officiel certifié Odoo depuis 2020, avec une grille tarifaire publiée à partir de 400 € et des références vérifiables sur odoo.com/partners.",
  },
  {
    q: "Combien coûte l'implémentation d'Odoo en Belgique ?",
    a: "MSL-iTECH propose une grille de 6 packs transparents de 400 € à 8 500 €. Sur les volumes comparables, nos packs sont 20 à 50% plus accessibles que les Success Packs observés sur le marché belge.",
  },
  {
    q: "Faut-il un consultant Odoo local en Belgique ou peut-on travailler à distance ?",
    a: "La grande majorité des implémentations se font à distance. MSL-iTECH travaille avec des clients dans toute la Belgique. Une présence sur site peut être organisée pour les formations initiales.",
  },
];

export default function ConsultantBePage() {
  useProductSeo({
    title: "Consultant Odoo Belgique Certifié — Implémentation PME | MSL-iTECH",
    description:
      "Vous cherchez un consultant Odoo certifié en Belgique ? MSL-iTECH accompagne les PME avec une approche officielle, des tarifs transparents et des packs d'heures 20 à 50% plus accessibles que les Success Packs observés sur le marché belge.",
    path: "/consultant-odoo-belgique",
    faqs,
    ldId: "ld-faq-consultant-be",
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
            <Sparkles size={12} /> Consultant Odoo · Belgique
          </p>
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.08] md:text-5xl lg:text-[3.25rem]">
            Consultant Odoo certifié en Belgique — packs d'heures{" "}
            <span style={{ color: "var(--gold)" }}>
              20 à 50% plus accessibles
            </span>{" "}
            que les Success Packs observés sur le marché belge
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg text-white/80">
            Vous cherchez un partenaire Odoo certifié pour implémenter l'ERP dans votre PME belge ?
            MSL-iTECH est partenaire officiel Odoo, actif en Belgique depuis 2020, avec une grille
            tarifaire transparente et des références vérifiables publiquement sur
            odoo.com/partners.
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
              <Clock size={16} style={{ color: "var(--gold)" }} /> Réponse sous 24 à 72h
            </span>
          </div>
        </div>
      </section>

      {/* PUBLIC REFERENCE */}
      <section className="bg-background py-20">
        <div className="container">
          <div
            className="rounded-2xl border border-border p-10 lg:p-14"
            style={{ backgroundColor: "rgba(15,63,74,0.04)" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              Référence publique en Belgique
            </p>
            <h2 className="mt-3 max-w-3xl font-heading text-2xl font-bold text-brand-black md:text-3xl">
              AIS Hector Denis — agence immobilière sociale, Région Bruxelloise
            </h2>
            <p className="mt-4 max-w-3xl font-body text-base text-brand-grey">
              AIS Hector Denis figure parmi nos références visibles sur notre fiche partenaire
              officielle Odoo. Vérifiez notre statut et nos références directement à la source.
            </p>
            <a
              href="https://www.odoo.com/partners"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold transition hover:opacity-90"
              style={{ backgroundColor: "#0F3F4A", color: "white" }}
            >
              Voir odoo.com/partners <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IS A CERTIFIED CONSULTANT */}
      <section className="bg-muted/40 py-20">
        <div className="container max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Définition
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Qu'est-ce qu'un consultant Odoo certifié et pourquoi ça compte ?
          </h2>
          <p className="mt-6 font-body text-lg text-brand-grey">
            Un consultant Odoo certifié a passé les examens officiels d'Odoo SA et maîtrise les
            bonnes pratiques d'implémentation. La certification garantit que votre projet est mené
            selon une méthodologie éprouvée — paramétrage, migration de données, formation et
            mise en production.
          </p>
        </div>
      </section>

      {/* WHY MSL-iTECH */}
      <section className="bg-background py-20">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Pourquoi MSL-iTECH
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Pourquoi choisir MSL-iTECH comme consultant Odoo en Belgique ?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <article
                  key={r.title}
                  className="rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:shadow-md"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "rgba(15,63,74,0.08)", color: "#0F3F4A" }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-brand-black">
                    {r.title}
                  </h3>
                  <p className="mt-3 font-body text-sm text-brand-grey">{r.desc}</p>
                </article>
              );
            })}
          </div>

          <Link
            to="/tarifs"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-body text-sm font-semibold text-brand-black transition hover:border-brand-blue hover:shadow-sm"
          >
            Voir la grille tarifaire complète <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Méthodologie
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Comment se déroule une implémentation Odoo avec MSL-iTECH ?
          </h2>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.n}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-xs uppercase tracking-[0.2em]"
                      style={{ color: "var(--gold)" }}
                    >
                      Étape {s.n}
                    </span>
                    <Icon size={18} className="text-brand-blue" />
                  </div>
                  <p className="mt-4 font-heading text-base font-bold text-brand-black">
                    {s.title}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20">
        <div className="container max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Questions fréquentes
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            FAQ — Consultant Odoo en Belgique
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border bg-card p-5 transition hover:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between font-body font-semibold text-brand-black">
                  {f.q}
                  <span className="ml-4 text-2xl leading-none text-brand-blue transition group-open:rotate-45">
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
            Réserver ma démo gratuite avec un{" "}
            <span style={{ color: "var(--gold)" }}>consultant Odoo belge</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-white/80">
            30 minutes · Configuré pour votre secteur · Réponse sous 24 à 72h
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold transition hover:opacity-90"
            style={{ backgroundColor: "var(--gold)", color: "#0F3F4A" }}
          >
            Réserver ma démo <ArrowRight size={16} />
          </Link>
          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-white/60">
            <CheckCircle2 size={12} /> Sans engagement · Consultant dédié
          </p>
        </div>
      </section>
    </>
  );
}
