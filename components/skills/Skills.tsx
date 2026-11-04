import { skillGroups } from "@/data/skills";
import { Section } from "@/components/layout/Section";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Roadmap } from "./Roadmap";

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <SectionHeading
        id="skills-title"
        matchday="04"
        kicker="Skills"
        title="The squad."
        lede="What I already build with, kept separate from what I'm currently learning."
      />

      <div className="mt-14">
        <h3 className="kicker flex items-center gap-3 text-chalk">
          First team <span className="h-px flex-1 bg-line" /> <span className="text-fog">In use</span>
        </h3>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <li key={group.category} className="bg-pitch">
              <Reveal delay={i * 80} className="flex h-full flex-col gap-5 p-6">
                <div className="flex items-baseline justify-between">
                  <span className="kicker text-fog">{group.position}</span>
                  <span className="kicker text-fog">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h4 className="display text-3xl">{group.category}</h4>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Chip>{item}</Chip>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <Roadmap />
    </Section>
  );
}
