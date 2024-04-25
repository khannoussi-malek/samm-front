import { Styles, mode } from '@chakra-ui/theme-tools';

export const reactDayPicker: Styles['global'] = (props) => ({
  '.rdp *': {
    outline: 'none',
  },
  '.rdp': {
    position: 'absolute',
    left: '0',
    zIndex: 2,
    p: 4,
    margin: 0,
    borderRadius: 'md',
    boxShadow: 'lg',
    bg: mode('white', 'gray.700')(props),
  },

  '.rdp-day_selected:focus-visible': {
    backgroundColor: mode('brand.400', 'brand.500')(props),
    borderRadius: '100%',
    color: 'white',
  },
  '.rdp-day:hover:not(.rdp-day_selected)': {
    backgroundColor: mode('blackAlpha.200', 'whiteAlpha.200')(props),
    borderRadius: '100%',
    color: mode('black', 'white')(props),
  },
  '.rdp-day_selected': {
    backgroundColor: mode('brand.600', 'brand.700')(props),
    borderRadius: '100%',
    color: 'white',
  },
  '.rdp-day_selected:hover': {
    backgroundColor: mode('brand.300', 'brand.400')(props),
    borderRadius: '100%',
    color: 'white',
  },
});
