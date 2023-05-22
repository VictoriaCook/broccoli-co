import React, { ChangeEvent } from "react";
import styles from "./TextInput.module.css";

interface Props {
  label: string;
  name: string;
  value: string;
  isVisuallyHidden?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage?: any;
}

const TextInput: React.FC<Props> = (props) => {
  const id = `id_${props.name}`;
  const labelClassName = props.isVisuallyHidden ? "h-hide-visually" : "";

  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {props.label}
      </label>
      <input
        className={styles.textInputStyles}
        type="text"
        id={id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextInput;
