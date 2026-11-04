import type { Education, JourneyEntry } from "@/types";
import { projects } from "./projects";

export const education: Education = {
  institution: "Pune Institute of Computer Technology",
  short: "PICT",
  affiliation: "Savitribai Phule Pune University (SPPU)",
  degree: "B.E. Information Technology",
  period: "2024 – 2028",
  grade: "8.94",
};

/**
 * The journey is built from confirmed facts only. Add internships,
 * open-source work, leadership or research as new entries; `kind`
 * controls the label.
 */
export const journey: JourneyEntry[] = [
  {
    kind: "education",
    date: "2024",
    title: "Started B.E. Information Technology at PICT",
    detail: "Building a base in data structures, OOP, DBMS, operating systems and networks.",
  },
  ...[...projects]
    .sort((a, b) => a.dateISO.localeCompare(b.dateISO))
    .map<JourneyEntry>((p) => ({
      kind: "project",
      date: p.date,
      title: p.title,
      detail: p.summary,
      href: `/projects/${p.slug}`,
    })),
];

export const journeyKindLabel: Record<JourneyEntry["kind"], string> = {
  education: "Education",
  project: "Project",
  hackathon: "Hackathon",
  internship: "Internship",
  "open-source": "Open source",
  leadership: "Leadership",
  research: "Research",
};
