import Modal from "./Modal";
import ProjectLinks from "./ProjectLinks";
import ProjectEvidence from "./ProjectEvidence";
export default function ProjectDetails(props) {
  return (
    <Modal title={props.title} onClose={props.closeModal}>
      <ProjectEvidence title={props.title} />
      <img
        className="modal-image"
        src={props.image}
        alt={`${props.title} interface`}
      />
      <p>{props.description}</p>
      <ul>
        {props.subDescription?.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="tech-list">
        {props.tags?.map((tag) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
      </div>
      <div className="actions">
        <ProjectLinks project={props} />
      </div>
    </Modal>
  );
}
