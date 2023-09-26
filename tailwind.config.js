/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
      screens: {
        md: "750px",
        lg: "970px",
        xl: "1000px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#C0BFB5",
          200: "#B3B2A6",
          300: "#A3A193",
          400: "#908E7C",
          500: "#797761",
          600: "#6E6C58",
          700: "#5B5949",
          800: "#4B4A3C",
          900: "#3E3D32",
        },
      },
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
  },
  plugins: [],
};
