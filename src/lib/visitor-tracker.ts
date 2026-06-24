// Visitor tracker — score comportemental côté client
// Données persistées en localStorage (long terme) + sessionStorage (session courante)

const TRACKER_KEY = "msl_visitor";
const SESSION_KEY = "msl_session";

interface Tracker {
  visitCount: number;
  source: string;
  utm_campaign?: string;
  sector?: string;
  prenom?: string;
  email?: string;
  diagnosticDone?: boolean;
  checklistDownloaded?: boolean;
  firstSeenAt: string;
}

interface Session {
  pages: string[];
  startTime: number;
}

function read<T>(storage: Storage, key: string, fallback: T): T {
  try {
    const raw = storage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(storage: Storage, key: string, value: unknown): void {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {
    /* noop */
  }
}

export function initTracker(): void {
  if (typeof window === "undefined") return;

  const tracker = read<Tracker | null>(localStorage, TRACKER_KEY, null);
  const params = new URLSearchParams(window.location.search);
  const utm = params.get("utm_campaign") ?? undefined;
  const referrer = document.referrer || "direct";

  if (!tracker) {
    write(localStorage, TRACKER_KEY, {
      visitCount: 1,
      source: referrer,
      utm_campaign: utm,
      firstSeenAt: new Date().toISOString(),
    } satisfies Tracker);
  } else {
    // Une nouvelle session = visite supplémentaire
    const existingSession = read<Session | null>(sessionStorage, SESSION_KEY, null);
    if (!existingSession) {
      write(localStorage, TRACKER_KEY, {
        ...tracker,
        visitCount: tracker.visitCount + 1,
        utm_campaign: utm ?? tracker.utm_campaign,
      });
    }
  }

  const session = read<Session | null>(sessionStorage, SESSION_KEY, null);
  if (!session) {
    write(sessionStorage, SESSION_KEY, {
      pages: [window.location.pathname],
      startTime: Date.now(),
    } satisfies Session);
  }
}

export function trackPageVisit(pathname: string): void {
  if (typeof window === "undefined") return;
  const session = read<Session>(sessionStorage, SESSION_KEY, {
    pages: [],
    startTime: Date.now(),
  });
  if (session.pages[session.pages.length - 1] !== pathname) {
    session.pages.push(pathname);
    write(sessionStorage, SESSION_KEY, session);
  }
}

export function setTrackerField(patch: Partial<Tracker>): void {
  if (typeof window === "undefined") return;
  const tracker = read<Tracker | null>(localStorage, TRACKER_KEY, null);
  if (!tracker) return;
  write(localStorage, TRACKER_KEY, { ...tracker, ...patch });
}

export function getTracker(): Tracker | null {
  if (typeof window === "undefined") return null;
  return read<Tracker | null>(localStorage, TRACKER_KEY, null);
}

export function getSession(): Session {
  if (typeof window === "undefined") return { pages: [], startTime: Date.now() };
  return read<Session>(sessionStorage, SESSION_KEY, { pages: [], startTime: Date.now() });
}

export function computeBehaviorScore(): number {
  const tracker = getTracker();
  const session = getSession();
  if (!tracker) return 0;

  let score = 0;
  const pages = session.pages;

  // Pages à fort signal d'achat
  if (pages.some((p) => p.startsWith("/notre-approche") || p.startsWith("/tarif-"))) score += 3;
  if (pages.some((p) => p.startsWith("/prendre-rendez-vous"))) score += 4;
  if (pages.some((p) => p.startsWith("/contact"))) score += 3;
  if (pages.some((p) => p.startsWith("/realisations"))) score += 1;
  if (pages.length > 3) score += 1;
  if (tracker.visitCount >= 2) score += 3;
  if (tracker.diagnosticDone) score += 4;
  if (tracker.checklistDownloaded) score += 2;

  const elapsedSeconds = (Date.now() - session.startTime) / 1000;
  if (elapsedSeconds > 180) score += 2;

  return score;
}

export function getElapsedMinutes(): number {
  const session = getSession();
  return Math.round((Date.now() - session.startTime) / 60000);
}