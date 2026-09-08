import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Quote,
  Info,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { caseStudies, caseStudyBySlug } from "@/content/caseStudies";
import { caseImageByKey, caseImageAlt } from "@/lib/case-images";

export default function CaseStudyPage() {
  const { slug = "" } = useParams();
  const study = caseStudyBySlug[slug];

  useProductSeo({
    title: study
      ? `${study.name} — Cas client Odoo | MSL-iTECH`
      : "Cas client Odoo | MSL-iTECH",
    description: study
      ? `${study.name} (${study.sector}, ${study.country}) : contexte, modules Odoo déployés et résultats livrés par MSL-iTECH.`
      : "Cas clients Odoo réalisés par MSL-iTECH.",
    path: `/realisations/${slug}`,
  });

  if (!study) return <Navigate to="/realisations" replace />;

  const image = caseImageByKey[study.imageKey];

  // Priorité : cas du même secteur ; compléter si moins de 2
  const sameSector = caseStudies
    .filter((c) => c.slug !== study.slug && c.sector === study.sector)
    .slice(0, 2);
  const relatedCases =
    sameSector.length >= 2
      ? sameSector
      : [
          ...sameSector,
          ...caseStudies
            .filter((c) => c.slug !== study.slug && !sameSector.some((s) => s.slug === c.slug))
            .slice(0, 2 - sameSector.length),
        ];

  return (
    <>
      <section className="bg-brand-bg pt-10 md:pt-14">
        <div className="container">
          <Link
            to="/realisations"
            className="inline-flex items-center gap-2 font-body text-sm text-brand-grey transition hover:text-brand-blue"
          >
            <ArrowLeft size={16} /> Toutes les réalisations
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-blue">
                {study.sector} · {study.country}
              </p>
              <h1 className="mt-4 font-heading text-3xl font-bold leading-[1.08] tracking-tight text-brand-black md:text-5xl">
                {study.name}
              </h1>
              <p className="mt-6 font-body text-base text-brand-grey md:text-lg">
                {study.context}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {study.modules.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border bg-brand-white px-3 py-1 font-body text-xs text-brand-black"
                    style={{ borderColor: "var(--grey-light)" }}
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <figure className="overflow-hidden rounded-[24px] border" style={{ borderColor: "var(--grey-light)" }}>
                <img
                  src={image}
                  alt={caseImageAlt(study.sector, study.imageIsIllustration, study.name)}
                  className="h-64 w-full object-cover md:h-80"
                  loading="eager"
                  decoding="async"
                />
                {study.imageIsIllustration && (
                  <figcaption className="flex items-start gap-2 bg-brand-white px-4 py-3 font-body text-xs text-brand-grey">
                    <Info size={14} className="mt-0.5 shrink-0 text-brand-blue" />
                    Illustration sectorielle — ce visuel n'est pas une photo du projet client.
                  </figcaption>
                )}
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-bg py-16 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div
            className="rounded-[24px] border bg-brand-white p-8"
            style={{ borderColor: "var(--grey-light)" }}
          >
            <h2 className="font-heading text-2xl font-bold text-brand-black">
              Le point de départ
            </h2>
            <p className="mt-4 font-body text-base text-brand-grey">{study.challenge}</p>
          </div>

          <div
            className="rounded-[24px] border bg-brand-white p-8"
            style={{ borderColor: "var(--grey-light)" }}
          >
            <h2 className="font-heading text-2xl font-bold text-brand-black">
              Ce qui a été livré
            </h2>
            <ul className="mt-4 space-y-3">
              {study.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--blue)" }}
                  />
                  <span className="font-body text-sm text-brand-black">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {study.metrics && study.metrics.length > 0 && (
        <section className="bg-brand-white py-16 md:py-20">
          <div className="container">
            <h2 className="font-heading text-2xl font-bold text-brand-black md:text-3xl">
              Résultats mesurés
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {study.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-[24px] border bg-brand-bg p-6"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <p className="font-heading text-4xl font-bold text-brand-blue">{m.value}</p>
                  <p className="mt-2 font-body text-sm font-semibold text-brand-black">{m.label}</p>
                  <p className="mt-2 font-body text-xs text-brand-grey">Mesure : {m.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {study.quote && (
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="container">
            <blockquote
              className="rounded-[28px] p-10"
              style={{ backgroundColor: "var(--blue)" }}
            >
              <Quote size={28} className="text-brand-gold" />
              <p className="mt-5 font-body text-lg text-white md:text-xl">« {study.quote.text} »</p>
              <footer className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-gold">
                {study.quote.author} — {study.quote.role}
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      <section className="bg-brand-white py-16 md:py-20">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-black md:text-3xl">
                Vérifiez cette référence
              </h2>
              <p className="mt-3 max-w-xl font-body text-sm text-brand-grey">
                Notre statut de partenaire Odoo et nos références sont publics.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.odoo.com/fr_FR/partners/country/maroc-132?search=msl-itech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 font-body text-sm font-semibold text-brand-blue transition hover:bg-brand-bg"
                style={{ borderColor: "var(--blue)" }}
              >
                odoo.com/partners <ExternalLink size={15} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-bold text-brand-black transition hover:scale-[1.02]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Parler d'un projet similaire <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vertical + ville ── */}
      {(study.verticalPage || study.cityPage) && (
        <section className="bg-brand-white py-14 md:py-16">
          <div className="container">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
              Aller plus loin
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-brand-black md:text-3xl">
              Solutions et implantations liées
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {study.verticalPage && (
                <Link
                  to={study.verticalPage}
                  className="group flex items-start gap-4 rounded-[20px] border bg-brand-bg p-6 transition hover:border-brand-blue/40 hover:shadow-md"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                      Solution sectorielle
                    </p>
                    <p className="mt-1.5 font-heading text-lg font-bold text-brand-black">
                      Partenaire Odoo {study.verticalLabel}
                    </p>
                    <p className="mt-1 font-body text-sm text-brand-grey">
                      Modules, cas d'usage et références dans ce secteur.
                    </p>
                  </div>
                  <ArrowRight size={18} className="mt-1 shrink-0 text-brand-blue transition group-hover:translate-x-1" />
                </Link>
              )}
              {study.cityPage && (
                <Link
                  to={study.cityPage}
                  className="group flex items-start gap-4 rounded-[20px] border bg-brand-bg p-6 transition hover:border-brand-blue/40 hover:shadow-md"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                      Implantation locale
                    </p>
                    <p className="mt-1.5 font-heading text-lg font-bold text-brand-black">
                      Intégrateur Odoo {study.cityLabel}
                    </p>
                    <p className="mt-1 font-body text-sm text-brand-grey">
                      Références, secteurs et présence MSL-iTECH dans cette ville.
                    </p>
                  </div>
                  <ArrowRight size={18} className="mt-1 shrink-0 text-brand-blue transition group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Cas du même secteur ── */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="container">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
            {sameSector.length > 0 ? "Dans le même secteur" : "Autres réalisations"}
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-brand-black md:text-3xl">
            Cas clients similaires
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {relatedCases.map((c) => (
              <Link
                key={c.slug}
                to={`/realisations/${c.slug}`}
                className="group rounded-[24px] border bg-brand-white p-6 transition hover:shadow-lg"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                  {c.sector} · {c.country}
                </p>
                <h3 className="mt-2 font-heading text-lg font-bold text-brand-black">{c.name}</h3>
                <p className="mt-2 line-clamp-2 font-body text-sm text-brand-grey">{c.result}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-blue">
                  Lire le cas client
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-right">
            <Link
              to="/realisations"
              className="inline-flex items-center gap-1.5 font-body text-sm text-brand-grey hover:text-brand-blue"
            >
              Toutes nos réalisations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA cadrage ── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--blue)" }}>
        <div className="container text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold">
            Votre projet
          </p>
          <h2 className="mt-4 font-heading text-2xl font-bold text-white md:text-3xl">
            Votre situation ressemble à ce cas ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-white/80">
            Cadrons-le ensemble en 30 minutes — sans engagement. Nous analysons votre périmètre, vos contraintes et vous indiquons si Odoo est la bonne réponse.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-bold text-brand-black transition hover:scale-[1.03]"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Réserver un cadrage gratuit <ArrowRight size={16} />
            </Link>
            <Link
              to="/realisations"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 font-body text-sm font-medium text-white transition hover:bg-white/10"
            >
              Voir toutes les réalisations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
