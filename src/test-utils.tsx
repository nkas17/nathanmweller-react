import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react';

interface AllTheProvidersProps {
  children: any;
}
// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }: AllTheProvidersProps) => <>{children}</>;

const customRender = (ui: React.ReactElement, options: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';

// override render method
export { customRender as render };
