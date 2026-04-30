import { useEffect, useState } from "react";

export type Market = "BE" | "MA";

/**
 * Reads the X-Market header injected by the Cloudflare Worker.
 * Falls back to 'BE' when the header is missing or unreachable.
 *
 * The header is fetched via a HEAD request to the current page so the
 * Worker can echo it back. If unavailable, BE is used.
 */
export function useMarket(): { market: Market } {
  const [market, setMarket] = useState<Market>("BE");

  useEffect(() => {
    let cancelled = false;
    fetch(window.location.pathname, { method: "HEAD" })
      .then((res) => {
        const header = res.headers.get("X-Market");
        if (!cancelled && (header === "BE" || header === "MA")) {
          setMarket(header);
        }
      })
      .catch(() => {
        /* keep default 'BE' */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { market };
}