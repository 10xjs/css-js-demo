import find from 'lodash/fp/find';
import forEach from 'lodash/fp/forEach';
import isMatch from 'lodash/fp/isMatch';

/* eslint-disable no-console */
import {join, relative} from 'path';
import webpack from 'webpack';
import compose from 'lodash/fp/flowRight';
import chalk from 'chalk';
import instrumentContextModule from 'instrument-context-module';
import escapeRegExp from 'escape-string-regexp';

import {loader, plugin} from 'webpack-partial';

// SVG Elements with a default black fill.
const IS_FILLABLE = new RegExp(`^${[
  'path',
  'rect',
  'circle',
  'ellipse',
  'line',
  'polyline',
  'polygon',
  'altGlyph',
  'textPath',
  'text',
  'tref',
  'tspan',
].join('|')}$`);

const replaceColorPlugin = (replace) => ({
  type: 'full',
  fn(data) {
    const handler = (context = {}) => (item) => {
      if (item.elem) {
        const fill = find(isMatch({name: 'fill'}), item.attrs);
        const stroke = find(isMatch({name: 'stroke'}), item.attrs);

        const defaultFill = !context.fill && !fill &&
          IS_FILLABLE.test(item.elem) &&
          '#000000'.match(replace);

        if ((fill && fill.value.match(replace)) || defaultFill) {
          item.attrs.fill = {
            name: 'fill',
            local: 'fill',
            value: 'currentColor',
            prefix: '',
          };
        }

        if (stroke && stroke.value.match(replace)) {
          item.attrs.stroke = {
            name: 'stroke',
            local: 'stroke',
            value: 'currentColor',
            prefix: '',
          };
        }

        if (item.content) {
          forEach(handler({fill: fill || defaultFill}), item.content);
        }
      }
    };

    handler()(data);

    return data;
  },
});

export default ({
  iconPath = 'asset/icon',
  test = /\.icon\.svg$/,
  replaceColor,
  svgo = {
    plugins: [
      {removeDimensions: true},
      {removeStyleElement: true},
      {removeTitle: true},
    ],
  },
} = {}) => (config) => {
  const iconFullPath = join(config.context, 'src', iconPath);

  const logInclude = instrumentContextModule(
    (context, contextRegex, moduleRegex) => console.log(
      `🗃  ${chalk.bold('Context')} ${
        chalk.yellow(moduleRegex)
      } in ${
        chalk.bold(relative(config.context, context))
      }`
    ),
    (module) => console.log(`   ${module.replace(/^\.\//, '')}`),
  );

  const plugins = [...svgo.plugins];

  if (replaceColor) {
    plugins.push({__replaceColor: replaceColorPlugin(replaceColor)});
  }

  return compose(
    plugin(new webpack.DefinePlugin({
      'process.env.ICON_PATH': JSON.stringify(iconFullPath),
    })),
    loader({
      test,
      loaders: [{
        loader: require.resolve('babel-loader'),
        query: {plugins: [require.resolve('babel-plugin-transform-react-jsx')]},
      }, {
        loader: require.resolve('react-svg-loader'),
        query: {
          jsx: true,
          svgo: {...svgo, plugins},
        },
      }],
    }),
    plugin(new webpack.ContextReplacementPlugin(
      logInclude.context(new RegExp(`^${escapeRegExp(iconFullPath)}$`, 'i')),
      logInclude.module(test),
    )),
  )(config);
};
