import { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectLinks from "./ProjectLinks";
export default function Project(props) {
  const {
    title,
    category,
    featured,
    description,
    role,
    image,
    tags = [],
    onViewCaseStudy,
  } = props;
  const [open, setOpen] = useState(false);
  return (
    <article className={`project-card surface ${featured ? "featured" : ""}`}>
      <img
        className="project-image"
        src={image}
        alt={`${title} interface preview`}
        loading="lazy"
        decoding="async"
        width="800"
        height="450"
      />
      <div className="project-body">
        <div className="project-meta">
          <span>{category}</span>
          {featured && <span className="featured-label">Featured</span>}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="project-role">Role: {role}</p>
        <ul className="tech-list">
          {tags.slice(0, 5).map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
        <div className="actions">
          <ProjectLinks project={props} />
          <button className="text-link" onClick={onViewCaseStudy}>
            Case Study
          </button>
          <button className="text-link" onClick={() => setOpen(true)}>
            Read More
          </button>
        </div>
      </div>
      {open && <ProjectDetails {...props} closeModal={() => setOpen(false)} />}
    </article>
  );
}
