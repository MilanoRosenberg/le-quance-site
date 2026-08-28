import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  actions,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  actions?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={`page-hero ${compact ? "page-hero-compact" : ""}`}>
      <Reveal className="site-shell page-hero-inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {intro ? <p className="page-hero-intro">{intro}</p> : null}
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </Reveal>
    </section>
  );
}
