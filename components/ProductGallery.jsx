"use client";

import { useState } from "react";

export default function ProductGallery({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images?.[activeIndex] || images?.[0];

  if (!activeImage) {
    return null;
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex w-full items-center justify-center overflow-hidden rounded-3xl bg-neutral-100 p-4 shadow-sm sm:p-6">
        <img
          src={activeImage}
          alt={name}
          className="h-[280px] w-full object-contain sm:h-[420px] lg:h-[520px]"
        />
      </div>
      <div className="flex w-full gap-3 overflow-x-auto pb-1">
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-3xl border bg-white p-2 transition sm:h-20 sm:w-20 ${
                isActive
                  ? "border-ink shadow-sm"
                  : "border-stone/70 hover:border-ink"
              }`}
              aria-label={`Ver imagem ${index + 1} de ${images.length}`}
              aria-pressed={isActive}
            >
              <img
                src={image}
                alt={`${name} ${index + 1}`}
                className="h-full w-full object-contain"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
