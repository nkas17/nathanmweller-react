import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import BlogHistory from '../components/BlogHistory';

const BlogPage = () => (
	[
		<Header key="blog-1" />,
		<main className="main flex-wrapper" key="blog-2">
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
				<Footer />
			</div>
		</main>,
	]
);

export default BlogPage;
