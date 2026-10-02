export const SITE_DATA = {
  contacts: {
    phones: ["+995 501 100 120", "+995 574 40 44 44"],
    email: "ride@buggy.ge", // TODO(client): the current site shows info@buggylandtbilisi.com, confirm which is correct
    whatsapp:
      "https://wa.me/995501100120?text=Hi%20Buggyland!%20I%20want%20to%20book%20a%20tour",
    mapUrl: "https://maps.app.goo.gl/JFNuYMccK921yY6JA",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=41.8070442,44.6916305&hl=en&z=15&output=embed",
  },
  fleet: [
    {
      id: "atv",
      title: "ATVs / Quad Bikes",
      badge: "2024–2026 Models",
      desc: "Exceptionally maneuverable and comfortable for exploration across wild tracks.",
      specs: ["1-2 Riders", "Automatic", "Beginner Friendly"],
      tag: "Popular",
    },
    {
      id: "buggy",
      title: "Amateur & Pro Buggies",
      badge: "High Capability",
      desc: "Sport off-road vehicles built for rough terrains, ranging from mid-power to top-tier models.",
      specs: ["2-4 Seats", "4x4 Drive", "Extreme Trails"],
      tag: "Adrenaline",
    },
    {
      id: "jeep",
      title: "Extreme Jeeps",
      badge: "Group Expeditions",
      desc: "Safe and powerful off-road SUVs built for rugged mountain journeys.",
      specs: ["Up to 6 Seats", "All-Weather", "Guided Tours"],
      tag: "Comfort",
    },
  ],
  tours: [
    {
      title: "Hourly & 1-Day Getaways",
      duration: "1 to 8 Hours",
      desc: "Perfect for a quick adrenaline shot or an active weekend getaway near Tbilisi.",
      features: ["Scenic Trails", "Full Safety Gear", "Instructor Included"],
    },
    {
      title: "Multi-Day Expeditions",
      duration: "2–5 Days",
      desc: "Explore Georgia's most remote, wild, and breathtaking mountainous regions.",
      features: ["Custom Routes", "Extreme Off-Road", "Overnight Stays"],
    },
    {
      title: "Night & Winter Off-Road",
      duration: "Specialized",
      desc: "Experience night riding under the stars or snow-covered winter challenges.",
      features: ["Pro Lighting", "Extreme Mud/Snow", "Guided Lead"],
    },
  ],
} as const;

export type SiteData = typeof SITE_DATA;
export type FleetItem = (typeof SITE_DATA.fleet)[number];
export type TourItem = (typeof SITE_DATA.tours)[number];
