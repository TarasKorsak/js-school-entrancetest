const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purgecss-webpack-plugin');
const postcss = require('postcss');
const devServer = require('webpack-dev-server');

const PATHS = {
    source: path.join(__dirname, 'src'),
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
				},
				{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							'css-loader',
							{
								loader: 'postcss-loader',
								options: { sourceMap: true, config: { path: 'postcss.config.js' } }
							},
							'sass-loader'
						]
					})
				}
			]
		},
		devServer: {
			stats: 'errors-only',
			port: 9000
		},
    plugins: [
			new HtmlWebpackPlugin({
					title: 'JS-school-entrancetask'
			}),
			new webpack.optimize.UglifyJsPlugin({
					sourceMap: true,
					compress: {
						warnings: false
					},
			}),
			new ExtractTextPlugin('./index.css')
			
    ]
};
