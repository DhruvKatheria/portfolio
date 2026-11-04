import { existsSync } from "node:fs";
import path from "node:path";
import { site } from "@/data/site";

/**
 * Returns the public resume URL only if the PDF is actually present in /public.
 * Drop the file at the configured path and the CTA appears on the next build.
 */
export function getResumeHref(): string | null {
  const file = path.join(process.cwd(), "public", site.resumePath);
  return existsSync(file) ? site.resumePath : null;
}
