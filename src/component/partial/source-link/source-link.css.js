// =============================================================================
// Import modules.
// =============================================================================
import tinycolor from 'tinycolor2';

// =============================================================================
// Import utils.
// =============================================================================
import {anchorColor} from '/util/css.util';

// =============================================================================
// Import config.
// =============================================================================
import {IRON} from '/config/color.config';

export const BASE = {
  '&:not(:first-child)': {
    marginLeft: 10,
  },
  '&:not(:last-child)': {
    marginRight: 10,
  },

  '&:hover .LINK': {
    opacity: 1,
  },
};

export const LINK = {
  opacity: 0,
  transition: 'opacity 0.125s',
};

export const ACTIVE = {
  borderTop: '2px solid transparent',
  borderBottom: `2px solid ${tinycolor(IRON).lighten(20).toHexString()}`,
};

export default {
  'a.ACTIVE': anchorColor(tinycolor(IRON).lighten(20).toHexString()),
};
