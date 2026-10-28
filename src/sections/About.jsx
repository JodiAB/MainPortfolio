import Skills from "../components/Skills";
export default function About() {
  return (
    <section tabIndex={-1} id="about" className="c-space section-spacing">
      <p className="eyebrow">The developer behind the work</p>
      <h2 className="text-heading">About Me</h2>
      <div className="about-grid">
        <article className="surface about-summary">
          <h3>Thoughtful interfaces. Reliable products.</h3>
          <p>
            I’m a product-minded Full Stack Developer with 5+ years of hands-on
            experience, including independent projects, and 3 years across
            software development and IT support. My approved CV records 2+
            years of professional development experience. I specialise in
            turning complex requirements into responsive, maintainable
            interfaces and reliable product workflows.
          </p>
          <p>
            I care about clean code, performance, usability and shipping
            software that is ready for real users.
          </p>
          <a href="#experience" className="text-link">
            Explore my experience ↗
          </a>
        </article>
        <article className="surface">
          <p className="eyebrow">Location & availability</p>
          <h3>
            Cape Town.
            <br />
            Connected worldwide.
          </h3>
          <p>
            Based in South Africa and open to remote opportunities worldwide.
          </p>
          <a className="text-link" href="mailto:jodiabrahams9@gmail.com">
            jodiabrahams9@gmail.com
          </a>
        </article>
        <article className="surface">
          <p className="eyebrow">Why hire me?</p>
          <h3>Ownership from start to ship.</h3>
          <p>
            I’ve shipped production features across interfaces, APIs and
            databases. I’m comfortable taking a feature from requirements
            through implementation, review and release.
          </p>
        </article>
        <article className="surface">
          <p className="eyebrow">Engineering approach</p>
          <h3>Frontend detail. Full-stack perspective.</h3>
          <p>
            Responsive UI, reusable components and reliable product workflows
            guide my work. I use testing and Git-based collaboration to keep
            changes maintainable, and learn unfamiliar tools as a product needs
            them.
          </p>
        </article>
      </div>
      <Skills />
    </section>
  );
}
