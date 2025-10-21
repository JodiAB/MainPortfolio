"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      setLineHeight(lineRef.current.scrollHeight);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 80%"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);

  return (
    <section
      ref={containerRef}
      className="relative c-space section-spacing min-h-screen overflow-hidden"
    >
      <h2 className="text-heading text-center mb-16">My Work Experience</h2>

      <div ref={lineRef} className="relative mx-auto max-w-5xl">
        {/* Vertical timeline line */}
        <div className="absolute left-[25px] top-0 w-[2px] h-full bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            style={{ height: lineProgress }}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-lavender/50 to-transparent"
          />
        </div>

        <div className="space-y-28">
          {data.map((item, index) => {
            // Each item’s scroll trigger range (based on index)
            const itemStart = index / data.length;
            const itemEnd = (index + 1) / data.length;

            // Logo appears when the scroll line “reaches” the circle
            const logoOpacity = useTransform(
              scrollYProgress,
              [itemStart - 0.1, itemStart, itemEnd],
              [0, 1, 1]
            );
            const logoScale = useTransform(
              scrollYProgress,
              [itemStart - 0.1, itemStart],
              [0.5, 1]
            );

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row md:gap-12 items-start"
              >
                {/* Left side: circle + logo */}
                <div className="relative flex-shrink-0 flex flex-col items-center w-16">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center relative z-10">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-purple-500/20"
                      style={{ scale: logoScale, opacity: logoOpacity }}
                    />
                    {item.logo && (
                      <motion.img
                        src={item.logo}
                        alt={item.company + " logo"}
                        className="w-8 h-8 rounded-full object-cover z-20"
                        style={{ opacity: logoOpacity, scale: logoScale }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    )}
                  </div>
                </div>

                {/* Right side: details */}
                <div className="mt-6 md:mt-0">
                  <h3 className="text-xl font-semibold text-neutral-300">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-lg mb-2">{item.job}</p>
                  <p className="text-sm text-neutral-500 mb-4">{item.date}</p>
                  <ul className="space-y-2 text-neutral-400">
                    {item.contents.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
