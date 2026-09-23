import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Calendar,
  User,
  Settings,
  Cpu,
  Globe,
  Megaphone,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import contactHero from "@/assets/home/cta-bg.webp";
import { submitLead } from "@/lib/leads";
import { getUtm, formatUtmForOdoo } from "@/lib/utm";
import { buildLeadDescription } from "@/lib/odoo";
import type { OdooLeadData } from "@/lib/odoo";

/* ─────────────── Constants ─────────────── */

const DISPOSABLE_DOMAINS = [
  "yopmail.com", "mailinator.com", "guerrillamail.com", "sharklasers.com",
  "guerrillamail.info", "spam4.me", "trashmail.com", "trashmail.me",
  "trashmail.net", "tempmail.com", "throwam.com", "dispostable.com",
  "maildrop.cc", "tempr.email", "discard.email", "fakeinbox.com",
  "spamgourmet.com", "binkmail.com", "crap.email",
];

const PHONE_PREFIXES: Record<string, string> = {
  MA: "+212 ", BE: "+32 ", CA: "+1 ", OTHER: "",
};

const COUNTRY_LABELS: Record<string, string> = {
  MA: "Maroc", BE: "Belgique", CA: "Canada", OTHER: "Autre",
};

type Besoin = "erp" | "site" | "marketing";
type Country = "MA" | "BE" | "CA" | "OTHER";

const BESOIN_OPTIONS: { id: Besoin; label: string; subtitle: string; icon: React.ReactNode }[] = [
  {
    id: "erp",
    label: "Odoo ERP",
    subtitle: "Digitaliser vos opérations (compta, stock, CRM, facturation)",
    icon: <Cpu size={28} />,
  },
  {
    id: "site",
    label: "Site web",
    subtitle: "Créer ou refondre votre présence en ligne",
    icon: <Globe size={28} />,
  },
  {
    id: "marketing",
    label: "Marketing digital",
    subtitle: "Générer des leads, améliorer votre visibilité Google/IA",
    icon: <Megaphone size={28} />,
  },
];

const SECTORS = [
  "Commerce / Distribution",
  "BTP / Construction",
  "HORECA / Restauration",
  "Santé / Services médicaux",
  "Transport / Logistique",
  "Production / Industrie",
  "Services B2B",
  "Tourisme / Hôtellerie",
  "Autre",
];

const CURRENT_TOOL_OPTIONS = [
  { value: "excel_word", label: "Excel / Word" },
  { value: "sage", label: "Sage" },
  { value: "autre_erp", label: "Autre ERP" },
  { value: "odoo", label: "Odoo" },
  { value: "aucun", label: "Aucun outil" },
];

const ECHEANCE_OPTIONS = [
  { value: "lt3m", label: "< 3 mois" },
  { value: "3_6m", label: "3–6 mois" },
  { value: "later", label: "Plus tard" },
  { value: "renseignement", label: "Je me renseigne" },
];

const OBJECTIF_SITE_OPTIONS = [
  { value: "nouveau", label: "Nouveau site" },
  { value: "refonte", label: "Refonte" },
  { value: "ecommerce", label: "E-commerce" },
];

const BUDGET_OPTIONS = [
  { value: "lt1000", label: "< 1 000 €" },
  { value: "1000_3500", label: "1 000–3 500 €" },
  { value: "gt3500", label: "> 3 500 €" },
];

const OBJECTIF_MARKETING_OPTIONS = [
  { value: "plus_demandes", label: "Plus de demandes" },
  { value: "visibilite", label: "Visibilité Google / IA" },
  { value: "campagnes", label: "Campagnes pub" },
];

const STEP_LABELS = ["Votre besoin", "Coordonnées", "Précisions"];

const CONFIRMATION: Record<Besoin, { title: string; body: string }> = {
  erp: {
    title: "Votre demande de démo ERP est enregistrée !",
    body: "Un consultant MSL-iTECH vous contacte sous 24h pour préparer votre démo Odoo personnalisée.",
  },
  site: {
    title: "Votre projet web est entre de bonnes mains !",
    body: "Notre équipe web revient vers vous sous 24h avec des exemples adaptés à votre secteur.",
  },
  marketing: {
    title: "Votre demande de conseil digital est prise en compte !",
    body: "Un expert MSL-iTECH vous contacte sous 24h pour discuter de vos objectifs de croissance.",
  },
};

const SUBMIT_LABELS: Record<Besoin, string> = {
  erp: "Demander ma démo Odoo",
  site: "Recevoir un devis site",
  marketing: "Demander mon audit digital",
};

/* ─────────────── Offices data ─────────────── */

const offices = [
  {
    country: "Belgique",
    address: "—",
    phone: "+32 2 886 05 49",
    email: "info@msl-itech.com",
  },
  {
    country: "Maroc",
    address: "951 Q.I. Al Massar N°2, Route de Safi, Marrakech",
    phone: "+212 6 89 30 62 78",
    email: "info@msl-itech.com",
  },
  {
    country: "Canada",
    address: "—",
    phone: "+1 204 650 0765",
    email: "info@msl-itech.com",
  },
];

/* ─────────────── Sticker ─────────────── */

function Sticker({
  children,
  rotate = -6,
}: {
  children: React.ReactNode;
  rotate?: number;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)]"
      style={{
        backgroundColor: "var(--gold)",
        color: "var(--blue)",
        borderColor: "var(--blue)",
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </span>
  );
}

/* ─────────────── Form data type ─────────────── */

type FormData = {
  besoin: Besoin | "";
  fullName: string;
  email: string;
  phone: string;
  company: string;
  country: Country;
  consent: boolean;
  // ERP step 2
  sector: string;
  currentToolErp: string;
  echeance: string;
  // Site step 2
  urlSite: string;
  objectifSite: string;
  budget: string;
  // Marketing step 2
  urlMarketing: string;
  objectifMarketing: string;
  message: string;
};

/* ─────────────── Main component ─────────────── */

export default function ContactPage() {
  useProductSeo({
    title: "Contactez MSL-iTECH — ERP Odoo, Site web, Marketing digital",
    description:
      "Dites-nous votre projet : Odoo ERP, création de site ou marketing digital. Un expert vous répond sous 24h avec une proposition personnalisée. Sans engagement.",
    path: "/contact",
    isEntityPage: true,
  });

  const [searchParams] = useSearchParams();
  const startedAt = useRef(Date.now());
  const [honeypot, setHoneypot] = useState("");
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [navDisabled, setNavDisabled] = useState(false);
  // Si VITE_TURNSTILE_SITE_KEY absent (dev local), on bypass Turnstile
  const turnstileEnabled = !!import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const [turnstileToken, setTurnstileToken] = useState<string | null>(
    turnstileEnabled ? null : "bypass-no-sitekey"
  );
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const besoinParam = searchParams.get("besoin") as Besoin | null;
  const scoreParam = searchParams.get("score");
  const validBesoin =
    besoinParam !== null &&
    (["erp", "site", "marketing"] as const).includes(besoinParam as Besoin);

  const [data, setData] = useState<FormData>({
    besoin: validBesoin ? (besoinParam as Besoin) : "",
    fullName: "",
    email: "",
    phone: "",
    company: "",
    country: "MA",
    consent: false,
    sector: "",
    currentToolErp: "",
    echeance: "",
    urlSite: "",
    objectifSite: "",
    budget: "",
    urlMarketing: "",
    objectifMarketing: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Pre-select besoin from URL param (UTM capture now lives in App.tsx root)
  useEffect(() => {
    if (validBesoin) setStep(1);
    // Preload Turnstile script early so it's ready when user reaches step 2
    if (!document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]')) {
      const s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Turnstile widget — render on step 2, remove when leaving
  const renderTurnstile = useCallback(() => {
    const tw = (window as unknown as { turnstile?: { render: (el: HTMLElement, opts: unknown) => string; remove: (id: string) => void } }).turnstile;
    const sitekey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    console.info("[Turnstile] sitekey présente :", !!sitekey, "| valeur :", sitekey ? sitekey.slice(0, 8) + "…" : "undefined");
    if (!tw || !turnstileRef.current || widgetIdRef.current || !sitekey) return;
    try {
      widgetIdRef.current = tw.render(turnstileRef.current, {
        sitekey,
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(null),
        "error-callback": () => setTurnstileToken(null),
        theme: "light",
        appearance: "always",
        "refresh-expired": "auto",
      });
    } catch (e) {
      console.warn("[Turnstile] render() échoué :", e);
    }
  }, []);

  useEffect(() => {
    if (step !== 2) {
      // Clean up widget when leaving step 2
      if (widgetIdRef.current) {
        (window as unknown as { turnstile?: { remove: (id: string) => void } }).turnstile?.remove(widgetIdRef.current);
        widgetIdRef.current = null;
        setTurnstileToken(null);
      }
      return;
    }
    const tw = (window as unknown as { turnstile?: unknown }).turnstile;
    if (tw) {
      renderTurnstile();
    } else {
      const script = document.querySelector<HTMLScriptElement>('script[src*="challenges.cloudflare.com/turnstile"]');
      script?.addEventListener("load", renderTurnstile, { once: true });
    }
  }, [step, renderTurnstile]);

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  // When country changes, pre-fill phone prefix if field is still empty
  const handleCountryChange = (country: Country) => {
    update("country", country);
    if (!data.phone.trim()) {
      setData((d) => ({ ...d, country, phone: PHONE_PREFIXES[country] }));
    }
  };

  const scrollToFormTop = () => {
    requestAnimationFrame(() => {
      const el = formRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    });
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 0) {
      if (!data.besoin) newErrors.besoin = "Veuillez sélectionner votre besoin.";
    }

    if (step === 1) {
      if (!data.fullName.trim() || data.fullName.trim().length < 2) {
        newErrors.fullName = "Le nom complet est requis.";
      }
      const emailLower = data.email.trim().toLowerCase();
      if (!emailLower || !/.+@.+\..+/.test(emailLower)) {
        newErrors.email = "Adresse email invalide.";
      } else {
        const domain = emailLower.split("@")[1];
        if (domain && DISPOSABLE_DOMAINS.includes(domain)) {
          newErrors.email = "Merci d'utiliser une adresse email valide.";
        }
      }
      const phoneClean = data.phone.replace(/[\s+\-().]/g, "");
      if (!phoneClean || phoneClean.length < 5) {
        newErrors.phone = "Le téléphone est requis.";
      }
      if (!data.company.trim()) {
        newErrors.company = "L'entreprise est requise.";
      }
      if (!data.consent) {
        newErrors.consent = "Votre consentement est requis pour continuer.";
      }
    }

    // Step 2: Turnstile token required before submit

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const disableNav = () => {
    setNavDisabled(true);
    setTimeout(() => setNavDisabled(false), 500);
  };

  const handleNext = () => {
    if (navDisabled) return;
    if (validateStep()) {
      disableNav();
      setStep((s) => s + 1);
      scrollToFormTop();
    }
  };

  const handleBack = () => {
    if (navDisabled) return;
    disableNav();
    setStep((s) => Math.max(0, s - 1));
    scrollToFormTop();
  };

  // Step 0: clicking a card immediately advances to step 1
  const handleBesoinSelect = (besoin: Besoin) => {
    if (navDisabled) return;
    setData((d) => ({ ...d, besoin }));
    setErrors((e) => ({ ...e, besoin: "" }));
    disableNav();
    setStep(1);
    scrollToFormTop();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam: honeypot + minimum fill time (3 s) + Turnstile token
    if (honeypot) return;
    if (Date.now() - startedAt.current < 3000) return;
    if (!turnstileToken) return;

    if (!validateStep()) return;

    const besoin = data.besoin as Besoin;
    const besoinLabel = { erp: "Odoo ERP", site: "Site web", marketing: "Marketing digital" }[besoin];
    const utm = getUtm();

    // Build rich description
    const sections: Record<string, string | undefined | null> = {
      Besoin: besoinLabel,
      Pays: COUNTRY_LABELS[data.country],
    };

    if (besoin === "erp") {
      if (data.sector) sections["Secteur"] = data.sector;
      if (data.currentToolErp) sections["Outil actuel"] = CURRENT_TOOL_OPTIONS.find((o) => o.value === data.currentToolErp)?.label;
      if (data.echeance) sections["Échéance"] = ECHEANCE_OPTIONS.find((o) => o.value === data.echeance)?.label;
    } else if (besoin === "site") {
      if (data.urlSite) sections["URL actuel"] = data.urlSite;
      if (data.objectifSite) sections["Objectif"] = OBJECTIF_SITE_OPTIONS.find((o) => o.value === data.objectifSite)?.label;
      if (data.budget) sections["Budget indicatif"] = BUDGET_OPTIONS.find((o) => o.value === data.budget)?.label;
    } else if (besoin === "marketing") {
      if (data.urlMarketing) sections["URL du site"] = data.urlMarketing;
      if (data.objectifMarketing) sections["Objectif"] = OBJECTIF_MARKETING_OPTIONS.find((o) => o.value === data.objectifMarketing)?.label;
      if (data.message) sections["Message"] = data.message;
    }

    const utmStr = formatUtmForOdoo(utm);
    if (utmStr) sections["UTM"] = utmStr;
    if (utm.referrer) sections["Referrer"] = utm.referrer;
    sections["Page d'origine"] = window.location.href;
    sections["Consentement"] = `Oui — ${new Date().toISOString()}`;

    const description = buildLeadDescription(sections);

    const tags: string[] = [`besoin:${besoin}`, "consentement:ok"];
    if (besoin === "erp" && data.sector) tags.push(`secteur:${data.sector}`);

    const payload: OdooLeadData = {
      name: `${data.fullName}${data.company ? ` — ${data.company}` : ""} — ${besoinLabel}`,
      contact_name: data.fullName,
      email_from: data.email,
      phone: data.phone || undefined,
      partner_name: data.company || undefined,
      country_code: data.country !== "OTHER" ? data.country : undefined,
      team_name: besoin === "erp" ? "ERP ODOO" : "web & marketing",
      utm_source_name: utm.source || undefined,
      utm_medium_name: utm.medium || undefined,
      utm_campaign_name: utm.campaign || undefined,
      referred: window.location.href,
      description,
      source: utm.source
        ? `${utm.source}${utm.medium ? ` / ${utm.medium}` : ""}`
        : "msl-itech.com /contact",
      tag_names: tags,
      extra: {
        x_besoin: besoin,
        score_outil: scoreParam ? Number(scoreParam) : undefined,
        page_origine: window.location.href,
        referrer: utm.referrer || undefined,
        utm_source: utm.source || undefined,
        utm_medium: utm.medium || undefined,
        utm_campaign: utm.campaign || undefined,
        utm_content: utm.content || undefined,
        consent_at: new Date().toISOString(),
        sector: data.sector || undefined,
        current_tool: data.currentToolErp || undefined,
        echeance: data.echeance || undefined,
        url_site: data.urlSite || data.urlMarketing || undefined,
        objectif: data.objectifSite || data.objectifMarketing || undefined,
        budget: data.budget || undefined,
        message: data.message || undefined,
      },
    };

    setSubmitting(true);
    try {
      await submitLead(payload);
      setSubmitted(true);
      toast.success("Demande envoyée — nous revenons vers vous sous 24h.");
    } finally {
      setSubmitting(false);
    }
  };

  const besoin = data.besoin as Besoin | "";
  const confirmData = besoin ? CONFIRMATION[besoin] : CONFIRMATION.erp;

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate rounded-[28px] md:rounded-[36px]">
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px] md:rounded-[36px]">
              <img
                src={contactHero}
                alt="Contact MSL-iTECH"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,30,38,0.55) 0%, rgba(10,30,38,0.7) 55%, rgba(10,30,38,0.9) 100%)",
                }}
              />
              <div aria-hidden className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-25 blur-3xl" style={{ backgroundColor: "var(--gold)" }} />
              <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl" style={{ backgroundColor: "var(--blue)" }} />
              <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            </div>

            <HeroCursorGlow radius="inherit" />

            <div className="absolute -top-3 left-8 z-20 md:-top-4 md:left-12">
              <Sticker rotate={-8}>★ Réponse sous 24h</Sticker>
            </div>

            <div className="relative flex min-h-[420px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[500px] md:py-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  Contact · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-[60px] lg:text-[68px]">
                Parlez-nous de votre projet —{" "}
                <span className="italic font-light text-brand-gold">
                  ERP, site ou marketing
                </span>
              </h1>

              <p className="mt-7 max-w-2xl font-body text-base text-white/80 md:text-lg">
                Choisissez votre besoin, renseignez vos coordonnées et un expert MSL-iTECH vous répond sous 24h avec une proposition personnalisée.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  <Clock size={12} className="text-brand-gold" /> Réponse sous 24h
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  <ShieldCheck size={12} className="text-brand-gold" /> Sans engagement
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  <Calendar size={12} className="text-brand-gold" /> 3 expertises
                </span>
              </div>
            </div>

            {/* Breadcrumb pill */}
            <div className="absolute -bottom-5 right-6 z-30 md:right-10">
              <div
                className="flex items-center gap-3 rounded-full border bg-brand-white px-5 py-2.5 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.25)]"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <Link to="/" className="font-body text-sm text-brand-grey transition hover:text-brand-blue">Accueil</Link>
                <span className="text-brand-grey/40">/</span>
                <span className="font-body text-sm font-semibold text-brand-blue">Contact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="py-24" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              <span className="inline-block h-px w-8 bg-brand-blue" />
              Nos coordonnées
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-[2.5rem]">
              Trois lignes de contact, un interlocuteur dédié
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {offices.map((o, i) => {
              const variants = [
                { bg: "var(--blue)", text: "white", desc: "rgba(255,255,255,0.78)", iconBg: "var(--gold)", iconColor: "var(--blue)", glow: "var(--gold)", border: "transparent", link: "white" },
                { bg: "white", text: "var(--black)", desc: "var(--grey)", iconBg: "var(--blue)", iconColor: "var(--gold)", glow: "var(--gold)", border: "var(--grey-light)", link: "var(--blue)" },
                { bg: "var(--blue-light)", text: "var(--blue)", desc: "rgba(18,77,90,0.75)", iconBg: "var(--blue)", iconColor: "var(--gold)", glow: "var(--gold)", border: "transparent", link: "var(--blue)" },
              ];
              const s = variants[i % variants.length];
              return (
                <article
                  key={o.country}
                  className="group relative overflow-hidden rounded-[28px] border p-8 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.28)]"
                  style={{ backgroundColor: s.bg, borderColor: s.border }}
                >
                  <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-25 blur-3xl" style={{ backgroundColor: s.glow }} />
                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-2xl font-bold leading-[1.1]" style={{ color: s.text }}>{o.country}</h3>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]" style={{ backgroundColor: s.iconBg, color: s.iconColor }}>
                        <MapPin size={18} />
                      </div>
                    </div>
                    <ul className="space-y-3 font-body text-sm" style={{ color: s.desc }}>
                      {o.address !== "—" && (
                        <li className="flex gap-3">
                          <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: s.link }} />
                          <span>{o.address}</span>
                        </li>
                      )}
                      <li className="flex gap-3">
                        <Phone size={15} className="mt-0.5 shrink-0" style={{ color: s.link }} />
                        <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="transition hover:opacity-80" style={{ color: s.text }}>{o.phone}</a>
                      </li>
                      <li className="flex gap-3">
                        <Mail size={15} className="mt-0.5 shrink-0" style={{ color: s.link }} />
                        <a href={`mailto:${o.email}`} className="transition hover:opacity-80" style={{ color: s.text }}>{o.email}</a>
                      </li>
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(180deg, var(--blue-light) 0%, var(--bg) 100%)" }}
      >
        <div className="container max-w-3xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              <span className="inline-block h-px w-8 bg-brand-blue" />
              Formulaire de contact
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-[2.5rem]">
              Trois étapes pour démarrer
            </h2>
            <p className="mt-4 font-body text-base text-brand-grey">
              Besoin, coordonnées, précisions — en moins de 3 minutes.
            </p>
          </div>

          {submitted ? (
            <div className="mt-10 rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(255,221,87,0.2)", color: "#0F3F4A" }}
              >
                <CheckCircle2 size={26} />
              </div>
              <h3 className="mt-5 font-heading text-2xl font-bold text-brand-black">{confirmData.title}</h3>
              <p className="mt-3 font-body text-base text-brand-grey">{confirmData.body}</p>
              <Link
                to="/"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#0F3F4A", color: "white" }}
              >
                Retour à l'accueil <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <form
              onKeyDown={(e) => { if (e.key === "Enter" && (e.target as HTMLElement).tagName !== "BUTTON") e.preventDefault(); }}
              onSubmit={handleSubmit}
              ref={formRef}
              className="relative mt-12 overflow-hidden rounded-[28px] border bg-brand-white p-7 shadow-[0_30px_80px_-30px_rgba(18,77,90,0.25)] md:p-10"
              style={{ borderColor: "var(--grey-light)" }}
              noValidate
            >
              <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-30 blur-3xl" style={{ backgroundColor: "var(--gold)" }} />
              <div aria-hidden className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: "var(--blue)" }} />

              {/* Step indicator */}
              <div className="relative mb-10">
                <div className="absolute left-0 right-0 top-4 h-0.5 -z-0" style={{ backgroundColor: "var(--grey-light)" }} />
                <div
                  className="absolute left-0 top-4 h-0.5 -z-0 transition-all duration-500"
                  style={{ backgroundColor: "var(--blue)", width: `${(step / (STEP_LABELS.length - 1)) * 100}%` }}
                />
                <ol className="relative grid grid-cols-3 gap-2">
                  {STEP_LABELS.map((lbl, i) => {
                    const done = i < step;
                    const active = i === step;
                    return (
                      <li key={lbl} className="flex flex-col items-center text-center">
                        <span
                          className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition"
                          style={{
                            backgroundColor: active ? "var(--gold)" : done ? "var(--blue)" : "white",
                            color: active ? "var(--blue)" : done ? "white" : "var(--grey)",
                            border: active || done ? "2px solid var(--blue)" : "2px solid var(--grey-light)",
                          }}
                        >
                          {done ? <CheckCircle2 size={14} /> : i + 1}
                        </span>
                        <span
                          className="mt-2 hidden text-[10px] uppercase tracking-[0.15em] md:block"
                          style={{ color: active ? "var(--blue)" : "var(--grey)", fontWeight: active ? 700 : 400 }}
                        >
                          {lbl}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="relative">
                {/* ── Step 0 — Besoin ── */}
                {step === 0 && (
                  <div className="space-y-6">
                    <StepHeader
                      icon={<Sparkles size={20} />}
                      title="Quel est votre projet ?"
                      subtitle="Cliquez sur votre besoin principal pour démarrer."
                    />
                    {errors.besoin && <p className="text-xs text-destructive">{errors.besoin}</p>}
                    <div className="grid gap-4 md:grid-cols-3">
                      {BESOIN_OPTIONS.map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => handleBesoinSelect(b.id)}
                          className={`flex flex-col items-start gap-4 rounded-[20px] border-2 p-6 text-left transition hover:-translate-y-1 ${
                            data.besoin === b.id
                              ? "border-brand-blue bg-brand-blue/5"
                              : "border-border bg-white hover:border-brand-blue/40 hover:shadow-md"
                          }`}
                        >
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-xl"
                            style={{ backgroundColor: "var(--blue)", color: "var(--gold)" }}
                          >
                            {b.icon}
                          </div>
                          <div>
                            <p className="font-heading text-lg font-bold text-brand-black">{b.label}</p>
                            <p className="mt-1 font-body text-sm text-brand-grey">{b.subtitle}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Step 1 — Coordonnées ── */}
                {step === 1 && (
                  <div className="space-y-5">
                    <StepHeader
                      icon={<User size={20} />}
                      title="Vos coordonnées"
                      subtitle="Nous ne transmettons jamais vos données à des tiers."
                    />

                    <Field
                      id="fullName"
                      label="Nom complet *"
                      error={errors.fullName}
                      value={data.fullName}
                      onChange={(v) => update("fullName", v)}
                      placeholder="Prénom Nom"
                    />

                    <div className="grid gap-5 md:grid-cols-2">
                      <Field
                        id="email"
                        type="email"
                        label="Email professionnel *"
                        error={errors.email}
                        value={data.email}
                        onChange={(v) => update("email", v)}
                        placeholder="vous@votre-entreprise.com"
                      />
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey"
                        >
                          Téléphone *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={data.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="+212 6 xx xx xx xx"
                          className={`mt-2 w-full rounded-lg border bg-background px-4 py-3 font-body text-sm text-brand-black focus:outline-none focus:ring-1 ${
                            errors.phone
                              ? "border-destructive focus:border-destructive focus:ring-destructive"
                              : "border-border focus:border-brand-blue focus:ring-brand-blue"
                          }`}
                        />
                        {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
                      </div>
                    </div>

                    <Field
                      id="company"
                      label="Entreprise *"
                      error={errors.company}
                      value={data.company}
                      onChange={(v) => update("company", v)}
                      placeholder="Nom de votre société"
                    />

                    <div>
                      <label
                        htmlFor="country"
                        className="block font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey"
                      >
                        Pays *
                      </label>
                      <select
                        id="country"
                        value={data.country}
                        onChange={(e) => handleCountryChange(e.target.value as Country)}
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-brand-black focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                      >
                        <option value="MA">Maroc</option>
                        <option value="BE">Belgique</option>
                        <option value="CA">Canada</option>
                        <option value="OTHER">Autre</option>
                      </select>
                    </div>

                    <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-muted/40 p-4 text-sm">
                      <input
                        type="checkbox"
                        checked={data.consent}
                        onChange={(e) => update("consent", e.target.checked)}
                        className="mt-1 h-4 w-4 shrink-0 accent-[color:var(--gold)]"
                      />
                      <span className="text-brand-grey">
                        J'accepte que MSL-iTECH me recontacte dans le cadre de ma demande, conformément à la{" "}
                        <Link
                          to="/politique-de-confidentialite"
                          className="underline hover:text-brand-blue"
                          onClick={(e) => e.stopPropagation()}
                        >
                          politique de confidentialité
                        </Link>{" "}
                        (Loi 09-08 / RGPD). *
                      </span>
                    </label>
                    {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}

                    {/* Honeypot — invisible to humans, bots will fill it */}
                    <input
                      name="fax_number"
                      tabIndex={-1}
                      aria-hidden="true"
                      autoComplete="off"
                      className="sr-only absolute left-[-9999px]"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>
                )}

                {/* ── Step 2 — Précisions (all optional) ── */}
                {step === 2 && (
                  <div className="space-y-6">
                    <StepHeader
                      icon={<Settings size={20} />}
                      title="Quelques précisions (optionnel)"
                      subtitle="Ces informations nous aident à préparer un premier échange utile — tous les champs sont facultatifs."
                    />

                    {data.besoin === "erp" && (
                      <>
                        <div>
                          <label
                            htmlFor="sector"
                            className="block font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey"
                          >
                            Secteur d'activité
                          </label>
                          <select
                            id="sector"
                            value={data.sector}
                            onChange={(e) => update("sector", e.target.value)}
                            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-brand-black focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                          >
                            <option value="">— Choisir —</option>
                            {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <RadioCards
                          label="Outil actuel"
                          options={CURRENT_TOOL_OPTIONS}
                          value={data.currentToolErp}
                          onChange={(v) => update("currentToolErp", v)}
                        />
                        <RadioCards
                          label="Échéance de mise en place"
                          options={ECHEANCE_OPTIONS}
                          value={data.echeance}
                          onChange={(v) => update("echeance", v)}
                        />
                      </>
                    )}

                    {data.besoin === "site" && (
                      <>
                        <Field
                          id="urlSite"
                          label="URL de votre site actuel (si existant)"
                          value={data.urlSite}
                          onChange={(v) => update("urlSite", v)}
                          placeholder="https://votre-site.com"
                        />
                        <RadioCards
                          label="Objectif"
                          options={OBJECTIF_SITE_OPTIONS}
                          value={data.objectifSite}
                          onChange={(v) => update("objectifSite", v)}
                        />
                        <RadioCards
                          label="Budget indicatif"
                          options={BUDGET_OPTIONS}
                          value={data.budget}
                          onChange={(v) => update("budget", v)}
                        />
                      </>
                    )}

                    {data.besoin === "marketing" && (
                      <>
                        <Field
                          id="urlMarketing"
                          label="URL de votre site"
                          value={data.urlMarketing}
                          onChange={(v) => update("urlMarketing", v)}
                          placeholder="https://votre-site.com"
                        />
                        <RadioCards
                          label="Objectif principal"
                          options={OBJECTIF_MARKETING_OPTIONS}
                          value={data.objectifMarketing}
                          onChange={(v) => update("objectifMarketing", v)}
                        />
                        <Field
                          id="message"
                          label="Message (facultatif)"
                          value={data.message}
                          onChange={(v) => update("message", v)}
                          textarea
                          rows={4}
                          maxLength={800}
                          showCount
                          placeholder="Décrivez brièvement votre situation ou vos questions…"
                        />
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* ── Turnstile (step 2 only) ── */}
              {step === 2 && (
                <div className="mt-6" onSubmit={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()}>
                  <div ref={turnstileRef} />
                  {!turnstileToken && (
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey">
                      Vérification anti-robot requise avant l'envoi.
                    </p>
                  )}
                </div>
              )}

              {/* ── Navigation ── */}
              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 0 || navDisabled}
                  className="inline-flex items-center gap-2 rounded-full border bg-white px-5 py-2.5 font-body text-sm font-semibold transition hover:bg-brand-bg disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ borderColor: "var(--grey-light)", color: "var(--blue)" }}
                >
                  <ArrowLeft size={16} /> Retour
                </button>

                {step < STEP_LABELS.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={navDisabled}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-body text-sm font-semibold shadow-[0_12px_30px_-12px_rgba(18,77,90,0.5)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                    style={{ backgroundColor: "var(--blue)", color: "white" }}
                  >
                    Continuer <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting || !turnstileToken}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-bold shadow-[0_14px_36px_-12px_rgba(255,221,87,0.7)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                    style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
                  >
                    {submitting
                      ? "Envoi en cours…"
                      : besoin
                      ? SUBMIT_LABELS[besoin]
                      : "Envoyer ma demande"}{" "}
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>

              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-brand-grey">
                <ShieldCheck size={12} /> Sans engagement · Réponse sous 24h · Données protégées (Loi 09-08 / RGPD)
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

/* ─────────────── Sub-components ─────────────── */

function Field({
  id,
  label,
  hint,
  error,
  value,
  onChange,
  type = "text",
  textarea,
  rows = 4,
  maxLength,
  showCount,
  placeholder,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  rows?: number;
  maxLength?: number;
  showCount?: boolean;
  placeholder?: string;
}) {
  const base =
    "mt-2 w-full rounded-lg border bg-background px-4 py-3 font-body text-sm text-brand-black focus:outline-none focus:ring-1";
  const cls = `${base} ${
    error
      ? "border-destructive focus:border-destructive focus:ring-destructive"
      : "border-border focus:border-brand-blue focus:ring-brand-blue"
  }`;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="block font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey">
          {label}
        </label>
        {showCount && maxLength && (
          <span className="font-mono text-[10px] tabular-nums text-brand-grey/70">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
      {textarea ? (
        <textarea
          id={id}
          rows={rows}
          maxLength={maxLength}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cls}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cls}
        />
      )}
      {hint && !error && <p className="mt-1.5 text-xs text-brand-grey">{hint}</p>}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function StepHeader({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: "var(--gold)", color: "var(--blue)" }}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-heading text-xl font-bold leading-tight text-brand-black md:text-2xl">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1.5 font-body text-sm text-brand-grey">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function RadioCards({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-grey">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(value === o.value ? "" : o.value)}
            className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-body text-xs font-medium transition hover:-translate-y-0.5"
            style={{
              backgroundColor: value === o.value ? "var(--blue)" : "white",
              color: value === o.value ? "white" : "var(--blue)",
              borderColor: value === o.value ? "var(--blue)" : "var(--grey-light)",
            }}
          >
            {value === o.value && <CheckCircle2 size={12} />}
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
