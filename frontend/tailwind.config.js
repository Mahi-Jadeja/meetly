/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "light",
      "dark",
      {
        meetly: {
          primary: "#8b4513",
          "primary-content": "#f5f5f5",
          secondary: "#d4a574",
          "secondary-content": "#0a0a0f",
          accent: "#a0522d",
          "accent-content": "#f5f5f5",
          neutral: "#16161e",
          "neutral-content": "#a1a1aa",
          "base-100": "#0f0f15",
          "base-200": "#0a0a0f",
          "base-300": "#050507",
          "base-content": "#f5f5f5",
          info: "#60a5fa",
          "info-content": "#0a0a0f",
          success: "#4ade80",
          "success-content": "#0a0a0f",
          warning: "#fbbf24",
          "warning-content": "#0a0a0f",
          error: "#f87171",
          "error-content": "#0a0a0f",

          "--rounded-box": "16px",
          "--rounded-btn": "10px",
          "--rounded-badge": "20px",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.98",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "10px",
        },
      },
    ],
  },
};
