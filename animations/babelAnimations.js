module.exports = {
  babelAnimation: {
    wiggle: 'wiggle 1s ease-in-out infinite',
    'slide-up-vertical-slow': 'slideUpY 12s linear infinite',
    'slide-up-vertical-medium': 'slideUpY 8s linear infinite',
    'slide-up-vertical-fast': 'slideUpY 4s linear infinite',
  },
  babelKeyframes: {
    wiggle: {
      '0%, 100%': { transform: 'rotate(-3deg)' },
      '50%': { transform: 'rotate(3deg)' },
    },
    slideUpY: {
      '50%': { transform: 'translateY(-60vh)' },
      '50.0001%': { transform: 'translateY(100vh)' }
    },
    slideDownY: {
      '50%': { transform: 'translateY(100vh)' },
      '50.0001%': { transform: 'translateY(-60vh)' }
    }
  }
};
