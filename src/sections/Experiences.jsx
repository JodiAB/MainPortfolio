import { Timeline } from "../components/Timeline";

const experiences = [
  {
    title: "Freelance Front-end / Full Stack Developer",
    job: "Independent / Remote",
    date: "Jan 2020 – Present",
    note: "Part-time alongside employed roles; full-time since Apr 2026",
    logo: "/assets/logos/freelance.jpg",
    contents: [
      "Own end-to-end delivery of responsive websites and web applications using JavaScript, TypeScript, React, Next.js, HTML5, CSS3, and Tailwind CSS.",
      "Turn product requirements and Figma designs into polished, reusable, mobile-first interfaces with consistent responsive behaviour.",
      "Build and integrate REST APIs, authentication, payments, real-time data, relational backends, and third-party services.",
      "Manage Git and GitHub workflows, deployments, debugging, testing, and production fixes from implementation through release.",
    ],
  },
  {
    title: "Contract Full Stack Developer",
    job: "Transhumanity",
    date: "Nov 2025 – Apr 2026",
    logo: "/assets/logos/freelance.jpg",
    contents: [
      "Delivered production frontend work across a SaaS reporting platform, including report editor, report manager, PDF/export, map snapshot, and content-library workflows.",
      "Owned improvements to complex rich-text editor behaviour, including toolbar state, selection persistence, undo/redo history, editor preferences, page-count indicators, and markdown support.",
      "Shipped report-management features covering folder/report cards, report counts, navigation fixes, metadata handling, and trash/archive workflows.",
      "Improved PDF and report-export quality and strengthened frontend reliability with automated tests, debugging, pull-request review, rebasing, and conflict resolution.",
    ],
  },
  {
    title: "Full Stack Developer",
    job: "Crunchtime Deliveries",
    date: "Jun 2024 – Jun 2025",
    logo: "/assets/logos/freelance.jpg",
    contents: [
      "Delivered responsive web and mobile interfaces using React, Next.js, JavaScript/TypeScript, and React Native for a SaaS-style delivery platform.",
      "Built real-time tracking, secure payment integration, and multi-role user workflows for customers, drivers, and administrators.",
      "Connected frontend features to backend services and APIs while supporting production rollouts under tight delivery deadlines.",
      "Worked closely with designers and backend developers to turn requirements into reusable, responsive, cross-device UI components.",
    ],
  },
  {
    title: "Web Developer Intern",
    job: "Life Choices Studio",
    date: "Apr 2024 – Jun 2024",
    logo: "/assets/logos/life.jpg",
    contents: [
      "Developed a responsive WordPress e-commerce template using HTML/CSS-based workflows and SEO-optimized imagery for a retail client.",
      "Translated design requirements into responsive layouts and improved page performance by reducing image-load impact.",
      "Acted as Scrum Master by facilitating stand-ups and sprint reviews while coordinating work across the project team.",
    ],
  },
  {
    title: "Support Engineer",
    job: "Securicom",
    date: "Feb 2022 – Mar 2023",
    logo: "/assets/logos/securicom.jpg",
    contents: [
      "Provided first-line technical support to enterprise clients through phone, email, and remote sessions, diagnosing software, network, and email-security issues.",
      "Logged, tracked, prioritized, and resolved support tickets within SLA timeframes while maintaining clear technical documentation.",
      "Collaborated with developers, system administrators, and internal teams to investigate recurring issues and document practical solutions.",
    ],
  },
  {
    title: "Junior Network Technician (Volunteer)",
    job: "Cape Peninsula University of Technology",
    date: "Dec 2017 – Jan 2019",
    logo: "/assets/logos/cput.jpg",
    contents: [
      "Supported physical network setups including routers, switches, and wireless access points across campus buildings.",
      "Resolved basic connectivity and LAN configuration issues while assisting network engineers during infrastructure upgrades.",
    ],
  },
];

const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
