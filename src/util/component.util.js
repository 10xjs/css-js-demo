import map from 'lodash/fp/map';
import isString from 'lodash/fp/isString';

import {Children} from 'react';

export const getStringValue = (children) => {
  return map(
    (child) => isString(child) ? child : getStringValue(child.props.children),
    Children.toArray(children),
  ).join('');
};
