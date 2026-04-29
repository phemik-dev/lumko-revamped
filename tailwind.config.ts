import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#061832",
        charcoal: "#061832",
        muted: "#53647e",
        white: "#ffffff",
        surface: "#f6f9fc",
        "soft-gray": "#f6f9fc",
        line: "#dbe5ef",
        "muted-gray": "#dbe5ef",
        gold: "#ffc021",
        blue: "#1177e6",
        "blue-light": "#55a8ff",
        navy: "#001b3d",
        teal: "#1f8a8a"
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(180deg, #ffd35a 0%, #ffc01d 72%, #f2ad12 100%)",
        "blue-gradient": "linear-gradient(180deg, #2794ff 0%, #0055b8 100%)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 46px rgba(6, 24, 50, 0.08)",
        panel: "0 26px 70px rgba(6, 24, 50, 0.12)",
        soft: "0 12px 32px rgba(6, 24, 50, 0.08)",
        gold: "0 12px 26px rgba(245, 168, 8, 0.34)",
        "gold-lg": "0 18px 32px rgba(245, 168, 8, 0.42)"
      }
    }
  },
  plugins: []
};

export default config;
