export type LinkTarget = {
  label: string;
  href: string | null;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type ProjectStatus =
  | "Production"
  | "Live build"
  | "In development"
  | "Planned"
  | "Learning archive";

export type FeaturedProject = {
  title: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  solution: string;
  details: string[];
  tags: string[];
  links: LinkTarget[];
  preview: "finance" | "web" | "contractor" | "archive";
};

export type CapabilityGroup = {
  title: string;
  description: string;
  skills: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  note?: string;
  bullets: string[];
};

export type CredentialLinkType = "pdf" | "external";

export type Credential = {
  institution: string;
  title: string;
  detail: string;
  completed?: string;
  url: string | null;
  linkType?: CredentialLinkType;
};

export type ResumeOption = {
  title: string;
  description: string;
  href: string | null;
  status: "Coming soon" | "Available";
};

export type BuildingItem = {
  title: string;
  status: "Planned" | "In development" | "Next";
  description: string;
};

export type ContactDetails = {
  email: string;
  location: string;
  github: string | null;
  linkedin: string | null;
  portfolioUrl: string | null;
};