import { lazy, type ComponentType } from "react";

const RELOAD_KEY = "chunk-reload-attempt";

/**
 * lazy() with recovery for stale build chunks.
 * After a new deploy, previously cached chunk URLs no longer exist and the
 * dynamic import rejects with "Failed to fetch dynamically imported module".
 * We retry once, then force a single hard reload to pick up the new manifest.
 */
export function lazyRetry<T extends ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>,
) {
  return lazy(async () => {
    try {
      const mod = await factory();
      sessionStorage.removeItem(RELOAD_KEY);
      return mod;
    } catch (error) {
      // one silent retry (transient network / cache miss)
      try {
        const mod = await factory();
        sessionStorage.removeItem(RELOAD_KEY);
        return mod;
      } catch (retryError) {
        const alreadyReloaded = sessionStorage.getItem(RELOAD_KEY) === "1";
        if (!alreadyReloaded) {
          sessionStorage.setItem(RELOAD_KEY, "1");
          window.location.reload();
          // never resolves — the page is reloading
          return new Promise<{ default: T }>(() => {});
        }
        throw retryError;
      }
    }
  });
}
