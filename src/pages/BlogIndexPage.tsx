import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import { blogPosts } from "@/content/blogPosts";
import pillarMarketing from "@/assets/home/pillar-marketing.webp";
import ctaBg from "@/assets/home/cta-bg.webp";

type Filter = "ALL" | "BE" | "MA";

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

export default function BlogIndexPage() {
  const [filter, setFilter] = useState<Filter>("ALL");

  useProductSeo({
    title: "Blog Odoo — Conseils, prix et conformité | MSL-iTECH",
    description:
      "Articles MSL-iTECH sur Odoo en Belgique et au Maroc : prix d'implémentation, partenaires certifiés, gestion de stock, facturation électronique.",
    path: "/blog",
  });

  const posts = useMemo(() => {
    const sorted = [...blogPosts].sort((a, b) =>
      b.publishedAt.localeCompare(a.publishedAt)
    );
    if (filter === "ALL") return sorted;
    return sorted.filter((p) => p.region === filter);
  }, [filter]);

  const featured = posts[0];
  const rest = posts.slice(1);

  const tabs: { key: Filter; label: string }[] = [
    { key: "ALL", label: "Tous" },
    { key: "BE", label: "🇧🇪 Belgique" },
    { key: "MA", label: "🇲🇦 Maroc" },
  ];

  const fmtDate = (s: string) =>
    new Date(s).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <>
      {/* HERO */}
      <section className="bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate rounded-[28px] md:rounded-[36px]">
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
              <img
                src={pillarMarketing}
                alt="Blog MSL-iTECH"
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

            <div className="absolute -top-3 left-8 z-20 md:-top-4 md:left-12">
              <Sticker rotate={-8}>★ Insights Odoo</Sticker>
            </div>

            <div className="relative flex min-h-[420px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[500px] md:py-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  Blog · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-[60px] lg:text-[72px]">
                Conseils Odoo,{" "}
                <span className="italic font-light text-brand-gold">
                  prix
                </span>{" "}
                & <Mark>conformité.</Mark>
              </h1>

              <p className="mt-7 max-w-2xl font-body text-base text-white/80 md:text-lg">
                Des analyses concrètes pour décider : tarifs, partenaires
                certifiés, gestion de stock, facturation électronique — pour
                PME belges et marocaines.
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
                  Blog
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="bg-brand-bg py-24 md:py-28">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                    À la une
                  </p>
                </div>
                <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                  Dernier <Mark>article.</Mark>
                </h2>
              </div>
              <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
                Sélection éditoriale — l'analyse la plus récente publiée par
                notre équipe pour les dirigeants de PME.
              </p>
            </div>

            <Link
              to={`/blog/${featured.slug}`}
              className="group relative mt-14 grid overflow-hidden rounded-[28px] border bg-brand-white shadow-sm transition hover:shadow-xl lg:grid-cols-12"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <div className="relative h-72 overflow-hidden lg:col-span-7 lg:h-auto">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={1280}
                    height={800}
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "var(--blue)" }}
                  />
                )}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(18,77,90,0.15) 0%, rgba(18,77,90,0.45) 100%)",
                  }}
                />
                <div className="absolute left-5 top-5">
                  <Sticker rotate={-6}>★ À la une</Sticker>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 p-8 md:p-10 lg:col-span-5">
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                      style={{
                        backgroundColor: "rgba(18,77,90,0.08)",
                        color: "var(--blue)",
                      }}
                    >
                      {featured.category}
                    </span>
                    {featured.region !== "INT" && (
                      <span
                        className="rounded-full border px-2.5 py-1 text-[11px] text-brand-grey"
                        style={{ borderColor: "var(--grey-light)" }}
                      >
                        {featured.region === "BE" ? "🇧🇪 Belgique" : "🇲🇦 Maroc"}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl font-bold leading-[1.15] text-brand-black md:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="mt-4 font-body text-base text-brand-grey">
                    {featured.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-x-5 gap-y-2 text-xs text-brand-grey">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} />
                      {fmtDate(featured.publishedAt)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} /> {featured.readingTime}
                    </span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-brand-blue">
                    Lire l'article{" "}
                    <ArrowRight
                      size={14}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* GRID + FILTERS */}
      <section className="bg-brand-white py-24 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                  Tous les articles
                </p>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-black md:text-6xl">
                Le journal <Mark>MSL.</Mark>
              </h2>
            </div>
            <p className="font-body text-base text-brand-grey lg:col-span-5 md:text-lg">
              Filtrez par marché pour ne voir que les analyses qui concernent
              votre contexte local.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-2">
            {tabs.map((t) => {
              const active = filter === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setFilter(t.key)}
                  className="rounded-full px-4 py-2 font-body text-sm transition"
                  style={
                    active
                      ? { backgroundColor: "var(--blue)", color: "white" }
                      : {
                          backgroundColor: "var(--bg)",
                          color: "var(--black)",
                          border: "1px solid var(--grey-light)",
                        }
                  }
                >
                  {t.label}
                </button>
              );
            })}
            <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.2em] text-brand-grey">
              {posts.length} article{posts.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(filter === "ALL" ? rest : posts).map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-[24px] border bg-brand-white transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={1280}
                      height={800}
                    />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: "var(--blue)" }}
                    />
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(18,77,90,0.0) 40%, rgba(18,77,90,0.55) 100%)",
                    }}
                  />
                  <div className="absolute left-4 top-4 flex flex-wrap items-center gap-1.5">
                    <span
                      className="rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white shadow-sm backdrop-blur"
                      style={{ backgroundColor: "rgba(13,13,13,0.55)" }}
                    >
                      {p.category}
                    </span>
                    {p.region !== "INT" && (
                      <span
                        className="rounded-full px-2 py-0.5 text-[11px] text-white shadow-sm backdrop-blur"
                        style={{ backgroundColor: "rgba(13,13,13,0.55)" }}
                      >
                        {p.region === "BE" ? "🇧🇪" : "🇲🇦"}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold leading-snug text-brand-black transition group-hover:text-brand-blue">
                    {p.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 font-body text-sm text-brand-grey">
                    {p.excerpt}
                  </p>
                  <div
                    className="mt-6 flex items-center justify-between border-t pt-4 text-xs text-brand-grey"
                    style={{ borderColor: "var(--grey-light)" }}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} />
                      {fmtDate(p.publishedAt)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} /> {p.readingTime}
                    </span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-brand-blue">
                    Lire l'article{" "}
                    <ArrowRight
                      size={14}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
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
              Un projet en tête ?
            </p>
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Parlons de votre projet,{" "}
            <span className="italic font-light text-brand-gold">
              gratuitement.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-base text-white/80 md:text-lg">
            Démo gratuite · Recommandation personnalisée · Sans engagement.
          </p>
          <Link
            to="/prendre-rendez-vous"
            className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Réserver ma démo <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
