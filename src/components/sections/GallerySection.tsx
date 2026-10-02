"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useTranslations } from "@/lib/language-context";
import { IMAGES, type GalleryImage } from "@/lib/images";

const images: readonly GalleryImage[] = IMAGES.gallery.slice(0, 12); // Show top 12 curated action photos

export default function GallerySection() {
  const { t: dict } = useTranslations();
  const t = dict.gallery;
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);

  const prev = useCallback(() => {
    setLightboxIdx((idx) =>
      idx === null ? null : (idx - 1 + images.length) % images.length
    );
  }, []);

  const next = useCallback(() => {
    setLightboxIdx((idx) =>
      idx === null ? null : (idx + 1) % images.length
    );
  }, []);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, prev, next]);

  return (
    <section
      id="gallery"
      className="py-20 lg:py-32 bg-brand-black relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-brand-gray-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
              <span className="w-5 h-0.5 bg-brand-gold" />
              <span>{t.sectionLabel}</span>
            </div>
            <h2 id="gallery-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-brand-white">
              {t.heading}
            </h2>
          </div>
          <p className="text-brand-gray-400 text-sm max-w-xs sm:text-right">
            Real riders, real mud, and real mountain adventures in Tbilisi.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button
              key={img.src}
              className="group relative aspect-square w-full overflow-hidden rounded-xl bg-brand-gray-900 border border-brand-gray-800 hover:border-brand-gold/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold cursor-pointer"
              onClick={() => openLightbox(idx)}
              aria-label={`View photo ${idx + 1}: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-brand-black/70 p-2.5 rounded-full border border-brand-gold/40 text-brand-gold">
                  <ZoomIn size={20} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full aspect-[4/3] rounded-2xl overflow-hidden border border-brand-green/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIdx].src}
              alt={images[lightboxIdx].alt}
              fill
              sizes="90vw"
              className="object-contain bg-black"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-center">
              <p className="text-white text-sm font-semibold">{images[lightboxIdx].alt}</p>
              <p className="text-brand-gold text-xs mt-1">{lightboxIdx + 1} / {images.length}</p>
            </div>
          </div>

          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-brand-gray-900/90 text-white hover:bg-brand-gold hover:text-brand-black border border-brand-gray-700 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-6 p-3 rounded-full bg-brand-gray-900/90 text-white hover:bg-brand-gold hover:text-brand-black border border-brand-gray-700 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-6 p-3 rounded-full bg-brand-gray-900/90 text-white hover:bg-brand-gold hover:text-brand-black border border-brand-gray-700 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
