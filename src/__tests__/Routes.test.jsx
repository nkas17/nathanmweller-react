import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Routes from '../Routes';

it('renders correctly', () => {
  render(<Routes />);
  expect(screen.getByRole('heading')).toHaveTextContent('nathan m weller');
});
