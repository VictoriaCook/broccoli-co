import React from "react";
import styles from "./Form.module.css";

interface FormProps {
  onSubmit: (e: React.FormEvent) => Promise<void>;
  formHeading: string;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <form className={styles.formStyles} onSubmit={props.onSubmit}>
      <h2>{props.formHeading}</h2>
      {props.children}
    </form>
  );
};

export default Form;
