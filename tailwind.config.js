/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors:{
      backGRCL :'rgba(19 19 24 / 0.4)',
      headerBTN : '#0a2744',
      HeaderBB:'#c7dff7',
    
      blueSingIn :'#0b6bcb',
      blueSingUp : '#4393e4',
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
      modeBTN :'#32383e'

    },
   
    
    extend: {
      fontFamily:{
        'Inter' : ['Inter']
      }
    },
  },
  plugins: [],
}

