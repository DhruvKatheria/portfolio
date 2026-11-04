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
    slug: "solarsleuth",
    number: "01",
    title: "SolarSleuth",
    subtitle: "Explainable Solar PV Performance Analytics Platform",
    shortTitle: "SolarSleuth",
    kicker: "Energy analytics · Explainable AI",
    flagship: true,
    visual: "solar-dashboard",
    context: {
      event: "Globathon by Globatech",
      brief: "Problem Statement 3: Explaining Performance Variance",
      team: "Midnight_Protocol",
    },
    summary:
      "A full-stack solar analytics platform that investigates why solar plants generate less electricity than forecasted, and backs every explanation with evidence.",
    problem:
      "Solar plants regularly produce less than their forecasts. The shortfall itself is easy to see. Explaining it is harder: where the gap appeared, how it built up, and what the data says about the likely cause.",
    stack: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "MongoDB",
      "NumPy",
      "Pandas",
      "JWT",
      "Argon2",
      "Docker",
      "LLM integration",
    ],
    highlights: [
      "Physics-based solar generation estimation provides the expected baseline that actual output is measured against.",
      "Anomaly detection combines MAD-based peer comparison, persistence detection and CUSUM.",
      "Evidence-based loss attribution and forecast-to-actual energy reconciliation, with inverter-level performance analysis.",
      "Separate backend, analytics and LLM explanation services behind interactive dashboards, persistent reports and an AI Variance Assistant.",
    ],
    caseStudy: {
      overview: {
        paragraphs: [
          "SolarSleuth is a full-stack solar energy analytics platform that investigates why solar plants generate less electricity than forecasted. It processes plant telemetry, estimates expected generation using physics-based PV modelling, detects anomalies, identifies potential loss causes, and presents evidence-backed insights through interactive dashboards and an AI-assisted explanation interface.",
          "Built by team Midnight_Protocol at Globathon by Globatech, in response to Problem Statement 3: Explaining Performance Variance.",
        ],
      },
      problem: {
        paragraphs: [
          "A plant that underperforms its forecast creates a number, not an answer. Operators need to know where the variance came from, whether it is a one-off or a sustained issue, and which evidence supports a given cause. The challenge brief framed this directly: explain performance variance, don't just report it.",
        ],
      },
      solution: {
        bullets: [
          "Ingest plant telemetry from CSV and XLSX files, with validation before analysis.",
          "Estimate expected generation with physics-based PV modelling.",
          "Detect anomalies using MAD-based peer comparison, persistence detection and CUSUM.",
          "Attribute losses to potential causes, with the supporting evidence attached.",
          "Reconcile forecast against actual energy, down to inverter level.",
          "Present results through interactive dashboards, persistent reports and an AI Variance Assistant.",
        ],
      },
      architecture: {
        paragraphs: [
          "The platform uses a multi-service architecture, with the backend, analytics and LLM explanation layers running as separate services. The diagram below is a simplified view.",
        ],
        visual: "solar-architecture",
        bullets: [
          "Frontend: React and TypeScript, for dashboards, reports and the assistant interface.",
          "Backend service: Python and FastAPI, with JWT authentication, Argon2 password hashing and MongoDB for persistent data such as reports.",
          "Analytics service: Python with NumPy and Pandas for modelling, detection, attribution and reconciliation.",
          "LLM explanation service: powers the AI Variance Assistant.",
          "Docker for running the services.",
        ],
      },
      implementation: {
        bullets: [
          "Data ingestion: CSV and XLSX uploads are parsed and validated before they reach the analytics pipeline.",
          "Expected generation: a physics-based PV model estimates what each plant should have produced.",
          "Inverter-level analysis: performance is examined per inverter, not just as a plant-wide total.",
          "Numerical work is done with NumPy and Pandas in the dedicated analytics service.",
        ],
      },
      anomalyDetection: {
        paragraphs: [
          "Underperformance takes different shapes, so the platform uses three complementary detectors rather than one threshold:",
        ],
        bullets: [
          "MAD-based peer detection: compares comparable units against their peers using the median absolute deviation, a measure of spread that the outliers being searched for can't easily distort.",
          "Persistence detection: separates deviations that persist over time from one-off spikes.",
          "CUSUM: accumulates small, sustained deviations so that gradual drift becomes visible, even when no single reading looks wrong.",
        ],
      },
      reconciliation: {
        paragraphs: [
          "Forecast-to-actual energy reconciliation sets forecast, physics-based expected and actual generation side by side, so the gap can be traced instead of just measured.",
          "Evidence-based loss attribution then identifies potential causes for the variance. Each one is shown with the evidence behind it, so a reader can check the reasoning rather than trust a label.",
        ],
      },
      aiPipeline: {
        paragraphs: [
          "The AI Variance Assistant is an LLM-backed explanation interface that runs as its own service. It turns the platform's analysis into plain-language answers about why a plant's performance varied.",
        ],
      },
      security: {
        bullets: ["JWT-based authentication.", "Passwords hashed with Argon2."],
      },
      learnings: {
        bullets: [
          "A shortfall only means something against a baseline. Physics-based expected generation gives every finding a reference point.",
          "No single detector covers every failure shape. Peer outliers, sustained deviations and gradual drift each need a different test.",
          "Keeping the LLM in its own service, explaining results that analytics has already computed, keeps explanations tied to evidence.",
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
