import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    dropShadow: {
      "3xl": "0 35px 35px rgba(112,144,176,.08)",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: {
          50: "#E8F0F7",
          100: "#B8D1E5",
          200: "#96BBD9",
          300: "#669CC7",
          400: "#4989BD",
          500: "#1B6BAC",
          600: "#19619D",
          700: "#134C7A",
          800: "#0F3B5F",
          900: "#082034",
          950: "#061928",
        },
        secondary: {
          50: "#fef9e6",
          100: "#fdecb0",
          200: "#fce38a",
          300: "#fad654",
          400: "#f9ce33",
          500: "#f8c200",
          600: "#e2b100",
          700: "#b08a00",
          800: "#886b00",
          900: "#685100",
        },
        gradient: {
          50: "#20C3CF",
          200: "#11316D",
        },
        background: "#F3F4F8",
        shadow: "rgba(112,144,176,.08)",
      },
      boxShadow: {
        "t-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
        "t-md":
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "t-lg":
          "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "t-xl":
          "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "t-2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
        "t-3xl": "0 -35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
