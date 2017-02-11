// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';
import classNames from 'classnames';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE} from './bold.css';

const Bold = ({className, component: Component = 'b', ...props}) =>
  <Component className={classNames(BASE, className)} {...props}/>;

Bold.displayName = 'base/Bold';

export default Bold;
