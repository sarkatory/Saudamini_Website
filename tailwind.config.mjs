/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'maroon': {
          800: '#800000',
          900: '#4A0404',
        },
        'amber': {
          600: '#D4AF37',
          700: '#B8860B',
          800: '#966909',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'scroll': 'scroll 40s linear infinite'
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.pause': {
          'animation-play-state': 'paused',
        }
      })
    }
  ],
};
