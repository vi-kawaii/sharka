/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        breath: {
          "0%, 100%": {
            transform: "translateY(-3%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        breath: "breath 3s ease infinite",
      },
    },
  },
  plugins: [],
};
