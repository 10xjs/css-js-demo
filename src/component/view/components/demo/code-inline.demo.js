import Code from '/component/base/code';
/* demo-hide-start */
import {createElement} from 'react';

export const section = 'Code';

export const sources = [
  'code/code.js',
  'code/code.css.js',
];

export const description = `
  <p>
    Create inline code snippets.
  </p>
`;
/* demo-hide-end */

export const render = () =>
  <span>
    Some <Code>inline code</Code> in a span.
  </span>;
