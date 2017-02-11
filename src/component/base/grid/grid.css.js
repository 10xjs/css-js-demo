// =============================================================================
// Import lodash.
// =============================================================================
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import range from 'lodash/fp/range';
import fromPairs from 'lodash/fp/fromPairs';

// =============================================================================
// Import utils.
// =============================================================================
import {breakpointMin} from '/util/css.util';

// =============================================================================
// Import config.
// =============================================================================
import {SMOKE} from '/config/color.config';
import {SMALL, MEDIUM, LARGE} from '/config/breakpoint.config';
import {GRID_COLUMNS, GRID_GUTTER, GRID_GUTTER_SMALL}
  from '/config/layout.config';

export const BASE = {
  flexBasis: 0,
  flexGrow: 1,

  paddingLeft: GRID_GUTTER_SMALL / 2,
  paddingRight: GRID_GUTTER_SMALL / 2,

  [breakpointMin(MEDIUM)]: {
    paddingLeft: GRID_GUTTER / 2,
    paddingRight: GRID_GUTTER / 2,
  },
};

export const INNER = {
  flexGrow: 1,
  border: `1px solid ${SMOKE}`,
  borderRadius: '0.2rem',
};

const smallClasses = flow(
  map((span) => [`.SMALL_${span}`, {
    [breakpointMin(SMALL)]: {
      flexBasis: `${span / 12 * 100}%`,
    },
  }]),
  fromPairs,
)(range(1, GRID_COLUMNS + 1));

const mediumClasses = flow(
  map((span) => [`.MEDIUM_${span}`, {
    [breakpointMin(MEDIUM)]: {
      flexBasis: `${span / 12 * 100}%`,
    },
  }]),
  fromPairs,
)(range(1, GRID_COLUMNS + 1));

const largeClasses = flow(
  map((span) => [`.LARGE_${span}`, {
    [breakpointMin(LARGE)]: {
      flexBasis: `${span / 12 * 100}%`,
    },
  }]),
  fromPairs,
)(range(1, GRID_COLUMNS + 1));

export default {
  ...smallClasses,
  '.SMALL_auto': {
    [breakpointMin(SMALL)]: {flexBasis: 'auto'},
  },
  ...mediumClasses,
  '.MEDIUM_auto': {
    [breakpointMin(MEDIUM)]: {flexBasis: 'auto'},
  },
  ...largeClasses,
  '.LARGE_auto': {
    [breakpointMin(LARGE)]: {flexBasis: 'auto'},
  },
};
