import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import Form from '../Form/Form';
import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import { areEmailsEqual } from '../../utils/areEmailsEqual/areEmailsEqual';
import { isFullNameValid } from '../../utils/isFullNameValid/isFullNameValid';
import { isEmailValid } from '../../utils/isEmailValid/isEmailValid';
import styles from './InvitationModal.module.css';

interface InvitationModalProps {
  open: boolean;
  onHide: () => void;
  onSuccess: () => void;
};

const InvitationModal: React.FC<InvitationModalProps> = ({ open, onHide, onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [validationError, setValidationError] = useState('');
  const [serverError, setServerError] = useState('');
  const [submitButtonText, setSubmitButtonText] = useState('Send');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'fullName') {
      setFullName(inputValue);
    }
    if (inputType === 'email') {
      setEmail(inputValue);
    }
    if (inputType === 'confirmEmail') {
      setConfirmEmail(inputValue);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !confirmEmail) {
      setValidationError('Please complete all fields.');
    } else if (!isFullNameValid(fullName)) {
      setValidationError('Your full name must be at least three letters. Please try again.');
    } else if (!isEmailValid(email)) {
      setValidationError('Please enter a valid email address.');
    } else if (!areEmailsEqual(email, confirmEmail)) {
      setValidationError('Emails do not match. Please try again.');
    } else {
      setSubmitButtonText('Sending, please wait...');
      try {
        const response = await fetch('https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: fullName, email: email }),
        });
        const text = await response.text();
        if (response.status === 200) {
          onSuccess();
        } else {
          setServerError(text);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleOk = () => {
    // setIsModalOpen(false);
  };

  const handleCancel = () => {
    // setIsModalOpen(false);
  };

  return (
    <>
      <Modal className="modalStyles" maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} open={open} footer={null} onOk={handleOk} onCancel={onHide}>
        <Form onSubmit={handleSubmit} formHeading="Request an invite">
          <p>{validationError}</p>
          <TextInput name="fullName" value={fullName} label="fullName" isVisuallyHidden={true} placeholder="Full name" onChange={handleInputChange} />
          <TextInput name="email" value={email} label="email" isVisuallyHidden={true} placeholder="Email" onChange={handleInputChange} />
          <TextInput name="confirmEmail" value={confirmEmail} isVisuallyHidden={true} label="confirmEmail" placeholder="Confirm email" onChange={handleInputChange} />
          <SubmitButton buttonText={submitButtonText} />
          <p className={styles.serverErrorStyles}>{serverError}</p>
        </Form>
      </Modal>
    </>
  );
};

export default InvitationModal;
