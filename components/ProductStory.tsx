"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProductStory() {
  const ref = useRef(null);

  // ✅ Scope scroll to THIS section only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // ✅ Strict non-overlapping ranges
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.5, 0.6], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);

  return (
    <section ref={ref} className="h-[300vh] bg-black relative text-white">

      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center flex-col">

        {/* PRODUCT */}
        <img
          src="/headphones.png"
          alt="Headphones"
          className="w-[300px] md:w-[400px] mb-12 drop-shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
        />

        {/* TEXT STACK */}
        <div className="relative h-[80px] flex items-center justify-center">

          <motion.h2
            style={{ opacity: opacity1 }}
            className="absolute text-3xl md:text-5xl font-bold"
          >
            Precision Engineered
          </motion.h2>

          <motion.h2
            style={{ opacity: opacity2 }}
            className="absolute text-3xl md:text-5xl font-bold"
          >
            Immersive Sound
          </motion.h2>

          <motion.h2
            style={{ opacity: opacity3 }}
            className="absolute text-3xl md:text-5xl font-bold"
          >
            Pure Silence
          </motion.h2>

        </div>

      </div>
    </section>
  );
}