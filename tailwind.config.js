module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      translate: {
        center: "-50%",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    // screens: {
    //   tablet: "991px",
    //   // => @media (min-width: 640px) { ... }
    // },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
