// =============================================================================
// Import utils.
// =============================================================================
import {breakpointMin} from '/util/css.util';

// =============================================================================
// Import config.
// =============================================================================
import {MEDIUM} from '/config/breakpoint.config';
import {
  LAYOUT_GUTTER,
  LAYOUT_GUTTER_SMALL,
  GRID_GUTTER,
  GRID_GUTTER_SMALL,
} from '/config/layout.config';

export const BASE = {
  marginLeft: LAYOUT_GUTTER_SMALL - GRID_GUTTER_SMALL / 2,
  marginRight: LAYOUT_GUTTER_SMALL - GRID_GUTTER_SMALL / 2,

  [breakpointMin(MEDIUM)]: {
    marginLeft: LAYOUT_GUTTER - GRID_GUTTER / 2,
    marginRight: LAYOUT_GUTTER - GRID_GUTTER / 2,
  },

  '& &': {
    marginLeft: - GRID_GUTTER_SMALL / 2,
    marginRight: - GRID_GUTTER_SMALL / 2,

    [breakpointMin(MEDIUM)]: {
      marginLeft: - GRID_GUTTER / 2,
      marginRight: - GRID_GUTTER / 2,
    },
  },
};
