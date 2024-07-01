import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/public/BG.png')",
      },
      colors: {
        light: {
          primary: "#00B074",
          secondary: "#6574cd",
          bg_main: "#F3F2F7",
          button : "#9945FF",
          button_success : " #6DFF8B",
         


          background: "#F3F2F7",

          text: "#F3F4F6",
          border: "#6B7280",
          accent: "#2D9CDB",
          success: "#32CD32",
          warning: "#FF8C00",
          error: "#FF0000",
          info: "#1E90FF",
          neutral: "#A0AEC0",
          white:'#FFFFFF',
          gray: {
            "50": "#F9FAFB",
            "100": "#F3F4F6",
            "200": "#E5E7EB",
            "700": "#4B5563",
            "900": "#1F2937",
          },
        },

        dark: {
          background: "#121212",

          text: "#F3F4F6",
          border: "#6B7280",
          accent: "#FFD700",
          success: "#32CD32",
          warning: "#FF8C00",
          error: "#FF0000",
          info: "#1E90FF",
          neutral: "#A0AEC0",
          white:'#FFFFFF',
          gray: {
            "50": "#F9FAFB",
            "100": "#F3F4F6",
            "200": "#E5E7EB",
            "700": "#1A3048",
            "900": "#1F2937",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
