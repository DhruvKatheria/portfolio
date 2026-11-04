import type { LearningTrack, SkillGroup } from "@/types";

/** First team: skills already used in projects or coursework. */
export const skillGroups: SkillGroup[] = [
  { position: "Midfield", category: "Languages", items: ["C++", "JavaScript", "Python"] },
  { position: "Attack", category: "Frameworks", items: ["React", "Flask", "FastAPI"] },
  { position: "Kit room", category: "Developer tools", items: ["Git", "GitHub", "Postman"] },
  {
    position: "Back line",
    category: "Computer science",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

/** In training: technologies currently being learned. Not claimed as established. */
export const learningTracks: LearningTrack[] = [
  { third: "Build-up", area: "Data", items: ["PostgreSQL"] },
  { third: "Build-up", area: "Backend", items: ["Node.js", "TypeScript"] },
  { third: "Progression", area: "Frontend", items: ["React", "Next.js"] },
  { third: "Progression", area: "Infrastructure", items: ["Docker", "AWS"] },
  { third: "Final third", area: "Systems", items: ["System Design"] },
  { third: "Final third", area: "AI", items: ["LLM applications", "RAG", "AI agents"] },
];

/** Hero formation (4-3-3): fundamentals at the back, languages in midfield, frameworks up front. */
export const formation = {
  name: "4-3-3",
  goalkeeper: "DSA",
  defence: ["OOP", "DBMS", "OS", "Networks"],
  midfield: ["C++", "Python", "JavaScript"],
  attack: ["Flask", "React", "FastAPI"],
} as const;
