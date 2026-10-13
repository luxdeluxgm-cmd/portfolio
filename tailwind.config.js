/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind przeszukuje te pliki i generuje CSS tylko dla klas, których naprawdę używasz.
  content: ['./*.html', './en/*.html'],
  theme: {
      extend: {
          colors: {
              background: '#fafafa',
              textMain: '#111827',
              textMuted: '#4b5563',
              accent: '#8b5cf6',
              btnDark: '#ffffff',
              borderDark: '#111827'
          },
          fontFamily: {
              sans: ['"Cascadia Code"', 'monospace'],
              display: ['"Cascadia Code"', 'monospace'],
          }
      }
  }
};
