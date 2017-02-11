import Flex from '/component/base/flex';
/* demo-hide-start */
import {createElement} from 'react';

export const section = 'Flex';

export const sources = [
  'flex/flex.js',
  'flex/flex.css.js',
  'flex/flex.config.js',
];

export const description = `
  <p>
    Render a flexbox layout.
  </p>
`;
/* demo-hide-end */

export const render = () =>
  <Flex justify='between'>
    <div>Left</div>
    <div>Center</div>
    <div>Right</div>
  </Flex>;
