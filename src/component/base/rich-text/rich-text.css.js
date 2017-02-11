import headingStyles, {BASE as HEADING} from '../heading/heading.css';
import {BASE as PARAGRAPH} from '../paragraph/paragraph.css';
import {BASE as LIST, ORDERED as LIST_ORDERED, UNORDERED as LIST_UNORDERED}
  from '../list/list.css';
import {BASE as LIST_ITEM} from '/component/base/list/item/item.css';
import {INLINE as CODE} from '/component/base/code/code.css';
import {BASE as BOLD} from '/component/base/bold/bold.css';

export const BASE = {
  flexBasis: '100%',
  '& h1, & h2, & h3, & h4, & h5, & h6': HEADING,
  '& h1': headingStyles['.LEVEL_1'],
  '& h2': headingStyles['.LEVEL_2'],
  '& h3': headingStyles['.LEVEL_3'],
  '& h4, & h5, & h6': headingStyles['.LEVEL_4'],
  '& p': PARAGRAPH,
  '& ul, & ol': LIST,
  '& ul': LIST_UNORDERED,
  '& ol': LIST_ORDERED,
  '& li': LIST_ITEM,
  '& code': CODE,
  '& b, & strong': BOLD,
};
