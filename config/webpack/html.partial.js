import {join} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {plugin} from 'webpack-partial';

export default ({template, ...options}) => (config) =>
  plugin(new HtmlWebpackPlugin({
    template: join(config.context, 'src', template),
    filename: 'index.html',
    inject: 'body',
    ...options,
  }))(config);
