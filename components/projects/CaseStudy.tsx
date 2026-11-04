import { CASE_STUDY_SECTIONS, type CaseStudy as CaseStudyData } from "@/types";
import { HighlightList } from "./ProjectMeta";
import { ProjectVisual } from "./ProjectVisual";

/** Sections that have real content, in canonical order. */
export function presentSections(caseStudy: CaseStudyData) {
  return CASE_STUDY_SECTIONS.filter(({ key }) => {
    const block = caseStudy[key];
    return Boolean(block && (block.paragraphs?.length || block.bullets?.length));
  });
}

export function CaseStudyToc({ caseStudy }: { caseStudy: CaseStudyData }) {
  return (
    <nav aria-label="Case study sections">
      <p className="kicker text-fog">In this report</p>
      <ol className="mt-4 flex flex-col gap-1 border-l border-line">
        {presentSections(caseStudy).map(({ key, title }, i) => (
          <li key={key}>
            <a
              href={`#${key}`}
              className="-ml-px flex gap-3 border-l border-transparent py-1.5 pl-4 text-sm text-mist transition-colors hover:border-chalk hover:text-chalk"
            >
              <span className="font-mono text-xs text-fog tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              {title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Renders only the sections present in the data — no empty headings, no filler. */
export function CaseStudyBody({ caseStudy }: { caseStudy: CaseStudyData }) {
  return (
    <div className="flex flex-col">
      {presentSections(caseStudy).map(({ key, title }, i) => {
        const block = caseStudy[key]!;
        return (
          <section key={key} id={key} aria-labelledby={`${key}-title`} className="scroll-mt-24 border-t border-line py-10 first:border-t-0 first:pt-0">
            <p className="kicker text-fog">{String(i + 1).padStart(2, "0")}</p>
            <h2 id={`${key}-title`} className="display mt-2 text-4xl">
              {title}
            </h2>
            <div className="mt-5 flex max-w-2xl flex-col gap-4 text-lg leading-relaxed text-chalk/85">
              {block.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              {block.visual ? (
                <figure className="my-2 rounded-2xl border border-line bg-pitch p-4 sm:p-6">
                  <ProjectVisual visual={block.visual} id={`cs-${key}`} />
                </figure>
              ) : null}
              {block.bullets?.length ? <HighlightList items={block.bullets} /> : null}
            </div>
          </section>
        );
      })}
    </div>
  );
}
