/** The signature blau/grana stripe, used as a small accent bar. */
export function Stripe({ className = "", width = 6 }: { className?: string; width?: number }) {
  return (
    <span
      aria-hidden="true"
      className={`stripes inline-block ${className}`}
      style={{ ["--stripe" as string]: `${width}px` }}
    />
  );
}
