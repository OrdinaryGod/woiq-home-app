/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {  
    extend: {
      minHeight: {
        '1/2': '50%',
        'not-full': '660px'
      },
      colors: {
        "primary": "#226cff",
        "primary-500": "#877EFF",
        "secondary-500": "#FFB620",
        blue: "#0095F6",
        "logout-btn": "#FF5A5A",
        "navbar-menu": "rgba(16, 16, 18, 0.6)",
        "dark-1": "#000000",
        "dark-2": "#121417",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#EFEFEF",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
        "gray-1": "#697C89",
        "gray-2": "#323843",
        "gray-3": "#8c8c8c",
        glassmorphism: "rgba(16, 16, 18, 0.60)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'primary-img': "url('/assets/cropped-1080-1081600-contrast.png')",
        'gradient-linear-dark': 'linear-gradient(-90deg, rgba(0,0,0,0.08662756313462884) 0%, rgba(11,12,15,1) 95%);',
        'gradient-radial-dark': 'linear-gradient(135deg,#231437,#2c385e 50%,#336e6b)',
      },
    },
  },
  plugins: [],
}
