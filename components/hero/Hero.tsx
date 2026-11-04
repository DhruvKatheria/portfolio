import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { LinkButton } from "@/components/ui/LinkButton";
import { Stripe } from "@/components/ui/Stripe";
import { TacticalPitch } from "./TacticalPitch";

const [firstName, lastName] = site.name.split(" ");

/** Keep hyphenated words (e.g. "AI-powered") from breaking at the hyphen. */
function noHyphenBreaks(text: string) {
  return text.split(" ").map((word, i) => (
    <span key={i} className={word.includes("-") ? "whitespace-nowrap" : undefined}>
      {i > 0 ? " " : ""}
      {word}
    </span>
  ));
}

const socials = [
  { label: "GitHub", href: site.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon },
] as const;

export function Hero({ resumeHref }: { resumeHref: string | null }) {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Floodlights + tactics-board grid. Decorative only. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="board-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] opacity-60" />
        <div className="absolute -top-40 left-[8%] size-[34rem] rounded-full bg-blau/25 blur-[120px]" />
        <div className="absolute -top-48 right-[4%] size-[30rem] rounded-full bg-grana/20 blur-[120px]" />
      </div>

      <div className="container-page grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-7">
          <p className="kicker flex items-center gap-3 text-mist">
            <Stripe className="h-3.5 w-5 rounded-[1px]" width={2.5} />
            {site.credential}
          </p>

          <h1 id="hero-title" className="display mt-7 text-[clamp(4.25rem,19vw,7.5rem)] lg:text-[clamp(7rem,10.5vw,10.5rem)]">
            <span className="block">{firstName}</span>
            <span className="block">
              {lastName}
              <span className="text-grana-bright">.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-[clamp(1.35rem,2.6vw,1.9rem)] leading-[1.2] font-medium tracking-tight text-balance">
            <span className="block text-mist">{site.headline.lead}</span>
            <span className="block text-chalk">{noHyphenBreaks(site.headline.emphasis)}</span>
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-mist">{site.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <LinkButton href="/#work">
              View projects <ArrowDownRight size={16} aria-hidden="true" />
            </LinkButton>
            {resumeHref ? (
              <LinkButton href={resumeHref} variant="secondary" external>
                Resume <ArrowUpRight size={16} aria-hidden="true" />
              </LinkButton>
            ) : null}
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-mist transition-colors hover:text-chalk"
                >
                  <Icon size={16} /> {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center gap-2 text-mist transition-colors hover:text-chalk"
              >
                <Mail size={16} aria-hidden="true" /> {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none lg:pl-6">
          <TacticalPitch />
        </div>
      </div>
    </section>
  );
}
