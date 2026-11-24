import { Boxes, Receipt, CalendarCheck, Users, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductPageShellEn } from "@/pages/en/components/ProductPageShellEn";
import { ProductBento, type BentoCard } from "@/components/product/ProductBento";
import { useProductSeo } from "@/hooks/useProductSeo";
import { localizedPath } from "@/lib/i18n";
import { PARTNER_STATUS_EN } from "@/lib/brand";
import horecaHero from "@/assets/horeca-hero.webp";

const features = [
  {
    icon: Boxes,
    title: "Real-time inventory, no stockouts",
    desc: "Every ingredient used is automatically deducted from inventory. You receive an alert before stock runs out. Supplier orders are generated automatically based on your thresholds.",
  },
  {
    icon: Receipt,
    title: "Integrated POS and invoicing",
    desc: "Odoo Point of Sale connects directly to accounting. Every payment is recorded in real time. The configuration can be prepared to support evolving e-invoicing requirements in Morocco.",
  },
  {
    icon: CalendarCheck,
    title: "Reservations and table management",
    desc: "Manage online reservations, your floor plan and your waiting list from a single interface.",
  },
  {
    icon: Users,
    title: "Simplified staff management",
    desc: "Manage schedules, attendance and payroll in Odoo. Your teams can clock in from their phones.",
  },
];

const bentoCards: BentoCard[] = [
  {
    icon: Boxes,
    title: "Real-time inventory",
    desc: "Every ingredient used is deducted from inventory. Get alerts before stock runs out and generate supplier orders based on your thresholds.",
    variant: "blue",
    span: "lg:col-span-7",
  },
  {
    icon: Receipt,
    title: "POS & invoicing",
    desc: "Odoo POS connects to accounting. Every payment is recorded in real time.",
    variant: "gold",
    span: "lg:col-span-5",
  },
  {
    icon: CalendarCheck,
    title: "Reservations & tables",
    desc: "Manage online reservations, your floor plan and your waiting list from a single interface.",
    variant: "white",
    span: "lg:col-span-5",
  },
  {
    icon: Users,
    title: "Simplified staffing",
    desc: "Manage schedules, attendance and payroll in Odoo. Your teams can clock in from their phones.",
    variant: "bluelight",
    span: "lg:col-span-7",
  },
];

const faqs = [
  {
    q: "Is Odoo compatible with electronic invoicing in Morocco?",
    a: "Odoo can be configured to support your compliance efforts according to the requirements applicable to your sector and the date they become mandatory for your business. MSL-iTECH monitors regulatory developments, including those from DGI (the Moroccan tax authority), and adjusts the implementation scope accordingly.",
  },
  {
    q: "How much does the hospitality solution cost?",
    a: "We offer a tailored approach based on your type of establishment (restaurant, café or hotel), its operating volume and the selected modules. After a free scoping discussion, we provide a detailed quote.",
  },
  {
    q: "How long does it take to get the solution operational?",
    a: "The timeline depends on the size of your establishment, the selected modules and the condition of your data. An initial implementation covering essential needs can be quick, with further capabilities added in stages.",
  },
];

export default function OdooHospitalityPage() {
  useProductSeo({
    title: "Odoo for hotels and restaurants in Morocco | MSL-iTECH",
    description:
      "Manage stock, POS, reservations and staff with Odoo for hotels and restaurants in Morocco. Reduce food waste and manual accounting. Book your free demo today.",
    path: "/en/odoo-hospitality-morocco",
    faqs,
    ldId: "ld-faq-horeca",
    service: {
      name: "Odoo Hospitality Implementation",
      description:
        "Odoo for restaurants, cafés and hotels in Morocco: point of sale (POS), inventory, recipes, staffing and invoicing by MSL-iTECH.",
      serviceType: ["Odoo POS", "Restaurant management", "Hotel management"],
      areaServed: ["MA"],
    },
  });

  return (
    <ProductPageShellEn
      eyebrow="Hospitality sector — Morocco"
      title={
        <>
          Odoo for hotels and restaurants{" "}
          <span style={{ color: "var(--gold)" }}>in Morocco</span>
        </>
      }
      intro="Odoo for hotels and restaurants connects inventory, point of sale, reservations, staffing and accounting to help reduce food waste and manual work. MSL-iTECH tailors the deployment to your establishment’s size and selected modules, while helping you prepare for evolving Moroccan e-invoicing requirements."
      heroImage={horecaHero}
      heroImageAlt="Moroccan restaurant equipped with an Odoo point-of-sale system"
      metaNote="On-site or remote demo · Response within 24 hours · +212 6 89 30 62 78"
      heroBullets={[
        PARTNER_STATUS_EN,
        "Deployment by functional module",
        "Response within 24 hours",
        "No obligation · Personalized demo",
      ]}
      proposalEyebrow="The challenge"
      proposalTitle={
        <>
          Your restaurant could be losing{" "}
          <span style={{ color: "var(--gold)" }}>up to 27% of its food</span>,
          according to industry studies — digital tools help reduce this problem
          from the first few months
        </>
      }
      featuresEyebrow="In your establishment"
      featuresTitle="What Odoo changes in your establishment"
      features={features}
      featuresSlot={
        <ProductBento
          eyebrow="In your establishment"
          title="What Odoo changes in your establishment"
          chipLabel="Odoo Hospitality"
          cards={bentoCards}
        />
      }
      whySection={{
        title: "Observed benefits",
        desc: "A tailored approach suited to your type of establishment, with no obligation and installation and training included.",
        points: [
          "Reduced inventory-related losses",
          "Less time spent on administration",
          "Preparation for evolving e-invoicing requirements",
          "Phased deployment based on your scope",
        ],
      }}
      faqs={faqs}
      ctaTitle="Book my free hospitality demo"
      ctaSubtitle="On-site or remote demo · Response within 24 hours · +212 6 89 30 62 78"
      extraSection={
        <section className="bg-brand-bg py-10">
          <div className="container">
            <div
              className="flex flex-col gap-6 rounded-3xl border bg-white p-8 sm:flex-row sm:items-center sm:justify-between"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <div>
                <p className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
                  <span className="inline-block h-px w-6 bg-brand-blue" />
                  {PARTNER_STATUS_EN}
                </p>
                <p className="font-heading text-xl font-bold text-brand-black">
                  Looking for an Odoo implementation partner in Morocco?
                </p>
                <p className="mt-2 font-body text-sm text-brand-grey">
                  MSL-iTECH is an official Odoo partner based in
                  Morocco, specializing in deployments for hotels, restaurants
                  and cafés.
                </p>
              </div>
              <Link
                to={localizedPath("/integrateur-odoo-maroc", "en")}
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border-2 px-6 py-3 font-body text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
                style={{ borderColor: "var(--blue)" }}
              >
                Odoo Partner in Morocco
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </section>
      }
    />
  );
}
