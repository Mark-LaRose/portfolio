import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section className="page-section experience-section" id="experience">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="A work history built around execution and responsibility.">
          Across every role, the focus has been the same: understanding the problem, communicating clearly, coordinating work, and delivering reliable results.
        </SectionHeading>
        <div className="timeline">
          {experience.map((entry) => (
            <article className="timeline-item" key={`${entry.company}-${entry.dates}`}>
              <div className="timeline-date">{entry.dates}</div>
              <div className="timeline-card">
                <p className="eyebrow">{entry.company}</p>
                <h3>{entry.role}</h3>
                {entry.note ? <p className="entry-note">{entry.note}</p> : null}
                <ul>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
