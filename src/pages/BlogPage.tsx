import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowLeft, Sparkles, Clock, Calendar, ExternalLink } from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { getPostBySlug } from "@/content/blogPosts";

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useProductSeo({
    title: post ? `${post.metaTitle} | Blog MSL-iTECH` : "Blog — MSL-iTECH",
    description:
      post?.metaDescription ?? "Articles, conseils et analyses Odoo par MSL-iTECH.",
    path: post ? `/blog/${post.slug}` : "/blog",
    faqs: post?.faqs,
    ldId: post?.faqs ? `ld-faq-blog-${post.slug}` : undefined,
  });

  if (!post) {
    return (
      <section className="container py-20 text-center">
        <h1 className="font-heading text-3xl font-bold text-brand-black">Article introuvable</h1>
        <p className="mt-4 font-body text-brand-grey">
          Cet article n'existe pas ou a été déplacé.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold transition hover:opacity-90"
          style={{ backgroundColor: "#0F3F4A", color: "white" }}
        >
          Retour à l'accueil <ArrowRight size={16} />
        </Link>
      </section>
    );
  }

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
        <div className="container relative py-16 lg:py-20 text-white">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={12} /> Retour
          </Link>
          <p
            className="mt-6 mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{
              backgroundColor: "rgba(255,221,87,0.14)",
              color: "var(--gold)",
              border: "1px solid rgba(255,221,87,0.35)",
            }}
          >
            <Sparkles size={12} /> Blog · {post.category}
          </p>
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.1] md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg text-white/80">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <Calendar size={14} />{" "}
              {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={14} /> {post.readingTime} de lecture
            </span>
            {post.region && (
              <span
                className="rounded-full px-2.5 py-0.5 text-xs"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                {post.region === "BE" ? "🇧🇪 Belgique" : post.region === "MA" ? "🇲🇦 Maroc" : "International"}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-background py-20">
        <article className="container max-w-3xl">
          <div className="space-y-6 font-body text-base leading-relaxed text-brand-black">
            {post.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="mt-10 font-heading text-2xl font-bold text-brand-black md:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3
                    key={i}
                    className="mt-6 font-heading text-xl font-bold text-brand-black"
                  >
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-2 pl-5">
                    {block.items.map((it, j) => (
                      <li
                        key={j}
                        className="list-disc font-body text-base text-brand-grey marker:text-brand-blue"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="font-body text-base text-brand-grey">
                  {block.text}
                </p>
              );
            })}
          </div>

          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-14">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
                Questions fréquentes
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-brand-black md:text-3xl">
                FAQ
              </h2>
              <div className="mt-6 space-y-4">
                {post.faqs.map((f) => (
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
          )}

          {post.relatedPath && (
            <div
              className="mt-14 rounded-2xl border border-border p-6 lg:p-8"
              style={{ backgroundColor: "rgba(15,63,74,0.04)" }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
                Pour aller plus loin
              </p>
              <h3 className="mt-2 font-heading text-lg font-bold text-brand-black">
                {post.relatedLabel ?? "En savoir plus"}
              </h3>
              <Link
                to={post.relatedPath}
                className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#0F3F4A", color: "white" }}
              >
                Consulter la page <ExternalLink size={14} />
              </Link>
            </div>
          )}
        </article>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#0F3F4A" }}>
        <div className="container text-center text-white">
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold md:text-4xl">
            {post.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-white/80">{post.cta.subtitle}</p>
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
