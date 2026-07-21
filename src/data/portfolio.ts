import type {
  CapabilityGroup,
  ContactDetails,
  Credential,
  ExperienceEntry,
  FeaturedProject,
  NavigationItem,
  ResumeOption,
} from "@/types/portfolio";

export const navigation: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export const contactDetails: ContactDetails = {
  email: "larose.m@gmail.com",
  location: "Halifax / Dartmouth, Nova Scotia",
  github: "https://github.com/Mark-LaRose",
  linkedin: "https://www.linkedin.com/in/mark-larose-460818159/",
  portfolioUrl: null,
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "2 On Finance",
    category: "Personal finance SaaS",
    status: "Production",
    summary:
      "A personal finance and market intelligence platform that brings together market data, planning tools, dashboards, and productivity features into a single web application.",
    problem:
      "Managing personal finances often means switching between multiple applications for market data, portfolio tracking, notes, planning, and financial tools.",
    solution:
      "Bring those workflows together in one integrated platform, combining market data, planning tools, dashboards, and account management in a single application.",
    details: [
      "Designed and built a full-stack SaaS application with a responsive dashboard experience.",
      "Integrated live market data, authentication, subscriptions, and cloud-backed user accounts.",
      "Developed reusable components and scalable architecture to support future platform growth.",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "REST APIs",
      "Vercel",
    ],
    links: [
      { label: "Launch App", href: "https://2onfinance.com" },
      { label: "Case study", href: null },
    ],
    preview: "finance",
  },
  {
    title: "2 On Web Solutions",
    category: "Freelance Web Development",
    status: "Production",
    summary:
      "A freelance web development business focused on building modern websites, responsive user experiences, and custom web applications for small businesses.",
    problem:
      "Small businesses need websites that build trust, communicate their services clearly, and convert visitors into customers.",
    solution:
      "Provides businesses with modern, responsive websites and web applications designed to build trust, improve user experience, and support long-term growth.",
    details: [
      "Designed and developed a responsive marketing website focused on lead generation and client engagement.",
      "Built reusable components and layouts that scale across desktop, tablet, and mobile devices.",
      "Applied accessibility, performance, and modern UI principles to create a professional client experience.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX",
      "Accessibility",
      "Performance",
    ],
    links: [
      {
        label: "Launch Website",
        href: "https://2onwebsolutions.com",
      },
      {
        label: "Case Study",
        href: null,
      },
    ],
    preview: "web",
  },
  {
    title: "Contractor Tools / Construction Platform",
    category: "Construction business toolkit",
    status: "In development",
    summary:
      "A planned contractor website and practical toolset for estimate requests, measurements, material calculations, and small-project planning.",
    problem:
      "Construction clients and small crews benefit from clearer scopes, better measurements, and faster early estimating before a job becomes expensive to revise.",
    solution:
      "The platform is intended to combine a business website with calculators for demand loads, roofing, siding, insulation, concrete, and labour/material estimates.",
    details: [
      "Planned calculators for construction measurements and trade-specific estimating.",
      "Customer-facing request flows designed around realistic project scoping.",
      "Future-friendly content model for services, tools, and project-planning resources.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Estimating",
      "Measurements",
      "Electrical Planning",
      "Material Calculators",
      "Project Scoping",
    ],
    links: [
      { label: "Development preview", href: null },
      { label: "Roadmap", href: null },
    ],
    preview: "contractor",
  },
];

export const learningProjects: FeaturedProject[] = [
  {
    title: "Interface Learning Archive",
    category: "Early educational projects",
    status: "Learning archive",
    summary:
      "Smaller learning exercises such as a font selector and colour selector, kept as evidence of progression rather than flagship case studies.",
    problem:
      "Early projects are most useful when they show practice, iteration, and growing judgment without being overstated.",
    solution:
      "The archive can later collect lightweight UI experiments, JavaScript practice, and design-system exercises in a clearly labelled area.",
    details: [
      "Font and colour selection interactions.",
      "Front-end fundamentals, state, and visual feedback practice.",
      "Clearly separated from production-focused portfolio work.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "UI practice"],
    links: [{ label: "Archive link", href: null }],
    preview: "archive",
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Software & Product",
    description:
      "Modern web application development focused on useful tools, clear interfaces, responsive design, and reliable deployment.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Node.js",
      "APIs",
      "Supabase",
      "PostgreSQL",
      "Git & GitHub",
      "Vercel",
      "Stripe",
      "Responsive design",
      "Accessibility",
      "Debugging",
      "Product development",
    ],
  },
  {
    title: "Construction & Trades",
    description:
      "Field-informed experience gained through residential, commercial, industrial, and electrical construction, with a practical understanding of how projects are planned, built, and coordinated.",
    skills: [
      "Residential, commercial & industrial construction",
      "Electrical construction",
      "Carpentry",
      "Sheet metal",
      "Metal siding & roofing",
      "Structural insulated panel systems",
      "Windows & doors",
      "Insulation",
      "Measuring & site assessment",
      "Labour & material estimating",
      "Project scoping",
      "Trade coordination",
      "Customer consultation",
    ],
  },
  {
    title: "Planning & Coordination",
    description:
      "Practical planning skills that connect requirements, constraints, communication, estimating, and follow-through.",
    skills: [
      "Project planning",
      "Estimating",
      "Requirements gathering",
      "Technical problem-solving",
      "Process improvement",
      "Communication",
      "Time management",
      "Adaptability",
      "Attention to detail",
      "Independent work",
      "Team collaboration",
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "2On Web Solutions",
    role: "Owner / Freelance Web Developer",
    dates: "2025-Present",
    bullets: [
      "Designs, develops, and deploys responsive websites and web applications tailored to business needs.",
      "Translates business goals into project scope, technical requirements, and launch-ready web solutions.",
      "Builds solutions with a focus on accessibility, performance, maintainability, and long-term reliability.",
    ],
  },
  {
    company: "1Off Construction",
    role: "Owner / Home Repair & Improvement",
    dates: "2018-Present",
    bullets: [
      "Assesses projects, measures work, prepares labour and material estimates, and presents practical project options.",
      "Completes residential repairs, renovations, installations, and general property improvement projects.",
      "Communicates scope, constraints, and next steps clearly with customers and collaborators.",
    ],
  },
  {
    company: "Peak Electric Ltd.",
    role: "Electrician Apprentice",
    dates: "2019-2022",
    bullets: [
      "Assisted with residential and commercial electrical installations, troubleshooting, and project execution.",
      "Performed residential and commercial rough-ins, finish work, kitchen renovations, service upgrades, wiring, and electrical device installations.",
      "Applied safe work practices while collaborating with other trades on residential and commercial construction projects.",
    ],
  },
  {
    company: "Top Construction Ltd.",
    role: "Commercial & Industrial Construction",
    dates: "2012-2019",
    bullets: [
      "Constructed commercial and industrial buildings, using Robertson Building Systems, structural steel, metal siding, roofing, insulation, and building-envelope systems.",
      "Completed interior and exterior construction work, including windows, doors, drywall, and finish carpentry, as project requirements evolved.",
      "Performed layout, measurements, material handling, and coordinated work across multiple phases of commercial and industrial construction projects.",
    ],
  },
  {
    company: "Igloo Erectors Ltd.",
    role: "Sheet Metal Worker",
    dates: "2011-2012",
    bullets: [
      "Installed architectural aluminum composite (ACM) panel systems on commercial construction projects.",
      "Framed and prepared galvanized steel support framing for architectural cladding installation.",
      "Contributed to the construction of The Bow in Calgary, a landmark office tower recognized for its distinctive architecture.",
    ],
  },
  {
    company: "Thermo Design Insulation",
    role: "Sheet Metal Worker",
    dates: "2007-2011",
    bullets: [
      "Installed structural insulated panels (SIP) systems and insulated metal panel systems on industrial and commercial construction projects throughout Alberta, British Columbia, and Saskatchewan.",
      "Worked on warehouses, heavy equipment facilities, office buildings, recreation centres, and mining infrastructure while operating aerial work platforms and telehandlers as required.",
      "Applied accurate layout, material handling, and safe work practices while delivering high-quality installations in demanding industrial and commercial environments.",
    ],
  },
  {
    company: "Nabors Production Services",
    role: "Roughneck",
    dates: "2006-2007",
    bullets: [
      "Assisted with well completion and production testing operations on active oil and gas sites.",
      "Supported rig operations, equipment handling, and daily field activities while working safely in demanding oilfield environments.",
      "Worked safely and effectively as part of a crew in remote, fast-paced oilfield environments.",
    ],
  },
  {
    company: "Canadian Army Reserve",
    role: "1st Field Artillery Regiment",
    dates: "2003-2006",
    note: "Achieved the rank of Corporal and specialized as an Artillery Communicator.",
    bullets: [
      "Completed basic military, soldier, and artillery qualification training while serving in the Canadian Army Reserve.",
      "Participated in field exercises, live-fire training, and military operations throughout Canada and the United States.",
      "Developed discipline, teamwork, leadership, and responsibility while progressing to the rank of Corporal.",
    ],
  },
];

export const credentials: Credential[] = [
  {
    institution: "Nova Scotia Community College",
    title: "Electrical - Construction & Industrial",
    detail: "Graduated with Honours",
    completed: "June 2018",
    url: "/credentials/nscc-electrical-construction-industrial.pdf",
    linkType: "pdf",
  },
  {
    institution: "HarvardX",
    title: "CS50 coursework",
    detail:
      "Introduction to Computer Science and Programming with Python / JavaScript coursework",
    url: null,
  },
  {
    institution: "freeCodeCamp",
    title: "Responsive Web Design",
    detail:
      "Semantic HTML, modern CSS, Flexbox, CSS Grid, responsive layouts, and accessibility principles for building mobile-first websites.",
    completed: "June 2024",
    url: "https://www.freecodecamp.org/certification/fcc35aed0cf-62ef-41b5-8768-74cf1be087c2/responsive-web-design",
    linkType: "external",
  },
  {
    institution: "freeCodeCamp",
    title: "JavaScript Algorithms and Data Structures",
    detail:
      "Core JavaScript programming, ES6, algorithms, data structures, object-oriented programming, functional programming, and problem solving.",
    completed: "June 2024",
    url: "https://www.freecodecamp.org/certification/fcc35aed0cf-62ef-41b5-8768-74cf1be087c2/javascript-algorithms-and-data-structures-v8",
    linkType: "external",
  },
  {
    institution: "freeCodeCamp",
    title: "Front End Development Libraries",
    detail:
      "React, Redux, Bootstrap, jQuery, Sass, and building modern interactive front-end applications.",
    completed: "August 2024",
    url: "https://www.freecodecamp.org/certification/fcc35aed0cf-62ef-41b5-8768-74cf1be087c2/front-end-development-libraries",
    linkType: "external",
  },
  {
    institution: "freeCodeCamp",
    title: "Data Visualization",
    detail:
      "Interactive data visualizations with D3.js, SVG, scales, charts, graphs, animations, and data-driven user interfaces.",
    completed: "October 2024",
    url: "https://www.freecodecamp.org/certification/fcc35aed0cf-62ef-41b5-8768-74cf1be087c2/data-visualization",
    linkType: "external",
  },
  {
    institution: "freeCodeCamp",
    title: "Relational Database",
    detail:
      "PostgreSQL, SQL, Bash scripting, database design, normalization, and relational data management.",
    completed: "December 2024",
    url: "https://www.freecodecamp.org/certification/fcc35aed0cf-62ef-41b5-8768-74cf1be087c2/relational-database-v8",
    linkType: "external",
  },
  {
    institution: "freeCodeCamp",
    title: "Back End Development and APIs",
    detail:
      "Node.js, Express.js, REST APIs, backend architecture, npm packages, and server-side application development.",
    completed: "January 2025",
    url: "https://www.freecodecamp.org/certification/fcc35aed0cf-62ef-41b5-8768-74cf1be087c2/back-end-development-and-apis",
    linkType: "external",
  },
];

export const resumeOptions: ResumeOption[] = [
  {
    title: "Professional Resume",
    description:
      "Current resume covering software development, construction, planning, and project coordination experience.",
    href: "/documents/mark-larose-resume.pdf",
    status: "Available",
  },
];

export const careerProgression = [
  "Field Experience",
  "Construction & Trades",
  "Software Development",
  "Product Building",
  "Planning and Practical Systems",
] as const;