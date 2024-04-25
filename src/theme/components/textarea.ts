import {
  SystemStyleInterpolation,
  getColor,
  mode,
} from '@chakra-ui/theme-tools';

const variants: Record<string, SystemStyleInterpolation> = {
  outline: (props) => {
    const focusBorderColor = getColor(
      props.theme,
      props.focusBorderColor
        ? props.focusBorderColor
        : mode('brand.500', 'brand.300')(props)
    );
    return {
      borderRadius: 'lg',
      bg: mode('white', 'whiteAlpha.50')(props),
      _focus: {
        borderColor: focusBorderColor,
        boxShadow: `0 0 0 1px ${focusBorderColor}`,
      },
    };
  },
};

export default {
  variants,
};
