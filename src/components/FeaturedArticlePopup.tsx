import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, X, Clock } from "lucide-react";

const STORAGE_KEY = "msl-featured-popup-facturation-2026";
const DELAY_MS = 2500;
const AUTO_CLOSE_MS = 15000; // 15 secondes

export function FeaturedArticlePopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;

    const showTimer = window.setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setOpen(true));
    }, DELAY_MS);

    return () => window.clearTimeout(showTimer);
  }, []);

  // Auto-fermeture après quelques secondes
  useEffect(() => {
    if (!open) return;
    const autoCloseTimer = window.setTimeout(() => {
      close();
    }, AUTO_CLOSE_MS);
    return () => window.clearTimeout(autoCloseTimer);
  }, [open]);

  const close = () => {
    setOpen(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
    window.setTimeout(() => setMounted(false), 400);
  };

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="featured-popup-title"
      className={`fixed bottom-4 left-4 z-[100] max-w-[380px] transition-all duration-500 ease-out ${
        open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div
        className="relative overflow-hidden rounded-2xl border bg-white shadow-[0_12px_40px_-8px_rgba(15,63,74,0.35)]"
        style={{ borderColor: "var(--grey-light)", borderTop: "3px solid var(--gold)" }}
      >
        {/* Barre de vie avant auto-fermeture */}
        <div className="absolute left-0 top-0 h-[3px] w-full overflow-hidden rounded-t-2xl">
          <div
            className="h-full origin-left animate-[shrink_15s_linear_forwards]"
            style={{ backgroundColor: "var(--gold)" }}
          />
        </div>

        <button
          onClick={close}
          aria-label="Fermer"
          className="absolute right-2 top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full text-brand-grey transition hover:bg-brand-bg hover:text-brand-black"
        >
          <X size={14} />
        </button>

        <div className="p-4 pt-5">
          <div className="flex items-start gap-3">
            <span
              className="inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em]"
              style={{ backgroundColor: "var(--gold)", color: "#0F3F4A" }}
            >
              <Sparkles size={10} /> À la une
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
              🇲🇦 Conformité & DGI · 2026
            </p>
          </div>

          <h2
            id="featured-popup-title"
            className="mt-2.5 font-heading text-sm font-bold leading-snug text-brand-black"
          >
            Facturation électronique obligatoire au Maroc{" "}
            <span className="font-light italic" style={{ color: "#0F3F4A" }}>
              — le papier ne suffit plus
            </span>
          </h2>

          <div className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] text-brand-grey">
            <Clock size={11} /> 11 min
          </div>

          <div className="mt-3">
            <Link
              to="/blog/facturation-electronique-obligatoire-maroc-2026-erp"
              onClick={close}
              className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-body text-xs font-bold text-brand-black shadow-[0_8px_24px_-8px_rgba(255,221,87,0.6)] transition hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Lire l'article
              <ArrowRight
                size={13}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shrink {
          from { transform: scaleX(1); }
          to { transform: scaleX(0); }
        }
      `}</style>
    </div>
  );
}

export default FeaturedArticlePopup;
