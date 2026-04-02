import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";



import POROJECT_IMG_1 from "../assets/images/project-1.jpeg";
import POROJECT_IMG_3 from "../assets/images/project-3.png";
import POROJECT_IMG_4 from "../assets/images/project-4.png";
import POROJECT_IMG_5 from "../assets/images/project-5.png";
import POROJECT_IMG_6 from "../assets/images/project-6.png";
import POROJECT_IMG_7 from "../assets/images/project-7.png";
import POROJECT_IMG_8 from "../assets/images/project-8.png";
import POROJECT_IMG_9 from "../assets/images/project-9.png";
import POROJECT_IMG_10 from "../assets/images/project10.png";
import POROJECT_IMG_11 from "../assets/images/project11.png";
import POROJECT_IMG_12 from "../assets/images/project12.png";
import POROJECT_IMG_13 from "../assets/images/project16.png";
import POROJECT_IMG_F15 from "../assets/images/Front-15.png";
import POROJECT_IMG_b1 from "../assets/images/backend1.jpeg";
import POROJECT_IMG_14 from "../assets/images/project17.png";
import Backend2 from "../assets/images/backend2.jfif";
import ProjectNext1 from "../assets/images/Home_Page.png";
import ProjectRect from "../assets/images/learning-platform-frontend.png";
import appointment from "../assets/images/appointmen.png";
import safarni from "../assets/images/safarni.png";
import BACKEND_ECOMMERCE from "../assets/images/backend-ecommerce.jpeg";
import Devgigs from "../assets/images/devgigs.png";
import ai_Task_Manager from "../assets/images/ai-Task.png";
import NextShop from "../assets/images/NextShop.png";
import cryptovision from "../assets/images/cryptovision.png";
import DevCanvas from "../assets/images/DevCanvas.png";
import MindFlow from "../assets/images/MindFlow.png";
import GitPulse from "../assets/images/GitPulse.png";
import DevMarket_API from "../assets/images/DevMarketAPI.png";
import ConnectAPI from "../assets/images/ConnectAPI.png";
import TrackFlow_backend from "../assets/images/TrackFlow-backend.png";
import Git_Assistant from "../assets/images/Git_Assistant.png";
import Git_Assistant2 from "../assets/images/Git_Assistant2.png";
import API_Contract from "../assets/images/API-Contract.png";
import HireFlow_AI from "../assets/images/HireFlow.png";
import NestSocial_API from "../assets/images/NestSocial-API.png";








export const  SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Next.js", level: 88, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },

  {
    title: "Backend",
    icon: Server,
    description: "Building scalable and efficient server-side applications",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-600" },
      { name: "JavaScript", level: 90, color: "bg-yellow-500" },
      { name: "Express.js", level: 85, color: "bg-gray-700" },
      { name: "RESTful APIs", level: 90, color: "bg-blue-500" },
      { name: "REST API", level: 88, color: "bg-orange-500" },
      { name: "GraphQL", level: 80, color: "bg-pink-400" },
    ],
  },

  {
    title: "Databases",
    icon: Database,
    description: "Designing and managing data storage solutions",
    skills: [
      { name: "MongoDB", level: 87, color: "bg-green-600" },
      { name: "MongoDb", level: 87, color: "bg-green-700" },
      { name: "MySQL", level: 82, color: "bg-blue-600" },
      { name: "PostgreSQL", level: 80, color: "bg-indigo-600" },
      { name: "Prisma", level: 80, color: "bg-indigo-600" },
      { name: "Redis", level: 80, color: "bg-indigo-600" },
      { name: "GraphQL", level: 80, color: "bg-pink-400" },
    ],
  },

  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Docker", level: 82, color: "bg-blue-600" },
      { name: "AWS", level: 78, color: "bg-orange-600" },
      { name: "Vercel", level: 90, color: "bg-gray-900" },
      { name: "Git", level: 95, color: "bg-orange-700" },
      { name: "CI/CD", level: 75, color: "bg-purple-600" },
      { name: "Jenkins", level: 80, color: "bg-indigo-600" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Sass",
  "Webpack",
  "Vite",
  "Jest",
  "Cypress",
  "Figma",
  "Adobe XD",
  "Notion",
  "Slack",
];

export const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "20+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 18,
    title: "DevGigs",
    description:
      "A full-stack SaaS Freelance Job Board where companies post projects and developers find work. Built with Next.js 15, PostgreSQL, Stripe payments, and Google Auth.",
    image: Devgigs,
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "NextAuth",
      "Tailwind",
    ],
    liveUrl: "https://devgigs-zeta.vercel.app",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/Devgigs",
    featured: true,
    category: "Full_Stack",
  },
  {
    id: 19,
    title: "AI Task Manager",
    description:
      "A full-stack AI-powered task management platform that helps users transform high-level goals into actionable tasks. Users can create projects, manage tasks, and leverage AI to automatically generate structured task breakdowns. Features secure Google authentication, real-time data handling, and a scalable backend built with Prisma and PostgreSQL. Designed with a clean, modern UI and deployed on Vercel for seamless performance.",
    image: ai_Task_Manager,
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Tailwind CSS",
      "OpenRouter AI",
    ],
    liveUrl: "https://ai-task-manager-sage-tau.vercel.app",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/Ai-Task-Manager",
    featured: true,
    category: "Full_Stack",
  },
  {
    id: 20,
    title: "NexShop",
    description:
      "A full-stack e-commerce platform with secure authentication, Stripe payments, and AI-powered product generation. Built with Next.js, Prisma, PostgreSQL, and integrated with OpenRouter for dynamic product descriptions.",
    image: NextShop,
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
      "Tailwind CSS",
      "OpenRouter AI",
    ],
    liveUrl: "https://nex-shop-alpha.vercel.app/",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/NexShop",
    featured: true,
    category: "Full_Stack",
  },
    {
    id: 21,
    title: "CryptoVision",
    description:
      "A modern crypto market dashboard that provides real-time prices, portfolio tracking, and interactive charts. Users can monitor top cryptocurrencies and manage their assets through a clean and responsive UI.",
    image: cryptovision,
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "React Query",
      "Recharts",
      "Tailwind CSS",
      "Zustand",
    ],
    liveUrl: "https://cryptovision-frontend.vercel.app/",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/Cryptovision_frontend",
    featured: true,
    category: "Frontend",
  },
  {
  id: 22,
  title: "DevCanvas",
  description:
    "An AI-powered live code editor that allows developers to write HTML, CSS, and JavaScript with real-time preview and AI code generation. Includes smart editor features, templates, and interactive 3D UI.",
  
  image: DevCanvas,

  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Three.js",
    "CodeMirror",
    "AI",
  ],

  liveUrl: "https://devcanvas-frontend.vercel.app",
  githubUrl: "https://github.com/Mohamed-Sherif-Dev/devcanvas-Frontend",

  featured: true,
  category: "Frontend",
},
{
  id: 23,
  title: "MindFlow",
  description:
    "AI-powered mental wellness and focus app that helps users track mood, improve focus, and build healthy habits with interactive tools and real-time visualizations.",
  image: MindFlow, 

  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "WebGL",
    "Framer Motion",
    "AI"
  ],

  liveUrl: "https://mindflow-frontend-pearl.vercel.app",
  githubUrl: "https://github.com/Mohamed-Sherif-Dev/Mindflow-Frontend",

  featured: true,
  category: "Frontend",
},
{
  id: 24,
  title: "GitPuls",
  description:
    "An AI-powered GitHub analytics dashboard that provides deep insights into developer profiles, including repository stats, language breakdown, and intelligent developer analysis.",

  image: GitPulse,

  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "AI",
    "OpenRouter",
    "Recharts",
    "Framer Motion",
  ],

  liveUrl: "https://git-puls-frontend.vercel.app",
  githubUrl: "https://github.com/Mohamed-Sherif-Dev/GitPuls-Frontend",

  featured: true,
  category: "Frontend",
},
{
  id: 25,
  title: "DevMarket API",
  description:
    "Production-ready backend API for a digital marketplace. Features JWT authentication, refresh tokens, email verification, Stripe payments, Redis caching, file uploads, and scalable architecture using Node.js and TypeScript.",
  image: DevMarket_API, 
  tags: [
    "Node.js",
    "Express",
    "TypeScript",
    "MongoDB",
    "Redis",
    "Stripe",
    "JWT",
    "Cloudinary",
  ],
  liveUrl: "", // مفيش live لأن ده backend
  githubUrl: "https://github.com/Mohamed-Sherif-Dev/DevMarket-AI-Backend",
  featured: true,
  category: "Backend",
},
{
  id: 26,
  title: "ConnectAPI",
  description:
    "A production-ready social media REST API featuring real-time interactions, authentication system, posts, comments, likes, and scalable background jobs using queues.",
  image: ConnectAPI, 
  tags: [
    "Node.js",
    "Express",
    "TypeScript",
    "MongoDB",
    "Socket.io",
    "Redis",
    "Bull Queue",
    "JWT",
    "Jest",
    "Docker"
  ],
  liveUrl: "", // مفيش deploy غالبًا
  githubUrl: "https://github.com/Mohamed-Sherif-Dev/Connecttapi-Backend",
  featured: true,
  category: "Backend",
},
{
  id: 27,
  title: "TrackFlow API",
  description:
    "A real-time event analytics backend powered by Apache Kafka and PostgreSQL. Processes high-volume event streams with Redis caching and scalable architecture, similar to Google Analytics but as an API.",
  image: TrackFlow_backend, 
  tags: [
    "Node.js",
    "TypeScript",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Kafka",
    "Redis",
    "Docker"
  ],
  liveUrl: "", // لو هترفعه بعدين
  githubUrl: "https://github.com/Mohamed-Sherif-Dev/TrackFlow-backend",
  featured: true,
  category: "Backend",
},
{
  id: 28,
  title: "Git Assistant (AI Tool)",
  description: "AI-powered Git assistant that generates commit messages, PR descriptions, branch names, and code reviews. Built to help developers automate repetitive Git tasks and follow best practices.",
  image: Git_Assistant, 
  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind",
    "OpenRouter API",
    "LLM",
    "Developer Tools"
  ],
  liveUrl: "https://git-assistant-new-frontend.vercel.app",
  githubUrl: "https://github.com/Mohamed-Sherif-Dev/Git-Assistant_NEW_Frontend",
  featured: true,
  category: "Frontend"
},
{
  id: 29,
  title: "Debug Companion – AI Debugging Tool",
  description: "AI-powered debugging assistant that analyzes error messages and stack traces to provide clear explanations, root causes, and actionable fixes. Helps developers resolve issues faster without searching manually.",
  image: Git_Assistant2,
  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind",
    "OpenRouter API",
    "LLM",
    "Developer Tools"
  ],
  liveUrl: "https://debug-companion-frontend-new.vercel.app",
  githubUrl: "https://github.com/Mohamed-Sherif-Dev/Debug-Companion-Frontend_new",
  featured: true,
  category: "Frontend"
},
{
  id: 30,
  title: "API Contract Validator 🛡️",
  description: "A developer tool that detects mismatches between frontend expected schema and backend API responses. Helps catch type errors, missing fields, and naming conflicts before production.",
  image: API_Contract, 
  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Monaco Editor",
    "OpenRouter API",
    "LLM",
    "Developer Tools"
  ],
  liveUrl: "https://api-contract-validator-new.vercel.app",
  githubUrl: "https://github.com/Mohamed-Sherif-Dev/Api-Contract-Validator_New",
  featured: true,
  category: "Frontend"
},
{
  id: 31,
  title: "HireFlow 🚀",
  description:
    "AI-powered recruitment platform that analyzes CVs, matches candidates with jobs, and automates hiring workflows using intelligent scoring and job recommendations.",
  image: HireFlow_AI,
  tags: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "NextAuth",
    "OpenRouter API",
    "LLM",
    "AI",
    "Full Stack"
  ],
  liveUrl: "https://hire-flow-full-stack.vercel.app",
  githubUrl: "https://github.com/Mohamed-Sherif-Dev/HireFlow_Full_Stack",
  featured: true,
  category: "Fullstack"
},
{
  id: 32,
  title: "NestSocial API 🚀",
  description:
    "Production-ready social media REST API built with NestJS. Features authentication (JWT + refresh tokens), real-time notifications with WebSockets, scalable architecture, and full test coverage.",
  image: NestSocial_API, 
  tags: [
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Redis",
    "WebSockets",
    "JWT",
    "Docker",
    "Full Stack",
  ],
  liveUrl: "", // سيبها فاضية دلوقتي (لأن Vercel مش شغال)
  githubUrl: "https://github.com/Mohamed-Sherif-Dev/Nest-Social",
  featured: true,
  category: "Fullstack",
},
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
    image: POROJECT_IMG_3,
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 8,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
    image: POROJECT_IMG_9,
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/EbtehalNeseem/Basket.git",
    featured: false,
    category: "Frontend",
  },
  {
    id: 9,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
    image: POROJECT_IMG_10,
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Blog App with AI Post Generator",
    description:
      "A full-stack blog app using the MERN stack – with full Markdown support and AI-generated posts.",
    image: POROJECT_IMG_4,
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: "https://youtu.be/tUnGudIBBI9",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team chat, and advanced analytics.",
    image: POROJECT_IMG_5,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Web App",
  },
  {
    id: 4,
    title: "AI-Powered Interview Prep App",
    description:
      "A smart AI-powered Interview Preparation App using the MERN stack – along with the Gemini AI API for mock interviews.",
    image: POROJECT_IMG_6,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/TOURISM-Full-Stack",
    featured: false,
    category: "Web App",
  },
  {
    id: 5,
    title: "Resume Builder App",
    description:
      "An intuitive resume builder application with live preview and customizable templates.",
    image: POROJECT_IMG_7,
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/react-deploy-vercal",
    featured: true,
    category: "Web App",
  },
  {
    id: 6,
    title: "Expense Tracker App",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: POROJECT_IMG_8,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl:
      "https://github.com/Mohamed-Sherif-Dev/BlinkIt-Clone-Full-Stack-Ecommerce-main",
    featured: true,
    category: "Web App",
  },
  {
    id: 7,
    title: "Full-Satck-Doctors",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: POROJECT_IMG_11,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full stack",
  },
  {
    id: 8,
    title: "Frontend-Ecommerce",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: POROJECT_IMG_F15,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/Shopping-E-abi-React-2",
    featured: true,
    category: "Frontend",
  },
  {
    id: 9,
    title: "Backend-Ecommerce",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: POROJECT_IMG_b1,
    tags: ["javaScript", "Node.js", "MongoDB", "mongoose", "express"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/Projeact-Backend-Stor",
    featured: true,
    category: "Backend",
  },
  {
    id: 10,
    title: "Frontend-Ecommerce",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: POROJECT_IMG_12,
    tags: ["React", "Tailwind", "Framer motion", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/E-commerce",
    featured: true,
    category: "Frontend",
  },
  {
    id: 11,
    title: "Frontend-Ecommerce-SPORTS",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: POROJECT_IMG_13,
    tags: ["React", "Tailwind", "Framer motion", "JavaScript", "Supabase"],
    liveUrl: "#",
    githubUrl:
      "https://github.com/Mohamed-Sherif-Dev/SPORTSW-Ecommerc-Frelance-web",
    featured: true,
    category: "Frontend",
  },
  {
    id: 12,
    title: "LuxeScent E-Commerce",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: POROJECT_IMG_14,
    tags: ["React", "Tailwind", "Framer motion", "JavaScript", "Supabase"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/LuxeScent-E-Commerce",
    featured: true,
    category: "Frontend",
  },
  {
    id: 9,
    title: "Backend-Ecommerce",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: Backend2,
    tags: ["javaScript", "Node.js", "MongoDB", "mongoose", "express"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/Backend-Task/tree/main",
    featured: true,
    category: "Backend",
  },
  {
    id: 13,
    title: "Frontend-Ecommerce_React",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: ProjectRect,
    tags: ["React", "Tailwind", "Framer motion", "JavaScript"],
    liveUrl: "https://learning-platform-frontend-dev1.vercel.app",
    githubUrl:
      "https://github.com/Mohamed-Sherif-Dev/learning-platform-frontend-dev1",
    featured: true,
    category: "Frontend",
  },
  {
    id: 14,
    title: "Frontend-Ecommerce_Nextjs",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: ProjectNext1,
    tags: ["Next.js", "Tailwind", "Framer motion", "JavaScript", "TypeScript"],
    liveUrl: "https://website-project-next-one.vercel.app",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/Website-Project-Next-One",
    featured: true,
    category: "Frontend",
  },
  {
    id: 15,
    title: "appointment-system",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: appointment,
    tags: ["React", "Tailwind", "Framer motion", "JavaScript", "TypeScript"],
    liveUrl: "https://appointment-system-sepia.vercel.app",
    githubUrl: "https://github.com/Abdulrahmanfawzy/appointment-system.git",
    featured: true,
    category: "Training_Team",
  },
  {
    id: 16,
    title: "safarni",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: safarni,
    tags: ["React", "Tailwind", "Framer motion", "JavaScript", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Abdulrahmanfawzy/safarni",
    featured: true,
    category: "Training_Team",
  },
  {
    id: 17,
    title: "Backend-Ecommerce",
    description:
      "Backend for an e-commerce platform with product management, user authentication, and order processing.",
    image: BACKEND_ECOMMERCE,
    tags: ["TypeScript", "Node.js", "Express", "MongoDB", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/Backend_typeScript",
  },

];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with clean code.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "First Internship",
    company: "TechStart Inc.",
    description:
      "Joined as a frontend intern, working with React and learning modern development practices. Contributed to real-world projects.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "Computer Science Degree",
    company: "University of Technology",
    description:
      "Graduated with honors, specializing in web technologies and software engineering. Led the final year project on scalable web systems.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Promoted to full-time developer role. Built end-to-end applications using MERN stack and led junior developers.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "2024",
    title: "Freelance & Open Source",
    company: "Independent",
    description:
      "Started freelancing and contributing to open source projects. Launched 3 successful web applications.",
    icon: Award,
    color: "bg-pink-500",
  },
  {
    year: "2025",
    title: "Senior Developer",
    company: "Present",
    description:
      "Currently building innovative solutions and exploring new technologies like AI integration and advanced frontend frameworks.",
    icon: Zap,
    color: "bg-cyan-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: FiGithub,
    url: "https://github.com/Mohamed-Sherif-Dev",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/mohammed-sherif-a57445363",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-800",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-800",
  },
  {
    name: "Email",
    icon: Mail,
    url: "momh120130@gmail.com",
    color: "hover:text-red-400",
    bgColor: "hover:bg-red-800",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
  },
  {
    icon: Mail,
    label: "Email",
    value: "momh120130@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "01127648263",
  },
];
