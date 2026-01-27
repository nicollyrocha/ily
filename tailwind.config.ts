export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      serif: ["Playfair Display", "serif"],
    },
    // tailwind.config.js
    extend: {
      keyframes: {
        pop: {
          "0%": {
            opacity: "0",
            transform: "translate(0, 0) scale(0)",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "var(--transform) scale(1)",
          },
        },
      },
    },
  },
};
