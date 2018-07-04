import React from 'react';
import { Link } from 'react-router-dom';
import BlogParagraph from '../../components/BlogParagraph';

export default () => (
	<div>
		<BlogParagraph>
			{`The previous `}<Link className="link" to="/blog/a1">Creating This Website</Link> {`article was my first blog and I feel it went pretty
			well. I think the primary take away is that a blog is really just writing an article/journal entry. Neither of which
			I have any formal training or education in. Other than a writing 101 course in college 15 years ago. I didn't exactly
			follow the rough outline that I laid out in that article. Primarily I left out most of the technical details. So,
			in this article I'll attempt to do just that.`}
		</BlogParagraph>
		<BlogParagraph>
			{`First off, what is front-end development? Here is the definition from `}
			<a className="link" href="https://en.wikipedia.org/wiki/Front-end_web_development">wikipedia.org</a>
			{` that sums it up well:`}
		</BlogParagraph>
		<blockquote className="article__blockquote" cite="https://en.wikipedia.org/wiki/Front-end_web_development">
			{`Front-end web development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that
			a user can see and interact with them directly.`}
		</blockquote>
		<BlogParagraph>
			{`Another great quote from `}
			<a className="link" href="https://en.wikipedia.org/wiki/Front-end_web_development">wikipedia.org</a>
			{` which is so true:`}
		</BlogParagraph>
		<blockquote className="article__blockquote" cite="https://en.wikipedia.org/wiki/Front-end_web_development">
			{`The challenge associated with front-end development is that the tools and techniques used to create the front end of a website
			change constantly and so the developer needs to constantly be aware of how the field is developing.`}
		</blockquote>
		<BlogParagraph>
			{`You quickly realize this is so very true as soon as you begin your adventure into front-end development. A key lesson to
			learn very early is to `}<em className="emphasis">never</em>{` stop learning. Here are the sights I have used to learn:`}
		</BlogParagraph>
		<ul className="list list-style-square">
			<li>
				<a className="link" href="https://developer.mozilla.org/en-US/">developer.mozilla.org</a>
			</li>
			<li>
				<a className="link" href="https://www.pluralsight.com/">pluralsight.com</a>
			</li>
			<li>
				<a className="link" href="https://www.codeschool.com/">codeschool.com</a>
			</li>
			<li>
				<a className="link" href="https://egghead.io/">egghead.io</a>
			</li>
		</ul>
		<BlogParagraph>
			{`For this particular site I started with the basic building blocks of a webpage, html and css. No JavaScript has been written
			for this site as of today. Actually, this is my third personal site that I've created. My first is no longer around.
			I wrote back in the early 2000's, although I probably could find the code. My `}<a className="link" href="../about/index1.html">second site</a>
			{` is still around and this one I also built with only html and css. I was going to add some JavaScript but never did.`}
		</BlogParagraph>
		<BlogParagraph>
			{`Of the three foundational components of a website html is the first component and truly the only required piece. You could
			get away without using any css and quite easily get away without JavaScript. HTML5 introduced more elements that
			help make it easier to focus on meaningful html, that is no presentational aspects in the html only structure, semantic
			html. Presentation is the job of css.`}
		</BlogParagraph>
		<BlogParagraph>
			{`I focused on html and worked on structuring a well formed documents with semantic. Learning about document flow and how elements
			relate to one another is very helpful once you start using css to move things around.`}
		</BlogParagraph>
		<BlogParagraph>
			{`Then came the css to present the document in a visually appealing way. These pages use the new flex box, well probably not
			so new any longer. I find flex box quite nice for responsive design. Much easier than floating everything with auto
			margins and fixed page widths. Flex box is used to position elements in order to affect document flow and layout.
			The second main purpose beside layout that css is used for is design or presentation or what I like to call it is,
			"make it pretty". So, things like font size, type, color. Images, borders, anything really visual.`}
		</BlogParagraph>
		<BlogParagraph>
			{`During this process of using only html and css I've learn a lot. Just html and css and <em>really</em> knowing them
			is a lot. I find myself thinking, "wow it would be so nice to be using JavaScript and a library like React.js." I
			say this because for my job I've been writing a lot of React code and find component based pages much nicer for reusability.
			I find myself duplicating a lot of html that could be written as one component that gets used on many pages.`}
		</BlogParagraph>
		<BlogParagraph>
			{`I'm at the point where I am happy with the html and css and where this site is with only those two technologies. So, next
			up I plan to re-write this site with React.js. I will keep this one as is html and css only so I can have a side
			by side comparison both of code and performance. I know already using React will improve page to page navigation
			since it will be a Single Page App.`}
		</BlogParagraph>
		<BlogParagraph>
			{`More to come on React and the consequences of choosing a library like React as opposed to sticking with vanilla JavaScript,
			html and css...`}
		</BlogParagraph>
	</div>
);
