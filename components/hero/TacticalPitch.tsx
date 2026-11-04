import { formation } from "@/data/skills";

type Node = { x: number; y: number; n: number; label: string };
type Unit = { key: "attack" | "midfield" | "defence" | "keeper"; title: string; summary: string; nodes: Node[] };

const units: Unit[] = [
  {
    key: "attack",
    title: "Attack",
    summary: "Frameworks",
    nodes: [
      { x: 62, y: 118, n: 7, label: formation.attack[0] },
      { x: 150, y: 92, n: 9, label: formation.attack[1] },
      { x: 238, y: 118, n: 11, label: formation.attack[2] },
    ],
  },
  {
    key: "midfield",
    title: "Midfield",
    summary: "Languages",
    nodes: [
      { x: 82, y: 222, n: 8, label: formation.midfield[0] },
      { x: 150, y: 248, n: 6, label: formation.midfield[1] },
      { x: 218, y: 222, n: 10, label: formation.midfield[2] },
    ],
  },
  {
    key: "defence",
    title: "Back line",
    summary: "CS fundamentals",
    nodes: [
      { x: 44, y: 330, n: 2, label: formation.defence[0] },
      { x: 114, y: 344, n: 4, label: formation.defence[1] },
      { x: 186, y: 344, n: 5, label: formation.defence[2] },
      { x: 256, y: 330, n: 3, label: formation.defence[3] },
    ],
  },
  {
    key: "keeper",
    title: "Keeper",
    summary: "DSA",
    nodes: [{ x: 150, y: 404, n: 1, label: formation.goalkeeper }],
  },
];

// Passing lanes: build-up from the back, through midfield, into attack.
const lanes: [Node, Node][] = (() => {
  const [att, mid, def, gk] = units.map((u) => u.nodes);
  return [
    [gk[0], def[1]],
    [gk[0], def[2]],
    [def[0], mid[0]],
    [def[1], mid[1]],
    [def[2], mid[1]],
    [def[3], mid[2]],
    [mid[0], att[0]],
    [mid[1], att[1]],
    [mid[2], att[2]],
    [mid[0], mid[1]],
    [mid[1], mid[2]],
  ];
})();

/**
 * Original tactics-board illustration: a 4-3-3 whose positions are real,
 * confirmed skills. The visible legend below carries the same information.
 */
export function TacticalPitch() {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-line bg-pitch/80">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="kicker text-mist">Formation · {formation.name}</span>
        <span className="kicker text-fog">The stack</span>
      </div>

      <svg viewBox="0 0 300 440" className="block h-auto w-full" aria-hidden="true">
        <defs>
          <linearGradient id="pitch-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#004D98" stopOpacity="0.16" />
            <stop offset="1" stopColor="#A50044" stopOpacity="0.10" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="300" height="440" fill="url(#pitch-fade)" />
        {/* mown stripes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x="12" y={14 + i * 52} width="276" height="26" fill="#F3F0E8" opacity="0.014" />
        ))}
        <g fill="none" stroke="#F3F0E8" strokeOpacity="0.16" strokeWidth="1">
          <rect x="12" y="14" width="276" height="412" rx="2" />
          <line x1="12" y1="220" x2="288" y2="220" />
          <circle cx="150" cy="220" r="36" />
          <rect x="72" y="14" width="156" height="62" />
          <rect x="114" y="14" width="72" height="22" />
          <path d="M122 76 a32 32 0 0 0 56 0" />
          <rect x="72" y="364" width="156" height="62" />
          <rect x="114" y="404" width="72" height="22" />
          <path d="M122 364 a32 32 0 0 1 56 0" />
        </g>
        <circle cx="150" cy="220" r="2" fill="#F3F0E8" fillOpacity="0.3" />

        <g stroke="#5C9BE6" strokeOpacity="0.45" strokeWidth="1.2" strokeLinecap="round">
          {lanes.map(([a, b], i) => (
            <line
              key={i}
              className="lane"
              pathLength={1}
              style={{ ["--lane-length" as string]: 1, animationDelay: `${300 + i * 70}ms` }}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
            />
          ))}
        </g>

        {units.map((unit) => (
          <g key={unit.key} className="group">
            {unit.nodes.map((node) => (
              <g key={node.n} transform={`translate(${node.x} ${node.y})`}>
                <circle
                  r="13"
                  className={`transition-[fill] duration-300 ${
                    unit.key === "attack" ? "fill-grana group-hover:fill-grana-bright" : "fill-blau group-hover:fill-blau-bright"
                  }`}
                  stroke="#F3F0E8"
                  strokeOpacity="0.55"
                />
                <text
                  y="4"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="#F3F0E8"
                  fontFamily="var(--font-geist-mono), monospace"
                >
                  {node.n}
                </text>
                <text
                  y="29"
                  textAnchor="middle"
                  fontSize="10.5"
                  fill="#F3F0E8"
                  fillOpacity="0.85"
                  fontFamily="var(--font-geist-mono), monospace"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </g>
        ))}
      </svg>

      <figcaption className="grid grid-cols-3 border-t border-line">
        {units.slice(0, 3).map((u) => (
          <div key={u.key} className="border-line px-4 py-3 [&:not(:last-child)]:border-r">
            <p className="kicker text-fog">{u.title}</p>
            <p className="mt-1 text-[0.8rem] leading-snug text-chalk/90">{u.summary}</p>
          </div>
        ))}
        <p className="sr-only">
          Keeper: {formation.goalkeeper}. Back line: {formation.defence.join(", ")}. Midfield:{" "}
          {formation.midfield.join(", ")}. Attack: {formation.attack.join(", ")}.
        </p>
      </figcaption>
    </figure>
  );
}
