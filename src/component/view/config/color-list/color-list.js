// =============================================================================
// Import lodash.
// =============================================================================
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import sortBy from 'lodash/fp/sortBy';
import toPairs from 'lodash/fp/toPairs';

// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';
import tinycolor from 'tinycolor2';

// =============================================================================
// Import config.
// =============================================================================
import * as colors from '/config/color.config';

// =============================================================================
// Import base components.
// =============================================================================
import Bold from '/component/base/bold';
import Code from '/component/base/code';
import List, {ListItem as Item} from '/component/base/list';

const ColorList = () =>
  <List>
    {flow(
      toPairs,
      sortBy(([, color]) => {
        const {s: saturation, l: lightness} = tinycolor(color).toHsl();
        const darkness = (1 - lightness);
        const intensity = darkness * darkness * saturation * saturation;
        return lightness + intensity * 20;
      }),
      map(([name, color]) =>
        <Item key={name}>
          <span
            style={{
              paddingTop: 'calc(0.2em - 1px)',
              paddingBottom: 'calc(0.2em - 1px)',
              backgroundColor: color,
              borderRadius: '0.2rem',
              border: '1px solid rgba(0, 0, 0, 0.125)',
            }}
          >
            <div style={{display: 'inline-block', width: '3em'}}/>
          </span>
          {' '}
          <Bold><Code>{name}</Code></Bold>
        </Item>
      ),
    )(colors)}
  </List>;

ColorList.displayName = 'view/Config/ColorList';

export default ColorList;
