import { ArrowDown, ArrowRight } from "lucide-react";
import { learningTracks } from "@/data/skills";
import type { LearningTrack } from "@/types";
import { Chip } from "@/components/ui/Chip";

const thirds: LearningTrack["third"][] = ["Build-up", "Progression", "Final third"];

/** "In training": the learning roadmap laid out as a move up the pitch. */
export function Roadmap() {
  return (
    <div className="mt-20">
      <h3 id="learning-title" className="kicker flex items-center gap-3 text-chalk">
        In training <span className="h-px flex-1 bg-line" /> <span className="text-fog">Currently learning</span>
      </h3>
      <p className="mt-4 max-w-2xl text-mist">
        Where I&apos;m heading next: from the data layer up to AI systems. These are things I&apos;m actively learning,
        not skills I&apos;m claiming yet.
      </p>

      <div className="relative mt-8 overflow-hidden rounded-2xl border border-dashed border-line-strong">
        {/* faint pitch markings */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="absolute inset-y-0 left-1/3 w-px bg-line" />
          <div className="absolute inset-y-0 left-2/3 w-px bg-line" />
        </div>

        <ol className="relative grid lg:grid-cols-3" aria-labelledby="learning-title">
          {thirds.map((third, ti) => (
            <li key={third} className="relative flex flex-col gap-4 border-line p-6 max-lg:[&:not(:last-child)]:border-b md:p-8">
              <div className="flex items-center justify-between">
                <p className="kicker text-blau-bright">
                  Phase {ti + 1} · {third}
                </p>
                {ti < thirds.length - 1 ? (
                  <>
                    <ArrowRight size={16} aria-hidden="true" className="hidden text-fog lg:block" />
                    <ArrowDown size={16} aria-hidden="true" className="text-fog lg:hidden" />
                  </>
                ) : null}
              </div>
              <ul className="flex flex-col gap-3">
                {learningTracks
                  .filter((t) => t.third === third)
                  .map((track) => (
                    <li key={track.area} className="rounded-xl border border-line bg-night/60 p-5">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-medium text-chalk">{track.area}</p>
                        <span className="kicker text-fog">Learning</span>
                      </div>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {track.items.map((item) => (
                          <li key={item}>
                            <Chip tone="learning">{item}</Chip>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
      <p className="kicker mt-4 flex items-center gap-2 text-fog">
        Direction of play <ArrowRight size={13} aria-hidden="true" />
      </p>
    </div>
  );
}
