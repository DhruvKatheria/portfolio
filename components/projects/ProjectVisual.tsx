import type { ProjectVisual as VisualKey } from "@/types";
import { EscrowVisual } from "./visuals/EscrowVisual";
import { LedgerVisual } from "./visuals/LedgerVisual";
import { SolarArchitectureVisual } from "./visuals/SolarArchitectureVisual";
import { SolarDashboardVisual } from "./visuals/SolarDashboardVisual";

const visuals: Record<VisualKey, (props: { id?: string }) => React.JSX.Element> = {
  "solar-dashboard": SolarDashboardVisual,
  "solar-architecture": SolarArchitectureVisual,
  ledger: LedgerVisual,
  escrow: EscrowVisual,
};

/** Renders a project's original illustration. `id` keeps SVG ids unique per page. */
export function ProjectVisual({ visual, id }: { visual: VisualKey; id: string }) {
  const Visual = visuals[visual];
  return <Visual id={id} />;
}
