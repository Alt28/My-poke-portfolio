/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['Press Start 2P', 'cursive'],
        mono: ['Courier New', 'monospace'],
      },
      colors: {
        pokemon: {
          yellow: '#FFDE00',
          blue: '#003DA5',
          red: '#FF0000',
          gray: '#333333',
          light: '#F0F0F0',
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        wiggle: 'wiggle 0.2s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 5px rgba(255, 222, 0, 0.5)' },
          '50%': { textShadow: '0 0 15px rgba(255, 222, 0, 1)' },
        },
      },
    },
  },
  plugins: [],
}
