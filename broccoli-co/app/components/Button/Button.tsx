import React, { FC, MouseEvent } from 'react';

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonText: string;
}

const Button: FC<ButtonProps> = (props) => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <button onClick={props.onClick}>{props.buttonText}</button>
  );
};

export default Button;
