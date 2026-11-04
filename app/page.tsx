import { About } from "@/components/about/About";
import { Scoreboard } from "@/components/achievements/Scoreboard";
import { Contact } from "@/components/contact/Contact";
import { GitHubCta } from "@/components/contact/GitHubCta";
import { Journey } from "@/components/education/Journey";
import { Hero } from "@/components/hero/Hero";
import { Section } from "@/components/layout/Section";
import { ProjectsShowcase } from "@/components/projects/ProjectsShowcase";
import { Skills } from "@/components/skills/Skills";
import { PitchDivider } from "@/components/ui/PitchDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getResumeHref } from "@/lib/resume";

export default function Home() {
  const resumeHref = getResumeHref();
  return (
    <>
      <Hero resumeHref={resumeHref} />
      <Scoreboard />

      <Section id="work" labelledBy="work-title">
        <SectionHeading
          id="work-title"
          matchday="02"
          kicker="Featured work"
          title="Selected projects."
          lede="Three builds across energy analytics, full-stack web and decentralised systems. Each one links to a full case study."
        />
        <div className="mt-14">
          <ProjectsShowcase />
        </div>
      </Section>

      <PitchDivider />
      <About />
      <PitchDivider />
      <Skills />
      <PitchDivider />
      <Journey />
      <GitHubCta />
      <Contact resumeHref={resumeHref} />
    </>
  );
}
