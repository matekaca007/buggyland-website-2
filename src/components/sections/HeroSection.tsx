"use client";

import Image from "next/image";
import { MessageCircle, Phone, Shield, GraduationCap, Smile, MapPin } from "lucide-react";
import { useTranslations } from "@/lib/language-context";
import { SITE_DATA } from "@/data/site-data";
import { IMAGES } from "@/lib/images";

const TRUST_ICONS = [Shield, GraduationCap, Smile, MapPin];

export default function HeroSection() {
  const { t: dict, locale } = useTranslations();
  const t = dict.hero;

  const phone    = SITE_DATA.contacts.phones[0];
  const phoneRaw = phone.replace(/\s/g, "");
  const whatsapp = SITE_DATA.contacts.whatsapp;

  const isGeorgian = locale === "ka";
  const headlineFont = isGeorgian
    ? "font-heading font-extrabold"
    : "font-display font-normal";

  const headlineSize = isGeorgian
    ? { fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "0.02em", lineHeight: "1.08" }
    : { fontSize: "clamp(3.5rem, 11vw, 9.5rem)", letterSpacing: "0.02em", lineHeight: "0.9" };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-8 overflow-hidden bg-brand-black"
      aria-label="Hero — Buggyland Tbilisi"
    >
      {/* Background Image Container with proper aspect ratio */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt="ATV and buggy riders in Tbilisi"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered dark overlays for guaranteed readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/60 to-brand-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/40 to-transparent" />
      </div>

      {/* Topographic subtle texture overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 20%, hsl(43,90%,52%,0.15), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Main Hero Content */}
      <div className="relative z-10 section-container flex-1 flex flex-col justify-center py-12">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/30 border border-brand-green-glow/40 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(22,101,52,0.4)]">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-white">
              Tbilisi, Georgia · Premium Off-Road Park
            </span>
          </div>

          {/* Main Headline */}
          <div className="mb-6">
            <h1
              className={`${headlineFont} uppercase text-brand-white`}
              style={headlineSize}
            >
              {t.headline}
            </h1>
            <h1
              className={`${headlineFont} uppercase text-gold-shimmer`}
              style={headlineSize}
            >
              {t.headlineAccent}
            </h1>
          </div>

          {/* Gold separator */}
          <div className="flex items-center gap-3 mb-6 max-w-md">
            <div className="h-1 w-16 bg-brand-gold rounded-full" />
            <div className="h-px flex-1 bg-gradient-to-r from-brand-gold/60 to-transparent" />
          </div>

          {/* Subheading */}
          <p className="text-brand-gray-200 text-base sm:text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed font-medium">
            {t.subhead}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              id="hero-whatsapp-cta"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 glow-gold font-bold uppercase tracking-wide flex items-center justify-center gap-3"
              aria-label="Book your tour on WhatsApp"
            >
              <MessageCircle size={22} className="text-brand-black" />
              <span>{t.ctaWhatsapp}</span>
            </a>
            <a
              id="hero-call-cta"
              href={`tel:${phoneRaw}`}
              className="btn-ghost text-base px-8 py-4 font-bold uppercase tracking-wide flex items-center justify-center gap-3 bg-brand-black/50 backdrop-blur-sm"
              aria-label={`Call us at ${phone}`}
            >
              <Phone size={20} className="text-brand-gold" />
              <span>{t.ctaCall}</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {t.trust.map((item, i) => {
              const Icon = TRUST_ICONS[i % TRUST_ICONS.length];
              return (
                <div key={item} className="flex items-center gap-2 text-sm text-brand-gray-200 font-semibold bg-brand-black/40 px-3 py-1.5 rounded-lg border border-brand-gray-800/80 backdrop-blur-sm">
                  <Icon size={16} className="text-brand-green-glow flex-shrink-0" />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Stats Glass Strip */}
      <div className="relative z-10 section-container w-full mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-brand-green/30 rounded-2xl overflow-hidden bg-brand-gray-950/90 backdrop-blur-xl border border-brand-green/40 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          {[
            { num: "500+", label: "Riders Thrilled" },
            { num: "3",    label: "Vehicle Types"  },
            { num: "5.0 ★", label: "Top Rated"      },
            { num: "7 / 7", label: "Open Every Day" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-5 px-4 text-center group hover:bg-brand-green/10 transition-colors"
            >
              <span
                className="font-display text-brand-gold font-bold leading-none tracking-wide text-3xl sm:text-4xl lg:text-5xl group-hover:scale-105 transition-transform"
              >
                {stat.num}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gray-300 font-bold mt-1.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
