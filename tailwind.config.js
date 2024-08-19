module.exports = {
  content: ['./src/**/*.{html,vue,js}'],
  theme: {
    extend: {
      fontSize: {
        small: '0.875rem',
        normal: '1rem',
        large: '1.375rem',
        header: '2rem',
      },
      screens: {
        mobile: '25rem',
        tablet: '45rem',
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
        background: '#F1F1F2',
        white: '#fff',
        black: '#000',
        indigo: '#181C32',
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
