import { AboutSection } from "@/components/sections/AboutSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mark LaRose",
    email: "mailto:larose.m@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Halifax / Dartmouth",
      addressRegion: "Nova Scotia",
      addressCountry: "CA",
    },
    jobTitle: [
      "Software Developer",
      "Owner / Freelance Developer",
      "Construction Professional",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Electrical construction",
      "Construction estimating",
      "Project planning",
      "Responsive web design",
    ],
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <CredentialsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
