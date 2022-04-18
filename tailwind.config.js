module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "bounce-short": "bounce 1s ease-in-out 5",
      },
    },
  },
  plugins: [],
};
