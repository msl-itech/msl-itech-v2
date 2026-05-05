import { FileSignature, Mail, Phone, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { useProductSeo } from "@/hooks/useProductSeo";
import {
  BrandTable,
  LegalHero,
  LegalLayout,
  SectionCard,
} from "@/components/legal/LegalShell";

const SECTIONS = [
  { id: "vendeur", label: "Identification du vendeur" },
  { id: "champ", label: "Champ d'application" },
  { id: "services", label: "Services proposés" },
  { id: "contrat", label: "Formation du contrat" },
  { id: "tarifs", label: "Tarifs et paiement" },
  { id: "delais", label: "Délais d'exécution" },
  { id: "obligations", label: "Obligations des parties" },
  { id: "pi", label: "Propriété intellectuelle" },
  { id: "confidentialite", label: "Confidentialité" },
  { id: "responsabilite", label: "Responsabilité" },
  { id: "resiliation", label: "Résiliation" },
  { id: "droit", label: "Droit applicable" },
];

export default function CgvPage() {
  useProductSeo({
    title: "Conditions Générales de Vente — MSL-iTECH",
    description:
      "CGV MSL-iTECH : services Odoo, web et marketing digital. Tarifs, paiement, délais, propriété intellectuelle et juridiction (Belgique & Maroc).",
    path: "/conditions-generales-de-vente",
  });

  return (
    <main className="bg-brand-bg">
      <LegalHero
        sticker="Mentions légales"
        version="v1 — Mai 2026"
        titleStart="Conditions générales"
        titleAccent="de vente"
        description="Cadre contractuel applicable à toute commande de services MSL-iTECH — intégration Odoo, création web et marketing digital."
        badges={[
          { icon: FileSignature, label: "Devis & acompte 40 %" },
          { icon: Scale, label: "Droit BE & MA" },
          { icon: Mail, label: "info@msl-itech.com" },
        ]}
      />

      <LegalLayout sections={SECTIONS}>
        <SectionCard id="vendeur" number="01" title="Identification du vendeur">
          <p>Les présentes CGV sont conclues entre le client et :</p>
          <div className="not-prose my-6 grid gap-2 rounded-2xl border-2 border-brand-black/10 bg-brand-bg p-5">
            <p className="font-heading text-lg font-bold text-brand-black">MSL-iTECH</p>
            <p className="font-body text-sm text-brand-black/75">
              SARL — 951 Q.I. Al Massar N°2, Route de Safi, Maroc
            </p>
            <p className="flex items-center gap-2 font-body text-sm text-brand-black/75">
              <Mail className="h-4 w-4 text-brand-blue" />
              <a className="font-medium text-brand-blue hover:underline" href="mailto:info@msl-itech.com">
                info@msl-itech.com
              </a>
            </p>
            <p className="flex items-center gap-2 font-body text-sm text-brand-black/75">
              <Phone className="h-4 w-4 text-brand-blue" />
              MA +212 (0)2 886 05 49 · BE +32 2 886 05 49 · CA +1 204 650 0765
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-black/60">
              msl-itech.com
            </p>
          </div>
        </SectionCard>

        <SectionCard id="champ" number="02" title="Champ d'application">
          <p>
            Les présentes Conditions Générales de Vente (CGV) s'appliquent à toute
            commande de services passée auprès de MSL-iTECH, qu'il s'agisse de
            services d'intégration Odoo, de création de sites web ou de prestations
            de marketing digital.
          </p>
          <p>
            Toute commande implique l'acceptation pleine et entière des présentes
            CGV. MSL-iTECH se réserve le droit de modifier ses CGV à tout moment.
            La version applicable est celle en vigueur à la date de signature du
            devis ou du bon de commande.
          </p>
          <p>
            Les présentes CGV sont rédigées en français. En cas de traduction dans
            une autre langue, la version française fait foi.
          </p>
        </SectionCard>

        <SectionCard id="services" number="03" title="Services proposés">
          <h3>3.1 Intégration et implémentation Odoo</h3>
          <ul>
            <li>Analyse des besoins et cadrage du projet</li>
            <li>Configuration et paramétrage des modules Odoo</li>
            <li>Migration de données depuis les systèmes existants</li>
            <li>Formation des utilisateurs</li>
            <li>Support et maintenance post-déploiement</li>
            <li>Packs d'heures de consulting (Essentiel, Standard, Avancé, Premium, VIP, Elite)</li>
          </ul>
          <h3>3.2 Création de sites web</h3>
          <ul>
            <li>Conception et développement de sites web (Lovable, WordPress, JavaScript)</li>
            <li>Refonte et optimisation de sites existants</li>
            <li>Intégration de fonctionnalités sur mesure</li>
          </ul>
          <h3>3.3 Marketing digital</h3>
          <ul>
            <li>Audit SEO et stratégie de contenu</li>
            <li>Optimisation pour les moteurs de recherche (SEO) et les IA (GEO)</li>
            <li>Gestion de campagnes d'acquisition</li>
          </ul>
        </SectionCard>

        <SectionCard id="contrat" number="04" title="Formation du contrat">
          <h3>4.1 Devis</h3>
          <p>
            Toute prestation fait l'objet d'un devis préalable, établi gratuitement
            sur demande du client. Le devis précise la nature des prestations, le
            périmètre, le délai estimé et le prix HT.
          </p>
          <h3>4.2 Acceptation</h3>
          <p>
            Le contrat est formé à la date de réception par MSL-iTECH du devis
            signé et du premier acompte, sauf accord contraire explicitement
            mentionné dans le devis.
          </p>
          <h3>4.3 Modification du périmètre</h3>
          <p>
            Toute modification du périmètre initial demandée par le client après
            signature fait l'objet d'un avenant chiffré soumis à acceptation avant
            exécution.
          </p>
        </SectionCard>

        <SectionCard id="tarifs" number="05" title="Tarifs et conditions de paiement">
          <h3>5.1 Prix</h3>
          <p>
            Les prix sont indiqués hors taxes (HT). La TVA applicable est celle en
            vigueur au moment de la facturation, selon la localisation du client et
            la réglementation fiscale applicable.
          </p>
          <h3>5.2 Packs d'heures Odoo</h3>
          <BrandTable
            headers={["Pack", "Heures", "Prix HT (nouveau client)"]}
            rows={[
              ["Essentiel", "4h", "400 €"],
              ["Standard", "10h", "900 €"],
              ["Avancé", "25h", "2 000 €"],
              ["Premium", "50h", "3 500 €"],
              ["VIP", "100h", "5 400 €"],
              ["Elite", "200h", "8 500 €"],
            ]}
          />
          <p>
            Les prix en MAD sont disponibles sur demande pour les clients basés au
            Maroc. Les packs d'heures MSL-iTECH sont 20 à 50 % plus accessibles que
            les Success Packs observés sur le marché belge pour des volumes
            comparables.
          </p>
          <h3>5.3 Conditions de paiement</h3>
          <ul>
            <li>Acompte de 40 % à la signature du devis</li>
            <li>Solde de 60 % à la livraison finale ou à la mise en production</li>
            <li>Pour les packs d'heures : paiement intégral à la commande</li>
          </ul>
          <h3>5.4 Retard de paiement</h3>
          <p>
            <strong>Marché belge :</strong> Conformément à la loi belge du 2 août
            2002 relative à la lutte contre le retard de paiement, tout retard de
            paiement entraîne de plein droit et sans mise en demeure préalable
            l'application d'un intérêt de retard au taux légal majoré de 8 points,
            ainsi qu'une indemnité forfaitaire de 40 € pour frais de recouvrement.
          </p>
          <p>
            <strong>Marché marocain :</strong> Tout retard de paiement au-delà de
            30 jours à compter de la date d'échéance entraîne l'application d'une
            pénalité de retard de 1,5 % par mois de retard, calculée sur le montant
            TTC impayé.
          </p>
          <h3>5.5 Devise</h3>
          <p>
            Les factures émises pour les clients belges et européens sont libellées
            en euros (€). Les factures pour les clients marocains sont libellées en
            dirhams marocains (MAD) ou en euros selon accord préalable.
          </p>
        </SectionCard>

        <SectionCard id="delais" number="06" title="Délais d'exécution">
          <p>
            Les délais indiqués dans le devis sont donnés à titre indicatif.
            MSL-iTECH s'engage à respecter les délais convenus sous réserve de la
            bonne transmission par le client des éléments nécessaires à l'exécution
            de la prestation (contenus, accès, validations).
          </p>
          <p>
            Tout retard imputable au client suspend les délais contractuels.
            MSL-iTECH informera le client par écrit de tout retard prévisible de sa
            part dans les meilleurs délais.
          </p>
        </SectionCard>

        <SectionCard id="obligations" number="07" title="Obligations des parties">
          <h3>7.1 Obligations de MSL-iTECH</h3>
          <ul>
            <li>Exécuter les prestations avec soin et professionnalisme</li>
            <li>Respecter la confidentialité des informations communiquées par le client</li>
            <li>Informer le client de tout obstacle à la bonne exécution de la prestation</li>
            <li>Désigner un interlocuteur dédié pour le suivi du projet</li>
          </ul>
          <h3>7.2 Obligations du client</h3>
          <ul>
            <li>Fournir en temps utile tous les éléments, accès et informations nécessaires à la réalisation de la prestation</li>
            <li>Valider les livrables dans les délais convenus</li>
            <li>Désigner un interlocuteur habilité à prendre des décisions</li>
            <li>Régler les factures aux échéances convenues</li>
          </ul>
        </SectionCard>

        <SectionCard id="pi" number="08" title="Propriété intellectuelle">
          <h3>8.1 Livrables</h3>
          <p>
            À compter du paiement intégral des prestations, le client acquiert les
            droits d'utilisation des livrables produits par MSL-iTECH dans le cadre
            du projet concerné.
          </p>
          <h3>8.2 Outils et méthodes</h3>
          <p>
            MSL-iTECH conserve la propriété de ses outils, méthodes, templates et
            savoir-faire génériques développés indépendamment du projet client.
          </p>
          <h3>8.3 Logiciels tiers</h3>
          <p>
            Les licences des logiciels tiers utilisés dans le cadre du projet
            (Odoo, plugins, frameworks) restent régies par les conditions de leurs
            éditeurs respectifs. MSL-iTECH ne peut garantir la pérennité des
            fonctionnalités liées à des logiciels tiers.
          </p>
          <h3>8.4 Référence commerciale</h3>
          <p>
            Sauf refus écrit du client, MSL-iTECH se réserve le droit de mentionner
            le nom du client et de présenter les livrables produits à titre de
            référence commerciale (site web, portfolio, fiche partenaire Odoo).
          </p>
        </SectionCard>

        <SectionCard id="confidentialite" number="09" title="Confidentialité">
          <p>
            Les parties s'engagent mutuellement à garder strictement
            confidentielles toutes les informations échangées dans le cadre de la
            relation commerciale. Cette obligation de confidentialité s'applique
            pendant toute la durée du contrat et pendant une période de 3 ans après
            son terme.
          </p>
        </SectionCard>

        <SectionCard id="responsabilite" number="10" title="Responsabilité">
          <h3>10.1 Limitation de responsabilité</h3>
          <p>
            La responsabilité de MSL-iTECH est limitée aux préjudices directs et
            prévisibles, dans la limite du montant total de la prestation
            concernée. MSL-iTECH ne saurait être tenu responsable des préjudices
            indirects, pertes d'exploitation, pertes de données ou manque à gagner.
          </p>
          <h3>10.2 Force majeure</h3>
          <p>
            MSL-iTECH ne saurait être tenu responsable de tout retard ou
            inexécution résultant d'un cas de force majeure au sens de la loi
            applicable, notamment pandémie, catastrophe naturelle, défaillance des
            réseaux de télécommunication ou décision gouvernementale.
          </p>
          <h3>10.3 Logiciels tiers</h3>
          <p>
            MSL-iTECH n'est pas responsable des dysfonctionnements liés aux mises à
            jour, modifications ou interruptions de service des éditeurs de
            logiciels tiers (Odoo, Cloudflare, Supabase, etc.).
          </p>
        </SectionCard>

        <SectionCard id="resiliation" number="11" title="Résiliation">
          <h3>11.1 Résiliation à l'initiative du client</h3>
          <p>
            Le client peut résilier le contrat par courrier électronique avec
            accusé de réception. Les prestations déjà réalisées et les acomptes
            versés restent acquis à MSL-iTECH. Les heures de packs non consommées
            sont remboursables à hauteur de 50 % si la résiliation intervient avant
            utilisation.
          </p>
          <h3>11.2 Résiliation à l'initiative de MSL-iTECH</h3>
          <p>
            MSL-iTECH peut résilier le contrat en cas de manquement grave du client
            à ses obligations, notamment défaut de paiement ou non-transmission des
            éléments nécessaires à l'exécution, après mise en demeure restée sans
            effet pendant 15 jours ouvrables.
          </p>
        </SectionCard>

        <SectionCard id="droit" number="12" title="Droit applicable et juridiction compétente">
          <h3>12.1 Clients belges et européens</h3>
          <p>
            Les présentes CGV sont soumises au droit belge. En cas de litige, les
            parties s'engagent à rechercher une solution amiable avant tout recours
            judiciaire. À défaut d'accord amiable dans un délai de 30 jours, les
            tribunaux de Bruxelles (Belgique) seront seuls compétents.
          </p>
          <p>
            Les consommateurs belges disposent également du droit de recourir à la
            plateforme européenne de résolution des litiges en ligne :{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noreferrer noopener"
            >
              ec.europa.eu/consumers/odr
            </a>
          </p>
          <h3>12.2 Clients marocains</h3>
          <p>
            Les présentes CGV sont soumises au droit marocain. En cas de litige,
            les parties s'engagent à rechercher une solution amiable avant tout
            recours judiciaire. À défaut d'accord amiable dans un délai de 30
            jours, les tribunaux compétents de Casablanca (Maroc) seront seuls
            compétents.
          </p>
          <div className="not-prose mt-8 rounded-2xl border-2 border-brand-blue/15 bg-brand-blue p-6 text-brand-white">
            <p className="font-heading text-lg font-bold">Une question sur nos CGV ?</p>
            <p className="mt-2 font-body text-sm text-brand-white/85">
              Notre équipe répond sous 48h ouvrées.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-brand-blue transition hover:scale-[1.02]"
            >
              Nous contacter
            </Link>
          </div>
        </SectionCard>
      </LegalLayout>
    </main>
  );
}