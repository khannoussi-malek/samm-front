import tailwindColors from './tailwindColors';

export const colors = {
  // Update me with other Tailwind colors or with https://smart-swatch.netlify.app/
  brand: {
    50: '#FAF5FF',
    100: '#E9D8FD',
    200: '#D6BCFA',
    300: '#B794F4',
    400: '#9F7AEA',
    500: '#805AD5',
    600: '#6B46C1',
    700: '#553C9A',
    800: '#44337A',
    900: '#322659',
    gradient: 'linear-gradient(225deg, #E9D8FD 0%, #6B46C1 100%)',
    gradientHero:
      'linear-gradient(134.34deg, #44337A 22.74%, rgba(85, 60, 154, 0.84) 79.57%)',
  },
  secondary: {
    50: '#F0FDFA',
    100: '#CCFBF1',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#14B8A6',
    600: '#0D9488',
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',
    gradient: 'linear-gradient(225deg, #2DD4BF 0%, #29B3AB 100%)',
    gradientIcon: 'linear-gradient(180deg, #14B8A6 0%, #48DFCE 100%)',
  },
  gray: tailwindColors.blueGray,

  success: tailwindColors.green,
  green: tailwindColors.green,

  error: {
    ...tailwindColors.rose,
    gradient: 'linear-gradient(315.55deg, #EF4444 0%, #FF8989 92.87%);',
  },
  red: tailwindColors.rose,

  warning: {
    ...tailwindColors.yellow,
    gradient: 'linear-gradient(315.55deg, #F59E0B 0%, #FDE047 92.87%)',
  },
  orange: tailwindColors.amber,

  info: tailwindColors.sky,
  blue: {
    ...tailwindColors.blue,
  },
};
