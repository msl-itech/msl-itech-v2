import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  TrendingDown,
  ShieldCheck,
  CheckCircle2,
  Info,
  BookOpen,
  Calculator,
  Server,
  Users,
  Layers,
  AlertTriangle,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";

/* ---- Highlight ---- */
function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden
        className="absolute inset-x-[-4px] bottom-[6%] -z-0 h-[42%] -rotate-[1.5deg] rounded-[6px]"
        style={{ backgroundColor: "var(--gold)", filter: "blur(0.3px)" }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

/* ---- Sticker ---- */
function Sticker({
  children,
  rotate = -6,
}: {
  children: React.ReactNode;
  rotate?: number;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-2xl border-2 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)]"
      style={{
        backgroundColor: "var(--gold)",
        borderColor: "var(--blue)",
        color: "var(--blue)",
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </span>
  );
}

/* ---- Composantes du coût ---- */
const composantes = [
  {
    icon: Users,
    title: "Licence Odoo Enterprise",
    subtitle: "Récurrent annuel",
    detail:
      "31,10 €/utilisateur/mois en formule Standard ou 46,80 €/utilisateur/mois en Custom (tarifs Odoo SA Belgique 2026). Une PME de 10 utilisateurs paie entre 3 700 € et 5 600 € par an.",
  },
  {
    icon: Server,
    title: "Hébergement",
    subtitle: "Selon l'option choisie",
    detail:
      "Odoo Online : hébergement inclus dans la licence. Odoo.sh : 60 à 200 €/mois selon le worker et le storage. Auto-hébergement : 30 à 300 €/mois selon l'infrastructure.",
  },
  {
    icon: Layers,
    title: "Implémentation",
    subtitle: "Le travail du partenaire",
    detail:
      "Paramétrage, migration, formation, déploiement. C'est la ligne visible sur les devis — et celle qui varie le plus selon le périmètre, la complexité des données et le niveau de personnalisation souhaité.",
  },
];

/* ---- Fourchettes marché ---- */
const fourchettes = [
  { scope: "CRM + Facturation uniquement", range: "800 € à 5 000 €", hours: "10 à 40h" },
  { scope: "CRM + Finance + Stock", range: "2 000 € à 8 000 €", hours: "25 à 80h" },
  { scope: "ERP complet (CRM, Finance, Stock, RH, Production)", range: "5 000 € à 25 000 €", hours: "50 à 200h" },
  { scope: "Multi-sociétés / multi-devises / EDI", range: "+30 à 60 % du périmètre équivalent", hours: "Variable" },
  { scope: "Développements spécifiques (modules custom)", range: "100 à 180 €/heure en sus", hours: "Variable" },
];

/* ---- Facteurs de variation ---- */
const facteurs = [
  {
    icon: Layers,
    title: "Le nombre de modules",
    desc: "Implémenter CRM + Facturation prend 10 à 25 heures. Ajouter Stock, Production et RH peut porter le projet à 50 à 200 heures. Les interactions entre modules augmentent la complexité.",
  },
  {
    icon: Calculator,
    title: "Le volume de données à migrer",
    desc: "Reprendre 12 mois d'historique comptable + base clients ajoute 8 à 20 heures. Reprendre 5 ans d'historique avec rapprochements bancaires peut ajouter 40 à 80 heures.",
  },
  {
    icon: Users,
    title: "Le taux horaire de l'intégrateur",
    desc: "En Belgique, les taux horaires consultants Odoo varient de 80 € à 200 €/heure. Un cabinet établi à Bruxelles facture généralement entre 120 € et 180 €/heure. Les structures internationales peuvent proposer des tarifs plus compétitifs.",
  },
  {
    icon: AlertTriangle,
    title: "Les coûts souvent sous-estimés",
    desc: "Développements spécifiques (les 20 % de cas non-standard), conduite du changement (1 à 2 jours de formation par profil), et support post-démarrage (les 30 premiers jours sont critiques).",
  },
];

/* ---- Taux horaires marché ---- */
const tauxHoraires = [
  { type: "Freelance Odoo non certifié", range: "50 – 90 €/h", note: "Risque : continuité, accès support Odoo" },
  { type: "Intégrateur international", range: "60 – 120 €/h", note: "Équipe délocalisée, accompagnement à distance" },
  { type: "Cabinet belge établi", range: "120 – 180 €/h", note: "Bureau local, proximité physique" },
  { type: "Success Pack Odoo SA", range: "~130 €/h (en pack)", note: "Directement chez l'éditeur" },
  { type: "Cabinet spécialisé / Grand compte", range: "150 – 200 €/h+", note: "Projets complexes, multi-pays" },
];

const faqs = [
  {
    q: "Combien coûte Odoo en Belgique en 2026 ?",
    a: "Le coût total dépend de trois composantes : la licence Enterprise (31,10 à 46,80 €/utilisateur/mois), l'hébergement (inclus sur Odoo Online, 60 à 200 €/mois sur Odoo.sh) et l'implémentation par un partenaire. Pour une PME belge de 10 utilisateurs et 4 modules, le TCO 3 ans se situe entre 14 000 € et 35 000 € tout compris.",
  },
  {
    q: "Quel est le prix d'une implémentation Odoo pour une PME ?",
    a: "Les fourchettes observées sur le marché belge vont de 800 € à 5 000 € pour un projet CRM + Facturation, de 2 000 € à 8 000 € pour CRM + Finance + Stock, et de 5 000 € à 25 000 € pour un ERP complet (CRM, Finance, Stock, RH, Production). Ces prix concernent la prestation d'implémentation et n'incluent pas les licences Odoo Enterprise.",
  },
  {
    q: "Quel taux horaire pour un consultant Odoo en Belgique ?",
    a: "Les taux horaires varient de 50 €/heure pour un freelance non certifié à plus de 200 €/heure pour un cabinet spécialisé grands comptes. Un intégrateur belge établi facture généralement entre 120 € et 180 €/heure. Les structures à équipe internationale peuvent proposer des tarifs 20 à 50 % inférieurs.",
  },
  {
    q: "Combien coûte la licence Odoo Enterprise par utilisateur ?",
    a: "En 2026, la licence Odoo Enterprise est facturée 31,10 €/utilisateur/mois en formule Standard et 46,80 €/utilisateur/mois en Custom (tarifs Odoo SA Belgique). Odoo Online inclut l'hébergement ; Odoo.sh ajoute environ 50 €/mois pour la plateforme dédiée.",
  },
  {
    q: "Quels sont les coûts cachés d'un projet Odoo ?",
    a: "Les principaux coûts souvent sous-estimés sont : les développements spécifiques non standard (environ 20 % des cas), la conduite du changement (1 à 2 jours de formation par profil utilisateur), le support post-démarrage (les 30 premiers jours après le go-live), et la migration de données historiques volumineuses.",
  },
  {
    q: "Quel est le TCO d'Odoo sur 3 ans pour une PME belge ?",
    a: "Pour une PME belge type (10 utilisateurs, 4 modules, hébergement Odoo Online), le TCO 3 ans tout compris (licence + hébergement + implémentation + support) se situe entre 14 000 € et 35 000 €. C'est généralement 30 à 50 % moins cher qu'un SAP Business One ou Sage X3 équivalent.",
  },
];

export default function TarifBePage() {
  useProductSeo({
    title: "Tarif Odoo Belgique 2026 — Guide complet des coûts du marché | MSL-iTECH",
    description:
      "Combien coûte Odoo en Belgique en 2026 ? Guide complet des fourchettes du marché : licence 31 à 47 €/utilisateur/mois, taux horaires 80 à 200 €/h, implémentation PME de 800 à 25 000 €. TCO 3 ans détaillé.",
    path: "/tarif-odoo-belgique",
    faqs,
    ldId: "ld-faq-tarif-be",
  });

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0F3F4A" }}>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 90% 0%, rgba(255,221,87,0.18), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(255,255,255,0.08), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <HeroCursorGlow color="rgba(255, 221, 87, 0.8)" size={500} intensity={0.4} />
        <div className="container relative py-20 lg:py-28 text-white">
          <p
            className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{
              backgroundColor: "rgba(255,221,87,0.14)",
              color: "var(--gold)",
              border: "1px solid rgba(255,221,87,0.35)",
            }}
          >
            <BookOpen size={12} /> Guide des coûts · Belgique 2026
          </p>
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.08] md:text-5xl lg:text-[3.25rem]">
            Combien coûte Odoo en Belgique en 2026 ?{" "}
            <span style={{ color: "var(--gold)" }}>Le guide complet des coûts du marché</span>
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg text-white/80">
            Licences, hébergement, taux horaires consultants, fourchettes d'implémentation :
            toutes les données du marché belge pour comparer et décider en connaissance de
            cause. Aucun formulaire requis, aucun piège commercial.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "white" }}
            >
              <ShieldCheck size={16} style={{ color: "var(--gold)" }} /> Source : partenaire officiel Odoo
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "white" }}
            >
              <Sparkles size={16} style={{ color: "var(--gold)" }} /> Données marché 2026 actualisées
            </span>
          </div>
        </div>
      </section>

      {/* LES 3 COMPOSANTES DU COÛT */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              Comprendre le coût total
            </p>
          </div>
          <h2 className="mt-3 max-w-3xl font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Les 3 composantes du coût Odoo <Mark>(ce qu'on oublie souvent)</Mark>
          </h2>
          <p className="mt-6 max-w-3xl font-body text-lg text-brand-grey">
            Le coût d'Odoo ne se résume pas à la prestation d'implémentation. Il se décompose
            en trois lignes distinctes — et la majorité des devis ne montrent que la troisième.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {composantes.map((c, i) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.title}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.2)]"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="absolute -top-3 right-5">
                    <Sticker rotate={i % 2 === 0 ? -6 : 6}>0{i + 1}</Sticker>
                  </div>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--blue)", color: "var(--gold)" }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-brand-black">{c.title}</h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                    {c.subtitle}
                  </p>
                  <p className="mt-4 font-body text-sm leading-relaxed text-brand-grey">{c.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOURCHETTES DU MARCHÉ */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              Fourchettes observées
            </p>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Fourchettes de prix du marché belge <Mark>2026</Mark>
          </h2>
          <p className="mt-4 max-w-3xl font-body text-base text-brand-grey">
            Ces fourchettes représentent les prix observés chez les intégrateurs Odoo certifiés
            en Belgique pour des projets PME bien cadrés. En dessous de ces seuils, méfiez-vous :
            ce sont rarement des prestations complètes.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead style={{ backgroundColor: "#0F3F4A", color: "white" }}>
                <tr>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">Périmètre</th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">
                    Fourchette marché
                  </th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">Heures typiques</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {fourchettes.map((r, i) => (
                  <tr key={r.scope} className={i % 2 ? "bg-muted/40" : ""}>
                    <td className="px-5 py-4 font-medium text-brand-black">{r.scope}</td>
                    <td className="px-5 py-4 font-semibold text-brand-black">{r.range}</td>
                    <td className="px-5 py-4 text-brand-grey">{r.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 flex items-start gap-2 text-xs text-brand-grey">
            <Info size={14} className="mt-0.5 shrink-0" />
            Fourchettes HTVA observées sur le marché belge en 2026. Les prix incluent la prestation
            d'implémentation uniquement — licences Odoo et hébergement en sus.
          </p>
        </div>
      </section>

      {/* TAUX HORAIRES DU MARCHÉ */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              Taux horaires consultants
            </p>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Taux horaires consultants Odoo en Belgique
          </h2>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead style={{ backgroundColor: "#0F3F4A", color: "white" }}>
                <tr>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">Type de prestataire</th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">Fourchette</th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.18em]">Note</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {tauxHoraires.map((r, i) => (
                  <tr key={r.type} className={i % 2 ? "bg-muted/40" : ""}>
                    <td className="px-5 py-4 font-medium text-brand-black">{r.type}</td>
                    <td className="px-5 py-4 font-semibold text-brand-black">{r.range}</td>
                    <td className="px-5 py-4 text-sm text-brand-grey">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FACTEURS DE VARIATION */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              Ce qui fait varier le prix
            </p>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Les 4 facteurs qui déterminent votre budget Odoo
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {facteurs.map((f, i) => {
              const Icon = f.icon;
              return (
                <article
                  key={f.title}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-7 transition hover:-translate-y-1 hover:shadow-md"
                  style={{ borderColor: "var(--grey-light)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "var(--blue)", color: "var(--gold)" }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">
                        Facteur 0{i + 1}
                      </p>
                      <h3 className="mt-1 font-heading text-lg font-bold text-brand-black">{f.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 font-body text-sm leading-relaxed text-brand-grey">{f.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TCO 3 ANS */}
      <section className="bg-background py-20">
        <div className="container max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-brand-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              TCO · Total Cost of Ownership
            </p>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Le calcul de TCO sur 3 ans <Mark>(la vraie question)</Mark>
          </h2>
          <p className="mt-6 font-body text-lg text-brand-grey">
            Ne regardez pas le prix d'implémentation seul — calculez le coût total de
            possession sur 3 ans : licence + hébergement + implémentation + support.
          </p>

          <div
            className="mt-10 overflow-hidden rounded-[24px] border p-8 md:p-10"
            style={{ borderColor: "var(--blue)", backgroundColor: "rgba(18,77,90,0.04)" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-blue">
              PME belge type · 10 utilisateurs · 4 modules · Odoo Online
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-4">
              {[
                { label: "Licences 3 ans", value: "3 700 – 5 600 €/an", sub: "×3 = 11 100 – 16 800 €" },
                { label: "Hébergement", value: "Inclus", sub: "(Odoo Online)" },
                { label: "Implémentation", value: "2 000 – 15 000 €", sub: "Selon périmètre" },
                { label: "Support annuel", value: "200 – 800 €/mois", sub: "Optionnel" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border bg-white p-4" style={{ borderColor: "var(--grey-light)" }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-grey">{item.label}</p>
                  <p className="mt-2 font-heading text-lg font-bold text-brand-blue">{item.value}</p>
                  <p className="mt-1 text-xs text-brand-grey">{item.sub}</p>
                </div>
              ))}
            </div>
            <div
              className="mt-6 rounded-xl p-5"
              style={{ backgroundColor: "var(--blue)" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gold">
                TCO estimé sur 3 ans
              </p>
              <p className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
                14 000 € — 35 000 €
              </p>
              <p className="mt-2 font-body text-sm text-white/80">
                Tout compris. Généralement 30 à 50 % moins cher qu'un SAP Business One ou
                Sage X3 équivalent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-20">
        <div className="container max-w-3xl">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-brand-blue" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
                FAQ · Coûts Odoo Belgique
              </p>
              <span className="h-px w-8 bg-brand-blue" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Questions fréquentes sur les coûts
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-2xl border bg-white px-6 py-5 transition open:shadow-[0_18px_45px_-22px_rgba(18,77,90,0.28)] hover:border-[var(--blue)]/30"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 font-heading text-lg font-semibold text-brand-black">
                  <span
                    aria-hidden
                    className="font-mono text-xs font-medium text-brand-grey"
                  >
                    0{i + 1}
                  </span>
                  <span className="flex-1">{f.q}</span>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg leading-none transition group-open:rotate-45"
                    style={{ backgroundColor: "var(--blue)", color: "var(--gold)" }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 pl-9 font-body text-base leading-relaxed text-brand-grey">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#0F3F4A" }}>
        <HeroCursorGlow color="rgba(255, 221, 87, 0.8)" size={500} intensity={0.4} />
        <div className="container relative text-center text-white">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
            <Sparkles size={12} className="text-brand-gold" />
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
              Prochaine étape
            </p>
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-heading text-3xl font-bold md:text-4xl">
            Vous connaissez les coûts du marché.{" "}
            <span style={{ color: "var(--gold)" }}>
              Obtenez un devis adapté à votre projet.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-white/80">
            Cadrage gratuit de 30 minutes · Devis détaillé sous 48h · Sans engagement
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold transition hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)", color: "#0F3F4A" }}
            >
              Demander mon devis sur mesure <ArrowRight size={16} />
            </Link>
            <Link
              to="/notre-approche"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Découvrir notre approche
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
