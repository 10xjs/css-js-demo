import Grid from '/component/base/grid';
import Row from '/component/base/row';
/* demo-hide-start */
import {createElement} from 'react';

import {GRID_COLUMNS} from '/config/layout.config';

export const section = 'Grid and Row';

export const sources = [
  'grid/grid.js',
  'grid/grid.css.js',
];

export const description = `
  <p>
    Create a responsive ${GRID_COLUMNS} column grid layout.
  </p>
`;
/* demo-hide-end */

export const render = () =>
  <Row>
    <Grid small={6} large={3} border>A</Grid>
    <Grid small={6} large={3} border>B</Grid>
    <Grid small={12} large={6} border>C</Grid>
  </Row>;
