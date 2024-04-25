import { extendTheme } from '@chakra-ui/react';

import * as components from './components';
import * as customs from './components/custom';
import { config } from './config';
import foundations from './foundations';
import { styles } from './styles';

export const theme = extendTheme({
  config,
  styles,
  ...foundations,
  components: { ...(components as any), ...(customs as any) },
  space: {
    '4.5': '1.125rem',
  },
  layerStyles: {
    card: {
      p: '4',
      bg: 'white',
      boxShadow: 'lg',
      borderRadius: 'md',
    },
    empty: {
      bg: 'gray.200',
      borderRadius: 'md',
      p: '4',
    },
  },
});
