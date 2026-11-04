import { VisualFrame } from "./VisualFrame";

// Illustrative daily generation curves (shapes only, not plant data).
const X0 = 32;
const X1 = 262;
const BASE = 150;
const PEAK = 92;
const xs = Array.from({ length: (X1 - X0) / 5 + 1 }, (_, i) => X0 + i * 5);
const expected = (x: number) => BASE - PEAK * Math.exp(-(((x - 147) / 50) ** 2));
const actual = (x: number) => BASE - (BASE - expected(x)) * (1 - 0.38 * Math.exp(-(((x - 186) / 16) ** 2)));
const pts = (f: (x: number) => number) => xs.map((x) => `${x},${f(x).toFixed(1)}`).join(" ");
const gap = `${pts(expected)} ${[...xs].reverse().map((x) => `${x},${actual(x).toFixed(1)}`).join(" ")}`;

const inverters = Array.from({ length: 16 }, (_, i) => ({ col: i % 4, row: Math.floor(i / 4), flagged: i === 6 || i === 11 }));

/** Dashboard-style preview of SolarSleuth's analysis views. Illustrative only. */
export function SolarDashboardVisual({ id = "solar-dashboard" }: { id?: string }) {
  return (
    <VisualFrame
      id={id}
      title="SolarSleuth dashboard concept"
      desc="Illustrative dashboard: expected generation from a physics-based model compared with actual output, with the variance shaded and anomalies marked; an inverter grid with flagged units; the three anomaly detectors (MAD, persistence, CUSUM); and the AI Variance Assistant. Shapes are illustrative, not real plant data."
    >
      {/* main chart */}
      <rect x="18" y="20" width="256" height="156" rx="8" fill="#0F1629" stroke="#F3F0E8" strokeOpacity="0.12" />
      <text x="32" y="40" fontSize="8.5" fill="#9AA3B5" letterSpacing="1.2">EXPECTED vs ACTUAL</text>
      <g transform="translate(176 34)" fontSize="7.5" fill="#9AA3B5">
        <line x1="0" y1="2" x2="12" y2="2" stroke="#EDBB00" strokeWidth="1.4" strokeDasharray="3 2" />
        <text x="16" y="5">EXP</text>
        <line x1="44" y1="2" x2="56" y2="2" stroke="#F3F0E8" strokeWidth="1.4" />
        <text x="60" y="5">ACT</text>
      </g>
      {[70, 100, 130].map((y) => (
        <line key={y} x1={X0} y1={y} x2={X1} y2={y} stroke="#F3F0E8" strokeOpacity="0.05" />
      ))}
      <line x1={X0} y1={BASE} x2={X1} y2={BASE} stroke="#F3F0E8" strokeOpacity="0.16" />
      <polygon points={gap} fill="#A50044" fillOpacity="0.38" />
      <polyline points={pts(expected)} fill="none" stroke="#EDBB00" strokeOpacity="0.85" strokeWidth="1.5" strokeDasharray="4 3" />
      <polyline points={pts(actual)} fill="none" stroke="#F3F0E8" strokeWidth="1.6" />
      {[176, 186, 196].map((x) => (
        <circle key={x} cx={x} cy={actual(x)} r="3.2" fill="#0B1020" stroke="#EC5C8F" strokeWidth="1.4" />
      ))}
      <g transform="translate(200 82)">
        <line x1="-6" y1="10" x2="0" y2="2" stroke="#EC5C8F" strokeOpacity="0.7" />
        <rect x="0" y="-8" width="56" height="16" rx="3" fill="#6A123A" />
        <text x="28" y="3" textAnchor="middle" fontSize="7" fontWeight="700" fill="#F3F0E8" letterSpacing="0.8">VARIANCE</text>
      </g>
      <text x="32" y="166" fontSize="7" fill="#6B7489">06:00</text>
      <text x="147" y="166" textAnchor="middle" fontSize="7" fill="#6B7489">12:00</text>
      <text x="262" y="166" textAnchor="end" fontSize="7" fill="#6B7489">18:00</text>

      {/* inverter grid */}
      <rect x="284" y="20" width="98" height="156" rx="8" fill="#0F1629" stroke="#F3F0E8" strokeOpacity="0.12" />
      <text x="296" y="40" fontSize="8.5" fill="#9AA3B5" letterSpacing="1.2">INVERTERS</text>
      {inverters.map(({ col, row, flagged }, i) => (
        <rect
          key={i}
          x={296 + col * 19}
          y={54 + row * 19}
          width="14"
          height="14"
          rx="2.5"
          fill={flagged ? "#A50044" : "#004D98"}
          fillOpacity={flagged ? 0.95 : 0.35 + ((i * 7) % 5) * 0.08}
          stroke={flagged ? "#EC5C8F" : "none"}
        />
      ))}
      <text x="296" y="148" fontSize="7" fill="#9AA3B5">FLAGGED</text>
      <rect x="296" y="154" width="8" height="8" rx="1.5" fill="#A50044" stroke="#EC5C8F" />
      <text x="309" y="161" fontSize="7" fill="#F3F0E8" fillOpacity="0.8">PEER OUTLIER</text>

      {/* detectors */}
      <g transform="translate(18 188)">
        <text y="8" fontSize="7.5" fill="#9AA3B5" letterSpacing="1.1">DETECTORS</text>
        {["MAD PEER", "PERSISTENCE", "CUSUM"].map((label, i) => (
          <g key={label} transform={`translate(${[0, 66, 152][i]} 16)`}>
            <rect width={[58, 78, 52][i]} height="20" rx="10" fill="none" stroke="#5C9BE6" strokeOpacity="0.55" />
            <text x={[58, 78, 52][i] / 2} y="13.5" textAnchor="middle" fontSize="7.5" fill="#F3F0E8" fillOpacity="0.85" letterSpacing="0.8">
              {label}
            </text>
          </g>
        ))}
      </g>

      {/* assistant */}
      <g transform="translate(232 188)">
        <rect width="150" height="52" rx="8" fill="#0F1629" stroke="#F3F0E8" strokeOpacity="0.12" />
        <text x="12" y="16" fontSize="7.5" fill="#9AA3B5" letterSpacing="1.1">AI VARIANCE ASSISTANT</text>
        <rect x="12" y="24" width="96" height="5" rx="2.5" fill="#F3F0E8" fillOpacity="0.18" />
        <rect x="12" y="34" width="72" height="5" rx="2.5" fill="#F3F0E8" fillOpacity="0.12" />
        <rect x="112" y="31" width="26" height="12" rx="6" fill="#004D98" />
        <text x="125" y="40" textAnchor="middle" fontSize="6.5" fill="#F3F0E8">EVID.</text>
      </g>
    </VisualFrame>
  );
}
