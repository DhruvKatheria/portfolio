import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";
import { education, journey, journeyKindLabel } from "@/data/education";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stripe } from "@/components/ui/Stripe";

export function Journey() {
  return (
    <Section id="journey" labelledBy="journey-title">
      <SectionHeading
        id="journey-title"
        matchday="05"
        kicker="Education & journey"
        title="The season so far."
        lede="Education, honours and the projects that got me here, in order."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Reveal className="relative overflow-hidden rounded-2xl border border-line bg-pitch p-7">
            <Stripe className="absolute inset-x-0 top-0 h-1" width={24} />
            <p className="kicker text-fog">Education</p>
            <h3 className="display mt-4 text-6xl">{education.short}</h3>
            <p className="mt-2 text-chalk">{education.institution}</p>
            <p className="text-sm text-mist">{education.affiliation}</p>
            <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-line pt-5">
              <div className="col-span-3 sm:col-span-1">
                <dt className="kicker text-fog">Degree</dt>
                <dd className="mt-1 text-sm text-chalk">{education.degree}</dd>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <dt className="kicker text-fog">Years</dt>
                <dd className="mt-1 text-sm text-chalk">{education.period}</dd>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <dt className="kicker text-fog">CGPA</dt>
                <dd className="mt-1 font-mono text-sm text-chalk">{education.grade}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="rounded-2xl border border-line bg-pitch p-7">
            <h3 className="kicker flex items-center gap-2 text-fog">
              <Trophy size={14} aria-hidden="true" className="text-gold" /> Honours
            </h3>
            <ul className="mt-5 flex flex-col gap-5">
              {achievements.map((a) => (
                <li key={a.title}>
                  <p className="font-medium text-chalk">{a.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">{a.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ol className="relative lg:col-span-7 lg:pl-6">
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[0.3rem] w-px bg-line lg:left-[1.8rem]" />
          {journey.map((entry, i) => (
            <li key={entry.title} className="relative pb-10 pl-10 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute top-1.5 left-0 size-[0.65rem] rounded-full border-2 ${
                  entry.kind === "education" ? "border-blau-bright bg-night" : "border-grana-bright bg-grana"
                }`}
              />
              <Reveal delay={i * 60}>
                <p className="kicker flex flex-wrap gap-x-3 text-fog">
                  {entry.date ? <span className="text-chalk">{entry.date}</span> : null}
                  <span>{journeyKindLabel[entry.kind]}</span>
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-chalk">
                  {entry.href ? (
                    <Link href={entry.href} className="group inline-flex items-center gap-1.5 rounded-sm hover:text-white">
                      {entry.title}
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="text-fog transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  ) : (
                    entry.title
                  )}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-mist">{entry.detail}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
