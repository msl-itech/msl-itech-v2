import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  Users,
  Building2,
  TrendingUp,
  ArrowRight,
  MapPin,
  ShieldCheck,
  Lightbulb,
  Settings,
  Phone,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";

export default function AppointmentPage() {
  useProductSeo({
    title: "Prendre rendez-vous — MSL-iTECH",
    description:
      "Réservez un créneau de 30 minutes avec un consultant MSL-iTECH. Diagnostic gratuit de vos processus, recommandations personnalisées et feuille de route adaptée à votre budget. Sans engagement.",
    path: "/prendre-rendez-vous",
  });

  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-bg pt-6 md:pt-8">
        <div className="container">
          <div className="relative isolate overflow-hidden rounded-[28px] md:rounded-[36px] bg-brand-blue px-6 py-16 md:px-12 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full opacity-15 blur-3xl"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-brand-gold" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90">
                  Rendez-vous · MSL-iTECH
                </p>
              </div>

              <h1 className="mt-6 font-heading text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-[56px]">
                Prenez rendez-vous avec un{" "}
                <span className="italic font-light text-brand-gold">
                  expert Odoo et digital
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-white/80 md:text-lg">
                Réservez un créneau de 30 minutes avec l'un de nos consultants.
                Que vous envisagiez de déployer Odoo, de refondre votre site web
                ou de structurer votre stratégie marketing digital, cet échange
                est l'occasion de faire le point sur vos enjeux concrets — sans
                engagement et sans pression.
              </p>

              <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-white/70 md:text-base">
                Ce que vous retirez de cet appel : un diagnostic rapide de vos
                processus actuels, une feuille de route adaptée à votre budget et
                une vision claire du retour sur investissement attendu. Nos
                équipes basées à Marrakech, Bruxelles et Montréal accompagnent
                chaque jour des PME et des groupes multi-sites dans leur
                transformation digitale.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  <Clock size={12} className="text-brand-gold" /> 30 minutes
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  <ShieldCheck size={12} className="text-brand-gold" /> Sans engagement
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  <Calendar size={12} className="text-brand-gold" /> Créneau rapide
                </span>
              </div>
            </div>

            {/* Breadcrumb pill */}
            <div className="absolute -bottom-5 right-6 z-10 md:right-10">
              <div
                className="flex items-center gap-3 rounded-full border bg-brand-white px-5 py-2.5 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.25)]"
                style={{ borderColor: "var(--grey-light)" }}
              >
                <Link
                  to="/"
                  className="font-body text-sm text-brand-grey transition hover:text-brand-blue"
                >
                  Accueil
                </Link>
                <span className="text-brand-grey/40">/</span>
                <span className="font-body text-sm font-semibold text-brand-blue">
                  Rendez-vous
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IFRAME BOOKING */}
      <section className="py-10 md:py-14" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="overflow-hidden rounded-[24px] border border-brand-grey-light bg-white shadow-[0_24px_60px_-20px_rgba(18,77,90,0.12)]">
            <iframe
              src="https://odoo.msl-itech.com/appointment/4?iframe=1"
              title="Prendre rendez-vous avec MSL-iTECH"
              className="odoo-iframe block min-h-[800px] w-full"
              style={{
                background: "transparent",
                border: 0,
                display: "block",
              }}
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* VALUE — WHAT TO EXPECT */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
              <span className="inline-block h-px w-8 bg-brand-blue" />
              Déroulement
              <span className="inline-block h-px w-8 bg-brand-blue" />
            </p>
            <h2 className="font-heading text-3xl font-bold leading-[1.1] text-brand-black md:text-[2.5rem]">
              À quoi s'attendre lors de cet échange ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base text-brand-grey">
              Chaque rendez-vous est préparé à l'avance. Nous étudions votre
              secteur et vos outils actuels pour que les 30 minutes soient
              entièrement productives.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Lightbulb size={22} />,
                title: "Vos objectifs",
                text: "Nous commençons par écouter vos irritants du quotidien et vos ambitions de croissance pour cadrer la discussion.",
              },
              {
                icon: <Settings size={22} />,
                title: "Recommandations ciblées",
                text: "Nous vous proposons des axes d'amélioration concrets et les modules Odoo ou solutions web les plus pertinents pour votre cas.",
              },
              {
                icon: <CheckCircle2 size={22} />,
                title: "Devis & planning",
                text: "Vous repartez avec une estimation transparente, un calendrier réaliste et une feuille de route détaillée.",
              },
              {
                icon: <Users size={22} />,
                title: "Accompagnement continu",
                text: "De la formation des équipes au support post-mise en production, nous restons à vos côtés sur le long terme.",
              },
            ].map((item, i) => (
              <article
                key={i}
                className="group rounded-[24px] border border-brand-grey-light bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.18)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue text-brand-gold shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-grey">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS + AUDIENCE + TRUST */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Topics */}
            <div className="rounded-[28px] border border-brand-grey-light bg-white p-8 md:p-10">
              <h3 className="font-heading text-2xl font-bold text-brand-black">
                Que pouvons-nous aborder ensemble ?
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Implémentation Odoo (CRM, comptabilité, stock, production, paie)",
                  "Création web et e-commerce sur mesure",
                  "Marketing digital et génération de leads",
                  "Interconnexion de systèmes (EDI, e-commerce, comptabilité)",
                  "Structuration multi-sites et multi-sociétés",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight
                      size={16}
                      className="mt-1 shrink-0 text-brand-blue"
                    />
                    <span className="font-body text-sm text-brand-grey">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audience */}
            <div className="rounded-[28px] border border-brand-grey-light bg-white p-8 md:p-10">
              <h3 className="font-heading text-2xl font-bold text-brand-black">
                Cet entretien est utile si vous êtes…
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Une PME marocaine en structuration cherchant à professionnaliser sa gestion",
                  "Une entreprise multi-sites voulant unifier ses données et ses processus",
                  "Un dirigeant qui souhaite remplacer Sage, Excel ou des outils disjoints",
                  "Une équipe en croissance rapide ayant besoin d'automatiser ses flux",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-brand-gold"
                    />
                    <span className="font-body text-sm text-brand-grey">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <ShieldCheck size={20} />,
                label: "Intégrateur Odoo certifié",
                desc: "Plus de 10 ans d'expérience dans l'ERP open source.",
              },
              {
                icon: <Building2 size={20} />,
                label: "PME marocaines",
                desc: "Accompagnement sur mesure pour 10 à 80 utilisateurs.",
              },
              {
                icon: <MapPin size={20} />,
                label: "Présence locale",
                desc: "Bureaux à Marrakech, Bruxelles et Montréal.",
              },
              {
                icon: <TrendingUp size={20} />,
                label: "Méthodologie éprouvée",
                desc: "Cadrage, paramétrage, formation et support continu.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-[20px] border border-brand-grey-light bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue">
                  {item.icon}
                </div>
                <p className="mt-4 font-heading text-sm font-bold text-brand-black">
                  {item.label}
                </p>
                <p className="mt-1 font-body text-xs leading-relaxed text-brand-grey">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SHORTCUT */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--blue)" }}>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-white md:text-4xl">
              Vous préférez nous écrire directement ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base text-white/75">
              Si aucun créneau ne vous convient ou si vous avez une question
              urgente, notre équipe vous répond sous 24h par email ou téléphone.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:info@msl-itech.com"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-body text-sm font-bold text-brand-blue shadow-[0_18px_50px_-15px_rgba(255,221,87,0.45)] transition hover:scale-[1.02]"
              >
                <Sparkles size={14} />
                info@msl-itech.com
              </a>
              <a
                href="tel:+212689306278"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-body text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <Phone size={14} />
                +212 6 89 30 62 78
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
