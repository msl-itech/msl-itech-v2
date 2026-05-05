import { afterEach, describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { useProductSeo } from "./useProductSeo";

function meta(selector: string) {
  return document.head
    .querySelector<HTMLMetaElement>(selector)
    ?.getAttribute("content");
}

describe("useProductSeo", () => {
  afterEach(() => {
    document.head
      .querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="description"]')
      .forEach((el) => el.remove());
    document.head
      .querySelectorAll('link[rel="canonical"]')
      .forEach((el) => el.remove());
    document.title = "";
  });

  it("sets title, description, canonical, OG and Twitter tags", () => {
    renderHook(() =>
      useProductSeo({
        title: "Test Page — MSL",
        description: "Une description test pour le SEO.",
        path: "/test-path",
      })
    );

    expect(document.title).toBe("Test Page — MSL");
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

  it("supports article ogType and a custom ogImage", () => {
    renderHook(() =>
      useProductSeo({
        title: "Article",
        description: "Article description",
        path: "/blog/x",
        ogImage: "/custom.jpg",
        ogType: "article",
      })
    );
    expect(meta('meta[property="og:type"]')).toBe("article");
    expect(meta('meta[property="og:image"]')).toContain("/custom.jpg");
  });

  it("emits a FAQPage JSON-LD when faqs and ldId are provided", () => {
    renderHook(() =>
      useProductSeo({
        title: "FAQ page",
        description: "...",
        path: "/faq",
        ldId: "ld-faq-test",
        faqs: [{ q: "Q1?", a: "A1." }],
      })
    );
    const ld = document.getElementById("ld-faq-test");
    expect(ld).not.toBeNull();
    const json = JSON.parse(ld!.textContent ?? "{}");
    expect(json["@type"]).toBe("FAQPage");
    expect(json.mainEntity[0].name).toBe("Q1?");
  });
});