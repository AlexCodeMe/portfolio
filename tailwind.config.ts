import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#8b5cf6',
          secondary: '#facc15',
          accent: '#3b82f6',
          background: '#ffffff',
          text: '#333333',
        },
        dark: {
          primary: '#6b21a8',
          secondary: '#d97706',
          accent: '#1e40af',
          background: '#1e293b',
          text: '#e5e7eb',
        },
      },
    },
  },
  plugins: [],
};
export default config;
