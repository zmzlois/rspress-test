/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./docs/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./theme/**/*.{js,ts,jsx,tsx,md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0f0f0f',
          dark: '#1a202c',
        },
      }
    },
  },
  plugins: [],
}

