import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import HomePage from '../HomePage';

it('renders correctly', () => {
	const tree = renderer
		.create(
			<MemoryRouter>
				<HomePage />
			</MemoryRouter>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
