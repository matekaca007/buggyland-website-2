"use client";

import Image from "next/image";
import { Users, Gauge, Mountain, MessageCircle, ArrowRight } from "lucide-react";
import { useTranslations } from "@/lib/language-context";
import { SITE_DATA } from "@/data/site-data";
import { IMAGES } from "@/lib/images";

const TAG_STYLES: Record<string, string> = {
  Popular:    "bg-brand-gold text-brand-black",
  Adrenaline: "bg-red-600 text-white",
  Comfort:    "bg-brand-green text-brand-white border border-brand-green-glow/50",
};

const SPEC_ICONS = [Users, Gauge, Mountain];

const FLEET_IMAGES: Record<string, string> = {
  atv:   IMAGES.fleet.atv,
  buggy: IMAGES.fleet.buggy,
  jeep:  IMAGES.fleet.jeep,
};

const FLEET_WHATSAPP_MSGS: Record<string, string> = {
  atv:   "Hi Buggyland! I want to book an ATV / Quad Bike tour",
  buggy: "Hi Buggyland! I want to book a Buggy tour",
  jeep:  "Hi Buggyland! I want to book a Jeep expedition",
};

function buildWhatsApp(vehicle: string) {
  return `https://wa.me/995501100120?text=${encodeURIComponent(FLEET_WHATSAPP_MSGS[vehicle] ?? "Hi Buggyland! I want to book a tour")}`;
}

export default function FleetSection() {
  const { t: dict } = useTranslations();
  const t = dict.fleet;

  return (
    <section
      id="fleet"
      className="py-20 lg:py-32 relative overflow-hidden bg-brand-gray-950"
      aria-labelledby="fleet-heading"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse at 100% 0%, hsl(142,60%,35%), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-brand-gray-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
              <span className="w-5 h-0.5 bg-brand-gold" />
              <span>{t.sectionLabel}</span>
            </div>
            <h2 id="fleet-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-brand-white">
              {t.heading}
            </h2>
          </div>
          <p className="text-brand-gray-400 text-sm max-w-sm md:text-right">
            Top-maintained, modern off-road machines ready for any trail condition.
          </p>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SITE_DATA.fleet.map((vehicle, idx) => (
            <article
              key={vehicle.id}
              className="card group flex flex-col bg-brand-gray-900/90 border border-brand-gray-800 hover:border-brand-green-glow/50 transition-all duration-300 rounded-2xl overflow-hidden shadow-xl"
              aria-label={vehicle.title}
            >
              {/* Card Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-black">
                <Image
                  src={FLEET_IMAGES[vehicle.id] ?? IMAGES.fleet.atv}
                  alt={`${vehicle.title} — Buggyland Tbilisi`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-gray-900 via-brand-gray-900/40 to-transparent" />

                {/* Tag Pill */}
                <span className={`tag-pill font-bold shadow-md ${TAG_STYLES[vehicle.tag] ?? "bg-brand-gray-700 text-white"}`}>
                  {vehicle.tag}
                </span>

                {/* Index Number */}
                <div className="absolute top-4 left-4 font-display font-bold text-5xl text-brand-white/20 select-none">
                  0{idx + 1}
                </div>

                {/* Badge at Bottom of Image */}
                <div className="absolute bottom-3 left-4">
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-brand-black/80 text-brand-gold border border-brand-gold/30 backdrop-blur-md">
                    {vehicle.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <div>
                  <h3 className="font-heading font-extrabold uppercase text-brand-white text-2xl tracking-wide group-hover:text-brand-gold transition-colors duration-200 mb-2">
                    {vehicle.title}
                  </h3>
                  <p className="text-brand-gray-300 text-sm leading-relaxed">
                    {vehicle.desc}
                  </p>
                </div>

                {/* Spec Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {vehicle.specs.map((spec, i) => {
                    const Icon = SPEC_ICONS[i % SPEC_ICONS.length];
                    return (
                      <span
                        key={spec}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-brand-gray-800 text-brand-gray-200 border border-brand-gray-700"
                      >
                        <Icon size={13} className="text-brand-gold" aria-hidden="true" />
                        {spec}
                      </span>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-4 border-t border-brand-gray-800/80">
                  <a
                    id={`fleet-book-${vehicle.id}`}
                    href={buildWhatsApp(vehicle.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-sm py-3 font-bold group/btn shadow-md"
                    aria-label={`Book ${vehicle.title} on WhatsApp`}
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
