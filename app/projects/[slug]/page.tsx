import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { CaseStudyBody, CaseStudyToc } from "@/components/projects/CaseStudy";
import { HighlightList, StackList } from "@/components/projects/ProjectMeta";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { GitHubIcon } from "@/components/ui/Icons";
import { LinkButton } from "@/components/ui/LinkButton";
import { Stripe } from "@/components/ui/Stripe";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.subtitle ? `${project.title}: ${project.subtitle}` : project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.summary, type: "article" },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pt-28 pb-24 md:pt-36">
      <div className="container-page">
        <Link href="/#work" className="kicker inline-flex min-h-11 items-center gap-2 text-mist hover:text-chalk">
          <ArrowLeft size={14} aria-hidden="true" /> All projects
        </Link>

        <header className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="kicker flex flex-wrap items-center gap-3 text-mist">
              <Stripe className="h-3 w-3 rounded-[1px]" width={1.5} />
              <span className="text-chalk">No. {project.number} · Match report</span>
              {project.date ? <span className="text-fog">{project.date}</span> : null}
            </p>
            <p className="kicker mt-6 text-blau-bright">{project.kicker}</p>
            <h1 className="display mt-3 text-[clamp(3rem,9vw,6.5rem)]">{project.title}</h1>
            {project.subtitle ? <p className="mt-4 text-xl font-medium text-chalk">{project.subtitle}</p> : null}
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-chalk/90">{project.summary}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-pitch p-5 sm:p-7">
              <ProjectVisual visual={project.visual} id={`case-${project.slug}`} />
            </div>
          </div>
        </header>
      </div>

      <div className="container-page mt-16 grid gap-12 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className="flex flex-col gap-8 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-line bg-pitch p-6">
              <p className="kicker border-b border-line pb-3 text-mist">Team sheet</p>
              <dl className="mt-5 flex flex-col gap-4">
                {project.context ? (
                  <>
                    <div>
                      <dt className="kicker text-fog">Event</dt>
                      <dd className="mt-1 text-chalk">{project.context.event}</dd>
                    </div>
                    {project.context.brief ? (
                      <div>
                        <dt className="kicker text-fog">Brief</dt>
                        <dd className="mt-1 text-chalk">{project.context.brief}</dd>
                      </div>
                    ) : null}
                    {project.context.team ? (
                      <div>
                        <dt className="kicker text-fog">Team</dt>
                        <dd className="mt-1 text-chalk">{project.context.team}</dd>
                      </div>
                    ) : null}
                  </>
                ) : null}
                {project.date ? (
                  <div>
                    <dt className="kicker text-fog">Date</dt>
                    <dd className="mt-1 text-chalk">{project.date}</dd>
                  </div>
                ) : null}
              </dl>
              <div className="mt-5">
                <StackList stack={project.stack} />
              </div>
              {project.links?.repo || project.links?.demo ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.links.repo ? (
                    <LinkButton href={project.links.repo} variant="secondary" external>
                      <GitHubIcon size={16} /> Source
                    </LinkButton>
                  ) : null}
                  {project.links.demo ? (
                    <LinkButton href={project.links.demo} variant="secondary" external>
                      Live demo
                    </LinkButton>
                  ) : null}
                </div>
              ) : null}
            </div>
            <div className="hidden lg:block">
              <CaseStudyToc caseStudy={project.caseStudy} />
            </div>
          </div>
        </aside>

        <div className="lg:col-span-8">
          <section aria-labelledby="highlights-title" className="mb-12 rounded-2xl border border-line bg-pitch p-6 sm:p-8">
            <h2 id="highlights-title" className="kicker text-fog">
              Key highlights
            </h2>
            <div className="mt-5">
              <HighlightList items={project.highlights} />
            </div>
          </section>
          <CaseStudyBody caseStudy={project.caseStudy} />
        </div>
      </div>

      {next && next.slug !== project.slug ? (
        <div className="container-page mt-20">
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6 rounded-2xl border border-line bg-pitch p-6 transition-colors hover:border-line-strong sm:p-8"
          >
            <div>
              <p className="kicker text-fog">Next fixture · No. {next.number}</p>
              <p className="display mt-2 text-[clamp(2rem,5vw,3rem)]">{next.title}</p>
            </div>
            <ArrowRight aria-hidden="true" className="shrink-0 text-mist transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      ) : null}
    </article>
  );
}
