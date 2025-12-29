/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '200px': '200px',
      },
      colors: {
        'jungle': '#0d4c2e',
        'jungle-dark': '#062d1a',
        'jungle-light': '#1a6e4b',
        'jungle-accent': '#2d8659',
        'jungle-pale': '#e8f4ed',
      },
    },
  },
  plugins: [],
}
