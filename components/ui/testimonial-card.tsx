"use client";

export function TestimonialCard({ author, text }: any) {
  return (
    <div className="min-w-[280px] max-w-[300px] bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-white/10 transition">

      <div className="flex items-center gap-3">
        <img
          src={author.avatar}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">{author.name}</p>
          <p className="text-sm text-gray-400">{author.handle}</p>
        </div>
      </div>

      <p className="mt-4 text-gray-300 text-sm">
        {text}
      </p>
    </div>
  );
}