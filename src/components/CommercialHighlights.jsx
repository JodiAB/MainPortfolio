export default function CommercialHighlights() {
  return (
    <section className="c-space evidence-strip" aria-label="Commercial work and a public project">
      <a className="surface" href="#experience">
        <span className="eyebrow">Commercial · Nov 2025 – Apr 2026</span>
        <h2>TransHumanity</h2>
        <p>SaaS report editing, PDF exports and regression testing.</p>
        <span className="text-link">View experience ↗</span>
      </a>
      <a className="surface" href="#experience">
        <span className="eyebrow">Commercial · Jun 2024 – Jun 2025</span>
        <h2>Crunchtime Deliveries</h2>
        <p>Customer, driver and admin interfaces; tracking and payment integrations.</p>
        <span className="text-link">View experience ↗</span>
      </a>
      <a className="surface" href="https://fuelwise-sa.vercel.app/full-tank" target="_blank" rel="noreferrer">
        <span className="eyebrow">Independent project · Public beta</span>
        <h2>FuelWise SA</h2>
        <p>Try the working manual fuel calculator. Automatic prices may be unavailable.</p>
        <span className="text-link">Try calculator ↗</span>
      </a>
    </section>
  );
}
