// =============================================================================
// Import config.
// =============================================================================
import {ICE, CHARCOAL, CLAY, TEAL, BRICK, WINE, LILAC, INDIGO, BONDI, FOREST}
  from '/config/color.config';
import {BASE_LINE_HEIGHT, MONO_FONT_STACK} from '/config/typography.config';

export const INLINE = {
  display: 'inline',
  fontFamily: MONO_FONT_STACK.join(', '),
  paddingLeft: '0.3em',
  paddingRight: '0.3em',
  paddingTop: '0.2em',
  paddingBottom: '0.2em',
  backgroundColor: ICE,
  borderRadius: '0.2rem',
};

export const BLOCK = {
  lineHeight: `${BASE_LINE_HEIGHT}rem`,
  marginBottom: `${BASE_LINE_HEIGHT}rem`,
  flexBasis: '100%',
  background: ICE,
  borderRadius: '0.2rem',

  '& :global(.hljs)': {
    display: 'block',
    overflowX: 'auto',
    padding: '0.5em',
    color: CHARCOAL,
    fontFamily: MONO_FONT_STACK.join(', '),
  },
  '& :global(.hljs-comment)': {
    color: CLAY,
    fontStyle: 'italic',
  },
  '& :global(.hljs-quote)': {
    color: CLAY,
    fontStyle: 'italic',
  },
  '& :global(.hljs-keyword)': {
    color: CHARCOAL,
    fontWeight: 'bold',
  },
  '& :global(.hljs-selector-tag)': {
    color: CHARCOAL,
    fontWeight: 'bold',
  },
  '& :global(.hljs-subst)': {
    color: CHARCOAL,
    fontWeight: 'normal',
  },
  '& :global(.hljs-number)': {
    color: TEAL,
  },
  '& :global(.hljs-literal)': {
    color: TEAL,
  },
  '& :global(.hljs-variable)': {
    color: TEAL,
  },
  '& :global(.hljs-template-variable)': {
    color: TEAL,
  },
  '& :global(.hljs-tag .hljs-attr)': {
    color: TEAL,
  },
  '& :global(.hljs-string)': {
    color: BRICK,
  },
  '& :global(.hljs-doctag)': {
    color: BRICK,
  },
  '& :global(.hljs-title)': {
    color: WINE,
    fontWeight: 'bold',
  },
  '& :global(.hljs-section)': {
    color: WINE,
    fontWeight: 'bold',
  },
  '& :global(.hljs-selector-id)': {
    color: WINE,
    fontWeight: 'bold',
  },
  '& :global(.hljs-type)': {
    color: LILAC,
    fontWeight: 'bold',
  },
  '& :global(.hljs-class .hljs-title)': {
    color: LILAC,
    fontWeight: 'bold',
  },
  '& :global(.hljs-tag)': {
    color: INDIGO,
    fontWeight: 'normal',
  },
  '& :global(.hljs-name)': {
    color: INDIGO,
    fontWeight: 'normal',
  },
  '& :global(.hljs-attribute)': {
    color: INDIGO,
    fontWeight: 'normal',
  },
  '& :global(.hljs-regexp)': {
    color: FOREST,
  },
  '& :global(.hljs-link)': {
    color: FOREST,
  },
  '& :global(.hljs-symbol)': {
    color: '#990073',
  },
  '& :global(.hljs-bullet)': {
    color: '#990073',
  },
  '& :global(.hljs-built_in)': {
    color: BONDI,
  },
  '& :global(.hljs-builtin-name)': {
    color: BONDI,
  },
  '& :global(.hljs-meta)': {
    color: CLAY,
    fontWeight: 'bold',
  },
  '& :global(.hljs-deletion)': {
    background: '#fdd',
  },
  '& :global(.hljs-addition)': {
    background: '#dfd',
  },
  '& :global(.hljs-emphasis)': {
    fontStyle: 'italic',
  },
  '& :global(.hljs-strong)': {
    fontWeight: 'bold',
  },
};
