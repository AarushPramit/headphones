"use client";

import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    author: {
      name: "Rahul Sharma",
      handle: "@rahul_audio",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    text: "The sound quality is unreal. It feels like I'm inside the music.",
    rating: 5,
  },
  {
    author: {
      name: "Ananya Verma",
      handle: "@ananya_music",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    text: "Super comfortable and premium build. I use it for hours.",
    rating: 5,
  },
  {
    author: {
      name: "Karan Mehta",
      handle: "@karan_tech",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    text: "Battery life is insane. Easily lasts me days.",
    rating: 4,
  },
  {
    author: {
      name: "Sneha Kapoor",
      handle: "@sneha_lifestyle",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    text: "Minimal design with powerful performance. Loved it.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-black text-white py-24 px-10">
      
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Loved by Audiophiles Worldwide
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Thousands of users trust Auren for immersive sound and unmatched comfort.
        </p>
      </div>

      {/* MARQUEE WRAPPER */}
      <div className="relative overflow-hidden">

        {/* SCROLLING ROW */}
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">

          {[...Array(2)].map((_, setIndex) =>
            testimonials.map((t, i) => (
              <TestimonialCard key={`${setIndex}-${i}`} {...t} />
            ))
          )}

        </div>

        {/* LEFT FADE */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black" />

      </div>
    </section>
  );
}