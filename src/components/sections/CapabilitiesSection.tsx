import { capabilityGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CapabilitiesSection() {
  return (
    <section className="page-section" id="capabilities">
      <div className="container">
        <SectionHeading eyebrow="Capabilities" title="Three areas of experience, one practical approach.">
          Software development, field experience, and project planning reinforce one another when the goal is to build something useful, reliable, and practical.
        </SectionHeading>
        <div className="capability-grid">
          {capabilityGroups.map((group) => (
            <article className="capability-panel" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-grid">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}