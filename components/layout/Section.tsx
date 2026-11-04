import type { ReactNode } from "react";

/** Standard section shell: landmark, anchor target, vertical rhythm. */
export function Section({
  id,
  labelledBy,
  children,
  className = "",
}: {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-24 md:py-32 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}
