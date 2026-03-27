"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import ProductShowcase from "@/components/ProductShowcase";
import ProductGrid from "@/components/ProductGrid";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Intro from "@/components/Intro";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // intro duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* INTRO OVERLAY */}
      <AnimatePresence>
        {showIntro && <Intro />}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <main className="bg-black text-white">

        
        <Hero />

        
        <Feature />

        
        <ProductShowcase />

        
        <ProductGrid />

        <ServicesSection />

        
        <TestimonialsSection />

        <Footer />

      </main>
    </>
  );
}