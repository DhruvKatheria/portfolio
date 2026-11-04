/** Shared content types. Data in /data conforms to these; components only render them. */

export type ExternalLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  role: string;
  headline: { lead: string; emphasis: string };
  intro: string;
  credential: string;
  email: string;
  github: string;
  linkedin: string;
  /** Path under /public. The resume CTA only renders if this file actually exists. */
  resumePath: string;
  description: string;
};

export type NavItem = { label: string; href: `#${string}` };

/** Keys of every case-study section the template supports, in render order. */
export const CASE_STUDY_SECTIONS = [
  { key: "overview", title: "Overview" },
  { key: "problem", title: "Problem" },
  { key: "motivation", title: "Motivation" },
  { key: "solution", title: "Solution" },
  { key: "requirements", title: "Requirements" },
  { key: "architecture", title: "Architecture" },
  { key: "implementation", title: "Technical implementation" },
  { key: "frontend", title: "Frontend architecture" },
  { key: "backend", title: "Backend architecture" },
  { key: "database", title: "Database design" },
  { key: "api", title: "API design" },
  { key: "anomalyDetection", title: "Anomaly detection" },
  { key: "reconciliation", title: "Energy reconciliation" },
  { key: "aiPipeline", title: "AI / ML pipeline" },
  { key: "security", title: "Security" },
  { key: "deployment", title: "Deployment" },
  { key: "challenges", title: "Challenges" },
  { key: "decisions", title: "Engineering decisions" },
  { key: "tradeoffs", title: "Tradeoffs" },
  { key: "learnings", title: "Key learnings" },
  { key: "future", title: "Future improvements" },
] as const;

export type CaseStudySectionKey = (typeof CASE_STUDY_SECTIONS)[number]["key"];

export type CaseStudyBlock = {
  paragraphs?: string[];
  bullets?: string[];
  /** Optional diagram rendered under the section text. */
  visual?: ProjectVisual;
};

/** Only sections with real content are listed; missing keys are simply not rendered. */
export type CaseStudy = Partial<Record<CaseStudySectionKey, CaseStudyBlock>>;

/** Original illustrations available to projects and case-study sections. */
export type ProjectVisual = "solar-dashboard" | "solar-architecture" | "ledger" | "escrow";

export type Project = {
  slug: string;
  /** Squad number shown on cards, e.g. "01". */
  number: string;
  title: string;
  /** Optional descriptive line shown under the title. */
  subtitle?: string;
  /** Short name used in tight spaces. */
  shortTitle: string;
  kicker: string;
  /** Display date. Omit if unconfirmed. */
  date?: string;
  /** ISO year-month used for sorting the journey timeline. Undated projects sort last. */
  dateISO?: string;
  /** Where the project was built, e.g. a hackathon. Only confirmed details. */
  context?: { event: string; brief?: string; team?: string };
  summary: string;
  problem: string;
  stack: string[];
  highlights: string[];
  visual: ProjectVisual;
  /** The flagship project gets the largest treatment. Exactly one should be true. */
  flagship?: boolean;
  /** Only set when the URL is confirmed. CTAs are omitted otherwise. */
  links?: { repo?: string; demo?: string };
  caseStudy: CaseStudy;
};

export type Stat = {
  value: string;
  label: string;
  note?: string;
  /** "result" renders as a match-result badge instead of a number. */
  kind?: "figure" | "result";
};

export type Achievement = {
  title: string;
  detail: string;
};

export type SkillGroup = {
  /** Position on the team sheet, e.g. "Back line". */
  position: string;
  category: string;
  items: string[];
};

export type LearningTrack = {
  area: string;
  items: string[];
  /** Pitch third used purely for layout. */
  third: "Build-up" | "Progression" | "Final third";
};

export type Education = {
  institution: string;
  short: string;
  affiliation: string;
  degree: string;
  period: string;
  grade: string;
};

export type JourneyKind =
  | "education"
  | "project"
  | "hackathon"
  | "internship"
  | "open-source"
  | "leadership"
  | "research";

export type JourneyEntry = {
  kind: JourneyKind;
  /** Display date. Omit if unconfirmed; the entry then renders undated. */
  date?: string;
  title: string;
  detail: string;
  href?: string;
};
