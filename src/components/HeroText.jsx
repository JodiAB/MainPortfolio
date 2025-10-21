"use client";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

const HeroText = () => {
  const words = ["Scalable", "Performant", "AI-Driven", "Secure"];
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="z-10 mt-24 text-center md:mt-48 md:text-left bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
       <motion.h1
  className="text-5xl font-semibold text-white"
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.3 }}
>
  Hi, I’m{" "}
  <span className="text-purple-400 font-bold whitespace-nowrap inline-block">
    Jodi Abrahams
  </span>
</motion.h1>

<motion.h2
  className="mt-4 text-6xl font-bold text-neutral-200 leading-tight"
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.6 }}
>
  I build <FlipWords words={words} className="text-white" />{" "}
  <span className="whitespace-nowrap inline-block">digital experiences</span>
</motion.h2>


        {/* Typing subtitle */}
        <motion.div
          className="mt-4 text-2xl text-neutral-400 font-light"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <TypeAnimation
            sequence={[
              "Front-End Engineer specializing in high-performance UI.",
              2000,
              "Building modern apps with Next.js, TypeScript & Framer Motion.",
              2000,
              "Transforming complex ideas into elegant interfaces.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          className="mt-10 flex gap-6"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6 }}
        >
          <a
            href="#work"
            className="px-6 py-3 text-lg font-medium text-black bg-purple-400 rounded-2xl hover:bg-purple-300 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-lg font-medium text-neutral-300 border border-neutral-600 rounded-2xl hover:bg-neutral-800 transition-colors"
          >
            Let’s Connect
          </a>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.h1
          className="text-4xl font-semibold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          Hi, I’m <span className="text-purple-400 font-bold">Jodi</span>
        </motion.h1>

        <motion.h2
          className="text-5xl font-bold text-neutral-200"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          Building <FlipWords words={words} className="text-white" /> apps
        </motion.h2>

        <motion.div
          className="text-lg text-neutral-400"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Front-End Engineer with a focus on user experience.",
              2000,
              "Crafting modern, responsive web apps.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
