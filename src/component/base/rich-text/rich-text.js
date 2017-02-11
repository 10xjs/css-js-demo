// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';
import classNames from 'classnames';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE} from './rich-text.css';

const RichText = ({className, ...props}) =>
  <div className={classNames(BASE, className)} {...props}/>;

RichText.displayName = 'base/RichText';

export default RichText;
