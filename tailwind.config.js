module.exports = {
  content: ['./src/**/*.{html,vue,js}'],
  theme: {
    extend: {
      screens: {
        mobile: '25rem',
        tablet: '50rem',
        desktop: '80rem',
      },
      container: {
        center: true,
        padding: 'clamp(1rem, 5vw, 1.5rem)',
        screens: {
          desktop: '80rem',
        },
      },
      colors: {
        white: '#fff',
        black: '#000',
        blue: {
          primary: '#2884EF',
          gray: {
            100: '#EEF6FF',
            200: '#D8D8E5',
            300: '#A1A5B7',
            400: '#7E8299',
          },
        },
      },
    },
  },
};
