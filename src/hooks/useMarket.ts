export type Market = "BE" | "MA";

const STORAGE_KEY = "market-override";

function readOverride(): Market | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "BE" || v === "MA" ? v : null;
}

/** Test helper: force market in localStorage. Pass null to clear. */
export function setMarketOverride(market: Market | null) {
  if (typeof window === "undefined") return;
  if (market === null) window.localStorage.removeItem(STORAGE_KEY);
  else window.localStorage.setItem(STORAGE_KEY, market);
}

/**
 * Reads the X-Market header injected by the Cloudflare Worker.
 * A localStorage override (`market-override`) takes precedence — used for QA.
 * Falls back to 'BE' when neither override nor header is present.
 */
export function useMarket(): { market: Market } {
  // Marché forcé sur MA : la cible belge a été retirée du marketing.
  return { market: "MA" };
}