import { lazy, Suspense } from "react";
import HeroText from "../components/HeroText";
const AstronautScene = lazy(() => import("../components/AstronautScene"));
export default function Hero() {
  return (
    <section tabIndex={-1} id="home" className="hero c-space">
      <div className="hero-landscape" aria-hidden="true" />
      <HeroText />
      <div className="hero-astronaut" aria-hidden="true">
        <Suspense fallback={<div className="orbit-placeholder" />}>
          <AstronautScene />
        </Suspense>
      </div>
    </section>
  );
}
