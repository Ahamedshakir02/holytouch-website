/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — Scheme A: brass/gold on deep teal-green + off-white
        teal: {
          950: '#071A17', // near-black teal (footers, deep sections)
          900: '#0A211D', // primary dark surface
          800: '#0E2A26', // hero / card dark
          700: '#13413A', // raised dark surface
          600: '#1C564C', // hover / borders on dark
          500: '#2E6A5E',
        },
        brass: {
          50: '#FBF6EA',
          100: '#F3E9CF',
          200: '#E6D2A0',
          300: '#D9BE85', // light brass (small text accents)
          400: '#CBA962',
          500: '#C2A15A', // primary brass accent
          600: '#A8853F', // deeper brass (text on cream)
          700: '#876A30',
        },
        cream: {
          // Warm "paper" tones — pulled down from near-white to cut on-screen glare
          // while keeping strong contrast with the dark teal text.
          50: '#F6F1E6',
          100: '#F1EBDD', // primary light surface
          200: '#E7DECB',
          300: '#DBD0B9', // sand / borders on light
        },
        ink: '#0A211D',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        container: '1400px',
      },
      // Fluid display sizes — scale smoothly from small phones to large screens.
      fontSize: {
        'display-xl': ['clamp(2.4rem, 6.5vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2rem, 4.6vw, 3.25rem)', { lineHeight: '1.07', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.6rem, 3.2vw, 2.25rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.3rem, 2.4vw, 1.6rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      boxShadow: {
        // Softer, more minimal elevation
        soft: '0 16px 40px -24px rgba(10, 33, 29, 0.18)',
        card: '0 28px 64px -40px rgba(10, 33, 29, 0.26)',
        brass: '0 12px 34px -16px rgba(194, 161, 90, 0.45)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'marquee': 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
