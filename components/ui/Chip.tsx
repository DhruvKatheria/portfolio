import type { ReactNode } from "react";

/** Solid border = established. Dashed + label = currently learning (never colour alone). */
export function Chip({
  children,
  tone = "solid",
}: {
  children: ReactNode;
  tone?: "solid" | "learning";
}) {
  return (
    <span
      className={
        tone === "solid"
          ? "inline-flex items-center rounded-sm border border-line-strong bg-pitch px-2.5 py-1 font-mono text-[0.78rem] text-chalk/90"
          : "inline-flex items-center rounded-sm border border-dashed border-blau-bright/50 px-2.5 py-1 font-mono text-[0.78rem] text-chalk/90"
      }
    >
      {children}
    </span>
  );
}
