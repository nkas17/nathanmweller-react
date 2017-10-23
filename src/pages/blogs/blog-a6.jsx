import React from 'react';
import BlogParagraph from '../../components/BlogParagraph';

export default () => (
	<div>
		<BlogParagraph>
			{`Last time we got all setup with React, Babel and Webpack. Our environment was all set to start coding react components with
			JSX and ES2015+. However, we can automate a few things to help enhance our development experience.`}
		</BlogParagraph>
		<ul className="list list-style-square">
			<li>
				<a className="link" href="https://webpack.js.org/concepts/hot-module-replacement/">Hot Module Replacement</a>
				{` with webpack-dev-server`}
			</li>
			<li>
				Use
				<a className="link" href="https://yarnpkg.com/en/docs/package-json#toc-tasks">Yarn</a> scripts in our package.json file
			</li>
			<li>
				Static analysis with
				<a className="link" href="https://eslint.org/">ESLint</a>
			</li>
			<li>
				Automated testing with
				<a className="link" href="https://facebook.github.io/jest/">Jest</a>
			</li>
		</ul>
		<BlogParagraph>
			<span className="font_weight_bold">Hot Module Replacement with webpack-dev-server
			</span>
		</BlogParagraph>
		<BlogParagraph>
			{`Let's setup webpack-dev-server first. 
			First we need to add that package so like the others type this in the terminal:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  $ yarn add --dev webpack-dev-server

  $ npm install --dev-save webpack-dev-server

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Next we need to tell webpack dev server where to look for our content.  Add this to your webpack.config.json file between
			resolve section and output section:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  devServer: {
    contentBase: './dist',
    hot: true,
  },

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Next add this in the plugins section after the CopyWebpackPlugin:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  new webpack.HotModuleReplacementPlugin(),

`}
			</code>
		</pre>
		<BlogParagraph>
			{`And there you have it. That's it to getting hot loading setup with webpack-dev-server.   Your webpack.config.js should look
			like the following:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  const webpack = require('webpack');
  const path = require('path');
  const CopyWebpackPlugin = require('copy-webpack-plugin');

  const config = {
    entry: "\${path.resolve(__dirname, 'src')}/index.jsx",
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
    },
    devServer: {
      contentBase: './dist',
      hot: true,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: './src/index.html' }
      ]),
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      loaders: [
        {
          test: /\\.jsx?/,
          include: "\${path.resolve(__dirname, 'src')}",
          loader: 'babel-loader'
        }
      ]
    }
  };

  module.exports = config;

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Test that hot-reloading works by starting your dev-server like so:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  $ ./node_modules/.bin/webpack-dev-server

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Then open your browser and navigate to `}
			<a className="link" href="http://localhost:8080">http://localhost:8080</a>
			{` then modify your App.jsx and you will see the update without refreshing the browser.`}
		</BlogParagraph>
		<BlogParagraph>
			<span className="font_weight_bold">Adding ESLint</span>
		</BlogParagraph>
		<BlogParagraph>
			{`ESLint is used to analyze our code to check for anything from code style consistency to finding common coding bugs.`}
		</BlogParagraph>
		<blockquote className="article__blockquote">
			{`"ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs."`}
		</blockquote>
		<BlogParagraph>
			{`ESLint can also be configured with custom rules.  There are a couple eslint extensions that others have built that I also highly recommend:`}
		</BlogParagraph>
		<BlogParagraph>
			{`...more coming soon`}
		</BlogParagraph>
	</div>
);
