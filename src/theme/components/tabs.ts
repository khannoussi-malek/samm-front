export default {
  variants: {
    '@primary': {
      tab: {
        color: 'gray.600',
        _selected: {
          color: 'brand.600',
          borderColor: 'currentColor',
        },
        borderColor: 'transparent',
        borderBottomWidth: '2px',
        _disabled: {
          cursor: 'not-allowed',
          color: 'gray.300',
        },
      },
    },
  },
};
