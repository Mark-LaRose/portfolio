import { careerProgression } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="page-section" id="about">
      <div className="container about-grid">
        <SectionHeading eyebrow="About" title="A practical path through field work, planning, and software.">
          I bring a builder&apos;s mindset to software development: measure the
          problem, understand the people involved, choose the right materials, and
          follow the work through.
        </SectionHeading>
        <div className="about-card">
          <p>
            My interest in computers and technology now sits alongside years of
            construction experience across multiple trades, electrical construction and
            industrial education at NSCC, and ongoing product work in modern web
            development.
          </p>
          <p>
            That mix is useful in real projects. I can speak with customers, assess
            scope, estimate effort, understand field realities, and translate messy
            requirements into clear digital tools and professional interfaces.
          </p>
        </div>
      </div>
      <div className="container progression" aria-label="Career progression">
        {careerProgression.map((item, index) => (
          <div className="progression-item" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
      <div className="container value-strip">
        {[
          "Analytical thinking",
          "Hands-on understanding",
          "Estimating and planning",
          "Continuous learning",
          "Clear communication",
          "Ownership and execution",
        ].map((value) => (
          <span key={value}>{value}</span>
        ))}
      </div>
    </section>
  );
}
