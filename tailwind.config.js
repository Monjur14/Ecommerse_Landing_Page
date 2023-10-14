/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white' : '#fff',
      'black' : '#313131',
      'blue' : '#0A74F1',
      'gray' : '#616161',
      'bgray' : '#D7D7D7',
      'swhite' : "#F9FAFC",
      'lowlight': "#E9EAED"
    },
    extend: {
      screens: {
        "xsm" : '410px',
        'sm' : '650px',
        'md' : '768px',
        'lg' : '1050px',
        'xlg' : '1200px'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xsm: '1rem',
          sm: '1.2rem',
          md: '1.5rem',
          lg: '2rem',
          xlg: '3rem'
        },
        maxWidth: '1200px',
      }
    },
  },
  plugins: [],
}