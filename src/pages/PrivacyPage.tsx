import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useProductSeo } from "@/hooks/useProductSeo";

const SECTIONS = [
  { id: "responsable", label: "Responsable du traitement" },
  { id: "donnees", label: "Données collectées" },
  { id: "finalites", label: "Finalités du traitement" },
  { id: "cookies", label: "Cookies & tracking" },
  { id: "conservation", label: "Durée de conservation" },
  { id: "destinataires", label: "Destinataires des données" },
  { id: "droits", label: "Vos droits" },
  { id: "securite", label: "Sécurité des données" },
  { id: "mineurs", label: "Mineurs" },
  { id: "modifications", label: "Modifications" },
  { id: "contact", label: "Contact" },
];

function Sticker({ children, rotate = -4 }: { children: React.ReactNode; rotate?: number }) {
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

export default function PrivacyPage() {
  useProductSeo({
    title: "Politique de confidentialité — MSL-iTECH",
    description:
      "Politique de confidentialité MSL-iTECH : données collectées, cookies, durées de conservation, droits RGPD et loi marocaine 09-08.",
    path: "/politique-de-confidentialite",
  });

  return (
    <main className="bg-brand-bg">
      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-brand-black/10 bg-brand-blue text-brand-white">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="container relative py-20 md:py-28">
          <div className="mb-6 flex items-center gap-3">
            <Sticker>Mentions légales</Sticker>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-white/60">
              v6 — Mai 2026
            </span>
          </div>
          <h1 className="max-w-3xl font-heading text-4xl font-bold leading-[1.05] md:text-6xl">
            Politique de <span className="text-brand-gold">confidentialité</span>
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base text-brand-white/80 md:text-lg">
            Comment MSL-iTECH collecte, utilise et protège vos données personnelles —
            conforme RGPD (UE) et Loi 09-08 (Maroc).
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "Conforme RGPD & 09-08" },
              { icon: Mail, label: "Réponse sous 30 jours" },
              { icon: MapPin, label: "Données hébergées UE / MA" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-brand-white/15 bg-brand-white/5 px-4 py-3 backdrop-blur-sm"
              >
                <Icon className="h-4 w-4 text-brand-gold" />
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-white/85">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
          {/* TOC */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
              Sommaire
            </p>
            <nav className="flex flex-col gap-1 border-l-2 border-brand-black/10 pl-4">
              {SECTIONS.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-baseline gap-3 py-1.5 font-body text-sm text-brand-black/70 transition hover:text-brand-blue"
                >
                  <span className="font-mono text-[10px] text-brand-grey">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="group-hover:underline">{s.label}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* ARTICLE */}
          <article
            className="prose prose-neutral max-w-none font-body text-brand-black
              prose-headings:font-heading prose-headings:text-brand-black
              prose-h2:hidden
              prose-h3:mt-8 prose-h3:text-lg prose-h3:font-semibold
              prose-p:text-brand-black/80
              prose-li:text-brand-black/80
              prose-a:text-brand-blue prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-strong:text-brand-black
              prose-ul:my-4
              prose-li:my-1"
          >
            <SectionCard id="responsable" number="01" title="Responsable du traitement">
              <Sec>
        <p>
          Les données personnelles collectées sur le site msl-itech.com sont
          traitées par :
        </p>
        <div className="not-prose my-6 grid gap-3 rounded-2xl border-2 border-brand-black/10 bg-brand-bg p-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <p className="font-heading text-lg font-bold text-brand-black">MSL-iTECH</p>
            <p className="mt-1 flex items-start gap-2 font-body text-sm text-brand-black/75">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
              951 Q.I. Al Massar N°2, Route de Safi, Maroc
            </p>
          </div>
          <p className="flex items-center gap-2 font-body text-sm text-brand-black/75">
            <Mail className="h-4 w-4 text-brand-blue" />
            <a className="font-medium text-brand-blue hover:underline" href="mailto:info@msl-itech.com">
              info@msl-itech.com
            </a>
          </p>
          <p className="flex items-center gap-2 font-body text-sm text-brand-black/75">
            <Phone className="h-4 w-4 text-brand-blue" />
            MA +212 (0)2 886 05 49 · CA +1 204 650 0765
          </p>
        </div>
        <p>
          MSL-iTECH opère sous deux cadres juridiques applicables selon la
          localisation du visiteur :
        </p>
        <ul>
          <li>
            <strong>Règlement Général sur la Protection des Données (RGPD)</strong>{" "}
            — Règlement UE 2016/679, applicable aux résidents de l'Union
            Européenne
          </li>
          <li>
            <strong>Loi marocaine n°09-08</strong> relative à la protection des
            personnes physiques à l'égard des traitements de données à caractère
            personnel
          </li>
        </ul>
              </Sec>
            </SectionCard>

            <SectionCard id="donnees" number="02" title="Données collectées">
              <Sec>
        <p>
          Nous collectons les catégories de données suivantes selon les
          interactions que vous avez avec notre site :
        </p>
        <h3>Via les formulaires de contact et de réservation de démo</h3>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse email professionnelle</li>
          <li>Numéro de téléphone</li>
          <li>Nom de la société</li>
          <li>Taille de l'entreprise et secteur d'activité</li>
          <li>Description de votre projet ou besoin</li>
        </ul>
        <h3>Via le formulaire de qualification en 5 étapes</h3>
        <ul>
          <li>Objectifs professionnels</li>
          <li>Outils actuellement utilisés</li>
          <li>Processus métier et points de friction</li>
          <li>Informations sur votre organisation</li>
        </ul>
        <h3>Via la navigation sur le site (cookies)</h3>
        <ul>
          <li>Adresse IP anonymisée</li>
          <li>Type de navigateur et appareil</li>
          <li>Pages visitées et durée de visite</li>
          <li>Source de trafic (moteur de recherche, réseau social, lien direct)</li>
          <li>Données de localisation approximative (pays, région)</li>
        </ul>
              </Sec>
            </SectionCard>

            <SectionCard id="finalites" number="03" title="Finalités du traitement">
              <Sec>
        <p>
          Vos données sont collectées et traitées pour les finalités suivantes :
        </p>
        <BrandTable
          headers={["Finalité", "Base légale (RGPD)", "Base légale (Loi 09-08)"]}
          rows={[
            ["Répondre à vos demandes de contact ou de démo", "Exécution d'un contrat / intérêt légitime", "Consentement"],
            ["Qualifier votre projet et préparer votre démonstration", "Intérêt légitime", "Consentement"],
            ["Vous envoyer des offres et informations commerciales (si opt-in)", "Consentement explicite", "Consentement"],
            ["Améliorer notre site et nos services via l'analyse d'audience", "Intérêt légitime", "Consentement"],
            ["Respecter nos obligations légales et comptables", "Obligation légale", "Obligation légale"],
          ]}
        />
        <p>
          Nous ne traitons jamais vos données à des fins autres que celles
          indiquées ci-dessus.
        </p>
              </Sec>
            </SectionCard>

            <SectionCard id="cookies" number="04" title="Cookies et outils de tracking">
              <Sec>
        <p>
          Notre site utilise des cookies et technologies similaires. Voici les
          catégories de cookies déposés :
        </p>
        <h3>Cookies strictement nécessaires</h3>
        <p>
          Indispensables au fonctionnement du site. Ils ne peuvent pas être
          désactivés. Aucun consentement requis.
        </p>
        <ul>
          <li>Gestion de session</li>
          <li>Préférences de langue</li>
          <li>Sécurité des formulaires (protection CSRF)</li>
        </ul>
        <h3>Cookies analytiques — Google Analytics</h3>
        <p>
          Nous utilisons Google Analytics pour mesurer l'audience de notre site
          et améliorer notre contenu. Ces cookies collectent des données
          anonymisées sur votre navigation.
        </p>
        <p>
          Données collectées par Google Analytics : pages visitées, durée de
          session, source de trafic, type d'appareil, localisation approximative
          (pays/région).
        </p>
        <p>
          Les données sont traitées par Google Ireland Limited (pour les
          résidents UE) conformément au Data Processing Agreement RGPD. L'adresse
          IP est anonymisée avant transmission.
        </p>
        <p>
          Pour désactiver Google Analytics :{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noreferrer noopener"
          >
            Google Analytics Opt-out
          </a>
        </p>
        <h3>Cookies de préférences</h3>
        <p>
          Mémorisent vos choix sur le site (langue, préférences d'affichage).
          Durée : 12 mois maximum.
        </p>
        <h3>Cookies marketing (si opt-in uniquement)</h3>
        <p>
          Déposés uniquement si vous avez donné votre consentement explicite.
          Permettent de vous présenter des contenus pertinents selon votre
          navigation.
        </p>
        <h3>Gestion de vos préférences cookies</h3>
        <p>
          Lors de votre première visite, un bandeau vous permet d'accepter,
          refuser ou personnaliser les cookies non essentiels. Vous pouvez
          modifier vos préférences à tout moment en cliquant sur{" "}
          <strong>« Gérer mes cookies »</strong> en bas de chaque page du site.
        </p>
              </Sec>
            </SectionCard>

            <SectionCard id="conservation" number="05" title="Durée de conservation">
              <Sec>
        <BrandTable
          headers={["Catégorie de données", "Durée de conservation"]}
          rows={[
            ["Données de contact (formulaire)", "3 ans à compter du dernier contact"],
            ["Données de qualification (formulaire démo)", "3 ans à compter du dernier contact"],
            ["Données clients (contrat signé)", "10 ans (obligation comptable et légale)"],
            ["Données newsletter / opt-in marketing", "Jusqu'à désinscription + 1 an"],
            ["Données de navigation (Google Analytics)", "14 mois (paramètre par défaut Google)"],
            ["Cookies de session", "Fin de session navigateur"],
            ["Cookies de préférences", "12 mois maximum"],
          ]}
        />
        <p>
          À l'expiration de ces délais, vos données sont supprimées ou
          anonymisées de manière irréversible.
        </p>
              </Sec>
            </SectionCard>

            <SectionCard id="destinataires" number="06" title="Destinataires des données">
              <Sec>
        <p>
          Vos données personnelles sont traitées en interne par les équipes
          MSL-iTECH. Elles peuvent être transmises aux sous-traitants suivants,
          dans le strict cadre des finalités décrites ci-dessus :
        </p>
        <BrandTable
          headers={["Sous-traitant", "Finalité", "Localisation"]}
          rows={[
            ["Google LLC (Google Analytics)", "Analyse d'audience", "USA — accord DPA RGPD"],
            ["Odoo S.A.", "Gestion CRM et rendez-vous", "Union Européenne"],
            ["Prestataire d'hébergement (Cloudflare)", "Infrastructure et sécurité", "USA — accord DPA RGPD"],
          ]}
        />
        <p>
          Nous ne vendons jamais vos données à des tiers. Nous ne les
          transmettons pas à des fins publicitaires sans votre consentement
          explicite.
        </p>
        <h3>Transferts hors UE / hors Maroc</h3>
        <p>
          Certains de nos sous-traitants sont établis aux États-Unis. Ces
          transferts sont encadrés par les Clauses Contractuelles Types
          approuvées par la Commission Européenne et par les garanties
          appropriées prévues par la loi marocaine 09-08.
        </p>
              </Sec>
            </SectionCard>

            <SectionCard id="droits" number="07" title="Vos droits">
              <Sec>
        <h3>En tant que résident de l'Union Européenne (RGPD)</h3>
        <p>Vous disposez des droits suivants sur vos données personnelles :</p>
        <ul>
          <li><strong>Droit d'accès</strong> — obtenir une copie des données que nous détenons sur vous</li>
          <li><strong>Droit de rectification</strong> — corriger des données inexactes ou incomplètes</li>
          <li><strong>Droit à l'effacement</strong> — demander la suppression de vos données (« droit à l'oubli »)</li>
          <li><strong>Droit à la limitation</strong> — suspendre le traitement de vos données dans certains cas</li>
          <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format structuré et lisible par machine</li>
          <li><strong>Droit d'opposition</strong> — vous opposer au traitement basé sur l'intérêt légitime ou à des fins de prospection</li>
          <li><strong>Droit de retirer votre consentement</strong> — à tout moment, sans que cela n'affecte la licéité du traitement antérieur</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à :{" "}
          <strong>
            <a href="mailto:info@msl-itech.com">info@msl-itech.com</a>
          </strong>
          .<br />
          Nous répondons à toute demande sous{" "}
          <strong>30 jours calendaires</strong>.
        </p>
        <p>
          Vous avez également le droit d'introduire une réclamation auprès de
          l'autorité de contrôle compétente de votre pays de résidence dans
          l'Union Européenne.
        </p>
        <h3>En tant que résident du Maroc (Loi 09-08)</h3>
        <p>
          Conformément à la loi n°09-08, vous disposez des droits suivants :
        </p>
        <ul>
          <li><strong>Droit d'accès</strong> — connaître les données traitées vous concernant</li>
          <li><strong>Droit de rectification</strong> — faire corriger des données inexactes</li>
          <li><strong>Droit d'opposition</strong> — vous opposer au traitement de vos données pour des motifs légitimes</li>
          <li><strong>Droit de suppression</strong> — dans les cas prévus par la loi</li>
        </ul>
        <p>
          Pour exercer ces droits :{" "}
          <strong>
            <a href="mailto:info@msl-itech.com">info@msl-itech.com</a>
          </strong>
        </p>
        <p>
          Vous pouvez également introduire une réclamation auprès de la{" "}
          <strong>
            Commission Nationale de contrôle de la Protection des Données à
            caractère Personnel (CNDP)
          </strong>{" "}
          :<br />
          Site :{" "}
          <a href="https://www.cndp.ma" target="_blank" rel="noreferrer noopener">
            www.cndp.ma
          </a>
        </p>
              </Sec>
            </SectionCard>

            <SectionCard id="securite" number="08" title="Sécurité des données">
              <Sec>
        <p>
          MSL-iTECH met en œuvre les mesures techniques et organisationnelles
          suivantes pour protéger vos données :
        </p>
        <ul>
          <li>Chiffrement des données en transit (protocole HTTPS / TLS)</li>
          <li>Accès aux données restreint aux personnes habilitées</li>
          <li>Authentification sécurisée pour l'accès aux systèmes internes</li>
          <li>Protection assurée par Cloudflare (pare-feu applicatif, protection DDoS)</li>
          <li>Hébergement sur infrastructure certifiée</li>
        </ul>
        <p>
          En cas de violation de données susceptible d'affecter vos droits, nous
          nous engageons à notifier les autorités compétentes dans les délais
          légaux (72h pour le RGPD) et à vous informer si la violation présente
          un risque élevé pour vos droits et libertés.
        </p>
              </Sec>
            </SectionCard>

            <SectionCard id="mineurs" number="09" title="Mineurs">
              <Sec>
        <p>
          Notre site et nos services s'adressent exclusivement à des
          professionnels et entreprises. Nous ne collectons pas sciemment de
          données personnelles concernant des personnes de moins de 18 ans. Si
          vous avez connaissance qu'un mineur nous a transmis des données
          personnelles, contactez-nous immédiatement à{" "}
          <a href="mailto:info@msl-itech.com">info@msl-itech.com</a>.
        </p>
              </Sec>
            </SectionCard>

            <SectionCard id="modifications" number="10" title="Modifications de la présente politique">
              <Sec>
        <p>
          Nous nous réservons le droit de mettre à jour cette politique de
          confidentialité pour refléter les évolutions légales, réglementaires
          ou opérationnelles. La date de dernière mise à jour est indiquée en
          tête de document.
        </p>
        <p>
          En cas de modification substantielle, nous vous en informerons par
          email (si vous êtes client ou abonné à notre newsletter) ou via un
          avis visible sur le site.
        </p>
        <p>
          La version en vigueur est toujours accessible à l'adresse :{" "}
          <strong>msl-itech.com/politique-de-confidentialite</strong>
        </p>
              </Sec>
            </SectionCard>

            <SectionCard id="contact" number="11" title="Contact">
              <Sec>
        <p>
          Pour toute question relative à cette politique ou à l'exercice de vos
          droits :
        </p>
        <div className="not-prose my-6 rounded-2xl border-2 border-brand-blue/15 bg-brand-blue p-6 text-brand-white">
          <p className="font-heading text-lg font-bold">MSL-iTECH — Responsable des données</p>
          <div className="mt-3 space-y-2 font-body text-sm text-brand-white/85">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-gold" />
              <a className="text-brand-gold hover:underline" href="mailto:info@msl-itech.com">
                info@msl-itech.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-gold" />
              MA +212 (0)2 886 05 49
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-brand-blue transition hover:scale-[1.02]"
          >
            Nous contacter
          </Link>
        </div>
              </Sec>
            </SectionCard>
          </article>
        </div>
      </section>
    </main>
  );
}

/* ---------------- Building blocks ---------------- */

function SectionCard({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="not-prose mb-8 scroll-mt-28 rounded-3xl border-2 border-brand-black/10 bg-brand-white p-6 shadow-[0_2px_0_0_hsl(var(--foreground)/0.04)] md:p-10"
    >
      <div className="mb-6 flex items-center gap-4 border-b-2 border-brand-black/5 pb-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold font-mono text-sm font-bold text-brand-blue">
          {number}
        </span>
        <h2 className="font-heading text-xl font-bold text-brand-black md:text-2xl">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

function Sec({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-body text-[15px] leading-relaxed text-brand-black/80
        [&_p]:my-4 [&_p]:leading-relaxed
        [&_strong]:font-semibold [&_strong]:text-brand-black
        [&_a]:font-medium [&_a]:text-brand-blue [&_a]:underline [&_a]:decoration-brand-gold [&_a]:decoration-2 [&_a]:underline-offset-4 hover:[&_a]:text-brand-black
        [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:pl-4 [&_h3]:border-l-4 [&_h3]:border-brand-gold
        [&_h3]:font-heading [&_h3]:text-[13px] [&_h3]:font-bold [&_h3]:uppercase [&_h3]:tracking-[0.15em] [&_h3]:text-brand-blue
        [&_ul]:my-5 [&_ul]:space-y-2 [&_ul]:pl-0 [&_ul]:list-none
        [&_ul>li]:relative [&_ul>li]:pl-6 [&_ul>li]:leading-relaxed
        [&_ul>li]:before:content-[''] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.6em]
        [&_ul>li]:before:h-1.5 [&_ul>li]:before:w-1.5 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-brand-gold
      "
    >
      {children}
    </div>
  );
}

function BrandTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-2xl border-2 border-brand-black/10">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-brand-blue text-brand-white">
              {headers.map((h) => (
                <th
                  key={h}
                  className="p-3 text-left font-mono text-[10px] uppercase tracking-[0.12em]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-brand-white">
            {rows.map((r, i) => (
              <tr
                key={i}
                className="border-t border-brand-black/5 transition hover:bg-brand-bg"
              >
                {r.map((c, j) => (
                  <td
                    key={j}
                    className="p-3 align-top font-body text-sm text-brand-black/80"
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}