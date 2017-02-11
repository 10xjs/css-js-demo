// =============================================================================
// Import lodash.
// =============================================================================
import flow from 'lodash/fp/flow';
import mapKeys from 'lodash/fp/mapKeys';
import mapValues from 'lodash/fp/mapValues';

// =============================================================================
// Import local conifg.
// ============================================================================
import {ALIGN, JUSTIFY, DIRECTION, BASIS} from './flex.config';

export const BASE = {
  display: 'flex',

  '& > *': {
    maxWidth: '100%',
    minWidth: '0',
  },
};

export const WRAP = {
  flexWrap: 'wrap',
};

const alignClasses = flow(
  mapKeys((key) => `.ALIGN_${key}`),
  mapValues((value) => ({alignItems: value})),
)(ALIGN);

const justifyClasses = flow(
  mapKeys((key) => `.JUSTIFY_${key}`),
  mapValues((value) => ({justifyContent: value})),
)(JUSTIFY);

const directionClasses = flow(
  mapKeys((key) => `.DIRECTION_${key}`),
  mapValues((value) => ({flexDirection: value})),
)(DIRECTION);

const basisClasses = flow(
  mapKeys((key) => `.BASIS_${key}`),
  mapValues((value) => ({flexBasis: value})),
)(BASIS);

export default {
  ...alignClasses,
  ...justifyClasses,
  ...directionClasses,
  ...basisClasses,
};
