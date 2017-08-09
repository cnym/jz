/**
 * Created by kid on 2016/12/23.
 */
const path = require('path');
const webpack = require('webpack');
const webpackBaseConf = require('./webpack.base.conf');
const merge = require('webpack-merge');

module.exports =  merge(webpackBaseConf, {
	entry: {
		index: [
			'webpack-hot-middleware/client?reload=1',
			path.resolve(__dirname, '../src/app.js')
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
});