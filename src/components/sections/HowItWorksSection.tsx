"use client";

import { Truck, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { useTranslations } from "@/lib/language-context";

const STEP_ICONS = [Truck, MessageCircle, ShieldCheck, Zap];

export default function HowItWorksSection() {
  const { t: dict } = useTranslations();
  const t = dict.howItWorks;

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-32 relative overflow-hidden bg-brand-gray-950"
      aria-labelledby="how-heading"
    >
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
            <span className="w-5 h-0.5 bg-brand-gold" />
            <span>{t.sectionLabel}</span>
            <span className="w-5 h-0.5 bg-brand-gold" />
          </div>
          <h2 id="how-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-brand-white">
            {t.heading}
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.steps.map((step, idx) => {
            const Icon = STEP_ICONS[idx % STEP_ICONS.length];

            return (
              <div
                key={step.number}
                className="relative flex flex-col p-6 rounded-2xl bg-brand-gray-900/90 border border-brand-gray-800 hover:border-brand-green-glow/50 transition-all duration-300 shadow-xl group"
              >
                {/* Header with Icon and Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-brand-green/30 border border-brand-green-glow/40 flex items-center justify-center text-brand-gold shadow-[0_0_15px_rgba(22,101,52,0.4)] group-hover:scale-105 transition-transform">
                    <Icon size={26} className="text-brand-gold" />
                  </div>
                  <span className="font-display font-bold text-4xl text-brand-gray-700 group-hover:text-brand-gold transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold uppercase text-brand-white text-xl tracking-wide mb-2 group-hover:text-brand-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-brand-gray-300 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Bottom line accent */}
                <div className="mt-6 pt-2 border-t border-brand-gray-800">
                  <div className="h-1 w-10 bg-brand-gold/60 rounded-full group-hover:w-full group-hover:bg-brand-gold transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
