/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F3EC",
        ink: "#1A1A1A",
        muted: "#6B6B6B",
        accent: "#C8501C",
        line: "#E5DFD1",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        sans: ['"Geist"', "ui-sans-serif", "system-ui"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
