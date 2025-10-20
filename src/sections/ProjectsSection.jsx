"use client";
import { useState } from "react";
import { myProjects } from "../constants";
import CaseStudyModal from "../components/CaseStudyModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-heading">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl shadow-lg bg-gradient-to-b from-storm to-indigo overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>

              {/* ✅ Fixed tag mapping */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-gray-100 px-2 py-1 rounded-full border flex items-center gap-1"
                    >
                      <img src={tag.path} alt={tag.name} className="w-4 h-4" />
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                View Case Study →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Case study modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
