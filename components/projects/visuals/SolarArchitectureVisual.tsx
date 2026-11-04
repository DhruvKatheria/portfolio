import { VisualFrame } from "./VisualFrame";

const box = { fill: "#0F1629", stroke: "#F3F0E8", strokeOpacity: 0.18 } as const;

/** Simplified multi-service view of SolarSleuth. */
export function SolarArchitectureVisual({ id = "solar-architecture" }: { id?: string }) {
  return (
    <VisualFrame
      id={id}
      title="SolarSleuth architecture (simplified)"
      desc="CSV and XLSX telemetry enters through a React and TypeScript frontend. A FastAPI backend with JWT and Argon2 handles requests and persists data in MongoDB. A separate analytics service built on NumPy and Pandas runs physics-based modelling, anomaly detection, loss attribution and reconciliation. A separate LLM explanation service powers the AI Variance Assistant. The services are run with Docker."
    >
      {/* docker boundary */}
      <rect x="118" y="10" width="274" height="240" rx="10" fill="none" stroke="#5C9BE6" strokeOpacity="0.35" strokeDasharray="4 4" />
      <text x="130" y="26" fontSize="7.5" fill="#5C9BE6" letterSpacing="1.2">DOCKER · SERVICES</text>

      {/* input */}
      <rect x="12" y="36" width="88" height="26" rx="13" fill="none" stroke="#F3F0E8" strokeOpacity="0.25" strokeDasharray="3 3" />
      <text x="56" y="52.5" textAnchor="middle" fontSize="8" fill="#F3F0E8" fillOpacity="0.85" letterSpacing="1">CSV / XLSX</text>

      {/* frontend */}
      <rect x="12" y="100" width="88" height="60" rx="8" {...box} />
      <text x="56" y="124" textAnchor="middle" fontSize="9" fontWeight="700" fill="#F3F0E8" letterSpacing="1.2">FRONTEND</text>
      <text x="56" y="138" textAnchor="middle" fontSize="7.5" fill="#9AA3B5">REACT · TS</text>
      <text x="56" y="150" textAnchor="middle" fontSize="7" fill="#6B7489">DASHBOARDS</text>

      {/* backend */}
      <rect x="132" y="96" width="100" height="68" rx="8" fill="#004D98" fillOpacity="0.28" stroke="#5C9BE6" strokeOpacity="0.7" />
      <text x="182" y="120" textAnchor="middle" fontSize="9" fontWeight="700" fill="#F3F0E8" letterSpacing="1.2">BACKEND</text>
      <text x="182" y="134" textAnchor="middle" fontSize="7.5" fill="#9AA3B5">FASTAPI</text>
      <text x="182" y="148" textAnchor="middle" fontSize="7" fill="#9AA3B5">JWT · ARGON2</text>

      {/* mongo */}
      <rect x="142" y="200" width="80" height="34" rx="8" {...box} />
      <text x="182" y="215" textAnchor="middle" fontSize="8" fontWeight="700" fill="#F3F0E8" letterSpacing="1">MONGODB</text>
      <text x="182" y="227" textAnchor="middle" fontSize="6.5" fill="#9AA3B5">REPORTS · DATA</text>

      {/* analytics */}
      <rect x="258" y="36" width="124" height="112" rx="8" fill="#0F1629" stroke="#EDBB00" strokeOpacity="0.55" />
      <text x="270" y="54" fontSize="9" fontWeight="700" fill="#F3F0E8" letterSpacing="1.2">ANALYTICS</text>
      <text x="270" y="66" fontSize="7" fill="#9AA3B5">NUMPY · PANDAS</text>
      {["Physics PV model", "MAD · persistence · CUSUM", "Loss attribution", "Reconciliation", "Inverter analysis"].map((t, i) => (
        <g key={t} transform={`translate(270 ${80 + i * 13})`}>
          <rect y="-5" width="4" height="4" fill="#EDBB00" fillOpacity="0.8" transform="rotate(45 2 -3)" />
          <text x="10" y="0" fontSize="7" fill="#F3F0E8" fillOpacity="0.85">{t}</text>
        </g>
      ))}

      {/* llm */}
      <rect x="258" y="164" width="124" height="70" rx="8" fill="#A50044" fillOpacity="0.2" stroke="#EC5C8F" strokeOpacity="0.6" />
      <text x="270" y="184" fontSize="9" fontWeight="700" fill="#F3F0E8" letterSpacing="1.2">LLM SERVICE</text>
      <text x="270" y="198" fontSize="7" fill="#9AA3B5">EXPLANATIONS</text>
      <text x="270" y="220" fontSize="7" fill="#F3F0E8" fillOpacity="0.85">AI Variance Assistant</text>

      {/* connections */}
      <g stroke="#5C9BE6" strokeOpacity="0.7" strokeWidth="1.3" fill="none">
        <path d="M56 62 V96" />
        <path d="M52 91 l4 5 l4 -5" />
        <path d="M100 130 H128" />
        <path d="M123 126 l5 4 l-5 4" />
        <path d="M182 164 V196" />
        <path d="M178 191 l4 5 l4 -5" />
        <path d="M232 116 C 246 116, 244 92, 254 92" />
        <path d="M249 88 l5 4 l-5 4" />
        <path d="M232 146 C 246 146, 244 199, 254 199" />
        <path d="M249 195 l5 4 l-5 4" />
      </g>
    </VisualFrame>
  );
}
