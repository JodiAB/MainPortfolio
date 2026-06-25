const TECH = {
  nextjs: { name: "Next.js", path: "/assets/logos/nextjs.svg" },
  react: { name: "React", path: "/assets/logos/react.svg" },
  reactNative: { name: "React Native", path: "/assets/logos/react.svg" },
  typescript: { name: "TypeScript", path: "/assets/logos/typescript.svg" },
  javascript: { name: "JavaScript", path: "/assets/logos/javascript.svg" },
  prisma: { name: "Prisma", path: "/assets/logos/prisma.svg" },
  postgresql: { name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
  tailwind: { name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
  shadcn: { name: "shadcn/ui", path: "/assets/logos/shadcn.svg" },
  appwrite: { name: "Appwrite", path: "/assets/logos/appwrite.svg" },
  nativewind: { name: "NativeWind", path: "/assets/logos/tailwindcss.svg" },
  zustand: { name: "Zustand", path: "/assets/logos/zustand.svg" },
  expo: { name: "Expo", path: "/assets/logos/expo.svg" },
  sentry: { name: "Sentry", path: "/assets/logos/sentry.svg" },
  gsap: { name: "GSAP", path: "/assets/logos/gsap.svg" },
  vite: { name: "Vite", path: "/assets/logos/vitejs.svg" },
  puter: { name: "Puter.js", path: "/assets/logos/puter.svg" },
  reactRouter: { name: "React Router", path: "/assets/logos/react-router.svg" },
  supabase: { name: "Supabase", path: "/assets/logos/supabase.svg" },
  stripe: { name: "Stripe", path: "/assets/logos/stripe.svg" },
  clerk: { name: "Clerk", path: "/assets/logos/Clerk.svg" },
  vapi: { name: "Vapi", path: "/assets/logos/vapi.svg" },
  betterAuth: { name: "Better Auth", path: "/assets/logos/better.svg" },
  neon: { name: "Neon PostgreSQL", path: "/assets/logos/neon.png" },
  drizzle: { name: "Drizzle ORM", path: "/assets/logos/drizzle.png" },
  inngest: { name: "Inngest", path: "/assets/logos/inngest.jpeg" },
  tiptap: { name: "TipTap", path: "/assets/logos/tiptap.svg" },
  vitest: { name: "Vitest", path: "/assets/logos/vitest.svg" },
  vercel: { name: "Vercel", path: "/assets/logos/vercel.svg" },
}

const buildTags = (keys) =>
  keys.map((key, index) => ({
    id: index + 1,
    ...TECH[key],
  }))

export const myProjects = [
  {
    id: 1,
    title: "OpsFlow",
    category: "Full-stack SaaS",
    featured: true,
    year: "2026",
    role: "Full Stack Developer",
    description:
      "A production-style SaaS operations workspace for managing projects, tasks, teams, reports, and workspace analytics.",
    problem:
      "Small teams often manage projects, tasks, reports, and members across disconnected tools, making it difficult to track progress, permissions, and workspace activity from one reliable place.",
    solution:
      "I built a full-stack operations workspace with authentication, workspace-scoped data, role-based permissions, project and task workflows, team management, rich report editing, PDF export, documentation, and a deployed live demo.",
    outcome:
      "Created a portfolio-ready SaaS product that demonstrates real-world architecture, protected workflows, relational data modeling, deployment readiness, and product polish beyond basic CRUD.",
    subDescription: [
      "Built with Next.js, TypeScript, Prisma, PostgreSQL, Tailwind CSS, TipTap, Vitest, and Vercel.",
      "Implemented authentication, protected routes, workspace-scoped data, invited member registration, and owner/admin/member role-based access.",
      "Added project management, task tracking, team invitations, role updates, workspace settings, dashboard analytics, and recent activity workflows.",
      "Built a rich text report editor with headings, formatting controls, tables, word count, page estimates, publishing, archiving, and print/PDF export.",
      "Prepared the project for portfolio review with product screenshots, a live Vercel deployment, README documentation, deployment notes, and a full case study.",
    ],
    architecture: [
      "Next.js App Router with server-rendered protected routes and client components where interactivity is needed.",
      "Prisma and PostgreSQL for relational workspace data across users, organizations, memberships, projects, tasks, reports, and activity logs.",
      "Server actions for authenticated mutations such as project creation, task updates, team management, workspace settings, and report saving.",
      "Reusable permission helpers for Owner/Admin/Member access rules, enforced server-side and reflected in the UI.",
      "TipTap JSON content persistence for reports, with browser print/PDF export for report output.",
    ],
    caseStudy: {
      overview:
        "OpsFlow was built as a realistic SaaS workspace to show how teams can manage operations from one dashboard. The focus was not just UI, but complete product workflows: authentication, scoped data, permissions, project/task management, team roles, reports, export, testing, and deployment.",
      keyFeatures: [
        "Credentials-based authentication and protected app routes.",
        "Workspace-scoped projects, tasks, reports, members, settings, and analytics.",
        "Owner/Admin/Member permission model with server-side enforcement.",
        "Project and task management with statuses, priorities, due dates, and assignees.",
        "Team invitation, role update, and member removal workflows.",
        "Rich text report editor with formatting, tables, word count, page estimates, publishing, archiving, and export.",
        "Multi-theme support and polished product documentation.",
      ],
      challenges: [
        "Migrating the app away from demo-only data into authenticated workspace-scoped data.",
        "Handling invited member registration without creating duplicate workspaces.",
        "Keeping permission checks secure by enforcing them in server actions, not only in the UI.",
        "Serializing and saving TipTap editor content safely between server and client boundaries.",
        "Preparing the app for deployment with Prisma migrations, environment variables, documentation, and screenshots.",
      ],
      improvements: [
        "Add email-based invitation links and password reset.",
        "Improve PDF export fidelity for complex layouts.",
        "Add report templates and richer activity logs.",
        "Add more automated integration tests.",
        "Introduce live collaboration for report editing.",
      ],
    },
    href: "https://ops-flow-kappa.vercel.app/",
    github: "https://github.com/JodiAB/OpsFlow",
    logo: "",
    image: "/assets/projects/screenshots/dashboard.png",
    screenshots: [
      "/assets/projects/screenshots/dashboard.png",
      "/assets/projects/screenshots/projects.png",
      "/assets/projects/screenshots/project-details.png",
      "/assets/projects/screenshots/tasks.png",
      "/assets/projects/screenshots/team.png",
      "/assets/projects/screenshots/reports.png",
      "/assets/projects/screenshots/report-editor.png",
      "/assets/projects/screenshots/report-export.png",
    ],
    tags: buildTags([
      "nextjs",
      "typescript",
      "prisma",
      "postgresql",
      "tailwind",
      "tiptap",
      "vitest",
      "vercel",
    ]),
  },
  {
    id: 2,
    title: "LMS SaaS App",
    category: "SaaS Platform",
    featured: true,
    year: "2025",
    role: "Full Stack Developer",
    description:
      "A modern LMS SaaS platform with secure authentication, subscription management, real-time learning flows, and AI voice tutoring.",
    problem:
      "Traditional LMS platforms can feel slow, static, and disconnected from modern subscription and interactive learning experiences.",
    solution:
      "I built a scalable learning platform with authentication, subscription handling, real-time database workflows, AI voice tutoring, and a responsive dashboard UI.",
    outcome:
      "Delivered a SaaS-style learning platform that demonstrates subscription architecture, authentication, real-time data, AI integration, and polished UI design.",
    subDescription: [
      "Built with Next.js 15 and TypeScript for scalability and performance.",
      "Integrated Clerk for authentication, subscriptions, and user management.",
      "Implemented Supabase for real-time database, storage, and session handling.",
      "Added Vapi AI voice agent for interactive tutoring with speech-to-text and text-to-speech.",
      "Used shadcn/ui with TailwindCSS for a modern, responsive UI.",
      "Added error tracking and performance monitoring with Sentry.",
    ],
    href: "https://joding-saas-app.vercel.app/",
    github: "",
    logo: "",
    image: "/assets/projects/saas.png",
    tags: buildTags([
      "nextjs",
      "typescript",
      "supabase",
      "stripe",
      "clerk",
      "vapi",
      "tailwind",
      "shadcn",
      "sentry",
    ]),
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    category: "AI Tool",
    featured: true,
    year: "2025",
    role: "Frontend Developer",
    description:
      "An AI-powered resume analysis platform that helps users understand how well their resume aligns with job requirements.",
    problem:
      "Job seekers often struggle to understand whether their resumes match a role, which leads to poor targeting and missed opportunities.",
    solution:
      "I built an AI-driven platform that analyzes resumes, compares them to job requirements, and gives instant match feedback to improve job search strategy.",
    outcome:
      "Created a practical AI tool with authentication, file handling, state management, and a clean user experience for resume review.",
    subDescription: [
      "Built a modern web app using React 19, TypeScript, and Zustand for global state control.",
      "Integrated Puter.js for user authentication, resume upload, and secure file storage.",
      "Implemented AI logic to evaluate and match resumes to job roles using keyword and context extraction.",
      "Designed a clean, modular UI with reusable components for scalable feature expansion.",
    ],
    href: "https://joding-resume-analyzer.vercel.app/auth?next=/",
    github: "",
    logo: "",
    image: "/assets/projects/resume ai.jpg",
    tags: buildTags(["react", "typescript", "zustand", "puter", "reactRouter"]),
  },
  {
    id: 4,
    title: "AI Stock Market App",
    category: "Finance Dashboard",
    featured: false,
    year: "2025",
    role: "Full Stack Developer",
    description:
      "An AI-driven stock trading dashboard for tracking live stock data, smart alerts, market insights, and personalized watchlists.",
    problem:
      "Retail traders often lack personalized tools for tracking live market data, managing watchlists, and receiving timely alerts.",
    solution:
      "I developed a real-time trading dashboard with event-driven alerts, watchlists, admin tools, market updates, and AI sentiment analysis.",
    outcome:
      "Built a finance-focused dashboard that demonstrates data-heavy UI, event workflows, admin functionality, and modern SaaS patterns.",
    subDescription: [
      "Developed a stock dashboard with live price tracking, watchlists, and smart alerts.",
      "Built an admin panel to manage stocks, publish financial news, and monitor platform activity.",
      "Integrated event-driven workflows to automate alerts, daily summaries, earnings notifications, and sentiment analysis.",
      "Used Next.js for performance, Shadcn UI for consistency, and Inngest for scalable event handling.",
    ],
    href: "https://stock-app-uhvi.vercel.app/",
    github: "",
    logo: "",
    image: "/assets/projects/Stockapp.png",
    tags: buildTags(["nextjs", "typescript", "shadcn", "betterAuth", "inngest", "tailwind"]),
  },
  {
    id: 5,
    title: "Nike-style eCommerce",
    category: "eCommerce",
    featured: false,
    year: "2025",
    role: "Full Stack Developer",
    description:
      "A sleek eCommerce platform inspired by Nike, featuring product browsing, cart functionality, authentication, and secure checkout.",
    problem:
      "Many small eCommerce sites suffer from slow performance, weak product UX, and unreliable checkout flows.",
    solution:
      "I built a high-performance storefront with secure Stripe payments, clean product pages, authentication, and database-backed cart workflows.",
    outcome:
      "Created a polished eCommerce experience that demonstrates product UI, payment integration, authentication, and database architecture.",
    subDescription: [
      "Developed with Next.js 15 and TypeScript for robust performance.",
      "Used Better Auth for secure authentication and user management.",
      "Implemented Stripe for secure payment processing and checkout.",
      "Built with Neon PostgreSQL and Drizzle ORM for scalable database operations.",
      "Styled with TailwindCSS for a modern, responsive UI.",
    ],
    href: "https://joding-ecomm.vercel.app/",
    github: "",
    logo: "",
    image: "/assets/projects/nike.png",
    tags: buildTags(["nextjs", "typescript", "tailwind", "betterAuth", "neon", "drizzle"]),
  },
  {
    id: 6,
    title: "Food Ordering App",
    category: "Mobile App",
    featured: false,
    year: "2025",
    role: "Mobile Developer",
    description:
      "A mobile food delivery app with a smooth user experience, secure authentication, real-time data, cart workflows, and category browsing.",
    problem:
      "Many food ordering apps lack reliable real-time updates and secure authentication, causing cart loss, delays, and user drop-off.",
    solution:
      "I implemented secure Google authentication, real-time Appwrite database updates, category filtering, search, and an optimized cart flow.",
    outcome:
      "Built a mobile-first ordering experience that demonstrates authentication, backend integration, global state management, and responsive mobile UI.",
    subDescription: [
      "Integrated Google Auth and Appwrite for secure login and database functionality.",
      "Implemented cart functionality, category filtering, and a search system.",
      "Used Zustand and NativeWind for global state management and styling.",
      "Tested performance with Expo and Sentry for monitoring crashes and behavior.",
    ],
    href: "https://github.com/JodiAB/foody",
    github: "https://github.com/JodiAB/foody",
    logo: "",
    image: "/assets/projects/food.jpg",
    tags: buildTags(["reactNative", "typescript", "appwrite", "nativewind", "zustand", "expo", "sentry"]),
  },
  {
    id: 7,
    title: "Cocktail Animation Website",
    category: "Frontend Animation",
    featured: false,
    year: "2025",
    role: "Frontend Developer",
    description:
      "A visually rich cocktail recipe website with GSAP animations, SplitText reveals, parallax effects, scroll-based interactions, and a custom carousel.",
    problem:
      "Many recipe websites feel static and uninspiring, resulting in low engagement and short session times.",
    solution:
      "I created a visually immersive frontend using GSAP animations, parallax effects, scroll-triggered reveals, and a polished responsive layout.",
    outcome:
      "Built a strong frontend showcase that demonstrates animation timing, interaction design, visual hierarchy, and responsive UI polish.",
    subDescription: [
      "Built with React, GSAP, and Vite for fast and interactive frontend performance.",
      "Designed immersive UI with TailwindCSS and fluid animation flow.",
      "Implemented parallax scrolling and scroll-triggered content reveals.",
      "Created a custom slider for featured cocktails and categories.",
    ],
    href: "https://gsap-landing-eight.vercel.app/",
    github: "",
    logo: "",
    image: "/assets/projects/landing.jpg",
    tags: buildTags(["react", "gsap", "tailwind", "vite"]),
  },
  {
id: 8,
title: "FuelWise SA",
category: "SaaS / Fintech Tool",
featured: true,
year: "2026",
role: "Full Stack Developer",
description:
"A South African fuel-cost platform that helps drivers, delivery workers, households, and small fleets calculate, plan, and manage fuel expenses using local fuel price data.",
problem:
"South African drivers face frequent fuel price changes, but most people do not know how those changes affect their monthly budget, trip costs, delivery profit, or vehicle ownership costs.",
solution:
"I built FuelWise SA as a production-ready fuel planning platform with SA fuel price data, calculators, account features, saved vehicles, fuel alerts, fleet reporting, nearby stations, SEO pages, and launch-ready safety checks.",
outcome:
"Created a practical public web app with real production deployment, Supabase-backed data, Google authentication, cached fuel prices, test coverage, smoke tests, SEO setup, and growth-focused tools for South African users.",
subDescription: [
"Built with React, TypeScript, Vite, Supabase, TailwindCSS, Vitest, and Vercel.",
"Implemented fuel calculators for full tank costs, monthly budgets, trip costs, delivery driver profit, travel claims, transport fare impact, car ownership, and fleet fuel reports.",
"Integrated Supabase for Google authentication, saved vehicles, saved calculations, cached fuel prices, fuel alert preferences, and subscription-ready account data.",
"Added production API endpoints for fuel price syncing, alert dry-runs, unsubscribe handling, and safe health checks with defensive error handling.",
"Prepared the app for launch with sitemap and robots.txt setup, Google Search Console verification, privacy/legal pages, release checklists, and automated test/smoke coverage.",
],
architecture: [
"React and Vite frontend with route-based pages for calculators, fuel prices, nearby stations, pricing, account features, and fleet reports.",
"Supabase authentication and database tables for profiles, vehicles, saved calculations, cached fuel prices, alert preferences, and subscription-ready data.",
"Serverless Vercel API routes for syncing SA fuel prices, sending alert dry-runs, unsubscribe handling, billing foundations, and production health checks.",
"Fuel price fallback flow using cached Supabase data first, live API fallback where available, and manual/user-input pricing when needed.",
"Growth and launch infrastructure including SEO metadata, sitemap, robots.txt, Search Console documentation, release checklist, and marketing copy planning.",
],
caseStudy: {
overview:
"FuelWise SA was built to solve a real local problem: helping South Africans understand what petrol and diesel prices mean for their wallets. The project focuses on practical calculators, local pricing logic, account-based saving, fleet reporting, alert infrastructure, and production launch readiness.",
keyFeatures: [
"SA fuel price calculator tools for commuters, families, delivery drivers, and small fleets.",
"Cached fuel price sync flow using Supabase and a protected Vercel API endpoint.",
"Google authentication with account features for saved vehicles, saved calculations, and alert preferences.",
"Delivery driver profit calculator and fleet reporting tools with cost-per-kilometre insights.",
"Nearby stations beta with clear regional estimate and station-price trust disclaimers.",
"Email alert infrastructure with dry-run safety, unsubscribe flow, and real-send feature flags.",
"SEO and launch setup including sitemap, robots.txt, Google Search Console checklist, privacy page, and production release checklist.",
],
challenges: [
"Designing fuel calculations that stay accurate, understandable, and honest for different user types.",
"Handling South African inland/coastal pricing differences and unavailable fuel combinations such as Petrol 93 coastal.",
"Keeping production serverless endpoints safe with secrets, feature flags, dry-runs, and defensive JSON error handling.",
"Balancing free public calculators with account-based features, future subscriptions, and launch safety.",
"Preparing the app for real users with testing, smoke tests, Search Console setup, privacy notes, and release documentation.",
],
improvements: [
"Add Fuel Shock Share Cards so users can share how monthly fuel price changes affect their budget.",
"Upgrade delivery calculations into Driver Profit Radar with accept/reject trip verdicts.",
"Add FuelWise Coach missions for weekly savings goals and shareable progress.",
"Improve community station price reporting with confidence scores and moderation.",
"Add manual fuel receipt logs and later OCR-based receipt scanning.",
],
},
href: "https://fuelwise-sa.vercel.app/",
github: "",
logo: "",
image: "/assets/projects/homepage.png",
screenshots: [
"/assets/projects/fuelwise-sa/homepage.png",
"/assets/projects/fuelwise-sa/fuel-prices.png",
"/assets/projects/fuelwise-sa/calculator.png",
"/assets/projects/fuelwise-sa/nearby-stations.png",
"/assets/projects/fuelwise-sa/fleet-reports.png",
"/assets/projects/fuelwise-sa/account.png",
],
tags: buildTags([
"react",
"typescript",
"vite",
"supabase",
"tailwind",
"vitest",
"stripe",
"vercel",
]),
},

]

export const mySocials = [
  {
    name: "WhatsApp",
    href: "0782096121",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jodi-abrahams/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/theejodas?utm_source=qr&igsh=MXBqeWthMGhxN20xOA==",
    icon: "/assets/socials/instagram.svg",
  },
]

export const experiences = [
  {
    title: "Freelance Full Stack Developer",
    job: "Self-Employed",
    date: "2020 - Present",
    logo: "/assets/logos/freelance.jpg",
    contents: [
      "Built and deployed responsive websites, dashboards, and web applications for local businesses and personal product ideas.",
      "Developed SaaS-style applications using React, Next.js, TypeScript, SQL databases, authentication, and modern UI systems.",
      "Created a cross-platform food ordering app using React Native, Appwrite, Zustand, and Expo for mobile-first user experiences.",
      "Integrated frontend applications with backend services, databases, authentication providers, payment systems, and third-party APIs.",
      "Used Git, GitHub, Vercel, and CI-style workflows to manage code, deployment, and project delivery.",
      "Translated product ideas and Figma-style layouts into responsive, accessible, mobile-first interfaces.",
    ],
  },
  {
    title: "Web Developer Intern",
    job: "Life Choices Studio",
    date: "2024",
    logo: "/assets/logos/life.jpg",
    contents: [
      "Developed a WordPress eCommerce site for a fruit and veg store using SEO and responsive design best practices.",
      "Led daily standups and sprint reviews as Scrum Master, improving team communication and delivery rhythm.",
      "Designed responsive layouts and converted them into functional WordPress pages and content sections.",
      "Reduced image load impact through optimization strategies and improved page performance.",
    ],
  },
  {
    title: "Support Engineer",
    job: "Securicom",
    date: "2022 - 2024",
    logo: "/assets/logos/securicom.jpg",
    contents: [
      "Blocked phishing and spam emails across multiple domains to improve user security and reduce business risk.",
      "Provided support for system access, email setup, account issues, and IT incidents through a ticketing workflow.",
      "Monitored server-side infrastructure and escalated technical issues where required.",
      "Strengthened troubleshooting, communication, and production support skills in a real business environment.",
    ],
  },
  {
    title: "Junior Network Technician (Volunteer)",
    job: "Cape Peninsula University of Technology",
    date: "2017",
    logo: "/assets/logos/cput.jpg",
    contents: [
      "Installed routers, switches, and wireless access points across campus buildings.",
      "Assisted with LAN setup and resolved basic connectivity issues for staff and students.",
      "Supported network engineers during infrastructure upgrades and learned practical networking fundamentals.",
    ],
  },
]

export const reviews = [
  {
    name: "Portfolio Review",
    username: "Full-stack focus",
    body: "The strongest projects demonstrate practical SaaS workflows, authentication, dashboards, role-based access, and deployment-ready thinking.",
    img: "https://robohash.org/fullstack",
  },
  {
    name: "Project Quality",
    username: "Product polish",
    body: "OpsFlow stands out because it feels like a real product, with workspace data, permissions, reports, exports, screenshots, and documentation.",
    img: "https://robohash.org/product",
  },
  {
    name: "Technical Growth",
    username: "Architecture",
    body: "The portfolio shows growth from frontend animation and mobile apps into more complete full-stack systems with databases and server-side logic.",
    img: "https://robohash.org/architecture",
  },
  {
    name: "Recruiter Signal",
    username: "Hiring ready",
    body: "Live demos, GitHub links, case studies, and clear problem-solution explanations make the projects easier to evaluate quickly.",
    img: "https://robohash.org/recruiter",
  },
]
