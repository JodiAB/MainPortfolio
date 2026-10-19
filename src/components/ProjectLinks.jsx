export default function ProjectLinks({ project }) {
  const github =
    project.github ||
    (project.href?.includes("github.com/") ? project.href : "");
  const live =
    project.href && !project.href.includes("github.com/") ? project.href : "";
  return (
    <>
      {live && (project.demoUnavailable ? (
        <span className="button button-secondary project-action-unavailable">
          Demo · Temporarily unavailable
        </span>
      ) : (
        <a
          className="button button-secondary button-neon"
          href={live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo ↗
        </a>
      ))}
      {github && (project.sourcePrivate ? (
        <span className="button button-secondary project-action-unavailable">
          GitHub · Private
        </span>
      ) : (
        <a
          className="button button-secondary"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      ))}
    </>
  );
}
