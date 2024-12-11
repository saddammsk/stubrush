import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'yellow1': '#C28300',
        'blue1' : '#0F172A',
        'green1':'#161817',
        'black':'#111212',
        
      },
      screens: {
        'xs': '320px',
        'sm': '375px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        poppins: 'var(--font-poppins)',
        inter: 'var(--font-inter)',
        Helvetica: 'var(--font-Helvetica)',
      },
      boxShadow: {
        'radial': 'var(--radial-gradient)',
      },

      fontSize:{
        '64px': ['64px','76pxs'],
      }
       
      
    },
  },
  plugins: [],
} satisfies Config;
