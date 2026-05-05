import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  acceptAll,
  CONSENT_EVENT,
  getConsent,
  rejectAll,
  setConsent,
} from "./consent";

describe("consent store", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  afterEach(() => {
    localStorage.clear();
  });

  it("returns the default state when nothing has been stored", () => {
    const s = getConsent();
    expect(s.decided).toBe(false);
    expect(s.categories.necessary).toBe(true);
    expect(s.categories.analytics).toBe(false);
    expect(s.categories.marketing).toBe(false);
  });

  it("acceptAll persists analytics + marketing as true", () => {
    const s = acceptAll();
    expect(s.decided).toBe(true);
    expect(s.categories.analytics).toBe(true);
    expect(s.categories.marketing).toBe(true);
    expect(getConsent().categories.analytics).toBe(true);
  });

  it("rejectAll persists analytics + marketing as false but keeps necessary", () => {
    const s = rejectAll();
    expect(s.decided).toBe(true);
    expect(s.categories.analytics).toBe(false);
    expect(s.categories.marketing).toBe(false);
    expect(s.categories.necessary).toBe(true);
  });

  it("setConsent allows partial granular updates", () => {
    const s = setConsent({ analytics: true, marketing: false });
    expect(s.categories.analytics).toBe(true);
    expect(s.categories.marketing).toBe(false);
  });

  it("dispatches a consentchange event on update", () => {
    const listener = vi.fn();
    window.addEventListener(CONSENT_EVENT, listener);
    acceptAll();
    expect(listener).toHaveBeenCalledTimes(1);
    window.removeEventListener(CONSENT_EVENT, listener);
  });

  it("ignores corrupted storage gracefully", () => {
    localStorage.setItem("msl_consent_v1", "{not json");
    const s = getConsent();
    expect(s.decided).toBe(false);
  });
});