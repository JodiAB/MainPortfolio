"use client"

import { useState } from "react"

import CaseStudyModal from "../components/CaseStudyModal"
import { myProjects } from "../constants"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="max-w-7xl px-6 py-16 mx-auto">
      <h2 className="text-heading">Featured Projects</h2>

      <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {myProjects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden transition-shadow shadow-lg rounded-2xl bg-gradient-to-b from-storm to-indigo hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-48"
            />

            <div className="flex flex-col gap-3 p-5">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-sm leading-6 text-neutral-300">
                {project.description}
              </p>

              {project.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 text-xs text-neutral-300">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="flex items-center gap-1 px-2 py-1 border rounded-full bg-white/5 border-white/10"
                    >
                      {tag.path && (
                        <img
                          src={tag.path}
                          alt={tag.name}
                          className="w-4 h-4"
                        />
                      )}
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-sm font-medium text-blue-400 hover:text-blue-300"
                >
                  View Case Study →
                </button>

                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-400 hover:text-blue-300"
                  >
                    Live Demo →
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-400 hover:text-blue-300"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}