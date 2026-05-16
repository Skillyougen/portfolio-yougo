/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cream: '#F5F3EE',
        beige: '#EDE9E0',
        accent: '#E8533A',
        dark: '#111111',
        mid: '#555555',
        soft: '#999999',
      },
    },
  },
  plugins: [],
}
