import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        "2xl": "1280px",
      },
      colors: {
        blue: "#192559",
        yellow: "#FCE052",
        gray: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
export default config;
