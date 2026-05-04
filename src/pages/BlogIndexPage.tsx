import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { blogPosts } from "@/content/blogPosts";

type Filter = "ALL" | "BE" | "MA";

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

  const tabs: { key: Filter; label: string }[] = [
    { key: "ALL", label: "Tous" },
    { key: "BE", label: "🇧🇪 Belgique" },
    { key: "MA", label: "🇲🇦 Maroc" },
  ];

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
        <div className="container relative py-16 lg:py-20 text-white">
          <p
            className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{
              backgroundColor: "rgba(255,221,87,0.14)",
              color: "var(--gold)",
              border: "1px solid rgba(255,221,87,0.35)",
            }}
          >
            <Sparkles size={12} /> Blog MSL-iTECH
          </p>
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.1] md:text-5xl">
            Conseils Odoo, prix et conformité — pour PME belges et marocaines
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg text-white/80">
            Des analyses concrètes pour aider les dirigeants à décider :
            tarifs, partenaires certifiés, gestion de stock, facturation électronique.
          </p>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="mb-10 flex flex-wrap items-center gap-2">
            {tabs.map((t) => {
              const active = filter === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setFilter(t.key)}
                  className={`rounded-full px-4 py-2 font-body text-sm transition ${
                    active
                      ? "text-white"
                      : "border border-border bg-card text-brand-black hover:border-brand-blue"
                  }`}
                  style={active ? { backgroundColor: "#0F3F4A" } : undefined}
                >
                  {t.label}
                </button>
              );
            })}
            <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.2em] text-brand-grey">
              {posts.length} article{posts.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-brand-blue hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className="rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em]"
                    style={{
                      backgroundColor: "rgba(15,63,74,0.08)",
                      color: "#0F3F4A",
                    }}
                  >
                    {p.category}
                  </span>
                  {p.region !== "INT" && (
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs">
                      {p.region === "BE" ? "🇧🇪 BE" : "🇲🇦 MA"}
                    </span>
                  )}
                </div>
                <h2 className="font-heading text-lg font-bold leading-snug text-brand-black group-hover:text-brand-blue">
                  {p.title}
                </h2>
                <p className="mt-3 line-clamp-3 font-body text-sm text-brand-grey">
                  {p.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-brand-grey">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} />
                    {new Date(p.publishedAt).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} /> {p.readingTime}
                  </span>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-brand-blue">
                  Lire l'article <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#0F3F4A" }}>
        <div className="container text-center text-white">
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold md:text-4xl">
            Un projet Odoo en tête ? Parlons-en.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-white/80">
            Démo gratuite · Recommandation personnalisée · Sans engagement
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
