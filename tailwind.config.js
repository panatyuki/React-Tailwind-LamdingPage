/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b": "linear-gradient(to bottom, #000066 0%, #33ccff 100%)",
      },
    },
  },
  plugins: [],
};

