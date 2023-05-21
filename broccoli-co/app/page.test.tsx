import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './page';

describe('HomePage', () => {
  it('renders the page components', () => {
    render(<HomePage />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument();

    expect(screen.queryByText((content: any, element: any) => {
      const hasText = (text: string) => element.textContent.replace(/\s/g, ' ').trim() === text;
      const titleText = 'A better way to enjoy every day';
  
      return hasText(titleText);
    })).toBeInTheDocument();
  

    expect(screen.getByText((content: any, element: any) => {
        const hasText = (text: string) => element.textContent === text;
        const bodyText = 'Be the first to know when we launch.';
  
        return hasText(bodyText);
      })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Request an invite' })).toBeInTheDocument();

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('opens and closes the invitation modal', () => {
    render(<HomePage />);

    fireEvent.click(screen.getByRole('button', { name: 'Request an invite' }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens the success modal after successful POST request', () => {
    render(<HomePage />);

    fireEvent.click(screen.getByRole('button', { name: 'Request an invite' }));

    fireEvent.click(screen.getByRole('button', { name: 'Send' }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
