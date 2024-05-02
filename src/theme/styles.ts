import { StyleFunctionProps, Styles, mode } from '@chakra-ui/theme-tools';

import * as externals from './externals';

const externalsStyles = (props: StyleFunctionProps) =>
  Object.values(externals).reduce(
    (acc, cur) => ({
      ...acc,
      ...(typeof cur === 'function' ? cur(props) : cur),
    }),
    {}
  );

export const styles: Styles = {
  global: (props) => ({
    html: {
      bg: 'gray.50',
    },
    body: {
      bg: 'rgba(1, 66, 122, 0.1)',
      // Prevent visual jump between pages with and without scroll
      overflowY: 'scroll',
      WebkitTapHighlightColor: 'transparent',
    },
    '#chakra-toast-portal > *': {
      pt: 'safe-top',
      pl: 'safe-left',
      pr: 'safe-right',
      pb: 'safe-bottom',
    },
    ...externalsStyles(props),
  }),
};
