var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = require('./webpack.config');

// 启动了webpack-dev-server后，编译后的文件并没有输出到webpack.config.js中配置的output输出目标文件夹中，而是将实时编译后的文件保存在内存中
config.output.publicPath = '/';

config.plugins = [
	new HtmlWebpackPlugin({
		filename: 'app/index/index.html',
		template: path.resolve(__dirname, '../app/index/index.html'),
		inject: true,
		options: {
			Favlist: {
				loaders: {
					js: 'babel'
				}
			},
		}
	}),
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin()
];

config.devServer = {
	historyApiFallback: true,
	hot: true,
	inline: true,
	progress: true,
	port: 8080,
	host: 'localhost',
	proxy: {
		'/myLogin': {
			target: 'https://www.nwsuaforchestra.cn',
			changeOrigin: true,
			secure: false
		},
		'/getAllUsers': {
			target: 'https://www.nwsuaforchestra.cn',
			changeOrigin: true,
			secure: false
		}
	}
}

module.exports = config;