import { getFlagship, getSupportingProjects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { FlagshipProject } from "./FlagshipProject";
import { ProjectCard } from "./ProjectCard";

/** Flagship first and largest, supporting projects in a two-up grid. */
export function ProjectsShowcase() {
  const flagship = getFlagship();
  const rest = getSupportingProjects();
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <Reveal>
        <FlagshipProject project={flagship} />
      </Reveal>
      <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={i * 120}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
