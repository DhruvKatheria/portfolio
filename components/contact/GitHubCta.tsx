import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { GitHubIcon } from "@/components/ui/Icons";

/** Simple profile CTA. No fetched or invented GitHub stats. */
export function GitHubCta() {
  const handle = site.github.replace(/^https?:\/\/(www\.)?github\.com\//, "");
  return (
    <section aria-labelledby="github-title" className="pb-24 md:pb-32">
      <div className="container-page">
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col gap-8 overflow-hidden rounded-2xl border border-line bg-pitch p-7 transition-colors hover:border-line-strong sm:p-10 md:flex-row md:items-center md:justify-between"
        >
          <div aria-hidden="true" className="board-grid absolute inset-0 opacity-50 [mask-image:linear-gradient(to_left,black,transparent_70%)]" />
          <div className="relative">
            <p className="kicker text-fog">MD 06 · Training ground</p>
            <h2 id="github-title" className="display mt-4 text-[clamp(2.2rem,5vw,3.5rem)]">
              The work happens on GitHub.
            </h2>
            <p className="mt-3 max-w-lg text-mist">
              Source code, experiments and work in progress: the unedited version of everything on this page.
            </p>
          </div>
          <span className="relative inline-flex min-h-12 shrink-0 items-center gap-3 self-start rounded-full border border-line-strong bg-night px-5 font-mono text-sm text-chalk transition-colors group-hover:bg-turf md:self-auto">
            <GitHubIcon size={18} /> {handle}
            <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </section>
  );
}
