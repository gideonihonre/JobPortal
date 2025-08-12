/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#E4E5E8",
        lightGray: "#F1F2F4",
        darkBlue: "#0A65CC",
        paleBlue: "#E7F0FA"
      }
    }
  },
  plugins: []
}
