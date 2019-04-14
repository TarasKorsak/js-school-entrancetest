const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const 

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: PATHS.source + '/index.js',
    output: {
        path: PATHS.build,
        filename: '[name].js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				}
			]
		},
		devServer: {
			stats: 'errors-only',
			port: 9000,
			hot: true,
			open: true
		},
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack app'
				}),
        new webpack.optimize.UglifyJsPlugin({
						sourceMap: true,
						compress: {
							warnings: false
						}
				})
				
    ]
};
