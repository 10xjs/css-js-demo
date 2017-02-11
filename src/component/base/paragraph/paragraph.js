// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';
import classNames from 'classnames';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE} from './paragraph.css';

const Paragraph = ({className, component: Component = 'p', ...props}) =>
  <Component className={classNames(BASE, className)} {...props}/>;

Paragraph.displayName = 'base/Paragraph';

export default Paragraph;
