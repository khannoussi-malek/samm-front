import { mode } from '@chakra-ui/theme-tools';

export default {
  baseStyle: {
    lineHeight: 'tall',
    fontWeight: 'medium',
    borderRadius: 'md',
  },
  sizes: {
    xs: {
      fontSize: '2xs',
      py: '1px',
      px: '0.15rem',
      lineHeight: 'shorter',
    },
    sm: {
      fontSize: 'xs',
      py: '1px',
      px: '0.2rem',
      lineHeight: 'shorter',
    },
    md: {
      fontSize: 'sm',
      px: '0.4rem',
    },
    lg: {
      fontSize: 'md',
      px: 2,
    },
  },
  defaultProps: {
    size: 'md',
  },
  variants: {
    subtle: (props) => ({
      color: mode(
        `${props.colorScheme}.700`,
        `${props.colorScheme}.100`
      )(props),
      bg: mode(`${props.colorScheme}.100`, `${props.colorScheme}.700`)(props),
    }),
    outline: (props) => ({
      bg: mode('whiteAlpha.200', 'white')(props),
      color: `${props.colorScheme}.700`,
      border: '1px solid',
      borderColor: 'gray.200',
      boxShadow: 'none',
    }),
  },
};
