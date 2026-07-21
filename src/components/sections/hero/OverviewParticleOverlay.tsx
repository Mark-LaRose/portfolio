import type { CSSProperties } from "react";

type ParticleStyle = CSSProperties & {
  "--particle-left": string;
  "--particle-top": string;
  "--particle-delay": string;
};

const overviewParticles = [
  { left: "43%", top: "34%", delay: "0ms" },
  { left: "49%", top: "39%", delay: "640ms" },
  { left: "56%", top: "32%", delay: "1180ms" },
  { left: "61%", top: "43%", delay: "1760ms" },
  { left: "67%", top: "37%", delay: "2320ms" },
  { left: "72%", top: "47%", delay: "2940ms" },
  { left: "59%", top: "54%", delay: "3520ms" },
  { left: "50%", top: "50%", delay: "4260ms" },
];

export function OverviewParticleOverlay() {
  return (
    <div className="hero-overview-particles" aria-hidden="true">
      {overviewParticles.map((particle) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className="hero-overview-particle"
          style={{
            "--particle-left": particle.left,
            "--particle-top": particle.top,
            "--particle-delay": particle.delay,
          } as ParticleStyle}
        />
      ))}
    </div>
  );
}
