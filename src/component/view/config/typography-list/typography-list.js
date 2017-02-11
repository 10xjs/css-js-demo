// =============================================================================
// Import modules.
// =============================================================================
import map from 'lodash/fp/map';

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
  BASE_FONT_SIZE,
  BASE_FONT_STACK,
  MONO_FONT_STACK,
  BASE_LINE_HEIGHT,
  HEADING_SCALE_FACTOR,
} from '/config/typography.config';

const TypographyList = () =>
  <List>
    <Item>
      <Bold><Code>BASE_FONT_SIZE</Code></Bold>
      {' - '}
      Document font size:
      {' '}
      <Code>{`${BASE_FONT_SIZE.toFixed(2).replace(/\.0+$/, '')}px`}</Code>
    </Item>

    <Item>
      <Bold><Code>BASE_FONT_STACK</Code></Bold>
      {' - '}
      Document font family stack:
      <List ordered>
        {map((font) =>
          <Item key={font}><Code>{font.replace(/^"|"$/g, '')}</Code></Item>,
        BASE_FONT_STACK)}
      </List>
    </Item>

    <Item>
      <Bold><Code>MONO_FONT_STACK</Code></Bold>
      {' - '}
      Fixed-width font family stack:
      <List ordered>
        {map((font) =>
          <Item key={font}><Code>{font.replace(/^"|"$/g, '')}</Code></Item>,
        MONO_FONT_STACK)}
      </List>
    </Item>

    <Item>
      <Bold><Code>BASE_LINE_HEIGHT</Code></Bold>
      {' - '}
      Document line height:
      {' '}
      <Code>{`${BASE_LINE_HEIGHT.toFixed(2).replace(/\.0+$/, '')}rem`}</Code>
    </Item>

    <Item>
      <Bold><Code>HEADING_SCALE_FACTOR</Code></Bold>
      {' - '}
      Ratio between heading element  sizes:
      {' '}
      <Code>
        {`${HEADING_SCALE_FACTOR.toFixed(2).replace(/\.0+$/, '')}`}
      </Code>
    </Item>

{/*    <Item>
      <Bold><Code>HEADING_FONT_SIZE</Code></Bold>
      {' - '}
      Heading element font sizes.
      {' '}
      <List ordered>
        {map(([i, size]) =>
          <Item key={i}>
            <Code>{`h${parseInt(i, 10) + 1}`}</Code>
            {' - '}
            <Code>{`${size.toFixed(2).replace(/\.0+$/, '')}px`}</Code>
          </Item>,
        toPairs(HEADING_FONT_SIZE))}
      </List>
    </Item>

    <Item>
      <Bold><Code>HEADING_LINE_HEIGHT</Code></Bold>
      {' - '}
      Heading element line heights:
      {' '}
      <List ordered>
        {map(([i, size]) =>
          <Item key={i}>
            <Code>{`h${parseInt(i, 10) + 1}`}</Code>
            {' - '}
            <Code>{`${size.toFixed(2).replace(/\.0+$/, '')}rem`}</Code>
          </Item>,
        toPairs(HEADING_LINE_HEIGHT))}
      </List>
    </Item>

    <Item>
      <Bold><Code>HEADING_MARGIN_TOP</Code></Bold>
      {' - '}
      Heading element top margin values:
      {' '}
      <List ordered>
        {map(([i, size]) =>
          <Item key={i}>
            <Code>{`h${parseInt(i, 10) + 1}`}</Code>
            {' - '}
            <Code>{`${size.toFixed(2).replace(/\.0+$/, '')}rem`}</Code>
          </Item>,
        toPairs(HEADING_MARGIN_TOP))}
      </List>
    </Item>

    <Item>
      <Bold><Code>HEADING_MARGIN_BOTTOM</Code></Bold>
      {' - '}
      Heading element bottom margin values:
      {' '}
      <List ordered>
        {map(([i, size]) =>
          <Item key={i}>
            <Code>{`h${parseInt(i, 10) + 1}`}</Code>
            {' - '}
            <Code>{`${size.toFixed(2).replace(/\.0+$/, '')}rem`}</Code>
          </Item>,
        toPairs(HEADING_MARGIN_BOTTOM))}
      </List>
    </Item>*/}
  </List>;

TypographyList.displayName = 'view/Config/TypographyList';

export default TypographyList;
