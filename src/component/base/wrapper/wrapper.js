// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';

// =============================================================================
// Import base components.
// =============================================================================
import Flex from '/component/base/flex';

const Wrapper = (props) =>
  <Flex wrap justify='start' align='stretch' {...props}/>;

Wrapper.displayName = 'base/Wrapper';

export default Wrapper;
