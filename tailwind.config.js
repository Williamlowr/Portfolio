/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("daisyui")],
  themes: [{
    mytheme: { 
"primary": "#374151",
    
"secondary": "#171E29",
    
"accent": "#bfdbfe",
    
"neutral": "#e7e5e4",
    
"base-100": "#1f2937",
    
"info": "#e5e7eb",
    
"success": "#67e8f9",
    
"warning": "#991b1b",
    
"error": "#991b1b",
    },
  },`light`, 'dark'],
  content: ["./src/**/*.{html,js,tsx}"],
}


    /* {
      mytheme: { 
"primary": "#374151",
      
"secondary": "#171E29",
      
"accent": "#bfdbfe",
      
"neutral": "#e7e5e4",
      
"base-100": "#1f2937",
      
"info": "#e5e7eb",
      
"success": "#67e8f9",
      
"warning": "#991b1b",
      
"error": "#991b1b",
      },
    } */