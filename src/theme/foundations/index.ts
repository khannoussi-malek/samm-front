import { colors } from './colors';
import { layout } from './layout';
import { shadows } from './shadows';
import { spacing } from './spacing';
import { semanticTokens } from './tokens';
import { typography } from './typography';
import { zIndices } from './z-index';

const foundations = {
  colors,
  ...typography,
  shadows,
  space: spacing,
  layout,
  semanticTokens,
  zIndices,
};

export default foundations;
