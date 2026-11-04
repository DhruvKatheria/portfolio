import type { NavItem, SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "Dhruv Katheria",
  shortName: "DK",
  role: "Software Engineer",
  headline: {
    lead: "Software Engineer building",
    emphasis: "full-stack & AI-powered applications.",
  },
  intro:
    "I'm an Information Technology student at PICT working across backend engineering, full-stack development and applied AI. I like understanding how systems behave under the hood, then using that to turn ideas into software that actually works.",
  credential: "PICT · B.E. Information Technology · 2028",
  email: "dhruvkatheria2006@gmail.com",
  github: "https://github.com/DhruvKatheria",
  linkedin: "https://www.linkedin.com/in/dhruv-katheria-77095832a/",
  resumePath: "/resume/Dhruv_Katheria_Resume.pdf",
  description:
    "Dhruv Katheria — B.E. Information Technology student at PICT building full-stack and AI-powered applications. Projects in energy analytics, full-stack web and blockchain systems.",
};

export const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL once a domain exists;
 * on Vercel the production URL is picked up automatically.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
