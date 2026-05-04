import { Layers, Boxes, GraduationCap, Wallet } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import heroImg from "@/assets/finance-hero.webp";

const features = [
  {
    icon: Layers,
    title: "Un seul outil pour tout piloter",
    desc: "CRM, facturation, stock, comptabilité, RH — tout dans un seul environnement. Vos données circulent automatiquement d'un module à l'autre. Une commande confirmée génère une livraison, une facture et une écriture comptable sans ressaisie.",
  },
  {
    icon: Boxes,
    title: "Un déploiement calibré à votre périmètre réel",
    desc: "Vous n'avez pas besoin de 200 fonctionnalités dès le premier jour. MSL-iTECH déploie Odoo par blocs prioritaires — les modules qui résolvent vos problèmes immédiats en premier, les extensions ensuite, selon votre rythme de croissance.",
  },
  {
    icon: GraduationCap,
    title: "Une prise en main rapide pour vos équipes",
    desc: "Un ERP que vos collaborateurs n'utilisent pas est un investissement perdu. Nos consultants forment vos équipes sur votre configuration réelle — pas sur une démo générique. Objectif : autonomie complète à la fin du déploiement.",
  },
  {
    icon: Wallet,
    title: "Des tarifs accessibles à votre réalité budgétaire",
    desc: "MSL-iTECH propose des packs d'heures 20 à 50% plus accessibles que les Success Packs observés sur le marché belge, sur des volumes comparables. Une PME de 20 salariés n'a pas à payer le tarif d'un grand groupe pour bénéficier d'une expertise certifiée.",
  },
];

const faqs = [
  {
    q: "Odoo est-il adapté aux PME de moins de 20 salariés ?",
    a: "Oui. Odoo est conçu pour s'adapter à la taille de l'organisation. Une PME de 8 personnes peut déployer uniquement les modules dont elle a besoin — CRM + facturation + comptabilité, par exemple — et étendre progressivement. MSL-iTECH dimensionne toujours le périmètre du projet à la taille réelle du client, pas à un modèle standard.",
  },
  {
    q: "Quel budget prévoir pour implémenter Odoo dans une PME de 10 à 30 salariés ?",
    a: "Pour une PME de cette taille avec un périmètre standard (CRM, facturation, stock, comptabilité), le projet se situe généralement entre un pack Standard (10h) et un pack Avancé (25h) selon la complexité des processus et le volume de données à migrer. MSL-iTECH publie sa grille tarifaire complète sur la page Tarifs.",
  },
  {
    q: "Combien de temps dure le déploiement pour une PME ?",
    a: "Pour une PME standard avec un périmètre de 3 à 5 modules, le déploiement s'étale entre 4 et 10 semaines selon la complexité des processus existants et la disponibilité des équipes pour les ateliers de configuration.",
  },
  {
    q: "Peut-on commencer avec quelques modules et en ajouter d'autres plus tard ?",
    a: "Oui — c'est même l'approche recommandée par MSL-iTECH. Démarrer avec les modules qui résolvent vos problèmes immédiats, stabiliser, puis étendre. Odoo est conçu pour cette évolution progressive.",
  },
];

export default function PmeStructurationPage() {
  useProductSeo({
    title: "Odoo pour PME en structuration — ERP sur mesure 5 à 50 salariés | MSL-iTECH",
    description:
      "Votre PME a dépassé Excel mais pas encore les moyens d'un grand cabinet ERP ? MSL-iTECH implémente Odoo pour les PME de 5 à 50 salariés. Partenaire officiel certifié. Démo gratuite.",
    path: "/pme-en-structuration",
    faqs,
    ldId: "ld-faq-pme-structuration",
  });

  return (
    <ProductPageShell
      eyebrow="PME en structuration"
      title={
        <>
          Votre PME grandit plus vite que vos outils —{" "}
          <span style={{ color: "var(--gold)" }}>Odoo structure</span> ce que
          vous avez <em className="font-heading italic">construit</em>
        </>
      }
      intro="Vous gérez entre 5 et 50 personnes. Vos processus tiennent encore — mais à quel prix. Chaque semaine, des heures perdues à consolider des données éparpillées entre Excel, emails et outils déconnectés. Votre croissance mérite une infrastructure qui suit le rythme, pas qui le freine."
      heroImage={heroImg}
      heroImageAlt="Odoo ERP pour PME en structuration"
      metaNote="Diagnostic 30 minutes · Sans engagement · Réponse sous 24-72h"
      featuresEyebrow="Le seuil critique que vous avez atteint"
      featuresTitle="Ce qu'Odoo change pour une PME de votre taille"
      features={features}
      whySection={{
        title: "Ce que vous obtenez avec MSL-iTECH",
        desc: "Entre 5 et 50 salariés, vous êtes au moment le plus délicat : trop grand pour improviser, trop petit pour gaspiller du temps et de l'argent sur un outil inadapté. Nous configurons Odoo à votre périmètre réel, migrons vos données et formons vos équipes pour atteindre l'autonomie.",
        points: [
          "Analyse de vos besoins réels avant toute configuration",
          "Déploiement des modules prioritaires selon votre cycle d'activité",
          "Migration de vos données existantes (Excel, ancien logiciel)",
          "Formation de vos équipes sur votre instance",
          "Support réactif — réponse sous 24 à 72h ouvrables",
          "Partenaire officiel Odoo — vérifiable sur odoo.com/partners",
        ],
      }}
      faqs={faqs}
      ctaTitle="Réserver ma démo gratuite — PME en structuration"
      ctaSubtitle="Diagnostic de vos besoins · 30 minutes · Sans engagement · Réponse sous 24 à 72h ouvrables"
    />
  );
}