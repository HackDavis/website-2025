import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-light': 'var(--background-light)',
        'background-dark': 'var(--background-dark)',
        'foreground-light': 'var(--foreground-light)',
        'foreground-dark': 'var(--foreground-dark)',
        'highlight-blue': 'var(--highlight-blue)',
        'highlight-yellow': 'var(--highlight-yellow)',
        'text-dark': 'var(--text-dark)',
        'text-light': 'var(--text-light)',
        'sand-background-dark': 'var(--sand-background-dark)',
        'sand-background-light': 'var(--sand-background-light)',
        'sky-background': 'var(--sky-background)',
        'sea-background': 'var(--sea-background)',
        'water-background': 'var(--water-background)',
        'grass-background-dark': 'var(--grass-background-dark)',
        'grass-background-light': 'var(--grass-background-light)',
      },
      spacing: {
        edge: 'var(--edge-space)',
        'landing-text-space-left': 'var(--landing-text-space-left)',
        'landing-text-space-right': 'var(--landing-text-space-right)',
      },
      fontFamily: {
        metropolis: 'var(--font-metropolis)',
        montserrat: 'var(--font-montserrat)',
        inter: 'var(--font-inter)',
        jakarta: 'var(--font-jakarta)',
      },
      animation: {
        'spin-slow': 'spin-from-center 30s linear infinite',
      },
      keyframes: {
        'spin-from-center': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      screens: {
        'break-625': '625px',
      },
    },
  },
  plugins: [],
} satisfies Config;
