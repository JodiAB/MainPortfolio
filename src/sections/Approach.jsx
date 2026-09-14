const stages = [
  [
    "Understand & Plan",
    "I start with the problem, user needs and technical constraints. I map the key workflows and break the work into clear, maintainable steps.",
    "Requirements → User flows → Plan",
  ],
  [
    "Build & Collaborate",
    "I build reusable components and complete features, sharing progress through Git, pull requests and review feedback.",
    "Components → Integration → Review",
  ],
  [
    "Test, Refine & Ship",
    "I test critical workflows and edge cases, refine responsive behaviour and address usability and performance before release.",
    "Testing → Refinement → Release",
  ],
];
export default function Approach() {
  return (
    <section tabIndex={-1} id="approach" className="c-space section-spacing">
      <p className="eyebrow">From requirements to release</p>
      <h2 className="text-heading">How I Work</h2>
      <div className="stage-grid">
        {stages.map(([title, description, flow], index) => (
          <article className="surface stage-card" key={title}>
            <span className="stage-badge">Stage {index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="stage-flow">{flow}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
