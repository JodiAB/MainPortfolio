const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "JavaScript (ES6+/ES2017+)",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive UI",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "REST APIs",
      "Prisma",
      "PostgreSQL",
      "MySQL",
      "Appwrite",
      "Supabase",
      "Authentication",
    ],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "NativeWind", "Zustand"],
  },
  {
    title: "Testing & Quality",
    skills: [
      "Vitest",
      "Jest",
      "Testing Library",
      "Postman",
      "Performance",
      "Manual QA",
      "Debugging",
      "Responsive Testing",
    ],
  },
  {
    title: "Tools & Delivery",
    skills: [
      "Git",
      "GitHub",
      "npm",
      "Vercel",
      "Docker basics",
      "CI/CD basics",
      "Figma",
      "Sentry",
      "Agile/Scrum",
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="max-w-3xl">
        <h2 className="text-heading">Technical Skills</h2>
        <p className="subtext mt-3">
          Technologies I use to design, build, test, and ship modern web and
          mobile products. From responsive interfaces to APIs and release
          workflows.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="surface skill-group">
            <h3 className="headtext">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Skills;
