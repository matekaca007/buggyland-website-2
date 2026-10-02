"use client";

import Image from "next/image";
import { Clock, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "@/lib/language-context";
import { SITE_DATA } from "@/data/site-data";
import { IMAGES } from "@/lib/images";

const TOUR_IMAGES = [
  IMAGES.tours.dayTrip,
  IMAGES.tours.multiDay,
  IMAGES.tours.night,
];

const TOUR_WHATSAPP_MSGS = [
  "Hi Buggyland! I want to book a day trip (1-8 hours)",
  "Hi Buggyland! I want to book a multi-day expedition",
  "Hi Buggyland! I want to book a night or winter off-road tour",
];

function buildWhatsApp(msg: string) {
  return `https://wa.me/995501100120?text=${encodeURIComponent(msg)}`;
}

export default function ToursSection() {
  const { t: dict } = useTranslations();
  const t = dict.tours;

  return (
    <section
      id="tours"
      className="py-20 lg:py-32 bg-brand-black relative overflow-hidden"
      aria-labelledby="tours-heading"
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 50%, hsl(142,60%,35%), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
            <span className="w-5 h-0.5 bg-brand-gold" />
            <span>{t.sectionLabel}</span>
            <span className="w-5 h-0.5 bg-brand-gold" />
          </div>
          <h2 id="tours-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-brand-white mb-3">
            {t.heading}
          </h2>
          <p className="text-brand-gray-300 text-sm sm:text-base">
            From quick 1-hour adrenaline blasts to multi-day wilderness expeditions across Georgia.
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SITE_DATA.tours.map((tour, idx) => (
            <article
              key={tour.title}
              className="card group flex flex-col bg-brand-gray-900/90 border border-brand-gray-800 hover:border-brand-gold/60 transition-all duration-300 rounded-2xl overflow-hidden shadow-xl"
              aria-label={tour.title}
            >
              {/* Tour Image */}
              <div className="relative h-64 w-full overflow-hidden bg-brand-black">
                <Image
                  src={TOUR_IMAGES[idx] ?? IMAGES.tours.dayTrip}
                  alt={`${tour.title} — Buggyland off-road tour`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-gray-900 via-brand-gray-900/40 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand-black/85 backdrop-blur-md border border-brand-gold/40 shadow-sm">
                  <Clock size={14} className="text-brand-gold" aria-hidden="true" />
                  <span className="text-xs font-extrabold text-brand-white uppercase tracking-wider">{tour.duration}</span>
                </div>
              </div>

              {/* Tour Content */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <div>
                  <h3 className="font-heading font-extrabold uppercase text-brand-white text-2xl tracking-wide group-hover:text-brand-gold transition-colors duration-200 mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-brand-gray-300 text-sm leading-relaxed">
                    {tour.desc}
                  </p>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-2 pt-2" aria-label="Tour features">
                  {tour.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-brand-gray-200 font-medium">
                      <CheckCircle2 size={16} className="text-brand-green-glow flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto pt-4 border-t border-brand-gray-800/80">
                  <a
                    id={`tour-book-${idx}`}
                    href={buildWhatsApp(TOUR_WHATSAPP_MSGS[idx])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-sm py-3 font-bold group/btn shadow-md"
                    aria-label={`Book ${tour.title} on WhatsApp`}
                  >
                    <MessageCircle size={18} />
                    <span>{t.cta}</span>
                    <ArrowRight size={16} className="ml-auto opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
