import { stats } from "@/data/achievements";
import { Stripe } from "@/components/ui/Stripe";

/** Stadium-board style stats panel. Only confirmed figures. */
export function Scoreboard() {
  return (
    <section aria-labelledby="stats-title" className="pb-8">
      <div className="container-page">
        <div className="overflow-hidden rounded-2xl border border-line bg-pitch">
          <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3 md:px-7">
            <h2 id="stats-title" className="kicker flex items-center gap-3 text-chalk">
              <Stripe className="h-3 w-3 rounded-[1px]" width={1.5} /> Scoreboard
            </h2>
            <span className="kicker hidden text-fog sm:inline">Confirmed figures only</span>
          </div>
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col-reverse justify-end gap-3 border-line p-5 md:p-7 ${
                  i % 2 === 0 ? "border-r" : i === stats.length - 1 ? "" : "lg:border-r"
                } ${i < 2 ? "border-b lg:border-b-0" : ""}`}
              >
                <dt>
                  <span className="block text-sm font-medium text-chalk">{stat.label}</span>
                  {stat.note ? <span className="mt-1 block text-xs leading-snug text-mist">{stat.note}</span> : null}
                </dt>
                <dd>
                  {stat.kind === "result" ? (
                    <span className="inline-flex items-center gap-3">
                      <span className="grid size-[3.25rem] place-items-center rounded-md bg-gold font-mono text-2xl font-bold text-night md:size-16 md:text-3xl">
                        W
                      </span>
                      <span className="kicker text-mist">Winner</span>
                    </span>
                  ) : (
                    <span className="font-mono text-[clamp(2.4rem,6vw,3.75rem)] leading-none font-medium tracking-tight text-chalk tabular-nums">
                      {stat.value}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
