import React from 'react';
import SideBar from '../components/SideBar';
import BlogHistory from '../components/BlogHistory';
import mdn from '../imgs/MDN_promoBanner_120x240px_v2.png';
import w3c from '../imgs/w3c.png';
import '../styles/blog.css';

const BlogPage = () => (
	<main className="main flex-wrapper">
		<div className="flex-item main__flex-item">
			<header className="main__header">
				<h2 className="header header_size_large">blog<span className="dilbert">&nbsp;</span></h2>
			</header>
			<article className="article flex-wrapper">
				<div className="article__content flex-item article__flex-item">
					<div className="blog-entry">
						a blog
					</div>
				</div>
				<SideBar>
					<BlogHistory />
				</SideBar>
			</article>
		</div>
	</main>
);

export default BlogPage;
