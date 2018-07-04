import React from 'react';
import BlogParagraph from '../../components/BlogParagraph';

export default () => (
	<div>
		<BlogParagraph>
			{`The Facebook team has made many improvements to getting up and running quickly with React using `}
			<a className="link" href="https://reactjs.org/docs/installation.html#creating-a-new-application">create-react-app</a>
			{`. There
			is also a lot going on under the hood of the app that gets created using `}
			<a className="link" href="https://reactjs.org/docs/installation.html#creating-a-new-application">create-react-app</a>
			{`. So, even though that
			is the quickest and simplest way to get started I feel it is more difficult in the long run when you want to start
			customizing the development process and the build process. So, instead of going through `}
			<a className="link" href="https://reactjs.org/docs/installation.html#creating-a-new-application">create-react-app</a>
			{` I'll first go over a simple basic react setup with webpack and babel and explain why you would also need
			these tools (the "create-react-app" also uses these under the hood).`}
		</BlogParagraph>
		<BlogParagraph>
			<span className="font_weight_bold">Let's dive right in from scratch</span>
		</BlogParagraph>
		<BlogParagraph>
			{`First, create a directory and initialize it with yarn or npm.
			Throughout this blog you will see both yarn and npm commands,
			don’t run both, simple chose which you like and use one or the other.`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">
				{`
    $ mkdir react-starter
    $ cd react-starter
    $ yarn init

    $ npm init

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Accept the defaults from the init command or enter what you'd like.`}
		</BlogParagraph>
		<BlogParagraph>
			<span className="font_weight_bold">Webpack - install and configure</span>
		</BlogParagraph>
		<BlogParagraph>
			{`Webpack basically takes your js files and any other dependencies and bundles them into one static js file. Bundle.js is
			the defacto standard name of this "deployable artifact". It can also generate other static assets as well. It also
			supports "loaders" and is extremely configurable.`}
		</BlogParagraph>
		<BlogParagraph>
			{`Again using yarn let's add webpack`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">
				{`
  $ yarn add --dev webpack

  $ npm install --dev-save webpack

`}
			</code>
		</pre>
		<BlogParagraph>
			{`This will add webpack to your package.json file in the dependency 
			pre and update your yarn.lock file. Once this completes
			we can create the webpack configuration file:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">
				{`
  $ touch webpack.config.js

`}
			</code>
		</pre>
		<BlogParagraph>
			Update the config file with the following:
		</BlogParagraph>
		<pre className="pre">
			<code className="code">
				{`
  const path = require('path');

  const config = {
    entry: '\${path.resolve(__dirname, 'src')}/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
  };

  module.exports = config;

`}
			</code>
		</pre>
		<BlogParagraph>{`This is the least required in the config file, 
			it simple needs an entry point and on output location. The entry holds 
			the React application code base and the output is the directory where 
			the built bundle.js file will be placed.`}
		</BlogParagraph>
		<BlogParagraph>
			{`Lastly we need to tell webpack to copy our index.html file over to the dist directory. 
			First is to install a webpack plugin:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">
				{`
  $ yarn add --dev copy-webpack-plugin

  $ npm install --dev-save copy-webpack-plugin

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Then we need to import that in, at the top of your webpack.config.js file add this:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">
				{`
  const CopyWebpackPlugin = require('copy-webpack-plugin');

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Then in the config object add the following after the output property:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">
				{`
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/index.html' }
    ]),
  ],

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Now that webpack is all set we need that index.jsx file we are 
			referring to in the config file. Let's create that:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">
				{`
  $ mkdir src
  $ touch ./src/index.jsx

`}
			</code>
		</pre>
		<BlogParagraph>
			{`And add the following:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  console.log('I just created an App with Webpack!');

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Let's add it to an html file so we can run it in the browser. 
			Create an index.html file in the src directory and add the 
			following:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">
				{`
  <!DOCTYPE html>;
  <html lang="en-us">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>React.js using Yarn, Babel6 and Webpack</title>
    </head>
    <body>
      <div id="app" />
      <script src="./bundle.js" type="text/javascript"></script>
    </body>
  </html>

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Now type this command in the terminal:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  $ ./node_modules/.bin/webpack -d

`}
			</code>
		</pre>
		<BlogParagraph>
			{`That runs webpack in development mode ( -d ) and generates the 
			bundle.js file in the output directory "dist" and copies our index.html file.`}
		</BlogParagraph>
		<BlogParagraph>
			{`Now open the index.html file in the browser and look at the console. 
			You will see what we logged out:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  I just created an App with Webpack!

`}
			</code>
		</pre>
		<BlogParagraph>
			<span className="font_weight_bold">Babel - install and configure</span>
		</BlogParagraph>
		<BlogParagraph>
			{`React with JSX and ES2015 make life much easier. Sure you can write React code without JSX and ES2015 but let's be real…why
			would you ever want to do that? So, why babel you ask, ES2015 is still not fully supported in all browsers. Also,
			with babel you can use the latest ES features from 2015 and beyond, not just ES2015. Babel can be used alone without
			webpack however, to keep the build process simple we can use a babel loader for webpack. Babel is used to transpile
			the ES20XX code to what browsers support. Let's add the babel packages that are required to make this happen:`}
		</BlogParagraph>
		<code className="code">
			<pre className="pre">{`
  $ yarn add --dev babel-core
  $ yarn add --dev babel-loader
  $ yarn add --dev babel-preset-env
  $ yarn add --dev babel-preset-react

  $ npm install --dev-save babel-core
  $ npm install --dev-save babel-loader
  $ npm install --dev-save babel-preset-env
  $ npm install --dev-save babel-preset-react

`}
			</pre>
		</code>
		<BlogParagraph>
			{`Babel-loader is used by webpack and babel-loader uses babel-preset-env and babel-preset-react 
			to transpile our JSX and ES2015 
			code. We need a little configuration for babel as well:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  $ touch .babelrc

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Then add this to the file:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  {
    "presets": [
    "env",
    "react"
    ]
  }

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Now we need to tell webpack to use the babel-loader library. 
			Open webpack.config.js and add the follow to the bottom of
			the config object:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  module: {
    loaders: [
      {
        test: /\\.jsx?/,
        include: '\${path.resolve(__dirname, 'src')}',
        loader: 'babel-loader'
      }
    ]
  }

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Here webpack is using the babel loader, and looking in the src directory for files with an extension .jsx.
			These are the files babel will transpile.`}
		</BlogParagraph>
		<BlogParagraph>
			{`Phew! All set with webpack and babel, now for the good stuff, React! 
			Use yarn to add react and react-dom`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">
  $ yarn add react react-dom

  $ npm install --save react react-dom

			</code>
		</pre>
		<BlogParagraph>
			{`Now replace the existing console.log statement in index.jsx with the following:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  import React from 'react';
  import ReactDOM from 'react-dom';

  class App extends React.Component {
    render() {
      return(
        <p>Hello React!</p>
      );
    }
  }

  ReactDOM.render(
    <App />, 
    document.getElementById('app')
  );

`}
			</code>
		</pre>
		<BlogParagraph>
			{`Then save and run the webpack command again:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">
  $ ./node_modules/.bin/webpack -d

			</code>
		</pre>
		<BlogParagraph>
			{`Now reload the index.html file and you should see the 
			following in the browser:`}
			`
		</BlogParagraph>
		<pre className="pre pre--white">
			<code className="code">
  Hello React!

			</code>
		</pre>
		<BlogParagraph>
			{`You can also split out the App class code to a separate file App.jsx like
			this(which you'll want for when we add a Jest test:`}
		</BlogParagraph>
		<code className="code">
			<pre className="pre">{`
  import React from 'react';

  export default class App extends React.Component {
    render() {
      return (
        <p>Hello React!</p>;
      );
    }
  }

`}
			</pre>
		</code>
		<BlogParagraph>
			{`Which then leaves only this in index.jsx`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  import React from 'react';/n
  import ReactDOM from 'react-dom';/n
  import App from './App';/n

  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );

`}
			</code>
		</pre>
		<BlogParagraph>
			{`You also need to add this to your webpack file so it knows to look for imports that 
			are .jsx files along with others in the
			future, add it to the top right above output:`}
		</BlogParagraph>
		<pre className="pre">
			<code className="code">{`
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },

`}
			</code>
		</pre>
		<BlogParagraph>
			{`And that's it! You now have React setup with babel and webpack. Next up we'll look into adding hot reloading and setup
			some scripts in our package.json file. Adding these will enhance the development environment. Also, if you havent
			already I highly recommend using Chrome and getting the React Dev tools for chrome. This will allow you to see the
			details regarding your react components in Chrome.`}
		</BlogParagraph>
	</div>
);
