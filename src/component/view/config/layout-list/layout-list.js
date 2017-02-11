// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';

// =============================================================================
// Import base components.
// =============================================================================
import Bold from '/component/base/bold';
import Code from '/component/base/code';
import List, {ListItem as Item} from '/component/base/list';

// =============================================================================
// Import config.
// =============================================================================
import {
  LAYOUT_WIDTH,
  LAYOUT_GUTTER,
  LAYOUT_GUTTER_SMALL,
  GRID_COLUMNS,
  GRID_GUTTER,
  GRID_GUTTER_SMALL,
} from '/config/layout.config';

const LayoutList = () =>
  <List>
    <Item>
      <Bold><Code>LAYOUT_WIDTH</Code></Bold>
      {' - '}
      Maximum width of center layout column:
      {' '}
      <Code>{`${LAYOUT_WIDTH}px`}</Code>
    </Item>

    <Item>
      <Bold><Code>LAYOUT_GUTTER</Code></Bold>
      {' - '}
      Margin at the left and right of the center layout column:
      {' '}
      <Code>{`${LAYOUT_GUTTER}px`}</Code>
    </Item>

    <Item>
      <Bold><Code>LAYOUT_GUTTER_SMALL</Code></Bold>
      {' - '}
      Margin at the left and right of the center layout column
      at <Code>SMALL</Code> breakpoint:
      {' '}
      <Code>{`${LAYOUT_GUTTER_SMALL}px`}</Code>
    </Item>

    <Item>
      <Bold><Code>GRID_COLUMNS</Code></Bold>
      {' - '}
      Number of columns in the layout grid:
      {' '}
      <Code>{`${GRID_COLUMNS}`}</Code>
    </Item>

    <Item>
      <Bold><Code>GRID_GUTTER</Code></Bold>
      {' - '}
      Margin between layout grid columns:
      {' '}
      <Code>{`${GRID_GUTTER}px`}</Code>
    </Item>

    <Item>
      <Bold><Code>GRID_GUTTER_SMALL</Code></Bold>
      {' - '}
      Maximum width of center layout column.
      at <Code>SMALL</Code> breakpoint:
      {' '}
      <Code>{`${GRID_GUTTER_SMALL}px`}</Code>
    </Item>
  </List>;

LayoutList.displayName = 'view/Config/LayoutList';

export default LayoutList;
