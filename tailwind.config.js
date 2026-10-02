/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary greens
          green:        "hsl(142, 60%, 22%)",
          "green-mid":  "hsl(142, 50%, 30%)",
          "green-light":"hsl(142, 45%, 40%)",
          "green-glow": "hsl(142, 65%, 48%)",
          // Gold accent
          gold:         "hsl(43, 90%, 52%)",
          "gold-dark":  "hsl(38, 85%, 40%)",
          "gold-light": "hsl(45, 95%, 65%)",
          // Neutrals – warm dark
          black:        "hsl(30, 8%, 5%)",
          "gray-950":   "hsl(30, 6%, 8%)",
          "gray-900":   "hsl(30, 5%, 12%)",
          "gray-800":   "hsl(30, 4%, 18%)",
          "gray-700":   "hsl(30, 3%, 26%)",
          "gray-500":   "hsl(30, 3%, 46%)",
          "gray-300":   "hsl(30, 5%, 74%)",
          "gray-100":   "hsl(30, 8%, 93%)",
          white:        "hsl(40, 20%, 98%)",
        },
      },
      fontFamily: {
        // Ultra-bold condensed display — hero headlines
        display: ["var(--font-bebas)", "Impact", "Arial Narrow", "sans-serif"],
        // Athletic condensed — section headings, card titles
        heading: ["var(--font-barlow)", "var(--font-noto-sans-georgian)", "Impact", "sans-serif"],
        // Modern geometric — body text
        body:    ["var(--font-dm-sans)", "var(--font-noto-sans-georgian)", "system-ui", "sans-serif"],
        georgian:["var(--font-noto-sans-georgian)", "sans-serif"],
      },
      fontSize: {
        "hero":       "clamp(2.5rem, 8vw, 7rem)",
        "section":    "clamp(1.8rem, 5vw, 3.5rem)",
        "card-title": "clamp(1.2rem, 2.5vw, 1.75rem)",
      },
      backgroundImage: {
        "gradient-radial":  "radial-gradient(var(--tw-gradient-stops))",
        "hero-overlay":     "linear-gradient(to bottom, rgba(7,14,5,0.55) 0%, rgba(7,14,5,0.3) 40%, rgba(7,14,5,0.88) 100%)",
        "card-overlay":     "linear-gradient(to top, rgba(7,14,5,0.95) 0%, rgba(7,14,5,0.55) 50%, transparent 100%)",
        "section-dark":     "linear-gradient(135deg, hsl(30,6%,8%) 0%, hsl(30,5%,12%) 100%)",
        "gold-gradient":    "linear-gradient(135deg, hsl(45,95%,65%) 0%, hsl(38,85%,40%) 100%)",
        "green-gradient":   "linear-gradient(135deg, hsl(142,60%,22%) 0%, hsl(142,45%,40%) 100%)",
      },
      animation: {
        "float":      "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "scan-line":  "scan-line 3s ease-in-out infinite",
        "shimmer":    "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(43,90%,52%,0.3)" },
          "50%":      { boxShadow: "0 0 40px hsl(43,90%,52%,0.7)" },
        },
        "scan-line": {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      screens: {
        xs: "390px",
      },
    },
  },
  plugins: [],
};
