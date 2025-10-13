import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        mytheme: { 
          "primary": "#1f2937",
          "secondary": "#171E29",
          "accent": "#52527A",
          "neutral": "#e7e5e4",
          "base-100": "#1f2937",
          "info": "#e5e7eb",
          "success": "#67e8f9",
          "warning": "#991b1b",
          "error": "#1b212a",
        },
      },
    ]
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      }
    }
  }
}