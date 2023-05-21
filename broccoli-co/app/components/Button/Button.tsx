import React, { FC, MouseEvent } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonText: string;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={styles.buttonStyles} onClick={props.onClick}>{props.buttonText}</button>
  );
};

export default Button;
