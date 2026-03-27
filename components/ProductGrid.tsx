"use client";

import { LayoutGrid } from "./ui/layout-grid";

export default function ProductGrid() {
  return (
    <section className="min-h-screen bg-black text-white py-24 px-10">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-5xl md:text-6xl font-bold">
          Explore Products
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl">
          Discover our range of precision-crafted headphones built for immersive sound and comfort.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto">
        <LayoutGrid cards={cards} />
      </div>

    </section>
  );
}

const cards = [
  {
    id: 1,
    content: (
      <div>
        <p className="text-3xl font-bold">Auren Pro X</p>
        <p className="text-gray-300 mt-4">
          Industry-leading noise cancellation with immersive spatial audio.
        </p>
      </div>
    ),
    className: "md:col-span-2",
    thumbnail: "headphones.png",
  },
  {
    id: 2,
    content: (
      <div>
        <p className="text-2xl font-semibold">Auren Lite</p>
        <p className="text-gray-400 mt-2">
          Lightweight and powerful.
        </p>
      </div>
    ),
    thumbnail: "aurenlite.png",
  },
  {
    id: 3,
    content: (
      <div>
        <p className="text-2xl font-semibold">Auren Max</p>
        <p className="text-gray-400 mt-2">
          Studio-grade performance.
        </p>
      </div>
    ),
    thumbnail: "headphones.png",
  },
  {
    id: 4,
    content: (
      <div>
        <p className="text-2xl font-semibold">Auren Air</p>
        <p className="text-gray-400 mt-2">
          Ultra-light wireless experience.
        </p>
      </div>
    ),
    thumbnail: "aurenair.png",
  },
  {
    id: 5,
    content: (
      <div>
        <p className="text-2xl font-semibold">Auren Studio</p>
        <p className="text-gray-400 mt-2">
          Built for creators.
        </p>
      </div>
    ),
    thumbnail: "aurenstudio.png",
  },
];