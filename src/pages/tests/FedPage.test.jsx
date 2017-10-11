import React from 'react';
import renderer from 'react-test-renderer';
import FedPage from '../FedPage';

it('renders correctly', () => {
	const tree = renderer.create(
		<FedPage />,
	).toJSON();
	expect(tree).toMatchSnapshot();
});
