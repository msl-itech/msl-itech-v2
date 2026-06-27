/**
 * Capture, persistance et restitution des UTM (sessionStorage).
 * Utilisé par le tunnel "Outils" pour rattacher chaque lead à sa source.
 */
export type Utm = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
  referrer?: string;
  landing?: string;
};

const KEY = "msl_utm";

function readStored(): Utm {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Utm) : {};
  } catch {
    return {};
  }
}

function write(utm: Utm) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(utm));
  } catch {
    /* noop */
  }
}

/** À appeler au montage de chaque outil — capture les UTM en cours et complète la session. */
export function captureUtm(): Utm {
  if (typeof window === "undefined") return {};
  const stored = readStored();
  const params = new URLSearchParams(window.location.search);
  const next: Utm = { ...stored };
  const map: Array<[keyof Utm, string]> = [
    ["source", "utm_source"],
    ["medium", "utm_medium"],
    ["campaign", "utm_campaign"],
    ["content", "utm_content"],
    ["term", "utm_term"],
  ];
  for (const [field, qs] of map) {
    const v = params.get(qs);
    if (v && !next[field]) next[field] = v;
  }
  if (!next.referrer && document.referrer) next.referrer = document.referrer;
  if (!next.landing) next.landing = window.location.pathname;
  write(next);
  return next;
}

export function getUtm(): Utm {
  return readStored();
}

export function formatUtmForOdoo(utm: Utm): string {
  const parts: string[] = [];
  if (utm.source) parts.push(`source=${utm.source}`);
  if (utm.medium) parts.push(`medium=${utm.medium}`);
  if (utm.campaign) parts.push(`campaign=${utm.campaign}`);
  if (utm.content) parts.push(`content=${utm.content}`);
  if (utm.term) parts.push(`term=${utm.term}`);
  return parts.join(" · ");
}