/** Original DK identity mark: a striped tile with condensed initials. Not a crest. */
export function Monogram({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
    >
      <defs>
        <clipPath id="dk-tile">
          <rect x="1" y="1" width="38" height="38" rx="9" />
        </clipPath>
      </defs>
      <g clipPath="url(#dk-tile)">
        <rect width="40" height="40" fill="#0F1629" />
        <rect x="0" width="8" height="40" fill="#004D98" />
        <rect x="8" width="8" height="40" fill="#A50044" />
        <rect x="16" width="8" height="40" fill="#004D98" opacity="0.18" />
        <rect x="24" width="8" height="40" fill="#A50044" opacity="0.18" />
      </g>
      <rect x="1" y="1" width="38" height="38" rx="9" fill="none" stroke="rgba(243,240,232,0.18)" />
      <text
        x="27"
        y="27.5"
        textAnchor="middle"
        fontFamily="var(--font-archivo), Arial Narrow, sans-serif"
        fontWeight="800"
        fontSize="17"
        fill="#F3F0E8"
        style={{ fontStretch: "70%" }}
      >
        DK
      </text>
    </svg>
  );
}
