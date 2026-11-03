import { achievements, education, profile, projects, skills } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <header>
        <h1>{profile.name}</h1>
        <p>{profile.tagline}</p>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a> ·{" "}
          <a href={profile.github}>GitHub</a> · <a href={profile.linkedin}>LinkedIn</a>
        </p>
      </header>

      <section id="education">
        <h2>Education</h2>
        {education.map((e) => (
          <div key={e.institution}>
            <h3>{e.institution}</h3>
            <p>{e.degree}</p>
            <p>
              {e.period} · {e.detail}
            </p>
          </div>
        ))}
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {projects.map((p) => (
          <article key={p.name}>
            <h3>{p.name}</h3>
            <p>
              <small>{p.date}</small>
            </p>
            <p>Tech Stack: {p.stack.join(", ")}</p>
            <ul>
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section id="skills">
        <h2>Technical Skills</h2>
        <ul>
          {skills.map((s) => (
            <li key={s.category}>
              <strong>{s.category}:</strong> {s.items.join(", ")}
            </li>
          ))}
        </ul>
      </section>

      <section id="achievements">
        <h2>Achievements</h2>
        <ul>
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>

      <footer>
        <h2>Contact</h2>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </footer>
    </main>
  );
}
