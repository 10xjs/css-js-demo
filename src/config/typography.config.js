// =============================================================================
// Import lodash.
// =============================================================================
import map from 'lodash/fp/map';
import times from 'lodash/fp/times';

// Base font size in px.
export const BASE_FONT_SIZE = 16;

export const BASE_FONT_STACK = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

export const MONO_FONT_STACK = [
  'SFMono-Regular',
  'Consolas',
  '"Liberation Mono"',
  'Menlo',
  'Courier',
  'monospace',
];

// Base line height in rem.
export const BASE_LINE_HEIGHT = 2;

// Scale factor between each heading size, i.e. h1 size = FACTOR * h2 size.
export const HEADING_SCALE_FACTOR = 1.618;

// Array of heading font sizes in rem. From h1 to h4.
export const HEADING_FONT_SIZE =
  times((i) => Math.pow(HEADING_SCALE_FACTOR, i), 4).reverse();

// Array of heading line counts. From h1 to h4.
export const HEADING_LINES =
  map((size) => Math.ceil(size / BASE_LINE_HEIGHT + 0.1), HEADING_FONT_SIZE);

// Array of heading line heights in rem. From h1 to h4.
export const HEADING_LINE_HEIGHT =
  map((lines) => lines * BASE_LINE_HEIGHT, HEADING_FONT_SIZE);

// Array of heading top margins in rem. From h1 to h4.
export const HEADING_MARGIN_TOP = map(() => BASE_LINE_HEIGHT, HEADING_LINES);

// Array of heading bottom margins in rem. From h1 to h4.
export const HEADING_MARGIN_BOTTOM =
  map(
    (lines) => Math.min(1, Math.max(0, lines - 1)) * BASE_LINE_HEIGHT,
    HEADING_LINES,
  );
