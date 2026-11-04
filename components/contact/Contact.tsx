import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { LinkButton } from "@/components/ui/LinkButton";
import { Stripe } from "@/components/ui/Stripe";

export function Contact({ resumeHref }: { resumeHref: string | null }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden border-t border-line">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-56 left-1/2 size-[44rem] -translate-x-1/2 rounded-full border border-line" />
        <div className="absolute -bottom-40 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-blau/15 blur-[110px]" />
      </div>
      <div className="container-page py-24 md:py-36">
        <p className="kicker flex items-center gap-3 text-mist">
          <Stripe className="h-3 w-3 rounded-[1px]" width={1.5} />
          <span>
            <span className="text-chalk">MD 07</span>
            <span className="mx-2 text-fog">·</span>Full time
          </span>
        </p>
        <h2 id="contact-title" className="display mt-6 max-w-5xl text-[clamp(3rem,9vw,7.5rem)]">
          Got a problem worth <span className="text-grana-bright">solving?</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
          I&apos;m open to internships, collaborations and conversations about backend, full-stack or applied AI work.
          Email is the fastest way to reach me.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="group mt-10 inline-flex max-w-full items-center gap-3 border-b border-line-strong pb-2 font-mono text-[clamp(1rem,3.2vw,1.75rem)] break-all text-chalk transition-colors hover:border-chalk"
        >
          <Mail aria-hidden="true" className="size-[1em] shrink-0 text-blau-bright" />
          {site.email}
          <ArrowUpRight aria-hidden="true" className="size-[1em] shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        <div className="mt-10 flex flex-wrap gap-3">
          <LinkButton href={site.linkedin} variant="secondary" external>
            <LinkedInIcon size={16} /> LinkedIn
          </LinkButton>
          <LinkButton href={site.github} variant="secondary" external>
            <GitHubIcon size={16} /> GitHub
          </LinkButton>
          {resumeHref ? (
            <LinkButton href={resumeHref} variant="secondary" external>
              Resume <ArrowUpRight size={16} aria-hidden="true" />
            </LinkButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
