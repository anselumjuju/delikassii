import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [],
};
export default config;
