// UI string dictionary - English; mirrors dictionaries.ts EN locale
export const UI_STRINGS = {
  nav: {
    fleet: "Vehicles",
    tours: "Tours",
    gallery: "Gallery",
    contact: "Contact",
    bookNow: "Reserve a Spot",
  },
  hero: {
    headline: "Conquer the",
    headlineAccent: "Wild Trails.",
    subhead: "Tbilisi's most thrilling off-road experience — ATVs, buggies, extreme jeeps & guided mountain expeditions.",
    ctaWhatsapp: "Reserve on WhatsApp",
    ctaCall: "Call to Book",
    trust: [
      "Safety Gear Provided",
      "Expert Instructors",
      "All Skill Levels Welcome",
      "Tbilisi, Georgia",
    ],
  },
  fleet: {
    sectionLabel: "Machines Built for the Wild",
    heading: "Pick Your Weapon",
    cta: "Reserve This Ride",
  },
  tours: {
    sectionLabel: "Trail Options",
    heading: "Your Next Adventure",
    cta: "Reserve This Tour",
  },
  howItWorks: {
    sectionLabel: "Simple as Mud",
    heading: "Three Steps to the Trail",
    steps: [
      {
        number: "01",
        title: "Pick Your Machine",
        desc: "Browse our fleet of ATVs, buggies and extreme jeeps — choose what excites you most.",
        icon: "truck",
      },
      {
        number: "02",
        title: "Contact Us",
        desc: "Send a WhatsApp or give us a call. We'll lock in your date and answer every question.",
        icon: "message-circle",
      },
      {
        number: "03",
        title: "Suit Up",
        desc: "Show up at base camp. Full safety gear, helmet and a quick briefing — all included.",
        icon: "shield-check",
      },
      {
        number: "04",
        title: "Hit the Dirt",
        desc: "Tear through Georgia's raw mountain terrain with your expert guide leading the way.",
        icon: "zap",
      },
    ],
  },
  gallery: {
    sectionLabel: "From the Trails",
    heading: "Real Rides. Real Dirt.",
    close: "Close",
    prev: "Previous",
    next: "Next",
  },
  contact: {
    sectionLabel: "Let's Roll",
    heading: "Start Your Adventure",
    whatsappBtn: "Message on WhatsApp",
    callBtn: "Give Us a Call",
    emailLabel: "Email",
    mapPlaceholder: "Buggyland Tbilisi — Base Camp",
    mapAlt: "Buggyland Tbilisi location map",
    openMap: "View on Google Maps",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Buggyland Tbilisi. All rights reserved.`,
    tagline: "Off-Road Thrills in the Heart of Georgia",
  },
  lang: {
    en: "EN",
    ka: "KA",
    ru: "RU",
  },
} as const;

export type UiStrings = typeof UI_STRINGS;
