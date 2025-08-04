/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-red-500',
    "text-home-heading-large",
    "text-home-heading-small",

  ],
  
  theme: {
    extend: {
      fontSize :{
        'course-details-heading-small': ['28px' , '36px'],
        'course-details-heading-large': ['36px' , '44px'],
        'home-heading-small': ['38px' , '34px'],
        'home-heading-large': ['48px' , '56px'],
        'default' :['15px' , '28px']
      },
      gridTemplateColumns :{
        'auto' : 'repeat(auto-fit , minmax(200px , 1fr))'

      },
      spacing : {
        'section-height' : '500px' , 

      }
    },
  },
  plugins: [],
}
