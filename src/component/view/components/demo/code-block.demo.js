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
    Create formatted code blocks.
  </p>
`;
/* demo-hide-end */

export const render = () =>
  <Code block lang='js'>
{`const hello = 'hello';
const world = 'world';

console.log([hello, world].join(' '));
`}
  </Code>;
