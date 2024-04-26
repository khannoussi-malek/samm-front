import { transparentize } from '@chakra-ui/theme-tools';

import { colors } from './colors';

const createOutline = (colorScheme = 'gray') =>
  `0 0 0 3px ${transparentize(`${colorScheme}.500`, 0.3)({ colors })}`;

export const shadows = {
  outline: createOutline('brand'),
  'outline-brand': createOutline('brand'),
  'outline-gray': createOutline('gray'),
  'outline-success': createOutline('success'),
  'outline-warning': createOutline('warning'),
  'outline-error': createOutline('error'),
  xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
  sm: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 2px 4px rgba(48, 49, 51, 0.1)',
  md: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
  lg: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)',
  xl: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 16px 24px rgba(48, 49, 51, 0.1)',
  'xs-dark': '0px 1px 3px rgba(11, 12, 17, 0.9)',
  'sm-dark': '0px 2px 4px rgba(11, 12, 17, 0.9)',
  'md-dark': '0px 4px 8px rgba(11, 12, 17, 0.9)',
  'lg-dark': '0px 8px 16px rgba(11, 12, 17, 0.9)',
  'xl-dark': '0px 16px 24px rgba(11, 12, 17, 0.9)',
  layout: '0px 0px 24px 1px rgba(0, 0, 0, 0.05)',
};
