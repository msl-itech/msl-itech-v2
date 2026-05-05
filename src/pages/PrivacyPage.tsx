import { useProductSeo } from "@/hooks/useProductSeo";

export default function PrivacyPage() {
  useProductSeo({
    title: "Politique de confidentialité — MSL-iTECH",
    description:
      "Politique de confidentialité MSL-iTECH : données collectées, cookies, durées de conservation, droits RGPD et loi marocaine 09-08.",
    path: "/politique-de-confidentialite",
  });

  return (
    <main className="container py-16 md:py-24">
      <header className="mb-10 max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
          Mentions légales
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight text-brand-black md:text-5xl">
          Politique de confidentialité
        </h1>
        <p className="mt-4 font-mono text-xs text-brand-grey">
          Dernière mise à jour : Mai 2026
        </p>
      </header>

      <article
        className="prose prose-neutral max-w-3xl font-body text-brand-black
          prose-headings:font-heading prose-headings:text-brand-black
          prose-h2:mt-12 prose-h2:text-2xl prose-h2:font-bold
          prose-h3:mt-8 prose-h3:text-lg prose-h3:font-semibold
          prose-p:text-brand-black/85
          prose-li:text-brand-black/85
          prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
          prose-strong:text-brand-black
          prose-table:text-sm
          prose-th:bg-brand-bg prose-th:text-brand-black
          prose-td:align-top"
      >
        <h2>1. Responsable du traitement</h2>
        <p>
          Les données personnelles collectées sur le site msl-itech.com sont
          traitées par :
        </p>
        <p>
          <strong>MSL-iTECH</strong>
          <br />
          951 Q.I. Al Massar N°2, Route de Safi, Maroc
          <br />
          Email :{" "}
          <a href="mailto:info@msl-itech.com">info@msl-itech.com</a>
          <br />
          Téléphone Belgique : +32 2 886 05 49
          <br />
          Téléphone Maroc : +212 (0)2 886 05 49
          <br />
          Téléphone Canada : +1 204 650 0765
        </p>
        <p>
          MSL-iTECH opère sous deux cadres juridiques applicables selon la
          localisation du visiteur :
        </p>
        <ul>
          <li>
            <strong>Règlement Général sur la Protection des Données (RGPD)</strong>{" "}
            — Règlement UE 2016/679, applicable aux résidents de l'Union
            Européenne et de Belgique
          </li>
          <li>
            <strong>Loi marocaine n°09-08</strong> relative à la protection des
            personnes physiques à l'égard des traitements de données à caractère
            personnel
          </li>
        </ul>

        <h2>2. Données collectées</h2>
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

        <h2>3. Finalités du traitement</h2>
        <p>
          Vos données sont collectées et traitées pour les finalités suivantes :
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-brand-bg">
                <th className="border border-brand-grey/30 p-3 text-left font-heading text-brand-black">
                  Finalité
                </th>
                <th className="border border-brand-grey/30 p-3 text-left font-heading text-brand-black">
                  Base légale (RGPD)
                </th>
                <th className="border border-brand-grey/30 p-3 text-left font-heading text-brand-black">
                  Base légale (Loi 09-08)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-brand-grey/30 p-3 align-top">Répondre à vos demandes de contact ou de démo</td>
                <td className="border border-brand-grey/30 p-3 align-top">Exécution d'un contrat / intérêt légitime</td>
                <td className="border border-brand-grey/30 p-3 align-top">Consentement</td>
              </tr>
              <tr>
                <td className="border border-brand-grey/30 p-3 align-top">Qualifier votre projet et préparer votre démonstration</td>
                <td className="border border-brand-grey/30 p-3 align-top">Intérêt légitime</td>
                <td className="border border-brand-grey/30 p-3 align-top">Consentement</td>
              </tr>
              <tr>
                <td className="border border-brand-grey/30 p-3 align-top">Vous envoyer des offres et informations commerciales (si opt-in)</td>
                <td className="border border-brand-grey/30 p-3 align-top">Consentement explicite</td>
                <td className="border border-brand-grey/30 p-3 align-top">Consentement</td>
              </tr>
              <tr>
                <td className="border border-brand-grey/30 p-3 align-top">Améliorer notre site et nos services via l'analyse d'audience</td>
                <td className="border border-brand-grey/30 p-3 align-top">Intérêt légitime</td>
                <td className="border border-brand-grey/30 p-3 align-top">Consentement</td>
              </tr>
              <tr>
                <td className="border border-brand-grey/30 p-3 align-top">Respecter nos obligations légales et comptables</td>
                <td className="border border-brand-grey/30 p-3 align-top">Obligation légale</td>
                <td className="border border-brand-grey/30 p-3 align-top">Obligation légale</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Nous ne traitons jamais vos données à des fins autres que celles
          indiquées ci-dessus.
        </p>

        <h2>4. Cookies et outils de tracking</h2>
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

        <h2>5. Durée de conservation</h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-brand-bg">
                <th className="border border-brand-grey/30 p-3 text-left font-heading text-brand-black">Catégorie de données</th>
                <th className="border border-brand-grey/30 p-3 text-left font-heading text-brand-black">Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Données de contact (formulaire)", "3 ans à compter du dernier contact"],
                ["Données de qualification (formulaire démo)", "3 ans à compter du dernier contact"],
                ["Données clients (contrat signé)", "10 ans (obligation comptable et légale)"],
                ["Données newsletter / opt-in marketing", "Jusqu'à désinscription + 1 an"],
                ["Données de navigation (Google Analytics)", "14 mois (paramètre par défaut Google)"],
                ["Cookies de session", "Fin de session navigateur"],
                ["Cookies de préférences", "12 mois maximum"],
              ].map(([k, v]) => (
                <tr key={k}>
                  <td className="border border-brand-grey/30 p-3 align-top">{k}</td>
                  <td className="border border-brand-grey/30 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          À l'expiration de ces délais, vos données sont supprimées ou
          anonymisées de manière irréversible.
        </p>

        <h2>6. Destinataires des données</h2>
        <p>
          Vos données personnelles sont traitées en interne par les équipes
          MSL-iTECH. Elles peuvent être transmises aux sous-traitants suivants,
          dans le strict cadre des finalités décrites ci-dessus :
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-brand-bg">
                <th className="border border-brand-grey/30 p-3 text-left font-heading text-brand-black">Sous-traitant</th>
                <th className="border border-brand-grey/30 p-3 text-left font-heading text-brand-black">Finalité</th>
                <th className="border border-brand-grey/30 p-3 text-left font-heading text-brand-black">Localisation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-brand-grey/30 p-3 align-top">Google LLC (Google Analytics)</td>
                <td className="border border-brand-grey/30 p-3 align-top">Analyse d'audience</td>
                <td className="border border-brand-grey/30 p-3 align-top">USA — accord DPA RGPD</td>
              </tr>
              <tr>
                <td className="border border-brand-grey/30 p-3 align-top">Odoo S.A.</td>
                <td className="border border-brand-grey/30 p-3 align-top">Gestion CRM et rendez-vous</td>
                <td className="border border-brand-grey/30 p-3 align-top">Belgique</td>
              </tr>
              <tr>
                <td className="border border-brand-grey/30 p-3 align-top">Prestataire d'hébergement (Cloudflare)</td>
                <td className="border border-brand-grey/30 p-3 align-top">Infrastructure et sécurité</td>
                <td className="border border-brand-grey/30 p-3 align-top">USA — accord DPA RGPD</td>
              </tr>
            </tbody>
          </table>
        </div>
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

        <h2>7. Vos droits</h2>
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
          Vous avez également le droit d'introduire une réclamation auprès de l'
          <strong>Autorité de Protection des Données (APD) belge</strong> :
          <br />
          Site :{" "}
          <a
            href="https://www.autoriteprotectiondonnees.be"
            target="_blank"
            rel="noreferrer noopener"
          >
            www.autoriteprotectiondonnees.be
          </a>
          <br />
          Adresse : Rue de la Presse 35, 1000 Bruxelles
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

        <h2>8. Sécurité des données</h2>
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

        <h2>9. Mineurs</h2>
        <p>
          Notre site et nos services s'adressent exclusivement à des
          professionnels et entreprises. Nous ne collectons pas sciemment de
          données personnelles concernant des personnes de moins de 18 ans. Si
          vous avez connaissance qu'un mineur nous a transmis des données
          personnelles, contactez-nous immédiatement à{" "}
          <a href="mailto:info@msl-itech.com">info@msl-itech.com</a>.
        </p>

        <h2>10. Modifications de la présente politique</h2>
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

        <h2>11. Contact</h2>
        <p>
          Pour toute question relative à cette politique ou à l'exercice de vos
          droits :
        </p>
        <p>
          <strong>MSL-iTECH — Responsable des données</strong>
          <br />
          Email :{" "}
          <a href="mailto:info@msl-itech.com">info@msl-itech.com</a>
          <br />
          Téléphone Belgique : +32 2 886 05 49
          <br />
          Téléphone Maroc : +212 (0)2 886 05 49
        </p>
      </article>
    </main>
  );
}