import { spacing } from './spacing';

export const layout = {
  breakpoints: {
    desktop: 'md',
  },
  navBar: {
    height: `3.5rem`,
    width: `calc(250px + ${spacing['safe-left']})`,
  },
  topBar: {
    height: `calc(4rem + ${spacing['safe-top']})`,
  },
};
