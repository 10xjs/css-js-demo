import Paragraph from '/component/base/paragraph';
/* demo-hide-start */
import {createElement} from 'react';

export const section = 'Paragraph';

export const sources = [
  'paragraph/paragraph.js',
  'paragraph/paragraph.css.js',
];

export const description = `
  <p>
    Render a styled paragraph.
  </p>
`;
/* demo-hide-end */

export const render = () =>
  <div>
    <Paragraph>
      A paragraph is a block element with a bottom margin.
    </Paragraph>
    <Paragraph>
      Consecutive paragraphs are visually separated.
    </Paragraph>
  </div>;
