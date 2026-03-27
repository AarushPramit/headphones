"use client";

import { motion } from "framer-motion";

export default function Feature() {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white px-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          Designed for Pure Sound
        </h2>

        <p className="mt-6 text-gray-400">
          Every curve, every material, and every detail is crafted to deliver
          unmatched clarity and immersive audio experience.
        </p>
      </motion.div>
    </section>
  );
}