import React from "react";
import { ArrowRight } from "lucide-react";

export default function InteractiveButton({ text = "Explore" }) {
  return (
    <button className="group relative w-40 overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-2 text-white">
      <span className="transition-all duration-300 group-hover:translate-x-6 group-hover:opacity-0">
        {text}
      </span>

      <span className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
        {text} <ArrowRight size={16} />
      </span>
    </button>
  );
}