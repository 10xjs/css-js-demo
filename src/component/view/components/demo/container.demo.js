import Container from '/component/base/container';
/* demo-hide-start */
import {createElement} from 'react';

export const section = 'Container';

export const sources = [
  'container/container.js',
  'container/container.css.js',
];

export const description = `
  <p>
    Create a center-aligned layout container.
  </p>
`;
/* demo-hide-end */

export const render = () =>
  <Container>
    Content within center column.
  </Container>;
