module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      colors: {
        "computer-green": "#00ff00",
      },
      height: {
        "40-vmin": "40vmin",
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: { opacity: ["disabled"] },
  },
  plugins: [],
};
