import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'

  theme: {
    // text-xs	font-size: 0.75rem; /* 12px */
    // line-height: 1rem; /* 16px */
    extend: {
      height: {
        "128": "32rem",
      },
      grayscale: {
        10: "10%",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: {
          100: "#f3f3f1",
          200: "#dadcd6",
          300: "#c2c5ba",
          400: "#a9ad9e",
          500: "#777c69",
          600: "#5d6152",
          700: "#42453a",
          800: "#282923",
          900: "#0d0e0c",
          // this color is pink, used for winner in tic toc toe game
          950: "#d7908c",
        },
        leafgreen: {
          100: "#eaeae8",
          200: "#d5d6d0",
          // this color is used for tictoctoe game
          300: "#a89d3d",
          400: "#97988b",
          500: "#828373",
          600: "#6d6f5c",
          700: "#595a45",
          800: "#44462d",
          900: "#2f3116",
        },
        // ...
      },

      fontFamily: {
        plantin: ["plantin", "sans-serif"],
        kennerly: ["ltc-kennerley", "serif"],
        orphe: ["orpheuspro", "serif"],
        kumlien: ["kumlien-pro-condensed", "serif"],
        "beloved-script": ["beloved-script", "sans-serif"],
        "beloved-or": ["beloved-ornaments", "sans-serif"],
        "beloved-sans": ["beloved-sans", "sans-serif"],
        reflex: ["reflex-pro-variable", "sans-serif"],
        filo: ["filosofia-all-small-caps", "serif"],
        circe: ["circe", "sans-serif"],
        "circe-rounded": ["circle-rounded", "sans-serif"],
        // Hegante: ["hegante", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/background/hero-page.png')",
        "reverse-hero-pattern": "url('/background/reverse-hero-page.png')",
        "ava-bg": "url('/background/ava-bg.png')",
        "hover-bg": "url('/background/hover-bg.png')",
        "long-hover-bg": "url('/background/long-hover-bg.png')",
        "flower-pattern": "url('/background/flowers.png')",

        // "footer-texture": "url('/img/footer-texture.png')",
      },
      // text-xs	font-size: 0.75rem; /* 12px */
      // line-height: 1rem; /* 16px */
      fontSize: {
        "2xs": [
          "0.55rem",
          {
            lineHeight: "0.8rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  // plugins: [
  //   require("@tailwindcss/forms")({
  //     strategy: "class",
  //   }),
  // ],
};
export default config;
