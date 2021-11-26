const webpack = require('webpack');
const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
  entry: ['./index.jsx'],
  output: {},
  context: resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: {
      rewrites: [{ to: '/index.html' }],
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: ['babel-loader'],
        include: /src/,
      },
      {
        test: /\.jsx?$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack'],
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
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // // Moves the index.html file over and asset folder to the dist folder
    new CopyWebpackPlugin({
      patterns: [{ from: 'index.html' }],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
