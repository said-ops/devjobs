/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js
    "./components/**/*.{js,ts,jsx,tsx}", // For React components
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js app directory (if using App Router)
    "./src/**/*.{js,ts,jsx,tsx}", // For React (optional)
  ],
  theme: {
    extend: {
      colors: {
        violet: "#9e7f66",
        lightViolet: "#939BF4",
        veryDarkBlue: "#19202D",
        midnight: "#121721",
        lightGrey: "#F4F6F8",
        gray: "#9DAEC2",
        darkGrey: "#6E8098",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
