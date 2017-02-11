// =============================================================================
// Import lodash.
// =============================================================================
import kebabCase from 'lodash/fp/kebabCase';

// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';
import classNames from 'classnames';

// =============================================================================
// Import utils.
// =============================================================================
import {getStringValue} from '/util/component.util';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE, LINK} from './anchor.css';

const Anchor = ({
  className,
  component: Component = 'div',
  children,
  id = kebabCase(getStringValue(children)),
  ...props
}) =>
  <Component className={classNames(className, BASE)} id={id} {...props}>
    {!!id && <a className={LINK} href={`#${id}`}>🔗</a>}
    {children}
  </Component>;

Anchor.displayName = 'base/Anchor';

export default Anchor;
