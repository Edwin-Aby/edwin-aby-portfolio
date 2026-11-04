import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { orchid: "#241c36", paper: "#f2eee7", lilac: "#c1b5f2", persimmon: "#f28c75" }, fontFamily: { display: ["var(--font-display)"], sans: ["var(--font-sans)"], mono: ["var(--font-mono)"] } } },
  plugins: [],
} satisfies Config;
