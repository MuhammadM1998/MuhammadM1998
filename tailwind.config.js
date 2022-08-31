module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    extend: {
      colors: {
        green: { 100: '#64FFDA', 200: '#00DC82' },
        navy: {
          100: '#D4DFFF',
          200: '#96AFD2',
          300: '#233554',
          400: '#112240',
          500: '#0A192F',
        },
      },

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

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        firacode: ['Fira Code', 'monospace'],
      },
    },
  },
};
