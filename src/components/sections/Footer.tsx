"use client";

import Link from "next/link";
import { Phone, Mail, MessageCircle, Leaf } from "lucide-react";
import { useTranslations } from "@/lib/language-context";
import { SITE_DATA } from "@/data/site-data";

const NAV_LINKS = [
  { href: "#fleet",        label: "Vehicles" },
  { href: "#tours",        label: "Tours" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#gallery",      label: "Gallery" },
  { href: "#contact",      label: "Contact" },
];

export default function Footer() {
  const { t: dict } = useTranslations();
  const t = dict.footer;

  return (
    <footer
      className="bg-brand-black border-t border-brand-gray-800 relative z-10"
      role="contentinfo"
    >
      <div className="section-container py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-4 group"
              aria-label="Buggyland Tbilisi homepage"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-green border border-brand-green-glow/40 flex items-center justify-center shadow-[0_0_12px_hsl(142,60%,22%,0.8)]">
                <Leaf size={16} className="text-brand-gold" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display uppercase text-brand-white text-2xl tracking-wider">
                  Buggy<span className="text-brand-gold">land</span>
                </span>
                <span className="text-[10px] font-body uppercase tracking-[0.25em] text-brand-green-glow mt-0.5 font-bold">
                  Tbilisi · Georgia
                </span>
              </div>
            </Link>

            <p className="text-brand-gray-400 text-sm leading-relaxed max-w-sm mb-4">
              {t.tagline}
            </p>
            <p className="georgian text-brand-gray-500 text-xs font-medium" lang="ka">
              ბაგილენდი თბილისი — ექსტრემალური ოფროუდ თავგადასავალი
            </p>
          </div>

          {/* Quick Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-gray-300 hover:text-brand-gold transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              {SITE_DATA.contacts.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 text-sm text-brand-gray-300 hover:text-brand-gold transition-colors font-medium"
                    aria-label={`Call ${phone}`}
                  >
                    <Phone size={15} className="text-brand-green-glow flex-shrink-0" />
                    <span>{phone}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE_DATA.contacts.email}`}
                  className="flex items-center gap-2.5 text-sm text-brand-gray-300 hover:text-brand-gold transition-colors font-medium"
                >
                  <Mail size={15} className="text-brand-gold flex-shrink-0" />
                  <span>{SITE_DATA.contacts.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_DATA.contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-brand-gray-300 hover:text-brand-gold transition-colors font-medium"
                >
                  <MessageCircle size={15} className="text-brand-green-glow flex-shrink-0" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-brand-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-gray-400">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-green-glow animate-pulse" />
            <span className="font-semibold text-brand-gray-300">buggy.ge</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
