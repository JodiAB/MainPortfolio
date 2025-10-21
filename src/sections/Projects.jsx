import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import CaseStudyModal from "../components/CaseStudyModal"; // ✅ import your case study modal

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  // ✅ For modal control
  const [preview, setPreview] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section onMouseMove={handleMouseMove} className="relative c-space section-spacing">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <div key={project.id}>
          <Project {...project} setPreview={setPreview} />

          {/* ✅ Add Case Study Button */}
          <div className="flex justify-end mt-4 mb-8">
            <button
              onClick={() => setSelectedProject(project)}
              className="px-5 py-2 rounded-xl bg-purple-500 text-white font-medium hover:bg-purple-400 transition-colors"
            >
              View Case Study
            </button>
          </div>

          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
        </div>
      ))}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}

      {/* ✅ Show Modal when a project is selected */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
