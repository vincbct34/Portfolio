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
      red: {
        500: '#f56565',
      }
    },
    backgroundImage: {
      'gradient-light': 'linear-gradient(to top, rgb(var(--light-first-clr)), rgb(var(--light-second-clr)))',
      'gradient-dark': 'linear-gradient(to top, rgb(var(--dark-first-clr)), rgb(var(--dark-second-clr)))',
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
      backAnimation: {
        '0%': { transform: 'scale(0) translateY(0) rotate(0)', opacity: 1 },
        '100%': { transform: 'scale(1.3) translateY(-90px) rotate(360deg)', opacity: 0 },
      },
      bounceAnimation: {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
        '100%': { transform: 'translateY(0)' },
      },
      slideEffect: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
    animation: {
      wave: 'WaveAnimation 2s ease-in-out infinite',
      turn: 'turnAnimation 5s ease-in-out infinite',
      bounce: 'bounceAnimation 1s linear infinite',
      slide: 'slideEffect 19s linear infinite',
      back1: 'backAnimation 9s linear infinite',
      back2: 'backAnimation 10s linear infinite',
      back3: 'backAnimation 6s linear infinite',
      back4: 'backAnimation 12s linear infinite',
      back5: 'backAnimation 15s linear infinite',
      back6: 'backAnimation 16s linear infinite',
      back7: 'backAnimation 9s linear infinite',
      back8: 'backAnimation 5s linear infinite',
    },
  },
  plugins: [],
  darkMode: 'class',
}
