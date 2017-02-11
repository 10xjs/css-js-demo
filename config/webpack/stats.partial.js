import StatsPlugin from 'stats-webpack-plugin';
import {plugin} from 'webpack-partial';

export default plugin(new StatsPlugin('stats.json'));
