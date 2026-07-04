import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export type RelatedLink = { to: string; title: string; desc: string };

export function RelatedResources({
  eyebrow = "Aller plus loin",
  title,
  intro,
  links,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  links: RelatedLink[];
}) {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            <span className="inline-block h-px w-8 bg-brand-blue" />
            {eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 font-body text-base text-brand-grey">{intro}</p>
          )}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_20px_50px_-20px_rgba(18,77,90,0.3)]"
              style={{ borderColor: "var(--grey-light)" }}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-lg font-bold text-brand-black">
                  {l.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-brand-gold transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <p className="mt-2 font-body text-sm text-brand-grey">{l.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}