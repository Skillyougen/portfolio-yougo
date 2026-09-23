/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Direction « éditoriale » : grandes capitales condensées, accent
        // manuscrit orange et texte courant géométrique.
        display: ['Anton', 'Impact', '"Arial Narrow"', 'sans-serif'],
        script: ['Allura', '"Brush Script MT"', 'cursive'],
        sans: ['Outfit', 'Arial', 'sans-serif'],
      },
      colors: {
        paper: '#E6E5E1',
        ink: '#3B3B3B',
        graphite: '#262626',
        panel: '#8C8C8A',
        accent: '#DD8A16',
        mid: '#5E5E5C',
        soft: '#8F8F8C',
      },
      borderRadius: {
        panel: '2rem',
        card: '1.25rem',
      },
    },
  },
  plugins: [],
}
