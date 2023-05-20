import React from 'react';
import styles from './SubmitButton.module.css'

interface SubmitButtonProps {
  buttonText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  return (
    <div>
      <input className={styles.submitButtonStyles} type="submit" value={props.buttonText} />
    </div>
  );
};

export default SubmitButton;
