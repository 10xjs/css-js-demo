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
import {IRON, WHITE} from '/config/color.config';

export const BASE = {
  backgroundColor: IRON,
  height: 80,
  color: WHITE,
  '& a': anchorColor(WHITE, tinycolor(WHITE).darken().toHexString()),
};
