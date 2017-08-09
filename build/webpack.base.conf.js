/**
 * Created by kid on 2016/12/23.
 */
const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: ['babel-polyfill', path.resolve(__dirname, '../src/app.js')]
	},
	output: {
		path: path.resolve(__dirname, '../output'),
		publicPath: '/',
		filename: '[name].[hash].js'
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {'vue': 'vue/dist/vue.js'} // 设置别名vue1不需要设置，vue2必须设置 否则会报错
	},
	module: {
		// 使用vue-loader 加载 .vue 结尾的文件
		loaders: [{
			test: /\.vue$/,
			loader: 'vue'
		}, {
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		}]
	},
	vue: {
		loaders: {
			js: 'babel'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, '../index.html'),
			inject: true
		})
	]
};