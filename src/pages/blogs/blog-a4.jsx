import React from 'react';
import { Link } from 'react-router-dom';
import BlogParagraph from '../../components/BlogParagraph';

export default () => (
	<div>
		<BlogParagraph>
			Jumping head first into
			<a className="link" href="https://facebook.github.io/react/">
				React
			</a>
			is more than I ever realized. It's just a JavaScript (
			<abbr title="JavaScript">JS</abbr>) library. A small one at that,
			especially compared to it's competitor,
			<a className="link" href="https://angularjs.org">
				Angular
			</a>
			.
			<a className="link" href="https://facebook.github.io/react/">
				React
			</a>
			is less than 200k,
			<a className="link" href="https://angularjs.org">
				Angular
			</a>
			{` over 500k, both minified sizes. Therefore it must be simple…not
			exactly…Point being there is far more to learn than a small library even if you are an expert JavaScripter. If you've
			never worked with "building" a single page application then you have a lot to learn. For starters, there's the library/framework
			to learn. Granted the authors of these have starter kits that make getting started very simple. However, if you
			are like me and crave the need to know "How Things Work" you soon find there is A Lot that makes a good single page
			application get built and work well.`}
			{/* Here are a few logos of just some of the choices
			you have when learning "How Things Work". */}
		</BlogParagraph>
		{/* <figure>
			<figcaption>[IMAGE-of slide of logos]</figcaption>
			</figure> */}
		<BlogParagraph>
			{`What I'd like to do with this series is take you on a little journey.
			 I'd like to give you an idea of what I've gone through to learn `}
			<a className="link" href="https://facebook.github.io/react/">
				React
			</a>
			and what has ultimately become learning "All Things Front-End". Well it
			wont be quite All the things, there are just too many… but I will cover
			the pieces required to ensure you will have a sound and solid single page
			application built with
			<a className="link" href="https://facebook.github.io/react/">
				React
			</a>
			and what I used for all the pieces.
		</BlogParagraph>
		<BlogParagraph>
			{`My previous posts go into some rough detail about creating a website with 4 pages ( home, front-end development, blog, and
			about). This was done with only the classic Front-end techs, `}
			<abbr title="Hyper Text Markup Language">HTML</abbr>
			and
			<abbr title="Cascading Style Sheet">CSS</abbr>. That's right no
			<abbr title="JavaScript">JS</abbr>
			{`
			. So, if you even have a little `}
			<abbr title="JavaScript">JS</abbr>
			{`
			experience then you'll be ahead, but not much. If you've never used `}
			<abbr title="JavaScript">JS</abbr>
			{` then you have even more to learn. But don’t get discouraged, like
			I said even the seasoned JavaScripter will have a lot to learn if they've never worked on a new single page app tech
			stack. And let's be real, if you do anything Front-End you are having to constantly learn and learn some more.`}
		</BlogParagraph>
		<BlogParagraph>
			{`So, going from only needing to know 2 technologies to create a 4 page website we are about to move on to learning [number
			of logos from slides], and there are so many more you could choose from and learn. Has my point been driven home
			yet? The Front-End is far more complex than it has ever been. There is a greater need for highly skilled developers
			to build these single page applications. No longer can we depend on our back-end developers to slap a little `}
			<abbr title="JavaScript">JS</abbr>
			in their
			<abbr title="Java Server Pages">JSP</abbr>s to make the Front-end do what
			they want. Keep in mind though, if you are building websites for clients
			depending on their needs you very well could get away with just
			<abbr title="Hyper Text Markup Language">HTML</abbr>
			and
			<abbr title="Cascading Style Sheet">CSS</abbr>
			{`.
			However, if your client has other needs then the benefits of a single page application could set them up for success,
			and you. Start simple then add the complexity if and when it is required. Don’t start with over engineering a site,
			that will be more difficult to maintain.`}
		</BlogParagraph>
		<BlogParagraph>
			Now that I've completed my tangent regarding the complexities our new
			Front-End single page apps require let's get started!
		</BlogParagraph>
		<BlogParagraph>
			First and foremost you need
			<a className="link" href="https://nodejs.org/en/">
				Node.js
			</a>
			{`. You can download this for free, and by the way, everything required to 
			build a single page application is completely free. What is `}
			<a className="link" href="https://nodejs.org/en/">
				Node.js
			</a>
			? I'm glad you asked.
		</BlogParagraph>
		<blockquote className="article__blockquote" cite="https://nodejs.org/en/">
			{`Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model
			that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source
			libraries in the world.`}
		</blockquote>
		<BlogParagraph>
			{`So, what in the world does that mean…basically it's what makes the <abbr title="JavaScript">JS</abbr> world go round.
			Without it things would not be nearly as easy. Packaged within `}
			<a className="link" href="https://nodejs.org/en/">
				Node.js
			</a>
			is
			<a className="link" href="https://www.npmjs.com/is">
				<abbr title="Node Package Manager">NPM</abbr>
			</a>
			which is Node Package Manager, you will become very familiar with this.
			<a className="link" href="https://www.npmjs.com/is">
				<abbr title="Node Package Manager">NPM</abbr>
			</a>
			is used to retrieve the hundreds of
			<abbr title="JavaScript">JS</abbr>
			packages that others have created and kindly shared with the world.
		</BlogParagraph>
		<blockquote className="article__blockquote" cite="https://www.npmjs.com/is">
			{`npm is the package manager for JavaScript and the world’s largest software registry. 
			Discover packages of reusable code — and assemble them in powerful new ways.`}
		</blockquote>
		<BlogParagraph>
			{`Why solve problems that others have solved, use and learn from others. 
			Don’t forget to give back when you can too. It's what makes the `}
			<a className="link" href="https://www.npmjs.com/is">
				<abbr title="Node Package Manager">NPM</abbr>
			</a>
			ecosystem so amazing. Now that we have
			<a className="link" href="https://nodejs.org/en/">
				Node.js
			</a>
			and
			<a className="link" href="https://www.npmjs.com/is">
				<abbr title="Node Package Manager">NPM</abbr>
			</a>
			{` we can really get started. Oh, one other thing required is something to edit files in. 
			You probably already have one, even if it's just notepad, that works. 
			However, a few that are tailored for front-end development are `}
			<a className="link" href="https://code.visualstudio.com">
				<abbr title="Visual Studio Code">VSCode</abbr>
			</a>
			,
			<a className="link" href="https://atom.io">
				Atom
			</a>
			,
			<a className="link" href="http://brackets.io">
				Brackets
			</a>
			,
			<a className="link" href="https://www.sublimetext.com">
				Sublime
			</a>
			and many others. Personally I like
			<a className="link" href="https://code.visualstudio.com">
				<abbr title="Visual Studio Code">VSCode</abbr>
			</a>
			{`. There is a very active development team maintaining it and 
			making improvements all the time. It's easy to add extensions
			and there are a lot already built. Like I said everything you 
			need is free and there is no exception here. Now that we have a code editor and `}
			<a className="link" href="https://nodejs.org/en/">
				Node.js
			</a>
			we can begin! Join me again soon for next steps, getting started with
			<a className="link" href="https://reactjs.org">
				React
			</a>
			-
			<Link className="link" to="/blog/a5">
				Setting Up Our Development Environment.
			</Link>
		</BlogParagraph>
	</div>
);
