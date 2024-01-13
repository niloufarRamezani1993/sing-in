/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors:{
      backGRCL :'rgba(19 19 24 / 0.4)',
    
      blueSingIn :'#0b6bcb',
      whiteFont: {
       default : '#f0f4f8',
       googleBtn: '#dde7ee',
      },
      FooterClr : '#9fa6ad',
      bgBlack:{
        btnBlack : '#171a1c',
      },
      borderCl:{
        bg:'#0b0d0e',
        line:'#32383e',
      },
      orCL : '#9fa6ad',

    },
   
    
    extend: {
      fontFamily:{
        'sens' : ['Inter']
      }
    },
  },
  plugins: [],
}

