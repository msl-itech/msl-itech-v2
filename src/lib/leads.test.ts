import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { submitLead } from "./leads";

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

  it("falls back to localStorage when the API errors out", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response("nope", { status: 500 })
    );
    const res = await submitLead(lead);
    expect(res.success).toBe(true);
    expect(res.message).toBe("fallback");
    const raw = localStorage.getItem("pending_leads");
    expect(raw).not.toBeNull();
    const stored = JSON.parse(raw!);
    expect(stored).toHaveLength(1);
    expect(stored[0].data.email_from).toBe("jane@acme.test");
    expect(stored[0].status).toBe("pending");
  });

  it("falls back to localStorage when fetch throws (offline)", async () => {
    vi.spyOn(global, "fetch").mockRejectedValue(new Error("network down"));
    const res = await submitLead(lead);
    expect(res.message).toBe("fallback");
    expect(localStorage.getItem("pending_leads")).not.toBeNull();
  });

  it("never throws — UX must not be blocked by Odoo", async () => {
    vi.spyOn(global, "fetch").mockImplementation(() => {
      throw new Error("sync boom");
    });
    await expect(submitLead(lead)).resolves.toMatchObject({ success: true });
  });
});