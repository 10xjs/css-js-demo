// =============================================================================
// Import lodash.
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
import {HEADING_FONT_SIZE} from '/config/typography.config';

// =============================================================================
// Import local styles.
// =============================================================================
import styles, {BASE} from './heading.css';

const Heading = ({
  className,
  level = 1,
  component: Component = `h${level}`,
  ...props
}) =>
  <Component
    className={classNames(BASE, styles[`LEVEL_${level}`], className)}
    {...props}
  />;

Heading.displayName = 'base/Heading';

Heading.propTypes = {
  level: PropTypes.oneOf(range(1, HEADING_FONT_SIZE.length + 1)),
};

export default Heading;
