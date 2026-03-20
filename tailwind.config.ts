import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charbon:    "#1C1C1A",
        or:         "#C9A84C",
        "or-clair": "#D4B96A",
        "or-pale":  "#EFE3C0",
        vert:       "#2D6A2F",
        "vert-fonce":"#1A3D1C",
        "vert-clair":"#52A855",
        brun:       "#5C3317",
        "brun-clair":"#9B5E30",
        creme:      "#FDF6E3",
        "creme-dark":"#F5EAC8",
        "blanc-casse":"#FFFDF5",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body:    ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "fade-up":  "fadeUp 0.7s ease forwards",
        "fade-in":  "fadeIn 1s ease forwards",
        float:      "float 6s ease-in-out infinite",
        marquee:    "marquee 25s linear infinite",
        "pulse-gold":"pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,168,76,0.4)" },
          "50%":      { boxShadow: "0 0 0 12px rgba(201,168,76,0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
