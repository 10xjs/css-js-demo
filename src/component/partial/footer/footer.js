// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';

// =============================================================================
// Import config.
// =============================================================================
import {POST_URL, GITHUB_URL, AUTHOR_URL, METALAB_URL}
  from '/config/url.config';

// =============================================================================
// Import base components.
// =============================================================================
import Flex from '/component/base/flex';
import BaseFooter from '/component/base/footer';
import Icon from '/component/base/icon';
import Nav, {Item} from '/component/base/nav';

const Footer = () =>
  <BaseFooter>
    <Flex align='center'>
      <span>
        2017 <a target='_blank' href={AUTHOR_URL}>Neal Granger</a>{' '}
        @ <a target='_blank' href={METALAB_URL}>MetaLab</a>
      </span>
    </Flex>
    <Nav>
      <Item to={POST_URL}>
        CSS JS Blog Post
      </Item>
      <Item to={GITHUB_URL}>
        GitHub Source
        &nbsp;<Icon type='github'/>
      </Item>
    </Nav>
  </BaseFooter>;

Footer.displayName = 'partial/Footer';

export default Footer;
