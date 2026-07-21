"use client";

import { useState } from "react";
import { contactDetails } from "@/data/portfolio";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(contactDetails.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <section className="page-section contact-section" id="contact">
      <div className="container contact-panel">
        <div>
          <p className="eyebrow">Contact</p>

          <h2>Have a project, opportunity, or difficult problem to solve?</h2>

          <p>
            Whether you're hiring, looking for a freelance developer, or have a challenging problem to solve, I'd be happy to hear from you. I'm always interested in software development opportunities, planning and coordination roles, construction-related work, and practical software collaborations.
          </p>
        </div>

        <div className="contact-actions">
          <a
            className="button button-primary"
            href={`mailto:${contactDetails.email}`}
          >
            Send Email
          </a>

          <button
            className="button button-secondary"
            type="button"
            onClick={copyEmail}
          >
            {copied ? "Email Copied" : "Copy Email"}
          </button>

          <dl className="contact-list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contactDetails.email}`}>
                  {contactDetails.email}
                </a>
              </dd>
            </div>

            <div>
              <dt>Location</dt>
              <dd>{contactDetails.location}</dd>
            </div>

            <div>
              <dt>GitHub</dt>
              <dd>
                {contactDetails.github ? (
                  <a
                    href={contactDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub Profile →
                  </a>
                ) : (
                  "GitHub profile coming soon"
                )}
              </dd>
            </div>

            <div>
              <dt>LinkedIn</dt>
              <dd>
                {contactDetails.linkedin ? (
                  <a
                    href={contactDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View LinkedIn Profile →
                  </a>
                ) : (
                  "LinkedIn profile coming soon"
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}