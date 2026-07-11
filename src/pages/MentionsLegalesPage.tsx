import { Building2, Globe, Mail, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { useProductSeo } from "@/hooks/useProductSeo";
import {
  LegalHero,
  LegalLayout,
  SectionCard,
} from "@/components/legal/LegalShell";

const SECTIONS = [
  { id: "editeur", label: "Éditeur du site" },
  { id: "directeur", label: "Directeur de la publication" },
  { id: "hebergement", label: "Hébergement" },
  { id: "pi", label: "Propriété intellectuelle" },
  { id: "liens", label: "Liens hypertextes" },
  { id: "cookies", label: "Cookies & données" },
  { id: "responsabilite", label: "Limitation de responsabilité" },
  { id: "droit", label: "Droit applicable" },
  { id: "contact", label: "Contact" },
];

export default function MentionsLegalesPage() {
  useProductSeo({
    title: "Mentions légales — MSL-iTECH",
    description:
      "Mentions légales du site msl-itech.com : éditeur, hébergement, propriété intellectuelle, liens et droit applicable.",
    path: "/mentions-legales",
  });

  return (
    <main className="bg-brand-bg">
      <LegalHero
        sticker="Mentions légales"
        version="v1 — Mai 2026"
        titleStart="Mentions"
        titleAccent="légales"
        description="Informations légales relatives à l'éditeur du site msl-itech.com, son hébergement et ses conditions d'utilisation."
        badges={[
          { icon: Building2, label: "MSL-iTECH SARL" },
          { icon: Server, label: "Cloudflare · Supabase" },
          { icon: Globe, label: "MA · CA" },
        ]}
      />

      <LegalLayout sections={SECTIONS}>
        <SectionCard id="editeur" number="01" title="Éditeur du site">
          <div className="not-prose my-2 grid gap-2 rounded-2xl border-2 border-brand-black/10 bg-brand-bg p-5">
            <p className="font-heading text-lg font-bold text-brand-black">MSL-iTECH</p>
            <p className="font-body text-sm text-brand-black/75">
              Société à Responsabilité Limitée (SARL)
            </p>
            <p className="font-body text-sm text-brand-black/75">
              Siège social : 951 Q.I. Al Massar N°2, Route de Safi, Maroc
            </p>
            <p className="font-body text-sm text-brand-black/75">
              Email :{" "}
              <a className="font-medium text-brand-blue hover:underline" href="mailto:info@msl-itech.com">
                info@msl-itech.com
              </a>
            </p>
            <p className="font-body text-sm text-brand-black/75">
              Téléphone : +212 (0)2 886 05 49
            </p>
          </div>
          <p>Ligne de contact internationale (équipe basée au Maroc, accompagnement à distance) :</p>
          <ul>
            <li>Canada : +1 204 650 0765</li>
          </ul>
        </SectionCard>

        <SectionCard id="directeur" number="02" title="Directeur de la publication">
          <p>
            Le directeur de la publication du site msl-itech.com est le
            représentant légal de MSL-iTECH SARL.
          </p>
        </SectionCard>

        <SectionCard id="hebergement" number="03" title="Hébergement">
          <p>Le site msl-itech.com est hébergé et protégé par :</p>
          <div className="not-prose my-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-brand-black/10 bg-brand-bg p-5">
              <p className="font-heading text-base font-bold text-brand-black">Cloudflare, Inc.</p>
              <p className="mt-1 font-body text-sm text-brand-black/70">
                101 Townsend St, San Francisco, CA 94107, États-Unis
              </p>
              <a
                className="mt-2 inline-block font-mono text-[11px] uppercase tracking-[0.12em] text-brand-blue hover:underline"
                href="https://cloudflare.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                cloudflare.com
              </a>
            </div>
            <div className="rounded-2xl border-2 border-brand-black/10 bg-brand-bg p-5">
              <p className="font-heading text-base font-bold text-brand-black">Lovable (Supabase)</p>
              <p className="mt-1 font-body text-sm text-brand-black/70">
                Base de données et fonctions edge hébergées sur infrastructure
                Supabase.
              </p>
              <a
                className="mt-2 inline-block font-mono text-[11px] uppercase tracking-[0.12em] text-brand-blue hover:underline"
                href="https://supabase.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                supabase.com
              </a>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="pi" number="04" title="Propriété intellectuelle">
          <p>
            L'ensemble du contenu du site msl-itech.com — textes, graphismes,
            logos, icônes, images, vidéos, données, logiciels — est la propriété
            exclusive de MSL-iTECH ou de ses partenaires et est protégé par les
            lois applicables en matière de propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou
            adaptation de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite sans autorisation écrite
            préalable de MSL-iTECH.
          </p>
          <p>
            Le logo MSL-iTECH et les dénominations commerciales utilisées sur le
            site sont des marques déposées ou en cours de dépôt. Toute utilisation
            non autorisée constitue une contrefaçon.
          </p>
        </SectionCard>

        <SectionCard id="liens" number="05" title="Liens hypertextes">
          <h3>5.1 Liens sortants</h3>
          <p>
            Le site msl-itech.com peut contenir des liens vers des sites tiers.
            MSL-iTECH n'exerce aucun contrôle sur ces sites et décline toute
            responsabilité quant à leur contenu, leur disponibilité ou leur
            politique de confidentialité.
          </p>
          <h3>5.2 Liens entrants</h3>
          <p>
            Tout lien hypertexte pointant vers le site msl-itech.com doit faire
            l'objet d'une autorisation préalable écrite de MSL-iTECH, à l'exception
            des liens de type <em>deep link</em> à des fins d'information non
            commerciale.
          </p>
        </SectionCard>

        <SectionCard id="cookies" number="06" title="Cookies et données personnelles">
          <p>
            Le site utilise des cookies et collecte des données personnelles dans
            le respect du Règlement Général sur la Protection des Données (RGPD)
            et de la loi marocaine n°09-08.
          </p>
          <p>
            Pour toute information relative au traitement de vos données
            personnelles, consultez notre{" "}
            <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>{" "}
            ou notre{" "}
            <Link to="/conformite-loi-09-08">page de conformité Loi 09-08</Link>.
          </p>
        </SectionCard>

        <SectionCard id="responsabilite" number="07" title="Limitation de responsabilité">
          <p>
            MSL-iTECH s'efforce de maintenir les informations publiées sur le site
            à jour et exactes. Cependant, MSL-iTECH ne saurait garantir
            l'exactitude, la complétude ou l'actualité des informations diffusées.
          </p>
          <p>MSL-iTECH ne saurait être tenu responsable :</p>
          <ul>
            <li>Des interruptions temporaires d'accès au site dues à des opérations de maintenance ou à des incidents techniques</li>
            <li>Des dommages directs ou indirects résultant de l'utilisation du site</li>
            <li>Des éventuelles erreurs ou omissions dans le contenu du site</li>
          </ul>
        </SectionCard>

        <SectionCard id="droit" number="08" title="Droit applicable">
          <p>
            Les présentes mentions légales sont régies par le droit marocain
            pour ce qui concerne MSL-iTECH SARL.
          </p>
        </SectionCard>

        <SectionCard id="contact" number="09" title="Contact">
          <p>Pour toute question relative aux présentes mentions légales :</p>
          <div className="not-prose my-6 rounded-2xl border-2 border-brand-blue/15 bg-brand-blue p-6 text-brand-white">
            <p className="font-heading text-lg font-bold">MSL-iTECH</p>
            <div className="mt-3 space-y-2 font-body text-sm text-brand-white/85">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-gold" />
                <a className="text-brand-white underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold" href="mailto:info@msl-itech.com">
                  info@msl-itech.com
                </a>
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em]">
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
        </SectionCard>
      </LegalLayout>
    </main>
  );
}