import React, { useState } from "react";
import { Modal } from "antd";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import { areEmailsEqual } from "../../utils/areEmailsEqual/areEmailsEqual";
import { isFullNameValid } from "../../utils/isFullNameValid/isFullNameValid";
import { isEmailValid } from "../../utils/isEmailValid/isEmailValid";
import styles from "./InvitationModal.module.css";

interface InvitationModalProps {
  open: boolean;
  onHide: () => void;
  onSuccess: () => void;
}

const InvitationModal: React.FC<InvitationModalProps> = ({
  open,
  onHide,
  onSuccess,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [validationError, setValidationError] = useState<{
    fullName?: string;
    email?: string;
    confirmEmail?: string;
  }>({});
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState("Send");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "fullName") {
      setFullName(inputValue);
    }
    if (inputType === "email") {
      setEmail(inputValue);
    }
    if (inputType === "confirmEmail") {
      setConfirmEmail(inputValue);
    }
  };

  const validateForm = () => {
    const errors: {
      fullName?: string;
      email?: string;
      confirmEmail?: string;
    } = {};

      if(!fullName || !isFullNameValid(fullName)) {
        errors.fullName = 'Your full name must be at least three letters.';
       }
  
       if(!email || !isEmailValid(email)) {
         errors.email = 'Please provide a valid email address';
       }
  
       if(!confirmEmail || !areEmailsEqual(email, confirmEmail)) {
         errors.confirmEmail = 'Emails do not match.';
       }
  
      return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();

    if (errors.email || errors.fullName || errors.confirmEmail) {
      setValidationError(errors);
      return;
    } else {
      setIsLoading("Sending, please wait...");
      try {
        const response = await fetch(
          "https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: fullName, email: email }),
          }
        );
  
        if (response.status === 200) {
          onSuccess();
          setFullName("");
          setEmail("");
          setConfirmEmail("");
          setValidationError({});
          setIsLoading("Send");
          setServerError("");
        } else {
          const text = await response.text();
          const json = JSON.parse(text);
          const serverErrorMessage = json.errorMessage;
          setIsLoading("Send");
          setServerError(serverErrorMessage);
        }
      } catch (error) {
        console.log(error);
        setIsLoading("Send");
        setServerError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <Modal
        className="modalStyles"
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        centered={true}
        width={350}
        open={open}
        footer={null}
        onCancel={onHide}
      >
        <Form onSubmit={handleSubmit} formHeading="Request an invite">
          <TextInput
            name="fullName"
            value={fullName}
            label="fullName"
            isVisuallyHidden={true}
            placeholder="Full name"
            onChange={handleInputChange}
          />
          {validationError.fullName && <p>{validationError.fullName}</p>}
          <TextInput
            name="email"
            value={email}
            label="email"
            isVisuallyHidden={true}
            placeholder="Email"
            onChange={handleInputChange}
          />
          {validationError.email && <p>{validationError.email}</p>}
          <TextInput
            name="confirmEmail"
            value={confirmEmail}
            isVisuallyHidden={true}
            label="confirmEmail"
            placeholder="Confirm email"
            onChange={handleInputChange}
          />
          {validationError.confirmEmail && <p>{validationError.confirmEmail}</p>}
          <SubmitButton buttonText={isLoading} />
          <p className={styles.serverErrorStyles}>{serverError}</p>
        </Form>
      </Modal>
    </>
  );
};

export default InvitationModal;
