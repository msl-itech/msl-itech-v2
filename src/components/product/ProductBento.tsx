import type { LucideIcon } from "lucide-react";

export type BentoVariant = "blue" | "gold" | "white" | "bluelight";

export type BentoCard = {
  icon: LucideIcon;
  title: string;
  desc: string;
  variant: BentoVariant;
  span: string;
};

const variantStyles: Record<BentoVariant, {
  bg: string;
  text: string;
  desc: string;
  iconBg: string;
  iconColor: string;
  chipBg: string;
  chipColor: string;
  chipBorder: string;
  glow: string;
  border: string;
}> = {
  blue: {
    bg: "var(--blue)",
    text: "white",
    desc: "rgba(255,255,255,0.78)",
    iconBg: "var(--gold)",
    iconColor: "var(--blue)",
    chipBg: "rgba(255,221,87,0.16)",
    chipColor: "var(--gold)",
    chipBorder: "rgba(255,221,87,0.3)",
    glow: "var(--gold)",
    border: "transparent",
  },
  gold: {
    bg: "var(--gold)",
    text: "var(--blue)",
    desc: "rgba(18,77,90,0.78)",
    iconBg: "var(--blue)",
    iconColor: "var(--gold)",
    chipBg: "rgba(18,77,90,0.10)",
    chipColor: "var(--blue)",
    chipBorder: "rgba(18,77,90,0.18)",
    glow: "var(--blue)",
    border: "transparent",
  },
  white: {
    bg: "white",
    text: "var(--black)",
    desc: "var(--grey)",
    iconBg: "var(--blue)",
    iconColor: "var(--gold)",
    chipBg: "rgba(18,77,90,0.06)",
    chipColor: "var(--blue)",
    chipBorder: "var(--grey-light)",
    glow: "var(--gold)",
    border: "var(--grey-light)",
  },
  bluelight: {
    bg: "var(--blue-light)",
    text: "var(--blue)",
    desc: "rgba(18,77,90,0.75)",
    iconBg: "var(--blue)",
    iconColor: "var(--gold)",
    chipBg: "white",
    chipColor: "var(--blue)",
    chipBorder: "rgba(18,77,90,0.15)",
    glow: "var(--gold)",
    border: "transparent",
  },
};

type ProductBentoProps = {
  eyebrow: string;
  title: string;
  chipLabel: string;
  cards: ReadonlyArray<BentoCard>;
};

export function ProductBento({ eyebrow, title, chipLabel, cards }: ProductBentoProps) {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
            <span className="inline-block h-px w-8 bg-brand-blue" />
            {eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-black md:text-[2.5rem]">
            {title}
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(220px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-12">
          {cards.map((c) => {
            const Icon = c.icon;
            const s = variantStyles[c.variant];
            return (
              <article
                key={c.title}
                className={`group relative overflow-hidden rounded-[28px] border p-7 md:p-8 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(18,77,90,0.28)] ${c.span}`}
                style={{ backgroundColor: s.bg, borderColor: s.border }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-25 blur-3xl"
                  style={{ backgroundColor: s.glow }}
                />

                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                      style={{
                        backgroundColor: s.chipBg,
                        color: s.chipColor,
                        borderColor: s.chipBorder,
                      }}
                    >
                      {chipLabel}
                    </span>
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] transition group-hover:scale-105"
                      style={{ backgroundColor: s.iconBg, color: s.iconColor }}
                    >
                      <Icon size={22} />
                    </div>
                  </div>

                  <div>
                    <h3
                      className="font-heading text-2xl font-bold leading-[1.1] md:text-[1.75rem]"
                      style={{ color: s.text }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="mt-3 max-w-md font-body text-sm md:text-base"
                      style={{ color: s.desc }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}