import React from 'react';
import PropTypes from 'prop-types';

const BlogHeader = ({ title, date, articleId }) => (
	<header id={articleId} className="main__header article__header flex-wrapper">
		<h3 className="header header_size_medium flex-item">{title}</h3>
		<h6 className="header header_size_small flex-item">
			{`${date} ~ nathanmweller`}
		</h6>
	</header>
);

BlogHeader.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	articleId: PropTypes.string.isRequired,
};
export default BlogHeader;
