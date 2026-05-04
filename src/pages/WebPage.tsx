import { Code2, Globe, Rocket } from "lucide-react";
import { ProductPageShell } from "@/components/product/ProductPageShell";
import { useProductSeo } from "@/hooks/useProductSeo";
import webHero from "@/assets/web-hero.webp";

const features = [
  {
    icon: Code2,
    title: "React / Lovable — pour les projets ambitieux",
    desc: "Performance maximale, personnalisation totale, expérience utilisateur irréprochable. Délai : 6 à 12 semaines selon la complexité.",
  },
  {
    icon: Globe,
    title: "WordPress — pour une présence rapide et efficace",
    desc: "Déployé en 2 à 6 semaines, facile à maintenir en autonomie, excellent rapport qualité-prix.",
  },
  {
    icon: Rocket,
    title: "Ce que tous nos sites intègrent",
    desc: "Optimisation SEO dès la conception, compatibilité mobile, temps de chargement optimisé, pré-rendu pour l'indexation, formulaire de conversion et analytics.",
  },
];

export default function WebPage() {
  useProductSeo({
    title: "Création Site Web Professionnel — React & WordPress | MSL-iTECH",
    description:
      "Sites web React haute performance ou WordPress rapides. Conçus pour convertir et optimisés pour être trouvés. Belgique & Maroc. Devis gratuit.",
    path: "/creation-web",
  });

  return (
    <ProductPageShell
      eyebrow="Création Web — Belgique & Maroc"
      title={
        <>
          Votre site web doit travailler pour vous — pas se contenter{" "}
          <span style={{ color: "var(--gold)" }}>d'exister</span>
        </>
      }
      intro="Un site web qui ne génère pas de leads est un coût. Un site web qui convertit est un investissement. MSL-iTECH conçoit des sites professionnels qui répondent à une question simple : est-ce que votre visiteur comprend ce que vous faites en moins de 10 secondes ?"
      heroImage={webHero}
      heroImageAlt="Création de site web professionnel React et WordPress par MSL-iTECH"
      metaNote="Devis gratuit · Réponse sous 24 à 72h ouvrables · Sans engagement"
      featuresEyebrow="Deux technologies, deux cas d'usage"
      featuresTitle="Combien d'opportunités perdez-vous chaque mois ?"
      features={features}
      whySection={{
        title: "Ce que tous nos sites intègrent",
        desc: "Quel que soit le socle technique choisi, chaque site MSL-iTECH est livré prêt à performer.",
        points: [
          "Optimisation SEO dès la conception",
          "Compatibilité mobile et temps de chargement optimisé",
          "Pré-rendu pour une indexation Google fiable",
          "Formulaire de conversion et analytics intégrés",
        ],
      }}
      ctaTitle="Démarrer mon projet web"
      ctaSubtitle="Devis gratuit · Réponse sous 24 à 72h ouvrables · Sans engagement · Belgique & Maroc"
    />
  );
}
