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
import odooReadyBadge from "@/assets/odoo-ready-partner.png";

const reasons = [
  {
    icon: TrendingDown,
    title: "Des packs d'heures plus accessibles sur des volumes comparables",
    desc: "Notre structure internationale — équipe technique Odoo Ready Partner au Maroc (consultants certifiés v18 & v19), accompagnement à distance des clients belges — nous permet de proposer des packs d'heures 20 à 50% plus accessibles que les Success Packs observés sur le marché belge. Même cadre certifié, sans bureau local en Belgique.",
  },
  {
    icon: ListChecks,
    title: "Une tarification transparente et sur mesure",
    desc: "Tarification adaptée à chaque projet, devis détaillé sur mesure. Notre structure internationale nous permet de proposer des tarifs 20 à 50% plus accessibles que le marché belge. Consultez notre page approche.",
  },
  {
    icon: Clock,
    title: "Modules custom & personnalisation d'Odoo natif",
    desc: "Au-delà du paramétrage standard, notre équipe développe des modules sur mesure et personnalise Odoo natif (workflows, vues, rapports, intégrations API) pour coller exactement à vos process. Réponse sous 24 à 72h ouvrables, consultant dédié de bout en bout.",
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
    a: "Pour une PME belge de 10 à 50 employés, il faut un consultant certifié Odoo qui connaît les spécificités belges (PCMN, TVA, législation du travail). MSL-iTECH est Odoo Ready Partner au Maroc — nos consultants sont certifiés v18 & v19 — et accompagne ses clients belges à distance depuis 2020, avec des tarifs 20 à 50% plus accessibles et des références vérifiables sur odoo.com/partners.",
  },
  {
    q: "Combien coûte l'implémentation d'Odoo en Belgique ?",
    a: "Chaque projet est chiffré sur mesure après cadrage. Sur les volumes comparables, nos tarifs sont 20 à 50% plus accessibles que les Success Packs observés sur le marché belge, grâce à notre structure internationale Belgique-Maroc.",
  },
  {
    q: "Faut-il un consultant Odoo local en Belgique ou peut-on travailler à distance ?",
    a: "MSL-iTECH n'a pas de bureau physique en Belgique : notre équipe technique est basée au Maroc et accompagne les clients belges à 100% à distance (visio, démo, support). Des déplacements ponctuels sur site peuvent être organisés pour les formations clés ou les ateliers de cadrage.",
  },
  {
    q: "MSL-iTECH peut-il développer des modules custom Odoo ?",
    a: "Oui. Au-delà du paramétrage et de la configuration des modules natifs, notre équipe développe des modules sur mesure en Python/OWL et personnalise Odoo natif : workflows métier, vues, rapports PDF, intégrations API, connecteurs e-commerce, etc. Tout est livré dans le cadre Odoo Ready Partner (consultants certifiés v18 & v19). ",
  },
];

export default function ConsultantBePage() {
  useProductSeo({
    title: "Consultant Odoo pour PME belges — Odoo Ready Partner (Maroc, à distance) | MSL-iTECH",
    description:
      "Odoo Ready Partner au Maroc — consultants certifiés v18 & v19. MSL-iTECH accompagne à distance les PME belges : implémentation, modules custom et personnalisation d'Odoo natif. Tarifs sur mesure, 20 à 50% plus accessibles que les Success Packs observés sur le marché belge.",
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
            <Sparkles size={12} /> Odoo Ready Partner · Maroc → Belgique
          </p>
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.08] md:text-5xl lg:text-[3.25rem]">
            Consultant Odoo pour PME belges — Odoo Ready Partner basé au Maroc, packs d'heures{" "}
            <span style={{ color: "var(--gold)" }}>
              20 à 50% plus accessibles
            </span>{" "}
            que les Success Packs observés sur le marché belge
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg text-white/80">
            Vous cherchez un partenaire Odoo certifié pour votre PME belge ?
            MSL-iTECH est Odoo Ready Partner au Maroc — consultants certifiés v18 & v19 — et
            accompagne ses clients belges à distance depuis 2020 :
            implémentation, modules custom et personnalisation d'Odoo natif.
            Pas de bureau physique en Belgique — partenariat officiel Odoo
            vérifiable sur odoo.com/partners.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "white" }}
            >
              <ShieldCheck size={16} style={{ color: "var(--gold)" }} /> Consultants certifiés v18 & v19
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "white" }}
            >
              <Clock size={16} style={{ color: "var(--gold)" }} /> Réponse sous 24 à 72h
            </span>
          </div>
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3">
            <img
              src={odooReadyBadge}
              alt="Badge officiel Odoo Ready Partner — MSL-iTECH consultants certifiés Odoo v18 et v19"
              className="h-12 w-auto"
              loading="lazy"
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-blue">
              Statut officiel Odoo · vérifiable sur odoo.com/partners
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
              href="https://www.odoo.com/fr_FR/partners/country/maroc-132?search=msl-itech"
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
            Découvrir notre approche <ArrowRight size={16} />
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
