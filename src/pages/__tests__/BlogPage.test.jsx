import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import BlogPage from '../BlogPage';

it('renders correctly', () => {
	const tree = renderer.create(
		<MemoryRouter>
			<BlogPage />
		</MemoryRouter>,
	).toJSON();
	expect(tree).toMatchSnapshot();
});
