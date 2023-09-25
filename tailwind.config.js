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
          100: "#E89CC4",
          200: "#E487B7",
          300: "#DE6EA8",
          400: "#D75095",
          500: "#CF2B7E",
          600: "#AB2369",
          700: "#8D1D56",
          800: "#741847",
          900: "#5F143B",
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
