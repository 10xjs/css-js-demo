// =============================================================================
// Import modules.
// =============================================================================
import every from 'lodash/fp/every';
import map from 'lodash/fp/map';
import some from 'lodash/fp/some';

// =============================================================================
// Import modules.
// =============================================================================
import {createElement, Children} from 'react';
import classNames from 'classnames';

// =============================================================================
// Import base components.
// =============================================================================
import Flex from '/component/base/flex';
import Grid from '/component/base/grid';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE} from './row.css';

const normalizeChildren = (elements) => {
  if (every(({type}) => type === Grid, elements)) {
    return elements;
  }

  if (some(({type}) => type === Grid, elements)) {
    return map((element) => {
      if (element.type !== Grid) {
        return <Grid small={12} key={element.key}>{element}</Grid>;
      }

      return element;
    }, elements);
  }

  return <Grid small={12}>{elements}</Grid>;
};

const Row = ({className, children, ...props}) =>
  <Flex
    className={classNames(className, BASE)}
    align='stretch'
    basis='full'
    wrap
    {...props}
  >
    {normalizeChildren(Children.toArray(children))}
  </Flex>;

Row.displayName = 'base/Row';

export default Row;
