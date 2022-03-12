import React from 'react';
import BlogParagraph from '../../components/BlogParagraph';

function A6() {
  return (
    <div>
      <BlogParagraph>
        {`Last time we got all setup with React, Babel and Webpack. Our environment was all set to start coding react components with
			JSX and ES2015+. However, we can automate a few things to help enhance our development experience.`}
      </BlogParagraph>
      <ul className="list list-style-square">
        <li>
          <a
            className="link"
            href="https://webpack.js.org/concepts/hot-module-replacement/"
          >
            Hot Module Replacement
          </a>
          with webpack-dev-server
        </li>
        <li>
          Use
          <a
            className="link"
            href="https://yarnpkg.com/en/docs/package-json#toc-tasks"
          >
            Yarn
          </a>{' '}
          scripts in our package.json file
        </li>
        <li>
          Static analysis with
          <a className="link" href="https://eslint.org/">
            ESLint
          </a>
        </li>
        <li>
          Automated testing with
          <a className="link" href="https://facebook.github.io/jest/">
            Jest
          </a>
        </li>
      </ul>
      <BlogParagraph>
        <span className="font_weight_bold">
          Hot Module Replacement with webpack-dev-server
        </span>
      </BlogParagraph>
      <BlogParagraph>
        {`Let's setup webpack-dev-server first. 
			First we need to add that package so like the others type this in the terminal:`}
      </BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  $ yarn add --dev webpack-dev-server

  $ npm install --dev-save webpack-dev-server

`}
        </code>
      </pre>
      <BlogParagraph>
        {`Next we need to tell webpack dev server where to look for our content. Add this to your webpack.config.json file between
			resolve section and output section:`}
      </BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  devServer: {
    contentBase: './dist',
    hot: true,
  },

`}
        </code>
      </pre>
      <BlogParagraph>
        Next add this in the plugins section after the CopyWebpackPlugin:
      </BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  new webpack.HotModuleReplacementPlugin(),

`}
        </code>
      </pre>
      <BlogParagraph>
        {`And there you have it. That's it to getting hot loading setup with webpack-dev-server. Your webpack.config.js should look
			like the following:`}
      </BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
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
        Test that hot-reloading works by starting your dev-server like so:
      </BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  $ ./node_modules/.bin/webpack-dev-server

`}
        </code>
      </pre>
      <BlogParagraph>
        Then open your browser and navigate to
        <a className="link" href="http://localhost:8080">
          http://localhost:8080
        </a>
        then modify your App.jsx and you will see the update without refreshing
        the browser.
      </BlogParagraph>
      <BlogParagraph>
        <span className="font_weight_bold">Adding ESLint</span>
      </BlogParagraph>
      <BlogParagraph>
        ESLint is used to analyze our code to check for anything from code style
        consistency to finding common coding bugs.
      </BlogParagraph>
      <blockquote className="article__blockquote">
        {`ESLint is a tool for identifying and reporting on patterns found in
      ECMAScript/JavaScript code, with the goal of making code more consistent
      and avoiding bugs.`}
      </blockquote>
      <BlogParagraph>
        ESLint can also be configured with custom rules. There are a couple
        eslint extensions that others have built that I also highly recommend:
      </BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  $ yarn add --dev eslint

  $ npm install --dev-save eslint

`}
        </code>
      </pre>
      <BlogParagraph>
        After adding to your project you should setup a config file:
      </BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  $ ./node_modules/.bin/eslint --init

`}
        </code>
      </pre>
      <BlogParagraph>
        {`You will be prompted with a few questions that will create your config file and
			install other extensions, here are my preferences:`}
      </BlogParagraph>
      <pre className="pre">
        <code className="code text_size_small">
          {`
  ? How would you like to configure ESLint? Use a popular style guide
  ? Which style guide do you want to follow? Airbnb
  ? Do you use React? Yes
  ? What format do you want your config file to be in? JavaScript

`}
        </code>
      </pre>
      <BlogParagraph>
        {`I like the JavaScript version of the config file so I can add comments,

			*Note* If you are using yarn you will need to run yarn install to fix
			the fact that npm messed up eslint and
			delete the package.json.lock file.  If you are using npm you can ignore this.

			Then you can run against your code like this:`}
      </BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  $ ./node_modules/.bin/eslint yourfile.js

`}
        </code>
      </pre>
      <BlogParagraph>Or against an entire directory</BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  $ ./node_modules/.bin/eslint ./src --ext jsx

`}
        </code>
      </pre>
      <BlogParagraph>
        {`--ext jsx tells eslint to also check files with the extension of jsx, the default is js
			After running eslint it will display a list of errors and warnings similar to this
			(assuming you have errors/warnings):`}
      </BlogParagraph>
      <pre className="pre">
        <code className="code text_size_small">
          {`
  /projects/react-starter/src/index.jsx
    3:17  error  Unexpected use of file extension "jsx" for "./App.jsx"  import/extensions
    6:1   error  Expected indentation of 2 spaces but found 1 tab        indent
    6:2   error  Unexpected tab character                                no-tabs
    6:2   error  Expected indentation of 2 space characters but found 0  react/jsx-indent
    7:1   error  Expected indentation of 2 spaces but found 1 tab        indent
    7:2   error  Unexpected tab character                                no-tabs
    7:2   error  'document' is not defined                               no-undef
    7:32  error  Missing trailing comma                                  comma-dangle

  ✖ 15 problems (15 errors, 0 warnings)
  7 errors, 0 warnings potentially fixable with the --fix option.

`}
        </code>
      </pre>
      <BlogParagraph>
        {`You'll see the file there errors are in and the line:column
			the error is on along with the reason and description of error.
			You can easily fix some by running again with the --fix option.
			If you want more detail on the error you can look the error up on the
			eslint website. They usually have good documentation on the error. If
			you chose to use Airbnb extension then you can also look up their style
			guide and they have good documentation on their site too. Since we will be
			adding jest we need to add one more item to the .eslintrc file so linting
			doesn’t flag errors in our test files.  Add the following to the top of the .eslintrc file:`}
      </BlogParagraph>

      <pre className="pre">
        <code className="code">
          {`
  {
    "env": {
      "browser": true,
      "commonjs": true,
      "node": true,
      "jest": true
    },
  }

`}
        </code>
      </pre>
      <BlogParagraph>
        {`These are for allowing these environment global variables.
			Otherwise ESLint will throw errors when it parses the global variables.
			For example, without browser the 'document'
			variable will throw a no-undef error. Without the jest env the "it"
			and "expect" variables will throw no-undef errors.
			And the node globals will also have the same issue without it.
			Commonjs adds some webpack globals.`}
      </BlogParagraph>
      <BlogParagraph>
        <span className="font_weight_bold">Jest</span>
      </BlogParagraph>
      <BlogParagraph>Jest is used to test our React components.</BlogParagraph>
      <blockquote className="article__blockquote">
        {`"Complete and easy to set-up JavaScript testing solution. Works out of the box for any React project.
	Fast interactive watch mode runs only test files related to changed files and is optimized to give signal quickly.
	Capture snapshots of React trees or other serializable values to simplify testing and to analyze how state changes over time"`}
      </blockquote>
      <BlogParagraph>
        {`Setting up jest and creating a unit test for React components is quite simple. 
			First like always we need to add jest and react-test-renderer to our project:`}
      </BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  $ yarn add --dev jest react-test-renderer

  $ npm install --dev-save jest react-test-renderer

`}
        </code>
      </pre>
      <BlogParagraph>
        {`Next we need to create either a test folder and you can either name you tests folder "__tests__" and jest will assume all files in these folders are test files to run or you can name the test files with .spec.js or .test.js extension.
			I prefer the .test.js extension. This always you the luxury and having a test file right with you react component file.  Makes it simple to see if you component has a test already or needs one.
			So with that let's create our first test.`}
      </BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  touch ./src/App.test.jsx

`}
        </code>
      </pre>
      <BlogParagraph>Then in this file add this code:</BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  import React from 'react';
  import renderer from 'react-test-renderer';
  import App from './App';

  it('renders correctly', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

`}
        </code>
      </pre>
      <BlogParagraph>Then you can run the test:</BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  ./node_modules/.bin/jest

`}
        </code>
      </pre>
      <BlogParagraph>You should receive the following output:</BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  $ jest
    PASS  src/App.test.js
     ✓ renders correctly (11ms)

     › 1 snapshot written.
    Snapshot Summary
     › 1 snapshot written in 1 test suite.

    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
    Snapshots:   1 added, 1 total
    Time:        1.491s
    Ran all test suites.
    Done in 2.38s.

`}
        </code>
      </pre>
      <BlogParagraph>
        {`A __snapshots__ folder was created and the snapshot file was placed in there. 
			These should be committed into source so the next time someone makes a change they can run jest against this snapshot and be able to compare the difference via jest.
			There is so much more you can do with jest and then even more you can do with jest and enzyme.
			Enzyme is a testing suite create by Airbnb that gives you the ability to interact and test these interactions with your components as if you are a user all without running your code in a browser.
			Very powerful way to automate tests.`}
      </BlogParagraph>
      <BlogParagraph>That&apos;s a basic intro to Jest!</BlogParagraph>
      <BlogParagraph>
        <span className="font_weight_bold">
          Scripts in our package.json file
        </span>
      </BlogParagraph>
      <BlogParagraph>
        {`
			Next let's setup some scripts to make starting our dev-server quicker and easier.
			Also we will add a couple scripts to build a test version and a production version.
			In the package.json file we need to add a script section:`}
      </BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  "scripts": {
    "start": "./node_modules/.bin/webpack-dev-server",
    "build": "webpack -p",
    "build:test": "webpack -d",
    "eslint": "./node_modules/.bin/eslint --ext .jsx --ext .js lib/",
    "test": "jest"
  },

`}
        </code>
      </pre>
      <BlogParagraph>
        What are these for:
        <br />
        • &quote;start&quote; - starting your dev server for testing locally
        <br />
        • &quote;build&quote; - output the artifacts required for a production
        release - minified code
        <br />
        • &quote;build:test&quote; - test version of the build is to test the
        build and even test your artifacts before generating the production
        artifacts.
        <br />
        Notice the output size of the bundle.js here is the production build:
      </BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  Hash: 0b9352b23aa00b3385ca
  Version: webpack 3.6.0
  Time: 1409ms
    Asset       Size  Chunks              Chunk Names
  bundle.js   117 kB       0  [emitted]  app
  index.html  303 bytes       [emitted]
         [5] ./src/index.jsx 470 bytes {0} [built]
        [17] ./src/App.jsx 2.21 kB {0} [built]
        + 16 hidden modules

`}
        </code>
      </pre>
      <BlogParagraph>And here is the output from the test build:</BlogParagraph>
      <pre className="pre">
        <code className="code">
          {`
  Hash: 57aaae147946165e8e77
  Version: webpack 3.6.0
  Time: 940ms
     Asset       Size  Chunks                   Chunk Names
   bundle.js    2.16 MB       0  [emitted]  [big]  app
  index.html  303 bytes          [emitted]
      [15] ./src/index.jsx 470 bytes {0} [built]
      [32] ./src/App.jsx 2.21 kB {0} [built]
    + 31 hidden modules

`}
        </code>
      </pre>
      <BlogParagraph>
        You can also chose to have a separate webpack.config.ts file for a
        production build to customize even more.
        <br />
        • &quote;eslint&quote; - analyze our code to check for anything from
        code style consistency to finding common coding bugs.
        <br />• &quote;jest&quote; - run our tests
      </BlogParagraph>
      <BlogParagraph>
        Add that&apso;s it! You made it - you can see the final source I have at{' '}
        <a className="link" href="https://github.com/nkas17/react-starter">
          https://github.com/nkas17/react-starter
        </a>
      </BlogParagraph>
    </div>
  );
}

export default A6;
