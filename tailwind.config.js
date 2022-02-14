module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      translate: {
        center: "-50%",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
