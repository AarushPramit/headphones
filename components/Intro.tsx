"use client";

import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

export default function Intro() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[999] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* ✨ PARTICLES */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          minSize={1}
          maxSize={2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#60a5fa"
        />
      </div>

      {/* TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-5xl font-bold relative z-10"
      >
        AUREN AUDIO
      </motion.h1>
    </motion.div>
  );
}