// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';

// =============================================================================
// Import utils.
// =============================================================================
import {hasProtocol} from '/util/url.util';

// =============================================================================
// Import base components.
// =============================================================================
import Flex from '/component/base/flex';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE, ACTIVE} from './item.css';

const Item = ({className, to, ...props}) =>
  <Flex
    className={classNames(BASE, className)}
    align='center'
    justify='center'
    {...{
      ...hasProtocol(to)
        ? {href: to, component: 'a', target: '_blank'}
        : {to, activeClassName: ACTIVE, component: NavLink, exact: true},
      ...props,
    }}
  />;

Item.displayName = 'base/Nav/Item';

export default Item;
