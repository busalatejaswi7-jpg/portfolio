export const personal = {
  name: 'Busala Tejaswi',
  role: 'Full Stack Developer (MERN)',
  tagline: 'Designing secure, scalable web products from API layer to polished UI.',
  email: 'busalatejaswi3@gmail.com',
  phone: '+91-9381979532',
  github: 'https://github.com/busalatejaswi7-jpg',
  linkedin: 'https://linkedin.com/in/tejaswi-b-009ba227b',
  location: 'Srikakulam, India',
  summary:
    'Full Stack Developer with strong MERN foundations and practical experience building authentication-heavy applications, REST APIs, and deployment-ready products. Passionate about clean architecture, developer productivity, and AI-assisted engineering workflows.',
}

export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'C', 'Java', 'Python (Basics)'] },
  { title: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'React Router', 'HTML5', 'CSS3'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'] },
  { title: 'Database', items: ['MongoDB', 'MongoDB Atlas', 'MySQL', 'SQL'] },
  { title: 'Engineering', items: ['OOP', 'DBMS', 'SDLC', 'API Integration', 'Prompt Engineering'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render', 'Rocode', 'Codebuff'] },
]

export const projects = [
  {
    title: 'AI Career Intelligence Platform',
    description:
      'End-to-end platform for tracking job applications, analyzing skill gaps, and managing resumes with secure account workflows and production deployment.',
    highlights: ['JWT + bcrypt authentication', 'Resume upload with Multer', 'CRUD APIs with MongoDB Atlas', 'Frontend on Vercel, backend on Render'],
    stack: ['MERN', 'JWT', 'Multer', 'MongoDB Atlas', 'Axios'],
    github: 'https://github.com/your-username/your-repo',
    live: 'https://ai-analyzer-kohl.vercel.app',
  },
  {
    title: 'Developer Hub Authentication System',
    description:
      'Full-stack auth platform with role-based access, protected routes, and robust admin workflows for search, pagination, and user management.',
    highlights: ['Role-based access (User/Admin)', 'Axios interceptors + protected routes', 'React Context auth state', 'Resolved MongoDB Atlas production constraints'],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT'],
    github: 'https://github.com/busalatejaswi7-jpg',
    live: 'https://frontend-pskx.onrender.com',
  },
  {
    title: 'Task Management Backend API',
    description:
      'Production-oriented backend API implementing secure authorization, ownership-aware CRUD operations, and scalable query patterns.',
    highlights: ['Admin/User authorization model', 'Filtering, pagination, sorting', 'express-validator middleware', 'Centralized error handling'],
    stack: ['Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Render'],
    github: 'https://github.com/busalatejaswi7-jpg',
    live: 'https://task-manager-api-gl7e.onrender.com',
  },
  {
    title: 'Food Ordering Application',
    description:
      'Frontend-first application focused on modular architecture, dynamic search experience, and runtime optimizations for fast navigation.',
    highlights: ['Component-driven React architecture', 'Search with efficient state updates', 'Lazy loading with Suspense', 'Online/offline status detection'],
    stack: ['React.js', 'React Router', 'CSS3', 'Browser Network APIs'],
    github: 'https://github.com/busalatejaswi7-jpg',
    live: '#',
  },
]

export const experience = {
  company: 'Agentic AI Academy',
  role: 'AI Tools & Full Stack Development Intern',
  bullets: [
    'Built and enhanced MERN applications using AI-assisted workflows to accelerate delivery while preserving maintainable architecture.',
    'Leveraged OpenAI Codex, Claude, and Rocode to scaffold APIs, refine frontend modules, and resolve complex debugging scenarios.',
    'Applied prompt engineering to generate reusable API patterns, database schemas, and implementation templates.',
    'Contributed to rapid prototyping and scalable product development with a focus on automation and quality.',
  ],
}

export const certifications = ['Machine Learning — NPTEL', 'Namaste React — Akshay Saini']

export const achievements = [
  'Solved 50+ Data Structures and Algorithms problems across arrays, strings, and recursion.',
  'Attended technical workshops and webinars on modern full-stack engineering.',
  'Built and deployed multiple full-stack MERN applications independently.',
]
