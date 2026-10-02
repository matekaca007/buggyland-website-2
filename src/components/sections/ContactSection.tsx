"use client";

import { Phone, Mail, MessageCircle, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { useTranslations } from "@/lib/language-context";
import { SITE_DATA } from "@/data/site-data";

export default function ContactSection() {
  const { t: dict } = useTranslations();
  const t = dict.contact;

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 relative overflow-hidden bg-brand-gray-950"
      aria-labelledby="contact-heading"
    >
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: CTAs & Information */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
              <span className="w-5 h-0.5 bg-brand-gold" />
              <span>{t.sectionLabel}</span>
            </div>
            <h2
              id="contact-heading"
              className="section-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-brand-white mb-4"
            >
              {t.heading}
            </h2>
            <p className="text-brand-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-lg">
              Send us a WhatsApp message or call directly. We are open 7 days a week and ready to book your spot!
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                id="contact-whatsapp"
                href={SITE_DATA.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-base glow-gold font-bold uppercase tracking-wider flex items-center justify-center gap-3"
                aria-label="Chat with Buggyland on WhatsApp"
              >
                <MessageCircle size={22} className="text-brand-black" />
                <span>{t.whatsappBtn}</span>
              </a>
              <a
                id="contact-call-primary"
                href={`tel:${SITE_DATA.contacts.phones[0].replace(/\s/g, "")}`}
                className="btn-ghost px-8 py-4 text-base font-bold uppercase tracking-wider flex items-center justify-center gap-3 bg-brand-black/40"
                aria-label={`Call ${SITE_DATA.contacts.phones[0]}`}
              >
                <Phone size={20} className="text-brand-gold" />
                <span>{t.callBtn}</span>
              </a>
            </div>

            {/* Trust Banner */}
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-brand-green/20 border border-brand-green-glow/30">
              <ShieldCheck size={22} className="text-brand-green-glow flex-shrink-0" />
              <p className="text-sm text-brand-gray-200">
                <strong className="text-brand-gold">Open 7 days a week.</strong> Same-day booking available. We speak English, Georgian & Russian.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Details Cards & Map */}
          <div className="flex flex-col gap-4">
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-brand-gray-900/90 border border-brand-gray-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-green/30 border border-brand-green-glow/40 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-1">
                  Phone Numbers
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {SITE_DATA.contacts.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-brand-white font-bold hover:text-brand-gold transition-colors text-base"
                      aria-label={`Call ${phone}`}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-brand-gray-900/90 border border-brand-gray-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-1">
                  {t.emailLabel}
                </p>
                <a
                  href={`mailto:${SITE_DATA.contacts.email}`}
                  className="text-brand-white font-bold hover:text-brand-gold transition-colors text-base"
                >
                  {SITE_DATA.contacts.email}
                </a>
              </div>
            </div>

            {/* Map Container */}
            <div className="rounded-2xl overflow-hidden border border-brand-gray-800 bg-brand-gray-900 shadow-xl">
              <div className="relative w-full h-56 bg-brand-black">
                <iframe
                  title={t.mapAlt}
                  src={SITE_DATA.contacts.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4 bg-brand-gray-900 border-t border-brand-gray-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-gray-200">
                  <MapPin size={18} className="text-brand-gold flex-shrink-0" />
                  <span>Buggyland Tbilisi · Base Camp</span>
                </div>
                <a
                  href={SITE_DATA.contacts.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs px-4 py-2 flex items-center gap-1.5 font-bold"
                >
                  <span>{t.openMap}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
