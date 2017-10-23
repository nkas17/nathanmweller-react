import React from 'react';
import { Route } from 'react-router-dom';
import BlogLanding from '../components/BlogLanding';
import BlogArticle from '../components/BlogArticle';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import TableOfContents from '../components/TableOfContents';
import blogIndex from './blogs/blogIndex';
// import '../styles/blog.css';

const BlogPage = () => (
	[
		<Header key="blog-1" />,
		<main className="main flex-wrapper" key="blog-2">
			<div className="flex-item main__flex-item">
				<header className="main__header">
					<h2 id="blog" className="header header_size_large">
						blog<span className="dilbert">&nbsp;</span></h2>
				</header>
				<article className="article flex-wrapper">
					<div className="article__content flex-item article__flex-item">
						<Route
							exact
							path="/blog"
							render={props => (
								<BlogLanding
									{...props}
									blogIndex={blogIndex}
								/>
							)}
						/>
						<Route
							path="/blog/:articleId"
							render={props => (
								<BlogArticle
									{...props}
									blogIndex={blogIndex}
								/>
							)}
						/>
					</div>
					<SideBar
						additionalClass={'aside-blog'}
					>
						<TableOfContents
							contents={blogIndex}
							title={'Previous Articles'}
						/>
					</SideBar>
					<Footer />
				</article>
			</div>
		</main>,
	]
);

export default BlogPage;
