import React from 'react';
import { Modal } from 'antd';
import Button from '../Button/Button';

interface InvitationSuccessModalProps {
  open: boolean;
  onHide: () => void;
}

const InvitationSuccessModal: React.FC<InvitationSuccessModalProps> = ({ open, onHide }) => {
  return (
    <>
      <Modal title="Basic Modal" open={open} onOk={onHide} onCancel={onHide}>
        <div>
          <h2>All done!</h2>
          <p>You will be one of the first to experience Broccoli & Co. when we launch.</p>
          <Button buttonText="OK" onClick={onHide} />
        </div>
      </Modal>
    </>
  );
};

export default InvitationSuccessModal;
