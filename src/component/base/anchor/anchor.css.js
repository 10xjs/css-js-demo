// =============================================================================
// Import config.
// =============================================================================
import {BASE_LINE_HEIGHT} from '/config/typography.config';

export const BASE = {
  fontWeight: 600,
  flexBasis: '100%',
  position: 'relative',
  paddingLeft: `${BASE_LINE_HEIGHT}rem`,
  marginLeft: `-${BASE_LINE_HEIGHT}rem`,
  '&:hover .LINK': {
    opacity: 1,
  },
};

export const LINK = {
  userSelect: 'none',
  position: 'absolute',
  width: `${BASE_LINE_HEIGHT}rem`,
  height: `${BASE_LINE_HEIGHT}rem`,
  lineHeight: `${BASE_LINE_HEIGHT}rem`,
  fontSize: '1rem',
  left: 0,
  top: 0,
  bottom: 0,
  margin: 'auto',
  opacity: 0,
  transition: 'opacity 0.125s',
};
