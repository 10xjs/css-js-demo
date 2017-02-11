import {join, dirname} from 'path';
import flow from 'lodash/fp/flow';
import identity from 'lodash/fp/identity';
import nearest from 'find-nearest-file';
import css from 'webpack-config-css';
import env from 'webpack-config-env';

import babel from './babel.partial';
import html from './html.partial';
import output from './output.partial';
import stats from './stats.partial';
import minify from './minify.partial';
import icon from './icon.partial';

const context = dirname(nearest('package.json'));

const production = process.env.NODE_ENV === 'production';

const config = flow(
  env({
    NODE_ENV: {},
    WEBPACK_PUBLIC_PATH: {},
    URL_BASE: {},
  }),
  output({publicPath: process.env.WEBPACK_PUBLIC_PATH || '/', path: 'build'}),
  stats(),
  html({template: 'index.html'}),
  html({template: '404.html', filename: '404.html', inject: false}),
  production ? minify() : identity,
  css(),
  babel(),
  icon({iconPath: '/asset/icon', replaceColor: /^#(000){1,2}$/}),
)({
  entry: join(context, 'src', 'index.js'),
  target: 'web',
  devtool: 'source-map',
  context,
});

export default config;
