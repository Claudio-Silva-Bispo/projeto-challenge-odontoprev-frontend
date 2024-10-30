import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'], // Adicione a fonte aqui
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primeira: "#484848"
      },
    },
  },
  plugins: [],
};
export default config;
