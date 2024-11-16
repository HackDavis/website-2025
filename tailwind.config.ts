import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-light': "var(--background-light)",
        'background-dark': "var(--background-dark)",
        'foreground-light': "var(--foreground-light)",
        'foreground-dark': "var(--foreground-dark)",
        'highlight': "var(--highlight)",
        'text-dark': "var(--text-dark)",
        'text-light': "var(--text-light)"
      },
      spacing: {
        'edge': "var(--edge-spacer)"
      },
      fontFamily: {
        'metropolis': "var(--font-metropolis)",
        'montserrat': "var(--font-montserrat)",
        'inter': "var(--font-inter)"
      }
    },
  },
  plugins: [],
} satisfies Config;
