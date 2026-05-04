import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  ExternalLink,
  Code2,
  Layers,
  Megaphone,
  Settings2,
  Briefcase,
  ClipboardList,
  Brain,
} from "lucide-react";
import { useProductSeo } from "@/hooks/useProductSeo";

const team = [
  {
    name: "Arnaud AHOUO",
    role: "Expert Backend",
    icon: Code2,
    desc: "Développeur backend Odoo avec une expertise profonde sur les modules de gestion opérationnelle. Il traduit vos processus métier en configurations Odoo qui tiennent dans le temps.",
  },
  {
    name: "Elohim TAGNE",
    role: "Développeur Full Stack",
    icon: Layers,
    desc: "Polyvalent et rigoureux, Elohim intervient sur les développements spécifiques et les intégrations complexes. Son profil technique couvre Odoo, React et les API tierces.",
  },
  {
    name: "El Houssine BOUHMAIDA",
    role: "Consultant Odoo Senior",
    icon: Settings2,
    desc: "Le référent technique Odoo de l'équipe. Expert en paramétrage avancé, migrations de données et formations utilisateurs. Il garantit la qualité de chaque implémentation.",
  },
  {
    name: "Mika MUNSUGAYI",
    role: "Stratège & Direction",
    icon: Briefcase,
    desc: "Fondateur et directeur de MSL-iTECH. Il pilote la stratégie commerciale et financière du groupe, et assure la cohérence entre les entités belges et marocaines.",
  },
  {
    name: "Romeo KAHOU",
    role: "Chef de Projet",
    icon: ClipboardList,
    desc: "Chef d'orchestre des projets clients. Il coordonne les équipes, assure le respect des délais et est l'interlocuteur privilégié des clients tout au long de l'implémentation.",
  },
  {
    name: "Manal AIT AYAD",
    role: "Machine Learning & Data",
    icon: Brain,
    desc: "Experte en intelligence artificielle appliquée, Manal développe les capacités analytiques et prédictives des implémentations Odoo pour les clients ayant des besoins avancés en reporting et prédiction.",
  },
];

export default function AboutPage() {
  useProductSeo({
    title: "À Propos de MSL-iTECH — Équipe & Expertise Odoo | Belgique & Maroc",
    description:
      "Découvrez MSL-iTECH, partenaire officiel Odoo depuis 2020. Équipe de 7 experts en Belgique, Maroc et Canada. Références publiques vérifiables sur odoo.com/partners.",
    path: "/a-propos",
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
        <div className="container relative py-20 lg:py-28 text-white">
          <p
            className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{
              backgroundColor: "rgba(255,221,87,0.14)",
              color: "var(--gold)",
              border: "1px solid rgba(255,221,87,0.35)",
            }}
          >
            <Sparkles size={12} /> À propos · MSL-iTECH
          </p>
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.08] md:text-5xl lg:text-[3.25rem]">
            Nous sommes MSL-iTECH — l'intégrateur Odoo qui structure votre entreprise, construit
            votre présence et{" "}
            <span style={{ color: "var(--gold)" }}>accélère votre croissance</span>
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg text-white/80">
            Depuis 2020, MSL-iTECH accompagne des PME en Belgique, au Maroc et au Canada dans leur
            transformation digitale. Les PME ambitieuses méritent les mêmes outils que les grandes
            entreprises — sans les tarifs des grands cabinets ni les délais des intégrateurs
            génériques.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-background py-20">
        <div className="container max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Notre histoire
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Une expertise Odoo certifiée, une présence belge de proximité
          </h2>
          <p className="mt-6 font-body text-lg text-brand-grey">
            MSL-iTECH a été fondée avec une vision claire : combiner l'expertise certifiée Odoo
            d'une équipe technique au Maroc avec la rigueur et la connaissance du tissu économique
            belge. Cette double présence nous permet de livrer des projets de qualité
            internationale à des tarifs compétitifs — et d'être présents localement pour nos
            clients dans les deux pays.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            Notre équipe
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            7 experts au service de votre transformation digitale
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => {
              const Icon = m.icon;
              return (
                <article
                  key={m.name}
                  className="rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #0F3F4A 0%, #1a5f6e 100%)",
                        color: "var(--gold)",
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-brand-black">
                        {m.name}
                      </h3>
                      <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-blue">
                        {m.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 font-body text-sm text-brand-grey">{m.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-background py-20">
        <div className="container">
          <div
            className="rounded-2xl border border-border p-10 lg:p-14"
            style={{ backgroundColor: "rgba(15,63,74,0.04)" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: "rgba(255,221,87,0.18)", color: "#0F3F4A" }}
              >
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
                  Nos certifications
                </p>
                <h2 className="mt-2 max-w-3xl font-heading text-2xl font-bold text-brand-black md:text-3xl">
                  Partenaire officiel Odoo — vérifiable publiquement
                </h2>
                <p className="mt-4 max-w-3xl font-body text-base text-brand-grey">
                  MSL-iTECH figure sur la fiche officielle des partenaires Odoo. Vous pouvez y
                  vérifier notre statut de partenaire, nos références publiques et notre présence
                  dans l'écosystème Odoo. C'est une preuve simple, externe et vérifiable de notre
                  légitimité.
                </p>
                <a
                  href="https://www.odoo.com/partners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold transition hover:opacity-90"
                  style={{ backgroundColor: "#0F3F4A", color: "white" }}
                >
                  Voir notre fiche sur odoo.com/partners <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#0F3F4A" }}>
        <div className="container text-center text-white">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Rencontrons-nous — <span style={{ color: "var(--gold)" }}>Réserver une démo</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-white/80">
            30 minutes avec un consultant dédié · Sans engagement
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold transition hover:opacity-90"
            style={{ backgroundColor: "var(--gold)", color: "#0F3F4A" }}
          >
            Réserver ma démo <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
