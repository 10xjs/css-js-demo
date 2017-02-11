import {join} from 'path';
import {output} from 'webpack-partial';

export default ({publicPath, path}) => (config) => output({
  publicPath,
  path: join(config.context, path),
  ...process.env.NODE_ENV === 'production' && config.target === 'web' ? {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[name].[chunkhash].js',
  } : {
    filename: '[name].js',
    chunkFilename: '[id].[name].js',
  },
})(config);
