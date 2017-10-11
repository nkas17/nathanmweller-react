import React from 'react';

const BlogHistory = () => (
	<div className="table-of-contents">
		<header className="main__header article__header">
			<h3 className="header header_size_medium">Table of Contents</h3>
		</header>
		<details className="details" open>
			<summary className="summary">Getting Started</summary>
			<p className="details__paragraph text_size_small">
				<a className="link" href="./#article-1">
					Creating This Website
				</a>
			</p>
			<p className="details__paragraph text_size_small">
				<a className="link" href="./#article-2">
					Creating This Website - More Technical
				</a>
			</p>
			<p className="details__paragraph text_size_small">
				<a className="link" href="./#article-3">
					Creating This Website - Finishing Phase 1
				</a>
			</p>
		</details>
		<details className="details">
			<summary className="summary">So I Chose React</summary>
			<p className="details__paragraph text_size_small">
				<a className="link" href="./soIChoseReact.html#article-1">
					What Does It Mean To Choose React
				</a>
			</p>
			<p className="details__paragraph text_size_small">
				<a className="link" href="./soIChoseReact-E2.html#article-1">
					Setting Up Our Development Environment
				</a>
			</p>
			<p className="details__paragraph text_size_small">
				<a className="link" href="./soIChoseReact-E3.html#article-1">
					Setting Up Our Development Environment - Enhanced
				</a>
			</p>
		</details>
	</div>
);

export default BlogHistory;
