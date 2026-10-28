import { useState } from "react";
import Project from "../components/Project";
import CaseStudyModal from "../components/CaseStudyModal";
import { myProjects } from "../constants";
const priority = [
  "FuelWise SA",
  "Possibility Engine",
  "OpsFlow",
  "Cocktail Animation Website",
  "AI Resume Analyzer",
  "LMS SaaS App",
  "Food Ordering App",
];
const orderedProjects = [...myProjects].sort(
  (a, b) =>
    (priority.indexOf(a.title) < 0 ? 99 : priority.indexOf(a.title)) -
    (priority.indexOf(b.title) < 0 ? 99 : priority.indexOf(b.title)),
);
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section tabIndex={-1} id="projects" className="c-space section-spacing">
      <p className="eyebrow">AI Engineering · Web · Mobile · SaaS</p>
      <h2 className="text-heading">Selected Projects</h2>
      <p className="section-intro">
        Independent projects, public betas and engineering prototypes.
        Status notes separate publicly checked behaviour from documented implementation.
      </p>
      <a className="text-link recruiter-github" href="https://github.com/JodiAB" target="_blank" rel="noreferrer">
        <img src="/assets/logos/github.svg" alt="" width="20" height="20" />
        Explore my GitHub <span aria-hidden="true">↗</span>
      </a>
      <div className="projects-grid">
        {orderedProjects.map((project) => (
          <Project
            key={project.id}
            {...project}
            onViewCaseStudy={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
