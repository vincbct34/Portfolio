/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom': '0 0 5px var(--shadow-color)',
      },
      colors: {
        'color': 'var(--text-color)',
      },
      boxShadow: {
        'profileShadow': '0 1vh 5vh var(--shadow-color)',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10vh)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
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
        fadeInUpText: 'fadeInUp 0.6s ease-out forwards',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        wave: 'WaveAnimation 1s ease-in-out infinite',
        turn: 'turnAnimation 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
