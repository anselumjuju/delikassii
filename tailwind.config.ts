import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '900': 'var(--primary-900)',
          '500': 'var(--primary-500)',
        },
        secondary: {
          '900': 'var(--secondary-900)',
          '500': 'var(--secondary-500)',
        },
        accent: {
          '900': 'var(--accent-900)',
          '500': 'var(--accent-500)',
        },
      },
      fontFamily: {
        openSans: ['var(--font-open-sans)'],
        raleway: ['var(--font-raleway)'],
        dancingScript: ['var(--font-dancing-script)'],
      },
    },
  },
  plugins: [nextui()],
};
export default config;
