import Modal from "./Modal";
import ProjectLinks from "./ProjectLinks";
import ProjectEvidence from "./ProjectEvidence";
import { fuelWiseCaseStudy } from "../constants/focusedCaseStudies";
export default function CaseStudyModal({ project, onClose }) {
  project = project.title === "FuelWise SA" ? fuelWiseCaseStudy : project;
  const sections = [
    ["Problem and intended user", project.problem],
    ["My role and contribution", project.roleSummary],
    ["Technical challenge", project.challenge],
    ["Solution", project.solution],
    ["Result and current status", project.outcome],
  ];
  const lists = [
    ["Implementation", project.subDescription],
    ["Engineering decisions", project.decisions],
    ["Architecture", project.architecture],
    ["Key features", project.caseStudy?.keyFeatures],
    ["Challenges", project.caseStudy?.challenges],
    ["Future improvements", project.caseStudy?.improvements],
  ];
  return (
    <Modal title={`${project.title} — Case Study`} onClose={onClose}>
      <ProjectEvidence title={project.title} />
      {project.image && <img
        className="modal-image"
        src={project.image}
        alt={`${project.title} interface`}
      />}
      <p>{project.caseStudy?.overview || project.description}</p>
      {project.techStack && <section><h3>Technologies and workflows</h3><ul className="tech-list">{project.techStack.map(tech => <li key={tech}>{tech}</li>)}</ul></section>}
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
      {project.walkthrough && <section><h3>Try the calculator</h3><ol className="case-walkthrough">{project.walkthrough.map(step => <li key={step}>{step}</li>)}</ol></section>}
      {project.walkthroughImage && <figure className="case-evidence-figure"><img src={project.walkthroughImage} alt="Actual FuelWise calculator with manual price override enabled and R20 per litre entered" width="1265" height="712" loading="lazy" /><figcaption>{project.walkthroughCaption}</figcaption></figure>}
      {project.evidence && <section className="case-evidence-note"><h3>Evidence and boundaries</h3><p>{project.evidence}</p></section>}
      <div className="actions">
        <ProjectLinks project={project} />
      </div>
    </Modal>
  );
}
