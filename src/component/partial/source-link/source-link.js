/* global window */
// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';

// =============================================================================
// Import base components.
// =============================================================================
import Code from '/component/base/code';
import Icon from '/component/base/icon';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE, LINK} from './source-link.css';

import {GITHUB_URL} from '/config/url.config';

const getURL = (path) => `${GITHUB_URL}/blob/master/${path}`;

const SourceLink = ({children}) =>
  <span className={BASE}>
    <Code>{children}</Code>
    {' '}
    <a
      className={LINK}
      target='_blank'
      href={getURL(children)}
      onClick={(event) => {
        window.open(getURL(children));
        event.preventDefault();
      }}
    >
      <Icon type='github'/>
    </a>
  </span>;

SourceLink.displayName = 'partial/SourceLink';

export default SourceLink;
