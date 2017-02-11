
/* global require */
// =============================================================================
// Import lodash.
// =============================================================================
import compact from 'lodash/fp/compact';
import contains from 'lodash/fp/contains';
import map from 'lodash/fp/map';

// =============================================================================
// Import modules.
// =============================================================================
import {createElement, PropTypes} from 'react';
import classNames from 'classnames';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE} from './icon.css';

const getIconModule = (type) => `./${type}.icon.svg`;
const getIconName = (module) =>
  (/\.\/([a-zA-Z0-9\-_]+)\.icon\.svg$/.exec(module) || [])[1];

const context = require.context(process.env.ICON_PATH, false, /\.icon\.svg$/);

export const icons = compact(map(getIconName, context.keys()));

const Icon = ({type, className, ...props}) => {
  if (!contains(type, icons)) {
    return null;
  }

  const Component = context(getIconModule(type)).default;

  return <Component className={classNames(BASE, className)} {...props}/>;
};

Icon.displayName = 'Base/Icon';

Icon.propTypes = {
  type: PropTypes.oneOf(icons),
};

export default Icon;
