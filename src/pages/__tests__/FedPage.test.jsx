import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import FedPage from '../FedPage';

it('renders correctly', () => {
	const tree = renderer.create(
		<MemoryRouter>
			<FedPage />
		</MemoryRouter>,
	).toJSON();
	expect(tree).toMatchSnapshot();
});
