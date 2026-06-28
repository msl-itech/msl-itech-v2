// Email content per tool × step (0..4) → J+0 / J+3 / J+7 / J+14 / J+30

export type ToolSlug =
  | "conformite-dgi"
  | "roi-erp"
  | "diagnostic-digital"
  | "comparateur-sage-odoo";

export type StepContent = {
  delayDays: number;
  subject: (firstName: string) => string;
  html: (firstName: string) => string; // returns the inner body html (already wrapped by sender)
  cta?: { label: string; url: string };
};

const SITE = "https://msl-itech-v2.lovable.app";
const DEMO = `${SITE}/prendre-rendez-vous`;

const p = (s: string) =>
  `<p style="margin:0 0 14px 0;">${s}</p>`;
const ul = (items: string[]) =>
  `<ul style="margin:0 0 14px 0;padding-left:20px;">${items
    .map((i) => `<li style="margin-bottom:6px;">${i}</li>`)
    .join("")}</ul>`;

function hello(firstName: string): string {
  const name = firstName?.trim().split(" ")[0];
  return name ? `Bonjour ${escape(name)},` : "Bonjour,";
}
function escape(s: string): string {
  return s.replace(/[<>&"']/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" }[c]!));
}

const CONFORMITE_DGI: StepContent[] = [
  {
    delayDays: 0,
    subject: () => "Votre diagnostic de conformité DGI 2026",
    html: (f) =>
      `${p(hello(f))}
       ${p("Merci d'avoir utilisé notre outil de conformité à la facturation électronique DGI. Voici ce que ça change concrètement pour votre entreprise.")}
       ${ul([
         "<strong>2026</strong> : facturation électronique <em>obligatoire</em> au Maroc pour toutes les entreprises assujetties.",
         "Formats <strong>PDF non structuré ❌</strong> — formats UBL / XML structurés ✅.",
         "Sanctions et rejets prévus pour les non-conformes.",
       ])}
       ${p("Bonne nouvelle : Odoo 18 + le module MSL-iTECH gère l'émission DGI conforme nativement.")}`,
    cta: { label: "Réserver mon diagnostic 30 min", url: DEMO },
  },
  {
    delayDays: 3,
    subject: () => "Les 3 erreurs fatales en facturation électronique",
    html: (f) =>
      `${p(hello(f))}
       ${p("La majorité des PME marocaines se précipitent et tombent dans ces pièges :")}
       ${ul([
         "<strong>Garder Excel + signature PDF</strong> — non conforme et rejeté par la DGI.",
         "<strong>Migrer sans archivage légal</strong> — la conservation 10 ans est obligatoire.",
         "<strong>Ignorer l'UBL</strong> — vos clients grands comptes vont l'exiger dès Q1 2026.",
       ])}
       ${p("Un mauvais setup coûte 3 à 5× plus cher à corriger après. Évitez ça avec un cadrage en amont.")}`,
    cta: { label: "Demander mon audit de conformité", url: DEMO },
  },
  {
    delayDays: 7,
    subject: () => "Cas client : 1 200 factures/mois en conformité en 6 semaines",
    html: (f) =>
      `${p(hello(f))}
       ${p("Une PME de distribution à Casablanca émettait 1 200 factures/mois sur Excel. En 6 semaines :")}
       ${ul([
         "100% des factures émises au format DGI structuré",
         "Archivage légal automatisé sur 10 ans",
         "Relances clients automatiques (–17 jours de DSO)",
       ])}
       ${p("Le ROI a été atteint en 4 mois. C'est le projet type que nous livrons aujourd'hui.")}`,
    cta: { label: "Voir comment on procède", url: `${SITE}/realisations` },
  },
  {
    delayDays: 14,
    subject: () => "Et si vous lanciez votre projet avant fin de trimestre ?",
    html: (f) =>
      `${p(hello(f))}
       ${p("Les délais d'implémentation explosent à mesure qu'on s'approche de la date butoir. Si vous démarrez ce trimestre, vous êtes serein pour 2026.")}
       ${p("Je vous propose un appel <strong>gratuit</strong> de 30 min pour :")}
       ${ul([
         "Faire le diagnostic précis de votre situation",
         "Vous chiffrer un projet adapté (budget + planning)",
         "Vous donner un plan d'action, même si vous ne travaillez pas avec nous",
       ])}`,
    cta: { label: "Réserver mes 30 minutes", url: DEMO },
  },
  {
    delayDays: 30,
    subject: () => "Dernière chance — toujours pas conforme ?",
    html: (f) =>
      `${p(hello(f))}
       ${p("Je ne vais pas vous relancer plus loin si vous n'êtes pas prêt. Avant de clôturer votre dossier, une dernière question :")}
       ${p("<em>Qu'est-ce qui vous bloque concrètement ?</em> Budget, choix d'outil, manque de temps ? Répondez simplement à ce mail.")}
       ${p("Si on peut vous aider gratuitement à débloquer un point, on le fera.")}`,
    cta: { label: "Discuter avec un expert", url: DEMO },
  },
];

const ROI_ERP: StepContent[] = [
  {
    delayDays: 0,
    subject: () => "Votre estimation ROI Odoo personnalisée",
    html: (f) =>
      `${p(hello(f))}
       ${p("Merci pour votre simulation. D'après nos retours terrain, une PME marocaine récupère son investissement Odoo en moyenne en <strong>9 à 14 mois</strong>.")}
       ${ul([
         "Gain admin : 30–40% du temps facturation/relances",
         "Réduction stock : 12–18% (moins de surstock, moins de rupture)",
         "Visibilité cash temps réel : +15 jours de trésorerie",
       ])}`,
    cta: { label: "Chiffrer mon projet sur mesure", url: DEMO },
  },
  {
    delayDays: 3,
    subject: () => "Les 4 leviers de ROI qu'on oublie tous",
    html: (f) =>
      `${p(hello(f))}
       ${ul([
         "<strong>Cash récupéré</strong> : relances auto = –20 jours DSO",
         "<strong>Stock optimisé</strong> : –15% sans casser le service",
         "<strong>Productivité admin</strong> : 1 ETP libéré pour 50 factures/jour",
         "<strong>Décisions plus vites</strong> : dashboards temps réel = +1 décision/semaine bien prise",
       ])}
       ${p("Cumulé, ça représente facilement 200K à 600K MAD/an pour une PME de 30 personnes.")}`,
    cta: { label: "Calculer mon ROI précis", url: DEMO },
  },
  {
    delayDays: 7,
    subject: () => "Combien coûte vraiment un projet Odoo au Maroc ?",
    html: (f) =>
      `${p(hello(f))}
       ${p("Soyons transparents. Un projet Odoo pour une PME marocaine se situe entre :")}
       ${ul([
         "<strong>80–150K MAD</strong> — démarrage (Sales + Stock + Facturation DGI)",
         "<strong>150–350K MAD</strong> — projet complet multi-modules",
         "<strong>+ abonnement Odoo</strong> : 25–50€ utilisateur/mois",
       ])}
       ${p("Avec un ROI 9–14 mois, le projet se paie tout seul. On vous le démontre chiffré.")}`,
    cta: { label: "Demander mon devis", url: DEMO },
  },
  {
    delayDays: 14,
    subject: () => "Pourquoi attendre coûte plus cher",
    html: (f) =>
      `${p(hello(f))}
       ${p("Chaque mois sans ERP, c'est :")}
       ${ul([
         "~20K MAD de cash bloqué en retards de relance",
         "~10K MAD de surstock dormant",
         "~30–40h de travail admin manuel évitable",
       ])}
       ${p("Sur un an, c'est plus que le coût d'un démarrage Odoo complet.")}`,
    cta: { label: "Démarrer mon projet", url: DEMO },
  },
  {
    delayDays: 30,
    subject: () => "On clôture votre dossier ?",
    html: (f) =>
      `${p(hello(f))}
       ${p("Je ne veux pas vous noyer sous les emails. Si vous voulez avancer, un appel de 30 min suffit pour cadrer.")}
       ${p("Sinon, dites-moi simplement où vous en êtes — je clôture le dossier proprement.")}`,
    cta: { label: "Réserver un appel", url: DEMO },
  },
];

const DIAGNOSTIC_DIGITAL: StepContent[] = [
  {
    delayDays: 0,
    subject: () => "Votre diagnostic digital — résultat complet",
    html: (f) =>
      `${p(hello(f))}
       ${p("Merci pour votre diagnostic. Voici les 3 axes prioritaires que nous voyons chez 80% des PME marocaines :")}
       ${ul([
         "<strong>Centraliser</strong> : un seul système au lieu de 4–6 outils déconnectés",
         "<strong>Automatiser le récurrent</strong> : facturation, relances, reporting",
         "<strong>Données propres</strong> : préparer l'IA avant d'en parler",
       ])}`,
    cta: { label: "En parler 30 min", url: DEMO },
  },
  {
    delayDays: 3,
    subject: () => "Par quoi commencer pour ne pas se planter ?",
    html: (f) =>
      `${p(hello(f))}
       ${p("La règle d'or : <strong>commencer par le cycle Order-to-Cash</strong>. C'est ce qui touche le cash et se rentabilise vite.")}
       ${ul([
         "Devis → Commande → Facture → Encaissement → Relance",
         "Tout dans un seul outil, tout automatisé",
         "Visibilité cash temps réel pour le dirigeant",
       ])}`,
    cta: { label: "Voir notre méthode", url: `${SITE}/notre-approche` },
  },
  {
    delayDays: 7,
    subject: () => "Données propres avant IA : le vrai sujet 2026",
    html: (f) =>
      `${p(hello(f))}
       ${p("Tout le monde parle d'IA. Personne ne dit que 80% des projets IA échouent à cause de données sales.")}
       ${p("Avant d'ajouter de l'IA, il faut un référentiel propre : clients, produits, prix, stocks. C'est exactement ce qu'un ERP bien implémenté apporte.")}`,
    cta: { label: "Diagnostiquer mes données", url: DEMO },
  },
  {
    delayDays: 14,
    subject: () => "30 minutes pour clarifier votre roadmap digitale",
    html: (f) =>
      `${p(hello(f))}
       ${p("Je vous propose un appel sans engagement pour :")}
       ${ul([
         "Vous donner la roadmap concrète à 12 mois",
         "Identifier les 2–3 gains rapides à viser",
         "Vous dire honnêtement si Odoo est le bon outil",
       ])}`,
    cta: { label: "Réserver 30 min", url: DEMO },
  },
  {
    delayDays: 30,
    subject: () => "Toujours intéressé ?",
    html: (f) =>
      `${p(hello(f))}
       ${p("Pas de pression. Si le timing n'est pas bon, dites-le simplement — je remettrai votre dossier à plus tard.")}
       ${p("Si au contraire vous voulez avancer, c'est ici :")}`,
    cta: { label: "Réserver un appel", url: DEMO },
  },
];

const COMPARATEUR_SAGE_ODOO: StepContent[] = [
  {
    delayDays: 0,
    subject: () => "Sage vs Odoo — votre comparatif personnalisé",
    html: (f) =>
      `${p(hello(f))}
       ${p("Merci d'avoir utilisé notre comparateur. Voici les 3 différences <strong>vraiment</strong> structurantes :")}
       ${ul([
         "<strong>Périmètre</strong> : Sage = compta + paie. Odoo = ERP complet (CRM, ventes, stock, prod, RH…)",
         "<strong>Modèle</strong> : Sage on-premise / licence. Odoo cloud + open source.",
         "<strong>Évolutivité</strong> : Odoo absorbe la croissance sans changer d'outil.",
       ])}`,
    cta: { label: "Comparer sur mon cas", url: DEMO },
  },
  {
    delayDays: 3,
    subject: () => "Quand Sage suffit (et quand non)",
    html: (f) =>
      `${p(hello(f))}
       ${p("Soyons honnêtes : Sage reste un excellent choix si vous voulez <em>juste</em> de la compta.")}
       ${p("Mais dès que vous avez besoin de :")}
       ${ul([
         "Un CRM intégré à la facturation",
         "Un stock multi-entrepôts piloté",
         "Des relances clients automatiques",
         "Des dashboards temps réel pour le dirigeant",
       ])}
       ${p("…là, Odoo prend l'avantage. Vous évitez de jongler entre 4 outils.")}`,
    cta: { label: "En discuter avec un expert", url: DEMO },
  },
  {
    delayDays: 7,
    subject: () => "Migration Sage → Odoo : combien de temps, combien ça coûte ?",
    html: (f) =>
      `${p(hello(f))}
       ${p("Pour une PME marocaine de 20–50 personnes qui utilise Sage aujourd'hui :")}
       ${ul([
         "Durée : 8 à 14 semaines",
         "Reprise data : clients, fournisseurs, produits, soldes",
         "Coût : 120K à 250K MAD selon périmètre",
         "Formation incluse + accompagnement 3 mois",
       ])}
       ${p("On a livré cette migration plus de 15 fois. La méthode est rodée.")}`,
    cta: { label: "Voir notre méthode", url: `${SITE}/notre-approche` },
  },
  {
    delayDays: 14,
    subject: () => "Le bon moment pour décider",
    html: (f) =>
      `${p(hello(f))}
       ${p("Si vous renouvelez bientôt votre licence Sage ou changez de comptable, c'est le moment idéal pour basculer.")}
       ${p("Sinon, vous payez deux fois pendant la transition.")}`,
    cta: { label: "Cadrer mon timing", url: DEMO },
  },
  {
    delayDays: 30,
    subject: () => "On se laisse là ?",
    html: (f) =>
      `${p(hello(f))}
       ${p("Je clôture votre dossier dans 7 jours sauf retour de votre part.")}
       ${p("Une simple réponse à cet email suffit pour reprendre la discussion plus tard.")}`,
    cta: { label: "Réserver un appel", url: DEMO },
  },
];

const ALL: Record<ToolSlug, StepContent[]> = {
  "conformite-dgi": CONFORMITE_DGI,
  "roi-erp": ROI_ERP,
  "diagnostic-digital": DIAGNOSTIC_DIGITAL,
  "comparateur-sage-odoo": COMPARATEUR_SAGE_ODOO,
};

export function getStep(slug: ToolSlug, step: number): StepContent | null {
  const arr = ALL[slug];
  if (!arr || step < 0 || step >= arr.length) return null;
  return arr[step];
}

export const TOTAL_STEPS = 5;

export function hotLeadEmail(args: {
  score: number;
  segment: string;
  toolSlug: string;
  email: string;
  firstName?: string;
  company?: string;
  phone?: string;
  answers?: Record<string, unknown>;
}): { subject: string; html: string } {
  const subject = `🔥 LEAD CHAUD ${args.score}/100 — ${args.email} (${args.toolSlug})`;
  const a = args.answers
    ? Object.entries(args.answers)
        .map(([k, v]) => `<li><strong>${k}</strong> : ${String(v)}</li>`)
        .join("")
    : "";
  const html = `<!doctype html><html><body style="font-family:system-ui;background:#fff;padding:24px;color:#0a1929;">
    <h2 style="margin:0 0 12px 0;">🔥 Nouveau lead chaud</h2>
    <p><strong>Score</strong> : ${args.score} / 100 (<em>${args.segment}</em>)<br/>
       <strong>Outil</strong> : ${args.toolSlug}</p>
    <h3>Contact</h3>
    <ul>
      <li><strong>Prénom</strong> : ${args.firstName ?? "—"}</li>
      <li><strong>Email</strong> : <a href="mailto:${args.email}">${args.email}</a></li>
      <li><strong>Société</strong> : ${args.company ?? "—"}</li>
      <li><strong>Téléphone</strong> : ${args.phone ?? "—"}</li>
    </ul>
    ${a ? `<h3>Réponses</h3><ul>${a}</ul>` : ""}
    <p style="margin-top:20px;color:#6b7785;font-size:12px;">Notification automatique MSL-iTECH</p>
  </body></html>`;
  return { subject, html };
}