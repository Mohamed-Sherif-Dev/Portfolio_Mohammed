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
    Phone
} from "lucide-react"

import { FiGithub, FiLinkedin , FiTwitter } from "react-icons/fi"

import POROJECT_IMG_1 from "../assets/images/project-1.jpeg"
import POROJECT_IMG_3 from "../assets/images/project-3.png"
import POROJECT_IMG_4 from "../assets/images/project-4.png"
import POROJECT_IMG_5 from "../assets/images/project-5.png"
import POROJECT_IMG_6 from "../assets/images/project-6.png"
import POROJECT_IMG_7 from "../assets/images/project-7.png"
import POROJECT_IMG_8 from "../assets/images/project-8.png"
import POROJECT_IMG_9 from "../assets/images/project-9.png"
import POROJECT_IMG_10 from "../assets/images/project10.png"
import POROJECT_IMG_11 from "../assets/images/project11.png"
import POROJECT_IMG_12 from "../assets/images/project12.png"
import POROJECT_IMG_13 from "../assets/images/project16.png"
import POROJECT_IMG_F15 from "../assets/images/Front-15.png"
import POROJECT_IMG_b1 from "../assets/images/backend1.jpeg"
import POROJECT_IMG_14 from "../assets/images/project17.png"
import Backend2 from "../assets/images/backend2.jfif"
import ProjectNext1 from "../assets/images/Home_Page.png"
import ProjectRect from"../assets/images/learning-platform-frontend.png"

export const SKILLS_CATEGORY =[
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
    ],
  },
]


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
    liveUrl: "https://youtu.be/IZkS7PzKzC0",
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
    liveUrl: "https://youtu.be/ykB90YW-a04",
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
    liveUrl: "https://youtu.be/PQnbtnsYUho",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/BlinkIt-Clone-Full-Stack-Ecommerce-main",
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
    liveUrl: "https://youtu.be/PQnbtnsYUho",
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
    liveUrl: "https://youtu.be/PQnbtnsYUho",
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
    tags: ["javaScript", "Node.js", "MongoDB", "mongoose" , "express"],
    liveUrl: "https://youtu.be/PQnbtnsYUho",
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
    tags: ["React" , "Tailwind" , "Framer motion" , "JavaScript"],
    liveUrl: "https://youtu.be/PQnbtnsYUho",
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
    tags: ["React" , "Tailwind" , "Framer motion" , "JavaScript", "Supabase"],
    liveUrl: "https://youtu.be/PQnbtnsYUho",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/SPORTSW-Ecommerc-Frelance-web",
    featured: true,
    category: "Frontend",
  },
  {
    id: 12,
    title:"LuxeScent E-Commerce",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: POROJECT_IMG_14,
    tags: ["React" , "Tailwind" , "Framer motion" , "JavaScript", "Supabase"],
    liveUrl: "https://youtu.be/PQnbtnsYUho",
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
    tags: ["javaScript", "Node.js", "MongoDB", "mongoose" , "express"],
    liveUrl: "https://youtu.be/PQnbtnsYUho",
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
    tags: ["React" , "Tailwind" , "Framer motion" , "JavaScript"],
    liveUrl: "https://learning-platform-frontend-dev1.vercel.app/",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/learning-platform-frontend-dev1",
    featured: true,
    category: "Frontend",
  },
  {
    id: 14,
    title: "Frontend-Ecommerce_Nextjs",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and analytics dashboard.",
    image: ProjectNext1,
    tags: ["Next.js" , "Tailwind" , "Framer motion" , "JavaScript" , "TypeScript"],
    liveUrl: "https://website-project-next-one.vercel.app/",
    githubUrl: "https://github.com/Mohamed-Sherif-Dev/Website-Project-Next-One",
    featured: true,
    category: "Frontend",
  }
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