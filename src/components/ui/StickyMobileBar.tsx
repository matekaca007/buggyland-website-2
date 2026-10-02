"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

const whatsapp = SITE_DATA.contacts.whatsapp;
const phone    = SITE_DATA.contacts.phones[0];
const phoneRaw = phone.replace(/\s/g, "");

export default function StickyMobileBar() {
  const [visible, setVisible] = useState(true);
  const contactRef = useRef<Element | null>(null);

  useEffect(() => {
    contactRef.current = document.getElementById("contact");
    if (!contactRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex gap-3 p-4"
      style={{
        paddingBottom: "calc(1rem + env(safe-area-inset-bottom))",
        background: "hsl(30,8%,5%,0.97)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid hsl(142,50%,18%,0.5)",
        boxShadow: "0 -4px 24px hsl(142,60%,8%,0.6)",
      }}
      role="navigation"
      aria-label="Mobile quick actions"
    >
      <a
        id="mobile-whatsapp-bar"
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 btn-primary justify-center text-sm py-3.5 glow-gold"
        aria-label="Book a tour on WhatsApp"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
      <a
        id="mobile-call-bar"
        href={`tel:${phoneRaw}`}
        className="flex-1 btn-ghost justify-center text-sm py-3.5"
        aria-label={`Call ${phone}`}
      >
        <Phone size={18} />
        Call Now
      </a>
    </div>
  );
}
