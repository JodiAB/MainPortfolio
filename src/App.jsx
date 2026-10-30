import { useRef } from "react";
import useScrollMotion from "./hooks/useScrollMotion";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Approach from "./sections/Approach";
import CommercialHighlights from "./components/CommercialHighlights";
import useVisibleEffects from "./hooks/useVisibleEffects";
export default function App() {
  const mainRef = useRef(null);
  useScrollMotion(mainRef);
  useVisibleEffects();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main ref={mainRef} id="main" tabIndex={-1}>
        <Hero />
        <CommercialHighlights />
        <Experiences />
        <Projects />
        <About />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
