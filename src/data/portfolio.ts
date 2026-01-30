// Portfolio Data - Edit this file to update your portfolio content

export const personalInfo = {
  name: "Aman Lad",
  role: "Software Engineer",
  location: "Goa, India",
  experience: "2+ years",
  email: "ladaman7@gmail.com",
  github: "https://github.com/amanlad97",
  linkedin: "https://www.linkedin.com/in/aman-lad-b2736a202",
  website: "https://www.amanlad.world",
  avatar: "/avatar.png",
  resume: "/Aman_Lad_resume.pdf",
};

export const seoConfig = {
  title: "Aman Lad | Software Engineer",
  description:
    "Software Engineer with 2+ years of experience building production-grade web applications. Specialized in React, TypeScript, Go and Spring Boot.",
  keywords: [
    "Software Engineer",
    "React Developer",
    "TypeScript",
    "Go Developer",
    "Spring Boot",
    "Full Stack Developer",
    "Aman Lad",
  ],
  ogImage: "/og-image.png",
  siteUrl: "https://www.amanlad.world",
};

export const objective = `Software Engineer with 2+ years of experience building and scaling production-grade web applications. Specialized in React, TypeScript, Go (BFF) and Spring Boot with strong focus on performance optimization, observability and production reliability.`;

export const education = {
  degree: "Bachelor of Engineering in Computer Engineering",
  school: "Don Bosco College of Engineering",
  duration: "July 2019 – June 2023",
  cgpa: "8.36 / 10",
  grade: "A",
};

export const experience = [
  {
    title: "Software Engineer",
    company: "BBD Software",
    duration: "July 2023 – Present",
    location: "Pune, Maharashtra",
    highlights: {
      frontend: [
        "Architected and delivered a large suite of highly optimized React components and pages",
        "Introduced lazy routing, reducing initial bundle size by 95%",
        "Refactored asset handling using SVGR, reducing backend calls by 25–30%",
        "Built and shipped a production React Native app for Android and iOS with real-time data updates",
        "Integrated GraphQL subscriptions / WebSockets to stream live data to the mobile client",
        "Integrated iiDENTIFii’s mobile SDK for face detection and biometric authentication",
        "Wrote and maintained Jest unit tests for UI stability and CI/CD support",
      ],
      backend: [
        "Developed and optimized Go-based BFF REST APIs with structured error handling",
        "Gained hands-on experience with Java Spring Boot microservices",
        "Designed RESTful APIs with input validation and consistent response contracts",
        "Built production GraphQL APIs using Apollo Server",
        "Integrated Apollo Client caching and state management",
        "Implemented GraphQL subscriptions for real-time features",
        "Optimized schema and resolvers for performance and scalability",
      ],
      observability: [
        "Investigated and resolved production incidents, DLQ failures, and data inconsistencies",
        "Integrated Faro for frontend monitoring, reducing investigation time by 30–40%",
        "Configured Adobe Analytics for user behavior tracking and product insights",
      ],
      innovation: [
        "Set up AI-assisted development with Claude Code, improving productivity by 2×",
        "Applied context engineering to build a stable AI understanding of a production codebase using Claude Code",
        "Designed a persistent context layer and guardrails to prevent context drift and unsafe AI edits",
        "Integrated Context7 to ensure AI changes aligned with latest documentation and APIs",
        "Used GSD (Get Shit Done) to orchestrate scoped, goal-driven AI tasks with strict execution boundaries",
      ],
    },
    techStack: ["React", "TypeScript", "Go", "Spring Boot", "PostgreSQL", "Grafana", "Jest"],
  },
];

export const skills = {
  languages: [
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Go", level: 75 },
    { name: "Python", level: 70 },
    { name: "Java", level: 65 },
  ],
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Material UI", level: 85 },
  ],
  backend: [
    { name: "Node.js / Express", level: 85 },
    { name: "Spring Boot", level: 65 },
    { name: "REST APIs", level: 90 },
    { name: "WebSocket", level: 80 },
  ],
  database: [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Prisma ORM", level: 80 },
    { name: "Firebase", level: 70 },
  ],
  devops: [
    { name: "Docker", level: 80 },
    { name: "AWS", level: 70 },
    { name: "CI/CD (Jenkins/GitHub Actions)", level: 75 },
    { name: "Nginx", level: 70 },
  ],
  monitoring: [
    { name: "Grafana", level: 85 },
    { name: "Faro", level: 80 },
    { name: "Adobe Analytics", level: 75 },
    { name: "Loki", level: 70 },
  ],
};

export const additionalSkills = [
  "Chart.js",
  "Axios",
  "Recoil",
  "JWT",
  "NextAuth",
  "Zod",
  "Bcrypt",
  "PM2",
  "Turborepo",
  "LangChain",
  "scikit-learn",
  "NumPy",
  "Pandas",
  "Jira",
  "Confluence",
];

export const projects = [
  {
    title: "Let's Draw Together",
    description:
      "A full-stack collaborative drawing application enabling multiple users to create on a shared canvas in real-time. Features room-based synchronization, low-latency WebSocket communication, and JWT-based authentication.",
    features: [
      { icon: "🎨", text: "Real-time Collaboration" },
      { icon: "🔐", text: "JWT Authentication" },
      { icon: "⚡", text: "WebSocket Sync" },
    ],
    techStack: ["Express", "WebSocket", "PostgreSQL", "Prisma", "Turborepo", "TypeScript"],
    github: "https://github.com/amanlad97/lets-draw-together/",
    featured: true,
  },
  {
    title: "Rydmate",
    description:
      "A full-stack carpooling web application with integrated payment processing, real-time maps, and instant notifications. Won 2nd place at TechMania 2023.",
    features: [
      { icon: "🗺️", text: "Google Maps Integration" },
      { icon: "💳", text: "Razorpay Payments" },
      { icon: "📱", text: "SMS Notifications" },
    ],
    techStack: ["Firebase", "Razorpay", "Google Maps API", "Twilio", "Fast2SMS"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7092902271910387712/",
    award: "2nd Place - TechMania 2023",
  },
];

export const stats = [
  { icon: "⚡", value: "95%", label: "Bundle Size Reduction" },
  { icon: "📊", value: "30%", label: "Fewer Backend Calls" },
  { icon: "🔍", value: "40%", label: "Faster Issue Resolution" },
  { icon: "🚀", value: "2×", label: "Developer Productivity" },
];

export const navItems = [
  { id: "home", label: "home", icon: "~" },
  { id: "about", label: "about", icon: "/" },
  { id: "experience", label: "exp", icon: ">" },
  { id: "skills", label: "skills", icon: "#" },
  { id: "projects", label: "projects", icon: "$" },
  { id: "contact", label: "contact", icon: "@" },
];
