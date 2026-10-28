import { CV_PATH, CV_FILENAME } from "../constants/site";
export default function HeroText() {
  return (
    <div className="hero-copy">
      <p className="eyebrow">Cape Town · Available for international remote roles</p>
      <h1>
        Hi, I’m <span>Jodi Abrahams.</span>
      </h1>
      <p className="hero-position">
        Full-Stack Software Developer.
        <br />
        <span>From interface to API.</span>
      </p>
      <p className="hero-description">
        I build SaaS applications, responsive interfaces and APIs. Commercial
        work includes reporting tools at TransHumanity and delivery workflows
        at Crunchtime Deliveries.
      </p>
      <p className="hero-stack">
        React · Next.js · TypeScript · JavaScript · Node.js · PostgreSQL
      </p>
      <div className="actions">
        <a className="button button-primary" href="#projects">
          View My Work <span aria-hidden="true">↗</span>
        </a>
        <a className="button button-secondary" href="#contact">
          Let’s Connect
        </a>
        <a className="button button-secondary button-neon" href={CV_PATH} download={CV_FILENAME}>
          Download CV ↓
        </a>
        <a className="text-link" href={CV_PATH} target="_blank" rel="noreferrer" aria-label="View CV (PDF, opens in a new tab)">
          View CV ↗
        </a>
      </div>
      <p className="hero-proof">
        5+ years hands-on · 3 years across software development and IT support
      </p>
    </div>
  );
}
