/**
 * Created by kid on 2016/12/26.
 */
const webpack = require('webpack');
const webpackBaseConf = require('./webpack.base.conf');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(webpackBaseConf, {
	entry: {
		vendor: ['vue', 'vuex', 'vue-router', 'babel-polyfill']
	},
	output: {
		publicPath: '/',
		filename: 'static/js/[name].[hash].js',
		chunkFilename: 'static/js/[name].[chunkhash].js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new ExtractTextPlugin('static/css/[name].[chunkhash:7].css', {
			allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			chunks: ['index', 'stopwatch', '404']
		})
	],
	vue: {
		loaders: {
			css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader', 'css')
		}
	}
});