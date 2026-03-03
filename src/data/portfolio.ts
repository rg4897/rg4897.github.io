import sbiEpayImg from '../assets/SBI_ePAY.webp';
import bahmniImg from '../assets/Bahmni_logo.webp';
import jsCert1Img from '../assets/Ritesh_Javascript_Certificate_2.webp';
import jsCert2Img from '../assets/Ritesh_Javascript_Certificate_1.webp';
import fccLogoImg from '../assets/freecodecamp_logo.webp';

export const portfolioData = {
  name: "Ritesh Gupta",
  title: "Senior Software Engineer",
  subtitle:
    "Building scalable, high-performance web applications with React, Node.js, TypeScript & AWS",

  location: "Thane, Maharashtra, India",
  phone: "+91-7045002101",
  email: "rg4897@gmail.com",
  website: "https://rg4897.github.io/",
  linkedin: "https://linkedin.in/rg4897",
  github: "https://github.com/rg4897",

  about: {
    summary:
      "Innovative Senior Frontend Engineer with 6+ years of experience developing high-impact, scalable web applications across fintech and healthcare domains. Passionate about performance optimization, accessibility, and building modular, maintainable systems using modern frontend architectures.",

    highlights: [
      "Built large-scale payment aggregator (SBI ePay)",
      "Improved Bahmni performance by 20%",
      "Reduced app load time by 35% using AWS optimization",
      "Mentored junior engineers & led 20+ successful implementations",
      "Strong expertise in React, Node.js, TypeScript & cloud deployment",
    ],
  },

  experience: [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "NeoSOFT Digital Pvt Ltd",
      period: "Nov 2024 – Present",
      description:
        "Working on large-scale fintech applications including SBI ePay payment aggregator platform.",

      achievements: [
        "Built scalable payment aggregator module from scratch improving payment success rates",
        "Developed fully responsive, device-agnostic application enhancing UX",
        "Implemented Atomic Design principles for reusable component architecture",
        "Improved WCAG accessibility compliance",
        "Applied debouncing, throttling, HOC, memoization & request pooling for performance optimization",
        "Optimized Core Web Vitals using Lighthouse",
      ],
    },

    {
      id: 2,
      role: "Senior Frontend Engineer",
      company: "IPLit Solutions LLP",
      period: "Jul 2019 – Sep 2024",
      description:
        "Led frontend development and performance optimization for Bahmni healthcare platform.",

      achievements: [
        "Improved Bahmni performance by 20% using custom React hooks & request batching",
        "Delivered 20+ healthcare implementations successfully",
        "Deployed applications on AWS EC2 with ELB reducing load time by 35%",
        "Conducted onsite visits for Bihar & Assam government healthcare digitization",
        "Mentored junior developers and promoted Agile practices",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "SBI ePay – Payment Aggregator",
      image: sbiEpayImg,
      github: "",
      description:
        "Large-scale payment aggregator platform by State Bank of India enabling secure and scalable multi-mode transactions.",

      tags: [
        "React",
        "TypeScript",
        "Redux",
        "AWS",
        "CI/CD",
        "Performance Optimization",
      ],

      highlights: [
        "Architected reusable frontend components",
        "Implemented CI/CD workflows",
        "Collaborated cross-functionally for enterprise delivery",
        "Ensured regulatory compliance and scalability",
      ],
    },

    {
      id: 2,
      title: "Bahmni – EMR & Hospital Management System",
      image: bahmniImg,
      description:
        "Open-source EMR and hospital management system integrating healthcare workflows into unified platform.",

      tags: [
        "React",
        "Angular",
        "TypeScript",
        "Node.js",
        "Docker",
        "AWS",
      ],

      highlights: [
        "Developed Appointment Scheduling module",
        "Built In-Patient Detailed Care View",
        "Enhanced Admin dashboards",
        "Improved workflow efficiency for healthcare providers",
      ],
    },
  ],

  skills: {
    languages: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Java",
      "Python",
      "HTML5",
      "CSS3",
    ],

    frontend: [
      "React",
      "Redux",
      "Angular",
      "Bootstrap",
      "Tailwind CSS",
      "SCSS/SASS",
    ],

    backend: [
      "Node.js (Express)",
      "Java (Spring Boot)",
    ],

    cloudDevOps: [
      "AWS (EC2, ELB)",
      "Docker",
      "GitHub CI/CD",
      "GitLab CI/CD",
      "OpenShift",
    ],

    databases: [
      "MySQL",
      "PostgreSQL",
    ],

    tools: [
      "Lighthouse",
      "Jira",
      "Postman",
      "Selenium",
      "VSCode",
      "ChatGPT",
      "claude",
    ],
  },

  certifications: [
    {
      id: 1,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      issuerLogo: fccLogoImg,
      date: "Jun 2024",
      credentialId: "rg4897-jaads",
      image: jsCert1Img,
    },
    {
      id: 2,
      title: "Front-End Development Libraries",
      issuer: "freeCodeCamp",
      issuerLogo: fccLogoImg,
      date: "Sep 2024",
      credentialId: "rg4897-fedl",
      image: jsCert2Img,
    },
  ],

  education: {
    degree: "Bachelor of Computer Science - Software Engineering",
    institution: "Terna Engineering College, Mumbai University",
    year: "2014 – 2018",
    cgpa: "6.5/10",
  },

  socialLinks: {
    github: "https://github.com/rg4897",
    linkedin: "https://www.linkedin.com/in/rgriteshguptha/",
    email: "rg4897@gmail.com",
  },

  contact: {
    formAction:
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeGrY5LEil8j2GtPS4d3WFt0LyvJnszIUlIzSbOUtkgS4fI2g/formResponse",

    fields: {
      name: "entry.362478081",
      email: "entry.1184204116",
      subject: "entry.1722462727",
      message: "entry.1787664102",
    },
  },
};