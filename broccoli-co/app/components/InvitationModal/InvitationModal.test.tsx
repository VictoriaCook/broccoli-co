import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InvitationModal from './InvitationModal';

describe('InvitationModal', () => {
    it('renders the modal when "open" prop is true', () => {
      const { getByText } = render(
        <InvitationModal open={true} onHide={() => {}} onSuccess={() => {}} />
      );
  
      expect(getByText('Request an invite')).toBeInTheDocument();
    });
  
    it('displays validation error when form is submitted with missing fields', () => {
      const { getByText } = render(
        <InvitationModal open={true} onHide={() => {}} onSuccess={() => {}} />
      );
  
      const submitButton = getByText('Send');
      fireEvent.click(submitButton);
  
      expect(getByText('Please complete all fields.')).toBeInTheDocument();
    });
  });