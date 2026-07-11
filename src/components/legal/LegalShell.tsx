import { ReactNode } from "react";

export function Sticker({
  children,
  rotate = -4,
}: {
  children: ReactNode;
  rotate?: number;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)]"
      style={{
        backgroundColor: "var(--gold)",
        color: "var(--blue)",
        borderColor: "var(--blue)",
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </span>
  );
}

export function LegalHero({
  sticker,
  version,
  titleStart,
  titleAccent,
  titleEnd,
  description,
  badges,
}: {
  sticker: string;
  version: string;
  titleStart: string;
  titleAccent: string;
  titleEnd?: string;
  description: string;
  badges: { icon: React.ComponentType<{ className?: string }>; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b-2 border-brand-black/10 bg-brand-blue text-brand-white">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0, transparent 40%)",
        }}
        aria-hidden
      />
      <div className="container relative py-20 md:py-28">
        <div className="mb-6 flex items-center gap-3">
          <Sticker>{sticker}</Sticker>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-white/60">
            {version}
          </span>
        </div>
        <h1 className="max-w-3xl font-heading text-4xl font-bold leading-[1.05] md:text-6xl">
          {titleStart} <span className="text-brand-gold">{titleAccent}</span>
          {titleEnd ? ` ${titleEnd}` : ""}
        </h1>
        <p className="mt-6 max-w-2xl font-body text-base text-brand-white/80 md:text-lg">
          {description}
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-brand-white/15 bg-brand-white/5 px-4 py-3 backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 text-brand-gold" />
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-white/85">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegalLayout({
  sections,
  children,
}: {
  sections: { id: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
            Sommaire
          </p>
          <nav className="flex flex-col gap-1 border-l-2 border-brand-black/10 pl-4">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-baseline gap-3 py-1.5 font-body text-sm text-brand-black/70 transition hover:text-brand-blue"
              >
                <span className="font-mono text-[10px] text-brand-grey">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="group-hover:underline">{s.label}</span>
              </a>
            ))}
          </nav>
        </aside>
        <article
          className="prose prose-neutral max-w-none font-body text-brand-black
            prose-headings:font-heading prose-headings:text-brand-black
            prose-h2:hidden
            prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-lg prose-h3:font-bold
            prose-h3:text-brand-blue prose-h3:uppercase prose-h3:tracking-wide
            prose-h3:pl-3 prose-h3:border-l-4 prose-h3:border-brand-gold
            prose-p:text-brand-black/80
            prose-li:text-brand-black/80
            prose-a:text-brand-blue prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-strong:text-brand-black
            prose-ul:my-4
            prose-li:my-1"
        >
          {children}
        </article>
      </div>
    </section>
  );
}

export function SectionCard({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="not-prose mb-8 scroll-mt-28 rounded-3xl border-2 border-brand-black/10 bg-brand-white p-6 shadow-[0_2px_0_0_hsl(var(--foreground)/0.04)] md:p-10"
    >
      <div className="mb-6 flex items-center gap-4 border-b-2 border-brand-black/5 pb-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold font-mono text-sm font-bold text-brand-blue">
          {number}
        </span>
        <h2 className="font-heading text-xl font-bold text-brand-black md:text-2xl">
          {title}
        </h2>
      </div>
      <div
        className="prose prose-neutral max-w-none
          prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-base prose-h3:font-bold
          prose-h3:uppercase prose-h3:tracking-wide prose-h3:text-brand-blue
          prose-h3:pl-3 prose-h3:border-l-4 prose-h3:border-brand-gold"
      >
        {children}
      </div>
    </section>
  );
}

export function BrandTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-2xl border-2 border-brand-black/10">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-brand-blue text-brand-white">
              {headers.map((h) => (
                <th
                  key={h}
                  className="p-3 text-left font-mono text-[10px] uppercase tracking-[0.12em]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-brand-white">
            {rows.map((r, i) => (
              <tr
                key={i}
                className="border-t border-brand-black/5 transition hover:bg-brand-bg"
              >
                {r.map((c, j) => (
                  <td
                    key={j}
                    className="p-3 align-top font-body text-sm text-brand-black/80"
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}