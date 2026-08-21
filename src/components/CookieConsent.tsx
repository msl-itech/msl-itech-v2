import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, ShieldCheck, BarChart3, Megaphone, X } from "lucide-react";
import {
  acceptAll,
  getConsent,
  OPEN_PREFERENCES_EVENT,
  rejectAll,
  setConsent,
  type ConsentState,
} from "@/lib/consent";

export function CookieConsent() {
  const [state, setState] = useState<ConsentState>(() => getConsent());
  const [showBanner, setShowBanner] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Initial check + open-from-footer event
  useEffect(() => {
    const current = getConsent();
    setState(current);
    setAnalytics(current.categories.analytics);
    setMarketing(current.categories.marketing);
    if (!current.decided) {
      // small delay so the banner doesn't fight the page reveal
      const t = window.setTimeout(() => setShowBanner(true), 600);
      return () => window.clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const open = () => {
      const current = getConsent();
      setAnalytics(current.categories.analytics);
      setMarketing(current.categories.marketing);
      setShowPrefs(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, open);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, open);
  }, []);

  const handleAcceptAll = () => {
    setState(acceptAll());
    setShowBanner(false);
    setShowPrefs(false);
  };
  const handleRejectAll = () => {
    setState(rejectAll());
    setShowBanner(false);
    setShowPrefs(false);
  };
  const handleSave = () => {
    setState(setConsent({ analytics, marketing }));
    setShowBanner(false);
    setShowPrefs(false);
  };

  return (
    <>
      {/* BANNER */}
      {showBanner && !showPrefs && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Bandeau de consentement aux cookies"
          className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5"
        >
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border-2 border-brand-black/10 bg-brand-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]">
            <div className="grid gap-5 p-5 md:grid-cols-[1fr_auto] md:items-center md:gap-6 md:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold text-brand-blue">
                  <Cookie className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-base font-bold text-brand-black md:text-lg">
                    Vos cookies, votre choix
                  </p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-brand-black/75">
                    Nous utilisons des cookies essentiels au fonctionnement du site et,
                    avec votre accord, des cookies de mesure d'audience (Google Analytics,
                    Microsoft Clarity) pour améliorer votre expérience. Aucun cookie analytique
                    ou marketing n'est déposé sans votre consentement.{" "}
                    <Link
                      to="/politique-de-confidentialite"
                      className="font-medium text-brand-blue hover:underline"
                    >
                      En savoir plus
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-end">
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="rounded-full border-2 border-brand-black/15 bg-brand-white px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-brand-black transition hover:border-brand-black"
                >
                  Tout refuser
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPrefs(true);
                  }}
                  className="rounded-full border-2 border-brand-blue/15 bg-brand-bg px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-brand-blue transition hover:border-brand-blue"
                >
                  Personnaliser
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="rounded-full bg-brand-gold px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-brand-blue shadow-[0_8px_24px_-8px_hsl(var(--foreground)/0.4)] transition hover:scale-[1.02]"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PREFERENCES MODAL */}
      {showPrefs && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Préférences cookies"
          className="fixed inset-0 z-[70] flex items-end justify-center bg-brand-black/50 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget && state.decided) setShowPrefs(false);
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border-2 border-brand-black/10 bg-brand-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.4)]">
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between border-b-2 border-brand-black/5 bg-brand-white p-5 md:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gold text-brand-blue">
                  <Cookie className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                    Confidentialité
                  </p>
                  <h2 className="font-heading text-lg font-bold text-brand-black">
                    Gérer mes cookies
                  </h2>
                </div>
              </div>
              {state.decided && (
                <button
                  type="button"
                  onClick={() => setShowPrefs(false)}
                  aria-label="Fermer"
                  className="rounded-full p-2 text-brand-black/60 transition hover:bg-brand-bg hover:text-brand-black"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="space-y-3 p-5 md:p-6">
              <p className="font-body text-sm text-brand-black/75">
                Choisissez les catégories de cookies que vous autorisez. Vous pouvez
                modifier vos choix à tout moment depuis le footer.
              </p>

              <Category
                icon={ShieldCheck}
                title="Strictement nécessaires"
                description="Indispensables au fonctionnement du site (session, sécurité, préférences). Toujours actifs."
                checked
                disabled
              />
              <Category
                icon={BarChart3}
                title="Mesure d'audience"
                description="Google Analytics (anonymisation IP) + Microsoft Clarity (enregistrements de session). Nous aident à comprendre l'usage du site et améliorer l'expérience."
                checked={analytics}
                onChange={setAnalytics}
              />
              <Category
                icon={Megaphone}
                title="Marketing"
                description="Permet de mesurer la performance de nos campagnes et de vous proposer des contenus pertinents."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 flex flex-col gap-2 border-t-2 border-brand-black/5 bg-brand-white p-5 md:flex-row md:items-center md:justify-between md:p-6">
              <Link
                to="/politique-de-confidentialite"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-blue hover:underline"
                onClick={() => setShowPrefs(false)}
              >
                Politique de confidentialité →
              </Link>
              <div className="flex flex-col gap-2 md:flex-row">
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="rounded-full border-2 border-brand-black/15 bg-brand-white px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-brand-black transition hover:border-brand-black"
                >
                  Tout refuser
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="rounded-full bg-brand-blue px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-brand-white transition hover:bg-brand-blue/90"
                >
                  Enregistrer mes choix
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="rounded-full bg-brand-gold px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-brand-blue transition hover:scale-[1.02]"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Category({
  icon: Icon,
  title,
  description,
  checked,
  onChange,
  disabled,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-4 rounded-2xl border-2 p-4 transition ${
        checked
          ? "border-brand-blue/20 bg-brand-bg"
          : "border-brand-black/10 bg-brand-white"
      }`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex-1">
        <p className="font-heading text-sm font-bold text-brand-black">{title}</p>
        <p className="mt-1 font-body text-xs leading-relaxed text-brand-black/70">
          {description}
        </p>
      </div>
      <Toggle checked={checked} onChange={onChange} disabled={disabled} />
    </div>
  );
}

function Toggle({
  checked,
  onChange,
  disabled,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition ${
        checked ? "bg-brand-blue" : "bg-brand-black/20"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-brand-white shadow transition ${
          checked ? "translate-x-[22px]" : "translate-x-[2px]"
        }`}
      />
    </button>
  );
}