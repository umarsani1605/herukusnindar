/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('@/assets/ngawi.png')",
      },
      aspectRatio: {
        '2/3': '2 / 3',
        '3/4': '3 / 4',
        '3/2': '3 / 2',
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
}