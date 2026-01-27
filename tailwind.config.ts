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
            opacity: "1",
            transform: "scale(0.4)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(1.2)",
          },
        },
      },
      animation: {
        pop: "pop 1.6s ease-out forwards",
      },
    },
  },
};
