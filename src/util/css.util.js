import compact from 'lodash/fp/compact';

export const anchorColor = (color, hover = color, visited = color) => ({
  '&': {color},
  '&:hover, &:visited:hover': {color: hover},
  '&:visited': {color: visited},
});

export const mediaQuery = (rules) => {
  let _rules = compact(rules);

  if (_rules.length === 0) {
    _rules = ['all'];
  }

  return `@media ${rules.join(' and ')}`;
};

export const breakpointMin = ({min}) =>
  mediaQuery([min ? `(min-width: ${min}px)` : null]);

export const breakpointMax = ({max}) =>
  mediaQuery([max ? `(max-width: ${max}px)` : null]);

export const breakpointMinMax = ({min, max}) => mediaQuery([
  min ? `(min-width: ${min}px)` : null,
  max ? `(max-width: ${max}px)` : null,
]);
