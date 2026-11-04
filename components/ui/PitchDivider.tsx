/** The halfway line: a hairline with a centre circle and spot. */
export function PitchDivider() {
  return (
    <div aria-hidden="true" className="container-page">
      <div className="relative flex items-center">
        <span className="h-px flex-1 bg-line" />
        <span className="relative mx-0 grid size-14 place-items-center rounded-full border border-line">
          <span className="size-1.5 rounded-full bg-line-strong" />
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>
    </div>
  );
}
