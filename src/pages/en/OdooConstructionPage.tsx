import { FileSearch, HardHat, Receipt, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductPageShellEn } from "@/pages/en/components/ProductPageShellEn";
import { ProductBento, type BentoCard } from "@/components/product/ProductBento";
import { useProductSeo } from "@/hooks/useProductSeo";
import { localizedPath } from "@/lib/i18n";
import { PARTNER_STATUS_EN } from "@/lib/brand";
import constructionHero from "@/assets/btp-hero.webp";

const features = [
  {
    icon: FileSearch,
    title: "CRM & tender management",
    desc: "A complete tender pipeline: identification, qualification, collection of tender documents (bidding rules, contract specifications, drawings, unit price schedules and estimated quantities), price analysis, management approval, submission and bid-opening tracking. Reasons for lost bids are recorded.",
  },
  {
    icon: HardHat,
    title: "Construction project management",
    desc: "Each construction site is a project with analytic accounting: initial budget, committed costs, remaining work and actual margin tracked in real time. Gantt charts, Kanban boards, resources and inventory.",
  },
  {
    icon: Receipt,
    title: "Progress billing",
    desc: "Work progress statements and interim payment statements generated from reported completion. Retention and material advance payments are addressed during project scoping.",
  },
  {
    icon: Users,
    title: "HR and subcontractor management",
    desc: "Subcontracts allocated to each site, worker time tracking, payroll with Moroccan social security (CNSS), compulsory health insurance (AMO) and supplementary pension (CIMR) contributions, plus equipment allocation and costs by project.",
  },
];

const bentoCards: BentoCard[] = [
  {
    icon: HardHat,
    title: "Construction site management",
    desc: "Task planning, real-time cost tracking, resources and inventory, Gantt charts and Kanban boards.",
    variant: "blue",
    span: "lg:col-span-7",
  },
  {
    icon: FileSearch,
    title: "Tender management",
    desc: "Opportunity tracking, tender management, bidder evaluation and automated follow-ups.",
    variant: "gold",
    span: "lg:col-span-5",
  },
  {
    icon: Receipt,
    title: "Progress billing",
    desc: "Work progress statements and monthly payment statements generated automatically based on actual completion.",
    variant: "white",
    span: "lg:col-span-5",
  },
  {
    icon: Users,
    title: "HR & subcontractors",
    desc: "Site workforce, subcontractor agreements, time tracking and payroll in one place.",
    variant: "bluelight",
    span: "lg:col-span-7",
  },
];

const faqs = [
  {
    q: "Can Odoo manage the complete public tender lifecycle in Morocco?",
    a: "Yes, using Odoo CRM configured as a tender pipeline. Each tender becomes an opportunity that moves through defined stages: tender identified, qualification, documents collected, price analysis, costing, management approval, submission, bid opening, won or lost. In Morocco, tender documents include bidding rules (RC), special contract specifications (CPS), drawings, unit price schedules (BPU) and estimated bills of quantities (DQE). These documents are attached to the opportunity in Odoo Documents, and reasons for lost bids are recorded to analyze success rates. One common distinction matters: the native tender feature in Odoo Purchase is designed to compare competing suppliers, not to respond to your customers' tenders. The latter requires a dedicated CRM pipeline, which MSL-iTECH configures.",
  },
  {
    q: "How does Odoo handle work progress statements and interim payment statements?",
    a: "Odoo supports progress billing based on the completion percentage reported for a project or its milestones. Monthly interim payment statements are generated from that progress, eliminating duplicate data entry between the site manager and accounting. Retention and material advance payments are not native Odoo features: they require accounting configuration or custom development, depending on your contract structure. MSL-iTECH determines the approach during scoping, before providing a quote.",
  },
  {
    q: "Can we track direct costs and actual margins for each construction site?",
    a: "Yes. Each construction site is a project with analytic accounting in Odoo. Material purchases, recorded labor hours, equipment allocation and subcontractor invoices are charged to that project. You can compare the initial budget, committed costs, remaining work and actual margin at any time. This is the main difference from spreadsheet tracking: margins are visible while construction is underway, rather than calculated only when the project ends.",
  },
  {
    q: "How can we manage BPU and DQE documents in Odoo?",
    a: "Moroccan unit price schedules (BPU) and estimated bills of quantities (DQE) are represented in Odoo through a price library and quotations with structured line items. Contracts with large numbers of items generally require customization to import schedules and apply your overhead and margin coefficients. For simpler requirements, standard configuration is sufficient. Project scoping determines which approach applies to your business.",
  },
  {
    q: "Does Odoo manage subcontracting and subcontractor agreements?",
    a: "Yes. Subcontractors are suppliers linked to a construction site: purchase orders, partial receipts, invoices and retentions are tracked by project. For each site, you can see what has been committed, received and invoiced by each subcontractor, along with the impact on the site's margin.",
  },
  {
    q: "Can we track equipment and construction machinery in Odoo?",
    a: "Yes, using the Maintenance and Fleet modules. You can assign machinery to a construction site, track mileage or operating hours, schedule preventive maintenance and allocate operating costs to the relevant project. Equipment stops being a general overhead and becomes a cost tracked by site.",
  },
  {
    q: "Does Odoo support Moroccan accounting requirements for a construction company?",
    a: "Yes. Odoo can be configured for the Moroccan accounting framework (CGNC), VAT and declarations to DGI (the Moroccan tax authority). Payroll contributions for CNSS (social security), AMO (compulsory health insurance) and CIMR (supplementary pensions), along with IR (income tax), are configured according to your applicable employment agreement. For construction companies, a key consideration is site worker time tracking and its connection to payroll—this requires dedicated attention during scoping.",
  },
  {
    q: "How long does an Odoo implementation for construction in Morocco take?",
    a: "The timeline depends on the scope: the number of modules, the volume of data to migrate and the level of customization. MSL-iTECH estimates it during a free 30-minute scoping session, with a detailed quote within 48 hours.",
  },
  {
    q: "Has MSL-iTECH implemented Odoo for construction companies in Morocco?",
    a: "Yes, and the references can be publicly verified on our official odoo.com partner profile—not just through claims on our website. AIT OUKHALI TRAVAUX (construction and public procurement), CUCO MATÉRIAUX DE CONSTRUCTION and JCD RENOV are among our documented implementations. For AIT OUKHALI TRAVAUX, the scope includes CRM and tender management, opportunity tracking, bidder evaluation and automated follow-ups, followed by project and construction management with task planning, cost tracking, resource management and inventory management using Gantt charts and Kanban boards.",
  },
];

const tenderSteps = [
  "Tender identified",
  "Qualification",
  "Tender documents collected",
  "Price analysis",
  "Costing",
  "Management approval",
  "Bid submitted",
  "Bid opening",
  "Won: construction project opened",
  "Lost: reason recorded",
];

export default function OdooConstructionPage() {
  useProductSeo({
    title: "Odoo for construction companies in Morocco | MSL-iTECH",
    description:
      "Odoo for construction companies in Morocco: track site costs, manage tenders and automate progress billing. Book a free demo to protect your project margins.",
    path: "/en/odoo-construction-morocco",
    faqs,
    ldId: "ld-faq-btp",
    service: {
      name: "Odoo implementation for construction",
      description:
        "Odoo ERP for construction companies in Morocco: tender management, construction sites, subcontracting, billing and public procurement by MSL-iTECH.",
      serviceType: [
        "Construction ERP",
        "Construction site management",
        "Tenders and public procurement",
        "Work progress statements",
        "Construction subcontracting",
      ],
      areaServed: ["MA"],
    },
  });

  return (
    <ProductPageShellEn
      eyebrow="Construction sector — Morocco"
      title={
        <>
          Odoo for construction companies: protect your{" "}
          <span style={{ color: "var(--gold)" }}>schedule and margins</span>
        </>
      }
      intro="Odoo for construction companies centralizes tender management, site costs, progress billing and subcontracting in one ERP. MSL-iTECH configures it for Moroccan construction businesses, with documented implementations and a clear distinction between standard configuration and custom development."
      heroImage={constructionHero}
      heroImageAlt="Moroccan construction site managed with Odoo"
      metaNote="See Odoo configured for construction in Morocco · Response within 24 hours"
      featuresEyebrow="AIT OUKHALI TRAVAUX case study"
      featuresTitle="What MSL-iTECH implemented for AIT OUKHALI TRAVAUX"
      features={features}
      featuresSlot={
        <ProductBento
          eyebrow="AIT OUKHALI TRAVAUX case study"
          title="What MSL-iTECH implemented for AIT OUKHALI TRAVAUX"
          chipLabel="Odoo Construction"
          cards={bentoCards}
        />
      }
      whySection={{
        title: "Why choose MSL-iTECH for construction in Morocco?",
        desc: "We do not present a generic demo. AIT OUKHALI TRAVAUX, CUCO MATÉRIAUX and JCD RENOV are real implementations listed on our official Odoo partner profile. During scoping, we explain what can be handled through standard configuration and what requires custom development—before the quote, not afterwards.",
        points: [
          "Construction references verifiable on odoo.com, not just claims",
          "Expertise in the Moroccan public procurement lifecycle",
          "Configuration for Moroccan accounting (CGNC), VAT, DGI tax declarations, CNSS social security, AMO health insurance and CIMR pensions",
          "A clear distinction between standard Odoo features and custom development",
        ],
      }}
      faqs={faqs}
      ctaTitle="Book my free construction demo"
      ctaSubtitle="See Odoo configured for construction in Morocco · Response within 24 hours"
      extraSection={
        <section className="bg-brand-bg py-10">
          <div className="container">
            <h2 className="font-heading text-lg font-semibold text-brand-blue mb-4">
              The construction tender lifecycle in Odoo
            </h2>
            <ol className="list-decimal list-inside space-y-1 mb-4">
              {tenderSteps.map((step) => (
                <li key={step} className="font-body text-sm text-brand-grey">
                  {step}
                </li>
              ))}
            </ol>
            <p className="font-body text-sm text-brand-grey mb-6">
              A successful tender automatically becomes a construction project,
              carrying over its budget, purchasing, subcontracting, labor,
              progress statements and billing.
            </p>
            <p className="font-body text-sm text-brand-grey">
              Looking for an{" "}
              <Link
                to={localizedPath("/integrateur-odoo-maroc", "en")}
                className="font-semibold text-brand-blue underline underline-offset-2 hover:text-brand-blue/80"
              >
                Odoo implementation partner in Morocco
              </Link>{" "}
              for your construction company? MSL-iTECH is an Odoo{" "}
              {PARTNER_STATUS_EN} partner based in Morocco.
            </p>
          </div>
        </section>
      }
    />
  );
}
