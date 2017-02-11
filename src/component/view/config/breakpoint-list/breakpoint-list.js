// =============================================================================
// Import lodash.
// =============================================================================
import map from 'lodash/fp/map';
import toPairs from 'lodash/fp/toPairs';

// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';

// =============================================================================
// Import config.
// =============================================================================
import * as breakpoints from '/config/breakpoint.config';

// =============================================================================
// Import base components.
// =============================================================================
import Bold from '/component/base/bold';
import Code from '/component/base/code';
import List, {ListItem as Item} from '/component/base/list';

const BreakpointList = () =>
  <List>
    {map(([name, {min, max}]) =>
      <Item key={name}>
        <Bold><Code>{name}</Code></Bold>
        {' - '}
        {!!min && !!max &&
          <span>
            between <Code>{min}px</Code> and <Code>{max}px</Code>
          </span>
        }
        {!!min && !max &&
          <span>
            above <Code>{min}px</Code>
          </span>
        }
        {!!max && !min &&
          <span>
            below <Code>{max}px</Code>
          </span>
        }
      </Item>,
    toPairs(breakpoints))}
  </List>;

BreakpointList.displayName = 'view/Config/BreakpointList';

export default BreakpointList;
