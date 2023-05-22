import React from "react";
import { Modal } from "antd";
import Button from "../Button/Button";
import styles from "./InvitationSuccessModal.module.css";

interface InvitationSuccessModalProps {
  open: boolean;
  onHide: () => void;
}

const InvitationSuccessModal: React.FC<InvitationSuccessModalProps> = ({
  open,
  onHide,
}) => {
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
        <div className={styles.successDivStyles}>
          <h2 className={styles.successH2Styles}>All done!</h2>
          <p className={styles.successTextStyles}>
            You will be one of the first to experience Broccoli & Co. when we
            launch.
          </p>
          <Button buttonText="OK" onClick={onHide} />
        </div>
      </Modal>
    </>
  );
};

export default InvitationSuccessModal;
