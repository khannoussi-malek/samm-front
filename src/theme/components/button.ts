import {
  StyleFunctionProps,
  darken,
  isAccessible,
  mode,
  transparentize,
} from '@chakra-ui/theme-tools';

type customVariantOptions = {
  theme: StyleFunctionProps['theme'];
  bg: string;
  bgHover?: string;
  bgActive?: string;
  color: string;
  colorHover?: string;
  boxShadowFocus?: string;
};
const customVariant = ({
  theme,
  bg,
  bgHover = bg,
  bgActive = bgHover,
  color,
  colorHover = color,
  boxShadowFocus = 'outline',
}: customVariantOptions) => {
  const isColorAccessible = isAccessible(color, bg, {
    size: 'large',
    level: 'AA',
  })(theme);

  const isHoverColorAccessible = isAccessible(colorHover, bg, {
    size: 'large',
    level: 'AA',
  })(theme);

  return {
    bg,
    color: isColorAccessible ? color : 'black',
    _focus: {
      boxShadow: boxShadowFocus,
    },
    _hover: {
      bg: bgHover,
      color: isHoverColorAccessible ? colorHover : 'black',
      _disabled: {
        bg,
      },
    },
    _active: { bg: bgActive },
  };
};

const baseStyle = {
  ':focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
  fontWeight: 'medium',
  borderRadius: 'lg',
};

const sizes = {
  lg: {
    fontSize: 'md',
  },
  xl: {
    h: '3.75rem',
    minW: '3.75rem',
    fontSize: 'lg',
    px: 7,
  },
};

const variants = {
  primary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['solid']({
      ...props,
      variant: 'solid',
      colorScheme: 'brand',
    }),
  'primary-on-accent': () => ({
    bg: 'brand.50',
    color: 'brand.600',
    _hover: { bg: 'brand.100' },
    _active: { bg: 'brand.100' },
  }),
  secondary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['outline']({
      ...props,
      variant: 'outline',
      colorScheme: 'gray',
    }),
  'secondary-on-accent': {
    color: 'white',
    borderColor: 'brand.50',
    borderWidth: '1px',
    _hover: { bg: 'whiteAlpha.200' },
    _active: { bg: 'whiteAlpha.200' },
  },
  outline: (props: StyleFunctionProps) => ({
    color: 'emphasized',
    bg: mode('white', 'gray.800')(props),
    _hover: {
      bg: mode(
        darken('gray.50', 1)(props.theme),
        transparentize('gray.700', 0.4)(props.theme)
      )(props),
    },
    _checked: {
      bg: mode('gray.100', 'gray.700')(props),
    },
    _active: {
      bg: mode('gray.100', 'gray.700')(props),
    },
  }),
  ghost: (props: StyleFunctionProps) => ({
    color: 'emphasized',
    _hover: {
      bg: mode(
        darken('gray.50', 1)(props.theme),
        darken('gray.700', 4)(props.theme)
      )(props),
    },
    _active: {
      bg: mode(
        darken('gray.50', 1)(props.theme),
        darken('gray.700', 4)(props.theme)
      )(props),
    },
    _activeLink: {
      bg: mode('gray.100', 'gray.700')(props),
    },
  }),
  'ghost-on-accent': (props: StyleFunctionProps) => ({
    color: 'brand.50',
    _hover: {
      bg: transparentize('brand.500', 0.67)(props.theme),
    },
    _activeLink: {
      color: 'white',
      bg: 'bg-accent-subtle',
    },
  }),
  link: (props: StyleFunctionProps) => {
    if (props.colorScheme === 'gray') {
      return {
        color: 'muted',
        _hover: {
          textDecoration: 'none',
          color: 'default',
        },
        _active: {
          color: 'default',
        },
      };
    }
    return {
      color: mode(
        `${props.colorScheme}.600`,
        `${props.colorScheme}.200`
      )(props),
      _hover: {
        color: mode(
          `${props.colorScheme}.700`,
          `${props.colorScheme}.300`
        )(props),
        textDecoration: 'none',
      },
      _active: {
        color: mode(
          `${props.colorScheme}.700`,
          `${props.colorScheme}.300`
        )(props),
      },
    };
  },
  'link-on-accent': () => {
    return {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: 'brand.50',
      _hover: {
        color: 'white',
      },
      _active: {
        color: 'white',
      },
    };
  },
  '@primary': (props: StyleFunctionProps) =>
    customVariant({
      theme: props.theme,
      bg: mode('brand.600', 'brand.300')(props),
      bgHover: mode('brand.700', 'brand.400')(props),
      bgActive: mode('brand.800', 'brand.500')(props),
      color: mode('white', 'brand.900')(props),
      boxShadowFocus: 'outline-brand',
    }),
  '@success': (props: StyleFunctionProps) =>
    customVariant({
      theme: props.theme,
      bg: mode('success.100', 'success.300')(props),
      bgHover: mode('success.200', 'success.400')(props),
      bgActive: mode('success.300', 'success.500')(props),
      color: mode('success.900', 'success.900')(props),
      boxShadowFocus: 'outline-brand',
    }),
  '@secondary': (props: StyleFunctionProps) =>
    customVariant({
      theme: props.theme,
      bg: mode('secondary.300', 'secondary.300')(props),
      bgHover: mode('secondary.200', 'secondary.800')(props),
      bgActive: mode('secondary.300', 'secondary.700')(props),
      color: 'white',
      colorHover: mode('brand.800', 'brand.100')(props),
      boxShadowFocus: 'outline-brand',
    }),
  '@danger': (props: StyleFunctionProps) =>
    customVariant({
      theme: props.theme,
      bg: mode('error.100', 'error.900')(props),
      bgHover: mode('error.200', 'error.800')(props),
      bgActive: mode('error.300', 'error.700')(props),
      color: mode('error.700', 'error.50')(props),
      colorHover: mode('error.800', 'error.100')(props),
      boxShadowFocus: 'outline-error',
    }),
  '@default': (props) => ({
    ...customVariant({
      theme: props.theme,
      bg: 'white',
      color: 'gray.700',
      colorHover: 'gray.800',
    }),
    border: '1px solid',
    borderColor: 'gray.300',
  }),
};

export default {
  baseStyle,
  variants,
  sizes,
};
