import Icon from '/component/base/icon';
/* demo-hide-start */
import {createElement} from 'react';

export const section = 'Icon';

export const sources = [
  'icon/icon.js',
  'icon/icon.css.js',
];

export const description = `
  <p>
    Render an icon.
  </p>

  <p>
    All <code>.icon.svg</code> files from within
    the <code>src/asset/icon</code> directory are automatically
    bundled and accessible through the <code>type</code> prop.
  </p>
`;
/* demo-hide-end */

export const render = () => <Icon type='github'/>;
