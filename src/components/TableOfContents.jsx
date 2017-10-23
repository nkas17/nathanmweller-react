import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';

/**
 * Idea here is to map over the contents and produce a table of contents
 * mpa over categories then map over each article
 * 
 * @param {*} param0 
 */
const TableOfContents = ({ contents, title }) => (
	<div className="table-of-contents">
		<header className="main__header article__header">
			<h3 className="header header_size_medium">{title}</h3>
		</header>
		{contents.categories.map(category => (
			<details key={category.id} className="details">
				<summary className="summary">{category.title}</summary>
				{category.articles.map(article => (
					<p key={article.id} className="details__paragraph text_size_small">
						<Link className="link" to={`/blog/${article.id}#${article.id}`}>
							{article.title}
						</Link>
					</p>
				))}
			</details>
		))}
	</div>
);

TableOfContents.propTypes = {
	contents: PropTypes.objectOf(PropTypes.any).isRequired,
	title: PropTypes.string.isRequired,
};
export default TableOfContents;
