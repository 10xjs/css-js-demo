// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';
import classNames from 'classnames';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE, INNER} from './panel.css';

const Panel = ({className, children, ...props}) =>
  <div className={classNames(BASE, className)} {...props}>
    <div className={INNER}>
      {children}
    </div>
  </div>;

Panel.displayName = 'base/Panel';

export default Panel;
