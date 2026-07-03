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
        .find((j) => j["@type"] === "FAQPage");
      expect(faq).toBeTruthy();
      expect(faq.mainEntity[0].name).toBe("Q1?");
    });
  });
});