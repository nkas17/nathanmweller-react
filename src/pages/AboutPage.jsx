import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => [
	<Header key="about-1" />,
	<main className="main flex-wrapper" key="about-2">
		<div className="flex-item main__flex-item">
			<header className="main__header">
				<h2 className="header header_size_large">
					about<span className="dilbert">&nbsp;</span>
				</h2>
			</header>
			<article className="article flex-wrapper">
				<div className="flex-item article__content">
					<header className="main__header article__header">
						<h3 className="header header_size_medium">experience</h3>
					</header>
					<p className="article__paragraph">
						13+ years software development, 9+ years web development
					</p>
					<header className="main__header article__header">
						<h3 className="header header_size_medium">web development</h3>
					</header>
					<p className="article__paragraph">
						JavaScript, ES2015, Node.js, npm, React.js, Redux.js, Jest, Enzyme,
						Lodash, jQuery, Backbone.js, Underscore.js, HTML, CSS, Sass,
						Bootstrap, responsive design, Google Analytics, Git, PRPC
					</p>
					<header className="main__header article__header">
						<h3 className="header header_size_medium">education</h3>
					</header>
					<p className="article__paragraph">
						BS in Computer Science with honors from Michigan State University
					</p>
					<p className="article__paragraph">
						<a className="link" href="https://www.codeschool.com/users/2817163">
							Code School Badges
						</a>
					</p>
					<header className="main__header article__header">
						<h3 className="header header_size_medium">creations</h3>
					</header>
					<p className="article__paragraph">
						<a className="link" href="https://www.games.nathanmweller.com">
							games
						</a>
						, who doesn't love games
					</p>
					<p className="article__paragraph">
						<a className="link" href="https://www.recipes.nathanmweller.com">
							recipes
						</a>
					</p>
					<p className="article__paragraph">
						<a
							className="link"
							href="https://www.local-weather.nathanmweller.com"
						>
							local weather
						</a>
					</p>
					<p className="article__paragraph">
						<a
							className="link"
							href="https://www.random-quote.nathanmweller.com"
						>
							random quote
						</a>
					</p>
				</div>
				<Footer />
			</article>
		</div>
	</main>,
];

export default AboutPage;
