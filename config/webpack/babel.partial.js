import {loader} from 'webpack-partial';

export default () => loader({
  test: /\.js$/,
  exclude: /node_modules/,
  loader: require.resolve('babel-loader'),
});
