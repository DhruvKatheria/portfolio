import { VisualFrame } from "./VisualFrame";

/** Concept diagram: message → fine-tuned BERT → threat-level classes. No real outputs shown. */
export function ThreatVisual({ id = "threat" }: { id?: string }) {
  const tiers = [
    { label: "LOW", fill: "#004D98", opacity: 0.35 },
    { label: "MEDIUM", fill: "#6A123A", opacity: 0.7 },
    { label: "HIGH", fill: "#A50044", opacity: 0.9 },
  ];
  return (
    <VisualFrame
      id={id}
      title="Phishing detector concept diagram"
      desc="An email or URL is passed to a fine-tuned BERT model, which classifies it into a threat level: low, medium or high."
    >
      {/* input message */}
      <rect x="22" y="58" width="104" height="144" rx="6" fill="#0F1629" stroke="#F3F0E8" strokeOpacity="0.18" />
      <path d="M22 70 l52 30 l52 -30" fill="none" stroke="#F3F0E8" strokeOpacity="0.18" />
      {[118, 132, 146, 160, 174].map((y, i) => (
        <rect key={y} x="36" y={y} width={[76, 60, 70, 44, 66][i]} height="5" rx="2.5" fill="#F3F0E8" opacity={i === 2 ? 0.0 : 0.16} />
      ))}
      <rect x="36" y="146" width="70" height="5" rx="2.5" fill="#EC5C8F" opacity="0.7" />
      <text x="74" y="222" textAnchor="middle" fontSize="9" fill="#9AA3B5" letterSpacing="1.2">EMAIL / URL</text>

      {/* flow */}
      <path d="M134 130 H160" stroke="#5C9BE6" strokeOpacity="0.7" strokeWidth="1.4" markerEnd="none" />
      <path d="M156 126 l5 4 l-5 4" fill="none" stroke="#5C9BE6" strokeOpacity="0.7" strokeWidth="1.4" />

      {/* model: stacked transformer layers */}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={172 + i * 5}
          y={78 + i * 9}
          width="74"
          height="70"
          rx="5"
          fill="#0F1629"
          stroke="#5C9BE6"
          strokeOpacity={0.25 + i * 0.15}
        />
      ))}
      <text x="226" y="150" textAnchor="middle" fontSize="12" fontWeight="700" fill="#F3F0E8" letterSpacing="1.5">BERT</text>
      <text x="226" y="164" textAnchor="middle" fontSize="8" fill="#9AA3B5" letterSpacing="1">FINE-TUNED</text>
      <text x="216" y="222" textAnchor="middle" fontSize="9" fill="#9AA3B5" letterSpacing="1.2">CLASSIFIER</text>

      <path d="M270 130 H292" stroke="#5C9BE6" strokeOpacity="0.7" strokeWidth="1.4" />
      <path d="M288 126 l5 4 l-5 4" fill="none" stroke="#5C9BE6" strokeOpacity="0.7" strokeWidth="1.4" />

      {/* threat levels */}
      {tiers.map((t, i) => (
        <g key={t.label} transform={`translate(302 ${78 + i * 36})`}>
          <rect width="78" height="26" rx="4" fill={t.fill} fillOpacity={t.opacity} stroke="#F3F0E8" strokeOpacity="0.14" />
          {Array.from({ length: i + 1 }).map((_, j) => (
            <rect key={j} x={8 + j * 6} y="9" width="3" height="8" rx="1" fill="#F3F0E8" opacity="0.8" />
          ))}
          <text x="72" y="17" textAnchor="end" fontSize="8.5" fontWeight="600" fill="#F3F0E8" letterSpacing="1">{t.label}</text>
        </g>
      ))}
      <text x="341" y="222" textAnchor="middle" fontSize="9" fill="#9AA3B5" letterSpacing="1.2">THREAT LEVEL</text>
    </VisualFrame>
  );
}
