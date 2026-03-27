"use client";

import { motion } from "framer-motion";
import PremiumButton from "./ui/button";

export default function ProductShowcase() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center px-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT — PRODUCT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/headphones.png"
            alt="Headphones"
            className="w-[350px] md:w-[450px] drop-shadow-[0_40px_100px_rgba(0,0,0,0.9)] hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Auren Pro X
          </h2>

          <p className="mt-6 text-gray-400 max-w-md">
            Crafted for audiophiles, the Auren Pro X delivers immersive sound,
            active noise cancellation, and unmatched comfort for long listening sessions.
          </p>

          {/* FEATURES */}
          <div className="mt-6 space-y-2 text-gray-300">
            <p>• Active Noise Cancellation</p>
            <p>• 40hr Battery Life</p>
            <p>• Spatial Audio Experience</p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <PremiumButton text="Add to Cart" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}


