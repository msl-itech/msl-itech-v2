import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { blogPosts } from "@/content/blogPosts";
import { blogImageBySlug } from "@/lib/blog-images";
import { getHubBySlug, getPostsByHub, BLOG_HUBS } from "@/lib/blog-hubs";

export default function BlogHubPage() {
  const { pathname } = useLocation();
  const hubSlug = pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
  const hub = getHubBySlug(hubSlug);

  const posts = useMemo(
    () => (hub ? getPostsByHub(hub.slug, blogPosts) : []),
    [hub],
  );

  useProductSeo({
    title: hub
      ? `${hub.name} — Blog MSL-iTECH`
      : "Hub introuvable — Blog MSL-iTECH",
    description: hub
      ? hub.intro.slice(0, 155) + "…"
      : "Ce hub n'existe pas.",
    path: hub ? `/blog/${hub.slug}` : "/blog",
    breadcrumbs: hub
      ? [
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: hub.name, url: `/blog/${hub.slug}` },
        ]
      : undefined,
  });

  if (!hub) {
    return (
      <section className="container py-20 text-center">
        <h1 className="font-heading text-3xl font-bold text-brand-black">
          Hub introuvable
        </h1>
        <p className="mt-4 font-body text-brand-grey">
          Ce hub n'existe pas ou a été déplacé.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold transition hover:opacity-90"
          style={{ backgroundColor: "#0F3F4A", color: "white" }}
        >
          Voir tous les articles <ArrowRight size={16} />
        </Link>
      </section>
    );
  }

  const fmtDate = (s: string) =>
    new Date(s).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <>
      {/* ── HERO ── */}
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
        <div className="container relative py-16 lg:py-20 text-white">
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-white/60">
              <li><Link to="/" className="transition hover:text-white">Accueil</Link></li>
              <li aria-hidden><ArrowRight size={10} /></li>
              <li><Link to="/blog" className="transition hover:text-white">Blog</Link></li>
              <li aria-hidden><ArrowRight size={10} /></li>
              <li aria-current="page" className="text-white/90">{hub.name}</li>
            </ol>
          </nav>

          <p
            className="mb-6 flex w-fit items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{
              backgroundColor: "rgba(255,221,87,0.14)",
              color: "var(--gold)",
              border: "1px solid rgba(255,221,87,0.35)",
            }}
          >
            <Sparkles size={12} /> Hub · {hub.name}
          </p>

          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.1] md:text-5xl">
            {hub.name}
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg text-white/80">
            {hub.intro}
          </p>
        </div>
      </section>

      {/* ── READING ORDER ── */}
      <section className="bg-background py-20">
        <div className="container max-w-6xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-10 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
              Ordre de lecture recommandé
            </p>
          </div>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
            {posts.length} article{posts.length > 1 ? "s" : ""}
          </h2>

          <div className="mt-10 space-y-6">
            {posts.map((p, i) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-0.5 hover:shadow-lg md:flex-row"
                style={{ borderColor: "var(--grey-light)" }}
              >
                {blogImageBySlug[p.slug] && (
                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:w-64 shrink-0">
                    <img
                      src={blogImageBySlug[p.slug]}
                      alt={`Illustration : ${p.title}`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-brand-grey">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue font-mono text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                        {p.category}
                      </span>
                    </div>
                    <h3 className="mt-3 font-heading text-xl font-bold leading-snug text-brand-black">
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 font-body text-sm text-brand-grey">
                      {p.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-4 text-xs text-brand-grey">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={11} /> {fmtDate(p.publishedAt)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={11} /> {p.readingTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-brand-blue">
                      Lire <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <Link
              to={hub.ctaPath}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-white shadow-[0_18px_40px_-15px_rgba(18,77,90,0.45)] transition hover:scale-[1.02]"
              style={{ backgroundColor: "var(--blue)" }}
            >
              {hub.ctaLabel} <ArrowRight size={16} />
            </Link>
          </div>

          {/* Other hubs */}
          <div className="mt-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
              Explorer les autres hubs
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {BLOG_HUBS.filter((h) => h.slug !== hub.slug).map((h) => (
                <Link
                  key={h.slug}
                  to={`/blog/${h.slug}`}
                  className="rounded-full border px-4 py-2 font-body text-sm text-brand-black transition hover:border-brand-blue/40 hover:text-brand-blue hover:shadow-sm"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  {h.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
