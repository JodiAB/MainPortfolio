export const myProjects = [
  // {
  //   id: 4,
  //   title: "GTA VI Website Clone",
  //   description:
  //     "Scroll-driven cinematic website inspired by the GTA VI trailer. Built using React, TailwindCSS, and GSAP to create a responsive, animation-rich experience with parallax, image masking, and pinned sections.",
  //   subDescription: [
  //     "Crafted interactive, scroll-synced animations using GSAP and ScrollTrigger.",
  //     "Implemented image masking and parallax transitions for a cinematic UX.",
  //     "Ensured full responsiveness across devices with TailwindCSS and React best practices.",
  //     "Used video syncing and pinned sections to mimic Rockstar’s trailer reveal effects."
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/gta6.jpg",
  //   tags: [
  //     { id: 1, name: "React", path: "/assets/logos/react.svg" },
  //     { id: 2, name: "GSAP", path: "/assets/logos/gsap.svg" },
  //     { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
  //     { id: 4, name: "React 19", path: "/assets/logos/react.svg" }
  //   ],
  // },
  {
    id: 1,
    title: "Food Ordering App",
    description:
      "A mobile food delivery app with a smooth user experience, secure backend, and real-time data. Built using React Native, TypeScript, and Appwrite.",
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
  id: 3, // Adjust based on order in your array
  title: "AI Resume Analyzer",
  description:
    "AI-powered resume parsing platform built with React and Puter.js. Features smart candidate-job matching, clean UI, and real-time resume handling with seamless authentication and state management.",
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
  ]
}

{
  id: 5,
  title: "LMS SaaS App",
  description:
    "A modern LMS SaaS platform built with Next.js, Supabase, and Stripe, featuring secure authentication, subscription management, and real-time learning experiences. The app also integrates Vapi’s AI voice agent to enable interactive, conversational tutoring sessions.",
  subDescription: [
    "Built with Next.js 15 and TypeScript for scalability and performance.",
    "Integrated Clerk for authentication, subscriptions, and user management.",
    "Implemented Supabase for real-time database, storage, and session handling.",
    "Added Vapi AI voice agent for interactive tutoring with speech-to-text and text-to-speech.",
    "Used shadcn/ui with TailwindCSS for a modern, responsive UI.",
    "Error tracking and performance monitoring with Sentry."
  ],
  href: "joding-saas-app.vercel.app", // update with your repo/demo if different
  logo: "",
  image: "/assets/projects/saas.png", // update path if you have a banner/preview image
  tags: [
    { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
    { id: 2, name: "Supabase", path: "/assets/logos/supabase.svg" },
    { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
    { id: 4, name: "Clerk", path: "/assets/logos/clerk.svg" },
    { id: 5, name: "Vapi", path: "/assets/logos/vapi.svg" },
    { id: 6, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    { id: 7, name: "shadcn/ui", path: "/assets/logos/shadcn.svg" },
    { id: 8, name: "Sentry", path: "/assets/logos/sentry.svg" },
    { id: 9, name: "TypeScript", path: "/assets/logos/typescript.svg" }
  ],
}

  // {
  //   id: 4,
  //   title: "Travel Agency Dashboard",
  //   description:
  //     "An admin dashboard for a travel booking app built with React and React Router v7. Includes Syncfusion components, charts, and Gemini AI integration.",
  //   subDescription: [
  //     "Implemented routing and protected routes using React Router v7.",
  //     "Built interactive charts and table views using Syncfusion components.",
  //     "Used Gemini AI to enhance destination recommendations and customer support.",
  //     "Connected to Appwrite for backend data and authentication."
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/travel-dashboard.jpg",
  //   tags: [
  //     { id: 1, name: "React", path: "/assets/logos/react.svg" },
  //     { id: 2, name: "React Router v7", path: "/assets/logos/rr.svg" },
  //     { id: 3, name: "Appwrite", path: "/assets/logos/appwrite.svg" },
  //     { id: 4, name: "Gemini AI", path: "/assets/logos/gemini.svg" }
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "LMS SaaS App",
  //   description:
  //     "A learning management SaaS platform with authentication, payments, and AI voice interactions. Built using Next.js, Supabase, Stripe, and Vapi AI.",
  //   subDescription: [
  //     "Handled subscriptions and payments via Stripe and Supabase integration.",
  //     "Integrated Vapi AI voice assistant for interactive learning support.",
  //     "Built responsive UI with TailwindCSS and Next.js 13+ app router.",
  //     "Used Sentry for error monitoring and session tracking."
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/saas-app.jpg",
  //   tags: [
  //     { id: 1, name: "Next.js", path: "/assets/logos/Next.svg" },
  //     { id: 2, name: "Supabase", path: "/assets/logos/supabase.svg" },
  //     { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
  //     { id: 4, name: "Vapi AI", path: "/assets/logos/vapi.png" },
  //     { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
  //     { id: 6, name: "Sentry", path: "/assets/logos/sentry.svg" }
  //   ],
  // },
// {
//     id: 6,
//     title: "React Movies App",
//     description:
//       "A hands-on React crash course app demonstrating real-world concepts from JSX to hooks, built with a modern UI and responsive TailwindCSS v4 layout.",
//     subDescription: [
//       "Built a real-world movie browsing UI with React 19 and functional components.",
//       "Used hooks like useState, useEffect, and conditional rendering for dynamic user interactions.",
//       "Implemented responsive layouts and utility-first styling using TailwindCSS v4.",
//       "Provided a simple search and display mechanism for listing and filtering movie data."
//     ],
//     href: "",
//     logo: "",
//     image: "/assets/projects/react-movies.jpg",
//     tags: [
//       { id: 1, name: "React", path: "/assets/logos/react.svg" },
//       { id: 2, name: "TailwindCSS v4", path: "/assets/logos/tailwindcss.svg" },
//       { id: 3, name: "React 19", path: "/assets/logos/react.svg" }
//     ],
//   },
 



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
    contents: [
      "Installed routers, switches, and wireless access points across campus buildings.",
      "Assisted with LAN setup and resolved basic connectivity issues for staff and students.",
      "Supported network engineers during major infrastructure upgrades.",
    ],
  },
];

export const reviews = [
  {
    name: "Thabo M.",
    username: "@thabom",
    body: "Honestly, this blew me away. Didn’t expect something this good. Big up!",
    img: "https://robohash.org/thabo",
  },
  {
    name: "Lerato P.",
    username: "@leratop",
    body: "Yo, this is brilliant. It just works and looks amazing. Love it!",
    img: "https://robohash.org/lerato",
  },
  {
    name: "Sipho D.",
    username: "@siphod",
    body: "I'm really impressed. You can see real effort went into this. Well done.",
    img: "https://robohash.org/sipho",
  },
  {
    name: "Naledi K.",
    username: "@naledik",
    body: "This is hands down one of the cleanest and most useful things I’ve seen online.",
    img: "https://robohash.org/naledi",
  },
  {
    name: "Zane E.",
    username: "@zanee",
    body: "From the layout to the user experience — everything is on point. Mad respect!",
    img: "https://robohash.org/zane",
  },
  {
    name: "Anele R.",
    username: "@aneler",
    body: "Exceeded my expectations, seriously. Sleek, smooth, and just works.",
    img: "https://robohash.org/anele",
  },
  {
    name: "Karabo N.",
    username: "@karabon",
    body: "Honestly, I’d recommend this to anyone. Professional and super clean.",
    img: "https://robohash.org/karabo",
  },
  {
    name: "Jody A.",
    username: "@jodya",
    body: "So glad I gave this a shot. Everything just feels polished and well thought out.",
    img: "https://robohash.org/jody",
  },
];
