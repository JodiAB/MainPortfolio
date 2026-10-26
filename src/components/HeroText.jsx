import { CV_PATH, CV_FILENAME } from "../constants/site";
export default function HeroText() {
  return (
    <div className="hero-copy">
      <p className="eyebrow">Cape Town, South Africa · Open to remote work</p>
      <h1>
        Hi, I’m <span>Jodi Abrahams.</span>
      </h1>
      <p className="hero-position">
        Full Stack Developer.
        <br />
        <span>Strong frontend focus.</span>
      </p>
      <p className="hero-description">
        I build web and mobile products with JavaScript and TypeScript,
        and integrate and evaluate AI systems with explicit evidence checks.
      </p>
      <p className="hero-stack">
        React · Next.js · TypeScript · Vue.js · React Native · Node.js
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
        5+ years hands-on · 3 years professional experience
      </p>
    </div>
  );
}
