// All portfolio content lives here, sourced from the resume.
// Edit this file to update the site; pages only render it.

export const profile = {
  name: "Dhruv Katheria",
  tagline: "IT Engineering student at PICT, Pune",
  email: "dhruvkatheria2006@gmail.com",
  github: "https://github.com/DhruvKatheria",
  linkedin: "https://linkedin.com/in/dhruv",
};

export const education = [
  {
    institution: "Pune Institute of Computer Technology, Pune",
    degree: "Bachelor of Engineering in Information Technology",
    period: "Sept 2024 – May 2028",
    detail: "CGPA: 8.94",
  },
];

export const projects = [
  {
    name: "AI based Phishing Detector",
    date: "March 2025",
    stack: ["HTML", "CSS", "JavaScript", "Python", "Flask", "BERT", "PyPDF/FPDF"],
    points: [
      "Built an AI-powered phishing email/URL detector.",
      "Fine-tuned and integrated a pretrained BERT model for phishing email classification.",
      "Recognises threat patterns and classifies communications by threat level based on deception and detectability.",
    ],
  },
  {
    name: "FinTrack – Personal Finance Management Platform",
    date: "January 2026",
    stack: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT Auth", "Docker"],
    points: [
      "Developed a full-stack personal finance platform with secure JWT authentication, transaction management, budgeting, and expense categorisation.",
      "Designed RESTful APIs and a normalised PostgreSQL schema for users, transactions, and budgets.",
      "Implemented interactive dashboards with monthly spending analytics, category-wise charts, and budget tracking.",
    ],
  },
  {
    name: "SettleChain – Decentralized Escrow & Dispute Resolution Protocol",
    date: "April 2026",
    stack: ["Node.js", "MongoDB", "Algorand", "PyTeal", "IPFS", "REST APIs"],
    points: [
      "Built a decentralized escrow protocol using Algorand PyTeal smart contracts to lock funds and automate instant payment releases.",
      "Integrated SHA-256 hashing and IPFS storage for immutable proof of task requirements and work submissions.",
      "Designed a staking-based validator system with randomized oracles and incentive slashing for trustless conflict resolution.",
    ],
  },
];

export const achievements = [
  "Solved 350+ DSA problems across LeetCode, HackerRank and Codeforces (250+ on LeetCode – dhruvkatheria).",
  "Won HackSprint v6.0, hosted by ISTE Students' Chapter MMCOE.",
];

export const skills = [
  { category: "Languages", items: ["C++", "JavaScript", "Python"] },
  { category: "Frameworks", items: ["React", "Flask", "FastAPI"] },
  { category: "Developer Tools", items: ["Git", "GitHub", "Postman"] },
  {
    category: "Computer Fundamentals",
    items: ["OOP", "Database Management Systems", "Computer Networks", "Operating Systems"],
  },
];
