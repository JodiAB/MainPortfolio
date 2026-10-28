import Modal from "./Modal";
import ProjectLinks from "./ProjectLinks";
import ProjectEvidence from "./ProjectEvidence";
export default function CaseStudyModal({ project, onClose }) {
  const sections = [
    ["Problem", project.problem],
    ["Solution", project.solution],
    ["Outcome", project.outcome],
  ];
  const lists = [
    ["Implementation", project.subDescription],
    ["Architecture", project.architecture],
    ["Key features", project.caseStudy?.keyFeatures],
    ["Challenges", project.caseStudy?.challenges],
    ["Future improvements", project.caseStudy?.improvements],
  ];
  return (
    <Modal title={`${project.title} — Case Study`} onClose={onClose}>
      <ProjectEvidence title={project.title} />
      <img
        className="modal-image"
        src={project.image}
        alt={`${project.title} interface`}
      />
      <p>{project.caseStudy?.overview || project.description}</p>
      {sections.map(
        ([title, text]) =>
          text && (
            <section key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </section>
          ),
      )}
      {lists.map(
        ([title, list]) =>
          list?.length > 0 && (
            <section key={title}>
              <h3>{title}</h3>
              <ul>
                {list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ),
      )}
      <div className="actions">
        <ProjectLinks project={project} />
      </div>
    </Modal>
  );
}
