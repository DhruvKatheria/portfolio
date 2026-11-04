import Link from "next/link";
import type { Project } from "@/types";
import { Stripe } from "@/components/ui/Stripe";
import { ProjectVisual } from "./ProjectVisual";
import { HighlightList, ProjectActions, StackList } from "./ProjectMeta";

/** The captain's card: the largest project treatment on the page. */
export function FlagshipProject({ project }: { project: Project }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-line bg-pitch">
      <Stripe className="absolute inset-y-0 left-0 w-1.5" width={3} />
      <div className="grid lg:grid-cols-12">
        <div className="flex flex-col gap-8 p-6 pl-8 sm:p-10 sm:pl-12 lg:col-span-7">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="kicker inline-flex items-center gap-2 text-chalk">
              <span
                aria-hidden="true"
                className="grid size-5 place-items-center rounded-[3px] bg-gold text-[0.65rem] font-bold text-night"
              >
                C
              </span>
              Flagship project
            </span>
            <span className="kicker text-fog">
              No. {project.number} · {project.date}
            </span>
          </div>

          <div>
            <p className="kicker text-blau-bright">{project.kicker}</p>
            <h3 className="display mt-3 text-[clamp(2.4rem,5.5vw,4rem)]">
              <Link href={`/projects/${project.slug}`} className="rounded-sm hover:text-white">
                {project.title}
              </Link>
            </h3>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-chalk/90">{project.summary}</p>
          </div>

          <div className="border-l-2 border-grana/70 pl-5">
            <p className="kicker text-fog">The problem</p>
            <p className="mt-2 max-w-xl leading-relaxed text-mist">{project.problem}</p>
          </div>

          <div>
            <p className="kicker mb-4 text-fog">Engineering highlights</p>
            <HighlightList items={project.highlights} />
          </div>

          <StackList stack={project.stack} />
          <ProjectActions project={project} />
        </div>

        <div className="relative flex items-center border-t border-line bg-night/40 p-6 sm:p-10 lg:col-span-5 lg:border-t-0 lg:border-l">
          <div aria-hidden="true" className="display pointer-events-none absolute top-4 right-6 text-[7rem] leading-none text-chalk/[0.04] select-none">
            {project.number}
          </div>
          <div className="relative w-full">
            <ProjectVisual visual={project.visual} id={`visual-${project.slug}`} />
            <p className="kicker mt-4 text-center text-fog">Concept diagram · not a screenshot</p>
          </div>
        </div>
      </div>
    </article>
  );
}
