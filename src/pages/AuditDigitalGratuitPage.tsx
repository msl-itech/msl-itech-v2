import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Bot,
  Zap,
  Smartphone,
  Eye,
  ClipboardList,
  Tag,
  MapPin,
  FileText,
  BarChart2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileDown,
  Phone,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { submitLead } from "@/lib/leads";
import { buildLeadDescription } from "@/lib/odoo";
import { getUtm } from "@/lib/utm";
import { toast } from "@/hooks/use-toast";

const AUDIT_POINTS = [
  {
    icon: Search,
    title: "Visibilité Google",
    desc: "Votre site apparaît-il sur les requêtes de vos prospects ? Analyse des positions et de la structure de contenu.",
  },
  {
    icon: Bot,
    title: "Présence dans les réponses IA",
    desc: "ChatGPT, Gemini et Perplexity citent-ils votre entreprise ? Vérification des signaux GEO et des données structurées.",
  },
  {
    icon: Zap,
    title: "Vitesse de chargement",
    desc: "Core Web Vitals (LCP, CLS, INP) — une page lente perd 30 % de ses visiteurs avant même de s'afficher.",
  },
  {
    icon: Smartphone,
    title: "Expérience mobile",
    desc: "Plus de 60 % des visites B2B se font sur mobile. Rendu, taille des boutons, lisibilité — tout est passé en revue.",
  },
  {
    icon: Eye,
    title: "Clarté de l'offre en 10 secondes",
    desc: "Un visiteur comprend-il en un coup d'œil ce que vous faites, pour qui, et pourquoi vous choisir plutôt qu'un concurrent ?",
  },
  {
    icon: ClipboardList,
    title: "Formulaire et suivi des leads",
    desc: "Les formulaires fonctionnent-ils ? Les soumissions arrivent-elles dans un CRM avec les bons tags ? Zéro lead perdu.",
  },
  {
    icon: Tag,
    title: "Balises et H1",
    desc: "Title, meta description, H1 unique, balises Open Graph — audit complet des balises qui conditionnent le clic depuis Google.",
  },
  {
    icon: MapPin,
    title: "Fiche Google Business Profile",
    desc: "Votre fiche est-elle revendiquée, complète, avec des photos récentes et des avis actifs ? C'est votre vitrine locale.",
  },
  {
    icon: FileText,
    title: "Contenu par douleur client",
    desc: "Avez-vous une page ou un article qui répond à chaque problème de vos prospects ? Analyse des angles manquants.",
  },
  {
    icon: BarChart2,
    title: "Mesure et analytics",
    desc: "Google Analytics 4, Search Console, événements de conversion — votre tableau de bord reflète-t-il la réalité ?",
  },
];

const EXAMPLES = [
  {
    sector: "Cabinet de conseil (12 personnes)",
    observations: [
      "Aucune page de service ne ciblait une requête avec intention d'achat — trafic presque nul malgré 3 ans de blog.",
      "Le formulaire de contact renvoyait vers une adresse non surveillée : 8 mois de leads perdus.",
      "L'offre principale était incompréhensible pour un visiteur extérieur (jargon métier non défini).",
    ],
    action: "Refonte de 3 pages + recâblage CRM — +40 % de leads qualifiés en 60 jours.",
  },
  {
    sector: "Distributeur B2B (45 personnes)",
    observations: [
      "LCP à 7,2 s sur mobile — le site passait en page 3 sur les requêtes produits.",
      "Pas de schéma Organization ni de données structurées : invisible des réponses IA.",
      "La fiche Google Business Profile avait une adresse obsolète depuis un déménagement.",
    ],
    action: "Optimisation technique + SEO local — position 1 sur 4 requêtes prioritaires en 90 jours.",
  },
];

type FormState = {
  siteUrl: string;
  email: string;
  phone: string;
  firstName: string;
  company: string;
  consent: boolean;
};

export default function AuditDigitalGratuitPage() {
  useProductSeo({
    title: "Audit gratuit de votre site web — 10 points vérifiés, réponse sous 48 h | MSL-iTECH",
    description:
      "Obtenez un audit gratuit de votre site web : visibilité Google, présence IA, vitesse, mobile, formulaires, analytics. Résultat PDF + appel de 15 min sous 48 h.",
    path: "/audit-digital-gratuit",
  });

  const [form, setForm] = useState<FormState>({
    siteUrl: "",
    email: "",
    phone: "",
    firstName: "",
    company: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit =
    form.siteUrl.trim().length > 4 &&
    /.+@.+\..+/.test(form.email) &&
    form.firstName.trim().length > 1 &&
    form.consent;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    try {
      const utm = getUtm();
      const consentAt = new Date().toISOString();

      const description = buildLeadDescription({
        "URL du site": form.siteUrl,
        Société: form.company || "—",
      });

      await submitLead({
        name: `${form.firstName}${form.company ? " — " + form.company : ""} — Audit digital`,
        contact_name: form.firstName,
        email_from: form.email,
        phone: form.phone || undefined,
        partner_name: form.company || undefined,
        description,
        source: `msl-itech.com/audit-digital-gratuit${utm.source ? " · " + utm.source : ""}`,
        country_code: "MA",
        studio_routing: true,
        tag_names: ["Marketing digital", "Audit"],
        utm_source_name: utm.source || undefined,
        utm_medium_name: utm.medium || undefined,
        utm_campaign_name: utm.campaign || undefined,
        referred: utm.landing || undefined,
        x_studio_outil_source: "Formulaire de contact",
        x_studio_objectif: "Plus de demandes",
        x_studio_consentement: true,
        x_studio_consentement_date: consentAt,
      });

      setSubmitted(true);
      toast({ title: "Demande reçue !", description: "Nous revenons vers vous sous 48 h avec votre audit." });
    } catch {
      toast({ title: "Erreur", description: "Réessayez ou écrivez-nous directement.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-brand-blue pb-16 pt-20 md:pb-20 md:pt-28">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/80">
              Gratuit · Sans engagement
            </span>
            <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
              Audit gratuit de votre site web :<br className="hidden md:block" /> 10 points vérifiés, réponse sous 48 h
            </h1>
            <p className="mt-5 font-body text-lg text-white/75">
              Un consultant MSL-iTECH analyse votre présence digitale en profondeur et vous envoie un PDF de 2 pages avec les points bloquants et les priorités d'action.
            </p>
            <a
              href="#formulaire"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-blue transition hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Demander mon audit gratuit <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── 10 POINTS ── */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-brand-black md:text-3xl">
              Les 10 points de l'audit
            </h2>
            <p className="mt-3 font-body text-base text-brand-grey">
              Chaque point est évalué sur une grille précise. Vous recevez un verdict clair : OK, à améliorer, ou bloquant.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
            {AUDIT_POINTS.map((pt, i) => (
              <div
                key={pt.title}
                className="flex gap-4 rounded-2xl border border-brand-grey-light bg-brand-white p-5"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <pt.icon size={18} className="text-brand-blue" />
                </div>
                <div>
                  <p className="font-body font-semibold text-brand-black">
                    <span className="mr-1.5 font-mono text-xs text-brand-grey">{String(i + 1).padStart(2, "0")}</span>
                    {pt.title}
                  </p>
                  <p className="mt-1 font-body text-sm text-brand-grey leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE QUE VOUS RECEVEZ ── */}
      <section className="bg-brand-white py-16 md:py-20">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-brand-black md:text-3xl text-center">
              Ce que vous recevez
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-brand-grey-light bg-brand-bg p-6">
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <FileDown size={20} className="text-brand-blue" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-brand-black">
                  Rapport PDF — 2 pages
                </h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Score par point (OK / À améliorer / Bloquant)",
                    "3 priorités d'action classées par impact",
                    "Observations spécifiques à votre site",
                    "Ressources et outils recommandés",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-brand-grey">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-brand-grey-light bg-brand-bg p-6">
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <Phone size={20} className="text-brand-blue" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-brand-black">
                  Appel de 15 min
                </h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Présentation des 3 points les plus critiques",
                    "Réponses à vos questions sur le rapport",
                    "Recommandation honnête sur les étapes suivantes",
                    "Sans engagement — vous décidez de la suite",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-brand-grey">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXEMPLES ANONYMISÉS ── */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-brand-black md:text-3xl text-center">
              2 exemples d'observations réelles
            </h2>
            <p className="mt-3 text-center font-body text-sm text-brand-grey">Exemples anonymisés issus d'audits récents.</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {EXAMPLES.map((ex) => (
                <div
                  key={ex.sector}
                  className="rounded-2xl border border-brand-grey-light bg-brand-white p-6"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                    {ex.sector}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {ex.observations.map((obs) => (
                      <li key={obs} className="flex items-start gap-2 font-body text-sm text-brand-grey leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                        {obs}
                      </li>
                    ))}
                  </ul>
                  <p
                    className="mt-4 rounded-xl px-4 py-2.5 font-body text-sm font-semibold text-brand-blue"
                    style={{ backgroundColor: "color-mix(in srgb, var(--gold) 20%, transparent)" }}
                  >
                    → {ex.action}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE ── */}
      <section id="formulaire" className="bg-brand-white py-16 md:py-20">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-lg">
            <div className="text-center">
              <h2 className="font-heading text-2xl font-bold text-brand-black md:text-3xl">
                Demander mon audit gratuit
              </h2>
              <p className="mt-2 font-body text-sm text-brand-grey">
                Réponse sous 48 h ouvrées. Aucun engagement, aucune carte bancaire.
              </p>
            </div>

            {submitted ? (
              <div className="mt-10 rounded-2xl border border-brand-grey-light bg-brand-bg p-8 text-center">
                <div
                  className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <CheckCircle2 size={28} className="text-brand-blue" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-brand-black">
                  Demande reçue !
                </h3>
                <p className="mt-2 font-body text-sm text-brand-grey">
                  Votre audit est en cours de préparation. Vous recevrez le rapport PDF + une invitation à l'appel de 15 min sous 48 h ouvrées.
                </p>
                <Link
                  to="/"
                  className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-brand-blue hover:underline"
                >
                  Retour à l'accueil <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-4">
                <div>
                  <label className="block font-body text-sm font-semibold text-brand-black">
                    URL de votre site web *
                  </label>
                  <input
                    type="url"
                    value={form.siteUrl}
                    onChange={(e) => setForm({ ...form, siteUrl: e.target.value })}
                    placeholder="https://www.votresite.ma"
                    required
                    className="mt-2 w-full rounded-xl border-2 border-brand-grey-light bg-brand-white px-4 py-3 font-body text-sm text-brand-black outline-none transition focus:border-brand-blue"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold text-brand-black">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="prenom@societe.ma"
                    required
                    className="mt-2 w-full rounded-xl border-2 border-brand-grey-light bg-brand-white px-4 py-3 font-body text-sm text-brand-black outline-none transition focus:border-brand-blue"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block font-body text-sm font-semibold text-brand-black">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      autoComplete="given-name"
                      required
                      className="mt-2 w-full rounded-xl border-2 border-brand-grey-light bg-brand-white px-4 py-3 font-body text-sm text-brand-black outline-none transition focus:border-brand-blue"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-brand-black">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      autoComplete="tel"
                      className="mt-2 w-full rounded-xl border-2 border-brand-grey-light bg-brand-white px-4 py-3 font-body text-sm text-brand-black outline-none transition focus:border-brand-blue"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold text-brand-black">
                    Société
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    autoComplete="organization"
                    className="mt-2 w-full rounded-xl border-2 border-brand-grey-light bg-brand-white px-4 py-3 font-body text-sm text-brand-black outline-none transition focus:border-brand-blue"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-brand-grey-light bg-brand-bg/50 p-4">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[color:var(--gold)]"
                    required
                  />
                  <span className="font-body text-sm text-brand-grey">
                    J'accepte que MSL-iTECH me contacte dans le cadre de ma demande, conformément à la{" "}
                    <Link to="/politique-de-confidentialite" className="underline hover:text-brand-blue" onClick={(e) => e.stopPropagation()}>
                      politique de confidentialité
                    </Link>{" "}
                    (Loi 09-08 / RGPD). *
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!canSubmit || submitting}
                  className="w-full rounded-full px-7 py-3.5 font-body text-base font-bold text-brand-black shadow-[0_18px_50px_-15px_rgba(255,221,87,0.55)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  {submitting ? "Envoi en cours…" : "Recevoir mon audit gratuit →"}
                </button>

                <p className="flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey">
                  <ShieldCheck size={12} />
                  Données confidentielles · Aucune revente · Réponse sous 48 h
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
