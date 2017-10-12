const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: {
		app: [
			'react-hot-loader/patch',
			`${path.resolve(__dirname, 'src')}/index.jsx`,
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		historyApiFallback: true,
		// respond to 404s with index.html
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: './src/index.html' },
		]),

		new ExtractTextPlugin('styles.css'),

		new webpack.HotModuleReplacementPlugin(),

		// prints more readable module names in the browser console on HMR updates
		new webpack.NamedModulesPlugin(),
	],
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: `${path.resolve(__dirname, 'src')}`,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader'],
				}),
			},
			{
				test: /\.(jpe?g|png|gif|ico)$/i,
				loader: 'file-loader?name=[name].[ext]',
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff',
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
			},
			{
				test: /\.(eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
			},
		],
	},
};

module.exports = config;
