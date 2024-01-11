/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#ffffff',
      'spring-wood': {
        '50': '#f9f8f4',
        '100': '#f0eee4',
        '200': '#e0dbc8',
        '300': '#cdc3a4',
        '400': '#b8a77f',
        '500': '#a99166',
        '600': '#9c815a',
        '700': '#82694c',
        '800': '#6a5642',
        '900': '#574737',
        '950': '#2e241c',
      },
      'periwinkle-gray': {
        '50': '#f4f5f9',
        '100': '#ebedf4',
        '200': '#dadfeb',
        '300': '#c8cde0',
        '400': '#abafce',
        '500': '#9598bf',
        '600': '#7e7ead',
        '700': '#6d6b97',
        '800': '#59587b',
        '900': '#4b4b64',
        '950': '#2c2c3a',
      },    
    },
    screens: {
      'md': '860px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

