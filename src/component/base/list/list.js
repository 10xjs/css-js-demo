// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';
import classNames from 'classnames';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE, UNORDERED, ORDERED} from './list.css';

const List = ({
  className,
  ordered,
  component: Component = ordered ? 'ol' : 'ul',
  ...props
}) =>
  <Component
    className={classNames(BASE, ordered ? ORDERED : UNORDERED, className)}
    {...props}
  />;

List.displayName = 'base/List';

export default List;
