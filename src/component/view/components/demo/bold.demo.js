import Bold from '/component/base/bold';
/* demo-hide-start */
import {createElement} from 'react';

export const section = 'Bold';

export const sources = [
  'bold/bold.js',
  'bold/bold.css.js',
];

export const description = `
  <p>
    Apply bold style to text.
  </p>
`;
/* demo-hide-end */

export const render = () =>
  <span>
    Some <Bold>bold text</Bold> in a span.
  </span>;
