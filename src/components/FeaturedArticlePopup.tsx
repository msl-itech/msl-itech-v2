import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, X, Clock } from "lucide-react";
import facturationImg from "@/assets/blog/facturation-electronique-obligatoire-maroc.jpg";

const STORAGE_KEY = "msl-featured-popup-facturation-2026";
const DELAY_MS = 2500;

export function FeaturedArticlePopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    const t = window.setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setOpen(true));
    }, DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
    window.setTimeout(() => setMounted(false), 300);
  };

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="featured-popup-title"
      className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        aria-label="Fermer"
        onClick={close}
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
      />
      <div
        className={`relative z-10 w-full max-w-3xl overflow-hidden rounded-[28px] bg-white shadow-[0_40px_120px_-20px_rgba(15,63,74,0.55)] transition-all duration-500 ${
          open ? "translate-y-0 scale-100" : "translate-y-6 scale-[0.97]"
        }`}
        style={{ borderTop: "6px solid var(--gold)" }}
      >
        <button
          onClick={close}
          aria-label="Fermer la fenêtre"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-black shadow-md transition hover:scale-105 hover:bg-white"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image side */}
          <div className="relative hidden min-h-[320px] md:block">
            <img
              src={facturationImg}
              alt="Facturation électronique obligatoire au Maroc"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(15,63,74,0.35) 0%, rgba(15,63,74,0.05) 60%)",
              }}
            />
            <span
              className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] shadow-md"
              style={{ backgroundColor: "var(--gold)", color: "#0F3F4A" }}
            >
              <Sparkles size={11} /> À la une
            </span>
          </div>

          {/* Content side */}
          <div className="relative p-7 md:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-30 blur-3xl"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <p
              className="font-mono text-[11px] uppercase tracking-[0.22em]"
              style={{ color: "#0F3F4A" }}
            >
              🇲🇦 Conformité & DGI · 2026
            </p>
            <h2
              id="featured-popup-title"
              className="mt-3 font-heading text-2xl font-bold leading-tight text-brand-black md:text-[26px]"
            >
              Facturation électronique obligatoire au Maroc :{" "}
              <span className="italic font-light" style={{ color: "#0F3F4A" }}>
                pourquoi le papier ne suffit plus
              </span>{" "}
              — et comment basculer vers un ERP.
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-brand-grey">
              Carnets à souches, Word et Excel : c'est fini. Découvrez les vrais
              points de douleur et comment vous mettre en conformité sereinement.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-xs text-brand-grey">
              <Clock size={13} /> 11 min de lecture
            </div>

            <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center">
              <Link
                to="/blog/facturation-electronique-obligatoire-maroc-2026-erp"
                onClick={close}
                className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-bold text-brand-black shadow-[0_14px_36px_-12px_rgba(255,221,87,0.7)] transition hover:scale-[1.02]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Lire l'article
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
              <button
                onClick={close}
                className="rounded-full px-5 py-3 font-body text-sm text-brand-grey transition hover:text-brand-black"
              >
                Plus tard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedArticlePopup;