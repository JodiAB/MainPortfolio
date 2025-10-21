import { useEffect } from "react";
import { motion } from "motion/react";

const Skills = () => {
  // Skill data with proficiency levels (0-100)
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "React Native", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "TailwindCSS", level: 90 },
    { name: "Framer Motion", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "PostgreSQL", level: 60 },
  ];

  // Animate progress bars on mount
  useEffect(() => {
    skills.forEach((skill) => {
      const element = document.getElementById(`progress-${skill.name}`);
      if (element) {
        element.style.transition = "width 1.5s ease-out";
        element.style.width = `${skill.level}%`;
      }
    });
  }, [skills]);

  // Reference guide for proficiency levels
  const proficiencyReference = [
    { range: "90-100%", description: "Expert: Leads complex projects, mentors teams, optimizes performance (e.g., custom hooks, advanced state management)." },
    { range: "70-89%", description: "Advanced: Builds full features independently, handles edge cases, integrates APIs efficiently." },
    { range: "50-69%", description: "Intermediate: Contributes to projects, follows best practices, needs occasional guidance." },
    { range: "0-49%", description: "Beginner: Familiar with basics, learning through practice or small tasks." },
  ];

  return (
    <div className="c-space mt-12 mb-20">
      <h2 className="text-heading">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="grid-default-color p-4 rounded-2xl shadow-lg hover:shadow-xl hover-animation"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="headtext">{skill.name}</span>
              <span className="text-neutral-400 text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                id={`progress-${skill.name}`}
                className="bg-aqua h-2.5 rounded-full"
                style={{ width: "0%" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      {/* Proficiency Reference Guide */}
      <div className="mt-8">
        <h3 className="headtext">Proficiency Reference</h3>
        <div className="grid-default-color p-4 rounded-2xl mt-4">
          <ul className="subtext list-disc pl-5 space-y-2">
            {proficiencyReference.map((ref) => (
              <li key={ref.range}>
                <strong>{ref.range}</strong>: {ref.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;