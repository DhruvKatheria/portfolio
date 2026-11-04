import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Chip } from "@/components/ui/Chip";
import { GitHubIcon } from "@/components/ui/Icons";
import { LinkButton } from "@/components/ui/LinkButton";

export function StackList({ stack, label = "Tech stack" }: { stack: string[]; label?: string }) {
  return (
    <div>
      <p className="kicker text-fog">{label}</p>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <li key={tech}>
            <Chip>{tech}</Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HighlightList({ items, compact }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={`flex flex-col ${compact ? "gap-2.5" : "gap-3"}`}>
      {items.map((item) => (
        <li key={item} className={`flex gap-3 leading-relaxed text-chalk/85 ${compact ? "text-sm" : ""}`}>
          <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rotate-45 bg-grana-bright" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Case-study CTA plus repo/demo links — the latter only if confirmed in data. */
export function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <LinkButton href={`/projects/${project.slug}`}>
        Read case study <ArrowUpRight size={16} aria-hidden="true" />
        <span className="sr-only">: {project.title}</span>
      </LinkButton>
      {project.links?.repo ? (
        <LinkButton href={project.links.repo} variant="secondary" external>
          <GitHubIcon size={16} /> Source
        </LinkButton>
      ) : null}
      {project.links?.demo ? (
        <LinkButton href={project.links.demo} variant="secondary" external>
          Live demo <ArrowUpRight size={16} aria-hidden="true" />
        </LinkButton>
      ) : null}
    </div>
  );
}
