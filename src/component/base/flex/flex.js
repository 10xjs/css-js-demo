// =============================================================================
// Import lodash.
// =============================================================================
import keys from 'lodash/fp/keys';

// =============================================================================
// Import modules.
// =============================================================================
import {createElement,
  PropTypes} from 'react';
import classNames from 'classnames';

// =============================================================================
// Import local config.
// =============================================================================
import {ALIGN, JUSTIFY, DIRECTION, BASIS} from './flex.config';

// =============================================================================
// Import local styles.
// =============================================================================
import styles, {BASE, WRAP} from './flex.css';

const Flex = ({
  className,
  align,
  justify,
  direction,
  basis,
  wrap,
  component: Component = 'div',
  props,
  ...rest
}) =>
  <Component
    className={classNames(
      className,
      BASE,
      {[WRAP]: wrap},
      styles[`ALIGN_${align}`],
      styles[`JUSTIFY_${justify}`],
      styles[`DIRECTION_${direction}`],
      styles[`BASIS_${basis}`],
    )}
    {...rest}
    {...props}
  />;

Flex.displayName = 'base/Flex';

Flex.propTypes = {
  align: PropTypes.oneOf(keys(ALIGN)),
  justify: PropTypes.oneOf(keys(JUSTIFY)),
  direction: PropTypes.oneOf(keys(DIRECTION)),
  basis: PropTypes.oneOf(keys(BASIS)),
  wrap: PropTypes.bool,
};

export default Flex;
