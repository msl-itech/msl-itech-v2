import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { getAlternates, langFromPath, TRANSLATED_ROUTES } from "./i18n";
import { renderSitemapXml } from "./sitemap-routes";
import { GlobalSEO, useProductSeo } from "@/hooks/useProductSeo";

// Table de test : simule deux pages traduites, puis restaure l'état réel.
const SAMPLE: Record<string, string> = {
  "/": "/en",
  "/a-propos": "/en/about",
};
let saved: Record<string, string> = {};

beforeEach(() => {
  saved = { ...TRANSLATED_ROUTES };
  Object.keys(TRANSLATED_ROUTES).forEach((k) => delete TRANSLATED_ROUTES[k]);
  Object.assign(TRANSLATED_ROUTES, SAMPLE);
});

afterEach(() => {
  Object.keys(TRANSLATED_ROUTES).forEach((k) => delete TRANSLATED_ROUTES[k]);
  Object.assign(TRANSLATED_ROUTES, saved);
  document.head.querySelectorAll('link[rel="alternate"], link[rel="canonical"]').forEach((el) => el.remove());
});

describe("i18n — langue et alternatives", () => {
  it("déduit la langue du chemin", () => {
    expect(langFromPath("/")).toBe("fr");
    expect(langFromPath("/a-propos")).toBe("fr");
    expect(langFromPath("/en")).toBe("en");
    expect(langFromPath("/en/about")).toBe("en");
    expect(langFromPath("/entreprise-multi-sites")).toBe("fr"); // préfixe "/en" sans slash
  });

  it("ne déclare l'anglais que pour les pages traduites", () => {
    expect(getAlternates("/a-propos")).toEqual({ fr: "/a-propos", en: "/en/about" });
    expect(getAlternates("/en/about")).toEqual({ fr: "/a-propos", en: "/en/about" });
    expect(getAlternates("/contact")).toEqual({ fr: "/contact" });
  });
});

describe("sitemap bilingue", () => {
  it("ajoute les URL /en et les liens hreflang réciproques", () => {
    const xml = renderSitemapXml();
    expect(xml).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"');
    expect(xml).toContain("<loc>https://msl-itech.com/en/about</loc>");
    expect(xml).toContain('hreflang="en" href="https://msl-itech.com/en/about"');
    expect(xml).toContain('hreflang="x-default" href="https://msl-itech.com/a-propos"');
    // Une page non traduite n'a ni URL /en ni lien hreflang
    expect(xml).not.toContain("https://msl-itech.com/en/contact");
  });
});

function Harness({ path }: { path: string }) {
  useProductSeo({ title: "T", description: "D", path });
  return <GlobalSEO />;
}

function hreflangs() {
  return Array.from(document.head.querySelectorAll<HTMLLinkElement>('link[rel="alternate"]')).map(
    (l) => `${l.getAttribute("hreflang")}=${l.getAttribute("href")}`,
  );
}

describe("balises du head", () => {
  it("page traduite : fr, en, x-default et <html lang>", async () => {
    render(
      <HelmetProvider>
        <Harness path="/en/about" />
      </HelmetProvider>,
    );
    await waitFor(() => expect(document.documentElement.getAttribute("lang")).toBe("en"));
    expect(hreflangs()).toEqual([
      "fr=https://msl-itech.com/a-propos",
      "en=https://msl-itech.com/en/about",
      "x-default=https://msl-itech.com/a-propos",
    ]);
  });

  it("page non traduite : fr et x-default seulement", async () => {
    render(
      <HelmetProvider>
        <Harness path="/contact" />
      </HelmetProvider>,
    );
    await waitFor(() => expect(hreflangs().length).toBe(2));
    expect(hreflangs()).toEqual([
      "fr=https://msl-itech.com/contact",
      "x-default=https://msl-itech.com/contact",
    ]);
  });
});
