import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '34': 'repeat(34, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '21': 'repeat(21, minmax(0, 1fr))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
