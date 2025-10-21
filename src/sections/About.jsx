import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import Skills from "../components/Skills";

const About = () => {
  const grid2Container = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal and handle Escape key
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Close modal on Escape key
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt="Coding POV illustration"
          />
          <div className="z-10">
            <p className="headtext">Hello, I'm Jodi Abrahams</p>
            <p className="subtext">
              Over the past four years, I’ve honed my skills in both frontend and
              backend development, building dynamic, high-performing web and
              software applications that deliver exceptional user experiences and
              robust functionality.
            </p>
            <motion.button
              onClick={toggleModal}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 1.05 }}
              className="btn hover-animation mt-4"
            >
              <p className="flex items-center justify-center gap-2">
                Why Hire Me?
              </p>
            </motion.button>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">CODE IS ART</p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%", scale: "1" }}
              image="assets/logos/reactT.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/tailwindc.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/github.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Cape Town, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a diverse range of programming languages,
              frameworks, and development tools that empower me to build robust,
              scalable, and maintainable applications across both frontend and
              backend environments.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              className="grid-default-color p-8 rounded-2xl max-w-md w-full mx-4 relative"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <button
                onClick={toggleModal}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <p className="headtext">Why Hire Me?</p>
              <p className="subtext mt-4">
                With over 4 years of experience as a frontend-focused developer, I
                bring a unique blend of creativity and technical precision to every
                project. My expertise in React, Next.js, TypeScript, and Tailwind
                CSS allows me to craft pixel-perfect, responsive UIs that scale
                seamlessly. Notable achievements include:
              </p>
              <ul className="subtext mt-4 list-disc pl-5">
                <li>
                  Built a Nike-style eCommerce platform, boosting simulated cart
                  conversions by 30% through optimized checkout flows.
                </li>
                <li>
                  Developed CareerCrafter, an AI-powered resume analyzer, handling
                  1K+ user uploads with real-time PDF parsing.
                </li>
                <li>
                  Collaborated with designers to deliver 5+ production-ready apps,
                  reducing load times by 40% via code optimizations.
                </li>
              </ul>
              <p className="subtext mt-4">
                I’m passionate about clean code (SOLID, GRASP) and thrive in
                remote, agile teams. Based in Cape Town, I’m ready to bring your
                vision to life—whether it’s a sleek web app or a mobile-first
                solution.
              </p>
              <div className="flex justify-center mt-6">
                <a
                  href="#contact"
                  className="btn hover-animation"
                  onClick={toggleModal}
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Skills />
    </section>
  );
};

export default About;