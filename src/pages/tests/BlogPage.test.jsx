import React from 'react';
import renderer from 'react-test-renderer';
import BlogPage from '../BlogPage';

it('renders correctly', () => {
	const tree = renderer.create(
		<BlogPage />,
	).toJSON();
	expect(tree).toMatchSnapshot();
});
