import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InvitationSuccessModal from './InvitationSuccessModal';

describe('InvitationSuccessModal', () => {
  it('should render the modal when open prop is true', () => {
    const { getByText } = render(<InvitationSuccessModal open={true} onHide={() => {}} />);
    
    // Assert that modal is rendered
    expect(getByText('All done!')).toBeInTheDocument();
    expect(getByText('You will be one of the first to experience Broccoli & Co. when we launch.')).toBeInTheDocument();
    expect(getByText('OK')).toBeInTheDocument();
  });

  it('should call onHide function when OK button is clicked', () => {
    const onHideMock = jest.fn();
    const { getByText } = render(<InvitationSuccessModal open={true} onHide={onHideMock} />);
    const okButton = getByText('OK');

    // Simulate button click
    fireEvent.click(okButton);

    // Assert that onHide function is called
    expect(onHideMock).toHaveBeenCalled();
  });

  it('should not render the modal when open prop is false', () => {
    const { queryByText } = render(<InvitationSuccessModal open={false} onHide={() => {}} />);
    
    // Assert that modal is not rendered
    expect(queryByText('All done!')).toBeNull();
    expect(queryByText('You will be one of the first to experience Broccoli & Co. when we launch.')).toBeNull();
    expect(queryByText('OK')).toBeNull();
  });
});
