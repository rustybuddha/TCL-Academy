/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      screens : {
        'mbl-sm' : '320px' , 
        'mbl-lg': '640px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      } , 
      fontWeight: {
        300: "light",
        400: "medium",
        500: "bold",
      },
      colors: {
        'primary': "#093BAA",
        'primary-2': "#062A79",
        'secondary': "#0EDDBA",
        'blue-gray': "#33444F",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
