const { alertClasses } = require('@mui/material');

/** @type {import('tailwindcss').Config} */
const foundationColor = {
  'urc-blue-400': '#4C70FF',
  'urc-blue-primary-500': '#484BFF',
  'urc-blue-600': '#382ADE',
  'urc-blue-700': '#0C1BA6',
  'urc-blue-800': '#110F76',
  'urc-blue-900': '#0A0D54',
  'urc-red-800': '#E32A00',
  'urc-gray-900': '#222222',
  'urc-gray-800': '#434343',
  'urc-gray-700': '#626262',
};
const semanticColors = {
  'alert-gold': '#FFBA32',
  'alert-gold-light': '#FFF9EB',
  'disabled-gray': '#D8D8D8',
  'error-red': '#C1152E',
  'error-red-light': '#FFE8EB',
  'focus-blue': '#1871C9',
  'focus-blue-light': '#E8F1FA',
  'success-green': '#33A17B',
  'success-green-light': '#E1F5EE',
};

const grayScale = {
  white: '#FFFFFF',
  'off-white': '#FAFAFA',
  'gray-light': '#F5F5F5',
  'gray-light-mid': '#D8D8D8',
  'gray-mid': '#949494',
  'gray-mid-dark': '#6F6F6F',
  'gray-dark': '#222222',
  black: '#000000',
  white: '#FAFAFA',
};
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      pretendard: ['--font-pretendard'],
    },
    backgroundColor: {
      ...foundationColor,
      ...grayScale,
    },
    textColor: {
      ...foundationColor,
      ...grayScale,
      ...semanticColors,
    },
    colors: {
      ...foundationColor,
    },
    lineHeight: {
      none: '1',
      tighter: '1.125',
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75', // Default Tailwind is 1.625.
    },
    letterSpacing: {
      tightest: '-2px',
      tighter: '-1px',
      tight: '-0.5px',
      normal: '0',
      wider: '1px',
    },
    checkbox: {
      display: 'inline-block',
      verticalAlign: 'top',
      flexShrink: 0,
      borderColor: grayScale['gray-dark'],
      borderWidth: 0,
      borderRadius: 0,
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 500ms ease-in forwards',
        fadeOut: 'fadeOut 500ms ease-out forwards',
        fadeInSlow: 'fadeIn 1000ms ease-in forwards',
        fadeOutSlow: 'fadeOut 1000ms ease-out forwards',
        scaleIn: 'scaleIn 300ms ease-in forwards',
        rotate: 'rotate 1s linear infinite',
      },
      borderWidth: {
        3: '3px',
      },
      boxShadow: {
        jpl: '-4px 5px 60px 0 rgba(0, 0, 0, 0.1)',
      },
      inset: {
        // tailwind 2.0 will include these automatically
        '1/2': '50%',
        18: '4.5rem',
        28: '7rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '100%': { opacity: 1 },
          '0%': { opacity: 0 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        rotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      maxHeight: {
        none: 'none',
      },
      minWidth: {
        12: '3rem',
      },
      minHeight: {
        none: 'none',
        '1/4': '25%',
        '1/2': '50%',
        18: '4.5rem',
        28: '7rem',
        66: '16rem',
        100: '25rem',
      },
      opacity: {
        15: '0.15',
        30: '0.30',
        40: '0.40',
        90: '0.90',
        98: '0.98',
      },
      spacing: {
        '2px': '2px',
        14: '3.5rem',
        14.5: '3.625rem',
        18: '4.5rem',
        22: '5.5rem',
        25: '6.25rem',
        26: '6.5rem',
        28: '7rem',
        29: '7.25rem',
        30: '7.5rem',
        35: '8.75rem',
        36: '9rem',
        38: '9.5rem',
        40: '10rem',
        72: '17.5rem',
        80: '20rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
      },
      transitionDuration: {
        2000: '2000ms',
        2500: '2500ms',
        3000: '3000ms',
        3500: '3500ms',
        5000: '5000ms',
      },
      transitionProperty: {
        'border-opacity': 'border-opacity',
      },
      translate: {
        '-3/7': '-42.8571429%',
      },
      zIndex: {
        60: 60,
      },
    },
  },

  plugins: [],
};
