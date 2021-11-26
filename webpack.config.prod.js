const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
  entry: ['./index.jsx'],

  output: {
    path: resolve(__dirname, 'dist'),
  },

  context: resolve(__dirname, 'src'),

  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: ['babel-loader'],
        include: /src/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10000,
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10000,
          },
        },
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
    new CopyWebpackPlugin({
      patterns: [{ from: 'index.html' }],
    }),

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
