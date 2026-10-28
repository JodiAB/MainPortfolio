import { lazy, Suspense, useEffect, useState } from "react";
import HeroText from "../components/HeroText";
const AstronautScene = lazy(() => import("../components/AstronautScene"));
export default function Hero() {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const preference = matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const update = () => setPlay(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  const poster = <img className="astronaut-poster" src="/assets/astronaut-poster.jpg" alt="" width="466" height="450" decoding="async" />;
  return (
    <section tabIndex={-1} id="home" className="hero c-space">
      <div className="hero-landscape" aria-hidden="true" />
      <HeroText />
      <div className="hero-astronaut">
        <div className="astronaut-art" aria-hidden="true">
          {play ? <Suspense fallback={poster}><AstronautScene /></Suspense> : poster}
        </div>
        <button className="text-link motion-toggle" onClick={() => setPlay(!play)} aria-pressed={play}>
          {play ? "Pause astronaut" : "Animate astronaut"}
        </button>
      </div>
    </section>
  );
}
