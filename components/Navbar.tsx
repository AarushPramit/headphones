"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { label: "Home", href: "#" },
    { label: "Product", href: "#product" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        
        {/* LOGO */}
        <h1 className="font-semibold tracking-widest text-lg">
          AUREN
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}

          <button className="border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
            Buy Now
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 text-white text-lg"
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-gray-400 transition"
            >
              {link.label}
            </a>
          ))}

          <button className="border px-6 py-3 rounded-full">
            Buy Now
          </button>
        </motion.div>
      )}
    </header>
  );
}