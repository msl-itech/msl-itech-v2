import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowLeft, Sparkles, Clock, Calendar, ExternalLink, Wrench } from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { getPostBySlug, getRelatedPosts } from "@/content/blogPosts";
import { blogImageBySlug } from "@/lib/blog-images";
import { JsonLd } from "@/components/JsonLd";

/**
 * Maillage interne contextuel : chaque article pertinent renvoie vers
 * l'outil interactif exact correspondant à la douleur traitée.
 * Règle absolue : jamais de redirection vers l'accueil.
 */
const ARTICLE_TO_TOOL: Record<
  string,
  { path: string; label: string; description: string }
> = {
  "facturation-electronique-obligatoire-maroc-2026-erp": {
    path: "/outils/conformite-dgi",
    label: "Simulateur de conformité DGI",
    description:
      "En 2 minutes, mesurez votre risque de non-conformité à la réforme DGI et recevez votre fenêtre conseillée.",
  },
  "facturation-electronique-dgi-maroc-2026-pdf-ubl": {
    path: "/outils/conformite-dgi",
    label: "Simulateur de conformité DGI",
    description:
      "Évaluez votre exposition à l'obligation PDF/UBL et obtenez votre plan de mise en conformité.",
  },
  "facturation-electronique-transformation-digitale-maroc": {
    path: "/outils/diagnostic-digital",
    label: "Diagnostic maturité digitale",
    description:
      "Situez votre PME sur l'échelle Conformité → Intégration → Automatisation → Intelligence.",
  },
  "facturation-electronique-maroc-2026": {
    path: "/outils/conformite-dgi",
    label: "Simulateur de conformité DGI",
    description: "Mesurez votre exposition à la réforme et obtenez votre plan d'action.",
  },
  "sage-vs-odoo-maroc-comparatif-2026": {
    path: "/outils/comparateur-sage-odoo",
    label: "Comparateur Sage vs Odoo",
    description:
      "Coût 3 ans, couverture fonctionnelle, conformité DGI : obtenez la comparaison adaptée à votre cas.",
  },
  "odoo-vs-sap-vs-sage-comparatif-cout-pme-2026": {
    path: "/outils/comparateur-sage-odoo",
    label: "Comparateur Sage vs Odoo",
    description: "Affinez la comparaison Sage vs Odoo pour votre PME.",
  },
  "migration-excel-vers-odoo-maroc-methode": {
    path: "/outils/roi-erp",
    label: "Calculateur ROI ERP",
    description:
      "Estimez le gain 12 mois d'un passage d'Excel à Odoo pour votre PME marocaine.",
  },
  "roi-erp-pme-economies-2026": {
    path: "/outils/roi-erp",
    label: "Calculateur ROI ERP",
    description: "Estimez en 2 minutes les gains 12 mois d'un déploiement Odoo.",
  },
  "cout-erp-odoo-maroc-2026": {
    path: "/outils/roi-erp",
    label: "Calculateur ROI ERP",
    description: "Confrontez le coût Odoo au gain potentiel sur 12 mois.",
  },
  "couts-caches-projet-erp-2026": {
    path: "/outils/roi-erp",
    label: "Calculateur ROI ERP",
    description: "Mesurez le gain net après prise en compte des coûts cachés.",
  },
  "devis-encaissement-odoo-automatisation-roi-maroc": {
    path: "/outils/roi-erp",
    label: "Calculateur ROI ERP",
    description: "Quantifiez le gain d'un cycle devis → encaissement automatisé.",
  },
  "erp-odoo-relances-automatiques-ruptures-stock-ia-maroc": {
    path: "/outils/diagnostic-digital",
    label: "Diagnostic maturité digitale",
    description:
      "Identifiez votre prochain palier de digitalisation (relances, stock, IA).",
  },
  "agents-ia-odoo-pme-maroc-2026": {
    path: "/outils/diagnostic-digital",
    label: "Diagnostic maturité digitale",
    description: "Êtes-vous prêt pour l'IA agentique ? Mesurez votre niveau.",
  },
  "copilote-conversationnel-odoo-ia-maroc": {
    path: "/outils/diagnostic-digital",
    label: "Diagnostic maturité digitale",
    description: "Évaluez votre maturité avant d'ajouter un copilote IA à votre ERP.",
  },
  "donnees-propres-erp-avant-ia-odoo-maroc": {
    path: "/outils/diagnostic-digital",
    label: "Diagnostic maturité digitale",
    description:
      "Vos données sont-elles prêtes pour l'IA ? Mesurez votre niveau de Data Readiness.",
  },
  "odoo-saas-on-premise-hybride-maroc-2026": {
    path: "/outils/roi-erp",
    label: "Calculateur ROI ERP",
    description: "Comparez le coût 12 mois d'un déploiement SaaS, on-premise ou hybride.",
  },
  "daf-marocain-pilotage-strategique-odoo-2026": {
    path: "/outils/diagnostic-digital",
    label: "Diagnostic maturité digitale",
    description: "Le diagnostic conçu pour les DAF qui pilotent par la donnée.",
  },
  "budget-erp-horeca-maroc-2026": {
    path: "/outils/roi-erp",
    label: "Calculateur ROI ERP",
    description: "Budget ERP HORECA : confrontez l'investissement au gain estimé.",
  },
  "gestion-stock-maroc-apres-1-5m-mad": {
    path: "/outils/diagnostic-digital",
    label: "Diagnostic maturité digitale",
    description: "Mesurez votre maturité gestion de stock et identifiez les leviers prioritaires.",
  },
};

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useProductSeo({
    title: post ? `${post.metaTitle} | Blog MSL-iTECH` : "Blog — MSL-iTECH",
    description:
      post?.metaDescription ?? "Articles, conseils et analyses Odoo par MSL-iTECH.",
    path: post ? `/blog/${post.slug}` : "/blog",
    ogImage: post?.image,
    ogType: "article",
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

  const relatedTool = ARTICLE_TO_TOOL[post.slug];
  const relatedPosts = getRelatedPosts(post.slug, 3);

  const SITE = "https://msl-itech.com";
  const articleUrl = `${SITE}/blog/${post.slug}`;
  const postImage = blogImageBySlug[post.slug];
  const articleImage = postImage
    ? postImage.startsWith("http")
      ? postImage
      : `${SITE}${postImage.startsWith("/") ? postImage : "/" + postImage}`
    : `${SITE}/og-default.jpg`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: articleImage,
    articleSection: post.category,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: "MSL-iTECH",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: "MSL-iTECH",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/icon-192.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <>
      <JsonLd id="ld-article-blog" data={articleSchema} />
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

      {/* COVER IMAGE */}
      {blogImageBySlug[post.slug] && (
        <section className="bg-background pt-10">
          <div className="container max-w-5xl">
            <div
              className="overflow-hidden rounded-[24px] border shadow-sm"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <img
                src={blogImageBySlug[post.slug]}
                alt={`Illustration principale de l'article : ${post.title}`}
                className="block aspect-[16/9] w-full object-cover"
                width={1280}
                height={720}
              loading="eager" fetchPriority="high" decoding="async"/>
            </div>
          </div>
        </section>
      )}

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

          {relatedTool && (
            <div
              className="mt-14 rounded-[24px] border-2 p-6 md:p-8"
              style={{ borderColor: "var(--gold)", backgroundColor: "rgba(255,221,87,0.08)" }}
            >
              <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                <Wrench size={12} /> Outil gratuit lié à cet article
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-brand-black">
                {relatedTool.label}
              </h2>
              <p className="mt-2 font-body text-base text-brand-grey">
                {relatedTool.description}
              </p>
              <Link
                to={relatedTool.path}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-bold text-brand-black shadow-[0_18px_40px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Lancer l'outil <ArrowRight size={16} />
              </Link>
            </div>
          )}

        </article>
      </section>

      {relatedPosts.length > 0 && (
        <section className="bg-white py-20 border-t" style={{ borderColor: "var(--grey-light)" }}>
          <div className="container max-w-6xl">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
                  Poursuivre la lecture
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold text-brand-black md:text-3xl">
                  Articles liés
                </h2>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-brand-blue hover:opacity-80"
              >
                Voir tout le blog <ArrowRight size={14} />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_20px_50px_-20px_rgba(18,77,90,0.3)]"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  {rp.image && (
                    <img
                      src={rp.image}
                      alt={`Illustration de l'article ${rp.title}`}
                      className="aspect-[16/9] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                      {rp.category}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-brand-black">
                      {rp.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 font-body text-sm text-brand-grey">
                      {rp.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-brand-blue">
                      Lire l'article <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
