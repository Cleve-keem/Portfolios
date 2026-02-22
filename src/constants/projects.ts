import { ProjectType } from "@/types/project.type";

export const projectData: ProjectType[] = [
  {
    slug: "personal-blog-marko",
    name: "Personal Blog (Marko)",
    category: "fullstack",
    type: "Web App",
    order: 1,
    coverImage: "/projects/personal-blog.jfif",
    description:
      "A performant full-stack personal blog application built with Marko for optimized SSR and client-side performance.",
    longDescription:
      "This project demonstrates a modern Node.js architecture using Express for routing and middleware, combined with Marko for high-performance server-side rendering.",
    createdAt: "2025-12-12T15:38:49Z",
    role: "Full-Stack Developer",
    stack: ["Node.js", "Express", "Marko", "JavaScript"],
    features: [
      "Server-side rendering (SSR)",
      "RESTful routing",
      "Reusable UI components",
      "Optimized performance",
    ],
    challenges:
      "Optimizing rendering performance and structuring a scalable SSR architecture.",
    solutions:
      "Leveraged Marko’s partial hydration and structured middleware properly.",
    lessons:
      "Learned performance-first architecture and server-rendered UI optimization.",
    status: "completed",
    liveUrl: null,
    githubUrl: "https://github.com/Cleve-keem/personal-blog-marko",
  },
  {
    slug: "unit-converter-ejs",
    name: "Unit Converter (EJS)",
    category: "fullstack",
    type: "Web App",
    order: 2,
    coverImage: "/projects/unit-converter.jfif",
    description:
      "A Node.js-based unit converter using server-rendered EJS pages.",
    longDescription:
      "A simple but structured Express application that allows users to convert between length, weight, and temperature units.",
    createdAt: "2025-12-02T17:20:23Z",
    role: "Backend Developer",
    stack: ["Node.js", "Express", "EJS"],
    features: [
      "Server-rendered UI",
      "Input validation",
      "Conversion logic abstraction",
    ],
    challenges: "Handling input validation and ensuring accurate conversions.",
    solutions: "Centralized conversion logic into reusable functions.",
    lessons:
      "Improved understanding of server-side rendering and middleware flow.",
    status: "completed",
    liveUrl: null,
    githubUrl: "https://github.com/Cleve-keem/UnitConverterEJS",
  },
  {
    slug: "blog-platform-api",
    name: "Blog Platform API",
    category: "backend",
    type: "API",
    order: 3,
    coverImage: "/projects/api.jfif",
    description:
      "A scalable RESTful API for a blogging platform built with modern backend patterns.",
    longDescription:
      "This API demonstrates resource-based routing, standardized responses, validation, and persistent data management.",
    createdAt: "2026-01-20T00:18:32Z",
    role: "Backend Developer",
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
    features: [
      "RESTful architecture",
      "Layered structure (Controller-Service-Repository)",
      "Validation with Zod",
      "Centralized error handling",
    ],
    challenges:
      "Designing scalable folder structure and error-handling patterns.",
    solutions:
      "Implemented middleware-based validation and structured service layer.",
    lessons: "Deepened understanding of scalable backend architecture.",
    status: "completed",
    liveUrl: null,
    githubUrl: "https://github.com/Cleve-keem/blog-platform-api",
  },
  {
    slug: "weather-api",
    name: "Weather API Proxy",
    category: "backend",
    type: "API",
    order: 4,
    coverImage: "/projects/api2.jfif",
    description:
      "A production-ready Express proxy for the Visual Crossing Weather API.",
    longDescription:
      "Provides a clean abstraction layer over an external weather API with centralized configuration and response formatting.",
    createdAt: "2026-01-12T23:54:02Z",
    role: "Backend Developer",
    stack: ["Node.js", "Express", "TypeScript"],
    features: [
      "API proxy pattern",
      "Environment configuration",
      "Centralized response formatting",
    ],
    challenges: "Securing API keys and structuring external API calls.",
    solutions: "Used environment variables and service-layer abstraction.",
    lessons:
      "Learned API proxy patterns and third-party integration strategies.",
    status: "completed",
    liveUrl: null,
    githubUrl: "https://github.com/Cleve-keem/weather-api",
  },
  {
    slug: "todo-list-api",
    name: "Todo List API",
    category: "backend",
    type: "API",
    order: 5,
    coverImage: "/projects/api3.jfif",
    description:
      "A RESTful API for managing tasks with structured routing and validation.",
    longDescription:
      "Implements CRUD operations for task management following REST principles.",
    createdAt: "2026-02-06T17:55:21Z",
    role: "Backend Developer",
    stack: ["Node.js", "Express", "TypeScript"],
    features: ["CRUD operations", "Validation", "Structured routes"],
    challenges: "Designing consistent API responses.",
    solutions: "Standardized response format across controllers.",
    lessons: "Strengthened RESTful API design principles.",
    status: "completed",
    liveUrl: null,
    githubUrl: "https://github.com/Cleve-keem/Todo-List-API",
  },
  {
    slug: "beauty-nigeria-expo",
    name: "Beauty Nigeria Expo",
    category: "frontend",
    type: "Web App",
    order: 6,
    coverImage: "/projects/beauty-nigeria.png",
    description:
      "A performant full-stack personal blog application built with Marko for optimized SSR and client-side performance.",
    longDescription:
      "This project demonstrates a modern Node.js architecture using Express for routing and middleware, combined with Marko for high-performance server-side rendering.",
    createdAt: "2025-12-12T15:38:49Z",
    role: "Frontend Developer",
    stack: ["React", "Google Form"],
    features: ["Reusable UI components", "Optimized performance"],
    challenges:
      "Optimizing rendering performance and structuring a scalable SSR architecture.",
    solutions:
      "Leveraged Marko’s partial hydration and structured middleware properly.",
    lessons:
      "Learned performance-first architecture and server-rendered UI optimization.",
    status: "completed",
    liveUrl: "https://beauty-nigeria.com",
    githubUrl: "https://github.com/Cleve-keem/personal-blog-marko",
  },
];
