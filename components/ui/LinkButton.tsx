import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-chalk text-night hover:bg-white",
  secondary:
    "border border-line-strong text-chalk hover:border-chalk/40 hover:bg-turf",
  ghost: "text-mist hover:text-chalk",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** External links open in a new tab with safe rel attributes. */
  external?: boolean;
  download?: boolean;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  download,
}: Props) {
  const base = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors duration-200 ${styles[variant]} ${className}`;

  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={base}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  );
}
