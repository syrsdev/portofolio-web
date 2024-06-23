/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': "#241B35",
        'secondary': "#4D425F",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      textColor: {
        'primary': "#6C35DE",
      },
    },
  },
  plugins: [],
}

