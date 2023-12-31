/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        "hero":  "url('/src/assets/images/hero-bg.jpg')",
        "callToAction":  "url('/src/assets/images/cta-bg.jpg')",
        "testimonial": "url('/src/assets/images/testimonials-bg.jpg')"
      }
    },
  },
  plugins: [],
}