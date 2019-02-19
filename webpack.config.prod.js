const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	resolve: {
		modules: [
			'node_modules',
		],
		extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
	},

	entry: [
		'./index.jsx',
	],

	output: {
		path: resolve(__dirname, 'dist'),
	},

	context: resolve(__dirname, 'src'),

	module: {
		rules: [
			{
				test: /\.jsx?/,
				use: [
					'babel-loader',
				],
				include: /src/,
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						// options: {
						//   // you can specify a publicPath here
						//   // by default it use publicPath in webpackOptions.output
						//   publicPath: '../'
						// }
					},
					'css-loader',
				],
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
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),

		// // Moves the index.html file over and asset folder to the dist folder
		new CopyWebpackPlugin([
			// {output}/dist/file.txt
			{ from: 'index.html' },

		// 	// Copy directory contents to {output}/to/directory/
		// 	{ from: 'assets', to: 'assets' },
		]),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false,
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
	],
};
