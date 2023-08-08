/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'custom-bg': 'url(/public/unsaac.jpg)'
      }),
      backgroundColor: () => ({
        'custom-opacity': 'rgba(0,0,0,0.5)'
        
      })
    },
  },
  plugins: [],
}