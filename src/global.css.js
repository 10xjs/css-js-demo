import {CHARCOAL, LILAC} from '/config/color.config';
import {BASE_FONT_SIZE, BASE_FONT_STACK, BASE_LINE_HEIGHT}
  from '/config/typography.config';
import {anchorColor} from '/util/css.util';

export default [{
  /**
   * Ensure content spans at least the size of the browser window.
   * See: http://codepen.io/absolutholz/post/html-and-body-element-height-100
   * ========================================================================
   */
  html: {
    height: '100%',
  },
  body: {
    minHeight: '100%',
  },
}, {
  /**
   * Consistent `box-sizing`.
   * See: http://www.paulirish.com/2012/box-sizing-border-box-ftw/
   * ========================================================================
   */
  html: {
    boxSizing: 'border-box',
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
}, {
  'html, body': {
    color: CHARCOAL,
    fontFamily: BASE_FONT_STACK.join(', '),
    fontWeight: 400,
    fontSize: BASE_FONT_SIZE,
    lineHeight: `${BASE_LINE_HEIGHT}rem`,
  },
  a: {
    ...anchorColor(LILAC),
    textDecoration: 'none',
  },
}];
