import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useProductSeo } from "@/hooks/useProductSeo";
import {
  BrandTable,
  LegalHero,
  LegalLayout,
  SectionCard,
} from "@/components/legal/LegalShell";

const SECTIONS = [
  { id: "cadre", label: "Cadre légal" },
  { id: "responsable", label: "Responsable du traitement" },
  { id: "cndp", label: "Déclaration CNDP" },
  { id: "donnees", label: "Données collectées" },
  { id: "droits", label: "Droits des personnes" },
  { id: "conservation", label: "Durée de conservation" },
  { id: "securite", label: "Sécurité des données" },
  { id: "transferts", label: "Transferts hors Maroc" },
  { id: "cookies", label: "Cookies" },
  { id: "reclamations", label: "Réclamations" },
  { id: "maj", label: "Mise à jour" },
];

export default function Loi0908Page() {
  useProductSeo({
    title: "Conformité Loi 09-08 (Maroc) — MSL-iTECH",
    description:
      "Conformité MSL-iTECH à la loi marocaine n°09-08 sur la protection des données personnelles : déclaration CNDP, droits, durées et transferts.",
    path: "/conformite-loi-09-08",
  });

  return (
    <main className="bg-brand-bg">
      <LegalHero
        sticker="Conformité Maroc"
        version="v1 — Mai 2026"
        titleStart="Conformité"
        titleAccent="Loi 09-08"
        titleEnd="(Maroc)"
        description="Cadre marocain de protection des données à caractère personnel — droits, finalités, durées et garanties appliqués par MSL-iTECH SARL."
        badges={[
          { icon: ShieldCheck, label: "Loi n°09-08 & CNDP" },
          { icon: Mail, label: "Réponse sous 30 jours" },
          { icon: MapPin, label: "Siège : Maroc" },
        ]}
      />

      <LegalLayout sections={SECTIONS}>
        <SectionCard id="cadre" number="01" title="Cadre légal">
          <p>
            La loi n°09-08 relative à la protection des personnes physiques à
            l'égard des traitements de données à caractère personnel, promulguée
            le 18 février 2009 au Maroc, constitue le cadre juridique principal
            applicable aux traitements de données réalisés par MSL-iTECH sur le
            territoire marocain.
          </p>
          <p>Cette loi est complétée par :</p>
          <ul>
            <li>Le décret n°2-09-165 du 25 juin 2009 pris pour l'application de la loi n°09-08</li>
            <li>Les recommandations de la Commission Nationale de contrôle de la Protection des Données à caractère Personnel (CNDP)</li>
          </ul>
        </SectionCard>

        <SectionCard id="responsable" number="02" title="Responsable du traitement">
          <div className="not-prose my-2 grid gap-2 rounded-2xl border-2 border-brand-black/10 bg-brand-bg p-5">
            <p className="font-heading text-lg font-bold text-brand-black">MSL-iTECH SARL</p>
            <p className="flex items-start gap-2 font-body text-sm text-brand-black/75">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
              951 Q.I. Al Massar N°2, Route de Safi, Maroc
            </p>
            <p className="flex items-center gap-2 font-body text-sm text-brand-black/75">
              <Mail className="h-4 w-4 text-brand-blue" />
              <a className="font-medium text-brand-blue hover:underline" href="mailto:info@msl-itech.com">
                info@msl-itech.com
              </a>
            </p>
            <p className="flex items-center gap-2 font-body text-sm text-brand-black/75">
              <Phone className="h-4 w-4 text-brand-blue" />
              +212 (0)2 886 05 49
            </p>
          </div>
        </SectionCard>

        <SectionCard id="cndp" number="03" title="Déclaration CNDP">
          <p>
            Conformément à l'article 12 de la loi n°09-08, les traitements de
            données à caractère personnel mis en œuvre par MSL-iTECH ont fait
            l'objet des démarches de déclaration auprès de la CNDP.
          </p>
          <div className="not-prose my-4 rounded-2xl border-l-4 border-brand-gold bg-brand-gold/10 p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-blue">
              Statut
            </p>
            <p className="mt-2 font-body text-sm text-brand-black/80">
              MSL-iTECH a engagé les démarches de déclaration auprès de la CNDP
              conformément à la loi n°09-08. Le numéro de récépissé sera publié
              sur cette page dès réception.
            </p>
          </div>
        </SectionCard>

        <SectionCard id="donnees" number="04" title="Données collectées et finalités">
          <p>
            MSL-iTECH collecte et traite les données à caractère personnel
            suivantes dans le cadre de ses activités :
          </p>
          <BrandTable
            headers={["Catégorie de données", "Finalité", "Base légale"]}
            rows={[
              ["Nom, prénom, email, téléphone", "Répondre aux demandes de contact et de démonstration", "Consentement"],
              ["Nom de la société, secteur d'activité", "Qualification commerciale et préparation des projets", "Consentement"],
              ["Données de navigation (cookies analytiques)", "Amélioration du site et mesure d'audience", "Consentement"],
              ["Données contractuelles et de facturation", "Exécution du contrat et obligations comptables", "Obligation légale"],
            ]}
          />
          <p>
            MSL-iTECH s'engage à ne collecter que les données strictement
            nécessaires aux finalités déclarées, conformément au principe de
            minimisation des données prévu par la loi n°09-08.
          </p>
        </SectionCard>

        <SectionCard id="droits" number="05" title="Droits des personnes concernées">
          <p>
            Conformément aux articles 7 et suivants de la loi n°09-08, toute
            personne physique dont les données sont traitées par MSL-iTECH dispose
            des droits suivants :
          </p>
          <h3>Droit d'accès (article 7)</h3>
          <p>
            Toute personne peut demander à connaître les données à caractère
            personnel la concernant qui sont traitées par MSL-iTECH, leur origine,
            les finalités du traitement et les destinataires éventuels.
          </p>
          <h3>Droit de rectification (article 8)</h3>
          <p>
            Toute personne peut demander la correction de données inexactes,
            incomplètes, équivoques ou périmées.
          </p>
          <h3>Droit d'opposition (article 9)</h3>
          <p>
            Toute personne peut s'opposer, pour des motifs légitimes, au
            traitement de ses données à caractère personnel.
          </p>
          <h3>Droit de suppression</h3>
          <p>
            Dans les cas prévus par la loi, toute personne peut demander la
            suppression de ses données.
          </p>
          <h3>Exercice des droits</h3>
          <p>
            Pour exercer ces droits, adressez votre demande écrite à :{" "}
            <strong>
              <a href="mailto:info@msl-itech.com">info@msl-itech.com</a>
            </strong>{" "}
            — téléphone : +212 (0)2 886 05 49.
          </p>
          <p>
            MSL-iTECH s'engage à répondre à toute demande dans un délai de{" "}
            <strong>30 jours calendaires</strong> à compter de sa réception.
          </p>
        </SectionCard>

        <SectionCard id="conservation" number="06" title="Durée de conservation des données">
          <BrandTable
            headers={["Catégorie", "Durée"]}
            rows={[
              ["Données de contact (prospects)", "3 ans à compter du dernier contact"],
              ["Données clients (contrats)", "10 ans (obligation légale comptable)"],
              ["Données de navigation", "14 mois maximum"],
              ["Données marketing (opt-in)", "Jusqu'à désinscription + 1 an"],
            ]}
          />
          <p>
            À l'expiration de ces durées, les données sont supprimées ou
            anonymisées de manière irréversible.
          </p>
        </SectionCard>

        <SectionCard id="securite" number="07" title="Sécurité des données">
          <p>
            MSL-iTECH met en œuvre les mesures techniques et organisationnelles
            appropriées pour garantir la sécurité, l'intégrité et la
            confidentialité des données à caractère personnel traitées,
            conformément à l'article 23 de la loi n°09-08.
          </p>
          <ul>
            <li>Chiffrement des données en transit (HTTPS / TLS)</li>
            <li>Accès restreint aux seules personnes habilitées</li>
            <li>Protection assurée par Cloudflare (pare-feu applicatif, protection DDoS)</li>
            <li>Authentification sécurisée pour l'accès aux systèmes internes</li>
          </ul>
        </SectionCard>

        <SectionCard id="transferts" number="08" title="Transferts de données hors du Maroc">
          <p>
            Certains sous-traitants de MSL-iTECH sont établis en dehors du
            territoire marocain. Ces transferts sont effectués dans le respect des
            conditions prévues par l'article 43 de la loi n°09-08, qui exige que
            le pays destinataire assure un niveau de protection suffisant.
          </p>
          <BrandTable
            headers={["Sous-traitant", "Pays", "Garanties"]}
            rows={[
              ["Google LLC (Google Analytics)", "États-Unis", "Accord de traitement des données (DPA) conforme RGPD"],
              ["Cloudflare, Inc.", "États-Unis", "DPA conforme RGPD — Clauses contractuelles types"],
              ["Supabase", "États-Unis", "DPA conforme RGPD"],
              ["Odoo S.A.", "Belgique", "Pays à protection adéquate (UE)"],
            ]}
          />
        </SectionCard>

        <SectionCard id="cookies" number="09" title="Cookies">
          <p>
            Le site msl-itech.com utilise des cookies analytiques (Google
            Analytics) et des cookies de préférences. Conformément à la loi n°09-08
            et aux recommandations de la CNDP, ces cookies ne sont déposés
            qu'après recueil du consentement explicite du visiteur via le bandeau
            de gestion des cookies.
          </p>
          <p>
            Pour plus d'informations, consultez notre{" "}
            <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>.
          </p>
        </SectionCard>

        <SectionCard id="reclamations" number="10" title="Réclamations">
          <p>
            En cas de désaccord sur le traitement de vos données personnelles,
            vous pouvez introduire une réclamation auprès de la :
          </p>
          <div className="not-prose my-6 rounded-2xl border-2 border-brand-blue/15 bg-brand-blue p-6 text-brand-white">
            <p className="font-heading text-base font-bold">
              Commission Nationale de contrôle de la Protection des Données à
              caractère Personnel (CNDP)
            </p>
            <div className="mt-3 space-y-2 font-body text-sm text-brand-white/85">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                Angle avenue Annakhil et avenue Mehdi Ben Barka, Hay Riad, Rabat
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-gold" />
                +212 (0)537 57 98 00
              </p>
              <p>
                <a
                  className="text-brand-gold hover:underline"
                  href="https://www.cndp.ma"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  www.cndp.ma
                </a>
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="maj" number="11" title="Mise à jour">
          <p>
            La présente page de conformité est révisée à chaque évolution
            significative des traitements de données ou de la réglementation
            applicable. La date de dernière mise à jour est indiquée en haut de ce
            document.
          </p>
        </SectionCard>
      </LegalLayout>
    </main>
  );
}