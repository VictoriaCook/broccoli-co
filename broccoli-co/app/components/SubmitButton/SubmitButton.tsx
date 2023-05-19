import React from 'react';

interface SubmitButtonProps {
  buttonText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  return (
    <div>
      <input type="submit" value={props.buttonText} />
    </div>
  );
};

export default SubmitButton;
