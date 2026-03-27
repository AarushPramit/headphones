"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Acoustic Engineering",
    description:
      "Precision-tuned sound architecture designed for deep clarity and balance.",
  },
  {
    id: "02",
    title: "Noise Cancellation",
    description:
      "Advanced active noise cancellation for an uninterrupted listening experience.",
  },
  {
    id: "03",
    title: "Premium Comfort",
    description:
      "Ergonomic design with soft materials for long listening sessions.",
  },
  {
    id: "04",
    title: "Wireless Freedom",
    description:
      "Seamless connectivity with long-lasting battery performance.",
  },
];

export default function ServicesSection() {
  return (
    <section className="min-h-screen bg-black text-white px-10 py-24">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            OUR SERVICES
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl">
            Designed to deliver a premium audio experience with cutting-edge technology and elegant design.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}



// 🔥 INDIVIDUAL CARD WITH SHINY BORDER
const ServiceCard = ({ service }: any) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMove}
      className="relative rounded-2xl p-[1px] overflow-hidden"
    >
      {/* 🔥 SHINY BORDER */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(
            250px circle at ${pos.x}px ${pos.y}px,
            rgba(255,255,255,0.25),
            transparent 60%
          )`,
        }}
      />

      {/* CARD CONTENT */}
      <div className="relative rounded-2xl bg-black border border-white/10 p-8 transition duration-300 hover:-translate-y-2">
        
        <div className="text-sm text-gray-400">{service.id}</div>

        <h3 className="mt-6 text-2xl font-semibold">
          {service.title}
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          {service.description}
        </p>

      </div>
    </div>
  );
};