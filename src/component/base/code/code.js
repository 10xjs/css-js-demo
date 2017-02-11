// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';
import classNames from 'classnames';
import SyntaxHighlighter, {registerLanguage}
  from 'react-syntax-highlighter/dist/light';
import js from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';

// =============================================================================
// Import local styles.
// =============================================================================
import {INLINE, BLOCK} from './code.css';

registerLanguage('javascript', js);
registerLanguage('js', js);
registerLanguage('css', css);
registerLanguage('xml', xml);

const Code = ({
  className,
  block,
  lang,
  component: Component = 'code',
  children,
  ...props
}) => block
  ?
    <div className={classNames(BLOCK, className)} {...props}>
      <SyntaxHighlighter useInlineStyles={false} language={lang}>
        {children}
      </SyntaxHighlighter>
    </div>
  :
    <Component className={classNames(INLINE, className)} {...props}>
      {children}
    </Component>;

Code.displayName = 'base/Code';

export default Code;
