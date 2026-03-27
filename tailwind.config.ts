import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Gotham XNarrow", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#DC3846",
        textPrimary: "#0A0A0A",
        background: "#FFFFFF",
        bgLight: "#F5F5F5",
        bgSoft: "#FAFAFA",
        bgBlack:"#0A0A0A",
        bgSilver:"#F5F5F5",
        bgGray:"#767676"
      },
      fontSize: {
        // TITLE SCALE
        "title-8xl": ["62px", "1.1"],
        "title-7xl": ["60px", "1.1"],
        "title-6xl": ["58px", "1.1"],
        "title-5xl": ["54px", "1.1"],
        "title-4xl": ["50px", "1.1"],
        "title-3xl": ["46px", "1.1"],
        "title-2xl": ["42px", "1.1"],
        "title-xl": ["38px", "1.1"],
        "title-lg": ["34px", "1.1"],
        "title-md": ["30px", "1.1"],
        "title-sm": ["28px", "1.1"],
        "title-xs": ["26px", "1.1"],
        "title-2xs": ["24px", "1.1"],
        "title-3xs": ["20px", "1.1"],
        "title-4xs": ["18px", "1.1"],
        // BODY SCALE
        "body-lg": ["24px", "1.5"],
        "body-md": ["22px", "1.5"],
        "body-sm": ["20px", "1.5"],
        "body-xs": ["18px", "1.5"],
        "body-2xs": ["16px", "1.5"],
        "body-3xs": ["14px", "1.5"],
        "body-4xs": ["12px", "1.5"],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      lineHeight: {
        heading: "1.1",
        body: "1.5",
      },
    },
  },
  plugins: [],
};
export default config;
