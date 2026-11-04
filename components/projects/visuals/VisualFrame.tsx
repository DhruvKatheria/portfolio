import type { ReactNode } from "react";

/** Shared SVG canvas for project illustrations: board grid + accessible title/desc. */
export function VisualFrame({
  id,
  title,
  desc,
  children,
}: {
  id: string;
  title: string;
  desc: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 400 260"
      role="img"
      aria-labelledby={`${id}-title ${id}-desc`}
      className="block h-auto w-full"
    >
      <title id={`${id}-title`}>{title}</title>
      <desc id={`${id}-desc`}>{desc}</desc>
      <defs>
        <pattern id={`${id}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#F3F0E8" strokeOpacity="0.05" />
        </pattern>
      </defs>
      <rect width="400" height="260" fill={`url(#${id}-grid)`} />
      <g fontFamily="var(--font-geist-mono), monospace">{children}</g>
    </svg>
  );
}
