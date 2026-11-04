import { VisualFrame } from "./VisualFrame";

/** Abstract dashboard composition. Shapes are illustrative; no data is represented. */
export function LedgerVisual({ id = "ledger" }: { id?: string }) {
  const bars = [46, 70, 58, 88, 64, 96, 74];
  return (
    <VisualFrame
      id={id}
      title="FinTrack dashboard concept"
      desc="Abstract illustration of a finance dashboard: monthly spending bars, a category breakdown ring and a budget progress track. Illustrative shapes only, not real data."
    >
      {/* panel: monthly */}
      <rect x="20" y="24" width="220" height="176" rx="8" fill="#0F1629" stroke="#F3F0E8" strokeOpacity="0.12" />
      <text x="36" y="48" fontSize="8.5" fill="#9AA3B5" letterSpacing="1.2">MONTHLY SPENDING</text>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={40 + i * 27}
          y={182 - h}
          width="15"
          height={h}
          rx="2"
          fill={i === 5 ? "#A50044" : "#004D98"}
          fillOpacity={i === 5 ? 0.95 : 0.55 + i * 0.05}
        />
      ))}
      <line x1="34" y1="182" x2="226" y2="182" stroke="#F3F0E8" strokeOpacity="0.15" />

      {/* panel: categories */}
      <rect x="254" y="24" width="126" height="120" rx="8" fill="#0F1629" stroke="#F3F0E8" strokeOpacity="0.12" />
      <text x="268" y="48" fontSize="8.5" fill="#9AA3B5" letterSpacing="1.2">CATEGORIES</text>
      <g transform="translate(317 94)" fill="none" strokeWidth="11">
        <circle r="30" stroke="#F3F0E8" strokeOpacity="0.06" />
        <circle r="30" stroke="#004D98" strokeDasharray="70 189" transform="rotate(-90)" />
        <circle r="30" stroke="#A50044" strokeDasharray="46 189" strokeDashoffset="-74" transform="rotate(-90)" />
        <circle r="30" stroke="#5C9BE6" strokeOpacity="0.6" strokeDasharray="34 189" strokeDashoffset="-124" transform="rotate(-90)" />
      </g>

      {/* panel: budget */}
      <rect x="254" y="154" width="126" height="46" rx="8" fill="#0F1629" stroke="#F3F0E8" strokeOpacity="0.12" />
      <text x="268" y="174" fontSize="8.5" fill="#9AA3B5" letterSpacing="1.2">BUDGET</text>
      <rect x="268" y="183" width="98" height="5" rx="2.5" fill="#F3F0E8" fillOpacity="0.08" />
      <rect x="268" y="183" width="62" height="5" rx="2.5" fill="#5C9BE6" />

      {/* api strip */}
      <g transform="translate(20 214)">
        {["AUTH · JWT", "REST API", "POSTGRESQL"].map((label, i) => (
          <g key={label} transform={`translate(${i * 124} 0)`}>
            <rect width="112" height="24" rx="12" fill="none" stroke="#F3F0E8" strokeOpacity="0.16" />
            <text x="56" y="15.5" textAnchor="middle" fontSize="8.5" fill="#F3F0E8" fillOpacity="0.8" letterSpacing="1">{label}</text>
          </g>
        ))}
      </g>
    </VisualFrame>
  );
}
