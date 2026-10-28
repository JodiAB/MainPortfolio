import { projectEvidence } from "../constants/projectEvidence";
export default function ProjectEvidence({ title }) {
  const evidence = projectEvidence[title];
  if (!evidence) return null;
  return <p className="project-evidence"><strong>{evidence.status}</strong>{evidence.note}</p>;
}
