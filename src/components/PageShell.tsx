import { ReactNode } from "react";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export const PageShell = ({ eyebrow, title, description, children }: PageShellProps) => {
  return (
    <section className="container py-20">
      {eyebrow && (
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
          {eyebrow}
        </p>
      )}
      <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-brand-black md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl font-body text-lg text-brand-grey">
          {description}
        </p>
      )}
      {children && <div className="mt-12">{children}</div>}
    </section>
  );
};