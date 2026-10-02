"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { useTranslations } from "@/lib/language-context";
import { type Locale } from "@/lib/dictionaries";
import { SITE_DATA } from "@/data/site-data";

const phone = SITE_DATA.contacts.phones[0];
const whatsapp = SITE_DATA.contacts.whatsapp;

const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ka", label: "KA" },
  { code: "ru", label: "RU" },
];

export default function Header() {
  const { t, locale, setLocale } = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const NAV_LINKS = [
    { href: "#fleet", label: t.nav.fleet },
    { href: "#tours", label: t.nav.tours },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-md border-b border-brand-green/30 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-brand-black/85 backdrop-blur-md border-b border-brand-green/20 py-4"
      }`}
      role="banner"
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-brand-gold rounded"
            aria-label="Buggyland Tbilisi — go to homepage"
          >
            <div className="w-9 h-9 rounded-lg bg-brand-green border border-brand-green-glow/40 flex items-center justify-center shadow-[0_0_15px_hsl(142,60%,22%,0.8)] group-hover:scale-105 transition-transform">
              <Leaf size={18} className="text-brand-gold" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display uppercase text-brand-white text-2xl lg:text-3xl tracking-wider">
                Buggy<span className="text-brand-gold">land</span>
              </span>
              <span className="text-[10px] font-body uppercase tracking-[0.25em] text-brand-green-glow mt-0.5 font-bold">
                Tbilisi · Georgia
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-brand-gray-300 hover:text-brand-gold transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div
              className="flex items-center bg-brand-gray-900/90 border border-brand-gray-700/80 rounded-lg p-1 gap-1"
              role="group"
              aria-label="Language selector"
            >
              {LOCALES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLocale(code)}
                  aria-current={locale === code ? "true" : undefined}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                    locale === code
                      ? "text-brand-black bg-brand-gold shadow-sm font-extrabold"
                      : "text-brand-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-5 py-2.5 glow-gold font-bold uppercase tracking-wider"
              aria-label="Book now on WhatsApp"
            >
              {t.nav.bookNow}
            </a>
          </div>

          {/* Mobile: call + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile language switcher */}
            <div className="flex items-center bg-brand-gray-900 border border-brand-gray-700 rounded-md p-0.5">
              {LOCALES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLocale(code)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    locale === code ? "bg-brand-gold text-brand-black" : "text-brand-gray-400"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="p-2 text-brand-gold hover:text-brand-gold-light"
              aria-label={`Call ${phone}`}
            >
              <Phone size={18} />
            </a>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 text-brand-white focus:outline-none"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-brand-black/98 backdrop-blur-xl border-t border-brand-green/30 mt-3 shadow-2xl"
        >
          <nav
            className="section-container py-6 flex flex-col gap-4"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-bold uppercase tracking-wider text-brand-gray-100 hover:text-brand-gold transition-colors py-2 border-b border-brand-gray-800"
              >
                {link.label}
              </a>
            ))}

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-sm mt-2"
              onClick={closeMenu}
            >
              {t.nav.bookNow}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
