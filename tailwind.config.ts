import primaryToken from "./theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "fill-available": "-webkit-fill-available",
      },
      backgroundColor: {
        default: "#ffff",
        primary: primaryToken.gogoGreen,
        danger: primaryToken.hopChopRed,
      },
      colors: {
        default: primaryToken.gogoGreen,
        primary: "#fff",
      },
    },
  },
  plugins: [],
};
export default config;
