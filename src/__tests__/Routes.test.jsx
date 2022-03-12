import React from 'react';
import { render, screen } from '../test-utils';
import '@testing-library/jest-dom';
import Routes from '../App';

it('renders correctly', () => {
  render(<Routes />);
  expect(screen.getByRole('heading')).toHaveTextContent('nathan m weller');
});
