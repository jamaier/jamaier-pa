import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      kaushan: ["Kaushan Script"],
    },
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c",
    },
    colors: {
      black: {
        DEFAULT: "#010101",
        100: "#353935",
        200: "#202125",
        300: "#16181D",
        400: "#0f1115",
        500: "#0a0b0e",
      },
      gray: {
        DEFAULT: "#2e2f33",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
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
