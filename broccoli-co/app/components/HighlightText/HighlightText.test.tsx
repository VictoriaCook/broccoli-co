import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HighlightText from './HighlightText';

describe('HighlightText', () => {
  it('renders the text correctly', () => {
    const text = 'Hello, World!';
    const { getByText } = render(<HighlightText text={text} />);
    const textElement = getByText(text);
    
    expect(textElement).toBeInTheDocument();
  });

  it('has the correct CSS class', () => {
    const text = 'Hello, World!';
    const { container } = render(<HighlightText text={text} />);
    const spanElement = container.querySelector('span');

    expect(spanElement).toHaveClass('highlightTextStyles');
  });
});
