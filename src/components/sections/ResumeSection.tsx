import { resumeOptions } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ResumeSection() {
  const resume = resumeOptions[0];

  return (
    <section className="page-section resume-section" id="resume">
      <div className="container resume-layout">
        <SectionHeading
          eyebrow="Resume"
          title="Professional Resume"
        >
          A current resume highlighting software development,
          construction, planning, and project coordination experience.
        </SectionHeading>

        <div className="resume-options">
          <article className="resume-card">
            <div className="resume-card-content">
              <span>{resume.status}</span>

              <h3>{resume.title}</h3>

              <p>{resume.description}</p>
            </div>

            {resume.href ? (
              <a
                className="credential-link"
                href={resume.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            ) : (
              <button
                className="credential-link"
                type="button"
                disabled
              >
                Coming Soon
              </button>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}