import React from 'react';
import { render, screen, userEvent } from '../test-utils';
import '@testing-library/jest-dom';
import App from '../App';

test('App renders Home page and navigates to other pages then back to home', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent(/nathan m weller/i);
  userEvent.click(screen.getByText(/fed/i));
  expect(
    screen.getByRole('heading', { name: /front-end development/i }),
  ).toBeTruthy();
  userEvent.click(screen.getAllByText(/about/i)[0]);
  expect(screen.getByRole('heading', { name: /about/i })).toBeTruthy();
  userEvent.click(screen.getByText(/home/i));
  expect(
    screen.getByRole('heading', { name: /nathan m weller/i }),
  ).toBeTruthy();
});
