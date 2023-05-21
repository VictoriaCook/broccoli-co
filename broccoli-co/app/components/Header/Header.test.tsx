import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header component', () => {
    it('renders the Header component correctly', () => {
        const { getByText } = render(<Header />);
    });
      
    it('renders the Logo component within the Header correctly', () => {
        // Render the Header component
        const { getByText } = render(<Header />);
    
        // Find the logo element by its text content
        const logoElement = getByText('Broccoli & Co.');
    
        // Assert that the logo element is present in the rendered component
        expect(logoElement).toBeInTheDocument();
    });
});

