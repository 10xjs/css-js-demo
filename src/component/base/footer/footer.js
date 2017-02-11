// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';
import classNames from 'classnames';

// =============================================================================
// Import base components.
// =============================================================================
import Container from '/component/base/container';
import Flex from '/component/base/flex';
import Wrapper from '/component/base/wrapper';

// =============================================================================
// Import local styles.
// =============================================================================
import {BASE} from './footer.css';

const Footer = ({className, ...props}) =>
  <Wrapper className={classNames(className, BASE)}>
    <Container>
      <Flex wrap justify='between' basis='full'>
        {props.children}
      </Flex>
    </Container>
  </Wrapper>;

Footer.displayName = 'base/Footer';

export default Footer;
