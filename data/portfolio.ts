export const personal = {
  name: 'Busala Tejaswi',
  role: 'Full Stack Developer (MERN)',
  headline: 'Building reliable full-stack products with clean architecture and modern UX.',
  tagline:
    'Full Stack Developer with strong MERN foundations, focused on secure authentication, scalable APIs, and production-ready frontend systems.',
  email: 'busalatejaswi3@gmail.com',
  phone: '+91-9381979532',
  github: 'https://github.com/busalatejaswi7-jpg',
  linkedin: 'https://linkedin.com/in/tejaswi-b-009ba227b',
  location: 'Srikakulam, India',
  availability: 'Open to 2026 internships and junior software engineering roles',
}

export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'C', 'Java', 'Python (Basics)'] },
  { title: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'React Router', 'HTML5', 'CSS3'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Multer'] },
  { title: 'Databases', items: ['MongoDB', 'MongoDB Atlas', 'MySQL', 'SQL'] },
  { title: 'Concepts', items: ['OOP', 'DBMS', 'SDLC', 'API Integration', 'Authentication', 'Prompt Engineering'] },
  { title: 'Tools & Deployment', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Render', 'Vercel', 'Rocode', 'Codebuff'] },
]

export const projects = [
  {
    title: 'AI Career Intelligence Platform',
    description:
      'Full-stack product to track job applications, analyze skill gaps, and manage resumes with secure authentication and production deployment.',
    highlights: [
      'Implemented JWT + bcrypt authentication and protected user workflows',
      'Built CRUD APIs using Express.js + MongoDB Atlas',
      'Integrated resume upload with Multer',
      'Deployed frontend on Vercel and backend on Render',
    ],
    stack: ['MERN', 'JWT', 'Multer', 'MongoDB Atlas', 'Axios'],
    github: 'https://github.com/your-username/your-repo',
    live: 'https://ai-analyzer-kohl.vercel.app',
  },
  {
    title: 'Developer Hub Authentication System',
    description:
      'Role-based full-stack authentication platform with protected routes, admin tooling, and resilient client-server security workflows.',
    highlights: [
      'Designed User/Admin access control architecture',
      'Implemented JWT auth, Axios interceptors, and protected routes',
      'Built admin APIs for search, pagination, and account management',
      'Managed authentication state with React Context API',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT'],
    github: 'https://github.com/busalatejaswi7-jpg',
    live: 'https://frontend-pskx.onrender.com',
  },
  {
    title: 'Task Management Backend API',
    description:
      'Production-ready backend API emphasizing secure role-based authorization, ownership-driven CRUD, and scalable query operations.',
    highlights: [
      'Developed Admin/User authorization and ownership validation',
      'Implemented filtering, pagination, and sorting',
      'Added centralized error handling and express-validator middleware',
      'Deployed API with MongoDB Atlas integration on Render',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Render'],
    github: 'https://github.com/busalatejaswi7-jpg',
    live: 'https://task-manager-api-gl7e.onrender.com',
  },
  {
    title: 'Food Ordering Application',
    description:
      'Component-driven frontend application with responsive UX, dynamic search, and performance-focused React architecture.',
    highlights: [
      'Built modular UI architecture using React.js and React Router',
      'Implemented real-time search with efficient state updates',
      'Improved performance via lazy loading and Suspense',
      'Used Browser Network APIs for online/offline status detection',
    ],
    stack: ['React.js', 'React Router', 'CSS3', 'Browser Network APIs'],
    github: 'https://github.com/busalatejaswi7-jpg',
    live: '#',
  },
]

export const experience = {
  company: 'Agentic AI Academy',
  role: 'AI Tools & Full Stack Development Intern',
  summary:
    'Contributed to real-world MERN products while leveraging AI-assisted development for faster delivery, cleaner abstractions, and dependable production outcomes.',
  bullets: [
    'Accelerated full-stack feature delivery using OpenAI Codex, Claude, and Rocode workflows.',
    'Scaffolded backend APIs, improved frontend component systems, and debugged complex integration issues.',
    'Applied prompt engineering to generate reusable API patterns, data models, and coding templates.',
    'Built scalable, automation-ready solutions with focus on maintainability and shipping velocity.',
  ],
}

export const education = [
  'B.Tech in Electronics and Communication Engineering (2022 – 2026), CGPA: 8.01/10',
  'Pre-University Course (2020 – 2022), CGPA: 9.14/10',
]

export const certifications = ['Machine Learning — NPTEL', 'Namaste React — Akshay Saini']

export const achievements = [
  'Solved 50+ Data Structures and Algorithms problems across arrays, strings, and recursion.',
  'Attended technical workshops and webinars on full-stack engineering and emerging technologies.',
  'Built and deployed multiple full-stack MERN applications independently.',
]
