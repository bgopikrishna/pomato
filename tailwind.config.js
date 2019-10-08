module.exports = {
  theme: {
    fontFamily: {
      display: ['Inter', 'Roboto', 'sans-serif'],
      body: ['Inter', 'Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        black: {
          '900': '#222124',
          '500': '#2C2D33',
        },

        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        default: 'var(--default)',
        'soft-bg': 'var(--soft-bg)',
        'normal-bg': 'var(--normal-bg)',
      },
    },
  },
  variants: {},
  plugins: [],
};
