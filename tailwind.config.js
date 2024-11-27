import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth:{
        Container:"1220px"
      },
      fontFamily:{
        "Inter-Regular": "Inter-Regular"
      }
    },
  },
  plugins: [],
}

