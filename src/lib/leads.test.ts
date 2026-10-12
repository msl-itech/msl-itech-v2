import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { submitLead, clearLegacyPendingLeads } from "./leads";

describe("submitLead", () => {
  const lead = {
    name: "Jane Doe — Acme",
    contact_name: "Jane Doe",
    email_from: "jane@acme.test",
    source: "test-suite",
  };

  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });
  afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("returns success: ok when the API call succeeds", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), { status: 200 })
    );
    const res = await submitLead(lead);
    expect(res).toEqual({ success: true, message: "ok" });
    expect(localStorage.getItem("pending_leads")).toBeNull();
  });

  it("throws when the API errors out (no localStorage fallback)", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response("nope", { status: 500 })
    );
    await expect(submitLead(lead)).rejects.toThrow("HTTP 500");
    expect(localStorage.getItem("pending_leads")).toBeNull();
  });

  it("throws when fetch throws (offline)", async () => {
    vi.spyOn(global, "fetch").mockRejectedValue(new Error("network down"));
    await expect(submitLead(lead)).rejects.toThrow("network down");
    expect(localStorage.getItem("pending_leads")).toBeNull();
  });
});

describe("clearLegacyPendingLeads", () => {
  it("removes pending_leads from localStorage", () => {
    localStorage.setItem("pending_leads", JSON.stringify([{ data: {}, savedAt: new Date().toISOString(), status: "pending" }]));
    clearLegacyPendingLeads();
    expect(localStorage.getItem("pending_leads")).toBeNull();
  });

  it("does nothing when no pending_leads exist", () => {
    clearLegacyPendingLeads();
    expect(localStorage.getItem("pending_leads")).toBeNull();
  });
});
