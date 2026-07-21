"use client";

import { useEffect, useState } from "react";

import { credentials } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ActiveCredential = {
  title: string;
  url: string;
};

export function CredentialsSection() {
  const [activeCredential, setActiveCredential] =
    useState<ActiveCredential | null>(null);

  useEffect(() => {
    if (!activeCredential) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCredential(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCredential]);

  return (
    <>
      <section
        className="page-section credentials-section"
        id="credentials"
      >
        <div className="container">
          <SectionHeading
            eyebrow="Credentials"
            title="Education, certifications, and continuous learning."
          >
            Formal education, industry training, and self-directed learning that
            support my work in software development, construction, and problem
            solving.
          </SectionHeading>

          <div className="credential-grid">
            {credentials.map((credential) => (
              <article
                className="credential-card"
                key={`${credential.institution}-${credential.title}`}
              >
                <div
                  className="credential-thumbnail"
                  aria-hidden="true"
                >
                  <span>
                    {credential.institution.slice(0, 2).toUpperCase()}
                  </span>
                </div>

                <div className="credential-card-content">
                  <p className="eyebrow">{credential.institution}</p>

                  <h3>{credential.title}</h3>

                  <p>{credential.detail}</p>

                  {credential.completed ? (
                    <span>{credential.completed}</span>
                  ) : null}
                </div>

                {credential.url ? (
                  credential.linkType === "external" ? (
                    <a
                      className="credential-link"
                      href={credential.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="credential-link"
                      onClick={() =>
                        setActiveCredential({
                          title: credential.title,
                          url: credential.url!,
                        })
                      }
                    >
                      View Credential
                    </button>
                  )
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeCredential ? (
        <div
          className="credential-modal-backdrop"
          role="presentation"
          onClick={() => setActiveCredential(null)}
        >
          <div
            className="credential-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="credential-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="credential-modal-header">
              <h2 id="credential-modal-title">
                {activeCredential.title}
              </h2>

              <div className="credential-modal-actions">
                <a
                  className="credential-modal-open"
                  href={activeCredential.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open PDF
                </a>

                <button
                  type="button"
                  className="credential-modal-close"
                  onClick={() => setActiveCredential(null)}
                  aria-label="Close credential"
                >
                  ✕
                </button>
              </div>
            </div>

            <iframe
              src={activeCredential.url}
              title={`${activeCredential.title} credential`}
              className="credential-modal-frame"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}