import React from 'react';
import BlogParagraph from '../../components/BlogParagraph';

export default () => (
	<div>
		<BlogParagraph>
			{`So, I've never written a blog post before. Not here not anywhere. I have a list of topics I should be writing about at work.
			 All front-end related. Other priorities get in the way...at least that's what I tell myself. I've never been a person
			 that journaled much or at all. I tried once as a kid. One summer we were planning a big vacation, I had just received
			 a really cool corduroy covered journal and I was determined as ever to journal my experiences that summer... I think
			 all I got in that thing was, "Today we are off, vacation has finally started". Yep that's about it.`}
		</BlogParagraph>
		<BlogParagraph>
			{`I love technology, maybe starting a Blog is the way to start putting thoughts and experiences down on "paper". Well, here's
			 to what may be the start of something great, or not.`}
		</BlogParagraph>
		<BlogParagraph>
			{`Enough gibberish, let's get started. I want to talk about this website in particular and how I got started. What I have used
			 to learn and what i have used to create this site. Also, where I'm headed and the journey that never ends in an ever
			 evolving Front-end Eco-system.`}
		</BlogParagraph>
		<BlogParagraph>
			{`I've always dabbled a bit here and there with FED (Front-End Development) since the late 90's and have been pretty good at
			 the basics. HTML, CSS, JavaScript, jQuery. Learned enough to get by for the job. I never really got too serious until
			 2012 when I took on a major project to convert 4 major applications that targeted one browser, IE, and make them
			 compatible with multiple browsers. Wow, was that a lot of work. Since then I have learned an enormous amount yet
			 still find there is so much more to learn. Once you learn something in FED some new thing comes out. I love it though,
			 keeps me on my toes and forces me to learn continuously.`}
		</BlogParagraph>
		<BlogParagraph>
			{`For this page specifically, I've gone into it as if I knew nothing. I've read numerous articles, blogs, watched several training
			 videos. Learned a great deal more and began this site with the bare bone basics, HTML and CSS. At this point all
			 I have is exactly that. Some of what I learned recently and applied here is some HTML5 and trying to keep with semantic
			 HTML and regarding the CSS I used Flex-box for a responsive site.`}
		</BlogParagraph>
		<BlogParagraph>
			{`I have 4 pages that i have been coding with a basic routing structure using a typical directory structure that each loads
			 an index.html. While developing locally I have been manually refreshing the index.html file and when navigating I
			 have been hitting the directory since my route is relative. Therefore I have to click on the index.html file to get
			 navigated there. This is quite annoying, so I will be adding http-server to serve my base directory. This will allow
			 me to get routed properly when using the navigation menu locally. Next step after that is possibly use some hot reloading
			 tool...not sure if that is necessary. I do plan to convert this site to React.js.`}
		</BlogParagraph>
	</div>
);
