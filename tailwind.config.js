
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
      boxShadow: {
        'blue-light': '0px 2px 6px 0px rgba(103, 151, 255, 0.1), 0px 3px 16px 0px rgba(103, 151, 255, 0.1)',
        'blue': '0 4px 24px 0 rgba(103,151,255,.1), 0 12px 64px 0 rgba(103,151,255,.1)',
        'blue-bold': '0 8px 48px 0 rgba(103,151,255,.15), 0 24px 128px 0 rgba(103,151,255,.15)',
      },
      dropShadow: {
        'blue-light': '0px 2px 6px 0px rgba(103, 151, 255, 0.1), 0px 3px 16px 0px rgba(103, 151, 255, 0.1)',
        'blue': '0 4px 24px 0 rgba(103,151,255,.1), 0 12px 64px 0 rgba(103,151,255,.1)',
        'blue-bold': '0 8px 48px 0 rgba(103,151,255,.15), 0 24px 128px 0 rgba(103,151,255,.15)',
      }
    },
  },
}