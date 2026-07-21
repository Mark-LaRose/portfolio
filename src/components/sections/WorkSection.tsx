import { featuredProjects } from "@/data/portfolio";
import { ProjectPreview } from "@/components/ui/ProjectPreview";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WorkSection() {
  const visibleProjects = featuredProjects.slice(0, 2);

  return (
    <section className="page-section work-section" id="work">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Products and project systems with real-world intent."
        >
          My work connects software development with practical planning, business
          needs, and real-world workflows.
        </SectionHeading>

        <div className="project-stack">
          {visibleProjects.map((project, index) => (
            <article className="project-case" key={project.title}>
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <div className="case-columns">
                  <div>
                    <h4>Problem</h4>
                    <p>{project.problem}</p>
                  </div>

                  <div>
                    <h4>Solution</h4>
                    <p>{project.solution}</p>
                  </div>
                </div>

                <ul className="detail-list">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                <div
                  className="tag-list"
                  aria-label={`${project.title} technologies`}
                >
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="link-row">
                  {project.links
                    .filter(
                      (
                        link,
                      ): link is {
                        label: string;
                        href: string;
                      } => Boolean(link.href),
                    )
                    .map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                </div>
              </div>

              <div className="project-media">
                <span className="case-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <ProjectPreview variant={project.preview} />
              </div>
            </article>
          ))}
        </div>

        {/*
          Development Archive temporarily hidden.

          We will restore this section later after adding:
          - Real project thumbnails
          - Hover actions
          - Live project and GitHub links
          - Updated archive wording
        */}
      </div>
    </section>
  );
}