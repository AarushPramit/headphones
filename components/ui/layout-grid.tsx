"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Card = {
  id: number;
  content: React.ReactNode;
  className?: string;
  thumbnail: string;
};



// 🔥 Card with Glow + 3D Tilt
const CardItem = ({
  card,
  setSelected,
}: {
  card: Card;
  setSelected: (card: Card) => void;
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // glow position
    setPos({ x, y });

    // 3D tilt
    const rotateX = ((y - rect.height / 2) / rect.height) * -15;
    const rotateY = ((x - rect.width / 2) / rect.width) * 15;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const isLarge = card.className?.includes("col-span-2");

  return (
    <motion.div
      layoutId={`card-${card.id}`}
      onClick={() => setSelected(card)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className={`
        group cursor-pointer rounded-2xl overflow-hidden relative 
        h-[300px] md:h-[350px]
        bg-white/[0.03] border border-white/10
        transition-transform duration-300 ease-out
        hover:border-white/20 hover:bg-white/[0.06]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]
        ${card.className}
      `}
    >
      {/* 🔥 CURSOR GLOW */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(
            400px circle at ${pos.x}px ${pos.y}px,
            rgba(255,255,255,0.12),
            transparent 60%
          )`,
        }}
      />

      {/* IMAGE */}
      <div className="flex justify-center items-start h-full relative z-10">
        <img
          src={card.thumbnail}
          alt="thumbnail"
          className={`
            object-contain mt-6
            transition duration-500 
            group-hover:scale-110 
            drop-shadow-[0_40px_100px_rgba(0,0,0,0.9)]
            ${isLarge ? "w-[320px] h-[320px]" : "w-[240px] h-[240px]"}
          `}
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

      {/* TEXT */}
      <div className="absolute bottom-4 left-4 right-4 text-white z-20 transform transition duration-500 group-hover:-translate-y-1">
        {card.content}
      </div>
    </motion.div>
  );
};



// ✅ MAIN GRID
export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            setSelected={setSelected}
          />
        ))}
      </div>

      {/* EXPANDED VIEW */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg"
            onClick={() => setSelected(null)}
          >
            <motion.div
              layoutId={`card-${selected.id}`}
              className="w-[90%] md:w-[60%] h-[70%] rounded-2xl overflow-hidden relative bg-white/5 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.thumbnail}
                alt="expanded"
                className="w-full h-full object-contain p-10 opacity-60"
              />

              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                {selected.content}

                <button className="mt-6 w-fit px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};