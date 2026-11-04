import type { ProjectVisual as VisualKey } from "@/types";
import { EscrowVisual } from "./visuals/EscrowVisual";
import { LedgerVisual } from "./visuals/LedgerVisual";
import { ThreatVisual } from "./visuals/ThreatVisual";

const visuals: Record<VisualKey, (props: { id?: string }) => React.JSX.Element> = {
  threat: ThreatVisual,
  ledger: LedgerVisual,
  escrow: EscrowVisual,
};

/** Renders a project's original illustration. `id` keeps SVG ids unique per page. */
export function ProjectVisual({ visual, id }: { visual: VisualKey; id: string }) {
  const Visual = visuals[visual];
  return <Visual id={id} />;
}
