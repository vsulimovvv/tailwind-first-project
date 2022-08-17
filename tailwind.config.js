module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xl: { max: '1230px' },
      lg: { max: '992px' },
      md: { max: '767.98px' },
      sm: { max: '576px' },
      xs: { max: '359.98px' },
    },

    container: {
      padding: '15px',
      center: true,
    },

    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        gray: '#848FAC',
        dark: '#0E1734',
        red: '#FF620A',
        'red-light': '#FFECE2',
        purple: '#0B265A',
        orange: 'rgba(250, 176, 71, 1)',
        'orange-35': 'rgba(250, 176, 71, 0.35)',
      },
    },
  },
  plugins: [],
};
