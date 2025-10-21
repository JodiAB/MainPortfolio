"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const { scrollY } = useScroll();

  // Parallax effects
  const yAstronaut = useTransform(scrollY, [0, 500], [0, 100]);
  const yBackground = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen overflow-hidden px-6 md:px-24">
      {/* Background */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 -z-10"
      >
        <ParallaxBackground />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none" />

      {/* Text Content */}
      <div className="relative z-20 w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
        <HeroText />
      </div>

      {/* Astronaut 3D Model */}
      <motion.div
        style={{ y: yAstronaut }}
        className="relative z-10 w-[70vw] md:w-[40vw] h-[70vw] md:h-[40vw] flex justify-center items-center"
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.55 : 0.45}
                position={isMobile ? [0, -1.5, -1.5] : [0.5, -0.5, -1.5]}
                rotation={[0.1, 0.4, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </motion.div>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
