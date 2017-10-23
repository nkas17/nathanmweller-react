import React from 'react';
import PropTypes from 'prop-types';

class BlogLanding extends React.PureComponent{
	render(){
		return(
			<p>Landing page for the blog, soon to display first 
				few sentences of each article to scroll through
			</p>
		);
	}
}

BlogLanding.propTypes = {
	blogIndex: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BlogLanding;
