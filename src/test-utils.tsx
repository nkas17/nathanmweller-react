import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import uE from '@testing-library/user-event';

interface AllTheProvidersProps {
  children: any;
}
// eslint-disable-next-line react/prop-types
function AllTheProviders({ children }: AllTheProvidersProps) {
  return <div>{children}</div>;
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';

// override render method
export { customRender as render };
export { uE as userEvent };
