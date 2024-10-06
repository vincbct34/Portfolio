/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    dropShadow: {
      'darkLogo': '0 0 5px rgb(var(--dark-shadow-color))',
      'lightLogo': '0 0 5px rgb(var(--light-shadow-color))',
    },
    boxShadow: {
      'toggleDarkMode': '0 1vh 5vh rgb(var(--dark-first-clr))',
      'toggleLightMode': '0 1vh 5vh rgb(var(--light-first-clr))',
    },
    boxShadow: {
      'darkProfileShadow': '0 1vh 5vh rgb(var(--dark-shadow-color))',
      'lightProfileShadow': '0 1vh 5vh rgb(var(--light-shadow-color))',
    },
    colors: {
      'light-first': 'rgb(var(--light-first-clr))',
      'light-second': 'rgb(var(--light-second-clr))',
      'light-third': 'rgb(var(--light-third-clr))',
      'dark-first': 'rgb(var(--dark-first-clr))',
      'dark-second': 'rgb(var(--dark-second-clr))',
      'dark-third': 'rgb(var(--dark-third-clr))',
    },
    keyframes: {
      WaveAnimation: {
        '0%': { transform: 'rotate(0deg) scale(1)' },
        '10%': { transform: 'rotate(14deg) scale(1.2)' },
        '20%': { transform: 'rotate(-8deg) scale(1.4)' },
        '30%': { transform: 'rotate(14deg) scale(1.4)' },
        '40%': { transform: 'rotate(-4deg) scale(1.4)' },
        '50%': { transform: 'rotate(10deg) scale(1.4)' },
        '60%': { transform: 'rotate(0deg) scale(1.4)' },
        '100%': { transform: 'rotate(0deg) scale(1)' },
      },
      turnAnimation: {
        '0%': { transform: 'rotate(0deg) scale(1)' },
        '50%': { transform: 'rotate(360deg) scale(1.1)' },
        '100%': { transform: 'rotate(-360deg) scale(1)' },
      },
    },
    animation: {
      wave: 'WaveAnimation 1s ease-in-out infinite',
      turn: 'turnAnimation 5s ease-in-out infinite',
    },
  },
  plugins: [],
  darkMode: 'class',
}
