import List, {ListItem as Item} from '/component/base/list';
/* demo-hide-start */
import {createElement} from 'react';

export const section = 'List';

export const sources = [
  'list/list.js',
  'list/list.css.js',
  'list/item/item.js',
  'list/item/item.css.js',
];

export const description = `
  <p>
    Render an ordered (<code>ol</code> style) list.
  </p>
`;
/* demo-hide-end */

export const render = () =>
  <List ordered>
    <Item>List item A</Item>
    <Item>List item B</Item>
    <Item>List item C</Item>
  </List>;
