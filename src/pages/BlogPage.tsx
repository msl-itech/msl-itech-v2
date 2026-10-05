import { useMemo, useState, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Clock,
  Calendar,
  Wrench,
  ChevronRight,
  User,
  List,
  Lightbulb,
  Pencil,
  Share2,
  Link2,
  Check,
} from "lucide-react";

/* ── Social icons ── */
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconX = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.733-8.835L1.254 2.25H8.08l4.261 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
import { useProductSeo } from "@/hooks/useProductSeo";
import { getPostBySlug, getRelatedPosts } from "@/content/blogPosts";
import { blogImageBySlug } from "@/lib/blog-images";
import { getHubForPost } from "@/lib/blog-hubs";
import photoHoussineAsset from "@/assets/team/houssine-new.png.asset.json";
const photoHoussine = photoHoussineAsset.url;

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */

/** Parse markdown links `[text](/path)` into ReactNode with <Link>/<a>. */
function renderInlineLinks(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const label = match[1];
    const href = match[2];
    if (href.startsWith("http")) {
      parts.push(
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className="text-brand-blue underline hover:text-brand-black">
          {label}
        </a>,
      );
    } else {
      parts.push(
        <Link key={key++} to={href} className="text-brand-blue underline hover:text-brand-black">
          {label}
        </Link>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/** Turn heading text into a URL-safe anchor id. */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ------------------------------------------------------------------ *
 * Mid-article CTA map (tool injection at ~45 % of the article)
 * ------------------------------------------------------------------ */
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
  "facturation-electronique-maroc-qui-quand-que-faire": {
    path: "/outils/conformite-dgi",
    label: "Simulateur de conformité DGI",
    description:
      "Vérifiez votre situation en 2 minutes : échéance, format, risques. Plan d'action personnalisé.",
  },
  "facture-electronique-maroc-mentions-obligatoires-formats": {
    path: "/outils/conformite-dgi",
    label: "Simulateur de conformité DGI",
    description:
      "Votre facturation contient-elle toutes les mentions obligatoires ? Vérifiez en 2 minutes.",
  },
  "passer-facture-electronique-sans-arreter-activite": {
    path: "/outils/conformite-dgi",
    label: "Simulateur de conformité DGI",
    description:
      "Mesurez votre risque de non-conformité et obtenez votre fenêtre de bascule conseillée.",
  },
  "odoo-vs-sage-maroc-comparatif": {
    path: "/outils/comparateur-sage-odoo",
    label: "Comparateur Sage vs Odoo",
    description:
      "Appliquez la grille des dix critères à votre situation : coût 3 ans, CGNC, DGI, support.",
  },
  "choisir-integrateur-odoo-maroc-12-questions": {
    path: "/outils/diagnostic-digital",
    label: "Diagnostic maturité digitale",
    description:
      "Évaluez votre maturité digitale avant de choisir un intégrateur : le bon périmètre dépend de votre point de départ.",
  },
  "odoo-multi-societe": {
    path: "/outils/roi-erp",
    label: "Calculateur ROI ERP",
    description:
      "Estimez le gain d'une base unique multi-société vs plusieurs outils séparés.",
  },
  "site-web-ne-genere-aucun-client-10-causes": {
    path: "/outils/diagnostic-digital",
    label: "Diagnostic maturité digitale",
    description:
      "Votre site est-il trouvé, compris, actionnable ? Mesurez votre maturité digitale en 2 minutes.",
  },
  "site-web-relie-odoo-crm": {
    path: "/outils/diagnostic-digital",
    label: "Diagnostic maturité digitale",
    description:
      "Évaluez votre niveau de digitalisation : formulaires, CRM, suivi des demandes, mesure.",
  },
};

/* ------------------------------------------------------------------ *
 * Page component
 * ------------------------------------------------------------------ */

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  const hub = post ? getHubForPost(post) : undefined;
  const SITE = "https://msl-itech.com";

  const postImage = post ? blogImageBySlug[post.slug] : undefined;
  const articleImage = postImage
    ? postImage.startsWith("http")
      ? postImage
      : `${SITE}${postImage.startsWith("/") ? postImage : "/" + postImage}`
    : `${SITE}/og-default.png`;

  // Extract H2 headings for auto-TOC
  const tocItems = useMemo(() => {
    if (!post) return [];
    return post.body
      .filter((b): b is { type: "h2"; text: string } => b.type === "h2")
      .map((b) => ({ id: slugify(b.text), text: b.text }));
  }, [post]);

  const [tocOpen, setTocOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Breadcrumbs: Accueil › Blog › Hub › Article
  const breadcrumbs = post && hub
    ? [
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: hub.name, url: hub.pillarPath },
        { name: post.title, url: `/blog/${post.slug}` },
      ]
    : undefined;

  useProductSeo({
    title: post ? `${post.metaTitle} | MSL-iTECH` : "Blog — MSL-iTECH",
    description:
      post?.metaDescription ?? "Articles, conseils et analyses Odoo par MSL-iTECH.",
    path: post ? `/blog/${post.slug}` : "/blog",
    ogImage: post?.image,
    ogType: "article",
    faqs: post?.faqs,
    ldId: post?.faqs ? `ld-faq-blog-${post.slug}` : undefined,
    noIndex: post?.noIndex,
    breadcrumbs,
    article: post
      ? {
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt ?? post.publishedAt,
          authorName: post.author ?? "Équipe MSL-iTECH",
          image: articleImage,
          articleSection: post.category,
        }
      : undefined,
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
  const shareUrl = `https://msl-itech.com/blog/${post.slug}`;
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* no-op */ }
  };
  const shareLinks = [
    {
      label: "LinkedIn",
      icon: <IconLinkedIn />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      label: "X (Twitter)",
      icon: <IconX />,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
    },
    {
      label: "WhatsApp",
      icon: <IconWhatsApp />,
      href: `https://wa.me/?text=${encodeURIComponent(post.title + " " + shareUrl)}`,
    },
  ];
  const fmtDate = (s: string) =>
    new Date(s).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  // Mid-article tool injection at ~45 %
  const injectAfterIndex = relatedTool
    ? Math.min(
        Math.max(Math.ceil(post.body.length * 0.45) - 1, 2),
        post.body.length - 2,
      )
    : -1;

  // Build rendered body nodes
  const renderedBody: ReactNode[] = post.body.map((block, i) => {
    if (block.type === "h2") {
      const id = slugify(block.text);
      return (
        <h2 key={i} id={id} className="mt-10 scroll-mt-24 font-heading text-2xl font-bold text-brand-black md:text-3xl">
          {renderInlineLinks(block.text)}
        </h2>
      );
    }
    if (block.type === "h3") {
      return (
        <h3 key={i} className="mt-6 font-heading text-xl font-bold text-brand-black">
          {renderInlineLinks(block.text)}
        </h3>
      );
    }
    if (block.type === "ul") {
      return (
        <ul key={i} className="space-y-2 pl-5">
          {block.items.map((it, j) => (
            <li key={j} className="list-disc font-body text-base text-brand-grey marker:text-brand-blue">
              {renderInlineLinks(it)}
            </li>
          ))}
        </ul>
      );
    }
    if (block.type === "table") {
      return (
        <div key={i} className="my-6 overflow-x-auto rounded-xl border" style={{ borderColor: "var(--grey-light)" }}>
          <table className="w-full text-left font-body text-sm">
            <thead>
              <tr className="border-b bg-brand-bg" style={{ borderColor: "var(--grey-light)" }}>
                {block.headers.map((h, j) => (
                  <th key={j} className="px-4 py-3 font-semibold text-brand-black">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-b last:border-0" style={{ borderColor: "var(--grey-light)" }}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-brand-grey">{renderInlineLinks(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <p key={i} className="font-body text-base text-brand-grey">
        {renderInlineLinks(block.text)}
      </p>
    );
  });

  // Inject mid-article tool callout
  if (relatedTool && injectAfterIndex >= 0) {
    renderedBody.splice(
      injectAfterIndex + 1,
      0,
      <aside
        key="mid-tool"
        className="my-2 flex items-start gap-4 rounded-2xl p-5"
        style={{
          backgroundColor: "var(--blue-light)",
          borderLeft: "3px solid var(--blue)",
        }}
      >
        <Wrench size={18} className="mt-0.5 shrink-0 text-brand-blue" />
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Outil gratuit · {relatedTool.label}
          </p>
          <p className="mt-1.5 font-body text-sm text-brand-black">
            {relatedTool.description}
          </p>
          <Link
            to={relatedTool.path}
            className="mt-3 inline-flex items-center gap-1.5 font-body text-sm font-bold text-brand-blue hover:underline"
          >
            Lancer l'outil <ArrowRight size={13} />
          </Link>
        </div>
      </aside>,
    );
  }

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
          {/* Visual breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-white/60">
              <li>
                <Link to="/" className="transition hover:text-white">Accueil</Link>
              </li>
              <li aria-hidden><ChevronRight size={10} /></li>
              <li>
                <Link to="/blog" className="transition hover:text-white">Blog</Link>
              </li>
              {hub && (
                <>
                  <li aria-hidden><ChevronRight size={10} /></li>
                  <li>
                    <Link to={hub.pillarPath} className="transition hover:text-white">{hub.name}</Link>
                  </li>
                </>
              )}
              <li aria-hidden><ChevronRight size={10} /></li>
              <li aria-current="page" className="text-white/90 line-clamp-1 max-w-[200px]">{post.title}</li>
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
            <Sparkles size={12} /> {hub?.name ?? post.category}
          </p>

          {/* H1 = titre */}
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.1] md:text-5xl">
            {post.title}
          </h1>

          {/* Subtitle — answers the article's question */}
          <p className="mt-6 max-w-3xl font-body text-lg text-white/80">{post.excerpt}</p>

          {/* Meta: date, reading time, region */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <Calendar size={14} /> {fmtDate(post.publishedAt)}
            </span>
            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <span className="inline-flex items-center gap-2">
                <Pencil size={14} /> Mis à jour le {fmtDate(post.updatedAt)}
              </span>
            )}
            <span className="inline-flex items-center gap-2">
              <Clock size={14} /> {post.readingTime} de lecture
            </span>
            {post.region && (
              <span
                className="rounded-full px-2.5 py-0.5 text-xs"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                {post.region === "BE" ? "Belgique" : post.region === "MA" ? "Maroc" : "International"}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── COVER IMAGE ── */}
      {blogImageBySlug[post.slug] && (
        <section className="bg-background pt-10">
          <div className="container max-w-5xl">
            <div
              className="overflow-hidden rounded-[24px] border shadow-sm"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <img
                src={blogImageBySlug[post.slug]}
                alt={`Illustration : ${post.title}`}
                className="block aspect-[16/9] w-full object-cover"
                width={1280}
                height={720}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>
      )}

      {/* ── BODY ── */}
      <section className="bg-background py-20">
        <div className="container max-w-6xl">
          <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-14 xl:gap-20">

            {/* ── SIDEBAR — sticky, desktop only ── */}
            {tocItems.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-8">

                  {/* TOC */}
                  <nav aria-label="Sommaire de l'article">
                    <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
                      <List size={13} /> Sommaire
                    </p>
                    <ol className="space-y-3">
                      {tocItems.map((item, i) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="flex items-start gap-2.5 font-body text-sm text-brand-grey transition hover:text-brand-blue"
                          >
                            <span className="mt-0.5 shrink-0 font-mono text-[10px] text-brand-blue/40">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="leading-snug">{item.text}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>

                  {/* Divider */}
                  <div className="h-px" style={{ backgroundColor: "var(--grey-light)" }} />

                  {/* Share */}
                  <div>
                    <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
                      <Share2 size={13} /> Partager
                    </p>
                    <div className="flex flex-col gap-2">
                      {shareLinks.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 font-body text-sm text-brand-grey transition hover:border-brand-blue/40 hover:text-brand-blue"
                          style={{ borderColor: "var(--grey-light)" }}
                        >
                          {s.icon}
                          {s.label}
                        </a>
                      ))}
                      <button
                        onClick={copyLink}
                        className="inline-flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 font-body text-sm text-brand-grey transition hover:border-brand-blue/40 hover:text-brand-blue"
                        style={{ borderColor: "var(--grey-light)" }}
                      >
                        {copied
                          ? <Check size={14} className="text-green-600" />
                          : <Link2 size={14} />}
                        {copied ? "Lien copié !" : "Copier le lien"}
                      </button>
                    </div>
                  </div>

                </div>
              </aside>
            )}

            {/* ── ARTICLE ── */}
            <article className="min-w-0">

              {/* ── En bref ── */}
              {post.enBref && post.enBref.length > 0 && (
                <div
                  className="mb-10 rounded-2xl border p-6"
                  style={{ borderColor: "var(--blue)", backgroundColor: "rgba(18,77,90,0.04)" }}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <Lightbulb size={16} className="text-brand-blue" />
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                      En bref
                    </p>
                  </div>
                  <ul className="space-y-2 pl-5">
                    {post.enBref.map((item, i) => (
                      <li key={i} className="list-disc font-body text-sm text-brand-black marker:text-brand-blue">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ── TOC mobile (collapsible, masqué sur desktop) ── */}
              {tocItems.length > 2 && (
                <nav
                  className="mb-10 rounded-2xl border p-5 lg:hidden"
                  style={{ borderColor: "var(--grey-light)", backgroundColor: "var(--bg)" }}
                  aria-label="Sommaire de l'article"
                >
                  <button
                    onClick={() => setTocOpen(!tocOpen)}
                    className="flex w-full items-center justify-between font-body text-sm font-semibold text-brand-black"
                  >
                    <span className="inline-flex items-center gap-2">
                      <List size={16} className="text-brand-blue" />
                      Sommaire
                    </span>
                    <span className={`text-brand-blue transition-transform ${tocOpen ? "rotate-90" : ""}`}>
                      <ChevronRight size={16} />
                    </span>
                  </button>
                  {tocOpen && (
                    <ol className="mt-4 space-y-2 pl-5">
                      {tocItems.map((item, i) => (
                        <li key={item.id} className="font-body text-sm text-brand-grey">
                          <a href={`#${item.id}`} className="hover:text-brand-blue hover:underline">
                            {i + 1}. {item.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  )}
                </nav>
              )}

              {/* ── Article body ── */}
              <div className="space-y-6 font-body text-base leading-relaxed text-brand-black">
                {renderedBody}
              </div>

              {/* ── Ce que fait MSL-iTECH ── */}
              {hub && (
                <div
                  className="mt-14 rounded-[24px] border-2 p-6 md:p-8"
                  style={{ borderColor: "var(--blue)", backgroundColor: "rgba(18,77,90,0.04)" }}
                >
                  <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                    <Sparkles size={12} /> Ce que fait MSL-iTECH
                  </p>
                  <p className="mt-3 font-body text-base text-brand-grey">
                    {hub.mslBlock}
                  </p>
                  <Link
                    to={hub.ctaPath}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-bold text-brand-white shadow-[0_18px_40px_-15px_rgba(18,77,90,0.45)] transition hover:scale-[1.02]"
                    style={{ backgroundColor: "var(--blue)" }}
                  >
                    {hub.ctaLabel} <ArrowRight size={16} />
                  </Link>
                </div>
              )}

              {/* ── FAQ ── */}
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
                          <span className="ml-4 text-2xl leading-none text-brand-blue transition group-open:rotate-45">+</span>
                        </summary>
                        <p className="mt-3 font-body text-base text-brand-grey">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Author block ── */}
              <div
                className="mt-14 flex items-start gap-4 rounded-2xl border p-6"
                style={{ borderColor: "var(--grey-light)" }}
              >
                {post.author === "El Houssine BOUHMAIDA" ? (
                  <img
                    src={photoHoussine}
                    alt="El Houssine BOUHMAIDA"
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(18,77,90,0.08)" }}
                  >
                    <User size={20} className="text-brand-blue" />
                  </div>
                )}
                <div>
                  <p className="font-body text-sm font-semibold text-brand-black">
                    {post.author ?? "Équipe MSL-iTECH"}
                  </p>
                  <p className="font-body text-xs text-brand-grey">
                    Consultant{post.author ? "" : "s"} · Odoo Ready Partner
                  </p>
                  <Link to="/a-propos" className="mt-1 font-body text-xs text-brand-blue hover:underline">
                    En savoir plus sur notre équipe
                  </Link>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-brand-grey">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={11} /> Publié le {fmtDate(post.publishedAt)}
                    </span>
                    {post.updatedAt && post.updatedAt !== post.publishedAt && (
                      <span className="inline-flex items-center gap-1.5">
                        <Pencil size={11} /> Mis à jour le {fmtDate(post.updatedAt)}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* ── Share mobile (masqué sur desktop) ── */}
              <div className="mt-10 lg:hidden">
                <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
                  <Share2 size={13} /> Partager cet article
                </p>
                <div className="flex flex-wrap gap-2">
                  {shareLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 font-body text-sm text-brand-grey transition hover:border-brand-blue/40 hover:text-brand-blue"
                      style={{ borderColor: "var(--grey-light)" }}
                    >
                      {s.icon}
                      {s.label}
                    </a>
                  ))}
                  <button
                    onClick={copyLink}
                    className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 font-body text-sm text-brand-grey transition hover:border-brand-blue/40 hover:text-brand-blue"
                    style={{ borderColor: "var(--grey-light)" }}
                  >
                    {copied ? <Check size={14} className="text-green-600" /> : <Link2 size={14} />}
                    {copied ? "Lien copié !" : "Copier le lien"}
                  </button>
                </div>
              </div>

            </article>
          </div>
        </div>
      </section>

      {/* ── Related articles ── */}
      {(relatedPosts.length > 0 || hub) && (
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

            {/* 3 articles from the same hub */}
            {relatedPosts.length > 0 && (
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_20px_50px_-20px_rgba(18,77,90,0.3)]"
                    style={{ borderColor: "var(--grey-light)" }}
                  >
                    {blogImageBySlug[rp.slug] && (
                      <img
                        src={blogImageBySlug[rp.slug]}
                        alt={`Illustration : ${rp.title}`}
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
            )}

            {/* Pillar + service links */}
            {hub && (
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to={hub.pillarPath}
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-body text-sm font-semibold text-brand-blue transition hover:border-brand-blue/40 hover:shadow-sm"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  Tous les articles « {hub.name} » <ArrowRight size={14} />
                </Link>
                <Link
                  to={hub.defaultServicePath}
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-body text-sm font-semibold text-brand-black transition hover:border-brand-blue/40 hover:shadow-sm"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  Voir la page service associée <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
