// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE} from './title.css';

const Title = ({className, ...props}) =>
  <Link className={classNames(BASE, className)} {...props}/>;

Title.displayName = 'base/Header/Title';

export default Title;
