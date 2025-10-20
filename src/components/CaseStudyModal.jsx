"use client";

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative max-w-3xl w-full mx-4 bg-gradient-to-b from-storm to-indigo rounded-2xl shadow-lg border border-white/10 overflow-y-auto max-h-[90vh] p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl"
        >
          ✕
        </button>

        {/* Project image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover rounded-xl mb-6 border border-white/10"
        />

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 text-white">{project.title}</h2>

        {/* Description / Case Study */}
        {project.subDescription && (
          <div className="space-y-2 mb-6">
            {project.subDescription.map((item, idx) => (
              <p
                key={idx}
                className="text-neutral-300 text-sm md:text-base leading-relaxed"
              >
                {item}
              </p>
            ))}
          </div>
        )}

        {/* Optional Problem / Solution */}
        {project.problem && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-1">Problem</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>
        )}

        {project.solution && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-1">Solution</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        )}

        {/* Tech Stack Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag.id}
                className="flex items-center gap-2 bg-primary/40 border border-white/10 px-3 py-1 rounded-full text-sm text-neutral-200"
              >
                <img src={tag.path} alt={tag.name} className="w-4 h-4" />
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-royal text-white text-sm rounded-full hover:bg-lavender transition-colors"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-primary text-white text-sm rounded-full border border-white/10 hover:bg-storm transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
