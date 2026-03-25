
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0E1A',
          light: '#111827',
          lighter: '#1F2937'
        },
        neon: {
          cyan: '#00F5FF',
          orange: '#FF6B35',
          pink: '#FF2D78',
          purple: '#7B2FFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(0, 245, 255, 0.5))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(0, 245, 255, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
