/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "rq-primary": "#F85559",
        "rq-primary": "#B92D5E",
        // "rq-secondary": "#12121299",
        "rq-secondary": "#FDEA45",
      },
    },
  },
  plugins: [require("daisyui")],
};
