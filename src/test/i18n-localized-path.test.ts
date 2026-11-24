import { describe, it, expect } from "vitest";
import { localizedPath, tagMessageForLang, TRANSLATED_ROUTES } from "@/lib/i18n";

describe("localizedPath", () => {
  it("keeps the French path untouched in French", () => {
    expect(localizedPath("/contact", "fr")).toBe("/contact");
  });
  it("falls back to the French path in English when no translation exists", () => {
    expect(TRANSLATED_ROUTES["/realisations"]).toBeUndefined();
    expect(localizedPath("/realisations", "en")).toBe("/realisations");
  });
  it("uses the English path when translated, keeping the query string", () => {
    TRANSLATED_ROUTES["/__t"] = "/en/__t";
    expect(localizedPath("/__t?score=40", "en")).toBe("/en/__t?score=40");
    delete TRANSLATED_ROUTES["/__t"];
  });
});

describe("tagMessageForLang", () => {
  it("prefixes [EN] only for English pages", () => {
    expect(tagMessageForLang("Bonjour", "fr")).toBe("Bonjour");
    expect(tagMessageForLang("Hello", "en")).toBe("[EN] Hello");
  });
});
