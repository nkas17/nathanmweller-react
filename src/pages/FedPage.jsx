import React from 'react';
import nathanmweller from '../imgs/nathanmweller.jpg';
import mdn from '../imgs/MDN_promoBanner_120x240px_v2.png';
import w3c from '../imgs/w3c.png';
import '../styles/fed.css';

const FedPage = () => (
	<main className="main flex-wrapper">
		<div className="flex-item main__flex-item">
			<header className="main__header">
				<h2 className="header header_size_large">front-end development
					<span className="dilbert">&nbsp;</span></h2>
			</header>
			<article className="article flex-wrapper">
				<div className="flex-item article__content article__flex-item">
					<header className="main__header article__header">
						<h3 className="header header_size_medium">resources</h3>
					</header>
					<p className="article__paragraph">
						MDN - <a className="link" href="https://developer.mozilla.org/en-US/">Mozilla Developer Network</a> is a fantastic resource for learning
						about the front-end -
					</p>
					<a className="link div-link" href="https://developer.mozilla.org/en-US/">
						<div>
							<blockquote className="article__blockquote">
								All parts of MDN (docs and the site itself) are created by an
								open community of developers. Please join us! ~ MDN homepage
							</blockquote>
						</div>
					</a>
					<p className="article__paragraph">
						<a className="link" href="https://frontendmasters.com/books/front-end-handbook/2017/">Front-end-handbook</a> is another great resource
						from frontendmasters -
					</p>
					<a className="link div-link" href="https://frontendmasters.com/books/front-end-handbook/2017/">
						<div>
							<blockquote className="article__blockquote">
								This is a guide that anyone could use to learn about the
								practice of front-end development. It broadly outlines and discusses
								the practice of front-end engineering ~ Cody Lindley
							</blockquote>
						</div>
					</a>
					<p className="article__paragraph">
						{"Why is today's front-end development so complex, it used to be so easy, just some html, a little jQuery and some css..."}
						<a className="link" href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f">how it feels</a> is a great
						article illustrating this.
					</p>
					<a className="link div-link" href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f">
						<div>
							<blockquote className="article__blockquote">
								Oh my, no one uses jQuery anymore. You should try learning
								React, it’s 2016. ~ Jose Aguinaga
							</blockquote>
						</div>
					</a>
					<p className="article__paragraph">
						Images on our sites are costing our users a lot of money...
						<a className="link" href="https://www.html5rocks.com/en/tutorials/speed/img-compression/">Image Compression for Web Developers</a>							can help us decide how to save our users money.
					</p>
					<a className="link div-link" href="https://www.html5rocks.com/en/tutorials/speed/img-compression/">
						<div>
							<blockquote className="article__blockquote">
								As images continue to be the largest part of webpage content,
								it’s critically important for web developers to take
								<em className="emphasis"> aggressive </em>
								control of their image sizes and quality in order to
								deliver a fastest loading, responsive site for their users.
								~ Colt McAnlis
							</blockquote>
						</div>
					</a>
				</div>
				<aside className="aside article__aside">
					<div className="promo flex-item aside__flex-item">
						<a className="link mdn-promo" href="https://developer.mozilla.org/en-US/">
							<img className="mdn-banner" src={mdn} alt="mdn" />
						</a>
						<hr className="hr" />
						<a className="link w3c-promo" href="https://www.w3.org/">
							<img className="w3c-banner" src={w3c} alt="w3c" />
						</a>
					</div>
				</aside>
				<footer className="footer flex-item">
					<div className="logo footer__logo">
						<img
							className="logo__image"
							width="200"
							height="200"
							src={nathanmweller}
							alt="nathan m weller"
						/>
						<p className="logo__description">husband,&nbsp;father,
							software&nbsp;architect, web&nbsp;developer, cook,
							photographer, fútbol player, gamer</p>
					</div>
				</footer>
			</article>
		</div>
	</main>
);

export default FedPage;
