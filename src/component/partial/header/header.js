// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';

// =============================================================================
// Import config.
// =============================================================================
import {GITHUB_URL} from '/config/url.config';

// =============================================================================
// Import base components.
// =============================================================================
import BaseHeader, {Title} from '/component/base/header';
import Nav, {Item} from '/component/base/nav';
import Icon from '/component/base/icon';

const Header = () =>
  <BaseHeader>
    <Title to='/'>CSS JS Demo</Title>
    <Nav>
      <Item to='/'>Home</Item>
      <Item to='/components'>Components</Item>
      <Item to='/config'>Style Config</Item>
      <Item to={GITHUB_URL}><Icon type='github'/></Item>
    </Nav>
  </BaseHeader>;

Header.displayName = 'partial/Header';

export default Header;
