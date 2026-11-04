import { VisualFrame } from "./VisualFrame";

/** Protocol flow: parties ↔ escrow contract, proof layer on IPFS, staked validators. */
export function EscrowVisual({ id = "escrow" }: { id?: string }) {
  const validators = [0, 1, 2, 3, 4].map((i) => {
    const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    return { x: 320 + Math.cos(a) * 34, y: 176 + Math.sin(a) * 34, slashed: i === 3 };
  });
  return (
    <VisualFrame
      id={id}
      title="SettleChain protocol diagram"
      desc="A client and a freelancer interact through a PyTeal escrow smart contract on Algorand. Task requirements and submissions are hashed with SHA-256 and stored on IPFS. Disputes go to a ring of staked validators chosen by randomised oracles; dishonest validators are slashed."
    >
      {/* parties */}
      {[
        { x: 20, label: "CLIENT" },
        { x: 300, label: "FREELANCER" },
      ].map((p) => (
        <g key={p.label} transform={`translate(${p.x} 30)`}>
          <rect width="80" height="34" rx="17" fill="#0F1629" stroke="#F3F0E8" strokeOpacity="0.2" />
          <text x="40" y="21" textAnchor="middle" fontSize="8.5" fill="#F3F0E8" letterSpacing="1.2">{p.label}</text>
        </g>
      ))}

      {/* contract */}
      <rect x="140" y="20" width="120" height="54" rx="8" fill="#004D98" fillOpacity="0.28" stroke="#5C9BE6" strokeOpacity="0.7" />
      <text x="200" y="43" textAnchor="middle" fontSize="10" fontWeight="700" fill="#F3F0E8" letterSpacing="1.4">ESCROW</text>
      <text x="200" y="58" textAnchor="middle" fontSize="8" fill="#9AA3B5" letterSpacing="1">PYTEAL · ALGORAND</text>

      <g stroke="#5C9BE6" strokeOpacity="0.7" strokeWidth="1.3" fill="none">
        <path d="M100 47 H136" />
        <path d="M131 43 l5 4 l-5 4" />
        <path d="M264 47 H296" />
        <path d="M291 43 l5 4 l-5 4" />
      </g>
      <text x="118" y="38" textAnchor="middle" fontSize="7" fill="#9AA3B5">LOCK</text>
      <text x="280" y="38" textAnchor="middle" fontSize="7" fill="#9AA3B5">RELEASE</text>

      {/* proof layer */}
      <g stroke="#F3F0E8" strokeOpacity="0.25" strokeDasharray="3 4" fill="none">
        <path d="M200 74 V128" />
        <path d="M200 128 H120" />
        <path d="M200 128 H286" />
      </g>
      <rect x="40" y="128" width="160" height="88" rx="8" fill="#0F1629" stroke="#F3F0E8" strokeOpacity="0.14" />
      <text x="56" y="150" fontSize="8.5" fill="#9AA3B5" letterSpacing="1.2">PROOF LAYER · IPFS</text>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(56 ${162 + i * 16})`}>
          <rect width="10" height="10" rx="2" fill="#A50044" fillOpacity={0.4 + i * 0.25} />
          <text x="18" y="8.5" fontSize="8" fill="#F3F0E8" fillOpacity="0.75">
            {["sha256(requirements)", "sha256(submission)", "cid → ipfs://…"][i]}
          </text>
        </g>
      ))}

      {/* validators */}
      <text x="320" y="236" textAnchor="middle" fontSize="8.5" fill="#9AA3B5" letterSpacing="1.2">STAKED VALIDATORS</text>
      <circle cx="320" cy="176" r="34" fill="none" stroke="#F3F0E8" strokeOpacity="0.12" />
      <circle cx="320" cy="176" r="9" fill="#EDBB00" fillOpacity="0.9" />
      <text x="320" y="179" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0B1020">RNG</text>
      {validators.map((v, i) => (
        <g key={i} transform={`translate(${v.x} ${v.y})`}>
          <circle r="9" fill={v.slashed ? "#0B1020" : "#004D98"} stroke={v.slashed ? "#EC5C8F" : "#5C9BE6"} strokeOpacity="0.9" />
          {v.slashed ? <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="#EC5C8F" strokeWidth="1.5" /> : null}
        </g>
      ))}
    </VisualFrame>
  );
}
