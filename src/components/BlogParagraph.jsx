import React from 'react';
import PropTypes from 'prop-types';

const BlogParagraph = ({ children }) => (
  <p className="article__paragraph">{children}</p>
);

BlogParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlogParagraph;
