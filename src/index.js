/* global window */
import {parse} from 'url';
import {createElement} from 'react';
import {render} from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import 'reset-css';
import './global.css';

import Root from '/component/root';

const history = createHistory({basename: process.env.URL_BASE});

const redirect = window.sessionStorage.redirect;
delete window.sessionStorage.redirect;

if (redirect && redirect !== window.location.href) {
  const {pathname} = parse(redirect);
  history.replace(pathname.slice((process.env.URL_BASE || '').length));
}

render(<Root history={history}/>, window.document.getElementById('app'));
