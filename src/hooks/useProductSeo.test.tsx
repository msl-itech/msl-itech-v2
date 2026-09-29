import { readFileSync } from "fs";
import { resolve } from "path";
import { afterEach, describe, expect, it } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { GlobalSEO, useProductSeo } from "./useProductSeo";

function Harness({ opts }: { opts: Parameters<typeof useProductSeo>[0] }) {
  useProductSeo(opts);
  return <GlobalSEO />;
}

function renderSeo(opts: Parameters<typeof useProductSeo>[0]) {
  render(
    <HelmetProvider>
      <Harness opts={opts} />
    </HelmetProvider>,
  );
}

function meta(selector: string) {
  return document.head
    .querySelector<HTMLMetaElement>(selector)
    ?.getAttribute("content");
}

describe("useProductSeo", () => {
  afterEach(() => {
    document.head
      .querySelectorAll(
        'meta[property^="og:"], meta[name^="twitter:"], meta[name="description"], meta[name="robots"]',
      )
      .forEach((el) => el.remove());
    document.head
      .querySelectorAll('link[rel="canonical"]')
      .forEach((el) => el.remove());
    document.head
      .querySelectorAll('script[type="application/ld+json"]')
      .forEach((el) => el.remove());
    document.title = "";
  });

  it("sets title, description, canonical, OG and Twitter tags", async () => {
    renderSeo({
      title: "Test Page — MSL",
      description: "Une description test pour le SEO.",
      path: "/test-path",
    });

    await waitFor(() => expect(document.title).toBe("Test Page — MSL"));
    expect(meta('meta[name="description"]')).toBe(
      "Une description test pour le SEO."
    );
    expect(meta('meta[property="og:title"]')).toBe("Test Page — MSL");
    expect(meta('meta[property="og:type"]')).toBe("website");
    expect(meta('meta[property="og:image"]')).toMatch(/og-default\.jpg$/);
    expect(meta('meta[name="twitter:card"]')).toBe("summary_large_image");

    const canonical = document.head
      .querySelector('link[rel="canonical"]')
      ?.getAttribute("href");
    expect(canonical).toContain("/test-path");
  });

  it("supports a custom ogImage", async () => {
    renderSeo({
      title: "Article",
      description: "Article description",
      path: "/blog/x",
      ogImage: "/custom.jpg",
      ogType: "article",
    });
    await waitFor(() =>
      expect(meta('meta[property="og:image"]')).toContain("/custom.jpg"),
    );
  });

  // ── Régression doublon robots ────────────────────────────────────────────
  // index.html ne doit PAS contenir de <meta name="robots"> statique.
  // Si elle revient, le prérendu Lovable sert deux balises robots à Googlebot :
  // la statique (index,follow) + celle de Helmet (noindex,nofollow sur les pages
  // noIndex). Google applique la plus restrictive → pages indexables désindexées.
  it("index.html ne contient aucune balise robots statique", () => {
    const html = readFileSync(resolve(process.cwd(), "index.html"), "utf8");
    const matches = html.match(/<meta[^>]+name=["']robots["'][^>]*>/gi) ?? [];
    expect(
      matches,
      "Balise <meta name=\"robots\"> trouvée dans index.html — supprimer la ligne (SEOHead gère robots par page)"
    ).toHaveLength(0);
  });

  it("injecte exactement une balise robots par page (pas de doublon Helmet)", async () => {
    renderSeo({ title: "Page test", description: "Desc", path: "/test" });
    await waitFor(() => {
      const tags = document.head.querySelectorAll('meta[name="robots"]');
      expect(tags, "Plus d'une balise robots dans le head").toHaveLength(1);
      expect(tags[0].getAttribute("content")).toContain("index, follow");
    });
  });

  it("injecte noindex,nofollow quand noIndex=true", async () => {
    renderSeo({ title: "Page noindex", description: "Desc", path: "/draft", noIndex: true });
    await waitFor(() => {
      const tags = document.head.querySelectorAll('meta[name="robots"]');
      expect(tags).toHaveLength(1);
      expect(tags[0].getAttribute("content")).toBe("noindex, nofollow");
    });
  });

  it("emits a FAQPage JSON-LD when faqs are provided", async () => {
    renderSeo({
      title: "FAQ page",
      description: "...",
      path: "/faq",
      ldId: "ld-faq-test",
      faqs: [{ q: "Q1?", a: "A1." }],
    });
    await waitFor(() => {
      const scripts = Array.from(
        document.head.querySelectorAll<HTMLScriptElement>(
          'script[type="application/ld+json"]',
        ),
      );
      const faq = scripts
        .map((s) => JSON.parse(s.textContent ?? "{}"))
        .flatMap((j) => (j["@graph"] ? j["@graph"] : [j]))
        .find((j) => j["@type"] === "FAQPage");
      expect(faq).toBeTruthy();
      expect(faq.mainEntity[0].name).toBe("Q1?");
    });
  });
});