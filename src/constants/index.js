export const myProjects = [
  {
    id: 1,
    title: "Food Ordering App",
    description:
      "A mobile food delivery app with a smooth user experience, secure backend, and real-time data. Built using React Native, TypeScript, and Appwrite.",
    problem:
      "Many food ordering platforms lack real-time updates and secure authentication, causing delays, cart loss, and user drop-off.",
    solution:
      "I implemented real-time database updates, secure Google authentication, and an optimized cart flow to enhance reliability and UX.",
    subDescription: [
      "Integrated Google Auth and Appwrite for secure login and database functionality.",
      "Implemented cart functionality, category filtering, and a search system.",
      "Used Zustand and NativeWind for global state management and styling.",
      "Tested performance with Expo and Sentry for monitoring crashes and behavior."
    ],
    href: "https://github.com/JodiAB/foody",
    logo: "",
    image: "/assets/projects/food.jpg",
    tags: [
      { id: 1, name: "React Native", path: "/assets/logos/react.svg" },
      { id: 2, name: "Appwrite", path: "/assets/logos/appwrite.svg" },
      { id: 3, name: "NativeWind", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Zustand", path: "/assets/logos/zustand.svg" },
      { id: 5, name: "Expo", path: "/assets/logos/expo.svg" },
      { id: 6, name: "Sentry", path: "/assets/logos/sentry.svg" }
    ],
  },
  {
    id: 2,
    title: "Cocktail Animation Website",
    description:
      "Stylish cocktail recipe site powered by React and GSAP. Featuring SplitText reveals, scroll-based animations, parallax effects, and a custom carousel.",
    problem:
      "Many recipe websites feel static and uninspiring, resulting in low engagement and short session times.",
    solution:
      "I created a visually rich and interactive UI with GSAP animations and parallax effects to make the browsing experience immersive and memorable.",
    subDescription: [
      "Built with React, GSAP, and Vite for fast and interactive frontend performance.",
      "Designed immersive UI with TailwindCSS and fluid animation flow.",
      "Implemented parallax scrolling and scroll-triggered content reveals.",
      "Created a custom slider for featured cocktails and categories."
    ],
    href: "https://gsap-landing-eight.vercel.app/",
    logo: "",
    image: "/assets/projects/landing.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "GSAP", path: "/assets/logos/gsap.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Vite", path: "/assets/logos/vitejs.svg" }
    ],
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    description:
      "AI-powered resume parsing platform built with React and Puter.js. Features smart candidate-job matching, clean UI, and real-time resume handling with seamless authentication and state management.",
    problem:
      "Job seekers often struggle to understand how well their resumes align with job requirements, leading to poor targeting and missed opportunities.",
    solution:
      "I built an AI-driven platform that analyzes resumes and provides instant match feedback, making the job search more strategic and efficient.",
    subDescription: [
      "Built a modern web app using React 19, TypeScript, and Zustand for global state control.",
      "Integrated Puter.js for user authentication, resume upload, and secure file storage.",
      "Implemented AI logic to evaluate and match resumes to job roles using keyword/context extraction.",
      "Designed a clean, modular UI with reusable components for scalable feature expansion."
    ],
    href: "https://joding-resume-analyzer.vercel.app/auth?next=/",
    logo: "",
    image: "/assets/projects/resume ai.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "Zustand", path: "/assets/logos/zustand.svg" },
      { id: 4, name: "Puter.js", path: "/assets/logos/puter.svg" },
      { id: 5, name: "React router", path: "/assets/logos/react-router.svg" }
    ],
  },
  {
    id: 4,
    title: "LMS SaaS App",
    description:
      "A modern LMS SaaS platform built with Next.js, Supabase, and Stripe, featuring secure authentication, subscription management, and real-time learning experiences.",
    problem:
      "Traditional LMS platforms are slow to update content and lack real-time interaction features.",
    solution:
      "I built a scalable platform with Supabase real-time updates, AI voice tutoring, and secure subscriptions using Clerk and Stripe.",
    subDescription: [
      "Built with Next.js 15 and TypeScript for scalability and performance.",
      "Integrated Clerk for authentication, subscriptions, and user management.",
      "Implemented Supabase for real-time database, storage, and session handling.",
      "Added Vapi AI voice agent for interactive tutoring with speech-to-text and text-to-speech.",
      "Used shadcn/ui with TailwindCSS for a modern, responsive UI.",
      "Error tracking and performance monitoring with Sentry."
    ],
    href: "https://joding-saas-app.vercel.app/",
    logo: "",
    image: "/assets/projects/saas.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "Supabase", path: "/assets/logos/supabase.svg" },
      { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
      { id: 4, name: "Clerk", path: "/assets/logos/Clerk.svg" },
      { id: 5, name: "Vapi", path: "/assets/logos/vapi.svg" },
      { id: 6, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 7, name: "shadcn/ui", path: "/assets/logos/shadcn.svg" },
      { id: 8, name: "Sentry", path: "/assets/logos/sentry.svg" },
      { id: 9, name: "TypeScript", path: "/assets/logos/typescript.svg" }
    ],
  },
  {
    id: 5,
    title: "Nike-style eCommerce",
    description:
      "A sleek eCommerce platform inspired by Nike, built with Next.js, TypeScript, and Devin AI, featuring dynamic product pages, cart functionality, and seamless checkout with Stripe payments.",
    problem:
      "Many small eCommerce sites suffer from poor UX, slow performance, and unreliable checkouts.",
    solution:
      "I built a high-performance platform with secure Stripe payments, clean UI, and real-time cart updates using Drizzle ORM and Neon DB.",
    subDescription: [
      "Developed with Next.js 15 and TypeScript for robust performance.",
      "Integrated Devin AI for enhanced development workflows and automation.",
      "Used Better Auth for secure authentication and user management.",
      "Implemented Stripe for secure payment processing and checkout.",
      "Built with Neon PostgreSQL and Drizzle ORM for scalable database operations.",
      "Styled with TailwindCSS for a modern, responsive UI."
    ],
    href: "https://joding-ecomm.vercel.app/",
    logo: "",
    image: "/assets/projects/nike.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 5, name: "Better Auth", path: "/assets/logos/better.svg" },
      { id: 7, name: "Neon PostgreSQL", path: "/assets/logos/neon.png" },
      { id: 8, name: "Drizzle ORM", path: "/assets/logos/drizzle.png" }
    ]
  },
  {
    id: 6,
    title: "AI Stock Market App",
    description:
      "A next-gen, AI-driven stock trading platform built with Next.js, Shadcn, Better Auth, and Inngest. It lets users track live stock data, set alerts, explore market insights, and manage personalized watchlists.",
    problem:
      "Retail traders often lack personalized tools to manage alerts and analyze real-time stock data efficiently.",
    solution:
      "I developed a real-time trading dashboard with event-driven alerts, AI sentiment analysis, and a clean, responsive UI.",
    subDescription: [
      "Developed a modern stock trading dashboard with live price tracking, watchlists, and smart alerts.",
      "Built an admin panel to manage stocks, publish financial news, and monitor platform activity.",
      "Integrated event-driven workflows to automate alerts, daily summaries, earnings notifications, and sentiment analysis.",
      "Utilized Next.js for performance, Shadcn UI for design consistency, and Inngest for scalable event handling."
    ],
    href: "https://stock-app-uhvi.vercel.app/",
    logo: "",
    image: "/assets/projects/Stockapp.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "Shadcn", path: "/assets/logos/shadcn.svg" },
      { id: 3, name: "Better Auth", path: "/assets/logos/better.svg" },
      { id: 4, name: "Inngest", path: "/assets/logos/inngest.jpeg" },
      { id: 5, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 6, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" }
    ]
  }
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "0782096121",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/jodi-abrahams/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/theejodas?utm_source=qr&igsh=MXBqeWthMGhxN20xOA==",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Lead Full Stack Developer",
    job: "Crunchtime Deliveries",
    date: "2024 - Present",
    logo: "/assets/logos/crunchtime.jpg", // Replace with actual path
    contents: [
      "Built and maintained a multi-role food delivery platform for vendors, customers, and admins using React, Node.js, and Appwrite.",
      "Integrated secure Payfast payments and implemented real-time order tracking features.",
      "Designed scalable database architecture with Appwrite to handle 500+ concurrent users.",
      "Collaborated with UI/UX designers and QA teams within Agile sprints to deliver production-ready features.",
      "Applied performance and DevOps best practices to ensure fast, secure deployments.",
    ],
  },
  {
    title: "Web Developer Intern",
    job: "Life Choices Studio",
    date: "2024",
    logo: "/assets/logos/life.jpg", // Replace with actual path
    contents: [
      "Developed a WordPress e-commerce site for a fruit and veg store using SEO best practices.",
      "Led daily standups and sprint reviews as Scrum Master, fostering team communication.",
      "Designed responsive Figma layouts and converted them into WordPress themes.",
      "Reduced site image load times by 40% through optimization strategies.",
    ],
  },
  {
    title: "Support Engineer",
    job: "Securicom",
    date: "2022 - 2024",
    logo: "/assets/logos/securicom.jpg", // Replace with actual path
    contents: [
      "Blocked phishing/spam emails across multiple domains and secured user email environments.",
      "Provided support for system access, mail setup, and IT incidents via ticketing system.",
      "Monitored server-side infrastructure and responded to escalated technical issues.",
    ],
  },
  {
    title: "Junior Network Technician (Volunteer)",
    job: "Cape Peninsula University of Technology",
    date: "2017",
    logo: "/assets/logos/cput.jpg", // Replace with actual path
    contents: [
      "Installed routers, switches, and wireless access points across campus buildings.",
      "Assisted with LAN setup and resolved basic connectivity issues for staff and students.",
      "Supported network engineers during major infrastructure upgrades.",
    ],
  },
];

export const reviews = [
  { name: "Thabo M.", username: "@thabom", body: "Honestly, this blew me away. Didn’t expect something this good. Big up!", img: "https://robohash.org/thabo" },
  { name: "Lerato P.", username: "@leratop", body: "Yo, this is brilliant. It just works and looks amazing. Love it!", img: "https://robohash.org/lerato" },
  { name: "Sipho D.", username: "@siphod", body: "I'm really impressed. You can see real effort went into this. Well done.", img: "https://robohash.org/sipho" },
  { name: "Naledi K.", username: "@naledik", body: "This is hands down one of the cleanest and most useful things I’ve seen online.", img: "https://robohash.org/naledi" },
  { name: "Zane E.", username: "@zanee", body: "From the layout to the user experience — everything is on point. Mad respect!", img: "https://robohash.org/zane" },
  { name: "Anele R.", username: "@aneler", body: "Exceeded my expectations, seriously. Sleek, smooth, and just works.", img: "https://robohash.org/anele" },
  { name: "Karabo N.", username: "@karabon", body: "Honestly, I’d recommend this to anyone. Professional and super clean.", img: "https://robohash.org/karabo" },
  { name: "Jody A.", username: "@jodya", body: "So glad I gave this a shot. Everything just feels polished and well thought out.", img: "https://robohash.org/jody" },
];
