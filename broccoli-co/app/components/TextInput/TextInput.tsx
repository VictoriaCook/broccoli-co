import React, { ChangeEvent } from 'react';
import styles from './TextInput.module.css';

interface Props {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const TextInput: React.FC<Props> = (props) => {
  return (
    <div>
      <label htmlFor={props.label}></label>
      <br />
      <input
        className={styles.textInputStyles}
        type="text"
        id={props.label}
        name={props.label}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextInput;
