import Anchor from '/component/base/anchor';
import Heading from '/component/base/heading';
/* demo-hide-start */
import {createElement} from 'react';

export const section = 'Anchor';

export const sources = [
  'anchor/anchor.js',
  'anchor/anchor.css.js',
];

export const description = `
  <p>
    Wrap a <code>Heading</code> (or any component) with <code>Anchor</code>
    to include an an anchor link that appears in the margin on hover.
  </p>
`;
/* demo-hide-end */

export const render = () =>
  <Anchor>
    <Heading level={3}>
      Heading with Anchor
    </Heading>
  </Anchor>;
