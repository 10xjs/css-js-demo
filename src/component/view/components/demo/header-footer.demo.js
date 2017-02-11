import Flex from '/component/base/flex';
import Footer from '/component/base/footer';
import Header, {Title} from '/component/base/header';
import Nav, {Item} from '/component/base/nav';
/* demo-hide-start */
import {createElement} from 'react';

export const section = 'Header and Footer';

export const sources = [
  'header/header.js',
  'header/header.css.js',
  'header/title/title.js',
  'header/title/title.css.js',
  'footer/footer.js',
  'footer/footer.css.js',
  'nav/nav.js',
  'nav/item/item.js',
  'nav/item/item.css.js',
];

export const description = `
  <p>
    Create a full-width page header and footer.
  </p>
`;
/* demo-hide-end */

export const render = () =>
  <div>
    <Header>
      <Title to='#'>Title</Title>
      <Nav>
        <Item to='#'>Item</Item>
        <Item to='#'>Item</Item>
      </Nav>
    </Header>

    App content.

    <Footer>
      <Flex align='center'>
        Footer
      </Flex>
      <Nav>
        <Item to='#'>Item</Item>
        <Item to='#'>Item</Item>
      </Nav>
    </Footer>
  </div>;
