/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Mona Sans', 'sans-serif'],
        'body': ['"IBM Plex Mono"', 'monospace']
      },
      colors: {
        'primary': '#ff3b22'
      },
      dropShadow: {
        'normal': '0px 4px 8px 0px rgba(255, 59, 34, 0.50)'
      },
      lineHeight: {
        'heading': '120px',
        'body': '30px'
      },
      blur: {
        template: '400px'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      screens: {
        sm: '620px',
        md: '768px',
        lg: '1024px',
        xl: '1600px'
      }
    },
  },
  plugins: [],
}

