// =============================================================================
// Import modules.
// =============================================================================
import range from 'lodash/fp/range';

// =============================================================================
// Import modules.
// =============================================================================
import {createElement, PropTypes} from 'react';
import classNames from 'classnames';

// =============================================================================
// Import config.
// =============================================================================
import {GRID_COLUMNS} from '/config/layout.config';

// =============================================================================
// Import base components.
// =============================================================================
import Flex from '/component/base/flex';

// =============================================================================
// Import local styles.
// =============================================================================
import styles, {BASE, INNER} from './grid.css';

const Grid = ({className, small, medium, large, border, children, ...props}) =>
  <Flex
    className={classNames(
      className,
      BASE,
      styles[`SMALL_${small}`],
      styles[`MEDIUM_${medium}`],
      styles[`LARGE_${large}`],
    )}
    align='stretch'
    wrap={!border}
    {...props}
  >
    {border
      ? <Flex wrap align='stretch' className={INNER}>{children}</Flex>
      : children
    }
  </Flex>;

Grid.displayName = 'base/Grid';

const sizeRange = ['auto', ...range(1, GRID_COLUMNS + 1)];

Grid.PropTypes = {
  small: PropTypes.oneOf(sizeRange),
  medium: PropTypes.oneOf(sizeRange),
  large: PropTypes.oneOf(sizeRange),
};

export default Grid;
