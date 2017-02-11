// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';
import {Router, Route} from 'react-router-dom';

// =============================================================================
// Import partial components.
// =============================================================================
import Footer from '/component/partial/footer';
import Header from '/component/partial/header';

// =============================================================================
// Import view components.
// =============================================================================
import Landing from '/component/view/landing';
import Config from '/component/view/config';
import Components from '/component/view/components';

const Root = ({history}) =>
  <Router history={history}>
    <div>
      <Header/>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/components' component={Components}/>
      <Route exact path='/config' component={Config}/>
      <Footer/>
    </div>
  </Router>;

Root.displayName = 'Root';

export default Root;
