import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import {plugin} from 'webpack-partial';

export default plugin(new UglifyJSPlugin());

