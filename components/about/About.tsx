import { site } from "@/data/site";
import { education } from "@/data/education";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const profile = [
  { label: "Studying", value: `${education.degree}, ${education.short}` },
  { label: "University", value: education.affiliation },
  { label: "Graduating", value: "2028" },
  { label: "Focus", value: "Backend · Full-stack · Applied AI" },
  { label: "Practice", value: "350+ DSA problems solved" },
  { label: "Supports", value: "FC Barcelona" },
];

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionHeading id="about-title" matchday="03" kicker="About" title="Fundamentals first." />
          <Reveal className="mt-10 flex max-w-2xl flex-col gap-6 text-lg leading-relaxed text-mist">
            <p>
              <span className="text-chalk">
                I&apos;m studying Information Technology at PICT, Pune, and most of what I build sits where backend
                engineering, full-stack development and applied AI meet.
              </span>{" "}
              That has meant a fine-tuned language model behind a Flask app, a FastAPI service over a normalised
              Postgres schema, and smart contracts that settle payments without a middleman.
            </p>
            <p>
              What pulls me in is how systems actually work: how data is modelled, how services talk to each
              other, where trust and security have to live. DSA practice and the core CS subjects
              (operating systems, networks, DBMS, OOP) are the base everything else sits on.
            </p>
            <p>
              Away from the keyboard I follow Barcelona. Their best teams build from the back, patiently and with a
              purpose behind every pass. That&apos;s roughly how I like to build software: get the fundamentals right,
              then go forward.
            </p>
          </Reveal>
        </div>

        <aside aria-label="Profile" className="lg:col-span-5 lg:pt-28">
          <Reveal className="rounded-2xl border border-line bg-pitch">
            <p className="kicker border-b border-line px-6 py-3 text-mist">Player profile · {site.shortName}</p>
            <dl>
              {profile.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line px-6 py-4 last:border-b-0"
                >
                  <dt className="kicker pt-0.5 text-fog">{row.label}</dt>
                  <dd className="text-sm text-chalk">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </aside>
      </div>
    </Section>
  );
}
