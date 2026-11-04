import Link from "next/link";
import type { Project } from "@/types";
import { ProjectVisual } from "./ProjectVisual";
import { HighlightList, ProjectActions, ProjectContext, StackList } from "./ProjectMeta";

/** Player-card styled project card for supporting projects. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-pitch transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong">
      <div className="relative border-b border-line bg-night/40 p-5 sm:p-7">
        <span aria-hidden="true" className="display absolute top-3 right-5 text-6xl text-chalk/[0.06]">
          {project.number}
        </span>
        <ProjectVisual visual={project.visual} id={`visual-${project.slug}`} />
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
        <div>
          <p className="kicker flex flex-wrap gap-x-3 text-fog">
            <span className="text-chalk">No. {project.number}</span>
            {project.date ? <span>{project.date}</span> : null}
          </p>
          <p className="kicker mt-4 text-blau-bright">{project.kicker}</p>
          <h3 className="display mt-2 text-[clamp(2rem,4vw,2.75rem)]">
            <Link href={`/projects/${project.slug}`} className="rounded-sm hover:text-white">
              {project.title}
            </Link>
          </h3>
          {project.subtitle ? <p className="mt-2 font-medium text-chalk">{project.subtitle}</p> : null}
          <p className="mt-4 leading-relaxed text-chalk/90">{project.summary}</p>
          <ProjectContext project={project} className="mt-4" />
          <p className="mt-3 text-sm leading-relaxed text-mist">
            <span className="kicker mr-2 text-fog">Problem</span>
            {project.problem}
          </p>
        </div>

        <HighlightList items={project.highlights} compact />
        <div className="mt-auto flex flex-col gap-6">
          <StackList stack={project.stack} />
          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  );
}
