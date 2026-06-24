import { useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

import Project from "../components/Project"
import CaseStudyModal from "../components/CaseStudyModal"
import { myProjects } from "../constants"

const Projects = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 10, stiffness: 50 })
  const springY = useSpring(y, { damping: 10, stiffness: 50 })

  const [preview, setPreview] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleMouseMove = (event) => {
    x.set(event.clientX + 20)
    y.set(event.clientY + 20)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project
          key={project.id}
          {...project}
          setPreview={setPreview}
          onViewCaseStudy={() => setSelectedProject(project)}
        />
      ))}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          alt="Project preview"
          style={{ x: springX, y: springY }}
        />
      )}

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects