import type { Config } from "tailwindcss";
import { Roboto_Slab } from "next/font/google";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      kaushan: ["Kaushan Script"],
      roboto: ["Roboto Slab"],
      montserrat: ["Montserrat"],
    },
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c",
    },
    colors: {
      green: {
        DEFAULT: "#00f260",
        300: "#4ade80",
        500: "#84cc16",
        600: "#16a34a",
      },
      black: {
        DEFAULT: "#010101",
        100: "#353935",
        200: "#202125",
        300: "#16181D",
        400: "#0f1115",
        500: "#0a0b0e",
      },
      neutral: {
        DEFAULT: "#a3a3a3",
        100: "#737373",
        200: "#525252",
        300: "#404040",
        400: "#262626",
        500: "#171717",
      },
      gray: {
        DEFAULT: "#2e2f33",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
      },
    },
    variants: {
      extend: {
        boxShadow: ["dark"],
      },
    },
  },
  plugins: [],
};
export default config;
