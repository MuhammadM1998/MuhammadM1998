module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    extend: {
      screens: {
        '4xs': '360px',
        '3xs': '400px',
        '2xs': '480px',
        xs: '560px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },

      colors: {
        green: { 100: '#64FFDA', 200: '#00DC82' },
        navy: {
          100: '#D4DFFF',
          200: '#96AFD2',
          300: '#8892B0',
          400: '#233554',
          500: '#112240',
          600: '#0A192F',
        },
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        firacode: ['Fira Code', 'monospace'],
      },

      fontSize: {
        'fluid-heading': 'clamp(40px, 5vw, 50px)',
      },
    },
  },
};
