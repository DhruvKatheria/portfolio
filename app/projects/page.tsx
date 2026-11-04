import type { Metadata } from "next";
import { ProjectsShowcase } from "@/components/projects/ProjectsShowcase";
import { Stripe } from "@/components/ui/Stripe";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies of projects by Dhruv Katheria, spanning energy analytics, full-stack web and blockchain systems.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="container-page pt-32 pb-24 md:pt-40 md:pb-32">
      <header className="max-w-3xl">
        <p className="kicker flex items-center gap-3 text-mist">
          <Stripe className="h-3 w-3 rounded-[1px]" width={1.5} /> Squad list
        </p>
        <h1 className="display mt-5 text-[clamp(3rem,9vw,6.5rem)]">All projects.</h1>
        <p className="mt-5 max-w-2xl text-lg text-mist">
          Every project I&apos;ve written up, flagship first. Each card opens a full case study.
        </p>
      </header>
      <div className="mt-14">
        <ProjectsShowcase />
      </div>
    </div>
  );
}
