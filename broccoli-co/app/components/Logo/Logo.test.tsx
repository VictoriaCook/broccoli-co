import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './Logo';

it('renders the Logo component correctly', () => {
  const { getByText } = render(<Logo />);
  const logoElement = getByText('Broccoli & Co.');
  expect(logoElement).toBeInTheDocument();
});
