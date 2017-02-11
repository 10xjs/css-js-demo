import Grid from '/component/base/grid';
import Row from '/component/base/row';
/* demo-hide-start */
import {createElement} from 'react';

export const section = 'Grid and Row';

export const sources = [
  'grid/grid.js',
  'grid/grid.css.js',
];

export const description = `
  <p>
    Create a flexible equal-width column grid layout.
  </p>
`;
/* demo-hide-end */

export const render = () =>
  <Row>
    <Grid border>A</Grid>
    <Grid border>B</Grid>
    <Grid border>C</Grid>
    <Grid border>D</Grid>
    <Grid border>E</Grid>
  </Row>;
