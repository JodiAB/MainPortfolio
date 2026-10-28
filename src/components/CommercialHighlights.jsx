import { useState } from "react";
import CaseStudyModal from "./CaseStudyModal";
import { commercialCaseStudies, fuelWiseCaseStudy } from "../constants/focusedCaseStudies";
export default function CommercialHighlights() {
  const [selected, setSelected] = useState(null);
  return (
    <>
    <section className="c-space evidence-strip" aria-label="Commercial work and a public project">
      <article className="surface">
        <span className="eyebrow">Commercial · Nov 2025 – Apr 2026</span>
        <h2>TransHumanity</h2>
        <p>SaaS report editing, PDF exports and regression testing.</p>
        <button className="text-link" onClick={() => setSelected(commercialCaseStudies.transhumanity)}>Read TransHumanity case study ↗</button>
      </article>
      <article className="surface">
        <span className="eyebrow">Commercial · Jun 2024 – Jun 2025</span>
        <h2>Crunchtime Deliveries</h2>
        <p>Customer, driver and admin interfaces; tracking and payment integrations.</p>
        <button className="text-link" onClick={() => setSelected(commercialCaseStudies.crunchtime)}>Read Crunchtime case study ↗</button>
      </article>
      <article className="surface">
        <span className="eyebrow">Independent project · Public beta</span>
        <h2>FuelWise SA</h2>
        <p>Try the working manual fuel calculator. Automatic prices may be unavailable.</p>
        <button className="text-link" onClick={() => setSelected(fuelWiseCaseStudy)}>Explore FuelWise walkthrough ↗</button>
      </article>
    </section>
    {selected && <CaseStudyModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
