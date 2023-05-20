import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BodyText from './BodyText';

describe('BodyText component', () => {
    it('renders with correct styles and content', () => {
      const testContent = 'This is a test.';
      const { getByText } = render(<BodyText>{testContent}</BodyText>);
    
      const bodyTextElement = screen.getByText(testContent);
      expect(bodyTextElement).toBeInTheDocument();
      expect(bodyTextElement).toHaveClass('bodyTextStyles');
    });
  });