// =============================================================================
// Import config.
// =============================================================================
import {SMOKE} from '/config/color.config';
import {BASE_LINE_HEIGHT} from '/config/typography.config';

export const BASE = {
  lineHeight: `${BASE_LINE_HEIGHT}rem`,
  marginBottom: `${BASE_LINE_HEIGHT}rem`,
  flexBasis: '100%',
  border: `1px solid ${SMOKE}`,
  borderRadius: '0.2rem',
};

export const INNER = {
  margin: `${BASE_LINE_HEIGHT}rem`,
};
