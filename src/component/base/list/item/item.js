// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';
import classNames from 'classnames';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE} from './item.css';

const Item = ({className, component: Component = 'li', ...props}) =>
  <Component className={classNames(BASE, className)} {...props}/>;

Item.displayName = 'base/List/Item';

export default Item;
