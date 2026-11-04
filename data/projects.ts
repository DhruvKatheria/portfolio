import type { Project } from "@/types";

/**
 * Projects, in display order. To change the flagship, move `flagship: true`
 * to another entry — layouts adapt automatically.
 *
 * Content rule: only confirmed facts. Case-study sections without real
 * content are left out and will not render.
 */
export const projects: Project[] = [
  {
    slug: "phishing-detector",
    number: "01",
    title: "AI-Based Phishing Detector",
    shortTitle: "Phishing Detector",
    kicker: "Applied ML · Security",
    date: "March 2025",
    dateISO: "2025-03",
    flagship: true,
    visual: "threat",
    summary:
      "An AI-powered detector for phishing emails and URLs, built around a fine-tuned BERT model that classifies communications by threat level.",
    problem:
      "Phishing messages are written to look legitimate. Simple keyword rules miss them, so recognising one depends on understanding language and intent, not just spotting a bad link.",
    stack: ["Python", "Flask", "BERT", "JavaScript", "HTML", "CSS", "PyPDF / FPDF"],
    highlights: [
      "Fine-tuned and integrated a pretrained BERT model for phishing email classification.",
      "Recognises threat patterns and grades communications by threat level, based on deception and detectability.",
      "Covers both phishing emails and URLs.",
    ],
    caseStudy: {
      overview: {
        paragraphs: [
          "An AI-powered phishing email and URL detector. A pretrained BERT language model was fine-tuned for phishing email classification and integrated into a Flask application with an HTML, CSS and JavaScript front end.",
        ],
      },
      problem: {
        paragraphs: [
          "Phishing relies on messages that look legitimate. Deciding whether a communication is a threat depends on its language and intent as much as on any single link, which is why the project uses a language model rather than fixed rules.",
        ],
      },
      architecture: {
        bullets: [
          "Web interface: HTML, CSS and JavaScript.",
          "Application server: Python with Flask.",
          "Classification: a fine-tuned pretrained BERT model.",
          "Document handling: PyPDF / FPDF libraries.",
        ],
      },
      aiPipeline: {
        paragraphs: [
          "The core of the system is a pretrained BERT model, fine-tuned for phishing email classification. Rather than a single yes/no answer, communications are classified by threat level based on how deceptive they are and how detectable that deception is.",
        ],
      },
    },
  },
  {
    slug: "fintrack",
    number: "02",
    title: "FinTrack",
    shortTitle: "FinTrack",
    kicker: "Full-stack · Personal finance",
    date: "January 2026",
    dateISO: "2026-01",
    visual: "ledger",
    summary:
      "A full-stack personal finance platform with secure authentication, transaction management, budgeting and spending analytics.",
    problem:
      "Personal spending is hard to reason about when transactions, budgets and categories live in different places. FinTrack brings them into one secure, structured system.",
    stack: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT Auth", "Docker"],
    highlights: [
      "Secure JWT authentication with transaction management, budgeting and expense categorisation.",
      "RESTful APIs over a normalised PostgreSQL schema for users, transactions and budgets.",
      "Interactive dashboards: monthly spending analytics, category-wise charts and budget tracking.",
    ],
    caseStudy: {
      overview: {
        paragraphs: [
          "A full-stack personal finance management platform. Users authenticate securely, record and manage transactions, set budgets, categorise expenses and follow their spending through interactive dashboards.",
        ],
      },
      requirements: {
        bullets: [
          "Secure user authentication.",
          "Transaction management.",
          "Budgeting and budget tracking.",
          "Expense categorisation.",
          "Monthly spending analytics and category-wise charts.",
        ],
      },
      frontend: {
        paragraphs: [
          "A React front end provides the interactive dashboards, including monthly spending analytics, category-wise charts and budget tracking views.",
        ],
      },
      backend: {
        paragraphs: [
          "A FastAPI backend exposes the application's functionality as RESTful APIs, with SQLAlchemy as the data-access layer.",
        ],
      },
      database: {
        paragraphs: [
          "A normalised PostgreSQL schema models the three core entities: users, transactions and budgets.",
        ],
      },
      api: {
        paragraphs: ["RESTful APIs designed around users, transactions and budgets."],
      },
      security: {
        paragraphs: ["Authentication uses JSON Web Tokens (JWT)."],
      },
      deployment: {
        paragraphs: ["Docker is part of the project's stack for containerisation."],
      },
    },
  },
  {
    slug: "settlechain",
    number: "03",
    title: "SettleChain",
    shortTitle: "SettleChain",
    kicker: "Blockchain · Protocol design",
    date: "April 2026",
    dateISO: "2026-04",
    visual: "escrow",
    summary:
      "A decentralised escrow and dispute-resolution protocol on Algorand, combining smart-contract escrow, verifiable work proofs and staked validators.",
    problem:
      "When two parties don't trust each other, escrow usually depends on a trusted middleman. SettleChain replaces that middleman with smart contracts, verifiable proofs and incentive-aligned validators.",
    stack: ["Algorand", "PyTeal", "Node.js", "MongoDB", "IPFS", "REST APIs"],
    highlights: [
      "Algorand PyTeal smart contracts lock funds and automate instant payment releases.",
      "SHA-256 hashing and IPFS storage give immutable proof of task requirements and work submissions.",
      "A staking-based validator system with randomised oracles and incentive slashing for trustless conflict resolution.",
    ],
    caseStudy: {
      overview: {
        paragraphs: [
          "A decentralised escrow and dispute-resolution protocol. Funds are held by smart contracts rather than an intermediary, the work is anchored to tamper-evident proofs, and disputes go to a staked validator system.",
        ],
      },
      problem: {
        paragraphs: [
          "Escrow between parties who don't trust each other usually needs a trusted third party. The project explores making that process trustless: funds, evidence and dispute outcomes are all enforced by protocol rules.",
        ],
      },
      architecture: {
        bullets: [
          "Smart contracts: Algorand, written in PyTeal, hold funds in escrow and release payments.",
          "Proof layer: SHA-256 hashes of task requirements and work submissions, stored on IPFS.",
          "Dispute layer: staking-based validators selected through randomised oracles.",
          "Application layer: Node.js services and REST APIs, with MongoDB for application data.",
        ],
      },
      backend: {
        paragraphs: ["Node.js services expose REST APIs and use MongoDB for application data."],
      },
      security: {
        bullets: [
          "Funds are locked in smart contracts instead of being held by an intermediary.",
          "SHA-256 hashing with IPFS storage makes requirement and submission records immutable.",
          "Incentive slashing penalises dishonest validators, so honest resolution is the rational strategy.",
        ],
      },
      decisions: {
        bullets: [
          "Randomised oracle selection, so validators for a given dispute can't be predicted in advance.",
          "Staking with slashing, so validators have something to lose.",
        ],
      },
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFlagship(): Project {
  return projects.find((p) => p.flagship) ?? projects[0];
}

export function getSupportingProjects(): Project[] {
  const flagship = getFlagship();
  return projects.filter((p) => p.slug !== flagship.slug);
}
