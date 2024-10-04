/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      'toggleDarkMode': '0 1vh 5vh rgb(var(--dark-first-clr))',
      'toggleLightMode': '0 1vh 5vh rgb(var(--light-first-clr))',
    },
    colors: {
      'light-first': 'rgb(var(--light-first-clr))',
      'light-second': 'rgb(var(--light-second-clr))',
      'light-third': 'rgb(var(--light-third-clr))',
      'dark-first': 'rgb(var(--dark-first-clr))',
      'dark-second': 'rgb(var(--dark-second-clr))',
      'dark-third': 'rgb(var(--dark-third-clr))',
    },
  },
  plugins: [],
  darkMode: 'class',
}
