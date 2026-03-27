"use client";

import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="h-screen w-full bg-gradient-to-br from-black via-slate-900 to-black text-white flex items-center justify-center px-10 relative overflow-hidden"
    >

      {/* 🔥 Spotlight */}
      <Spotlight className="top-[-200px] left-[-100px] opacity-60" fill="#2563eb" />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Engineered Silence.
            <br />
            Amplified Perfection.
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Experience sound like never before with precision-crafted headphones designed for clarity and depth.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-center relative">

          {/* Glow Background */}
          <div className="absolute w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full"></div>

          {/* Headphones Image */}
          <img
            src="/headphones.png"
            alt="Headphones"
            className="w-[400px] relative z-10 transition-transform duration-500 hover:scale-110 drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] animate-float"
          />

        </div>

      </div>
    </motion.section>
  );
}