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
          50: '#FBFAF6',
          100: '#F7F4ED', // primary light surface
          200: '#EFEADD',
          300: '#E5DDCB', // sand / borders on light
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
        container: '1240px',
      },
      boxShadow: {
        soft: '0 20px 50px -20px rgba(10, 33, 29, 0.25)',
        card: '0 24px 60px -28px rgba(10, 33, 29, 0.35)',
        brass: '0 14px 40px -14px rgba(194, 161, 90, 0.55)',
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
