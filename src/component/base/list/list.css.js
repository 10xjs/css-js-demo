// =============================================================================
// Import config.
// =============================================================================
import {BASE_LINE_HEIGHT} from '/config/typography.config';

export const BASE = {
  lineHeight: `${BASE_LINE_HEIGHT}rem`,
  flexBasis: '100%',
  paddingLeft: `${BASE_LINE_HEIGHT}rem`,
  marginBottom: `${BASE_LINE_HEIGHT}rem`,

  '& &': {
    marginBottom: 0,
  },
};

export const ORDERED = {
  listStyleType: 'decimal',
};

export const UNORDERED = {
  listStyleType: 'disc',
};
