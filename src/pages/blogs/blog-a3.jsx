import React from 'react';
import { Link } from 'react-router-dom';
import BlogParagraph from '../../components/BlogParagraph';

export default () => (
	<div>
		<BlogParagraph>
			There have been a few more things I have done to wrap up phase one. First,
			Validating my html.
			<a className="link" href="https://validator.w3.org/">
				W3C Markup Validation Service
			</a>
			{` is the best place to go. There are three ways
			to validate: by URI, file upload, or direct input (copy and paste). You can have it display your source to indicate
			exactly where you may have issues, you can also have it produce an image report and outline. This will assist you
			in following W3C's intended purpose for html and the standard for which they have laid forth. You may be asking why
			do this? `}
			<em className="emphasis">Semantic html</em>. Here are a couple quotes from
			<a
				className="link"
				href="http://vanseodesign.com/web-design/semantic-html/"
			>
				vanseodesign.com
			</a>
		</BlogParagraph>
		<blockquote
			className="article__blockquote"
			cite="http://vanseodesign.com/web-design/semantic-html/"
		>
			{`When people say they want to make something more semantic, 
			they simply want to make that thing more meaningful.`}
		</blockquote>
		<BlogParagraph>What does semantics mean anyway?</BlogParagraph>
		<blockquote className="article__blockquote">
			<dl className="definition-list">
				<dt>
					<dfn className="definition-list__term">semantics (adj.)</dfn>
				</dt>
				<dd className="definition-list__definition">
					of or relating to meaning, especially in language;
				</dd>
				<dd className="definition-list__definition">
					the meaning or relationship of meanings of a sign or set of signs
				</dd>
			</dl>
		</blockquote>
		<BlogParagraph>
			So, then the next logical question is, What is semantic html?
		</BlogParagraph>
		<blockquote
			className="article__blockquote"
			cite="http://vanseodesign.com/web-design/semantic-html/"
		>
			{`Semantic html is using html to reinforce structural meaning.
			It’s about using tags, className names, and ids that reinforce the
			meaning of the content within the tags.`}
			<br />
			<br /> Semantic html is also about using tags in the right way.
		</blockquote>
		<BlogParagraph>
			{`The article linked above goes into great detail into why semantic html
			is important, please have a read.`}
		</BlogParagraph>
		<BlogParagraph>
			Second, I did some
			<a
				className="link"
				href="https://app.pluralsight.com/library/courses/responsive-typography/table-of-contents"
			>
				Pluralsight
			</a>
			{` video watching regarding typography. I won't go into the details but choosing and sizing typography is quite important
			and has a lot of ramifications. I suggest checking out this video if you have Pluralsight access. After watching
			some of this I updated my fonts to use webfonts, and made sizing adjustments for mobile. One thing to note about
			webfonts, it helps guarantee your sight will have the same type face across devices and platforms. You should be
			careful though not to bog down your site with large font files.`}
		</BlogParagraph>
		<blockquote
			className="article__blockquote"
			cite="https://app.pluralsight.com/library/courses/responsive-typography/transcript"
			author="Jason Pamental"
		>
			{`Typography is Fred Astaire. Web typography is Ginger Rogers that has to do everything Fred does backwards and in heels. Web
			is different. It's harder. You have more things to think about and rather than just the aesthetics or the communication
			and trying to get somebody to do something, you have to deal with technically how do you make that happen across
			all these devices and access speeds and input technologies and the operating systems and browsers themselves.`}
		</blockquote>
		<BlogParagraph>
			Otherwise, just several other tweaks here and there to clean up the
			overall site.
		</BlogParagraph>
		<BlogParagraph>
			Next up is the
			<a className="link" href="https://facebook.github.io/react/">
				React
			</a>
			re-write.
			<Link className="link" to="/blog/a4">
				What Does It Mean To Choose React
			</Link>
		</BlogParagraph>
	</div>
);
