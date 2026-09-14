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
import { MotionConfig } from "motion/react";
export default function App() {
  const mainRef = useRef(null);
  useScrollMotion(mainRef);
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main ref={mainRef} id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Approach />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
