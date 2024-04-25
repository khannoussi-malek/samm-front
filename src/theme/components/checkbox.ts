import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';

const baseStyle = (props: StyleFunctionProps) => ({
  label: {
    color: 'muted',
    fontWeight: 'medium',
    touchAction: 'none',
    container: {
      touchAction: 'none',
    },
  },
  control: {
    bg: mode('white', 'gray.800')(props),
    borderRadius: 'base',
  },
});

const sizes = {
  md: {
    label: {
      fontSize: 'sm',
    },
  },
};

const defaultProps = {
  colorScheme: 'brand',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
