const { babelAnimation, babelKeyframes } = require('./animations/babelAnimations');
const colors = require('tailwindcss/colors');
const babelColors = require('./colors/babelColors');
Object.keys(babelColors).forEach((base) => {
  colors[base] = babelColors[base];
  Object.keys(base).forEach((color) => {
    colors[base][color] = ({ opacityVariable, opacityValue }) => {
      if (opacityValue !== undefined) {
        return `${babelColors[base][color]}, ${opacityValue})`;
      }
      if (opacityVariable !== undefined) {
        return `${babelColors[base][color]}, var(${opacityVariable}, 1))`;
      }
      return `${babelColors[base][color]}`;
    };
  });
});
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'slide-up-vertical-slow': 'slideUpY 12s linear infinite',
        'slide-up-vertical-medium': 'slideUpY 8s linear infinite',
        'slide-up-vertical-fast': 'slideUpY 4s linear infinite',
        'game-on': 'gameOn 4s ease-in-out forwards',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0rem) rotate(-3deg)' },
          '50%': { transform: 'translateY(2rem) rotate(3deg)' },
        },
        slideUpY: {
          '50%': { transform: 'translateY(-100vh)' },
          '50.0001%': { transform: 'translateY(100vh)' }
        },
        slideDownY: {
          '50%': { transform: 'translateY(100vh)' },
          '50.0001%': { transform: 'translateY(-60vh)' }
        },
        gameOn: {
          '0%': { transform: 'scale(0)', width: '12rem' },
          '50': { transform: 'scale(1)', width: '12rem' },
          '100%': { transform: 'scale(1)', width: '100%' }
        }
      }
    },
    colors
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-animatecss')({
        classes: [
          'animate__animated',
          'animate__fadeInUp',
          'animate__fadeInDown',
          'animate__infinite',
          'animate__delay',
          'animate__delay-1',
          'animate__delay-2',
          'animate__delay-3',
          'animate__delay-4',
          'animate__delay-5',
          'animate__fast',
          'animate__faster',
          'animate_slow',
          'animate_slower',
          'animate__zoomIn',
          'animate__fadeOutUp'
        ],
        variants: ['responsive', 'hover', 'reduced-motion'],
      }),
  ],
};
