import Image from "next/image";
import {
  HeroMasterControlStyles,
  heroBlueprintSizes,
  heroOverviewSizes,
} from "@/components/sections/hero/HeroMasterControls";
import { BlueprintFlowOverlay } from "@/components/sections/hero/BlueprintFlowOverlay";
import { OverviewParticleOverlay } from "@/components/sections/hero/OverviewParticleOverlay";
import { AnimatedCTA } from "@/components/ui/AnimatedCTA";

const heroProgress = [
  {
    label: "Strategy",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z" />
      </svg>
    ),
  },
  {
    label: "Engineer",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M10.42 12.61 4.75 18.28a2.12 2.12 0 1 0 3 3l5.67-5.67" />
        <path d="M17.86 3.36a2.12 2.12 0 0 1 3 3l-7.78 7.78-3-3z" />
        <path d="m15 5 4 4" />
        <path d="m2 22 6.5-6.5" />
      </svg>
    ),
  },
  {
    label: "Launch",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 16.5c-1.1 1.1-1.5 3.4-1.5 3.4s2.3-.4 3.4-1.5" />
        <path d="M9 15 7 13a14.4 14.4 0 0 1 8.5-8.5L20 4l-.5 4.5A14.4 14.4 0 0 1 11 17z" />
        <path d="m9 15 2 2" />
        <path d="M14 8h.01" />
      </svg>
    ),
  },
];

export function HeroSection() {
  return (
    <section className="hero-section hero-responsive-section" id="top">
      <HeroMasterControlStyles />
      <div className="container hero-composition">
        <div className="hero-left-stage">
          <p className="eyebrow hero-eyebrow hero-responsive-eyebrow">
            Developer - Builder - Problem Solver
          </p>
          <h1 className="hero-headline hero-responsive-headline">
            <span className="hero-headline-line">I build practical</span>{" "}
            <span className="hero-headline-line">systems for the</span>{" "}
            <span className="hero-headline-line">digital and physical</span>{" "}
            <span className="hero-headline-line">world.</span>
          </h1>
          <p className="hero-paragraph hero-intro hero-responsive-paragraph">
            Software developer and construction professional combining hands-on field
            experience, electrical training, project planning, and modern web
            development to turn complex problems into useful solutions.
          </p>
          <div className="hero-primary-button">
            <AnimatedCTA href="#work">View Selected Work</AnimatedCTA>
          </div>
          <a className="button button-primary hero-contact-button" href="#contact">
            Contact Me
          </a>
          <a className="button button-secondary hero-resume-link" href="#resume">
            View Resume
          </a>
        </div>
        <div className="hero-right-stage">
          <div className="hero-graph-paper" aria-hidden="true" />
          <div className="hero-blueprint">
            <Image
              src="/images/hero-blueprint-main.png"
              alt="Blueprint workflow connecting field planning, electrical work, construction, software, and delivery."
              fill
              priority
              sizes={heroBlueprintSizes}
            />
            <BlueprintFlowOverlay />
          </div>
          <div className="hero-overview">
            <Image
              src="/images/hero-system-overview.png"
              alt="System overview showing a physical build transforming into a digital delivery process."
              fill
              sizes={heroOverviewSizes}
            />
            <OverviewParticleOverlay />
          </div>
          <div className="hero-gradient-group" aria-label="Blueprint workflow progress">
            {heroProgress.map((item) => (
              <div
                className={`hero-gradient-row hero-${item.label.toLowerCase()}-row`}
                key={item.label}
              >
                <span className="hero-progress-label">
                  {item.icon}
                  {item.label}
                </span>
                <span className="hero-progress-track" aria-hidden="true">
                  <span />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
