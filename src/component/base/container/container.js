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
import Row from '/component/base/row';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE} from './container.css';

const normalizeChildren = (elements) => {
  if (every(({type}) => type === Row, elements)) {
    return elements;
  }

  if (some(({type}) => type === Row, elements)) {
    return map((element) => {
      if (element.type !== Row) {
        return <Row key={element.key}>{element}</Row>;
      }

      return element;
    }, elements);
  }

  return <Row>{elements}</Row>;
};

const Container = ({className, children, ...props}) =>
  <Flex
    className={classNames(className, BASE)}
    wrap
    basis='full'
    align='stretch'
    justify='center'
    {...props}
  >
    {normalizeChildren(Children.toArray(children))}
  </Flex>;

Container.displayName = 'base/Container';

export default Container;
