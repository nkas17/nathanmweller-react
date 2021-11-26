import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import AboutPage from '../AboutPage';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    )

    .toJSON();
  expect(tree).toMatchSnapshot();
});
