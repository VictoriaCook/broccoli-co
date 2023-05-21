import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubmitButton from './SubmitButton';

describe('SubmitButton', () => {
  it('renders button with correct text', () => {
    const buttonText = 'Submit';
    render(<SubmitButton buttonText={buttonText} />);
    
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });
});
