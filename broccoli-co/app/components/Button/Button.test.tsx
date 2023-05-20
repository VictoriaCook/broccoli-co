import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    it('should call onClick when the button is clicked', () => {
      // Arrange
      const onClickMock = jest.fn();
      const buttonText = 'Click Me';
      
      // Act
      const { getByText } = render(<Button onClick={onClickMock} buttonText={buttonText} />);
      const button = getByText(buttonText);
      fireEvent.click(button);
      
      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  