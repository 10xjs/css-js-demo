import range from 'lodash/fp/range';
import map from 'lodash/fp/map';
import {HEADING_FONT_SIZE} from '/config/typography.config';
import Heading from '/component/base/heading';
/* demo-hide-start */
import {createElement} from 'react';

export const section = 'Heading';

export const sources = [
  'heading/heading.js',
  'heading/heading.css.js',
];

export const description = `
  <p>
    Render styled <code>h1</code> through <code>h${
      HEADING_FONT_SIZE.length
    }</code> elements.
  </p>
`;
/* demo-hide-end */

export const render = () =>
  <div>
    {map((level) =>
      <Heading key={level} level={level}>
        Level {level}
      </Heading>,
    range(1, HEADING_FONT_SIZE.length + 1))}
  </div>;
