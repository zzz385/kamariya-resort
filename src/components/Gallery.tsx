"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  category: "rooms" | "territory" | "dining" | "lake";
  altKey: string;
  type?: "image" | "video";
}

export const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images: GalleryImage[] = [
    // Lake
    {
      src: "/images/lake-hero.jpg",
      category: "lake",
      altKey: "gallery.cat.lake",
    },
    {
      src: "/images/lake-evening.jpg",
      category: "lake",
      altKey: "gallery.cat.lake",
    },
    {
      src: "/images/lake-night-family.jpg",
      category: "lake",
      altKey: "gallery.cat.lake",
    },
    {
      src: "/images/lake-night-stars.jpg",
      category: "lake",
      altKey: "gallery.cat.lake",
    },
    {
      src: "/images/lake-sup-board.jpg",
      category: "lake",
      altKey: "gallery.cat.lake",
    },
    {
      src: "/images/lake-jet-ski.jpg",
      category: "lake",
      altKey: "gallery.cat.lake",
    },
    {
      src: "/images/lake-boat-trip.jpg",
      category: "lake",
      altKey: "gallery.cat.lake",
    },
    {
      src: "/images/lake-beach-panorama.jpg",
      category: "lake",
      altKey: "gallery.cat.lake",
    },
    {
      src: "/videos/lake-atmosphere.mp4",
      category: "lake",
      altKey: "gallery.cat.lake",
      type: "video",
    },

    // Territory
    {
      src: "/images/territory-main.jpg",
      category: "territory",
      altKey: "gallery.cat.territory",
    },
    {
      src: "/images/territory-rainbow.jpg",
      category: "territory",
      altKey: "gallery.cat.territory",
    },
    {
      src: "/images/territory-white-house.jpg",
      category: "territory",
      altKey: "gallery.cat.territory",
    },
    {
      src: "/images/territory-wooden-house.jpg",
      category: "territory",
      altKey: "gallery.cat.territory",
    },

    // Dining
    {
      src: "/images/dining.jpg",
      category: "dining",
      altKey: "gallery.cat.dining",
    },
    {
      src: "/images/dining-hall.jpg",
      category: "dining",
      altKey: "gallery.cat.dining",
    },
  ];

  const categories = [
    { code: "all", label: t("gallery.cat.all") },
    { code: "territory", label: t("gallery.cat.territory") },
    { code: "dining", label: t("gallery.cat.dining") },
    { code: "lake", label: t("gallery.cat.lake") },
  ];

  // Filtered array
  const filteredImages = activeCategory === "all"
    ? images
    : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    // Map filtered index back to the absolute index in images array
    const originalImage = filteredImages[index];
    const absoluteIndex = images.findIndex((img) => img.src === originalImage.src);
    setLightboxIndex(absoluteIndex !== -1 ? absoluteIndex : null);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section
      id="gallery"
      className="relative w-full py-24 bg-sand-50 flex flex-col items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-sunset-500 mb-3 block">
            {t("nav.gallery")}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-[0.06em] text-ocean-950 mb-6 uppercase">
            {t("gallery.title")}
          </h2>
          <div className="w-16 h-[2px] bg-sunset-500 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-ocean-900/60 font-light max-w-xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.code}
              onClick={() => setActiveCategory(cat.code)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 ${activeCategory === cat.code
                ? "bg-ocean-950 text-white shadow-md"
                : "bg-white border border-sand-200 text-ocean-900/60 hover:text-ocean-950 hover:bg-sand-100"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, idx) => {
              // Create dynamic height spans for a premium masonry look
              let gridSpan = "h-72";

              if (idx === 0)
                gridSpan = "h-96 lg:col-span-2";

              if (idx === 5)
                gridSpan = "h-96";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  key={image.src}
                  onClick={() => openLightbox(idx)}
                  className={`relative ${gridSpan} rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-500`}
                >
                  {image.type === "video" ? (
                    <video
                      src={image.src}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      muted
                      playsInline
                      autoPlay
                      loop
                    />
                  ) : (
                    <Image
                      src={image.src}
                      alt={t(image.altKey)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-w-7xl) 33vw, 100vw"
                      loading="lazy"
                    />
                  )}
                  {/* Frosted hovering glass panel */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.1, opacity: 1 }}
                      className="p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white"
                    >
                      <Maximize2 size={20} />
                    </motion.div>
                  </div>

                  {/* Gradient label overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <span className="text-[10px] tracking-widest text-sunset-500 uppercase font-semibold">
                      {t(`gallery.cat.${image.category}`)}
                    </span>
                    <h4 className="text-white text-sm font-medium tracking-wide uppercase mt-1">
                      {t("hero.title")}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Cinematic Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Trigger */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 text-white transition-all"
            >
              <X size={20} />
            </button>

            {/* Previous Photo Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 z-50 p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Photo Container */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()} // block click-through close
            >
              {images[lightboxIndex].type === "video" ? (
                <video
                  src={images[lightboxIndex].src}
                  controls
                  autoPlay
                  loop
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={images[lightboxIndex].src}
                  alt={t(images[lightboxIndex].altKey)}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              )}
            </motion.div>

            {/* Next Photo Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 z-50 p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white/80 z-40 bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/5 text-xs sm:text-sm tracking-wider uppercase font-light">
              <span className="text-sunset-500 font-semibold">{t(`gallery.cat.${images[lightboxIndex].category}`)}</span>
              {" — "}
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
