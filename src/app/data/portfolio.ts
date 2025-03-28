export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  [key: string]: Skill[];
}

export const experiences: Experience[] = [
  {
    company: "Oracle",
    role: "Principal Member Of Technical Staff",
    period: "06/2019 - Present",
    location: "Seattle",
    achievements: [
      "Led the development of high-priority change events plugin, improving overall system responsiveness",
      "Implemented advanced UI/UX features including infinite scroll, debounce searching, D3 charts, and real-time filtering",
      "Established and managed a new team to develop a browser-based IDE, optimizing coding experiences with OCI services",
      "Significantly reduced code editor loading time by 50% through optimization techniques",
      "Enhanced application performance with advanced caching mechanisms, reducing server response times",
      "Delivered an AI assistant VSCode plugin showcased at Oracle OpenWorld keynote demos",
      "Managed a team to develop a source control UI with Git diff, source view, and file download capabilities",
      "Developed robust file upload/download feature for a browser-based terminal",
      "Designed and implemented weighted token search for the OCI Marketplace homepage",
      "Increased selenium integration test success rate to 99% through stabilization efforts",
      "Boosted unit test code coverage and enforced coverage rules",
      "Enhanced web content accessibility to meet Level AA guidelines",
      "Collaborated with product management to translate business goals into technical requirements",
      "Interviewed and onboarded new team members",
      "Organized CI/CD pipelines, version control systems, and DevOps best practices"
    ],
    technologies: ["React", "TypeScript", "Sass", "ESLint", "Webpack", "CI/CD", "DevOps", "Git"]
  },
  {
    company: "Amazon",
    role: "Web Development Engineer",
    period: "01/2015 - 06/2019",
    location: "Seattle",
    achievements: [
      "Enhanced user experience for millions job seekers, resulting in 30% increased engagement by redesigning Amazon's job search page",
      "Pioneered a job application wizard, enabling a one-click application process",
      "Engineered a React component wrapper for seamless integration with legacy Angular systems",
      "Improved web performance, leading to faster load times and a smoother user experience",
      "Led accessibility initiatives, achieving Accessibility Level AA compliance",
      "Conducted over 50 candidate interviews across multiple teams"
    ],
    technologies: ["React", "Angular", "JavaScript", "CSS", "Accessibility", "Performance Optimization"]
  },
  {
    company: "Samsung Electronic Canada",
    role: "Front-end Engineer",
    period: "01/2014 - 01/2015",
    location: "Vancouver",
    achievements: [
      "Developed the Samsung Knox front end using the MVC design pattern",
      "Separated business logic from the presentation layer",
      "Engineered reusable web components, reducing technical debt"
    ],
    technologies: ["MVC", "JavaScript", "HTML5", "CSS3"]
  },
  {
    company: "Central 1 Credit Union",
    role: "Front-end Developer",
    period: "01/2013 - 01/2014",
    location: "Vancouver",
    achievements: [
      "Led the development of advanced financial calculators",
      "Delivered major contributions to high-stakes projects",
      "Partnered with diverse teams to create tailored solutions"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Financial Systems"]
  },
  {
    company: "Delta Control",
    role: "Software Engineer",
    period: "01/2007 - 01/2012",
    location: "Vancouver",
    achievements: [
      "Led the frontend software development team",
      "Developed and implemented efficient algorithms"
    ],
    technologies: ["JavaScript", "UI Development", "Algorithm Design"]
  }
];

export const projects: Project[] = [
  {
    title: "Math Buddy",
    description: "An engaging and interactive app designed to help kids learn math in a fun and exciting way.",
    technologies: ["React", "OpenAI API", "TypeScript", "Tailwind CSS", "Google SSO"],
    highlights: [
      "Integrated OpenAI API to enhance the learning experience with AI-driven insights",
      "Implemented voice input for hands-free interaction",
      "Supported image input for visual math problems",
      "Enabled Google SSO for secure login",
      "Designed a responsive web interface"
    ],
    link: "https://mathaibuddy-675937690896.us-central1.run.app/"
  },
  {
    title: "Oracle IDE",
    description: "A modern, cloud-based IDE for developers with real-time collaboration features.",
    technologies: ["React", "TypeScript", "Monaco Editor", "WebSocket", "OCI Services"],
    highlights: [
      "Real-time collaboration features",
      "Custom plugin system",
      "Cloud-based file system integration",
      "Optimized loading time",
      "Advanced caching mechanisms"
    ]
  },
  {
    title: "Amazon Job Search Redesign",
    description: "Complete overhaul of Amazon's job search interface with enhanced user experience.",
    technologies: ["React", "Angular", "JavaScript", "CSS", "Accessibility"],
    highlights: [
      "Improved search algorithm",
      "Enhanced mobile experience",
      "Accessibility improvements",
      "One-click application process",
      "Seamless legacy system integration"
    ]
  }
];

export const skills: SkillCategory = {
  "Frontend": [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 90 },
    { name: "Sass", level: 85 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Responsive Design", level: 95 }
  ],
  "Development Tools": [
    { name: "Git", level: 90 },
    { name: "Webpack", level: 85 },
    { name: "ESLint", level: 85 },
    { name: "VSCode", level: 90 },
    { name: "CI/CD", level: 85 },
    { name: "DevOps", level: 80 },
    { name: "Docker", level: 75 },
    { name: "NPM/Yarn", level: 90 }
  ],
  "Testing & Quality": [
    { name: "Jest", level: 85 },
    { name: "Selenium", level: 80 },
    { name: "Unit Testing", level: 90 },
    { name: "Integration Testing", level: 85 },
    { name: "E2E Testing", level: 80 },
    { name: "Code Coverage", level: 90 },
    { name: "Performance Testing", level: 85 }
  ],
  "Other": [
    { name: "Accessibility (WCAG)", level: 90 },
    { name: "Performance Optimization", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "Agile/Scrum", level: 85 },
    { name: "Team Leadership", level: 85 },
    { name: "Technical Interviewing", level: 90 },
    { name: "MVC Architecture", level: 85 }
  ]
}; 