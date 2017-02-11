// =============================================================================
// Import lodash.
// =============================================================================
import flow from 'lodash/fp/flow';
import fromPairs from 'lodash/fp/fromPairs';
import map from 'lodash/fp/map';
import toPairs from 'lodash/fp/toPairs';
import zipAll from 'lodash/fp/zipAll';

// =============================================================================
// Import config.
// =============================================================================
import {
  HEADING_FONT_SIZE,
  HEADING_LINE_HEIGHT,
  HEADING_MARGIN_TOP,
  HEADING_MARGIN_BOTTOM,
} from '/config/typography.config';

export const BASE = {
  fontWeight: 600,
  flexBasis: '100%',
  '&:hover .LINK': {
    opacity: 1,
  },
};

const levelClasses = flow(
  toPairs,
  map(([i, [size, height, top, bottom]]) => [`.LEVEL_${1 + parseInt(i, 10)}`, {
    fontSize: `${size}rem`,
    lineHeight: `${height}rem`,
    marginBottom: `${bottom}rem`,
    marginTop: `${top}rem`,
  }]),
  fromPairs,
)(zipAll([
  HEADING_FONT_SIZE,
  HEADING_LINE_HEIGHT,
  HEADING_MARGIN_TOP,
  HEADING_MARGIN_BOTTOM,
]));

export default {
  ...levelClasses,
};
