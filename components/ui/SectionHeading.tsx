import type { ReactNode } from "react";
import { Stripe } from "./Stripe";

type Props = {
  id: string;
  matchday: string;
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
};

/** "MD 02 · Featured work" — a matchday-style section header. */
export function SectionHeading({ id, matchday, kicker, title, lede, className = "" }: Props) {
  return (
    <header className={`max-w-3xl ${className}`}>
      <p className="kicker flex items-center gap-3 text-mist">
        <Stripe className="h-3 w-3 rounded-[1px]" width={1.5} />
        <span>
          <span className="text-chalk">MD {matchday}</span>
          <span className="mx-2 text-fog">·</span>
          {kicker}
        </span>
      </p>
      <h2 id={id} className="display mt-5 text-[clamp(2.4rem,6vw,4.25rem)] text-chalk">
        {title}
      </h2>
      {lede ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist md:text-lg">{lede}</p> : null}
    </header>
  );
}
